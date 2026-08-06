# Role 5 - Evaluation, Observability và Report

Owner: Ngô Thị Ngọc Phượng
Branch: `role5-eval-observability`

## Phạm vi

- Test set.
- Metrics.
- Data quality và freshness.
- Report baseline/corruption.

## File/chuyên mục phụ trách

- `src/evaluation/`
- `src/observability/`
- `data/eval/`
- `data/results/`
- `data/quality/`
- `data/reports/`

## Việc cần làm trong mốc này

- Chọn paper đại diện từ cleaned dataframe, không dùng raw chưa clean.
- Viết draft question/ground truth có thể kiểm chứng bằng nội dung paper.
- Chờ `paper_id` stable trước khi ghi test set.
- Hoàn thiện check row count, `paper_id` unique, title/summary missing và duplicate.
- Tạo freshness input từ `published`/`age_days`, không giả định ngày hiện tại.
- Ghi quality report đầu tiên để làm bằng chứng baseline.

## Điều kiện bàn giao

- Test set dùng clean artifact và stable paper ID.
- Metrics baseline/corrupted/repaired dùng cùng evaluator, ground truth và `top_k`.
- Report trỏ tới artifact thật trong `data/`.
- Quality/freshness report có bằng chứng để Role 1 release.

