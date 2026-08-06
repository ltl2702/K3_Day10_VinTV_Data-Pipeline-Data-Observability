from __future__ import annotations

from typing import Any

import pandas as pd

from core.config import Settings
from core.utils import now_utc, write_json


def run_data_quality_checks(df: pd.DataFrame, settings: Settings, report_name: str) -> dict[str, Any]:
    """Run a small set of data quality checks and persist the result.

    Checks mirror the evaluation contract: row count, ``paper_id`` null/unique,
    missing ``title``/``summary``, duplicate records, and freshness via
    ``age_days``. Each check reports a pass/fail plus the evidence count so a
    failure is auditable without re-reading the dataframe.
    """
    row_count = len(df)
    paper_id_missing = int(df["paper_id"].isna().sum() + (df["paper_id"].astype(str).str.strip() == "").sum())
    paper_id_duplicates = int(df["paper_id"].duplicated().sum())
    title_missing = int(df["title"].isna().sum() + (df["title"].astype(str).str.strip() == "").sum())
    summary_missing = int(df["summary"].isna().sum() + (df["summary"].astype(str).str.strip() == "").sum())
    duplicate_records = int(df.duplicated().sum())
    stale_rows = int((pd.to_numeric(df["age_days"], errors="coerce") > settings.freshness_threshold_days).sum())

    checks = {
        "row_count_positive": {"passed": row_count > 0, "row_count": row_count},
        "paper_id_not_null": {"passed": paper_id_missing == 0, "missing_count": paper_id_missing},
        "paper_id_unique": {"passed": paper_id_duplicates == 0, "duplicate_count": paper_id_duplicates},
        "title_not_null": {"passed": title_missing == 0, "missing_count": title_missing},
        "summary_not_null": {"passed": summary_missing == 0, "missing_count": summary_missing},
        "no_duplicate_records": {"passed": duplicate_records == 0, "duplicate_count": duplicate_records},
        "freshness": {
            "passed": stale_rows == 0,
            "stale_count": stale_rows,
            "threshold_days": settings.freshness_threshold_days,
        },
    }

    report = {
        "report_name": report_name,
        "generated_at": now_utc().isoformat(),
        "row_count": row_count,
        "checks": checks,
        "passed": all(check["passed"] for check in checks.values()),
    }
    write_json(settings.paths.quality_dir / f"{report_name}.json", report)
    return report


def build_freshness_report(df: pd.DataFrame, settings: Settings, report_path) -> dict[str, Any]:
    """Summarize freshness of the dataset from ``published``/``age_days``."""
    published = pd.to_datetime(df["published"], errors="coerce", utc=True)
    age_days = pd.to_numeric(df["age_days"], errors="coerce")
    stale_rows = int((age_days > settings.freshness_threshold_days).sum())
    total_rows = len(df)

    report = {
        "generated_at": now_utc().isoformat(),
        "latest_published": published.max().date().isoformat() if total_rows and published.notna().any() else None,
        "oldest_published": published.min().date().isoformat() if total_rows and published.notna().any() else None,
        "stale_rows": stale_rows,
        "total_rows": total_rows,
        "threshold_days": settings.freshness_threshold_days,
        "is_fresh": total_rows > 0 and stale_rows == 0,
    }
    write_json(report_path, report)
    return report
