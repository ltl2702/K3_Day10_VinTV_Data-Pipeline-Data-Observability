# Clean Contract

Role 3 chốt schema này trước khi Role 4/5 dùng clean data.

## Input

- `data/raw/crossref_records.json`

## Output

- `data/clean/papers_clean.csv`
- `data/clean/papers_clean.json`
- `data/clean/papers_clean_corrupted.csv`
- `data/clean/papers_clean_corrupted.json`
- `data/clean/papers_clean_repaired.csv`
- `data/clean/papers_clean_repaired.json`

## Required columns

| Column | Yêu cầu |
|---|---|
| `paper_id` | Không rỗng, unique sau dedupe |
| `title` | Đã normalize, không rỗng |
| `summary` | Đã normalize, không rỗng nếu record được giữ |
| `authors` | Structured hoặc serialized list nhất quán |
| `categories` | Structured hoặc serialized list nhất quán |
| `published` | Parse được thành ngày |
| `age_days` | Tính từ `published` và ngày chạy pipeline |
| `text_for_embedding` | Gồm title + summary, không rỗng, không lặp vô ích |

## Stop condition

- Dừng pipeline và báo blocker nếu clean count giảm bất thường so với raw parsed count.
- Dừng pipeline nếu `paper_id` duplicate còn tồn tại.
- Dừng pipeline nếu `title`, `summary`, hoặc `text_for_embedding` missing quá ngưỡng nhóm chấp nhận.

