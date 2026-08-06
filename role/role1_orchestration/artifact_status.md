# Artifact Status

Role 1 cập nhật trạng thái artifact thật ở đây trước khi release.

| Artifact | Path | Owner | Trạng thái | Bằng chứng/ghi chú |
|---|---|---|---|---|
| Raw API response | `data/raw/crossref_response.json` | Role 2 | DONE | File JSON tồn tại và chứa payload Crossref response. |
| Raw parsed records | `data/raw/crossref_records.json` | Role 2 | DONE | File JSON tồn tại và chứa records đã parse từ raw response. |
| Clean CSV | `data/clean/papers_clean.csv` | Role 3 | DONE | File CSV clean đã tồn tại ở path. |
| Clean JSON | `data/clean/papers_clean.json` | Role 3 | DONE | File JSON clean đã tồn tại ở path. |
| Baseline embeddings | `data/embeddings/papers_embeddings.json` | Role 4 | DONE | File embedding manifest tồn tại và có backend Chroma. |
| Test set | `data/eval/test_set.json` | Role 5 | DONE | Có file `test_set.json` với 24 câu hỏi từ cleaned dataframe. |
| Baseline metrics | `data/results/baseline_metrics.json` | Role 5 | DONE | `retrieval_hit_rate=1.0`, `mean_token_f1=1.0`, `judge_accuracy=1.0`. |
| Baseline answers | `data/results/baseline_answers.json` | Role 5 | DONE | Có file answers baseline. |
| Quality report | `data/quality/freshness_report.json` | Role 5 | DONE | Freshness report tồn tại, `is_fresh=true`. |
| Phase 1 report | `data/reports/phase1_report.md` | Role 5 | DONE | Report đã được sinh từ artifact thật trong `data/`. |
| Corruption log | `data/results/corruption_log.json` | Role 3 | DONE | File log tồn tại với `input_count/output_count` và events. |
| Corrupted metrics | `data/results/corrupted_metrics.json` | Role 5 | DONE | Có metrics cho trạng thái corrupted. |
| Repaired metrics | `data/results/repaired_metrics.json` | Role 5 | DONE | Có metrics cho trạng thái repaired. |
| Comparison report | `data/reports/corruption_report.md` | Role 5 | DONE | Report so sánh baseline/corrupted/repaired đã tồn tại. |

