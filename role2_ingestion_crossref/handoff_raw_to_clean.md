# Handoff Raw -> Clean

Role 2 cập nhật file này trước khi bàn giao cho Role 3.

## Artifact

| Nội dung | Path | Trạng thái | Ghi chú |
|---|---|---|---|
| Raw API response | `data/raw/crossref_response.json` | TODO |  |
| Parsed raw records | `data/raw/crossref_records.json` | TODO |  |

## Count

| Metric | Giá trị | Bằng chứng |
|---|---:|---|
| API item count | TODO |  |
| Parsed record count | TODO |  |
| Invalid/dropped count | TODO |  |

## Sample record

```json
{
  "paper_id": "TODO",
  "doi": "TODO",
  "title": "TODO",
  "summary": "TODO",
  "authors": [],
  "categories": [],
  "published": "TODO"
}
```

## Blocker

- TODO: ghi DOI/ID lỗi, record thiếu field, hoặc lý do cleaning chưa nên chạy.

