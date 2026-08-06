# Artifact Contract

Tất cả role dùng path chuẩn từ `src/core/config.py`. Không tự đặt tên file khác khi chưa thống nhất lại với cả nhóm.

## Raw

| Artifact | Path | Owner tạo | Consumer |
|---|---|---|---|
| Raw API response | `data/raw/crossref_response.json` | Role 2 | Role 2, Role 3 |
| Raw parsed records | `data/raw/crossref_records.json` | Role 2 | Role 3, Role 1 |

## Clean

| Artifact | Path | Owner tạo | Consumer |
|---|---|---|---|
| Clean CSV | `data/clean/papers_clean.csv` | Role 3 | Role 4, Role 5 |
| Clean JSON | `data/clean/papers_clean.json` | Role 3 | Role 4, Role 5 |
| Corrupted CSV | `data/clean/papers_clean_corrupted.csv` | Role 3 | Role 4, Role 5 |
| Corrupted JSON | `data/clean/papers_clean_corrupted.json` | Role 3 | Role 4, Role 5 |
| Repaired CSV | `data/clean/papers_clean_repaired.csv` | Role 3 | Role 4, Role 5 |
| Repaired JSON | `data/clean/papers_clean_repaired.json` | Role 3 | Role 4, Role 5 |

## Index & Embeddings

| Artifact | Path | Owner tạo | Consumer |
|---|---|---|---|
| Chroma store | `data/chroma/` | Role 4 | Role 5 |
| Baseline embedding manifest | `data/embeddings/papers_embeddings.json` | Role 4 | Role 1, Role 5 |
| Corrupted embedding manifest | `data/embeddings/papers_embeddings_corrupted.json` | Role 4 | Role 1, Role 5 |
| Repaired embedding manifest | `data/embeddings/papers_embeddings_repaired.json` | Role 4 | Role 1, Role 5 |

Collection names:

- Baseline: `papers-baseline`
- Corrupted: `papers-corrupted`
- Repaired: `papers-repaired`

## Evaluation & Reports

| Artifact | Path | Owner tạo | Consumer |
|---|---|---|---|
| Test set | `data/eval/test_set.json` | Role 5 | Role 1, Role 4 |
| Baseline metrics | `data/results/baseline_metrics.json` | Role 5 | Role 1 |
| Baseline answers | `data/results/baseline_answers.json` | Role 5 | Role 1 |
| Corruption log | `data/results/corruption_log.json` | Role 3 | Role 1, Role 5 |
| Corrupted metrics | `data/results/corrupted_metrics.json` | Role 5 | Role 1 |
| Corrupted answers | `data/results/corrupted_answers.json` | Role 5 | Role 1 |
| Repaired metrics | `data/results/repaired_metrics.json` | Role 5 | Role 1 |
| Repaired answers | `data/results/repaired_answers.json` | Role 5 | Role 1 |
| Quality outputs | `data/quality/` | Role 5 | Role 1 |
| Freshness report | `data/quality/freshness_report.json` | Role 5 | Role 1 |
| Baseline report | `data/reports/phase1_report.md` | Role 5 | Role 1 |
| Comparison report | `data/reports/corruption_report.md` | Role 5 | Role 1 |

## Contract cần giữ khi so sánh

- Cùng `data/eval/test_set.json`.
- Cùng `ground_truth` và `ground_truth_doc_ids`.
- Cùng evaluator.
- Cùng `top_k`.
- Không sửa tay answers hoặc metrics.

