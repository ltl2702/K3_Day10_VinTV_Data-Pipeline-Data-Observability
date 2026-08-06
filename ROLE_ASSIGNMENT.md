# Chốt phân công, branch, DoD và artifact

Tài liệu này là contract làm việc chung cho 5 role. Mỗi role làm việc trên branch riêng, tạo artifact đúng path trong `src/core/config.py`, và không ghi đè baseline khi chạy corrupted/repaired flow.

## Phân công

| Role | Người phụ trách | Phạm vi | Branch đề xuất | Artifact/output chính |
|---|---|---|---|---|
| Role 1 | Bạn | Cấu hình, orchestration, release | `role1-orchestration-release` | Contract artifact, sơ đồ handoff, lệnh chạy, tiêu chí nghiệm thu |
| Role 2 | Mai | Crossref ingestion + raw lineage | `role2-ingestion-crossref` | `src/ingestion/crossref.py`, `data/raw/` |
| Role 3 | Phương | Cleaning schema, corruption, repair | `role3-cleaning-corruption` | `src/ingestion/cleaning.py`, `src/ingestion/corruption.py`, `data/clean/` |
| Role 4 | Man | RAG, embedding, Chroma, agent | `role4-rag-agent-index` | `src/retrieval/`, `data/embeddings/`, `data/chroma/` |
| Role 5 | Phượng | Evaluation, observability, report | `role5-eval-observability` | `src/evaluation/`, `src/observability/`, `data/results/`, `data/quality/`, `data/reports/` |

## Quy tắc xuyên suốt

- Chỉ chạy corruption sau khi baseline đã tạo đủ artifact.
- Giữ nguyên `test_set`, `ground_truth`, evaluator và `top_k` khi so sánh baseline / corrupted / repaired.
- Dùng path và collection riêng cho ba trạng thái, không ghi đè baseline.
- Repair bằng cách chạy lại từ raw/source đáng tin, không sửa tay answers hoặc metrics.
- Report phải trỏ tới artifact thật.
- Không commit `.env`, API key, `.venv`, cache hoặc secret.

## Lệnh chạy thống nhất

```powershell
uv run python script/run_phase1.py
uv run python script/run_corruption_flow.py
```

## DoD Role 1

- Python đúng version: `>=3.11,<3.14`.
- Dependencies cài bằng `uv sync` hoặc `python -m pip install -e .`.
- Có `.env` local tạo từ `.env.example`, không commit.
- Provider config hợp lệ theo `LLM_PROVIDER`.
- Hai entrypoint được giữ thống nhất:
  - `uv run python script/run_phase1.py`
  - `uv run python script/run_corruption_flow.py`
- Artifact path thống nhất theo `src/core/config.py`.
- Baseline và corruption flow không ghi đè artifact của nhau.
- `group_report.md` đối chiếu đúng với file thật trong `data/`.

