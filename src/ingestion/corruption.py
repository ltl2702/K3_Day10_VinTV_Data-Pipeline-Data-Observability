from __future__ import annotations

import argparse
from datetime import UTC, datetime, timedelta
import json
from pathlib import Path
from typing import Any

import pandas as pd

from core.config import load_settings
from core.utils import write_csv, write_json
from ingestion.cleaning import build_clean_dataframe_with_report
from ingestion.crossref import load_raw_records


def corrupt_clean_dataframe(df: pd.DataFrame, output_log_path: Path | str) -> pd.DataFrame:
    """Apply deterministic corruption scenarios and write an audit log."""
    corrupted = df.copy(deep=True)
    events: list[dict[str, Any]] = []
    if corrupted.empty:
        if output_log_path is not None:
            _write_corruption_log(output_log_path, len(df), 0, events)
        return corrupted

    latest_index = corrupted["published"].astype(str).idxmax()
    dropped_id = str(corrupted.at[latest_index, "paper_id"])
    corrupted = corrupted.drop(index=latest_index)
    events.append({"type": "drop_latest", "count": 1, "paper_ids": [dropped_id]})

    if not corrupted.empty:
        indexes = list(corrupted.index)
        blank_index = indexes[0]
        blank_id = str(corrupted.at[blank_index, "paper_id"])
        corrupted.at[blank_index, "summary"] = ""
        events.append({"type": "blank_summary", "count": 1, "paper_ids": [blank_id]})

        title_index = indexes[min(1, len(indexes) - 1)]
        title = str(corrupted.at[title_index, "title"])
        corrupted.at[title_index, "title"] = title[: max(1, len(title) // 2)]
        events.append(
            {"type": "truncate_title", "count": 1, "paper_ids": [str(corrupted.at[title_index, "paper_id"])]}
        )

        date_index = indexes[min(2, len(indexes) - 1)]
        old_date = pd.to_datetime(corrupted.at[date_index, "published"]).date()
        corrupted.at[date_index, "published"] = (old_date - timedelta(days=365)).isoformat()
        corrupted.at[date_index, "age_days"] = int(corrupted.at[date_index, "age_days"]) + 365
        events.append(
            {"type": "age_published_date", "count": 1, "paper_ids": [str(corrupted.at[date_index, "paper_id"])]}
        )

        noise_index = indexes[min(3, len(indexes) - 1)]
        corrupted.at[noise_index, "summary"] = f"{corrupted.at[noise_index, 'summary']} irrelevant-noise-token"
        events.append(
            {"type": "inject_text_noise", "count": 1, "paper_ids": [str(corrupted.at[noise_index, "paper_id"])]}
        )

    if len(corrupted) > 1:
        duplicate = corrupted.iloc[[0]].copy()
        duplicate_id = str(duplicate.iloc[0]["paper_id"])
        corrupted = pd.concat([corrupted, duplicate], ignore_index=True)
        events.append({"type": "duplicate_row", "count": 1, "paper_ids": [duplicate_id]})

    corrupted["summary_chars"] = corrupted["summary"].fillna("").astype(str).str.len()
    corrupted["text_for_embedding"] = (
        corrupted["title"].fillna("").astype(str).str.strip()
        + "\n\n"
        + corrupted["summary"].fillna("").astype(str).str.strip()
    )
    corrupted = corrupted.reset_index(drop=True)
    if output_log_path is not None:
        _write_corruption_log(output_log_path, len(df), len(corrupted), events)
    return corrupted


def run_role3_pipeline(project_dir: Path, run_date: datetime) -> dict[str, Any]:
    """Create clean, corrupted, and repaired Role 3 artifacts from raw JSON."""
    settings = load_settings(project_dir)
    raw_path = settings.paths.raw_records_json
    if not raw_path.exists():
        raise FileNotFoundError(f"Role 2 raw artifact does not exist: {raw_path}")

    records = load_raw_records(raw_path)
    clean, cleaning_report = build_clean_dataframe_with_report(records, run_date)
    _validate_clean_dataframe(clean)
    _write_dataframe(clean, settings.paths.clean_csv, settings.paths.clean_json)

    # Keep the filesystem contract limited to the six declared data/clean files.
    corrupted = corrupt_clean_dataframe(clean, None)
    _write_dataframe(corrupted, settings.paths.corrupted_clean_csv, settings.paths.corrupted_clean_json)

    repaired, repair_report = build_clean_dataframe_with_report(records, run_date)
    _validate_clean_dataframe(repaired)
    _write_dataframe(repaired, settings.paths.repaired_clean_csv, settings.paths.repaired_clean_json)
    return {
        "raw_count": len(records),
        "clean_count": len(clean),
        "corrupted_count": len(corrupted),
        "repaired_count": len(repaired),
        "cleaning_report": cleaning_report,
        "repair_report": repair_report,
    }


def _validate_clean_dataframe(df: pd.DataFrame) -> None:
    if df["paper_id"].duplicated().any():
        raise ValueError("Clean dataset still contains duplicate paper_id values.")
    for column in ("paper_id", "title", "summary", "text_for_embedding"):
        if df[column].isna().any() or df[column].astype(str).str.strip().eq("").any():
            raise ValueError(f"Clean dataset contains empty required column: {column}")


def _write_dataframe(df: pd.DataFrame, csv_path: Path, json_path: Path) -> None:
    write_csv(df, csv_path)
    write_json(json_path, df.to_dict(orient="records"))


def _write_corruption_log(
    path: Path | str, input_count: int, output_count: int, events: list[dict[str, Any]]
) -> None:
    write_json(
        Path(path),
        {"input_count": input_count, "output_count": output_count, "events": events},
    )


def main() -> None:
    parser = argparse.ArgumentParser(description="Run the Role 3 cleaning, corruption, and repair pipeline.")
    parser.add_argument("--project-dir", type=Path, default=Path.cwd())
    parser.add_argument("--run-date", help="UTC run date in YYYY-MM-DD format (default: today).")
    args = parser.parse_args()
    run_date = (
        datetime.strptime(args.run_date, "%Y-%m-%d").replace(tzinfo=UTC)
        if args.run_date
        else datetime.now(UTC)
    )
    result = run_role3_pipeline(args.project_dir.resolve(), run_date)
    print(json.dumps(result, indent=2))


if __name__ == "__main__":
    main()
