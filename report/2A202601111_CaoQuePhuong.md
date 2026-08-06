# Báo cáo cá nhân Role 3 - Cleaning, Corruption và Repair

## 1. Thông tin cá nhân

| Thông tin | Nội dung |
| --- | --- |
| Họ và tên | Phương |
| Vai trò | Role 3 - Cleaning, Corruption và Repair |
| Branch | `phuong` |
| Phạm vi | Chuẩn hóa clean schema, tạo nhiễu có kiểm soát, phục hồi từ raw source |
| Ngày báo cáo | 2026-08-06 |

## 2. Phạm vi công việc

Role 3 nhận `data/raw/crossref_records.json` từ Role 2 và bàn giao dataset ổn định cho Role 4 (embedding/index) và Role 5 (evaluation). File phụ trách: `src/ingestion/cleaning.py`, `src/ingestion/corruption.py` và các artifact trong `data/clean/`.

| Giai đoạn | Input | Output | Trạng thái |
| --- | --- | --- | --- |
| Cleaning | Raw `PaperRecord` | `papers_clean.csv/json` | Hoàn thành |
| Corruption | Clean DataFrame | corrupted CSV/JSON | Hoàn thành |
| Repair | Raw records đáng tin cậy | repaired CSV/JSON | Hoàn thành |
| Runtime handoff | Pipeline orchestration | runtime log và metrics | Chưa hoàn tất |

## 3. Cleaning pipeline

Hàm `build_clean_dataframe_with_report()` chuẩn hóa text, DOI, authors/categories; parse ngày; loại record thiếu `paper_id`, `title`, `summary` hoặc ngày hợp lệ; tính `age_days`, `summary_chars`; tạo `text_for_embedding = title + "\\n\\n" + summary`; deduplicate theo `paper_id` và sort ổn định. Schema bàn giao có 16 cột, trong đó `paper_id`, `title`, `summary`, `published`, `text_for_embedding` là field bắt buộc.

## 4. Kết quả artifact

| Signal | Clean | Corrupted | Repaired |
| --- | ---: | ---: | ---: |
| Rows | 24 | 24 | 24 |
| Duplicate `paper_id` | 0 | 1 | 0 |
| Empty summary | 0 | 2 | 0 |
| Maximum `age_days` | 175 | 399 | 175 |
| Số cột | 16 | 16 | 16 |

Artifact: `data/clean/papers_clean.csv/json`, `papers_clean_corrupted.csv/json`, `papers_clean_repaired.csv/json`.

## 5. Thiết kế corruption và lý do

Corruption deterministic để tái hiện cùng lỗi khi chạy lại và so sánh công bằng.

| Kịch bản | Cách thực hiện | Signal | Lý do |
| --- | --- | --- | --- |
| Drop latest | Xóa record có ngày mới nhất | Completeness | Mô phỏng mất dữ liệu khi đồng bộ |
| Blank summary | Gán summary rỗng | Required-field validity | Summary là nội dung chính của embedding |
| Truncate title | Giữ một phần title | Content integrity | Title chứa tín hiệu truy vấn quan trọng |
| Age date | Lùi ngày 365 ngày, cập nhật age | Freshness | Mô phỏng timestamp sai/dữ liệu stale |
| Inject noise | Thêm token không liên quan vào summary | Semantic quality | Schema vẫn hợp lệ nhưng embedding bị nhiễu |
| Duplicate row | Nhân bản một record | Uniqueness | Mô phỏng retry ingestion/merge sai |

## 6. Repair strategy

Repair đọc lại `data/raw/crossref_records.json`, chạy lại toàn bộ cleaning/validation/dedupe, tính lại tuổi dữ liệu và dựng lại text embedding. Chọn cách này vì khôi phục được record bị xóa và giá trị gốc, bảo toàn lineage/reproducibility, không biến lỗi thành placeholder, và tránh sửa tay answers hoặc metrics.

## 7. Xác minh và giới hạn

Đã xác minh các invariant của clean/corrupted/repaired artifact như bảng trên. Do `src/pipelines/phase1.py` và `src/pipelines/corruption_flow.py` hiện còn `NotImplementedError`, runtime count/log end-to-end và metrics RAG ba trạng thái chưa được ghi nhận là kết quả đã chạy. Bước tiếp theo là nối raw -> clean -> baseline -> corruption -> repair, ghi `corruption_log.json`, rồi bàn giao metrics cho Role 5.

## 8. Hướng cải thiện

Bổ sung property-based tests cho invariant (ID unique, required fields không rỗng, age không âm), kiểm tra semantic drift bằng embedding distance, và tự động fail pipeline khi quality check không đạt.

## 9. Cam kết

- [x] Corruption deterministic và có mục đích kiểm thử rõ ràng.
- [x] Repair từ raw/source đáng tin cậy.
- [x] Artifact các trạng thái không ghi đè lẫn nhau.
- [x] Không ghi metrics chưa có artifact xác minh.

**Họ và tên:** Phương
**Ngày xác nhận:** 2026-08-06
