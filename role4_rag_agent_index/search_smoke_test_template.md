# Search Smoke Test Template

Kết quả smoke test sau khi build index thật ngày 2026-08-06.

Owner: Man
Lệnh nạp index: `LocalEmbeddingIndex.load(settings=settings, embeddings_path=<manifest>)`

## Query 1: `agentic retrieval augmented generation for large language models`

| State | Collection | Query | `top_k` | Số kết quả | Có metadata? | Ghi chú |
|---|---|---|---:|---:|---|---|
| Baseline | `papers-baseline` | Query 1 | 4 | 4 | Có | Top hit `10.32473/flairs.39.1.141782`, score 0.6514 |
| Corrupted | `papers-corrupted` | Query 1 | 4 | 4 | Có | Top hit giống baseline, score 0.6514 |
| Repaired | `papers-repaired` | Query 1 | 4 | 4 | Có | Top hit giống baseline, score 0.6514 |

## Query 2: `hallucination and factual accuracy in RAG systems`

| State | Collection | Query | `top_k` | Số kết quả | Có metadata? | Ghi chú |
|---|---|---|---:|---:|---|---|
| Baseline | `papers-baseline` | Query 2 | 4 | 4 | Có | Top hit `10.54254/2753-8818/2026.dl34055`, score 0.4411 |
| Corrupted | `papers-corrupted` | Query 2 | 4 | 4 | Có | Top hit giống baseline, score 0.4411 |
| Repaired | `papers-repaired` | Query 2 | 4 | 4 | Có | Top hit giống baseline, score 0.4411 |

## Query 3: `vector database embedding retrieval evaluation`

| State | Collection | Query | `top_k` | Số kết quả | Có metadata? | Ghi chú |
|---|---|---|---:|---:|---|---|
| Baseline | `papers-baseline` | Query 3 | 4 | 4 | Có | Top hit `10.55041/isjem07213`, score 0.5488 |
| Corrupted | `papers-corrupted` | Query 3 | 4 | 4 | Có | Top hit giống baseline, score 0.5488 |
| Repaired | `papers-repaired` | Query 3 | 4 | 4 | Có | Top hit giống baseline, score 0.5488 |

Ghi chú: ba query trên là truy vấn theo chủ đề chung nên top hit không đổi giữa
các state. Corruption chỉ đụng vào 3 document cụ thể, vì vậy khác biệt chỉ lộ ra
khi truy vấn nhắm đúng document bị hỏng. Xem bảng ranking trong `index_handoff.md`.

## Lookup smoke test

| State | Kiểu lookup | Input | Kết quả |
|---|---|---|---|
| Baseline | `paper_id` | `paper_id` của document đầu tiên | HIT |
| Baseline | Exact title | `title` của document đầu tiên | HIT |
| Baseline | Title viết HOA | `title.upper()` | HIT, không phân biệt hoa thường |
| Baseline | DOI không tồn tại | `10.9999/x` | MISS, trả `None` đúng như mong đợi |
| Corrupted | `paper_id` / title | Document đầu tiên | HIT / HIT |
| Repaired | `paper_id` / title | Document đầu tiên | HIT / HIT |

## Robustness

| Trường hợp | Kết quả | Ghi chú |
|---|---|---|
| Query rỗng `""` | Trả 4 kết quả, không raise | Evaluator không được coi "có kết quả" là "đúng" |
| Query gibberish `%%%zzz??? qqqq` | Trả 4 kết quả, không raise | Chroma luôn trả `top_k` láng giềng gần nhất |
| Reload từ manifest | Khôi phục đúng collection và 24 document | `LocalEmbeddingIndex.load` PASS |
| Build lại corrupted/repaired | `papers-baseline` vẫn giữ 24 document | Không ghi đè baseline |
