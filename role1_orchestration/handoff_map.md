# Handoff Map

Sơ đồ bàn giao chính:

```text
Role 2 Crossref/raw
  -> Role 3 cleaning/corruption/repair
  -> Role 4 embedding/index/RAG
  -> Role 5 evaluation/observability/report
  -> Role 1 release check
```

## Handoff 1: Raw -> Clean

Owner tạo: Role 2  
Owner nhận: Role 3

Yêu cầu trước khi bàn giao:

- `data/raw/crossref_response.json` tồn tại.
- `data/raw/crossref_records.json` tồn tại.
- Có raw count, parsed count, invalid/dropped count.
- Có sample record đủ field để cleaning không phải đoán dữ liệu.

## Handoff 2: Clean -> Index

Owner tạo: Role 3  
Owner nhận: Role 4

Yêu cầu trước khi bàn giao:

- `paper_id` unique.
- `title`, `summary`, `published`, `age_days`, `text_for_embedding` đạt contract.
- Có count raw -> clean và lý do filter/dedupe.
- Clean schema đã ổn định.

## Handoff 3: Index -> Evaluation

Owner tạo: Role 4  
Owner nhận: Role 5

Yêu cầu trước khi bàn giao:

- Chroma collection đúng tên cho baseline/corrupted/repaired.
- Embedding manifest tồn tại.
- Search trả về metadata cần để evaluator đối chiếu.
- `top_k` dùng config chung.

## Handoff 4: Report -> Release

Owner tạo: Role 5  
Owner nhận: Role 1

Yêu cầu trước khi bàn giao:

- Metrics và answers tồn tại cho baseline/corrupted/repaired.
- Quality/freshness report tồn tại.
- Report markdown trỏ tới artifact thật trong `data/`.
- Không sửa tay answers hoặc metrics.

