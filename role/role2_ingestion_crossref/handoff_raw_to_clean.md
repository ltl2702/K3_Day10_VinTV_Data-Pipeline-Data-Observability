# Handoff Raw -> Clean

Role 2 cập nhật file này trước khi bàn giao cho Role 3.

Owner: Trần Thị Hoa Mai
Branch hiện đang checkout: `mairule2`  
Branch theo phân công: `role2-ingestion-crossref`

## Artifact

| Nội dung | Path | Trạng thái | Ghi chú |
|---|---|---|---|
| Raw API response | `data/raw/crossref_response.json` | Hoàn thành | JSON body nguyên bản về cấu trúc được lưu trước khi parse; Crossref trả `status=ok`, `message-type=work-list`. |
| Parsed raw records | `data/raw/crossref_records.json` | Hoàn thành | Danh sách phẳng gồm 24 record theo đúng toàn bộ field của `PaperRecord`; có thể nạp offline bằng `load_raw_records`. |

## Count

| Metric | Giá trị | Bằng chứng |
|---|---:|---|
| API item count | 24 | `len(crossref_response["message"]["items"])` |
| Parsed record count | 24 | `len(crossref_records)` |
| Invalid/dropped count | 0 | `API item count - parsed record count = 24 - 24 = 0`; cả 24 item đều có DOI hợp lệ, title và abstract/description không rỗng. |

Đối chiếu bổ sung:

| Tín hiệu | Giá trị |
|---|---:|
| `paper_id` unique | 24/24 |
| DOI raw khớp `paper_id` parsed | 24/24 |
| Record thiếu title | 0 |
| Record thiếu summary | 0 |
| Record thiếu authors | 0 |
| Record thiếu published | 0 |
| Record thiếu categories | 24 |
| Record thiếu PDF URL | 15 |

## Sample record

Sample dưới đây được đối chiếu trực tiếp với DOI trong raw response và record
thứ hai trong `crossref_records.json`. Trường `doi` được ghi thêm trong handoff
để thể hiện lineage; schema `PaperRecord` dùng tên `paper_id` cho chính DOI đã
chuẩn hóa.

```json
{
  "paper_id": "10.36227/techrxiv.177272838.89432844/v1",
  "doi": "10.36227/techrxiv.177272838.89432844/v1",
  "title": "A Survey of (Deep RAG) Deep Retrieval Augmented Generation and Reasoning in Large Language Models",
  "summary": "Retrieval-Augmented Generation (RAG) has emerged as a powerful paradigm for combining large language models with external knowledge sources to produce accurate, context-aware, and verifiable outputs. In this survey, we focus on an advanced instantiation of this paradigm, referred to as Deep RAG, which integrates reasoning, memory, and multi-step planning into end-to-end research workflows. We provide a structured overview of Deep RAG systems, covering key components such as query planning, information retrieval, memory management, and answer generation, as well as practical optimization techniques including supervised fine-tuning, iterative self-evolving, and agentic reinforcement learning. We analyze different planning strategies, adaptive retrieval mechanisms, conflict resolution methods, and multimodal synthesis, highlighting both their strengths and limitations. By categorizing approaches according to workflow types, reasoning strategies, and optimization paradigms, we clarify the current landscape and identify open challenges for evaluation, scalability, and multimodal reasoning. This survey aims to provide a comprehensive roadmap for designing flexible, reliable, and intelligent Deep RAG systems capable of performing complex, real-world research tasks with minimal human supervision.",
  "authors": [
    "Lihui Liu"
  ],
  "categories": [],
  "published": "2026-03-05"
}
```

DOI lineage của sample:

```text
crossref_response.message.items[].DOI = 10.36227/techrxiv.177272838.89432844/v1
crossref_records[].paper_id           = 10.36227/techrxiv.177272838.89432844/v1
```

## Blocker

- Không có DOI/ID lỗi trong snapshot hiện tại; invalid/dropped count bằng 0.
- Không có blocker ngăn Role 3 bắt đầu cleaning: mọi record đều có
  `paper_id`, `title`, `summary`, `authors` và `published`.
- Khoảng trống dữ liệu cần giữ nguyên và báo cáo: cả 24 Crossref item không có
  `subject`, nên `categories=[]` và `primary_category=""`. Role 3 không được tự
  suy diễn category; Role 5 không nên tạo câu hỏi category từ snapshot này.
- Có 15 record không có PDF URL. Đây là metadata tùy chọn và không chặn
  cleaning/embedding vì `abs_url` có đủ 24/24.
- Branch hiện tại là `mairule2`, khác tên branch trong phân công là
  `role2-ingestion-crossref`. Điều phối viên cần thống nhất tên branch trước khi
  merge/release; khác biệt này không ảnh hưởng nội dung raw handoff.
- Sau khi baseline được khóa, không fetch lại Crossref trong corruption flow.
  Repair phải gọi `load_raw_records("data/raw/crossref_records.json")` và chạy
  lại cleaning từ đúng snapshot này.
