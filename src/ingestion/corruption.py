from __future__ import annotations

import pandas as pd
import json
from datetime import timedelta
from pathlib import Path


def corrupt_clean_dataframe(df: pd.DataFrame, output_log_path) -> pd.DataFrame:
    """TODO(student): simulate nhieu dang data corruption.

    Pseudo-code:
    1. Drop mot so latest records.
    2. Blank summary o mot so dong.
    3. Inject noise vao text.
    4. Lam title bi truncate.
    5. Lam published date cu di.
    6. Add duplicate rows.
    7. Rebuild `text_for_embedding`.
    8. Ghi corruption log vao output_log_path.
    """
    corrupted = df.copy(deep=True)
    events: list[dict] = []
    if corrupted.empty:
        _write_log(output_log_path, len(df), len(corrupted), events)
        return corrupted
    # Keep mutations deterministic so comparisons and tests are reproducible.
    latest_index = corrupted.sort_values("published").index[-1]
    corrupted = corrupted.drop(index=latest_index)
    events.append({"type": "drop_latest", "count": 1, "paper_ids": [str(df.loc[latest_index, "paper_id"])]})
    if not corrupted.empty:
        idx = corrupted.index[0]
        corrupted.at[idx, "summary"] = ""
        corrupted.at[idx, "summary_chars"] = 0
        events.append({"type": "blank_summary", "count": 1, "paper_ids": [str(corrupted.at[idx, "paper_id"])]})
        corrupted.at[idx, "title"] = str(corrupted.at[idx, "title"])[: max(1, len(str(corrupted.at[idx, "title"])) // 2)]
        corrupted.at[idx, "published"] = (pd.to_datetime(corrupted.at[idx, "published"]) - timedelta(days=365)).date().isoformat()
        events.append({"type": "truncate_title_and_age_date", "count": 1, "paper_ids": [str(corrupted.at[idx, "paper_id"])]})
    if len(corrupted) > 1:
        dup = corrupted.iloc[[0]].copy()
        corrupted = pd.concat([corrupted, dup], ignore_index=True)
        events.append({"type": "duplicate_row", "count": 1, "paper_ids": [str(dup.iloc[0]["paper_id"])]})
    corrupted["text_for_embedding"] = corrupted["title"].fillna("").astype(str).str.strip() + "\n\n" + corrupted["summary"].fillna("").astype(str).str.strip()
    corrupted["summary_chars"] = corrupted["summary"].fillna("").astype(str).str.len()
    _write_log(output_log_path, len(df), len(corrupted), events)
    return corrupted.reset_index(drop=True)


def _write_log(path, input_count: int, output_count: int, events: list[dict]) -> None:
    payload = {"input_count": input_count, "output_count": output_count, "events": events}
    target = Path(path)
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(json.dumps(payload, indent=2), encoding="utf-8")
