# Release Checklist

Role 1 dùng checklist này trước khi nộp hoặc merge bản cuối.

## Cấu hình

- [ ] Python version đúng: `>=3.11,<3.14`.
- [ ] Dependencies đã cài bằng `uv sync` hoặc `python -m pip install -e .`.
- [ ] `.env` local tồn tại nhưng không commit.
- [ ] Provider config hợp lệ theo `LLM_PROVIDER`.

## Entrypoint

- [ ] `uv run python script/run_phase1.py` còn chạy được.
- [ ] `uv run python script/run_corruption_flow.py` còn chạy được.

## Artifact

- [ ] Artifact path thống nhất theo `src/core/config.py`.
- [ ] Baseline artifact tồn tại.
- [ ] Corrupted artifact tồn tại.
- [ ] Repaired artifact tồn tại.
- [ ] Baseline và corruption flow không ghi đè artifact của nhau.

## So sánh

- [ ] Cùng test set.
- [ ] Cùng ground truth.
- [ ] Cùng evaluator.
- [ ] Cùng `top_k`.
- [ ] Không sửa tay answers hoặc metrics.

## Report

- [ ] `report/group_report.md` đối chiếu đúng với file thật trong `data/`.
- [ ] `data/reports/phase1_report.md` tồn tại nếu report có nhắc tới.
- [ ] `data/reports/corruption_report.md` tồn tại nếu report có nhắc tới.
- [ ] Blocker được ghi rõ bằng chứng nếu còn vấn đề chưa xử lý.

## Secret hygiene

- [ ] Không commit `.env`.
- [ ] Không commit API key.
- [ ] Không commit `.venv`.
- [ ] Không commit cache hoặc file secret.

