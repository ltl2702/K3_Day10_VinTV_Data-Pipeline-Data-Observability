# Phase 1 Baseline Report

Generated: 2026-08-06T05:52:05.092281+00:00

## Source summary

- Input records: 24
- Output (clean) records: 24
- Filtered records: 0
- Duplicate `paper_id` dropped: 0
- Artifact: `data/clean/papers_clean.json`

## Evaluation metrics

- Samples: 24
- `retrieval_hit_rate`: 1.0000
- `mean_token_f1`: 1.0000
- `judge_accuracy`: 1.0000
- `mean_judge_score`: 5.0000
- Artifacts: `data/results/baseline_metrics.json`, `data/results/baseline_answers.json`

## Data quality

Overall: **PASS** (24 rows)

- `row_count_positive`: **PASS**
- `paper_id_not_null`: **PASS**
- `paper_id_unique`: **PASS**
- `title_not_null`: **PASS**
- `summary_not_null`: **PASS**
- `no_duplicate_records`: **PASS**
- `freshness`: **PASS**

Artifact: `data/quality/baseline_quality_report.json`

## Freshness

- Latest published: 2026-08-01
- Oldest published: 2026-02-12
- Stale rows (> 180 days): 0 / 24
- Overall: **PASS**

Artifact: `data/quality/freshness_report.json`
