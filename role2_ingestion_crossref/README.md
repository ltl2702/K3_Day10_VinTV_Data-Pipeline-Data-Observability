# Role 2 - Crossref Ingestion và Raw Lineage

Owner: Trần Thị Hoa Mai

Branch theo phân công: `role2-ingestion-crossref`

Branch hiện đang checkout: `mairule2`

Trạng thái: Hoàn thành ingestion và raw lineage; chờ Role 3 nhận handoff.

## Phạm vi

- Crossref ingestion.
- Raw snapshot và lineage.
- Bàn giao raw path, raw count và sample record cho Role 3.

## File/chuyên mục phụ trách

- `src/ingestion/crossref.py`
- `data/raw/crossref_response.json`
- `data/raw/crossref_records.json`

## Việc cần làm trong mốc này

- Đối chiếu raw snapshot với `PaperRecord` đã parse.
- Truy vết DOI/ID lỗi.
- Xác minh raw records có đủ field để cleaning không phải đoán dữ liệu.
- Bàn giao raw path và sample record cho cleaning owner.

## Điều kiện bàn giao

- Raw response lưu đúng path contract.
- Parsed records có stable ID hoặc DOI để Role 3 dedupe.
- Có count: raw API item count, parsed record count, dropped/invalid count.
- Có sample record hợp lệ trong `handoff_raw_to_clean.md`.

