# Role 1 - Pipeline Orchestration & Release

Owner: Lương Thị Linh
Branch: `role1-orchestration-release`

## Phạm vi

- Chốt phân công, branch, artifact contract và tiêu chí hoàn thành.
- Kiểm tra môi trường chạy: Python, dependencies, `.env`, LLM provider.
- Điều phối luồng handoff raw -> clean -> index -> evaluate -> report.
- Kiểm tra trước khi release/nộp: artifact thật, metrics thật, không có secret.

## Các file trong thư mục này

- `ownership.md`: phân công người phụ trách, branch và tiêu chí hoàn thành.
- `artifact_contract.md`: tên/path artifact chuẩn cả nhóm phải dùng.
- `environment_checklist.md`: checklist Python, dependency, provider config và `.env`.
- `handoff_map.md`: sơ đồ bàn giao giữa các role theo pipeline.
- `release_checklist.md`: checklist trước khi chạy/nộp bản cuối.
- `artifact_status.md`: nơi Role 1 ghi trạng thái artifact thật.
- `blockers.md`: nơi ghi blocker có bằng chứng.

## Lệnh chạy chuẩn

```powershell
uv sync
uv run python script/run_phase1.py
uv run python script/run_corruption_flow.py
```

## Quy tắc xuyên suốt

- Chỉ chạy corruption sau khi baseline đã tạo đủ artifact.
- Giữ nguyên test set, ground truth, evaluator và top-k khi so sánh baseline / corrupted / repaired.
- Dùng paths và collection riêng cho ba trạng thái; không ghi đè baseline.
- Repair bằng cách chạy lại từ raw/source đáng tin, không sửa tay answers hoặc metrics.
- Report phải trỏ tới artifact thật; không commit API key hoặc `.env`.

