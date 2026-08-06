# Role 3 - Cleaning, Corruption và Repair

Owner: Cao Quế Phương
Branch: `role3-cleaning-corruption`

## Phạm vi

- Clean schema.
- Corruption flow.
- Repair bằng cách chạy lại từ raw/source đáng tin.

## File/chuyên mục phụ trách

- `src/ingestion/cleaning.py`
- `src/ingestion/corruption.py`
- `data/clean/`
- `data/results/corruption_log.json`

## Việc cần làm trong mốc này

- Normalize title, summary, authors, categories.
- Parse published date.
- Dedupe theo stable ID.
- Tính `age_days`.
- Build `text_for_embedding`.
- Ghi clean artifacts và log/count lý do filter hoặc dedupe.

## Điều kiện bàn giao

- Clean artifacts đúng path trong `src/core/config.py`.
- Schema ổn định trước khi Role 4 build index và Role 5 tạo test set.
- Có count raw -> clean và lý do filter/dedupe.
- Corruption chỉ chạy sau baseline.

