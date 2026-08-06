# Worklog - Role 4

Owner: Man

Ngày thực hiện: 2026-08-06

Trạng thái: Hoàn thành embedding, index và smoke test cho ba trạng thái.

| Ngày | Việc đã làm | Artifact thay đổi | Lệnh đã chạy | Ghi chú/blocker |
|---|---|---|---|---|
| 2026-08-06 | Đọc `LocalEmbeddingIndex`, `MiniLMEmbeddings`, `agent.py`, `qa.py` để chốt input/output contract. Xác định 9 cột clean bắt buộc và 8 field metadata tối thiểu. | Không | Đọc code, không chạy build | `_build_documents` raise `KeyError` nếu thiếu bất kỳ cột nào; đã ghi danh sách cột vào `index_handoff.md`. |
| 2026-08-06 | Dry-run MiniLM + Chroma trong thư mục temp khi clean schema chưa chốt, để không tạo rác trong `data/chroma/`. | Không (temp dir) | Inline Python dựng index từ `crossref_records.json` | 384 chiều, norm 1.0, search/lookup PASS. Phát hiện Chroma chỉ chấp nhận tên collection 3-512 ký tự. |
| 2026-08-06 | Xác minh `_derive_collection_name` map đúng ba manifest path sang ba collection name theo contract. | Không | Inline Python gọi `_derive_collection_name` cho 4 trường hợp | baseline/corrupted/repaired đúng contract; `None` fallback về `papers-baseline`. |
| 2026-08-06 | Kiểm tra schema ba file clean của Role 3 trước khi build final index. | Không | `pandas.read_csv` trên ba file clean | 24 rows mỗi file, đủ cột bắt buộc. Corrupted có 1 duplicate `paper_id` và 2 summary rỗng đúng như thiết kế corruption. |
| 2026-08-06 | Build ba Chroma collection thật từ ba file clean. | `data/chroma/`; `data/embeddings/papers_embeddings.json`; `papers_embeddings_corrupted.json`; `papers_embeddings_repaired.json` | Inline Python gọi `LocalEmbeddingIndex.build` cho ba state | baseline=24, corrupted=24, repaired=24 document. |
| 2026-08-06 | Chạy smoke query và lookup trên cả ba collection, kiểm tra metadata completeness và isolation. | `role4_rag_agent_index/search_smoke_test_template.md` | Inline Python gọi `LocalEmbeddingIndex.load` + `search` + `lookup` | 3 query x 3 state đều trả đủ 4 kết quả, metadata đủ 8 field. Baseline không bị ghi đè. |
| 2026-08-06 | Đối chiếu document giữa baseline và corrupted để chứng minh corruption đã vào index. | `role4_rag_agent_index/index_handoff.md` | Inline Python diff `documents` của hai manifest | 1 document bị drop, 1 `paper_id` duplicate, 3 document đổi content. Ranking của `10.1007/s10278-026-02086-9` đổi từ 4 sang 3. |
| 2026-08-06 | Ghi handoff, smoke test và DoD bằng số liệu thật. | `index_handoff.md`; `search_smoke_test_template.md`; `dod_checklist.md`; `worklog.md` | Đối chiếu lại từng con số với manifest và collection | Handoff sẵn sàng cho Role 5. |

## Quyết định kỹ thuật

- Giữ nguyên `sentence-transformers/all-MiniLM-L6-v2` từ `settings.embedding_model`,
  không đổi model để ba trạng thái so sánh được với nhau.
- Dùng cosine space thay vì L2 vì vector đã được normalize; score `1 - distance`
  nằm trong khoảng dễ đọc cho report.
- Giữ `record_id = {paper_id}::{row_index}` thay vì dùng `paper_id` làm ID. Nếu
  dùng `paper_id`, Chroma sẽ ghi đè bản duplicate và corruption scenario
  "duplicate rows" sẽ biến mất khỏi index.
- Không tự dedupe hay vá dữ liệu corrupted trước khi index. Index phải phản ánh
  đúng chất lượng dữ liệu đầu vào thì Role 5 mới đo được impact.
- Ba collection tách biệt trong cùng một persistent store `data/chroma/` thay vì
  ba thư mục riêng, để `LocalEmbeddingIndex.load` chỉ cần manifest path.

## Blocker/cảnh báo còn lại

- Không có blocker kỹ thuật ngăn Role 5 chạy evaluation.
- Branch thực tế là `role4`, khác branch phân công `role4-rag-agent-index`;
  cần thống nhất trước merge/release.
- Corpus thiếu `subject` ở 24/24 record nên `categories_joined` là
  `uncategorized` toàn bộ; câu hỏi dạng categories sẽ không phân biệt được document.
- Search luôn trả đủ `top_k` kết quả kể cả với query rỗng hoặc gibberish. Đây là
  hành vi của Chroma, không phải lỗi; evaluator phải chấm hit bằng `paper_id`.
