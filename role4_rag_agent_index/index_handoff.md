# Handoff Clean -> Index -> Evaluation

Role 4 cập nhật file này trước khi Role 5 chạy evaluation.

Owner: Phạm Mai Anh
Branch hiện đang checkout: `role4`
Branch theo phân công: `role4-rag-agent-index`
Ngày build index: 2026-08-06

## Input clean artifacts

| State | Path | Đã kiểm tra schema? | Ghi chú |
|---|---|---|---|
| Baseline | `data/clean/papers_clean.csv` | Có | 24 rows, 16 cols. Đủ 10 cột index cần. `paper_id` unique 24/24, `text_for_embedding` không rỗng 24/24. |
| Corrupted | `data/clean/papers_clean_corrupted.csv` | Có | 24 rows. Duplicate `paper_id` = 1 và summary rỗng = 2 là corruption có chủ đích của Role 3, index vẫn nạp được. |
| Repaired | `data/clean/papers_clean_repaired.csv` | Có | 24 rows, khớp baseline: `paper_id` unique 24/24, không có summary rỗng. |

Cột bắt buộc để `LocalEmbeddingIndex._build_documents` chạy được (thiếu 1 cột là `KeyError`):

`paper_id`, `title`, `text_for_embedding`, `published`, `authors_joined`, `categories_joined`, `summary`, `abs_url`, `pdf_url`.

## Index artifacts

| State | Collection | Embedding manifest | Trạng thái |
|---|---|---|---|
| Baseline | `papers-baseline` | `data/embeddings/papers_embeddings.json` | Hoàn thành, 24 documents |
| Corrupted | `papers-corrupted` | `data/embeddings/papers_embeddings_corrupted.json` | Hoàn thành, 24 documents |
| Repaired | `papers-repaired` | `data/embeddings/papers_embeddings_repaired.json` | Hoàn thành, 24 documents |

Chroma persistent store dùng chung: `data/chroma/`. Ba collection tách biệt nên
corruption flow không ghi đè baseline.

## Cấu hình đã chốt

| Hạng mục | Giá trị | Bằng chứng |
|---|---|---|
| Embedding model | `sentence-transformers/all-MiniLM-L6-v2` | `settings.embedding_model` |
| Vector dimension | 384 | `len(embed_query(...)) = 384` |
| Normalize | Có, `norm = 1.0` | `normalize_embeddings=True` trong `MiniLMEmbeddings` |
| Distance space | cosine | `configuration={"hnsw": {"space": "cosine"}}` |
| Score | `max(0, 1 - distance)` | `LocalEmbeddingIndex.search` |
| `top_k` | 4 | `settings.top_k`, dùng chung cho cả ba state |
| Document ID | `{paper_id}::{row_index}` | Cho phép duplicate `paper_id` cùng tồn tại trong corrupted |

## Metadata tối thiểu

Mỗi document mang đúng 8 field metadata. Đây là bộ tối thiểu vì `retrieval/qa.py`
lấy câu trả lời trực tiếp từ các field này.

| Field | Dùng cho |
|---|---|
| `paper_id` | Đối chiếu `ground_truth_doc_ids` khi tính retrieval hit |
| `title` | Hiển thị và exact-title lookup |
| `published` | Câu hỏi dạng date |
| `authors_joined` | Câu hỏi dạng authors |
| `categories_joined` | Câu hỏi dạng categories |
| `summary` | Câu hỏi dạng summary |
| `abs_url` | Truy vết nguồn |
| `pdf_url` | Truy vết nguồn |

## Validation

- [x] `paper_id` có trong metadata của 100% document ở cả ba state.
- [x] `title` có trong metadata; kiểm tra `metadata_ok=True` trên toàn bộ smoke query.
- [x] `content`/`text_for_embedding` không rỗng: 0/24 rỗng ở cả ba state.
- [x] Search trả về source metadata cần cho evaluator: đủ 8 field.
- [x] Ba collection không ghi đè nhau: sau khi build corrupted và repaired, `papers-baseline` vẫn giữ đúng 24 document.
- [x] `LocalEmbeddingIndex.load()` đọc lại manifest và khôi phục đúng collection name.

## Bằng chứng corruption đã vào index

So sánh document giữa `papers-baseline` và `papers-corrupted`:

| Tín hiệu | Kết quả |
|---|---|
| Document bị drop khỏi corrupted | `10.2118/234689-pa` |
| `paper_id` bị duplicate | `10.1007/s10278-026-02086-9` |
| Content khác baseline | 3 `paper_id` |
| Ví dụ blank summary | `10.1007/s10278-026-02086-9`: content 1349 -> 177 ký tự |
| Ví dụ noise injection | `10.3390/buildings16132637`: content 2338 -> 2361 ký tự |
| Ví dụ truncate | `10.21203/rs.3.rs-10178277/v1`: content 2052 -> 2000 ký tự |

Ảnh hưởng lên ranking khi truy vấn bằng chính title của document bị hỏng:

| Paper | Rank baseline | Rank corrupted |
|---|---:|---:|
| `10.1007/s10278-026-02086-9` | 4 | 3 |
| `10.21203/rs.3.rs-10178277/v1` | 1 | 1 |
| `10.3390/buildings16132637` | 1 | 1 |

## Lệnh Role 5 dùng để nạp index

```python
from core.config import load_settings
from retrieval.index import LocalEmbeddingIndex

settings = load_settings()
index = LocalEmbeddingIndex.load(settings=settings, embeddings_path=settings.paths.embeddings_json)
results = index.search(question, top_k=settings.top_k)
```

Đổi `embeddings_path` sang `corrupted_embeddings_json` hoặc `repaired_embeddings_json`
cho hai state còn lại. Giữ nguyên `top_k` khi so sánh ba trạng thái.

## Cảnh báo cho Role 5

- Corpus không có `subject` ở 24/24 record nên `categories_joined` = `uncategorized`
  toàn bộ. Không nên tạo câu hỏi dạng categories từ corpus này.
- Chỉ truyền đúng ba path manifest trong `src/core/config.py`. Nếu truyền path khác,
  `_derive_collection_name` fallback về `safe_slug(stem)` và Chroma sẽ reject tên
  ngắn hơn 3 ký tự.
- Search với query rỗng hoặc gibberish vẫn trả về đủ `top_k` kết quả, không raise.
  Evaluator phải dựa vào `paper_id` để chấm hit, không giả định search luôn đúng.
