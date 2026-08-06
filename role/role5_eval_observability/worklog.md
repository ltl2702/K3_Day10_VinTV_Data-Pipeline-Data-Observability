# Worklog - Role 5

Ngô Thị Ngọc Phượng cập nhật tiến độ evaluation/observability tại đây.

| Ngày | Việc đã làm | Artifact thay đổi | Lệnh đã chạy | Ghi chú/blocker |
|---|---|---|---|---|
| 2026-08-06 | Implement `build_test_set` (24 câu hỏi: summary/date/authors trên 8 paper đại diện, trải đều toàn cleaned dataframe kể cả record mới nhất). Bỏ qua câu hỏi `categories` vì handoff Role 2 xác nhận 24/24 record không có `subject`. | `src/evaluation/testset.py`, `data/eval/test_set.json` | `python -m compileall -q src` | Không có blocker; ground truth lấy trực tiếp từ cột `summary`/`published`/`authors_joined` của cleaned dataframe. |
| 2026-08-06 | Implement `run_data_quality_checks` (row count, `paper_id` null/unique, missing title/summary, duplicate record, freshness qua `age_days`) và `build_freshness_report`. | `src/observability/quality.py` | — | Freshness dùng `age_days` đã tính sẵn ở Role 3, không giả định ngày hiện tại. |
| 2026-08-06 | Implement `generate_phase1_report` và `generate_corruption_report` (markdown, trỏ artifact thật). | `src/observability/reporting.py` | — | — |
| 2026-08-06 | Implement `src/pipelines/phase1.py` và `src/pipelines/corruption_flow.py` (glue code, chưa ai làm) để có thể thực sự chạy end-to-end và sinh artifact thật cho Role 5. | `src/pipelines/phase1.py`, `src/pipelines/corruption_flow.py` | — | Không thuộc phạm vi file gốc của Role 5 nhưng bắt buộc phải có để tạo artifact theo `evaluation_contract.md`. |
| 2026-08-06 | Tạo `.venv` (Python 3.13, vì máy chỉ có Python 3.14 mặc định) và `pip install -e .`; chạy baseline và corruption flow thật. | `data/eval/test_set.json`, `data/results/*`, `data/quality/*`, `data/reports/*`, `data/embeddings/*`, `data/chroma/*` | `python script/run_phase1.py`; `python script/run_corruption_flow.py` | Baseline: `retrieval_hit_rate=1.0`, `mean_token_f1=1.0`, `judge_accuracy=1.0` (fallback heuristic judge, không có `GOOGLE_API_KEY`). Corrupted: `retrieval_hit_rate=0.875`, quality/freshness FAIL đúng như kỳ vọng. Repaired: quay lại `1.0` và quality/freshness PASS. `RUN_RAGAS` không set nên Ragas bị skip. |
