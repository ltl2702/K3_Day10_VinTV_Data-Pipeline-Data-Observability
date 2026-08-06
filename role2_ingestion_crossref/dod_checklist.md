# DoD Checklist - Role 2

Owner: Mai

Trạng thái: Hoàn thành và đã đối chiếu artifact ngày 2026-08-06.

- [x] `src/ingestion/crossref.py` tạo đủ raw API response và parsed records.
  - API response: `data/raw/crossref_response.json`.
  - Parsed records: `data/raw/crossref_records.json`.
  - Code lưu response JSON trước khi gọi `parse_crossref_payload`.
- [x] Raw snapshot có thể truy vết về Crossref item gốc.
  - Đối chiếu 24/24 `message.items[].DOI` với 24/24 `PaperRecord.paper_id`.
  - Sample được ghi trong `handoff_raw_to_clean.md` và `raw_lineage_template.md`.
- [x] Mỗi parsed record có ID ổn định.
  - 24/24 record dùng DOI Crossref đã chuẩn hóa lowercase làm `paper_id`.
  - Không cần fallback ID trong snapshot này; parser loại record không có DOI hợp lệ thay vì tự sinh ID.
  - Có 24 `paper_id` unique, không có duplicate.
- [x] Các field bắt buộc cho cleaning không rỗng bất thường.
  - `title`: 24/24 có dữ liệu.
  - `summary` lấy từ `abstract`, fallback `description`: 24/24 có dữ liệu.
  - `authors`: 24/24 có dữ liệu.
  - `published`: 24/24 có dữ liệu.
- [x] Count raw -> parsed được ghi trong `handoff_raw_to_clean.md`.
  - API items: 24.
  - Parsed records: 24.
  - Invalid/dropped: 0.
- [x] Bất thường được ghi thành blocker/cảnh báo có bằng chứng.
  - `subject` thiếu ở 24/24 raw items, vì vậy `categories=[]` ở 24/24 parsed records.
  - PDF URL thiếu ở 15/24 parsed records; đây là metadata tùy chọn, không chặn cleaning.
  - Branch hiện tại `mairule2` khác branch phân công `role2-ingestion-crossref`; cần thống nhất trước merge/release.
- [x] Retry/backoff đã được xác minh.
  - Chuỗi response giả lập `429 -> 503 -> 200` tạo đúng artifact sau ba request và hai lần backoff.
  - HTTP `400` không retry và fail ngay.
- [x] Snapshot có thể nạp offline.
  - `parse_crossref_payload(crossref_response) == load_raw_records(crossref_records)`.

## Bằng chứng kiểm tra cuối

```text
summary_filter_and_description_fallback=PASS
current_artifact_round_trip=PASS raw=24 parsed=24 dropped=0
handoff_structure_counts_sample_lineage=PASS
branch_handoff_match=PASS branch=mairule2
```
