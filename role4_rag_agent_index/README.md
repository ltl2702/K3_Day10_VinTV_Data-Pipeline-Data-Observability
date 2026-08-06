# Role 4 - RAG, Embedding, Chroma và Agent

Owner: Man

Branch theo phân công: `role4-rag-agent-index`

Branch hiện đang checkout: `role4`

Trạng thái: Hoàn thành embedding, index và smoke test; đã bàn giao cho Role 5.

## Phạm vi

- MiniLM embedding.
- Chroma collection.
- Search, lookup và agent.

## File/chuyên mục phụ trách

- `src/retrieval/`
- `data/embeddings/`
- `data/chroma/`

## Việc cần làm trong mốc này

- Đọc vài `text_for_embedding` thật: đủ title/summary, không rỗng, không lặp vô ích.
- Xác nhận dataframe có `paper_id`, `title`, `content` và metadata index cần.
- Chuẩn bị config index từ clean path, chưa build collection final nếu clean schema chưa ổn định.

## Kết quả

| Hạng mục | Kết quả |
|---|---|
| Embedding model | `sentence-transformers/all-MiniLM-L6-v2`, 384 chiều, normalized |
| Distance space | cosine, score = `1 - distance` |
| `top_k` | 4, lấy từ `settings.top_k` |
| Collection | `papers-baseline`, `papers-corrupted`, `papers-repaired`, mỗi cái 24 document |
| Metadata | 8 field: `paper_id`, `title`, `published`, `authors_joined`, `categories_joined`, `summary`, `abs_url`, `pdf_url` |
| `text_for_embedding` | Không rỗng 0/24 ở cả ba state; format `Title: ... \| Authors: ... \| Summary: ...` |
| Smoke test | 3 query x 3 state, đều trả đủ 4 kết quả với metadata đầy đủ |
| Lookup | Theo `paper_id` và exact title đều HIT, không phân biệt hoa thường |

Chi tiết số liệu và bằng chứng nằm trong `index_handoff.md`, `search_smoke_test_template.md`
và `worklog.md`.

## Collection contract

- Baseline: `papers-baseline`
- Corrupted: `papers-corrupted`
- Repaired: `papers-repaired`

## Điều kiện bàn giao

- [x] Embedding manifest đúng path contract.
- [x] Chroma collection riêng cho baseline/corrupted/repaired.
- [x] Search dùng cùng `top_k` khi Role 5 so sánh.
- [x] Agent lookup truy vết được `paper_id` và source metadata.
