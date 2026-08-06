from __future__ import annotations

from typing import Any

import pandas as pd

from core.utils import first_sentence, write_json

MIN_DOCUMENTS = 3
MAX_REPRESENTATIVE_PAPERS = 8


def _select_representative_rows(df: pd.DataFrame) -> pd.DataFrame:
    """Pick a spread of papers across the cleaned dataframe, not just the head."""
    sample_size = min(len(df), MAX_REPRESENTATIVE_PAPERS)
    step = max(1, len(df) // sample_size)
    indices = list(range(0, len(df), step))[:sample_size]
    return df.iloc[indices]


def _question_rows(row: pd.Series) -> list[dict[str, Any]]:
    title = row["title"]
    paper_id = row["paper_id"]
    rows: list[dict[str, Any]] = [
        {
            "question_type": "summary",
            "question": f"What is the paper '{title}' about? Answer in one sentence.",
            "ground_truth": first_sentence(row["summary"]),
        },
        {
            "question_type": "date",
            "question": f"When was the paper '{title}' published?",
            "ground_truth": row["published"],
        },
    ]
    if row["authors_joined"]:
        rows.append(
            {
                "question_type": "authors",
                "question": f"Who authored the paper '{title}'?",
                "ground_truth": row["authors_joined"],
            }
        )
    if row["categories_joined"]:
        rows.append(
            {
                "question_type": "categories",
                "question": f"What categories does the paper '{title}' belong to?",
                "ground_truth": row["categories_joined"],
            }
        )
    for item in rows:
        item["ground_truth_doc_ids"] = [paper_id]
    return rows


def build_test_set(df: pd.DataFrame, output_path) -> list[dict[str, Any]]:
    """Build an evaluation set from the cleaned dataframe.

    Each representative paper yields a summary and a date question (always
    verifiable, since ``summary``/``published`` are required clean columns),
    plus authors/categories questions only when that paper actually has them.
    """
    if len(df) < MIN_DOCUMENTS:
        raise ValueError(f"Need at least {MIN_DOCUMENTS} cleaned documents to build a test set, got {len(df)}.")

    test_set: list[dict[str, Any]] = []
    for _, row in _select_representative_rows(df).iterrows():
        for item in _question_rows(row):
            test_set.append(
                {
                    "id": f"eval-{len(test_set) + 1:03d}",
                    "question_type": item["question_type"],
                    "question": item["question"],
                    "ground_truth": item["ground_truth"],
                    "ground_truth_doc_ids": item["ground_truth_doc_ids"],
                }
            )

    write_json(output_path, test_set)
    return test_set
