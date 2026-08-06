# Member Role Report - Day 10: Data Pipeline & Data Observability

## 1. Thông tin cá nhân

| Thông tin | Nội dung |
| --- | --- |
| Họ và tên | Phạm Mai Anh |
| MSSV | 2A202601681 |
| Khóa/Lớp | K3/D303 |
| Tên nhóm | VinTV |
| Vai trò chính | Role 4 - RAG & agent: MiniLM, Chroma, search, lookup |
| Branch phụ trách | `manh`, `role4` |
| Repository | https://github.com/ltl2702/K3_Day10_VinTV_Data-Pipeline-Data-Observability |
| Ngày hoàn thành | 06/08/2026 |

## 2. Vai trò và phạm vi công việc

### Phần việc sở hữu

| Module/deliverable | File/hàm phụ trách | Input nhận vào | Output bàn giao | Trạng thái |
| --- | --- | --- | --- | --- |
| Embedding backend | `src/retrieval/embeddings.py` (`MiniLMEmbeddings`) | `text_for_embedding` từ clean data của Role 3 | Vector 384 chiều đã normalize cho toàn bộ document | Hoàn thành |
| Vector index | `src/retrieval/index.py` (`LocalEmbeddingIndex.build`, `.load`) | `data/clean/papers_clean*.csv` | 3 Chroma collection trong `data/chroma/` + 3 embedding manifest trong `data/embeddings/` | Hoàn thành |
| Semantic search | `LocalEmbeddingIndex.search` | Câu hỏi từ test set của Role 5 | `SearchResult` gồm `paper_id`, `title`, `score`, `content`, `metadata` | Hoàn thành |
| Exact lookup | `LocalEmbeddingIndex.lookup` | `paper_id` hoặc exact title | Document đầy đủ metadata, `None` khi không khớp | Hoàn thành |
| Agent và QA layer | `src/retrieval/agent.py`, `src/retrieval/qa.py` | Index đã build + LLM provider từ `.env` | Agent 2 tool (`semantic_search_papers`, `lookup_paper`) và `answer_question` | Hoàn thành |
| Handoff index cho evaluation | `role4_rag_agent_index/index_handoff.md`, `search_smoke_test_template.md` | Clean artifact của Role 3 | Bảng collection name, manifest path, metadata contract và kết quả smoke test | Hoàn thành |

### Việc hỗ trợ ngoài phạm vi chính

| Hoạt động | Thành viên/module được hỗ trợ | Kết quả |
| --- | --- | --- |
| Kiểm tra schema clean trước khi build index | Role 3 | Xác nhận 3 file clean đủ 9 cột bắt buộc, 24 rows mỗi file, `text_for_embedding` không rỗng 0/24 |
| Cảnh báo corpus thiếu `categories` | Role 5 | Crossref không trả `subject` ở 24/24 record nên `categories_joined` = `uncategorized`; test set cuối cùng chỉ dùng 3 loại câu hỏi `summary`, `authors`, `date` |
| Cảnh báo search luôn trả đủ `top_k` | Role 5 | Chroma trả `top_k` láng giềng gần nhất kể cả với query rỗng hoặc gibberish, nên evaluator phải chấm hit bằng `paper_id` chứ không dựa vào việc "có kết quả" |
| Xác nhận corruption đã vào index | Role 3 và Role 5 | Đối chiếu document giữa baseline và corrupted: 1 document bị drop, 1 `paper_id` duplicate, 3 document đổi content |

## 3. Kết quả theo vai trò

| Nhiệm vụ đã thực hiện | File/hàm/artifact liên quan | Kết quả bàn giao | Cách xác minh |
| --- | --- | --- | --- |
| Đọc `LocalEmbeddingIndex`, `embeddings`, `agent` để chốt input/output | `src/retrieval/index.py`, `embeddings.py`, `agent.py`, `qa.py` | Danh sách 9 cột clean bắt buộc và 8 field metadata tối thiểu | Đối chiếu `_build_documents` với header của `papers_clean.csv` |
| Chốt embedding model | `src/retrieval/embeddings.py`, `settings.embedding_model` | `sentence-transformers/all-MiniLM-L6-v2`, 384 chiều, `normalize_embeddings=True` | Gọi `embed_query` và đo `len(vector) = 384`, norm = 1.0 |
| Chốt collection naming | `LocalEmbeddingIndex._derive_collection_name`, `src/core/config.py` | `papers-baseline`, `papers-corrupted`, `papers-repaired` | Gọi `_derive_collection_name` với 3 manifest path, kết quả khớp contract |
| Chốt metadata tối thiểu | `LocalEmbeddingIndex._build_documents` | 8 field: `paper_id`, `title`, `published`, `authors_joined`, `categories_joined`, `summary`, `abs_url`, `pdf_url` | Kiểm tra `metadata` của mọi `SearchResult` đủ 8/8 field |
| Build 3 index thật | `data/chroma/`, `data/embeddings/papers_embeddings*.json` | 3 collection, mỗi collection 24 document | `collection.count() == 24` cho cả 3 state |
| Chạy smoke query/lookup | `role4_rag_agent_index/search_smoke_test_template.md` | 3 query x 3 state, tất cả trả đủ 4 kết quả với metadata đầy đủ | Chạy `LocalEmbeddingIndex.load` + `search` + `lookup` trên cả 3 manifest |
| Xác minh isolation giữa 3 state | 3 embedding manifest | Baseline giữ nguyên 24 document sau khi build corrupted và repaired | So sánh `documents` của baseline và corrupted, `collection.count()` sau mỗi lần build |

Output cụ thể của Role 4 là 3 Chroma collection trong `data/chroma/`, 3 embedding manifest trong `data/embeddings/`, và bộ tài liệu bàn giao trong `role4_rag_agent_index/`. Role 5 dùng trực tiếp các manifest này để nạp index và chạy evaluation cho cả 3 trạng thái.

## 4. Giải thích phần kỹ thuật đã thực hiện

### Vấn đề cần giải quyết

Bài lab cần so sánh chất lượng agent trên 3 trạng thái dữ liệu bằng cùng một bộ câu hỏi. Điều đó đặt ra 3 yêu cầu cho tầng retrieval:

1. Embedding và search phải xác định (deterministic) để khác biệt metrics đến từ dữ liệu, không từ ngẫu nhiên của model.
2. Ba trạng thái phải nằm ở 3 collection riêng, nếu ghi đè lẫn nhau thì mất baseline và không còn gì để đối chiếu.
3. Index phải phản ánh trung thực chất lượng dữ liệu đầu vào. Nếu tầng index tự dedupe hay tự vá dữ liệu xấu, corruption sẽ bị che và Role 5 không đo được impact.

### Cách triển khai

Luồng phần tôi phụ trách:

```text
data/clean/papers_clean*.csv
  -> _build_documents (paper_id, title, content, metadata)
  -> MiniLMEmbeddings.embed_documents (384-dim, normalized)
  -> Chroma collection (cosine space) trong data/chroma/
  -> embedding manifest trong data/embeddings/
  -> search / lookup cho qa.py và agent.py
```

Các quyết định chính:

- Dùng `sentence-transformers/all-MiniLM-L6-v2` local, không gọi embedding API. Model chạy offline nên 3 lần build cho 3 state cho ra vector giống nhau trên cùng input.
- Dùng cosine space vì vector đã normalize; score quy về `max(0, 1 - distance)` để report dễ đọc.
- `top_k` lấy từ `settings.top_k = 4`, không hard-code trong search, để Role 5 so sánh 3 state với cùng một giá trị.
- Document ID dùng `{paper_id}::{row_index}` thay vì `paper_id`. Đây là điểm quan trọng: nếu dùng `paper_id` làm ID, Chroma sẽ ghi đè bản duplicate và kịch bản corruption "duplicate row" biến mất khỏi index.
- `lookup` chuẩn hóa lowercase cho cả `paper_id` và `title` nên tra cứu không phân biệt hoa thường; không khớp thì trả `None` thay vì đoán.

### Input, output và contract

| Thành phần | Mô tả |
| --- | --- |
| Input | `data/clean/papers_clean.csv`, `papers_clean_corrupted.csv`, `papers_clean_repaired.csv` từ Role 3 |
| Cột bắt buộc | `paper_id`, `title`, `text_for_embedding`, `published`, `authors_joined`, `categories_joined`, `summary`, `abs_url`, `pdf_url`; thiếu 1 cột là `KeyError` ở `_build_documents` |
| Output | `data/chroma/` (3 collection) và `data/embeddings/papers_embeddings{,_corrupted,_repaired}.json` |
| Module phụ thuộc | `src/core/config.py` cho path, collection name và `top_k` |
| Module sử dụng output | `src/retrieval/qa.py`, `src/retrieval/agent.py`, `src/evaluation/metrics.py`, `src/pipelines/phase1.py`, `src/pipelines/corruption_flow.py` |
| Điều kiện lỗi cần xử lý | Clean data thiếu cột; manifest trỏ tới `persist_path` không tồn tại; tên collection không hợp lệ với Chroma; collection bị ghi đè giữa các state |

### Cách xác minh

```powershell
# Build 3 collection từ clean artifact
python -c "import sys; sys.path.insert(0,'src'); from core.config import load_settings; from retrieval.index import LocalEmbeddingIndex; import pandas as pd; s=load_settings(); print(LocalEmbeddingIndex.build(df=pd.read_csv(s.paths.clean_csv), settings=s, embeddings_output_path=s.paths.embeddings_json).collection.count())"

# Smoke test search + lookup
python -c "import sys; sys.path.insert(0,'src'); from core.config import load_settings; from retrieval.index import LocalEmbeddingIndex; s=load_settings(); i=LocalEmbeddingIndex.load(settings=s, embeddings_path=s.paths.embeddings_json); r=i.search('agentic retrieval augmented generation', top_k=s.top_k); print(len(r), r[0].paper_id, round(r[0].score,4))"
```

- **Kết quả mong đợi:** 3 collection mỗi cái 24 document; search trả đủ `top_k = 4` kết quả kèm metadata đầy đủ; lookup theo `paper_id` và title đều khớp.
- **Kết quả thực tế:** Đạt. `papers-baseline` = 24, `papers-corrupted` = 24, `papers-repaired` = 24 document. Search 3 query x 3 state đều trả 4 kết quả, `metadata` đủ 8/8 field. Lookup theo `paper_id`, theo exact title và theo title viết HOA đều HIT; DOI không tồn tại trả `None`.
- **Artifact/log:** `data/chroma/`, `data/embeddings/papers_embeddings.json`, `papers_embeddings_corrupted.json`, `papers_embeddings_repaired.json`, `role4_rag_agent_index/search_smoke_test_template.md`.

### Kết quả smoke test

Toàn bộ chạy với `top_k = 4` lấy từ `settings.top_k`.

| Query | State | Số kết quả | Metadata đủ 8 field | Top score | Top hit |
| --- | --- | ---: | --- | ---: | --- |
| `agentic retrieval augmented generation for large language models` | Baseline | 4 | Có | 0.6514 | `10.32473/flairs.39.1.141782` |
| `agentic retrieval augmented generation for large language models` | Corrupted | 4 | Có | 0.6514 | `10.32473/flairs.39.1.141782` |
| `agentic retrieval augmented generation for large language models` | Repaired | 4 | Có | 0.6514 | `10.32473/flairs.39.1.141782` |
| `hallucination and factual accuracy in RAG systems` | Baseline | 4 | Có | 0.4411 | `10.54254/2753-8818/2026.dl34055` |
| `hallucination and factual accuracy in RAG systems` | Corrupted | 4 | Có | 0.4411 | `10.54254/2753-8818/2026.dl34055` |
| `hallucination and factual accuracy in RAG systems` | Repaired | 4 | Có | 0.4411 | `10.54254/2753-8818/2026.dl34055` |
| `vector database embedding retrieval evaluation` | Baseline | 4 | Có | 0.5488 | `10.55041/isjem07213` |
| `vector database embedding retrieval evaluation` | Corrupted | 4 | Có | 0.5488 | `10.55041/isjem07213` |
| `vector database embedding retrieval evaluation` | Repaired | 4 | Có | 0.5488 | `10.55041/isjem07213` |

Ba query trên là truy vấn theo chủ đề chung nên top hit không đổi giữa các state. Điều này hợp lý: corruption chỉ đụng 5 document cụ thể, và các document đó không phải top hit của 3 query này. Khác biệt chỉ lộ ra khi truy vấn nhắm đúng document bị hỏng, và đó chính là điều bộ test set của Role 5 làm được.

| Lookup | Input | Baseline | Corrupted | Repaired |
| --- | --- | --- | --- | --- |
| Theo `paper_id` | `paper_id` document đầu tiên | HIT | HIT | HIT |
| Theo exact title | `title` document đầu tiên | HIT | HIT | HIT |
| Theo title viết HOA | `title.upper()` | HIT | HIT | HIT |
| DOI không tồn tại | `10.9999/x` | `None` | `None` | `None` |

Kiểm tra isolation giữa 3 collection:

| Tín hiệu | Kết quả |
| --- | --- |
| `paper_id` unique trong baseline | 24 |
| `paper_id` unique trong corrupted | 23 |
| Document bị drop khỏi corrupted | `10.2118/234689-pa` |
| Document đổi content so với baseline | 3 `paper_id` |
| Baseline sau khi build corrupted và repaired | Vẫn đúng 24 document |

## 5. Một quyết định kỹ thuật quan trọng

- **Bối cảnh:** Cần chọn ID cho document khi nạp vào Chroma. Kịch bản corruption của Role 3 có "duplicate row" - nhân đôi bản ghi và giữ nguyên `paper_id`.
- **Các phương án đã cân nhắc:** (1) Dùng `paper_id` làm document ID vì nó là stable ID tự nhiên và dễ đối chiếu với `ground_truth_doc_ids`. (2) Dùng ID tổng hợp `{paper_id}::{row_index}` và để `paper_id` nằm trong metadata.
- **Phương án đã chọn:** Phương án 2, ID tổng hợp `{paper_id}::{row_index}`.
- **Lý do:** Chroma yêu cầu ID unique và sẽ ghi đè khi thêm bản trùng ID. Nếu dùng `paper_id` làm ID, bản duplicate thứ hai sẽ ghi đè bản thứ nhất, corrupted collection lại có đúng 23 document sạch và kịch bản "duplicate row" biến mất hoàn toàn khỏi index. Khi đó data quality check vẫn báo duplicate trên file CSV nhưng index thì không phản ánh, dẫn tới report không nhất quán với artifact. Dùng ID tổng hợp giữ được cả hai bản trong index, còn việc đối chiếu ground truth vẫn hoạt động vì `paper_id` nằm trong metadata và `SearchResult.paper_id` đọc từ đó.
- **Bằng chứng quyết định phù hợp:** `corruption_log.json` ghi `duplicate_row` trên `10.1007/s10278-026-02086-9`; corrupted collection có 24 document nhưng chỉ 23 `paper_id` unique, đúng như thiết kế. Quality check `paper_id_unique` báo `duplicate_count = 1`, khớp với những gì index nhìn thấy.

## 6. Một lỗi hoặc blocker đã xử lý

- **Triệu chứng/lỗi:** Sau khi pull code đã merge từ các thành viên khác, nạp index thất bại với `chromadb.errors.NotFoundError: Collection [papers-baseline] does not exist`, dù `chromadb.PersistentClient` liệt kê ra đúng 3 collection trong `data/chroma/`.
- **Lệnh hoặc bước tái hiện:** `LocalEmbeddingIndex.load(settings=settings, embeddings_path=settings.paths.embeddings_json)`.
- **Nguyên nhân gốc:** `LocalEmbeddingIndex.build` ghi `persist_path` vào manifest dưới dạng **đường dẫn tuyệt đối** (`index.py`, `"persist_path": str(persist_path)`), và `load` đọc lại y nguyên giá trị đó. Manifest trong repo được commit từ máy macOS của thành viên khác nên `persist_path` là `/Users/phuongngo/Code/VinUni/Labs/.../data/chroma`. Trên máy Windows, `PersistentClient` mở một store rỗng ở đường dẫn không tồn tại đó rồi báo không tìm thấy collection, chứ không phải collection bị mất.
- **Cách xử lý:** Xóa toàn bộ collection cũ trong `data/chroma/` rồi rebuild cả 3 state từ chính clean artifact của repo hiện tại, để manifest ghi lại `persist_path` trỏ đúng vào `data/chroma/` của máy đang chạy.
- **Cách xác minh sau khi sửa:** Kiểm tra `persist_path` của cả 3 manifest có `exists=True` và nằm trong repo; nạp lại cả 3 index và chạy smoke test: 3 collection x 24 document, search trả đủ 4 kết quả, lookup HIT, baseline không bị ghi đè.
- **Điều học được:** Embedding manifest là artifact được commit nên không được chứa đường dẫn tuyệt đối. Cách sửa gốc là lưu `persist_path` tương đối so với project root rồi resolve lại khi `load`. Vì `src/retrieval/index.py` là code starter dùng chung, tôi ghi lại thành cảnh báo trong `index_handoff.md`: bất cứ ai clone repo về máy khác đều phải rebuild index trước khi chạy evaluation, không được dùng lại manifest đã commit.

## 7. Hiểu biết về luồng end-to-end

1. Dữ liệu đi từ Crossref API vào `data/raw/`, sau đó được parse thành raw records. Cleaning chuẩn hóa title, summary, authors, categories, published date, dedupe theo stable ID, tính `age_days` và tạo `text_for_embedding`. Phần tôi phụ trách nhận clean data, đổi `text_for_embedding` thành vector 384 chiều bằng MiniLM, nạp vào Chroma cùng 8 field metadata, rồi cung cấp `search` và `lookup` cho `qa.py` và `agent.py` trả lời câu hỏi.
2. Evaluation set chứa `question`, `ground_truth` và `ground_truth_doc_ids`. Evaluator so `retrieved_doc_ids` (lấy từ `SearchResult.paper_id`, tức từ metadata của index) với `ground_truth_doc_ids` để tính `retrieval_hit_rate`, và so nội dung câu trả lời với ground truth để tính `mean_token_f1` cùng điểm của LLM judge.
3. Quality checks đo row count, `paper_id` not null và unique, missing title/summary và duplicate. Freshness monitoring dựa trên `published` và `age_days` so với ngưỡng 180 ngày.
4. Phải dùng cùng test set, cùng ground truth, cùng evaluator và cùng `top_k` cho cả 3 trạng thái. Nếu đổi bất kỳ yếu tố nào thì thay đổi metrics không còn phản ánh tác động của chất lượng dữ liệu. Đây là lý do tôi lấy `top_k` từ config chung chứ không hard-code trong `search`.
5. Repair được xem là thành công khi artifact repaired được tạo lại từ raw records đáng tin, quality/freshness signal phục hồi, và metrics quay lại mức baseline. Trong bài này repaired đạt đúng mức baseline trên cả 4 metric.

## 8. Phân tích kết quả

### Metrics chính

Số liệu lấy từ `data/results/baseline_metrics.json`, `corrupted_metrics.json`, `repaired_metrics.json`, `data/quality/*_quality_report.json` và `data/quality/freshness_report*.json`. Cả 3 state dùng cùng test set 24 câu trong `data/eval/test_set.json` và cùng `top_k = 4`.

| Metric/signal | Baseline | Corrupted | Repaired | Nhận xét của cá nhân |
| --- | ---: | ---: | ---: | --- |
| `retrieval_hit_rate` | 1.0000 | 0.8750 | 1.0000 | Giảm 0.125, tương ứng 3/24 câu mất document đúng. Khớp với việc corrupted collection chỉ còn 23 `paper_id` unique và 3 document bị đổi content. |
| `mean_token_f1` | 1.0000 | 0.8391 | 1.0000 | Giảm 0.1609. Blank summary khiến câu trả lời dạng `summary` không còn nội dung để trích. |
| `judge_accuracy` | 1.0000 | 0.8333 | 1.0000 | Giảm 0.1667, tức 4/24 câu bị judge đánh là sai. |
| `mean_judge_score` | 5.0000 | 4.3333 | 5.0000 | Giảm 0.6667 điểm trên thang 1-5. |
| Quality checks | PASS toàn bộ; `paper_id_unique` duplicate = 0, `summary_not_null` missing = 0 | FAIL; `paper_id_unique` duplicate = 1, `summary_not_null` missing = 2 | PASS toàn bộ; duplicate = 0, missing = 0 | Quality check bắt được đúng 2 kịch bản duplicate và blank summary trước khi metrics agent giảm. |
| Freshness status | `is_fresh = true`, stale 0/24, latest 2026-08-01 | `is_fresh = false`, stale 1/24, latest tụt về 2026-07-13, oldest tụt về 2025-07-03 | `is_fresh = true`, stale 0/24, latest 2026-08-01 | Freshness phát hiện cả `drop_latest` (mất bài mới nhất) và `age_published_date` (đẩy ngày về quá khứ). |

### Kết luận từ số liệu

1. `[Data corruption: drop_latest + blank_summary + truncate_title + inject_text_noise + duplicate_row + age_published_date trên 5 paper_id]` -> `[quality check FAIL ở paper_id_unique và summary_not_null; freshness chuyển is_fresh = false, latest_published tụt từ 2026-08-01 về 2026-07-13]` -> `[retrieval_hit_rate 1.0 -> 0.875; mean_token_f1 1.0 -> 0.8391; judge_accuracy 1.0 -> 0.8333; mean_judge_score 5.0 -> 4.3333]`.
2. `[Repair action: chạy lại cleaning từ data/raw/crossref_records.json, không sửa tay answers hoặc metrics]` -> `[quality check PASS trở lại toàn bộ; freshness is_fresh = true, stale 0/24, latest_published về lại 2026-08-01]` -> `[cả 4 metric phục hồi hoàn toàn về đúng mức baseline: hit_rate 1.0, token_f1 1.0, judge_accuracy 1.0, judge_score 5.0]`.

Nhận xét từ góc nhìn Role 4: corruption chỉ đụng 5/24 document nhưng đủ làm giảm cả 4 metric, vì các document đó nằm trong `ground_truth_doc_ids` của test set. Nếu corrupt những document không bao giờ được hỏi tới, index vẫn đổi nhưng metrics sẽ không nhúc nhích. Việc repaired trùng khít baseline cũng cho thấy tầng embedding và index là deterministic: cùng input clean thì cho ra cùng vector và cùng thứ tự retrieval, nên chênh lệch metrics thuần do chất lượng dữ liệu.

## 9. Điều học được và hướng cải thiện

### Ba điều quan trọng nhất

1. Tầng index phải phản ánh trung thực chất lượng dữ liệu đầu vào. Chọn document ID sai một chút là kịch bản duplicate bị Chroma âm thầm ghi đè, corruption biến mất khỏi index và report sẽ không khớp với artifact.
2. Artifact được commit không được chứa đường dẫn tuyệt đối. Lỗi `Collection does not exist` mà tôi gặp không phải do dữ liệu hỏng mà do manifest mang path của máy khác, và nó chỉ lộ ra khi làm việc nhiều người trên nhiều hệ điều hành.
3. Muốn so sánh công bằng thì mọi tham số retrieval phải đến từ config chung. `top_k` hard-code trong search là đủ để làm sai lệch so sánh giữa baseline, corrupted và repaired mà rất khó phát hiện khi đọc metrics.

### Nếu có thêm thời gian

Tôi sẽ sửa `LocalEmbeddingIndex` để ghi `persist_path` tương đối so với project root và resolve lại khi `load`, kèm một smoke test tự động chạy sau mỗi lần build (kiểm tra 3 collection tồn tại, đủ 24 document, search trả đủ `top_k`, lookup theo `paper_id` HIT). Cải thiện này đo được bằng việc clone repo sang máy khác và chạy evaluation ngay mà không cần rebuild thủ công. Ngoài ra tôi muốn thử thêm một embedding model thứ hai để xem mức sụt metrics khi corrupt có phụ thuộc vào model hay không.

## 10. Cam kết của thành viên

- [x] Nội dung báo cáo phản ánh đúng phần việc và mức hiểu của tôi.
- [x] Tôi có thể giải thích luồng end-to-end, không chỉ module mình phụ trách.
- [x] Mọi kết luận về kết quả đều cần artifact hoặc metric để đối chiếu.
- [x] Tôi không ghi "đã chạy thành công" cho phần chưa được kiểm chứng.
- [x] Báo cáo không chứa `.env`, API key, token hoặc secret.
- [x] Báo cáo này không phải bản sao nguyên văn của báo cáo nhóm hoặc báo cáo thành viên khác.

**Họ và tên:** Phạm Mai Anh
**Ngày xác nhận:** 06/08/2026
