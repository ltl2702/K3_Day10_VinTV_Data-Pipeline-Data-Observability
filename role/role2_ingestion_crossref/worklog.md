# Worklog - Role 2

Owner: Trần Thị Hoa Mai

Ngày thực hiện: 2026-08-06

Trạng thái: Hoàn thành phần Crossref ingestion và raw lineage.

| Ngày | Việc đã làm | Artifact thay đổi | Lệnh đã chạy | Ghi chú/blocker |
|---|---|---|---|---|
| 2026-08-06 | Đọc contract `Settings`, `PaperRecord` và mapping field Crossref. Chốt DOI lowercase làm stable `paper_id`. | `src/ingestion/crossref.py` | `python -m compileall -q src\ingestion\crossref.py` | Python compile PASS. Parser không tự sinh fallback ID; item thiếu DOI/title/summary bị loại có chủ đích. |
| 2026-08-06 | Implement parse title, abstract/description, authors, subjects, dates, URLs; thêm fallback `description` và bắt buộc summary không rỗng. | `src/ingestion/crossref.py` | Inline Python regression test cho abstract, description fallback, blank abstract và missing summary. | `summary_filter_and_description_fallback=PASS`. |
| 2026-08-06 | Implement HTTP fetch, timeout, retry/backoff cho `429/503`, fail-fast cho HTTP lỗi khác. | `src/ingestion/crossref.py` | Inline Python mock test với chuỗi `429 -> 503 -> 200` và test HTTP `400`. | Retry test PASS: 3 request, 2 backoff; HTTP 400: 1 request, 0 backoff. |
| 2026-08-06 | Fetch Crossref và lưu JSON body trước parse; lưu flat records sau parse. | `data/raw/crossref_response.json`; `data/raw/crossref_records.json` | `python -c "import sys; sys.path.insert(0, 'src'); from core.config import load_settings; from ingestion.crossref import fetch_source_records; print(len(fetch_source_records(load_settings())))"` | 24 raw items, 24 parsed records, invalid/dropped 0. Không refresh source sau khi khóa snapshot. |
| 2026-08-06 | Đối chiếu raw -> parsed, schema, unique ID và field completeness. | Hai raw JSON; `role2_ingestion_crossref/raw_lineage_template.md` | Inline Python audit đọc cả hai JSON và gọi `parse_crossref_payload`/`load_raw_records`. | 24/24 DOI lineage khớp; 24 ID unique; title/summary/authors/published đủ 24/24. |
| 2026-08-06 | Ghi handoff cho Role 3 bằng count và sample thật; rà lại mọi con số với artifact. | `role2_ingestion_crossref/handoff_raw_to_clean.md`; `dod_checklist.md`; `raw_lineage_template.md`; `worklog.md` | Inline Python validate JSON sample, count table và DOI lineage. | Handoff validation PASS. Categories thiếu 24/24; PDF URL thiếu 15/24; không chặn cleaning. |

## Quyết định kỹ thuật

- Lưu `crossref_response.json` trước parse để vẫn còn bằng chứng nguồn nếu parser
  thất bại.
- Dùng DOI Crossref làm `paper_id`; không dùng row index hoặc hash title vì các
  giá trị đó không ổn định giữa các lần fetch.
- Không deduplicate trong ingestion. Role 3 chịu trách nhiệm deduplicate và ghi
  count/lý do trong cleaning.
- Giữ `categories=[]` khi Crossref không có `subject`; không suy diễn category từ
  publisher hoặc work type.
- Repair sử dụng đúng parsed raw snapshot đã khóa, không gọi Crossref lần nữa.

## Blocker/cảnh báo còn lại

- Không có blocker kỹ thuật ngăn Role 3 bắt đầu cleaning.
- Branch thực tế là `mairule2`, khác branch phân công
  `role2-ingestion-crossref`; cần thống nhất trước merge/release.
- Snapshot thiếu categories ở 24/24 record, vì vậy evaluation không nên tạo câu
  hỏi category từ corpus này.
