# Raw Lineage - Role 2

File này ghi kết quả truy vết raw response sang `PaperRecord` và các field
thiếu trong snapshot Crossref dùng cho baseline.

## Nguồn và phạm vi

| Thuộc tính | Giá trị |
|---|---|
| Source | Crossref REST API `https://api.crossref.org/works` |
| Query | `agentic retrieval augmented generation large language model` |
| Filter | `from-pub-date:2026-02-07,has-abstract:true` |
| Requested rows | 24 |
| Raw API items | 24 |
| Parsed records | 24 |
| Invalid/dropped | 0 |

`Raw source index` là vị trí zero-based trong
`crossref_response["message"]["items"]`. Do không có record bị drop, index này
cũng khớp vị trí của record tương ứng trong `crossref_records.json`.

## Lineage đã xác minh

| `paper_id` | DOI | Raw source index | Field lỗi/thiếu | Cách xử lý | Ghi chú |
|---|---|---:|---|---|---|
| `10.36227/techrxiv.177272838.89432844/v1` | `10.36227/techrxiv.177272838.89432844/v1` | 1 | `subject`; không có PDF link được nhận diện | Giữ `categories=[]`, `primary_category=""`, `pdf_url=""`; không tự suy diễn | Sample handoff; title, summary, authors, published và `abs_url` đều có dữ liệu. |
| `10.63646/kpqm1958` | `10.63646/kpqm1958` | 2 | `subject` | Giữ `categories=[]`, `primary_category=""` | Có PDF URL thật: `https://inatgi.net/index.php/jaiaa/article/download/806/945`. |

## Bất thường tổng hợp

| Bất thường | Record bị ảnh hưởng | Raw source index | Xử lý/bàn giao |
|---|---:|---|---|
| DOI/ID không hợp lệ | 0/24 | Không có | Không cần fallback ID; mọi `paper_id` lấy từ DOI Crossref hợp lệ. |
| Thiếu title | 0/24 | Không có | Không có record bị drop bởi title. |
| Thiếu abstract/description | 0/24 | Không có | 24/24 summary được parse từ abstract; fallback description đã được implement nhưng không cần dùng trong snapshot này. |
| Thiếu authors | 0/24 | Không có | Cleaning có thể dùng trực tiếp danh sách authors. |
| Thiếu published | 0/24 | Không có | Cleaning có đủ input để tính `age_days`. |
| Thiếu `subject`/categories | 24/24 | `0-23` | Bảo toàn list rỗng; Role 3 không tự tạo category, Role 5 không tạo câu hỏi category từ snapshot này. |
| Thiếu PDF URL được nhận diện | 15/24 | `0, 1, 3, 4, 5, 6, 7, 8, 9, 12, 17, 18, 19, 20, 22` | Giữ `pdf_url=""`; không chặn cleaning/embedding vì `abs_url` đủ 24/24. |

## Quy tắc stable ID

```text
Crossref item.DOI
  -> trim whitespace
  -> lowercase
  -> bỏ prefix doi:/https://doi.org/http://dx.doi.org nếu có
  -> PaperRecord.paper_id
```

Parser không deduplicate ở ingestion để Role 3 có thể đo và báo cáo duplicate
trong cleaning. Snapshot hiện tại có 24/24 ID unique.

## Kết luận bàn giao

Không có blocker ngăn cleaning chạy. Khoảng trống categories và PDF URL đã được
ghi rõ để downstream không đoán dữ liệu. Repair phải đọc lại
`data/raw/crossref_records.json`, không fetch corpus mới và không sửa tay clean
data.
