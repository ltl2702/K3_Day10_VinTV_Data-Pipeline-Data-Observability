from __future__ import annotations

from dataclasses import asdict, dataclass
from datetime import UTC, datetime
from email.utils import parsedate_to_datetime
from html import unescape
from pathlib import Path
import random
import re
import time
from typing import Any

import requests

from core.config import Settings
from core.utils import compact_join, normalize_whitespace, read_json, write_json


CROSSREF_API_URL = "https://api.crossref.org/works"
RETRYABLE_STATUS_CODES = {429, 503}
MAX_ATTEMPTS = 5
REQUEST_TIMEOUT_SECONDS = 60


@dataclass(frozen=True)
class PaperRecord:
    paper_id: str
    title: str
    summary: str
    authors: list[str]
    categories: list[str]
    primary_category: str
    published: str
    updated: str
    abs_url: str
    pdf_url: str
    comment: str


def _clean_text(value: Any) -> str:
    """Convert a Crossref text value to normalized plain text."""
    if value is None:
        return ""
    if isinstance(value, list):
        value = value[0] if value else ""
    without_markup = re.sub(r"<[^>]+>", " ", unescape(str(value)))
    return normalize_whitespace(unescape(without_markup))


def _normalize_doi(value: Any) -> str:
    doi = normalize_whitespace(str(value or "")).lower()
    for prefix in ("https://doi.org/", "http://doi.org/", "http://dx.doi.org/", "doi:"):
        if doi.startswith(prefix):
            doi = doi[len(prefix) :].strip()
            break
    return doi if doi.startswith("10.") and "/" in doi else ""


def _date_from_parts(value: Any) -> str:
    if not isinstance(value, dict):
        return ""
    date_parts = value.get("date-parts")
    if not isinstance(date_parts, list) or not date_parts or not date_parts[0]:
        return ""
    parts = date_parts[0]
    try:
        year = int(parts[0])
        month = int(parts[1]) if len(parts) > 1 else 1
        day = int(parts[2]) if len(parts) > 2 else 1
        return datetime(year, month, day).date().isoformat()
    except (TypeError, ValueError, OverflowError):
        return ""


def _first_date(item: dict[str, Any], keys: tuple[str, ...]) -> str:
    for key in keys:
        parsed = _date_from_parts(item.get(key))
        if parsed:
            return parsed
    return ""


def _updated_at(item: dict[str, Any]) -> str:
    indexed = item.get("indexed")
    if isinstance(indexed, dict):
        date_time = normalize_whitespace(str(indexed.get("date-time") or ""))
        if date_time:
            return date_time
    return _first_date(item, ("deposited", "created"))


def _authors(item: dict[str, Any]) -> list[str]:
    parsed: list[str] = []
    source_authors = item.get("author")
    if not isinstance(source_authors, list):
        return parsed
    for author in source_authors:
        if not isinstance(author, dict):
            continue
        display_name = compact_join(
            [
                _clean_text(author.get("given")),
                _clean_text(author.get("family")),
                _clean_text(author.get("suffix")),
            ],
            sep=" ",
        )
        display_name = display_name or _clean_text(author.get("name"))
        if display_name and display_name not in parsed:
            parsed.append(display_name)
    return parsed


def _categories(item: dict[str, Any]) -> list[str]:
    subjects = item.get("subject")
    if not isinstance(subjects, list):
        return []
    parsed: list[str] = []
    seen: set[str] = set()
    for subject in subjects:
        cleaned = _clean_text(subject)
        key = cleaned.casefold()
        if cleaned and key not in seen:
            parsed.append(cleaned)
            seen.add(key)
    return parsed


def _pdf_url(item: dict[str, Any]) -> str:
    links = item.get("link")
    if not isinstance(links, list):
        return ""
    for link in links:
        if not isinstance(link, dict):
            continue
        content_type = str(link.get("content-type") or "").lower()
        url = normalize_whitespace(str(link.get("URL") or ""))
        if url and (content_type == "application/pdf" or url.lower().endswith(".pdf")):
            return url
    return ""


def _comment(item: dict[str, Any]) -> str:
    container_title = _clean_text(item.get("container-title"))
    publisher = _clean_text(item.get("publisher"))
    work_type = _clean_text(item.get("type"))
    return compact_join([container_title, publisher, work_type], sep=" | ")


def parse_crossref_payload(payload: dict) -> list[PaperRecord]:
    """Parse a Crossref list response into the ingestion contract.

    Records without a valid DOI or title are intentionally excluded. Duplicate
    DOI records are preserved here so the cleaning stage can count and report
    its deduplication decisions.
    """
    if not isinstance(payload, dict):
        raise ValueError("Crossref payload must be a JSON object.")
    message = payload.get("message")
    if not isinstance(message, dict):
        raise ValueError("Crossref payload is missing the 'message' object.")
    items = message.get("items")
    if not isinstance(items, list):
        raise ValueError("Crossref payload is missing the 'message.items' list.")

    records: list[PaperRecord] = []
    for item in items:
        if not isinstance(item, dict):
            continue
        paper_id = _normalize_doi(item.get("DOI"))
        title = _clean_text(item.get("title"))
        if not paper_id or not title:
            continue

        categories = _categories(item)
        abs_url = normalize_whitespace(str(item.get("URL") or "")) or f"https://doi.org/{paper_id}"
        records.append(
            PaperRecord(
                paper_id=paper_id,
                title=title,
                summary=_clean_text(item.get("abstract")),
                authors=_authors(item),
                categories=categories,
                primary_category=categories[0] if categories else "",
                published=_first_date(item, ("published", "published-print", "published-online", "issued")),
                updated=_updated_at(item),
                abs_url=abs_url,
                pdf_url=_pdf_url(item),
                comment=_comment(item),
            )
        )
    return records


def _retry_delay_seconds(response: requests.Response | None, attempt: int) -> float:
    retry_after = response.headers.get("Retry-After") if response is not None else None
    if retry_after:
        try:
            return min(60.0, max(0.0, float(retry_after)))
        except ValueError:
            try:
                retry_at = parsedate_to_datetime(retry_after)
                if retry_at.tzinfo is None:
                    retry_at = retry_at.replace(tzinfo=UTC)
                return min(60.0, max(0.0, (retry_at - datetime.now(UTC)).total_seconds()))
            except (TypeError, ValueError, OverflowError):
                pass
    return min(60.0, (2 ** (attempt - 1)) + random.uniform(0.0, 0.5))


def fetch_source_records(settings: Settings) -> list[PaperRecord]:
    """Fetch Crossref, persist the untouched JSON payload, then parse it."""
    params = {
        "query": settings.source_query,
        "filter": settings.source_filter,
        "rows": settings.max_results,
    }
    headers = {"Accept": "application/json"}

    response: requests.Response | None = None
    last_error: Exception | None = None
    with requests.Session() as session:
        for attempt in range(1, MAX_ATTEMPTS + 1):
            try:
                response = session.get(
                    CROSSREF_API_URL,
                    params=params,
                    headers=headers,
                    timeout=REQUEST_TIMEOUT_SECONDS,
                )
            except requests.RequestException as exc:
                last_error = exc
                response = getattr(exc, "response", None)
            else:
                if response.status_code not in RETRYABLE_STATUS_CODES:
                    # Configuration/client errors must fail immediately; retrying
                    # them would only repeat the same invalid request.
                    response.raise_for_status()
                    break
                last_error = requests.HTTPError(
                    f"Crossref returned retryable HTTP {response.status_code}.",
                    response=response,
                )

            if attempt == MAX_ATTEMPTS:
                raise RuntimeError(f"Crossref request failed after {MAX_ATTEMPTS} attempts.") from last_error
            time.sleep(_retry_delay_seconds(response, attempt))

    if response is None:
        raise RuntimeError("Crossref request completed without a response.") from last_error

    payload = response.json()
    # Raw source evidence must exist even when a later schema/parser step fails.
    write_json(settings.paths.raw_api_response, payload)
    records = parse_crossref_payload(payload)
    write_json(settings.paths.raw_records_json, [asdict(record) for record in records])
    return records


def load_raw_records(path: Path) -> list[PaperRecord]:
    """Load an offline parsed-record snapshot without contacting Crossref."""
    payload = read_json(path)
    if not isinstance(payload, list):
        raise ValueError(f"Raw record snapshot must contain a JSON list: {path}")

    records: list[PaperRecord] = []
    for index, item in enumerate(payload):
        if not isinstance(item, dict):
            raise ValueError(f"Raw record at index {index} is not a JSON object.")
        paper_id = _normalize_doi(item.get("paper_id"))
        title = normalize_whitespace(str(item.get("title") or ""))
        if not paper_id or not title:
            raise ValueError(f"Raw record at index {index} is missing a valid paper_id or title.")

        authors = item.get("authors", [])
        categories = item.get("categories", [])
        if not isinstance(authors, list) or not isinstance(categories, list):
            raise ValueError(f"Raw record at index {index} must store authors/categories as lists.")
        records.append(
            PaperRecord(
                paper_id=paper_id,
                title=title,
                summary=normalize_whitespace(str(item.get("summary") or "")),
                authors=[normalize_whitespace(str(value)) for value in authors if normalize_whitespace(str(value))],
                categories=[
                    normalize_whitespace(str(value)) for value in categories if normalize_whitespace(str(value))
                ],
                primary_category=normalize_whitespace(str(item.get("primary_category") or "")),
                published=normalize_whitespace(str(item.get("published") or "")),
                updated=normalize_whitespace(str(item.get("updated") or "")),
                abs_url=normalize_whitespace(str(item.get("abs_url") or "")),
                pdf_url=normalize_whitespace(str(item.get("pdf_url") or "")),
                comment=normalize_whitespace(str(item.get("comment") or "")),
            )
        )
    return records
