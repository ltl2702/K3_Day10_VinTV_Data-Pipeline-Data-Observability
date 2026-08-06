from __future__ import annotations

import json

from core.config import load_settings
from core.utils import now_utc, write_csv, write_json
from evaluation.metrics import evaluate_pipeline
from evaluation.testset import build_test_set
from ingestion.cleaning import build_clean_dataframe_with_report
from ingestion.crossref import fetch_source_records, load_raw_records
from observability.quality import build_freshness_report, run_data_quality_checks
from observability.reporting import generate_phase1_report
from retrieval.index import LocalEmbeddingIndex


def main() -> None:
    settings = load_settings()
    run_date = now_utc()

    if settings.refresh_source or not settings.paths.raw_records_json.exists():
        records = fetch_source_records(settings)
    else:
        records = load_raw_records(settings.paths.raw_records_json)

    clean_df, cleaning_report = build_clean_dataframe_with_report(records, run_date)
    write_csv(clean_df, settings.paths.clean_csv)
    write_json(settings.paths.clean_json, clean_df.to_dict(orient="records"))

    index = LocalEmbeddingIndex.build(clean_df, settings, embeddings_output_path=settings.paths.embeddings_json)

    if settings.refresh_test_set or not settings.paths.eval_testset.exists():
        build_test_set(clean_df, settings.paths.eval_testset)

    evaluation = evaluate_pipeline(
        settings=settings,
        index=index,
        test_set_path=settings.paths.eval_testset,
        metrics_output_path=settings.paths.baseline_metrics,
        answers_output_path=settings.paths.baseline_answers,
    )

    quality = run_data_quality_checks(clean_df, settings, report_name="baseline_quality_report")
    freshness = build_freshness_report(clean_df, settings, settings.paths.freshness_report)

    generate_phase1_report(
        settings.paths.baseline_report,
        source_summary=cleaning_report,
        metrics=evaluation.summary,
        quality=quality,
        freshness=freshness,
    )

    demo_answers = [
        {"question": item["question"], "answer": item["answer"]} for item in evaluation.answers[:3]
    ]
    write_json(settings.paths.demo_answers, demo_answers)

    print(json.dumps(evaluation.summary, indent=2, default=str))
    print(f"Demo questions answered: {len(demo_answers)}")


if __name__ == "__main__":
    main()
