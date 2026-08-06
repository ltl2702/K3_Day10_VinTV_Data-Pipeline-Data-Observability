# Handoff Clean -> Index -> Evaluation

Role 4 cập nhật file này trước khi Role 5 chạy evaluation.

## Input clean artifacts

| State | Path | Đã kiểm tra schema? | Ghi chú |
|---|---|---|---|
| Baseline | `data/clean/papers_clean.csv` | TODO |  |
| Corrupted | `data/clean/papers_clean_corrupted.csv` | TODO |  |
| Repaired | `data/clean/papers_clean_repaired.csv` | TODO |  |

## Index artifacts

| State | Collection | Embedding manifest | Trạng thái |
|---|---|---|---|
| Baseline | `papers-baseline` | `data/embeddings/papers_embeddings.json` | TODO |
| Corrupted | `papers-corrupted` | `data/embeddings/papers_embeddings_corrupted.json` | TODO |
| Repaired | `papers-repaired` | `data/embeddings/papers_embeddings_repaired.json` | TODO |

## Validation

- [ ] `paper_id` unique trong index.
- [ ] `title` có trong metadata.
- [ ] `content`/`text_for_embedding` không rỗng.
- [ ] Search trả về source metadata cần cho evaluator.

