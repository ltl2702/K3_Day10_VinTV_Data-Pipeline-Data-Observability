# Filter & Dedupe Log Template

Điền count và lý do filter/dedupe để Role 1 đối chiếu raw count -> clean count.

| Bước | Input count | Output count | Số record bị loại | Lý do | Bằng chứng |
|---|---:|---:|---:|---|---|
| Parse/validate required fields | raw parsed count | pending | pending | Missing `paper_id`, title, summary, or invalid `published` are filtered by `build_clean_dataframe` | `src/ingestion/cleaning.py` |
| Normalize text and lists | retained records | retained records | 0 expected from normalization alone | Whitespace is collapsed; authors/categories are serialized consistently | `src/ingestion/cleaning.py` |
| Drop invalid required fields | retained records | pending | pending | Required text must be non-empty; published must parse as a date | `src/ingestion/cleaning.py` |
| Dedupe `paper_id` | retained records | pending | pending | First occurrence is retained; output is sorted by published date and paper ID | `src/ingestion/cleaning.py` |

`pending` values must be replaced with counts from the same run that writes `data/clean/papers_clean.*`; do not mix counts from different source refreshes.
