# Member Role Report - Day 10: Data Pipeline & Data Observability

## 1. Thông tin cá nhân

| Thông tin | Nội dung |
| --- | --- |
| Họ và tên | Ngô Thị Ngọc Phượng |
| MSSV | 2A202601569 |
| Khóa/Lớp | K3 |
| Tên nhóm | VinTV Data Pipeline |
| Vai trò chính | Role 5 - Evaluation, Observability, Report |
| Branch phụ trách | `phuongntn/dev` (integration branch) |
| Repository | https://github.com/VinUni-Labs/K3_Day10_VinTV_Data-Pipeline-Data-Observability |
| Ngày hoàn thành | 2026-08-06 |

## 2. Vai trò và phạm vi công việc

### Phần việc sở hữu

| Module/deliverable | File/hàm phụ trách | Input nhận vào | Output bàn giao | Trạng thái |
| --- | --- | --- | --- | --- |
| Test set builder | `src/evaluation/testset.py::build_test_set()` | Clean dataframe từ Role 3 (`data/clean/papers_clean.json`) | `data/eval/test_set.json` (24 câu hỏi trên 8 paper đại diện) | ✅ Hoàn thành |
| Quality checks | `src/observability/quality.py::run_data_quality_checks()` | Clean DataFrame | `data/quality/{baseline,corrupted,repaired}_quality_report.json` | ✅ Hoàn thành |
| Freshness report | `src/observability/quality.py::build_freshness_report()` | Clean DataFrame + settings | `data/quality/freshness_report*.json` (stale rows, latest/oldest published) | ✅ Hoàn thành |
| Phase 1 report | `src/observability/reporting.py::generate_phase1_report()` | Metrics từ Role 5, quality/freshness từ observability | `data/reports/phase1_report.md` (markdown) | ✅ Hoàn thành |
| Corruption report | `src/observability/reporting.py::generate_corruption_report()` | Baseline/corrupted/repaired metrics + quality/freshness | `data/reports/corruption_report.md` (markdown so sánh) | ✅ Hoàn thành |
| Baseline pipeline | `src/pipelines/phase1.py::main()` | Crossref raw records (Role 2), clean data (Role 3), index (Role 4) | Tất cả output: baseline_metrics.json, baseline_answers.json, test_set.json, quality report, freshness report, phase1_report.md | ✅ Hoàn thành |
| Corruption/Repair pipeline | `src/pipelines/corruption_flow.py::main()` | Baseline artifacts + raw records + clean dataset | corrupted_metrics.json, repaired_metrics.json, quality/freshness reports (corrupted+repaired), corruption_report.md | ✅ Hoàn thành |

### Việc hỗ trợ ngoài phạm vi chính

| Hoạt động | Thành viên/module được hỗ trợ | Kết quả |
| --- | --- | --- |
| Kiểm tra contract từ handoff | Role 4 index artifacts | Kiểm chứng collection name, embedding manifest, metadata schema |
| Chọn question types | Role 2 + Role 3 cleanup | Bỏ category questions vì Role 2 handoff xác nhận 24/24 record không có `subject` |
| Python env setup | Cả nhóm | Tạo .venv Python 3.13 (máy có 3.14 mặc định, project yêu cầu <3.14) |
| Chạy end-to-end baseline và corruption | Cả nhóm | Sinh toàn bộ artifact thật trong data/ để cả nhóm có thể verify |

## 3. Kết quả theo vai trò

| Nhiệm vụ đã thực hiện | File/hàm/artifact liên quan | Kết quả bàn giao | Cách xác minh |
| --- | --- | --- | --- |
| Tạo evaluation test set từ cleaned dataframe | `src/evaluation/testset.py`, `data/eval/test_set.json` | 24 câu hỏi: summary (8), date (8), authors (8) trên 8 paper đại diện | `wc -l data/eval/test_set.json` = 24 items; kiểm tra `ground_truth_doc_ids` khớp `paper_id` |
| Implement data quality checks | `src/observability/quality.py::run_data_quality_checks()` | 7 checks: row_count, paper_id (null/unique), title/summary (not null), no_duplicate_records, freshness | `cat data/quality/baseline_quality_report.json` → all checks passed=true |
| Implement freshness monitoring | `src/observability/quality.py::build_freshness_report()` | Latest/oldest published, stale_rows, total_rows, is_fresh flag | `cat data/quality/freshness_report.json` → latest_published=2026-08-01, stale_rows=0, is_fresh=true |
| Generate markdown reports | `src/observability/reporting.py` (2 hàm) | `data/reports/phase1_report.md` và `data/reports/corruption_report.md` | `cat data/reports/phase1_report.md` có section: Source, Metrics, Quality, Freshness |
| Chạy baseline pipeline end-to-end | `src/pipelines/phase1.py::main()` | Baseline metrics, answers, test set, quality report, freshness, phase1 report | `python script/run_phase1.py` → exit 0; baseline_metrics.json exists và có `retrieval_hit_rate`, `mean_token_f1`, etc. |
| Chạy corruption/repair pipeline | `src/pipelines/corruption_flow.py::main()` | Corrupted+repaired metrics, answers, quality reports, freshness reports, corruption_report.md | `python script/run_corruption_flow.py` → exit 0; corruption_metrics.json exists; corruption_report.md so sánh 3 trạng thái |
| Cập nhật role 5 documentation | `role5_eval_observability/worklog.md`, `dod_checklist.md`, `testset_draft_template.md` | Real evidence từ 2026-08-06 runs | `cat role5_eval_observability/dod_checklist.md` → all checks [x] với bảng bằng chứng metrics thật |

## 4. Giải thích phần kỹ thuật đã thực hiện

### Vấn đề cần giải quyết

Role 5 cần chứng minh hai điều:
1. Pipeline baseline chạy được từ clean data → embedding → evaluation → quality/freshness checks → report markdown.
2. Corruption làm thay đổi quality signal và agent metric; repair khôi phục lại.

Nhưng `src/pipelines/phase1.py` và `src/pipelines/corruption_flow.py` chỉ có stub `NotImplementedError`, nên không thể chạy thực tế để tạo artifact. Role 5 không thể bàn giao được.

### Cách triển khai

**Phần Role 5 chính:**
1. `build_test_set()` — chọn 8 paper đại diện từ 24 paper sạch (cách đều `published`), mỗi paper tạo summary+date, cộng authors nếu có. Bỏ categories vì Role 2 handoff báo không có dữ liệu.
2. `run_data_quality_checks()` — 7 checks: row_count, paper_id null/unique, title/summary not null, no duplicate_records, freshness via age_days.
3. `build_freshness_report()` — tính latest/oldest published, count stale rows (age_days > 180 days), is_fresh flag.
4. `generate_phase1_report()` — ghi markdown: source summary, metrics (retrieval_hit_rate, mean_token_f1, judge_accuracy), quality checks, freshness.
5. `generate_corruption_report()` — markdown so sánh baseline/corrupted/repaired: metrics table, quality compare, freshness compare, conclusion.

**Phần phi-Role-5:**
6. `src/pipelines/phase1.py::main()` — glue code để chạy: load raw → clean → build index → build/load test set → evaluate → quality checks → freshness → report.
7. `src/pipelines/corruption_flow.py::main()` — glue code: load baseline → corrupt → index → evaluate → quality/freshness → repair từ raw → evaluate → report.

Tôi implement 7 (và 6) để Role 5 có thể thực sự chạy và tạo artifact, vì không ai khác làm.

### Input, output và contract

| Thành phần | Mô tả |
| --- | --- |
| Input | Clean CSV/JSON từ Role 3 (paper_id, title, summary, published, age_days, authors_joined, categories_joined), Chroma collection + embedding manifest từ Role 4 |
| Output | test_set.json (24 items), baseline_metrics.json, baseline_answers.json, quality reports (baseline/corrupted/repaired), freshness reports, phase1_report.md, corruption_report.md |
| Module phụ thuộc | `src/retrieval/index.py` (LocalEmbeddingIndex.build), `src/retrieval/qa.py` (answer_question), `src/evaluation/metrics.py` (evaluate_pipeline) |
| Module sử dụng output | Streamlit dashboard (app.py) đọc artifact từ data/ để hiển thị |
| Điều kiện lỗi cần xử lý | Clean data không đủ 3 record, test_set chưa tạo khi chạy corruption, baseline metrics chưa tạo, Chroma collection không tồn tại |

### Cách xác minh

```bash
source .venv/bin/activate
python script/run_phase1.py
python script/run_corruption_flow.py
```

**Kết quả mong đợi:**
- `data/eval/test_set.json` có 24 câu hỏi.
- `data/results/baseline_metrics.json` có retrieval_hit_rate, mean_token_f1, judge_accuracy.
- `data/quality/baseline_quality_report.json` có tất cả check passed=true.
- `data/quality/freshness_report.json` có is_fresh=true.
- `data/reports/phase1_report.md` ghi markdown với số liệu thật.
- `data/results/corrupted_metrics.json` có retrieval_hit_rate < baseline.
- `data/quality/corrupted_quality_report.json` có check failed (paper_id_unique, summary_not_null, freshness).
- `data/results/repaired_metrics.json` bằng baseline.
- `data/reports/corruption_report.md` so sánh 3 trạng thái.

**Kết quả thực tế (2026-08-06):**
- ✅ Baseline: retrieval_hit_rate=1.0, mean_token_f1=1.0, judge_accuracy=1.0, quality PASS, freshness PASS.
- ✅ Corrupted: retrieval_hit_rate=0.875, mean_token_f1=0.839, judge_accuracy=0.833, quality FAIL (duplicate paper_id, blank summary, stale date), freshness FAIL.
- ✅ Repaired: retrieval_hit_rate=1.0, mean_token_f1=1.0, judge_accuracy=1.0, quality PASS, freshness PASS.

## 5. Một quyết định kỹ thuật quan trọng

**Bối cảnh:** Khi tạo test set từ 24 paper cleaned, cần chọn câu hỏi sao cho ground truth kiểm chứng được từ dữ liệu thật, nhưng cũng đơn giản không yêu cầu LLM để sinh ground truth (mà chỉ extract từ column).

**Các phương án đã cân nhắc:**
1. Tạo tất cả 4 loại câu hỏi (summary, date, authors, categories) — nhưng handoff Role 2 báo 24/24 record không có categories.
2. Chỉ tạo 2 loại (summary, date) trên tất cả 24 paper.
3. Chỉ tạo trên vài paper mới nhất (top 5) — lãng phí dữ liệu.
4. Tạo 3 loại (summary, date, authors) trên 8 paper đại diện, trải đều theo published.

**Phương án đã chọn:** Phương án 4.

**Lý do:**
- Bỏ category question vì dữ liệu không có (không nên sinh fake ground truth).
- Chọn 8 paper đại diện (không phải top 5) để bao phủ cả hạn cũ (oldest) và mới (newest), giúp test set diverse hơn khi đo impact của aging.
- Mỗi paper có summary + date (luôn có thể extract), + authors (khi authors_joined không rỗng).
- Tổng 24 câu hỏi = 8 paper × (1 summary + 1 date + 1 authors đôi khi) → vừa đủ để kiểm tra agent trên các dimension khác nhau.

**Bằng chứe quyết định phù hợp:**
- Baseline evaluation chạy trên 24 questions, retrieval_hit_rate=1.0 (agent tìm được ground truth document 100%).
- Corrupted drop 1 latest paper, blank 1 summary, stale 1 publish date → retrieval_hit_rate=0.875 (21/24).
- Đây là mức drop đủ để nhìn thấy tác động corruption.

## 6. Một lỗi hoặc blocker đã xử lý

**Triệu chứng/lỗi:** `pip install -e .` thất bại với lỗi TLS certificate không tìm thấy.

**Lệnh hoặc bước tái hiện:**
```bash
python3.13 -m venv .venv
source .venv/bin/activate
pip install -e .  # error: Could not find a suitable TLS CA certificate bundle
```

**Nguyên nhân gốc:** Khi tạo `.venv` bằng `python3.13 -m venv`, pip vendor certifi chưa được cài hoàn toàn trước khi pip cố tải package từ PyPI. Cá nhân cũng đã chạy `pip install --upgrade pip` quá sớm, làm hỏng trạng thái venv.

**Cách xử lý:**
1. Clear venv: `rm -rf .venv`
2. Tạo lại từ đầu: `python3.13 -m venv .venv`
3. Không upgrade pip, chỉ cài direct: `source .venv/bin/activate && python -m pip install -e .`
4. Kết quả: Cài được torch, sentence-transformers, chromadb, ragas, langchain, ...

**Cách xác minh sau khi sửa:**
```bash
source .venv/bin/activate
python -c "import chromadb; import sentence_transformers; print('All imports OK')"
python script/run_phase1.py  # exit 0
```

**Điều học được:** Với Python 3.13 (mới), `pip install -e .` nên không upgrade pip ngay khi venv vừa tạo. Cứ để pip tự cài dần dần các dependency, rồi lúc hết mới upgrade nếu cần.

## 7. Hiểu biết về luồng end-to-end

1. **Raw -> Clean:** Role 2 lấy dữ liệu từ Crossref API, parse thành raw records JSON. Role 3 clean: filter missing field, normalize whitespace, dedupe theo paper_id, tính age_days, join authors/categories, tạo text_for_embedding.

2. **Clean -> Index:** Role 4 lấy clean CSV/JSON, tạo embeddings bằng sentence-transformers/MiniLM, nạp vào ChromaDB (3 collection: baseline, corrupted, repaired).

3. **Index -> Evaluation:** Role 5 dùng cleaned dataframe để tạo test set (24 Q&A pairs với ground truth từ summary/published/authors). Agent/RAG gọi `answer_question()` → search index → extract answer từ top-1 result. Evaluator so sánh answer với ground truth bằng token-F1 và LLM judge.

4. **Quality & Freshness:** Role 5 check schema (row_count, paper_id null/unique, title/summary/text_for_embedding not null, no duplicate, freshness via age_days). Freshness dùng cột age_days sẵn có (tính ở Role 3), không hardcode ngày hôm nay.

5. **Corruption & Repair:** Role 5 chạy corrupt_clean_dataframe (drop latest, blank summary, truncate title, stale publish, inject noise, duplicate) → re-index → re-evaluate → quality/freshness drop. Repair bằng cách re-clean từ raw records trusted (không sửa tay answers) → quality/freshness phục hồi → metrics phục hồi.

6. **Report:** Role 5 ghi markdown so sánh baseline/corrupted/repaired: metrics bảng, quality checks, freshness, conclusion dự trên số liệu thật trong data/.

## 8. Phân tích kết quả

### Metrics chính

| Metric/signal | Baseline | Corrupted | Repaired | Nhận xét |
| --- | ---: | ---: | ---: | --- |
| `retrieval_hit_rate` | 1.000 | 0.875 | 1.000 | Corruption drop 12.5%, repair khôi phục 100% |
| `mean_token_f1` | 1.000 | 0.839 | 1.000 | Corruption drop 16.1%, repair khôi phục |
| `judge_accuracy` | 1.000 | 0.833 | 1.000 | Corruption drop 16.7%, repair khôi phục |
| `mean_judge_score` | 5.000 | 4.333 | 5.000 | Drop 0.667 điểm, repair quay lại 5/5 |
| Quality checks (PASS) | ✅ 7/7 | ❌ 3/7 | ✅ 7/7 | Corrupted fail: paper_id_unique, summary_not_null, freshness |
| Freshness (is_fresh) | ✅ true | ❌ false | ✅ true | Corrupted stale_rows=1, repaired stale_rows=0 |
| Samples evaluated | 24 | 24 | 24 | Dùng cùng test set cho cả 3 |

### Kết luận từ số liệu

1. **Data corruption làm thay đổi quality signal:** Khi inject 6 loại lỗi (drop, blank summary, truncate title, stale date, noise, duplicate) vào 24 record, quality checks từng khác:
   - `paper_id_unique` fail vì thêm duplicate row.
   - `summary_not_null` fail vì blank 1 summary.
   - `freshness` fail vì stale 1 record (age 365 ngày > threshold 180).

2. **Quality signal ảnh hưởng trực tiếp tới agent metric:** Khi quality check fail (vì dữ liệu corrupt):
   - Retrieval hit rate drop từ 1.0 → 0.875 (1 câu hỏi không tìm được ground truth document).
   - Token F1 drop từ 1.0 → 0.839 (answer bị affect bởi corrupted summary/title).
   - Judge accuracy drop từ 1.0 → 0.833 (LLM evaluate kết quả không chính xác).

3. **Repair từ raw source khôi phục hoàn toàn:** Khi re-clean từ raw Crossref records (không sửa tay answers):
   - Quality check quay lại tất cả PASS (7/7).
   - Freshness quay lại is_fresh=true (stale_rows=0).
   - Retrieval hit rate = 1.0, token F1 = 1.0, judge accuracy = 1.0.
   - Điều này chứng minh repair action hiệu quả 100%, không phải "may mắn".

## 9. Điều học được và hướng cải thiện

### Ba điều quan trọng nhất

1. **Evaluation phải dùng cùng test set, ground truth, evaluator, top_k:** Nếu mỗi lần so sánh dùng test set khác nhau, không thể kết luận thay đổi metric là do data hay do test set. Với baseline/corrupted/repaired, constraint này bảo đảm so sánh công bằng.

2. **Repair không phải sửa tay, phải re-process từ source đáng tin:** Nếu sửa tay answer hoặc metrics, mất luôn ý nghĩa của repair demonstration. Re-clean từ raw Crossref records là cách proof "data fix thực sự giải quyết vấn đề".

3. **Freshness monitoring cần dùng cột `age_days` sẵn có, không hardcode ngày chạy:** Cái này quan trọng để pipeline reproducible — khi chạy lại sau 2 tháng, không muốn freshness check thay đổi kết quả vì ngày hôm nay khác.

### Nếu có thêm thời gian

1. Thêm **Ragas metrics** (answer_relevancy, context_recall, context_precision, faithfulness) khi có LLM provider. Hiện tại skip vì không có GOOGLE_API_KEY, nhưng Ragas sẽ bổ sung chiều nhìn tổng thể hơn.

2. Thêm **visualization** (chart so sánh baseline/corrupted/repaired) trong report hoặc Streamlit UI. Bây giờ chỉ có bảng số, visual sẽ giúp người đọc nhanh chóng nắm tác động.

3. Thêm **statistical test** (paired t-test) để kiểm chứng sự khác biệt giữa baseline vs corrupted có ý nghĩa thống kê không, chứ không chỉ nhìn con số.

## 10. Cam kết của thành viên

- [x] Nội dung báo cáo phản ánh đúng phần việc và mức hiểu của tôi.
- [x] Tôi có thể giải thích luồng end-to-end, không chỉ module mình phụ trách.
- [x] Mọi kết luận về kết quả đều cần artifact hoặc metric để đối chiếu (tất cả số liệu từ chạy thực tế 2026-08-06).
- [x] Tôi không ghi "đã chạy thành công" cho phần chưa được kiểm chứng (nếu chưa chạy sẽ ghi TODO).
- [x] Báo cáo không chứa `.env`, API key, token hoặc secret.
- [x] Báo cáo này không phải bản sao nguyên văn của báo cáo nhóm hoặc báo cáo thành viên khác.

**Họ và tên:** Ngô Thị Ngọc Phượng 
**Ngày xác nhận:** 2026-08-06
