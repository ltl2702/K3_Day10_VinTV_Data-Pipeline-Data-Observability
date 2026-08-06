# DoD Checklist - Role 2

- [ ] `src/ingestion/crossref.py` tạo đủ raw API response và parsed records.
- [ ] Raw snapshot có thể truy vết về Crossref item gốc.
- [ ] Mỗi parsed record có ID ổn định: DOI ưu tiên, fallback ID nếu cần.
- [ ] Field cần cho cleaning không rỗng bất thường: title, summary/abstract, authors, published.
- [ ] Count raw -> parsed được ghi trong `handoff_raw_to_clean.md`.
- [ ] Bất thường được ghi thành blocker có bằng chứng.

