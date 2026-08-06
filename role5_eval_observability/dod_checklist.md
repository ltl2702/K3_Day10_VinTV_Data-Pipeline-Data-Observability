# DoD Checklist - Role 5

- [x] Test set tạo từ cleaned dataframe (`build_test_set` đọc `data/clean/papers_clean.json`, không dùng raw).
- [x] Ground truth kiểm chứng được bằng nội dung paper (summary/published/authors_joined lấy trực tiếp từ dòng tương ứng; câu hỏi nhúng title trong nháy đơn để agent lookup exact match).
- [x] `paper_id` stable trước khi ghi test set (chạy sau khi Role 3 clean xong, `ground_truth_doc_ids` dùng `paper_id` gốc từ Crossref DOI).
- [x] Baseline quality report đã có (`data/quality/baseline_quality_report.json`, tất cả check PASS trên 24 record).
- [x] Freshness không dùng ngày giả định (`build_freshness_report` dùng cột `age_days`/`published` đã tính ở Role 3, không hardcode ngày hiện tại).
- [x] Baseline/corrupted/repaired dùng cùng evaluator và `top_k` (`evaluate_pipeline` + `settings.top_k` dùng chung qua cả 3 lần chạy trong `phase1.py`/`corruption_flow.py`, cùng `data/eval/test_set.json`).
- [x] Report trỏ tới file thật trong `data/` (`phase1_report.md`, `corruption_report.md` trích số liệu trực tiếp từ `data/results/*.json` và `data/quality/*.json` đã chạy thật).

## Bằng chứng chạy thật (2026-08-06)

| State | `retrieval_hit_rate` | `mean_token_f1` | `judge_accuracy` | Quality passed | Freshness `is_fresh` |
|---|---:|---:|---:|---|---|
| Baseline | 1.000 | 1.000 | 1.000 | true | true |
| Corrupted | 0.875 | 0.839 | 0.833 | false | false |
| Repaired | 1.000 | 1.000 | 1.000 | true | true |
