# Group Report - Day 10: Data Pipeline & Data Observability

## 1. Thông tin bài nộp

| Thông tin | Nội dung |
| --- | --- |
| Khóa/Lớp | K3 |
| Tên nhóm | VinTV |
| Repository | https://github.com/ltl2702/K3_Day10_VinTV_Data-Pipeline-Data-Observability |
| Ngày hoàn thành | 2026-08-06 |

### Thành viên và phân công

| STT | Họ và tên | MSSV | Vai trò chính | Branch đề xuất | Module/deliverable sở hữu |
| --: | --- | --- | --- | --- | --- |
| 1 | Lương Thị Linh | 2A202601015 | Role 1 - Cấu hình, orchestration, release | `role1-orchestration-release` | Contract artifact, sơ đồ handoff, lệnh chạy, tiêu chí nghiệm thu; `src/core/`, `src/pipelines/`, `role1_orchestration/` |
| 2 | Trần Thị Hoa Mai | 2A202601317 | Role 2 - Crossref ingestion + raw lineage | `role2-ingestion-crossref` | `src/ingestion/crossref.py`, `data/raw/`, raw snapshot, parsed records, raw lineage và handoff raw -> clean |
| 3 | Cao Quế Phương | 2A202601111 | Role 3 - Cleaning schema, corruption, repair | `role3-cleaning-corruption` | `src/ingestion/cleaning.py`, `src/ingestion/corruption.py`, `data/clean/`, `data/results/corruption_log.json` |
| 4 | Phạm Mai Anh | 2A202601681 | Role 4 - RAG, embedding, Chroma, agent | `role4-rag-agent-index` | `src/retrieval/`, `data/embeddings/`, `data/chroma/`, Chroma collections baseline/corrupted/repaired |
| 5 | Ngô Thị Ngọc Phượng | 2A202601569 | Role 5 - Evaluation, observability, report | `role5-eval-observability` | `src/evaluation/`, `src/observability/`, `data/eval/`, `data/results/`, `data/quality/`, `data/reports/` |

## 2. Tóm tắt kết quả

Nhóm đã hoàn thành pipeline end-to-end cho bài lab Data Pipeline & Data Observability với dữ liệu bài báo học thuật từ Crossref. Baseline pipeline lấy 24 record từ Crossref, lưu raw response/raw records, chuẩn hóa thành clean dataset 24 dòng, tạo embedding/index, sinh test set 24 câu hỏi và đánh giá RAG agent trên cùng bộ ground truth. Các artifact chính gồm `data/raw/`, `data/clean/papers_clean.*`, `data/embeddings/papers_embeddings.json`, `data/eval/test_set.json`, `data/results/baseline_metrics.json`, `data/quality/baseline_quality_report.json` và `data/reports/phase1_report.md`.

Corruption flow chủ động tạo lỗi drop latest record, blank summary, truncate title, stale published date, inject text noise và duplicate row. Tác động rõ nhất là nhóm lỗi summary rỗng, duplicate `paper_id` và freshness stale: corrupted quality report fail 4 check, freshness fail 1/24 stale row, retrieval hit rate giảm từ 1.0000 xuống 0.8750, mean token F1 giảm từ 1.0000 xuống 0.8391, judge accuracy giảm từ 1.0000 xuống 0.8333. Repair được thực hiện từ raw/baseline source thay vì sửa tay metrics, khôi phục clean data 24 dòng, không duplicate, không summary rỗng, freshness pass và toàn bộ metric quay lại baseline. Giới hạn còn lại là evaluation set nhỏ, Ragas chưa chạy mặc định và kết quả agent phụ thuộc API key/provider.

## 3. Kiến trúc và luồng dữ liệu

### Luồng end-to-end

```text
Crossref REST API
    -> data/raw/crossref_response.json, data/raw/crossref_records.json
    -> cleaning và data modeling
    -> data/clean/papers_clean.csv, data/clean/papers_clean.json
    -> embedding + ChromaDB index
    -> data/embeddings/papers_embeddings.json
    -> evaluation baseline
    -> data/results/baseline_metrics.json, baseline_answers.json
    -> quality/freshness reports
    -> corruption
    -> corrupted clean data, corrupted embeddings, corrupted metrics
    -> repair từ raw/baseline source
    -> repaired clean data, repaired embeddings, repaired metrics
    -> data/reports/corruption_report.md
```

### Trách nhiệm của từng khối

| Khối | Input | Xử lý chính | Output/artifact | Owner |
| --- | --- | --- | --- | --- |
| Ingestion | Crossref REST API | Fetch 24 works, retry 429/503, parse DOI/title/abstract/authors/date/url | `data/raw/crossref_response.json`, `data/raw/crossref_records.json` | Trần Thị Hoa Mai |
| Cleaning | `data/raw/crossref_records.json` | Normalize text/list/date, validate required fields, dedupe `paper_id`, tạo `text_for_embedding` | `data/clean/papers_clean.csv`, `data/clean/papers_clean.json` | Cao Quế Phương |
| Embedding/index | Clean CSV/JSON | MiniLM embedding 384 chiều, Chroma cosine, 3 collection tách biệt | `data/embeddings/papers_embeddings*.json`, `data/chroma/` | Phạm Mai Anh |
| Evaluation | Index + `data/eval/test_set.json` | 24 câu hỏi, retrieval hit, token F1, judge accuracy/score | `data/results/*_metrics.json`, `data/results/*_answers.json` | Ngô Thị Ngọc Phượng |
| Observability | Clean/corrupted/repaired datasets | Quality checks và freshness threshold 180 ngày | `data/quality/*quality_report.json`, `data/quality/freshness_report*.json` | Ngô Thị Ngọc Phượng |
| Corruption/repair | Baseline clean/raw records | Inject lỗi dữ liệu, log event, repair từ nguồn đáng tin cậy | `data/results/corruption_log.json`, `data/clean/papers_clean_corrupted.*`, `data/clean/papers_clean_repaired.*` | Cao Quế Phương |
| Orchestration | Config + các module trên | Chạy baseline trước, corruption flow sau, giữ cùng test set/top_k | `data/reports/phase1_report.md`, `data/reports/corruption_report.md` | Lương Thị Linh |

## 4. Cách tái hiện kết quả

### Cấu hình không chứa secret

| Biến/cấu hình | Giá trị sử dụng |
| --- | --- |
| `LLM_PROVIDER` | `gemini` |
| `LLM_MODEL` | `gemini-2.5-flash` |
| Embedding model | `sentence-transformers/all-MiniLM-L6-v2` |
| Số lượng Crossref records | 24 |
| Retrieval `top_k` | 4 |
| Freshness threshold | 180 ngày |
| Random seed, nếu có | Không cố định; retry jitter chỉ dùng khi gọi Crossref |

Không đưa nội dung API key hoặc file `.env` vào báo cáo.

### Lệnh cài đặt

```bash
uv sync
```

Hoặc với môi trường `pip`:

```bash
python -m pip install -e .
```

### Lệnh chạy

Baseline:

```bash
uv run python script/run_phase1.py
```

Hoặc với môi trường `pip` đã kích hoạt:

```bash
python script/run_phase1.py
```

Corruption flow:

```bash
uv run python script/run_corruption_flow.py
```

Hoặc với môi trường `pip` đã kích hoạt:

```bash
python script/run_corruption_flow.py
```

### Kết quả tái hiện

| Lệnh | Trạng thái | Thời điểm artifact gần nhất | Bằng chứng |
| --- | --- | --- | --- |
| Baseline pipeline | Thành công | 2026-08-06 16:06:28 local time; report generated `2026-08-06T05:52:05+00:00` | `data/reports/phase1_report.md`, `data/results/baseline_metrics.json` |
| Corruption flow | Thành công | 2026-08-06 16:06:28 local time; report generated `2026-08-06T05:52:56+00:00` | `data/reports/corruption_report.md`, `data/results/corruption_log.json` |

## 5. Ingestion, cleaning và data contract

### Nguồn dữ liệu

| Thuộc tính | Giá trị |
| --- | --- |
| Source | Crossref REST API, endpoint `https://api.crossref.org/works` |
| Query/filter | Query `agentic retrieval augmented generation large language model`; filter `from-pub-date:2026-02-07,has-abstract:true`; `rows=24` |
| Thời điểm lấy dữ liệu | Raw artifact cập nhật 2026-08-06 16:06:28 local time |
| Số record nhận được | 24 raw records, 24 clean records |
| Cơ chế retry/backoff | Tối đa 5 attempts, retry HTTP 429/503, timeout 60 giây, exponential backoff có jitter và tôn trọng `Retry-After` |

### Raw và clean schema

| Trường | Kiểu dữ liệu | Bắt buộc? | Ý nghĩa | Xử lý khi thiếu/sai |
| --- | --- | --- | --- | --- |
| `paper_id` | string | Có | DOI chuẩn hóa, khóa định danh paper | Loại record nếu không hợp lệ; dedupe theo `paper_id` ở clean stage |
| `title` | string | Có | Tiêu đề paper | Loại record nếu rỗng |
| `summary` | string | Có | Abstract/description dùng để trả lời summary và embedding | Loại record nếu rỗng ở baseline; corruption cố ý blank để đo tác động |
| `authors` | JSON list/string | Không | Danh sách tác giả từ Crossref | Chuẩn hóa list, bỏ phần tử rỗng/trùng |
| `categories` | JSON list/string | Không | Subject/category từ Crossref | Chuẩn hóa list; có thể rỗng |
| `primary_category` | string | Không | Category đầu tiên nếu có | Chuẩn hóa text, cho phép rỗng |
| `published` | ISO date string | Có | Ngày xuất bản, dùng freshness và câu hỏi date | Loại record nếu parse date lỗi |
| `updated` | string/date | Không | Thời điểm indexed/deposited/created | Chuẩn hóa date nếu parse được, nếu không giữ text |
| `abs_url`, `pdf_url` | string | Không | Link truy vết nguồn | Chuẩn hóa text, cho phép rỗng |
| `comment` | string | Không | Container/publisher/type | Chuẩn hóa text |
| `age_days` | integer | Có ở clean | Số ngày từ `published` tới ngày chạy | Tính lại trong cleaning |
| `text_for_embedding` | string | Có ở clean | Nội dung đưa vào embedding | Tạo từ `title + "\n\n" + summary` |

### Quy tắc cleaning

| Quy tắc | Quality dimension liên quan | Số record bị tác động | Cách xác minh |
| --- | --- | ---: | --- |
| Loại record thiếu `paper_id` hợp lệ | Validity/Completeness | 0 | `data/reports/phase1_report.md`, source summary |
| Loại record thiếu `title` | Completeness | 0 | `data/reports/phase1_report.md` |
| Loại record thiếu `summary` | Completeness | 0 ở baseline; 2 summary rỗng trong corrupted được quality phát hiện | `baseline_quality_report.json`, `corrupted_quality_report.json` |
| Loại record có `published` không parse được | Validity/Freshness | 0 | Cleaning report trong `phase1_report.md` |
| Dedupe theo `paper_id`, giữ bản ghi đầu tiên | Uniqueness | 0 ở baseline; corrupted có 1 duplicate | `baseline_quality_report.json`, `corrupted_quality_report.json` |
| Sắp xếp clean data theo `published` giảm dần rồi `paper_id` | Consistency | 24 | `data/clean/papers_clean.json` |

`text_for_embedding` được tạo bằng cách ghép tiêu đề và summary đã normalize whitespace để giữ ngữ cảnh chính của paper cho retrieval. Document ID trong Chroma dùng dạng `{paper_id}::{row_index}` để baseline/repaired có định danh ổn định và corrupted vẫn nạp được trường hợp duplicate `paper_id`. `age_days` được tính bằng `run_date.date() - published`, không âm, dùng cho freshness và quan sát dữ liệu cũ.

## 6. Evaluation setup

| Thành phần | Cấu hình thực tế |
| --- | --- |
| Số câu hỏi | 24 |
| Các `question_type` | `summary` 8, `date` 8, `authors` 8 |
| Ground-truth document ID | Mỗi câu hỏi lưu `ground_truth_doc_ids` là DOI của paper đại diện |
| Embedding model | `sentence-transformers/all-MiniLM-L6-v2` |
| Vector store/collection | Chroma persistent store `data/chroma/`; collections `papers-baseline`, `papers-corrupted`, `papers-repaired` |
| Retrieval `top_k` | 4 |
| LLM provider/model | `gemini` / `gemini-2.5-flash` |
| Test set dùng chung cho ba trạng thái | `data/eval/test_set.json` |

Test set được giữ nguyên khi đánh giá baseline, corrupted và repaired để phép so sánh có ý nghĩa nhân quả. Nếu thay câu hỏi hoặc ground truth giữa các lần chạy, metric thay đổi có thể đến từ độ khó câu hỏi thay vì do chất lượng dữ liệu. Ở đây ba trạng thái dùng chung `ground_truth`, `ground_truth_doc_ids`, evaluator và `top_k`, nên sự giảm/tăng metric phản ánh tác động của corruption và repair.

## 7. Kết quả baseline

### Artifact checklist

| Artifact | Đường dẫn thực tế | Trạng thái | Ghi chú |
| --- | --- | --- | --- |
| Raw response/records | `data/raw/` | Có | `crossref_response.json`, `crossref_records.json`, 24 records |
| Cleaned dataset | `data/clean/` | Có | `papers_clean.csv`, `papers_clean.json`, 24 records |
| Embedding manifest/index | `data/embeddings/`, `data/chroma/` | Có | Baseline manifest 24 documents, collection `papers-baseline` |
| Evaluation set | `data/eval/test_set.json` | Có | 24 câu hỏi |
| Baseline metrics | `data/results/baseline_metrics.json` | Có | 24 samples |
| Quality/freshness | `data/quality/` | Có | Baseline quality pass, freshness pass |
| Baseline report | `data/reports/phase1_report.md` | Có | Report sinh từ pipeline |

### Baseline metrics

| Metric | Giá trị | Diễn giải |
| --- | ---: | --- |
| `retrieval_hit_rate` | 1.0000 | 24/24 câu hỏi retrieve được ground-truth document trong top 4 |
| `mean_token_f1` | 1.0000 | Câu trả lời khớp ground truth ở mức token F1 trung bình |
| `judge_accuracy` | 1.0000 | Judge đánh giá toàn bộ câu trả lời đạt |
| `mean_judge_score` | 5.0000 | Điểm judge trung bình tối đa |
| Ragas, nếu có | N/A | Bị skip theo artifact: `Set RUN_RAGAS=1 to enable the slower Ragas pass.` |

## 8. Data quality và freshness

### Quality checks

| Check | Quality dimension | Ngưỡng/kỳ vọng | Kết quả baseline | Bằng chứng |
| --- | --- | --- | --- | --- |
| `row_count_positive` | Completeness | Row count > 0 | PASS, 24 rows | `data/quality/baseline_quality_report.json` |
| `paper_id_not_null` | Completeness | Missing = 0 | PASS, missing 0 | `data/quality/baseline_quality_report.json` |
| `paper_id_unique` | Uniqueness | Duplicate = 0 | PASS, duplicate 0 | `data/quality/baseline_quality_report.json` |
| `title_not_null` | Completeness | Missing = 0 | PASS, missing 0 | `data/quality/baseline_quality_report.json` |
| `summary_not_null` | Completeness | Missing = 0 | PASS, missing 0 | `data/quality/baseline_quality_report.json` |
| `no_duplicate_records` | Uniqueness | Duplicate = 0 | PASS, duplicate 0 | `data/quality/baseline_quality_report.json` |
| `freshness` | Timeliness | Stale rows = 0 với threshold 180 ngày | PASS, stale 0/24 | `data/quality/freshness_report.json` |

### Freshness

| Thuộc tính | Giá trị |
| --- | --- |
| Freshness được đo tại | `data/clean/papers_clean.json` / `data/quality/freshness_report.json` |
| Timestamp mới nhất | Latest published `2026-08-01`; oldest published `2026-02-12` |
| Ngưỡng freshness | 180 ngày |
| Trạng thái baseline | Fresh |
| Lý do | 0/24 rows stale, toàn bộ paper nằm trong ngưỡng 180 ngày tại thời điểm chạy |

## 9. Corruption scenarios và repair

| Corruption | Cách tạo | Record bị tác động | Quality signal kỳ vọng | Tác động thực tế | Cách repair |
| --- | --- | ---: | --- | --- | --- |
| `drop_latest` | Bỏ paper mới nhất khỏi corrupted set | 1 | Freshness/ranking có thể giảm do mất tài liệu mới | Retrieval hit rate giảm còn 0.8750 | Khôi phục từ baseline/raw records |
| `blank_summary` | Xóa summary của paper mục tiêu | 1 event; quality thấy 2 summary rỗng do duplicate cùng DOI | `summary_not_null` fail, answer summary kém | `summary_not_null` fail, token F1 còn 0.8391 | Rebuild clean từ raw/baseline source |
| `truncate_title` | Cắt ngắn title | 1 | Retrieval theo title có thể giảm | Content corrupted khác baseline | Rebuild title từ source |
| `age_published_date` | Đổi ngày published thành cũ | 1 | Freshness fail | Freshness fail, stale 1/24 | Rebuild date từ source |
| `inject_text_noise` | Chèn nhiễu vào text | 1 | Retrieval/answer có thể giảm | Content khác baseline | Rebuild text từ title/summary sạch |
| `duplicate_row` | Nhân bản một row | 1 | `paper_id_unique` và duplicate check fail | Duplicate count 1, quality fail | Dedupe/rebuild từ source sạch |

Corruption log:

- Đường dẫn: `data/results/corruption_log.json`
- Trạng thái: Có
- Nhận xét: Log ghi đủ `input_count=24`, `output_count=24`, 6 event corruption, số lượng tác động và danh sách `paper_ids` của từng event.

Repair không sửa tay câu trả lời hay metrics. Flow rebuild dữ liệu repaired từ raw/baseline source đáng tin cậy, chạy lại cleaning, embedding/index, quality/freshness và evaluation. Vì repaired data quay lại schema sạch, không duplicate, không stale và không summary rỗng, các metric agent cũng quay lại bằng baseline.

## 10. So sánh baseline, corrupted và repaired

| Metric/signal | Baseline | Corrupted | Repaired | Thay đổi do corruption | Mức phục hồi | Nhận xét |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| `retrieval_hit_rate` | 1.0000 | 0.8750 | 1.0000 | -0.1250 | +0.1250 | Mất/biến dạng document làm giảm hit trong top 4 |
| `mean_token_f1` | 1.0000 | 0.8391 | 1.0000 | -0.1609 | +0.1609 | Summary rỗng/noise làm câu trả lời kém khớp ground truth |
| `judge_accuracy` | 1.0000 | 0.8333 | 1.0000 | -0.1667 | +0.1667 | Judge phát hiện câu trả lời sai/thiếu sau corruption |
| `mean_judge_score` | 5.0000 | 4.3333 | 5.0000 | -0.6667 | +0.6667 | Điểm trung bình giảm rõ trong corrupted state |
| Quality checks pass/fail | PASS | FAIL | PASS | 4 checks fail | Full recovery | Corrupted fail `paper_id_unique`, `summary_not_null`, `no_duplicate_records`, `freshness` |
| Freshness status | PASS | FAIL | PASS | stale 1/24 | stale 0/24 | Aging published date làm freshness fail và repair khôi phục |

Kết luận nhân quả được hỗ trợ bởi artifacts:

1. `blank_summary` + `duplicate_row` + `age_published_date` -> `summary_not_null`, `paper_id_unique`, `no_duplicate_records`, `freshness` fail trong `corrupted_quality_report.json` -> `retrieval_hit_rate` giảm 0.1250 và `mean_token_f1` giảm 0.1609 trong `corrupted_metrics.json`.
2. Repair từ raw/baseline source -> quality/freshness pass trong `repaired_quality_report.json` và `freshness_report_repaired.json` -> `retrieval_hit_rate`, `mean_token_f1`, `judge_accuracy`, `mean_judge_score` khôi phục bằng baseline.

## 11. Vấn đề tích hợp quan trọng

- **Triệu chứng:** Corrupted dataset vẫn có 24 dòng sau khi drop latest record, nhưng đồng thời có duplicate `paper_id`; nếu document ID chỉ dùng DOI thì index có thể ghi đè hoặc không thể biểu diễn corruption duplicate.
- **Nguyên nhân:** Corruption flow vừa bỏ một record vừa duplicate một record khác để giữ row count, trong khi DOI không còn unique ở corrupted state.
- **Cách xử lý:** Role 4 dùng document ID dạng `{paper_id}::{row_index}` cho Chroma, còn evaluator vẫn đối chiếu ground truth bằng metadata `paper_id`.
- **Cách xác minh:** `role4_rag_agent_index/index_handoff.md` xác nhận corrupted collection có 24 documents, duplicate `paper_id=1`, ba collection tách biệt; `data/quality/corrupted_quality_report.json` xác nhận duplicate được phát hiện thay vì bị che mất.

## 12. Giới hạn và hướng cải thiện

| Giới hạn hiện tại | Ảnh hưởng | Hướng cải thiện có thể kiểm chứng |
| --- | --- | --- |
| Test set chỉ có 24 câu hỏi từ 8 paper đại diện | Metric dễ đạt tuyệt đối ở baseline/repaired, chưa phản ánh đủ nhiều dạng truy vấn khó | Tăng số paper và câu hỏi, thêm negative queries và câu hỏi multi-hop; so sánh lại ba trạng thái |
| Ragas chưa chạy mặc định | Thiếu thêm góc nhìn faithfulness/context precision | Chạy với `RUN_RAGAS=1`, lưu kết quả vào `data/results/` và bổ sung bảng so sánh |
| Dữ liệu Crossref là nguồn sống | Nếu refresh source, record mới có thể khác artifact hiện tại | Gắn snapshot ID/hash cho raw records hoặc nộp cùng raw artifact đã dùng |
| Provider LLM phụ thuộc API key và quota | Kết quả judge/answer có thể fail nếu thiếu credential hoặc rate limit | Thêm chế độ offline/mock judge cho smoke test và log provider/model khi chạy |
| Categories rỗng trong corpus hiện tại | Không đánh giá được tốt câu hỏi theo category | Chọn query/filter có subject phong phú hơn hoặc bỏ category khỏi test set khi không đủ dữ liệu |

## 13. Checklist trước khi nộp

- [x] Thông tin nhóm và repository chính xác.
- [x] Phân công khớp với module, artifact và kết quả thực tế.
- [x] Lệnh tái hiện đã được ghi rõ cho baseline và corruption flow.
- [x] Baseline, corrupted và repaired dùng cùng evaluation set.
- [x] Bảng metrics khớp với các file trong `data/results/`.
- [x] Quality/freshness conclusions khớp với `data/quality/`.
- [x] Các đường dẫn báo cáo và artifact truy cập được.
- [ ] Mỗi thành viên đã hoàn thành báo cáo vai trò riêng.
- [x] Không có `.env`, API key, token hoặc secret trong source, report, log hay ảnh.
