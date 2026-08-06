from __future__ import annotations

import json

import pandas as pd

from core.config import load_settings
from core.utils import now_utc, read_json, write_csv, write_json
from evaluation.metrics import evaluate_pipeline
from ingestion.cleaning import build_clean_dataframe_with_report
from ingestion.corruption import corrupt_clean_dataframe
from ingestion.crossref import load_raw_records
from observability.quality import build_freshness_report, run_data_quality_checks
from observability.reporting import generate_corruption_report
from retrieval.index import LocalEmbeddingIndex


def _write_dataframe(df: pd.DataFrame, csv_path, json_path) -> None:
    write_csv(df, csv_path)
    write_json(json_path, df.to_dict(orient="records"))


def main() -> None:
    settings = load_settings()

    if not settings.paths.clean_json.exists() or not settings.paths.baseline_metrics.exists():
        raise FileNotFoundError(
            "Baseline artifacts are missing. Run `script/run_phase1.py` before the corruption flow."
        )
    if not settings.paths.eval_testset.exists():
        raise FileNotFoundError("Baseline test set is missing. Run `script/run_phase1.py` first.")

    baseline_metrics = read_json(settings.paths.baseline_metrics)
    clean_df = pd.DataFrame(read_json(settings.paths.clean_json))

    # 1. Corrupt the baseline dataset and log every injected event.
    corrupted_df = corrupt_clean_dataframe(clean_df, settings.paths.corruption_log)
    _write_dataframe(corrupted_df, settings.paths.corrupted_clean_csv, settings.paths.corrupted_clean_json)

    corrupted_index = LocalEmbeddingIndex.build(
        corrupted_df, settings, embeddings_output_path=settings.paths.corrupted_embeddings_json
    )
    corrupted_evaluation = evaluate_pipeline(
        settings=settings,
        index=corrupted_index,
        test_set_path=settings.paths.eval_testset,
        metrics_output_path=settings.paths.corrupted_metrics,
        answers_output_path=settings.paths.corrupted_answers,
    )
    corrupted_quality = run_data_quality_checks(corrupted_df, settings, report_name="corrupted_quality_report")
    corrupted_freshness = build_freshness_report(
        corrupted_df, settings, settings.paths.quality_dir / "freshness_report_corrupted.json"
    )

    # 2. Repair by re-cleaning from the trusted raw records, never by hand-editing.
    raw_records = load_raw_records(settings.paths.raw_records_json)
    repaired_df, _ = build_clean_dataframe_with_report(raw_records, now_utc())
    _write_dataframe(repaired_df, settings.paths.repaired_clean_csv, settings.paths.repaired_clean_json)

    repaired_index = LocalEmbeddingIndex.build(
        repaired_df, settings, embeddings_output_path=settings.paths.repaired_embeddings_json
    )
    repaired_evaluation = evaluate_pipeline(
        settings=settings,
        index=repaired_index,
        test_set_path=settings.paths.eval_testset,
        metrics_output_path=settings.paths.repaired_metrics,
        answers_output_path=settings.paths.repaired_answers,
    )
    repaired_quality = run_data_quality_checks(repaired_df, settings, report_name="repaired_quality_report")
    repaired_freshness = build_freshness_report(
        repaired_df, settings, settings.paths.quality_dir / "freshness_report_repaired.json"
    )

    generate_corruption_report(
        settings.paths.comparison_report,
        baseline_metrics=baseline_metrics,
        corrupted_metrics=corrupted_evaluation.summary,
        repaired_metrics=repaired_evaluation.summary,
        corrupted_quality=corrupted_quality,
        repaired_quality=repaired_quality,
        corrupted_freshness=corrupted_freshness,
        repaired_freshness=repaired_freshness,
    )

    print(
        json.dumps(
            {
                "baseline_retrieval_hit_rate": baseline_metrics.get("retrieval_hit_rate"),
                "corrupted_retrieval_hit_rate": corrupted_evaluation.summary.get("retrieval_hit_rate"),
                "repaired_retrieval_hit_rate": repaired_evaluation.summary.get("retrieval_hit_rate"),
            },
            indent=2,
            default=str,
        )
    )


if __name__ == "__main__":
    main()
