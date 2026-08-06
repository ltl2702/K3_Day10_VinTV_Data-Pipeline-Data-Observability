# Member Role Report - Day 10: Data Pipeline & Data Observability

## 1. Thông tin cá nhân

| Thông tin | Nội dung |
| --- | --- |
| Họ và tên | Lương Thị Linh |
| MSSV | 2A202601015 |
| Khóa/Lớp | K3 |
| Tên nhóm | VinTV |
| Vai trò chính | Role 1 - Cấu hình, orchestration, release |
| Branch phụ trách | `intergration` |
| Repository | https://github.com/ltl2702/K3_Day10_VinTV_Data-Pipeline-Data-Observability |
| Ngày hoàn thành | 06/08/2026 |

## 2. Vai trò và phạm vi công việc

### Phần việc sở hữu

| Module/deliverable | File/hàm phụ trách | Input nhận vào | Output bàn giao | Trạng thái |
| --- | --- | --- | --- | --- |
| Artifact contract | `role1_orchestration/artifact_contract.md`, `src/core/config.py` | Yêu cầu artifact của 5 role và path trong project | Danh sách artifact chuẩn cho raw, clean, embeddings, Chroma, evaluation, quality và reports | Hoàn thành |
| Handoff map | `role1_orchestration/handoff_map.md` | Luồng raw -> clean -> index -> evaluation -> report | Sơ đồ bàn giao giữa Role 2, 3, 4, 5 và Role 1 | Hoàn thành |
| Environment checklist | `role1_orchestration/environment_checklist.md`, `.env.example`, `pyproject.toml` | Điều kiện chạy pipeline, provider config, Python version | Checklist kiểm tra môi trường trước khi chạy pipeline | Hoàn thành |
| Release checklist | `role1_orchestration/release_checklist.md` | Quy tắc nghiệm thu, entrypoint, artifact thật | Checklist trước khi merge/nộp bài | Hoàn thành |
| Theo dõi artifact và blocker | `role1_orchestration/artifact_status.md`, `role1_orchestration/blockers.md` | Artifact từ các role khác | Bảng trạng thái artifact và nơi ghi blocker có bằng chứng | Hoàn thành |
| Báo cáo phân công nhóm | `report/group_report.md` | Phân công role, branch, deliverable | Bảng “Thành viên và phân công” đã điền đủ 5 role | Hoàn thành |

### Việc hỗ trợ ngoài phạm vi chính

| Hoạt động | Thành viên/module được hỗ trợ | Kết quả |
| --- | --- | --- |
| Chuẩn hóa contract raw -> clean | Role 2 và Role 3 | Làm rõ artifact raw, parsed records, clean schema, count và điều kiện dừng |
| Chuẩn hóa contract clean -> index | Role 3 và Role 4 | Làm rõ yêu cầu `paper_id`, `title`, `summary`, `age_days`, `text_for_embedding` và collection riêng |
| Chuẩn hóa contract index -> evaluation | Role 4 và Role 5 | Làm rõ invariant khi so sánh: cùng test set, ground truth, evaluator và `top_k` |
| Chuẩn hóa yêu cầu report | Role 5 và cả nhóm | Report phải trỏ tới artifact thật trong `data/`, không ghi metrics hoặc answers bằng tay |

## 3. Kết quả theo vai trò

| Nhiệm vụ đã thực hiện | File/hàm/artifact liên quan | Kết quả bàn giao | Cách xác minh |
| --- | --- | --- | --- |
| Chốt phân công, branch và artifact chính | `ROLE_ASSIGNMENT.md`, `report/group_report.md` | Bảng phân vai đủ 5 role, có owner, branch và artifact/output chính | Mở `report/group_report.md`, mục “Thành viên và phân công” |
| Chốt artifact path dùng chung | `role1_orchestration/artifact_contract.md`, `src/core/config.py` | Contract path cho raw, clean, embeddings, Chroma, evaluation, results, quality, reports | Đối chiếu path trong report với `src/core/config.py` |
| Thiết kế sơ đồ handoff | `role1_orchestration/handoff_map.md` | Quy định điều kiện bàn giao từ raw sang clean, clean sang index, index sang evaluation và report sang release | Kiểm tra từng handoff có input, output và owner rõ ràng |
| Lập checklist môi trường và release | `role1_orchestration/environment_checklist.md`, `role1_orchestration/release_checklist.md` | Checklist Python, dependencies, `.env`, provider config, entrypoint và secret hygiene | Chạy theo checklist trước khi nộp |
| Tạo nơi theo dõi tiến độ và blocker | `role1_orchestration/artifact_status.md`, `role1_orchestration/blockers.md` | Bảng để ghi artifact thật, trạng thái và blocker có bằng chứng | Cập nhật khi các role bàn giao artifact |

Output cụ thể của Role 1 là bộ tài liệu điều phối trong `role1_orchestration/` và bảng phân công trong `report/group_report.md`. Các file này giúp cả nhóm thống nhất path, thứ tự chạy, điều kiện nghiệm thu và trách nhiệm bàn giao.

## 4. Giải thích phần kỹ thuật đã thực hiện

### Vấn đề cần giải quyết

Pipeline có nhiều bước phụ thuộc nhau: ingestion phải tạo raw artifact trước, cleaning phải chốt schema trước khi build index, evaluation phải dùng cùng test set để so sánh baseline/corrupted/repaired, và report phải đối chiếu với artifact thật. Nếu không có contract chung, từng role có thể đặt tên file khác nhau, ghi đè baseline hoặc so sánh metrics không công bằng.

### Cách triển khai

Tôi chuẩn hóa orchestration theo thứ tự:

```text
Crossref raw
  -> cleaning schema
  -> embedding + Chroma index
  -> baseline evaluation
  -> quality/freshness report
  -> corruption
  -> re-index/re-evaluate
  -> repair từ raw/source đáng tin
  -> comparison report
```

Các quyết định chính:

- Dùng `src/core/config.py` làm nguồn chuẩn cho artifact path.
- Giữ hai entrypoint thống nhất:
  - `uv run python script/run_phase1.py`
  - `uv run python script/run_corruption_flow.py`
- Tách artifact baseline, corrupted và repaired để tránh ghi đè.
- Yêu cầu so sánh phải dùng cùng test set, ground truth, evaluator và `top_k`.
- Repair phải chạy lại từ raw/source đáng tin, không sửa tay answers hoặc metrics.
- Report chỉ kết luận dựa trên file thật trong `data/`.

### Input, output và contract

| Thành phần | Mô tả |
| --- | --- |
| Input | Yêu cầu phân công, branch, DoD, artifact path, module phụ trách của 5 role |
| Output | `ROLE_ASSIGNMENT.md`, `role1_orchestration/*.md`, bảng phân công trong `report/group_report.md` |
| Module phụ thuộc | `src/core/config.py`, `src/pipelines/phase1.py`, `src/pipelines/corruption_flow.py`, `script/run_phase1.py`, `script/run_corruption_flow.py` |
| Module sử dụng output | Role 2 ingestion, Role 3 cleaning/corruption, Role 4 RAG/index, Role 5 evaluation/report |
| Điều kiện lỗi cần xử lý | Artifact thiếu, path sai contract, baseline bị ghi đè, `.env` hoặc secret bị commit, report trỏ tới file không tồn tại |

### Cách xác minh

```powershell
python --version
uv sync
uv run python script/run_phase1.py
uv run python script/run_corruption_flow.py
```

- **Kết quả mong đợi:** Python nằm trong khoảng `>=3.11,<3.14`, dependencies cài được, hai entrypoint chạy và sinh artifact đúng path.
- **Kết quả thực tế:** TODO: điền sau khi chạy trên máy nộp bài.
- **Artifact/log:** `data/raw/`, `data/clean/`, `data/embeddings/`, `data/chroma/`, `data/eval/`, `data/results/`, `data/quality/`, `data/reports/`.

## 5. Một quyết định kỹ thuật quan trọng

- **Bối cảnh:** Nhóm cần so sánh baseline, corrupted và repaired một cách công bằng.
- **Các phương án đã cân nhắc:** Dùng chung một collection/path và ghi đè khi chạy lại; hoặc tách riêng artifact và collection cho từng trạng thái.
- **Phương án đã chọn:** Tách riêng artifact và collection cho baseline, corrupted và repaired.
- **Lý do:** Cách này giúp truy vết được từng trạng thái, tránh mất baseline, và đảm bảo kết luận trong report có artifact để đối chiếu. Chi phí lưu trữ tăng nhẹ nhưng đổi lại reproducibility và data lineage tốt hơn.
- **Bằng chứng quyết định phù hợp:** Contract đã quy định collection `papers-baseline`, `papers-corrupted`, `papers-repaired` và các file metrics/answers riêng trong `data/results/`.

## 6. Một lỗi hoặc blocker đã xử lý

- **Triệu chứng/lỗi:** Khi kiểm tra trạng thái git, repository báo `detected dubious ownership`.
- **Lệnh hoặc bước tái hiện:** `git status --short`.
- **Nguyên nhân gốc:** Workspace được sở hữu bởi user khác với user sandbox đang chạy lệnh, nên Git chặn thao tác để bảo vệ repository.
- **Cách xử lý:** Không thay đổi cấu hình git toàn cục trong lúc làm báo cáo; tiếp tục cập nhật file bằng thao tác trực tiếp trong workspace và tránh dựa vào `git status` để quyết định ghi đè.
- **Cách xác minh sau khi sửa:** Các file markdown được tạo/cập nhật đúng trong workspace và có thể mở trực tiếp.
- **Điều học được:** Khi điều phối release, cần kiểm tra cả quyền repository và môi trường chạy, không chỉ code pipeline.

## 7. Hiểu biết về luồng end-to-end

1. Dữ liệu đi từ Crossref API vào `data/raw/`, sau đó được parse thành raw records. Cleaning chuẩn hóa title, summary, authors, categories, published date, dedupe theo stable ID, tính `age_days` và tạo `text_for_embedding`. Role 4 dùng clean data để tạo embeddings bằng MiniLM và build Chroma index. Agent/RAG dùng index này để search và trả lời câu hỏi.
2. Evaluation set chứa câu hỏi, ground truth và ground-truth document IDs. Khi chạy evaluator, hệ thống kiểm tra retrieval có lấy đúng tài liệu không và câu trả lời có khớp nội dung ground truth không.
3. Quality checks đo tính đầy đủ, uniqueness, duplicate, missing title/summary và schema. Freshness monitoring tập trung vào độ mới của dữ liệu, dựa trên `published` hoặc `age_days`.
4. Phải dùng cùng test set cho baseline, corrupted và repaired để mọi thay đổi metrics phản ánh tác động của dữ liệu/index/repair, không phải do bộ câu hỏi thay đổi.
5. Repair được xem là thành công khi artifact repaired được tạo lại từ raw/source đáng tin, quality/freshness signal phục hồi và metrics như retrieval hit rate hoặc answer quality cải thiện so với corrupted.

## 8. Phân tích kết quả

### Metrics chính

| Metric/signal | Baseline | Corrupted | Repaired | Nhận xét của cá nhân |
| --- | ---: | ---: | ---: | --- |
| `retrieval_hit_rate` | TODO | TODO | TODO | Điền sau khi Role 5 chạy evaluation |
| `mean_token_f1` | TODO | TODO | TODO | Điền sau khi Role 5 chạy evaluation |
| `judge_accuracy` | TODO | TODO | TODO | Điền sau khi Role 5 chạy evaluation |
| `mean_judge_score` | TODO | TODO | TODO | Điền sau khi Role 5 chạy evaluation |
| Quality checks | TODO | TODO | TODO | Đối chiếu với `data/quality/` |
| Freshness status | TODO | TODO | TODO | Đối chiếu với `data/quality/freshness_report.json` |

### Kết luận từ số liệu

1. TODO: `[Data corruption] -> [quality/freshness signal thay đổi] -> [agent metric thay đổi]`.
2. TODO: `[Repair action] -> [quality/freshness signal phục hồi] -> [agent metric phục hồi hoặc chưa phục hồi]`.

Phần này cần điền sau khi Role 5 tạo đủ metrics trong `data/results/`. Với vai trò Role 1, tôi không tự kết luận corruption có tác động nếu chưa có artifact và số liệu thật.

## 9. Điều học được và hướng cải thiện

### Ba điều quan trọng nhất

1. Data pipeline nhiều người làm cần contract artifact rõ ràng trước khi viết hoặc ghép module, nếu không rất dễ sai path hoặc ghi đè dữ liệu.
2. Data observability không chỉ là metrics cuối cùng; cần kiểm soát schema, count, duplicate, missing fields và freshness ngay từ lúc bàn giao artifact.
3. Với RAG agent, chất lượng dữ liệu đầu vào ảnh hưởng trực tiếp đến retrieval và answer quality, nên baseline/corrupted/repaired phải được so sánh bằng cùng test set.

### Nếu có thêm thời gian

Tôi sẽ thêm một script release check tự động để kiểm tra artifact tồn tại, `.env` không bị commit, collection name đúng, và report có trỏ tới file thật. Cải thiện này có thể đo bằng số lỗi release được phát hiện trước khi nộp bài.

## 10. Cam kết của thành viên

- [x] Nội dung báo cáo phản ánh đúng phần việc và mức hiểu của tôi.
- [x] Tôi có thể giải thích luồng end-to-end, không chỉ module mình phụ trách.
- [x] Mọi kết luận về kết quả đều cần artifact hoặc metric để đối chiếu.
- [x] Tôi không ghi “đã chạy thành công” cho phần chưa được kiểm chứng.
- [x] Báo cáo không chứa `.env`, API key, token hoặc secret.
- [x] Báo cáo này không phải bản sao nguyên văn của báo cáo nhóm hoặc báo cáo thành viên khác.

**Họ và tên:** 
**Ngày xác nhận:** TODO

