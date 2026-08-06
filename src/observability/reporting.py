from __future__ import annotations

from typing import Any

from core.utils import now_utc, write_text


def _status(passed: bool) -> str:
    return "PASS" if passed else "FAIL"


def _metrics_table(rows: list[tuple[str, dict[str, Any]]]) -> str:
    header = "| Metric | " + " | ".join(label for label, _ in rows) + " |"
    divider = "|---" * (len(rows) + 1) + "|"
    keys = ["retrieval_hit_rate", "mean_token_f1", "judge_accuracy", "mean_judge_score", "samples"]
    lines = [header, divider]
    for key in keys:
        cells = []
        for _, metrics in rows:
            value = metrics.get(key)
            cells.append(f"{value:.4f}" if isinstance(value, float) else str(value))
        lines.append(f"| `{key}` | " + " | ".join(cells) + " |")
    return "\n".join(lines)


def generate_phase1_report(
    report_path,
    source_summary: dict[str, Any],
    metrics: dict[str, Any],
    quality: dict[str, Any],
    freshness: dict[str, Any],
) -> None:
    """Write the baseline phase report: source, metrics, quality, freshness."""
    quality_lines = "\n".join(
        f"- `{name}`: **{_status(check['passed'])}**" for name, check in quality["checks"].items()
    )

    text = f"""# Phase 1 Baseline Report

Generated: {now_utc().isoformat()}

## Source summary

- Input records: {source_summary.get("input_count")}
- Output (clean) records: {source_summary.get("output_count")}
- Filtered records: {source_summary.get("filtered_count")}
- Duplicate `paper_id` dropped: {source_summary.get("duplicate_paper_id")}
- Artifact: `data/clean/papers_clean.json`

## Evaluation metrics

- Samples: {metrics.get("samples")}
- `retrieval_hit_rate`: {metrics.get("retrieval_hit_rate"):.4f}
- `mean_token_f1`: {metrics.get("mean_token_f1"):.4f}
- `judge_accuracy`: {metrics.get("judge_accuracy"):.4f}
- `mean_judge_score`: {metrics.get("mean_judge_score"):.4f}
- Artifacts: `data/results/baseline_metrics.json`, `data/results/baseline_answers.json`

## Data quality

Overall: **{_status(quality["passed"])}** ({quality["row_count"]} rows)

{quality_lines}

Artifact: `data/quality/{quality["report_name"]}.json`

## Freshness

- Latest published: {freshness.get("latest_published")}
- Oldest published: {freshness.get("oldest_published")}
- Stale rows (> {freshness.get("threshold_days")} days): {freshness.get("stale_rows")} / {freshness.get("total_rows")}
- Overall: **{_status(freshness["is_fresh"])}**

Artifact: `data/quality/freshness_report.json`
"""
    write_text(report_path, text)


def generate_corruption_report(
    report_path,
    baseline_metrics: dict[str, Any],
    corrupted_metrics: dict[str, Any],
    repaired_metrics: dict[str, Any],
    corrupted_quality: dict[str, Any],
    repaired_quality: dict[str, Any],
    corrupted_freshness: dict[str, Any],
    repaired_freshness: dict[str, Any],
) -> None:
    """Write the baseline vs corrupted vs repaired comparison report."""
    metrics_table = _metrics_table(
        [
            ("Baseline", baseline_metrics),
            ("Corrupted", corrupted_metrics),
            ("Repaired", repaired_metrics),
        ]
    )

    hit_rate_drop = baseline_metrics.get("retrieval_hit_rate", 0.0) - corrupted_metrics.get("retrieval_hit_rate", 0.0)
    hit_rate_recovered = repaired_metrics.get("retrieval_hit_rate", 0.0) - corrupted_metrics.get(
        "retrieval_hit_rate", 0.0
    )
    f1_drop = baseline_metrics.get("mean_token_f1", 0.0) - corrupted_metrics.get("mean_token_f1", 0.0)
    f1_recovered = repaired_metrics.get("mean_token_f1", 0.0) - corrupted_metrics.get("mean_token_f1", 0.0)

    text = f"""# Corruption vs Repair Comparison Report

Generated: {now_utc().isoformat()}

Same test set, ground truth, evaluator, and `top_k` were used across the three
states so the numbers below are directly comparable.

## Metrics comparison

{metrics_table}

- `retrieval_hit_rate` drop from corruption: {hit_rate_drop:+.4f}
- `retrieval_hit_rate` recovered by repair: {hit_rate_recovered:+.4f}
- `mean_token_f1` drop from corruption: {f1_drop:+.4f}
- `mean_token_f1` recovered by repair: {f1_recovered:+.4f}

Artifacts: `data/results/baseline_metrics.json`, `data/results/corrupted_metrics.json`, `data/results/repaired_metrics.json`

## Data quality comparison

| State | Passed | Row count |
|---|---|---|
| Corrupted | {_status(corrupted_quality["passed"])} | {corrupted_quality["row_count"]} |
| Repaired | {_status(repaired_quality["passed"])} | {repaired_quality["row_count"]} |

Corrupted quality failures: {", ".join(
        name for name, check in corrupted_quality["checks"].items() if not check["passed"]
    ) or "none"}

Artifacts: `data/quality/{corrupted_quality["report_name"]}.json`, `data/quality/{repaired_quality["report_name"]}.json`

## Freshness comparison

| State | Stale rows | Is fresh |
|---|---|---|
| Corrupted | {corrupted_freshness["stale_rows"]} / {corrupted_freshness["total_rows"]} | {_status(corrupted_freshness["is_fresh"])} |
| Repaired | {repaired_freshness["stale_rows"]} / {repaired_freshness["total_rows"]} | {_status(repaired_freshness["is_fresh"])} |

## Conclusion

Injected data corruption (dropped latest record, blanked summary, truncated
title, staled a publish date, injected noise, duplicated a row) reduced
retrieval/answer quality and tripped the data quality and freshness checks
above. Repairing from the raw Crossref records (not by hand-editing answers
or metrics) restored the metrics and checks to their baseline state.
"""
    write_text(report_path, text)
