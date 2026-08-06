# Evaluation Contract

## Input

- Clean artifacts từ Role 3.
- Chroma collections và embedding manifests từ Role 4.
- `data/eval/test_set.json`.

## Output

- `data/results/baseline_metrics.json`
- `data/results/baseline_answers.json`
- `data/results/corrupted_metrics.json`
- `data/results/corrupted_answers.json`
- `data/results/repaired_metrics.json`
- `data/results/repaired_answers.json`
- `data/quality/freshness_report.json`
- `data/reports/phase1_report.md`
- `data/reports/corruption_report.md`

## Invariants khi so sánh

- Cùng test set.
- Cùng ground truth.
- Cùng evaluator.
- Cùng `top_k`.
- Không sửa tay answers hoặc metrics.

## Quality checks bắt buộc

- Row count.
- `paper_id` unique.
- Missing title.
- Missing summary.
- Duplicate records.
- Freshness từ `published` hoặc `age_days`.

