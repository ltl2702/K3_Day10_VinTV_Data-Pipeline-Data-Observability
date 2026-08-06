from __future__ import annotations

from datetime import date, datetime
import json
from typing import Any

import pandas as pd

from ingestion.crossref import PaperRecord


CLEAN_COLUMNS = [
    "paper_id",
    "title",
    "summary",
    "authors",
    "categories",
    "primary_category",
    "published",
    "updated",
    "abs_url",
    "pdf_url",
    "comment",
    "age_days",
    "authors_joined",
    "categories_joined",
    "summary_chars",
    "text_for_embedding",
]


def build_clean_dataframe(records: list[PaperRecord], run_date: datetime) -> pd.DataFrame:
    """Normalize, validate, and deduplicate raw paper records."""
    dataframe, _ = build_clean_dataframe_with_report(records, run_date)
    return dataframe


def build_clean_dataframe_with_report(
    records: list[PaperRecord], run_date: datetime
) -> tuple[pd.DataFrame, dict[str, Any]]:
    """Build the clean dataset and return auditable filter/dedupe counts."""
    counts = {
        "input_count": len(records),
        "missing_paper_id": 0,
        "missing_title": 0,
        "missing_summary": 0,
        "invalid_published": 0,
        "duplicate_paper_id": 0,
    }
    rows: list[dict[str, Any]] = []

    for record in records:
        paper_id = _normalize_text(record.paper_id).lower()
        title = _normalize_text(record.title)
        summary = _normalize_text(record.summary)
        published = _parse_date(record.published)

        if not paper_id:
            counts["missing_paper_id"] += 1
            continue
        if not title:
            counts["missing_title"] += 1
            continue
        if not summary:
            counts["missing_summary"] += 1
            continue
        if published is None:
            counts["invalid_published"] += 1
            continue

        authors = _normalize_list(record.authors)
        categories = _normalize_list(record.categories)
        rows.append(
            {
                "paper_id": paper_id,
                "title": title,
                "summary": summary,
                "authors": json.dumps(authors, ensure_ascii=False),
                "categories": json.dumps(categories, ensure_ascii=False),
                "primary_category": _normalize_text(record.primary_category),
                "published": published.isoformat(),
                "updated": _normalize_date_or_text(record.updated),
                "abs_url": _normalize_text(record.abs_url),
                "pdf_url": _normalize_text(record.pdf_url),
                "comment": _normalize_text(record.comment),
                "age_days": max(0, (run_date.date() - published).days),
                "authors_joined": ", ".join(authors),
                "categories_joined": ", ".join(categories),
                "summary_chars": len(summary),
                "text_for_embedding": f"{title}\n\n{summary}",
            }
        )

    dataframe = pd.DataFrame(rows, columns=CLEAN_COLUMNS)
    if not dataframe.empty:
        duplicate_mask = dataframe.duplicated("paper_id", keep="first")
        counts["duplicate_paper_id"] = int(duplicate_mask.sum())
        dataframe = dataframe.loc[~duplicate_mask]
        dataframe = dataframe.sort_values(
            ["published", "paper_id"], ascending=[False, True]
        ).reset_index(drop=True)

    filtered_count = sum(counts[key] for key in counts if key not in {"input_count", "duplicate_paper_id"})
    report = {
        **counts,
        "filtered_count": filtered_count,
        "output_count": len(dataframe),
        "run_date": run_date.date().isoformat(),
        "rules": {
            "required_fields": ["paper_id", "title", "summary", "published"],
            "dedupe_key": "paper_id",
            "dedupe_keep": "first",
        },
    }
    return dataframe, report


def _normalize_text(value: Any) -> str:
    return " ".join(str(value or "").split())


def _normalize_list(values: Any) -> list[str]:
    if isinstance(values, str):
        values = [values]
    if not isinstance(values, (list, tuple)):
        return []
    result: list[str] = []
    seen: set[str] = set()
    for value in values:
        text = _normalize_text(value)
        key = text.casefold()
        if text and key not in seen:
            result.append(text)
            seen.add(key)
    return result


def _parse_date(value: Any) -> date | None:
    text = _normalize_text(value)
    if not text:
        return None
    parsed = pd.to_datetime(text, errors="coerce", utc=True)
    return None if pd.isna(parsed) else parsed.date()


def _normalize_date_or_text(value: Any) -> str:
    text = _normalize_text(value)
    if not text:
        return ""
    parsed = pd.to_datetime(text, errors="coerce", utc=True)
    return text if pd.isna(parsed) else parsed.isoformat()
