# Environment Checklist

Role 1 dùng file này để kiểm tra môi trường trước khi điều phối chạy pipeline.

## Python

- [ ] Python version nằm trong khoảng `>=3.11,<3.14`.
- [ ] Có thể chạy:

```powershell
python --version
```

## Dependencies

- [ ] Đã chạy một trong hai lệnh:

```powershell
uv sync
```

hoặc:

```powershell
python -m pip install -e .
```

- [ ] Không commit `.venv`.
- [ ] Không commit cache sinh ra khi chạy tool.

## Environment variables

- [ ] Có `.env` local tạo từ `.env.example`.
- [ ] `.env` không được commit.
- [ ] `LLM_PROVIDER` hợp lệ.
- [ ] API key tương ứng provider đã có nếu provider cần key.

## Lệnh smoke test

```powershell
uv run python script/run_phase1.py
uv run python script/run_corruption_flow.py
```

## Ghi chú kiểm tra

- Python version: TODO
- Cách cài dependencies đã dùng: TODO
- `LLM_PROVIDER`: TODO
- Blocker môi trường: TODO

