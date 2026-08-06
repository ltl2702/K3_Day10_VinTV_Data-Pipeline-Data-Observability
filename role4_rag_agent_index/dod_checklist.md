# DoD Checklist - Role 4

Owner: Man

Trạng thái: Hoàn thành và đã đối chiếu artifact ngày 2026-08-06.

- [x] Chỉ build final index sau khi clean schema ổn định.
  - Kiểm tra `papers_clean.csv`, `papers_clean_corrupted.csv`, `papers_clean_repaired.csv` trước khi build: đủ 9 cột bắt buộc, 24 rows mỗi file.
  - Giai đoạn schema chưa ổn định chỉ chạy dry-run trong thư mục temp, không ghi vào `data/chroma/`.
- [x] Embedding model dùng `sentence-transformers/all-MiniLM-L6-v2`.
  - Xác minh 384 chiều, `normalize_embeddings=True`, norm vector = 1.0.
- [x] Collection baseline/corrupted/repaired riêng nhau.
  - `papers-baseline`, `papers-corrupted`, `papers-repaired`, mỗi collection 24 document.
  - `_derive_collection_name` map đúng ba manifest path trong `src/core/config.py`.
- [x] Không ghi đè baseline collection khi chạy corruption flow.
  - Sau khi build corrupted và repaired, `papers-baseline` vẫn đếm đúng 24 document.
  - Nội dung khác nhau giữa baseline và corrupted ở 3 `paper_id`, chứng minh hai collection độc lập.
- [x] `top_k` dùng config chung.
  - Toàn bộ smoke test dùng `settings.top_k = 4`, không hard-code.
- [x] Handoff index cho Role 5 đủ path và collection name.
  - `index_handoff.md` ghi đủ ba manifest path, ba collection name, 8 field metadata và đoạn code nạp index.

## Bằng chứng kiểm tra cuối

```text
embedding_model=all-MiniLM-L6-v2 dim=384 norm=1.0
collection_naming=PASS baseline/corrupted/repaired
index_build=PASS baseline=24 corrupted=24 repaired=24
metadata_completeness=PASS 8/8 fields on all search results
lookup_by_paper_id=PASS lookup_by_title=PASS case_insensitive=PASS miss_returns_none=PASS
reload_from_manifest=PASS
baseline_not_overwritten=PASS
corruption_visible_in_index=PASS dropped=1 duplicated=1 content_changed=3
```

## Blocker/cảnh báo còn lại

- Không có blocker kỹ thuật ngăn Role 5 chạy evaluation.
- Branch thực tế là `role4`, khác branch phân công `role4-rag-agent-index`; cần thống nhất trước merge/release.
- `categories_joined` = `uncategorized` ở 24/24 record do Crossref không trả `subject`. Role 5 không nên tạo câu hỏi dạng categories.
- Chỉ dùng đúng ba manifest path trong `src/core/config.py`; path khác có thể sinh tên collection bị Chroma từ chối.
