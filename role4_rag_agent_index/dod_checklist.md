# DoD Checklist - Role 4

- [ ] Chỉ build final index sau khi clean schema ổn định.
- [ ] Embedding model dùng `sentence-transformers/all-MiniLM-L6-v2`.
- [ ] Collection baseline/corrupted/repaired riêng nhau.
- [ ] Không ghi đè baseline collection khi chạy corruption flow.
- [ ] `top_k` dùng config chung.
- [ ] Handoff index cho Role 5 đủ path và collection name.

