# Role 4 - RAG, Embedding, Chroma và Agent

Owner: Man
Branch: `role4-rag-agent-index`

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

## Collection contract

- Baseline: `papers-baseline`
- Corrupted: `papers-corrupted`
- Repaired: `papers-repaired`

## Điều kiện bàn giao

- Embedding manifest đúng path contract.
- Chroma collection riêng cho baseline/corrupted/repaired.
- Search dùng cùng `top_k` khi Role 5 so sánh.
- Agent lookup truy vết được `paper_id` và source metadata.

