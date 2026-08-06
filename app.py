from __future__ import annotations

import json
from pathlib import Path
from typing import Any

import pandas as pd
import streamlit as st


ROOT = Path(__file__).resolve().parent
DATA_DIR = ROOT / "data"

ARTIFACTS = {
    "Raw records": DATA_DIR / "raw" / "crossref_records.json",
    "Clean CSV": DATA_DIR / "clean" / "papers_clean.csv",
    "Clean JSON": DATA_DIR / "clean" / "papers_clean.json",
    "Evaluation set": DATA_DIR / "eval" / "test_set.json",
    "Baseline metrics": DATA_DIR / "results" / "baseline_metrics.json",
    "Corrupted metrics": DATA_DIR / "results" / "corrupted_metrics.json",
    "Repaired metrics": DATA_DIR / "results" / "repaired_metrics.json",
    "Freshness report": DATA_DIR / "quality" / "freshness_report.json",
    "Baseline report": DATA_DIR / "reports" / "phase1_report.md",
    "Corruption report": DATA_DIR / "reports" / "corruption_report.md",
}

st.set_page_config(
    page_title="VinTV Data Observability Demo",
    page_icon="",
    layout="wide",
    initial_sidebar_state="expanded",
)

st.markdown(
    """
    <style>
    :root {
      --ink: #18212f;
      --muted: #667085;
      --line: #d9dee8;
      --panel: #ffffff;
      --soft: #f4f7fb;
      --green: #0f766e;
      --amber: #b54708;
    }
    .stApp {
      background: linear-gradient(180deg, #f7f9fc 0%, #eef3f8 100%);
      color: var(--ink);
    }
    [data-testid="stSidebar"] {
      background: #ffffff;
      border-right: 1px solid var(--line);
    }
    .block-container {
      padding-top: 1.5rem;
      padding-bottom: 2rem;
      max-width: 1280px;
    }
    h1, h2, h3 {
      letter-spacing: 0;
    }
    h1 {
      font-size: 2rem;
      margin-bottom: .25rem;
    }
    div[data-testid="stMetric"] {
      background: var(--panel);
      border: 1px solid var(--line);
      border-radius: 8px;
      padding: 14px 16px;
      min-height: 104px;
    }
    .status-row {
      display: grid;
      grid-template-columns: minmax(180px, 1fr) 120px 130px;
      gap: 10px;
      align-items: center;
      padding: 10px 0;
      border-bottom: 1px solid #e7ebf1;
      font-size: 14px;
    }
    .status-head {
      color: var(--muted);
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: .04em;
    }
    .badge {
      width: fit-content;
      border-radius: 999px;
      padding: 3px 9px;
      font-weight: 700;
      font-size: 12px;
    }
    .badge-ok { background: #e6f4f1; color: var(--green); }
    .badge-miss { background: #fff2e8; color: var(--amber); }
    .paper {
      background: var(--panel);
      border: 1px solid var(--line);
      border-radius: 8px;
      padding: 14px 16px;
      margin-bottom: 10px;
    }
    .paper-title {
      font-weight: 700;
      margin-bottom: 6px;
    }
    .paper-meta {
      color: var(--muted);
      font-size: 13px;
      margin-bottom: 8px;
    }
    .note {
      color: var(--muted);
      font-size: 14px;
    }
    .step {
      background: #ffffff;
      border: 1px solid var(--line);
      border-radius: 8px;
      padding: 12px;
      height: 100%;
    }
    .step strong {
      display: block;
      margin-bottom: 4px;
    }
    </style>
    """,
    unsafe_allow_html=True,
)


@st.cache_data(show_spinner=False)
def load_json(path: Path) -> Any | None:
    if not path.exists():
        return None
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except json.JSONDecodeError:
        return None


@st.cache_data(show_spinner=False)
def load_table(path: Path) -> pd.DataFrame:
    if not path.exists():
        return pd.DataFrame()
    if path.suffix.lower() == ".csv":
        return pd.read_csv(path)
    payload = load_json(path)
    if isinstance(payload, list):
        return pd.DataFrame(payload)
    if isinstance(payload, dict):
        for value in payload.values():
            if isinstance(value, list):
                return pd.DataFrame(value)
    return pd.DataFrame()


def first_existing_table() -> tuple[str, pd.DataFrame]:
    candidates = [
        ("Clean data", ARTIFACTS["Clean CSV"]),
        ("Clean data", ARTIFACTS["Clean JSON"]),
        ("Raw records", ARTIFACTS["Raw records"]),
    ]
    for label, path in candidates:
        df = load_table(path)
        if not df.empty:
            return label, df
    return "No data", pd.DataFrame()


def compact_text(value: Any, limit: int = 360) -> str:
    if isinstance(value, list):
        value = ", ".join(str(item) for item in value if item)
    text = str(value or "").strip()
    return text if len(text) <= limit else f"{text[:limit].rstrip()}..."


def metric_value(metrics: dict[str, Any] | None, key: str) -> str:
    if not isinstance(metrics, dict) or key not in metrics:
        return "Pending"
    value = metrics[key]
    if isinstance(value, float):
        return f"{value:.3f}"
    return str(value)


def artifact_status(path: Path) -> tuple[str, str]:
    if path.exists():
        size_kb = path.stat().st_size / 1024
        return "Ready", f"{size_kb:.1f} KB"
    return "Pending", "-"


with st.sidebar:
    st.title("VinTV Lab")
    st.caption("Data pipeline, observability, and RAG evaluation")
    selected_view = st.radio(
        "View",
        ["Overview", "Data Explorer", "Quality & Metrics", "Agent Demo", "Reports"],
        label_visibility="collapsed",
    )
    st.divider()
    st.caption("Pipeline shortcuts")
    st.code("python script/run_phase1.py", language="powershell")
    st.code("python script/run_corruption_flow.py", language="powershell")

source_label, papers_df = first_existing_table()
baseline_metrics = load_json(ARTIFACTS["Baseline metrics"])
corrupted_metrics = load_json(ARTIFACTS["Corrupted metrics"])
repaired_metrics = load_json(ARTIFACTS["Repaired metrics"])
freshness_report = load_json(ARTIFACTS["Freshness report"])

st.title("VinTV Data Observability Demo")
st.caption("Giao dien demo doc artifact hien co va tu dong hien placeholder cho phan pipeline chua hoan thien.")

if selected_view == "Overview":
    total_papers = len(papers_df)
    available_artifacts = sum(1 for path in ARTIFACTS.values() if path.exists())
    latest_date = "Pending"
    if not papers_df.empty and "published" in papers_df.columns:
        dates = pd.to_datetime(papers_df["published"], errors="coerce").dropna()
        if not dates.empty:
            latest_date = dates.max().date().isoformat()

    col1, col2, col3, col4 = st.columns(4)
    col1.metric("Papers loaded", total_papers if total_papers else "Pending")
    col2.metric("Data source", source_label)
    col3.metric("Artifacts ready", f"{available_artifacts}/{len(ARTIFACTS)}")
    col4.metric("Latest published", latest_date)

    st.subheader("Pipeline Map")
    steps = [
        ("Crossref API", "Raw response and normalized records"),
        ("Cleaning", "Deduplicate, validate, normalize schema"),
        ("Embedding + Chroma", "Index corpus for retrieval"),
        ("RAG Evaluation", "Measure answers and retrieval quality"),
        ("Observability", "Quality, freshness, and comparison reports"),
    ]
    cols = st.columns(len(steps))
    for col, (title, desc) in zip(cols, steps, strict=False):
        col.markdown(f"<div class='step'><strong>{title}</strong><span class='note'>{desc}</span></div>", unsafe_allow_html=True)

    st.subheader("Artifact Status")
    st.markdown("<div class='status-row status-head'><div>Artifact</div><div>Status</div><div>Size</div></div>", unsafe_allow_html=True)
    for name, path in ARTIFACTS.items():
        status, size = artifact_status(path)
        badge_class = "badge-ok" if status == "Ready" else "badge-miss"
        st.markdown(
            f"<div class='status-row'><div>{name}</div><div><span class='badge {badge_class}'>{status}</span></div><div>{size}</div></div>",
            unsafe_allow_html=True,
        )

elif selected_view == "Data Explorer":
    st.subheader("Corpus Browser")
    if papers_df.empty:
        st.info("Chua co clean/raw records de hien thi. Chay pipeline hoac them file vao data/ truoc.")
    else:
        search = st.text_input("Search title or summary", "")
        filtered = papers_df.copy()
        if search:
            haystack = filtered.astype(str).agg(" ".join, axis=1).str.lower()
            filtered = filtered[haystack.str.contains(search.lower(), regex=False)]

        left, right = st.columns([1, 1])
        with left:
            sort_options = [col for col in ["published", "updated", "title"] if col in filtered.columns]
            sort_col = st.selectbox("Sort by", sort_options) if sort_options else None
        with right:
            max_rows = st.slider("Rows", 5, 50, 12, step=1)
        if sort_col:
            filtered = filtered.sort_values(sort_col, ascending=False, kind="stable")

        st.dataframe(filtered.head(max_rows), use_container_width=True, hide_index=True)

        st.subheader("Paper Cards")
        for _, row in filtered.head(6).iterrows():
            title = compact_text(row.get("title", "Untitled"), 160)
            authors = compact_text(row.get("authors", row.get("authors_joined", "")), 180)
            published = compact_text(row.get("published", "Unknown date"), 40)
            summary = compact_text(row.get("summary", ""), 520)
            st.markdown(
                f"""
                <div class="paper">
                  <div class="paper-title">{title}</div>
                  <div class="paper-meta">{published} | {authors}</div>
                  <div>{summary}</div>
                </div>
                """,
                unsafe_allow_html=True,
            )

elif selected_view == "Quality & Metrics":
    st.subheader("Evaluation Metrics")
    metric_names = ["retrieval_hit_rate", "mean_token_f1", "judge_accuracy", "mean_judge_score"]
    cols = st.columns(3)
    datasets = [("Baseline", baseline_metrics), ("Corrupted", corrupted_metrics), ("Repaired", repaired_metrics)]
    for col, (label, payload) in zip(cols, datasets, strict=False):
        with col:
            st.markdown(f"**{label}**")
            for metric in metric_names:
                st.metric(metric, metric_value(payload, metric))

    st.subheader("Freshness")
    if isinstance(freshness_report, dict):
        c1, c2, c3, c4 = st.columns(4)
        c1.metric("Latest", freshness_report.get("latest_published", "Pending"))
        c2.metric("Oldest", freshness_report.get("oldest_published", "Pending"))
        c3.metric("Stale rows", freshness_report.get("stale_rows", "Pending"))
        c4.metric("Fresh", freshness_report.get("is_fresh", "Pending"))
        st.json(freshness_report)
    else:
        st.info("Freshness report chua co. Khi implement observability, app se doc data/quality/freshness_report.json.")

elif selected_view == "Agent Demo":
    st.subheader("Question Answering Mockup")
    if papers_df.empty:
        st.info("Chua co corpus de demo hoi dap.")
    else:
        question = st.text_input("Question", "What is the newest paper about RAG?")
        top_k = st.slider("Retrieved contexts", 1, min(6, len(papers_df)), min(3, len(papers_df)))
        query_terms = {term.lower() for term in question.split() if len(term) > 3}

        scored = papers_df.copy()
        scored["_score"] = scored.apply(
            lambda row: sum(term in " ".join(map(str, row.values)).lower() for term in query_terms),
            axis=1,
        )
        if "published" in scored.columns:
            scored["_published_sort"] = pd.to_datetime(scored["published"], errors="coerce")
            scored = scored.sort_values(["_score", "_published_sort"], ascending=[False, False])
        else:
            scored = scored.sort_values("_score", ascending=False)

        retrieved = scored.head(top_k)
        answer_source = retrieved.iloc[0] if not retrieved.empty else {}
        answer = compact_text(answer_source.get("summary", "No answer available."), 520)
        st.markdown("**Demo answer**")
        st.write(answer)
        st.caption("Day la mockup tim kiem theo keyword de demo UI. Sau khi index/RAG hoan thien, co the thay bang retrieval.answer_question.")

        st.markdown("**Retrieved contexts**")
        for _, row in retrieved.iterrows():
            st.markdown(f"- **{compact_text(row.get('title', 'Untitled'), 140)}**")

elif selected_view == "Reports":
    st.subheader("Generated Reports")
    report_tabs = st.tabs(["Phase 1", "Corruption"])
    report_paths = [ARTIFACTS["Baseline report"], ARTIFACTS["Corruption report"]]
    for tab, path in zip(report_tabs, report_paths, strict=False):
        with tab:
            if path.exists():
                st.markdown(path.read_text(encoding="utf-8"))
            else:
                st.info(f"Chua co {path.relative_to(ROOT)}.")
