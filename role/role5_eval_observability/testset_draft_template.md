# Test Set Draft Template

Chỉ điền từ cleaned dataframe, không dùng raw chưa clean.

Bộ test set thật (`data/eval/test_set.json`, sinh bởi `build_test_set` trong
`src/evaluation/testset.py`) có 24 câu hỏi trên 8 paper đại diện (trải đều
theo `published`, gồm cả paper mới nhất). Mỗi paper có câu hỏi `summary` và
`date`; câu hỏi `authors` chỉ thêm khi `authors_joined` không rỗng. Câu hỏi
`categories` bị bỏ hoàn toàn vì handoff Role 2 xác nhận toàn bộ 24 record
Crossref không có trường `subject` (`categories=[]`, `primary_category=""`).

| `paper_id` | Câu hỏi | Ground truth | Evidence trong paper | Ghi chú |
|---|---|---|---|---|
| `10.2118/234689-pa` | What is the paper 'SafeRAG: ...' about? Answer in one sentence. | Câu đầu của `summary` | Cột `summary` của chính record này | `question_type=summary`, paper mới nhất (published 2026-08-01) |
| `10.2118/234689-pa` | When was the paper 'SafeRAG: ...' published? | `2026-08-01` | Cột `published` | `question_type=date` |
| `10.2118/234689-pa` | Who authored the paper 'SafeRAG: ...'? | `Qianwen Cao, Chiyu Zhang, Junxiong Ning, Gongru Li` | Cột `authors_joined` | `question_type=authors` |
| `10.2196/preprints.106157` | When was the paper 'Does retrieval-augmented generation impact medical students...' published? | `2026-07-03` | Cột `published` | Paper này bị corruption flow làm cũ đi 365 ngày (`age_published_date`), dùng để đo impact |

Toàn bộ 24 dòng thật nằm trong `data/eval/test_set.json`; bảng trên chỉ trích
mẫu để đối chiếu thủ công.
