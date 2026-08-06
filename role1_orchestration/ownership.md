# Ownership

| Role | Người phụ trách | Phạm vi | Branch | Artifact/output chính |
|---|---|---|---|---|
| Role 1 | Bạn | Cấu hình, orchestration, release | `role1-orchestration-release` | Contract artifact, sơ đồ handoff, lệnh chạy, tiêu chí nghiệm thu |
| Role 2 | Mai | Crossref ingestion + raw lineage | `role2-ingestion-crossref` | `src/ingestion/crossref.py`, `data/raw/` |
| Role 3 | Phương | Cleaning schema, corruption, repair | `role3-cleaning-corruption` | `src/ingestion/cleaning.py`, `src/ingestion/corruption.py`, `data/clean/` |
| Role 4 | Man | RAG, embedding, Chroma, agent | `role4-rag-agent-index` | `src/retrieval/`, `data/embeddings/`, `data/chroma/` |
| Role 5 | Phượng | Evaluation, observability, report | `role5-eval-observability` | `src/evaluation/`, `src/observability/`, `data/results/`, `data/quality/`, `data/reports/` |

## Quy tắc branch

- Mỗi role làm trên branch được phân công.
- Không commit `.env`, API key, `.venv`, cache hoặc secret.
- Pull/rebase code mới trước khi ghép thay đổi lớn.
- Khi mở PR hoặc merge, phải ghi rõ artifact đã tạo và lệnh đã chạy.

## Definition of Done chung

- Code chạy được bằng entrypoint chuẩn.
- Artifact ghi đúng path contract.
- Report trỏ tới artifact thật trong `data/`.
- Baseline/corrupted/repaired không ghi đè nhau.
- Blocker được ghi bằng chứng cụ thể, không ghi chung chung.

