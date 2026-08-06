# Corruption vs Repair Comparison Report

Generated: 2026-08-06T05:52:56.744746+00:00

Same test set, ground truth, evaluator, and `top_k` were used across the three
states so the numbers below are directly comparable.

## Metrics comparison

| Metric | Baseline | Corrupted | Repaired |
|---|---|---|---|
| `retrieval_hit_rate` | 1.0000 | 0.8750 | 1.0000 |
| `mean_token_f1` | 1.0000 | 0.8391 | 1.0000 |
| `judge_accuracy` | 1.0000 | 0.8333 | 1.0000 |
| `mean_judge_score` | 5 | 4.3333 | 5 |
| `samples` | 24 | 24 | 24 |

- `retrieval_hit_rate` drop from corruption: +0.1250
- `retrieval_hit_rate` recovered by repair: +0.1250
- `mean_token_f1` drop from corruption: +0.1609
- `mean_token_f1` recovered by repair: +0.1609

Artifacts: `data/results/baseline_metrics.json`, `data/results/corrupted_metrics.json`, `data/results/repaired_metrics.json`

## Data quality comparison

| State | Passed | Row count |
|---|---|---|
| Corrupted | FAIL | 24 |
| Repaired | PASS | 24 |

Corrupted quality failures: paper_id_unique, summary_not_null, no_duplicate_records, freshness

Artifacts: `data/quality/corrupted_quality_report.json`, `data/quality/repaired_quality_report.json`

## Freshness comparison

| State | Stale rows | Is fresh |
|---|---|---|
| Corrupted | 1 / 24 | FAIL |
| Repaired | 0 / 24 | PASS |

## Conclusion

Injected data corruption (dropped latest record, blanked summary, truncated
title, staled a publish date, injected noise, duplicated a row) reduced
retrieval/answer quality and tripped the data quality and freshness checks
above. Repairing from the raw Crossref records (not by hand-editing answers
or metrics) restored the metrics and checks to their baseline state.
