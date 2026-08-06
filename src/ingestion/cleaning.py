from __future__ import annotations

from datetime import date, datetime
import json
from typing import Any

import pandas as pd

from ingestion.crossref import PaperRecord


def build_clean_dataframe(records: list[PaperRecord], run_date: datetime) -> pd.DataFrame:
    """TODO(student): clean raw records thanh dataframe san sang de embed.

    Pseudo-code:
    1. Normalize title, summary, authors, categories.
    2. Parse published/updated date.
    3. Tinh age_days.
    4. Tao cot helper:
       - authors_joined
       - categories_joined
       - summary_chars
       - text_for_embedding
    5. Drop duplicates va filter row xau.
    6. Sort dataframe va return.
    """
    rows: list[dict[str, Any]] = []
    for record in records:
        title = " ".join(str(record.title or "").split())
        summary = " ".join(str(record.summary or "").split())
        paper_id = " ".join(str(record.paper_id or "").split()).lower()
        if not paper_id or not title or not summary:
            continue
        published = _parse_date(record.published)
        if published is None:
            continue
        authors = _normalise_list(record.authors)
        categories = _normalise_list(record.categories)
        rows.append({
            "paper_id": paper_id, "title": title, "summary": summary,
            "authors": json.dumps(authors, ensure_ascii=True),
            "categories": json.dumps(categories, ensure_ascii=True),
            "primary_category": " ".join(str(record.primary_category or "").split()),
            "published": published.isoformat(),
            "updated": " ".join(str(record.updated or "").split()),
            "abs_url": str(record.abs_url or "").strip(), "pdf_url": str(record.pdf_url or "").strip(),
            "comment": " ".join(str(record.comment or "").split()),
            "age_days": max(0, (run_date.date() - published).days),
            "authors_joined": ", ".join(authors), "categories_joined": ", ".join(categories),
            "summary_chars": len(summary), "text_for_embedding": f"{title}\n\n{summary}",
        })
    columns = ["paper_id", "title", "summary", "authors", "categories", "primary_category", "published", "updated", "abs_url", "pdf_url", "comment", "age_days", "authors_joined", "categories_joined", "summary_chars", "text_for_embedding"]
    frame = pd.DataFrame(rows, columns=columns)
    if frame.empty:
        return frame
    frame = frame.drop_duplicates("paper_id", keep="first")
    return frame.sort_values(["published", "paper_id"], ascending=[False, True]).reset_index(drop=True)


def _normalise_list(values: Any) -> list[str]:
    if isinstance(values, str):
        values = [values]
    if not isinstance(values, (list, tuple)):
        return []
    result: list[str] = []
    for value in values:
        text = " ".join(str(value or "").split())
        if text and text.casefold() not in {item.casefold() for item in result}:
            result.append(text)
    return result


def _parse_date(value: Any) -> date | None:
    text = str(value or "").strip()
    if not text:
        return None
    parsed = pd.to_datetime(text, errors="coerce", utc=True)
    if pd.isna(parsed):
        return None
    return parsed.date()
