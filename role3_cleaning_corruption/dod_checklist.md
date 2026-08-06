# DoD Checklist - Role 3

- [x] Clean schema đã chốt trong `clean_contract.md`.
- [ ] Raw count -> clean count được đối chiếu trong một lần chạy pipeline thực tế.
- [ ] Lý do filter/dedupe được xác định trong code; runtime log artifact vẫn cần ghi khi chạy pipeline.
- [x] `paper_id` được dedupe và sắp xếp ổn định trước khi bàn giao.
- [x] `text_for_embedding` được dựng từ title và summary đã normalize.
- [x] Corrupted và repaired artifacts có path riêng, không ghi đè baseline.
- [x] Repair phải chạy lại từ raw/source đáng tin; không sửa tay answers hoặc metrics.

Runtime evidence is intentionally left open until `script/run_phase1.py` and the corruption flow are executed against the current raw artifact.
