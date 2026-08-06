
    const PATHS = {
      raw: "data/raw/crossref_records.json",
      baselineData: "data/clean/papers_clean.json",
      corruptedData: "data/clean/papers_clean_corrupted.json",
      repairedData: "data/clean/papers_clean_repaired.json",
      baselineMetrics: "data/results/baseline_metrics.json",
      corruptedMetrics: "data/results/corrupted_metrics.json",
      repairedMetrics: "data/results/repaired_metrics.json",
      baselineFreshness: "data/quality/freshness_report.json",
      corruptedFreshness: "data/quality/freshness_report_corrupted.json",
      repairedFreshness: "data/quality/freshness_report_repaired.json",
      baselineQuality: "data/quality/baseline_quality_report.json",
      corruptedQuality: "data/quality/corrupted_quality_report.json",
      repairedQuality: "data/quality/repaired_quality_report.json"
    };

    const EMBEDDED_DATA = {
  "data/raw/crossref_records.json": [
    {
      "paper_id": "10.47576/2949-1894.2026.7.7.023",
      "title": "Ð¡Ð½Ð¸Ð¶ÐµÐ½Ð¸Ðµ Ñ€Ð¸ÑÐºÐ¾Ð² Ð¿Ñ€Ð¸Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ LLM (Large Language Model) Ð² ÑÑ„ÐµÑ€Ðµ ÑÐºÐ¾Ð½Ð¾Ð¼Ð¸Ñ‡ÐµÑÐºÐ¾Ð¹ Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ÑÑ‚Ð¸ Ð¿Ñ€ÐµÐ´Ð¿Ñ€Ð¸ÑÑ‚Ð¸Ð¹ Ð¼Ð¾Ð»Ð¾Ñ‡Ð½Ð¾Ð¹ Ð¿Ñ€Ð¾Ð¼Ñ‹ÑˆÐ»ÐµÐ½Ð½Ð¾ÑÑ‚Ð¸ Ð½Ð° Ð¾ÑÐ½Ð¾Ð²Ðµ Ð¿Ð¾Ð´Ñ…Ð¾Ð´Ð° RAG (Retrieval-Augmented Generation)",
      "summary": "Ð’ ÑÑ‚Ð°Ñ‚ÑŒÐµ Ð¿Ñ€Ð¾Ð²ÐµÐ´ÐµÐ½Ð¾ Ð¸ÑÑÐ»ÐµÐ´Ð¾Ð²Ð°Ð½Ð¸Ðµ Ð¾ÑÐ¾Ð±ÐµÐ½Ð½Ð¾ÑÑ‚ÐµÐ¹ ÑÐ½Ð¸Ð¶ÐµÐ½Ð¸Ñ Ñ€Ð¸ÑÐºÐ¾Ð² Ð¿Ñ€Ð¸Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ LLM (Large Language Model) Ð² ÑÑ„ÐµÑ€Ðµ ÑÐºÐ¾Ð½Ð¾Ð¼Ð¸Ñ‡ÐµÑÐºÐ¾Ð¹ Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ÑÑ‚Ð¸ Ð¿Ñ€ÐµÐ´Ð¿Ñ€Ð¸ÑÑ‚Ð¸Ð¹ Ð¼Ð¾Ð»Ð¾Ñ‡Ð½Ð¾Ð¹ Ð¿Ñ€Ð¾Ð¼Ñ‹ÑˆÐ»ÐµÐ½Ð½Ð¾ÑÑ‚Ð¸ Ð½Ð° Ð¾ÑÐ½Ð¾Ð²Ðµ Ð¿Ð¾Ð´Ñ…Ð¾Ð´Ð° RAG (Retrieval-Augmented Generation) Ð² ÑÐ¾Ð²Ñ€ÐµÐ¼ÐµÐ½Ð½Ñ‹Ñ… ÑƒÑÐ»Ð¾Ð²Ð¸ÑÑ…. Ð Ð°ÑÑÐ¼Ð¾Ñ‚Ñ€ÐµÐ½Ñ‹ Ñ€Ð¸ÑÐºÐ¸ Ð¿Ñ€Ð¸Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ LLM Ð² ÑÑ„ÐµÑ€Ðµ ÑÐºÐ¾Ð½Ð¾Ð¼Ð¸Ñ‡ÐµÑÐºÐ¾Ð¹ Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ÑÑ‚Ð¸ Ð¿Ñ€ÐµÐ´Ð¿Ñ€Ð¸ÑÑ‚Ð¸Ð¹ Ð¼Ð¾Ð»Ð¾Ñ‡Ð½Ð¾Ð¹ Ð¿Ñ€Ð¾Ð¼Ñ‹ÑˆÐ»ÐµÐ½Ð½Ð¾ÑÑ‚Ð¸. ÐŸÐ¾Ð´Ñ€Ð¾Ð±Ð½Ð¾ Ñ€Ð°Ð·Ð¾Ð±Ñ€Ð°Ð½Ñ‹ ÑÑ†ÐµÐ½Ð°Ñ€Ð¸Ð¸ Ð¿Ñ€Ð¸Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ LLM+RAG Ð² Ñ€Ð¾ÑÑÐ¸Ð¹ÑÐºÐ¾Ð¹ Ð¼Ð¾Ð»Ð¾Ñ‡Ð½Ð¾Ð¹ Ð¿Ñ€Ð¾Ð¼Ñ‹ÑˆÐ»ÐµÐ½Ð½Ð¾ÑÑ‚Ð¸ â€“ Ñ Ð¾Ð¿Ð¸ÑÐ°Ð½Ð¸ÐµÐ¼ Ð¿Ñ€Ð¾Ñ†ÐµÑÑÐ°, Ð·Ð°Ð´ÐµÐ¹ÑÑ‚Ð²Ð¾Ð²Ð°Ð½Ð½Ñ‹Ñ… Ð´Ð°Ð½Ð½Ñ‹Ñ…, Ñ€ÐµÑˆÐ°ÐµÐ¼Ñ‹Ñ… Ñ€Ð¸ÑÐºÐ¾Ð² Ð¸ Ð´Ð¾ÑÑ‚Ð¸Ð³Ð½ÑƒÑ‚Ñ‹Ñ… Ñ€ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚Ð¾Ð². ÐŸÐ¾ÐºÐ°Ð·Ð°Ð½Ð¾, Ñ‡Ñ‚Ð¾ Ð² Ñ€ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚Ðµ Ð¸Ð½Ñ‚ÐµÐ³Ñ€Ð°Ñ†Ð¸Ñ RAG Ñ LLM Ñ‚Ñ€Ð°Ð½ÑÑ„Ð¾Ñ€Ð¼Ð¸Ñ€ÑƒÐµÑ‚ Ð³ÐµÐ½ÐµÑ€Ð°Ñ‚Ð¸Ð²Ð½ÑƒÑŽ Ð¼Ð¾Ð´ÐµÐ»ÑŒ Ð¸Ð· Ð¿Ð¾Ñ‚ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½Ð¾ Ð¾Ð¿Ð°ÑÐ½Ð¾Ð³Ð¾ Ð¸Ð½ÑÑ‚Ñ€ÑƒÐ¼ÐµÐ½Ñ‚Ð° Ð² Ð½Ð°Ð´ÐµÐ¶Ð½Ñ‹Ð¹ Ð¼ÐµÑ…Ð°Ð½Ð¸Ð·Ð¼ Ð¿Ð¾Ð´Ð´ÐµÑ€Ð¶ÐºÐ¸ Ð¿Ñ€Ð¸Ð½ÑÑ‚Ð¸Ñ Ñ€ÐµÑˆÐµÐ½Ð¸Ð¹ â€“ Ð¾Ñ‚ Ð¼Ð¾Ð½Ð¸Ñ‚Ð¾Ñ€Ð¸Ð½Ð³Ð° ÑƒÐ³Ñ€Ð¾Ð· Ñ„Ð°Ð»ÑŒÑÐ¸Ñ„Ð¸ÐºÐ°Ñ†Ð¸Ð¸ Ð´Ð¾ Ð¿Ñ€Ð¾Ð³Ð½Ð¾Ð·Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð¸Ñ ÑÐºÐ¾Ð½Ð¾Ð¼Ð¸Ñ‡ÐµÑÐºÐ¸Ñ… Ð¿Ð¾ÐºÐ°Ð·Ð°Ñ‚ÐµÐ»ÐµÐ¹ Ñ ÑƒÑ‡ÐµÑ‚Ð¾Ð¼ Ð¾Ñ‚Ñ€Ð°ÑÐ»ÐµÐ²Ð¾Ð¹ ÑÐ¿ÐµÑ†Ð¸Ñ„Ð¸ÐºÐ¸. The article examines the features of reducing the risks of using LLM (Large Language Model) in the field of economic security of dairy industry enterprises based on the RAG (Retrieval-Augmented Generation) approach in modern conditions. The risks of using LLM in the field of economic security of dairy industry enterprises are considered. The scenarios of LLM+RAG application in the Russian dairy industry are analyzed in detail, describing the process, the data involved, the risks to be solved and the results achieved. It is shown that as a result, the integration of RAG with LLM transforms the generative model from a potentially dangerous tool into a reliable decision support mechanism, from monitoring fraud threats to forecasting economic indicators based on industry specifics.",
      "authors": [
        "Ð˜.Ð’. Ð•Ñ€Ð¼Ð°ÐºÐ¾Ð²",
        "Ð’.Ð’. Ð¤Ð¸Ð»Ð°Ñ‚Ð¾Ð²"
      ],
      "categories": [],
      "primary_category": "",
      "published": "2026-06-15",
      "updated": "2026-06-17T08:52:47Z",
      "abs_url": "https://doi.org/10.47576/2949-1894.2026.7.7.023",
      "pdf_url": "",
      "comment": "Innovative economy: information, analytics, forecasts | Publishing house Pegas | journal-article"
    },
    {
      "paper_id": "10.36227/techrxiv.177272838.89432844/v1",
      "title": "A Survey of (Deep RAG) Deep Retrieval Augmented Generation and Reasoning in Large Language Models",
      "summary": "Retrieval-Augmented Generation (RAG) has emerged as a powerful paradigm for combining large language models with external knowledge sources to produce accurate, context-aware, and verifiable outputs. In this survey, we focus on an advanced instantiation of this paradigm, referred to as Deep RAG, which integrates reasoning, memory, and multi-step planning into end-to-end research workflows. We provide a structured overview of Deep RAG systems, covering key components such as query planning, information retrieval, memory management, and answer generation, as well as practical optimization techniques including supervised fine-tuning, iterative self-evolving, and agentic reinforcement learning. We analyze different planning strategies, adaptive retrieval mechanisms, conflict resolution methods, and multimodal synthesis, highlighting both their strengths and limitations. By categorizing approaches according to workflow types, reasoning strategies, and optimization paradigms, we clarify the current landscape and identify open challenges for evaluation, scalability, and multimodal reasoning. This survey aims to provide a comprehensive roadmap for designing flexible, reliable, and intelligent Deep RAG systems capable of performing complex, real-world research tasks with minimal human supervision.",
      "authors": [
        "Lihui Liu"
      ],
      "categories": [],
      "primary_category": "",
      "published": "2026-03-05",
      "updated": "2026-06-12T17:00:30Z",
      "abs_url": "https://doi.org/10.36227/techrxiv.177272838.89432844/v1",
      "pdf_url": "",
      "comment": "Institute of Electrical and Electronics Engineers (IEEE) | posted-content"
    },
    {
      "paper_id": "10.63646/kpqm1958",
      "title": "The Age of Autonomous Agents: A Bibliometric Review of Agentic AI Architectures, Applications, and Emerging Challenges",
      "summary": "The rapid evolution of large language models (LLMs) has catalyzed a shift from passive AI systems toward autonomous agentic architectures capable of reasoning, memory, tool use, and multi-agent collaboration. This bibliometric review characterizes the emerging field through 810 publications retrieved from the Web of Science Core Collection for the period 2023â€“2025. Annual output rose sharply over this windowâ€”from 4 publications in 2023 to 96 in 2024 and 710 in 2025â€”accompanied by a parallel rise in citations, indicating rapid mainstream adoption. Author-keyword analysis reveals a landscape dominated by large language models, artificial intelligence, and multi-agent systems, with agentic AI, generative AI, and retrieval-augmented generation (RAG) emerging as core themes. Research output is geographically concentrated, led by China and the United States, and is distributed across a broad range of engineering, applied-science, and domain-specific journals rather than a single specialist venue, reflecting the field's cross-disciplinary uptake. Synthesizing this corpus, we organize the technical landscape around reasoning, memory, tool integration and RAG, and multi-agent orchestration; survey application domains spanning healthcare, scientific discovery, education, and software engineering, with emerging activity in finance and law; and analyze the principal challengesâ€”hallucination, trust and robustness, inter-agent coordination, scalability, and governance. The review provides a structured, evidence-based map of agentic AI research to orient researchers and practitioners navigating this rapidly evolving field.",
      "authors": [
        "Ben J. Weber",
        "Clara M. Hofmann",
        "Amara N. Okoye"
      ],
      "categories": [],
      "primary_category": "",
      "published": "2026-06-30",
      "updated": "2026-07-17T02:04:13Z",
      "abs_url": "https://doi.org/10.63646/kpqm1958",
      "pdf_url": "https://inatgi.net/index.php/jaiaa/article/download/806/945",
      "comment": "Journal of AI Analytics and Applications | Institute of Advanced Technology and Green Innovation LLC | journal-article"
    },
    {
      "paper_id": "10.20944/preprints202604.0339.v1",
      "title": "Retrieval-Augmented Large Language Model Agents for Automated Scientific Literature Review Generation",
      "summary": "This study investigates a method that integrates retrieval-augmented mechanisms into large language model agents for scientific literature review generation. The approach addresses the limitations of traditional review models that rely on parametric knowledge with insufficient timeliness and limited coverage. Incorporating external document retrieval and dynamic information fusion into the generation process enhances the accuracy and completeness of the output. The overall framework consists of query encoding, semantic retrieval, document filtering, knowledge fusion, language modeling, task planning, memory storage, and reinforcement optimization, forming a closed loop of retrieval, understanding, and generation. Relevant document fragments are first retrieved through semantic vector search to ensure comprehensive and reliable information sources. These external representations are then integrated with the internal embeddings of the language model through weighted fusion, which preserves fluency while maintaining factual grounding. The task planning module constrains logical flow and text structure, and reinforcement learning optimization further improves relevance and consistency. Comparative experiments on large-scale scientific literature datasets demonstrate that the method outperforms existing approaches on ROUGE, BLEU, METEOR, and diversity metrics, validating its effectiveness and practicality. The findings show that combining retrieval augmentation with agent architectures can significantly improve coverage, accuracy, and language quality in review generation, providing a feasible solution for knowledge organization in complex literature environments.",
      "authors": [
        "Ruotong Wang",
        "Nyutian Long",
        "Shunqi Liu",
        "Yuxi Wang",
        "Zhen Qi",
        "Huajun Zhang"
      ],
      "categories": [],
      "primary_category": "",
      "published": "2026-04-06",
      "updated": "2026-07-30T14:22:32Z",
      "abs_url": "https://doi.org/10.20944/preprints202604.0339.v1",
      "pdf_url": "",
      "comment": "MDPI AG | posted-content"
    },
    {
      "paper_id": "10.3390/app16052244",
      "title": "Hybrid Retrieval-Augmented Generation: Semantic and Structural Integration for Large Language Model Reasoning",
      "summary": "Recent GraphRAG methods based on knowledge graphs (KGs) primarily rely on either under-reasoning or a structural path-level retriever, which prevents them from jointly capturing fine-grained semantic relevance and explicit multi-hop reasoning paths. This separation often results in semantic mismatchâ€”where logical links are missingâ€”or structural over-constraint in reasoningâ€” where rigid dependencies limit flexible reasoningâ€”thereby degrading both answer accuracy and the reliability of evidence in complex KGQA tasks. To address these issues, we propose HybRAG, a hybrid retrieval framework that synergistically integrates a semantic node-level retriever and structural path-level retriever. HybRAG constructs a hybrid subgraph that jointly reflects the semantic proximity of entities and the relational structures encoded in the KG. Furthermore, we incorporate retrieval-augmented fine-tuning, which enables the model to internalize advanced reasoning strategies for interpreting disparate semantic and structural signals, rather than merely memorizing domain facts. Through extensive experiments on the WebQSP and CWQ benchmarks, we demonstrate that HybRAG effectively bridges the gap between LLM-centric semantic approaches and GNN-centric structural approaches, outperforming single-retriever baselines. Our findings, including detailed sensitivity and ablation analyses, provide empirical evidence that the systematic alignment of semantic and structural signals is essential for ensuring the reasoning reliability and scalability of next-generation GraphRAG systems.",
      "authors": [
        "Hyewon Lee",
        "Sungsu Lim"
      ],
      "categories": [],
      "primary_category": "",
      "published": "2026-02-26",
      "updated": "2026-05-14T14:47:26Z",
      "abs_url": "https://doi.org/10.3390/app16052244",
      "pdf_url": "",
      "comment": "Applied Sciences | MDPI AG | journal-article"
    },
    {
      "paper_id": "10.55041/isjem07213",
      "title": "Speculative Retrieval-Augmented Generation for Cost-Efficient Large Language Model Inference",
      "summary": "Abstract - This work focuses on the two crucial bottlenecks in Retrieval-Augmented Generation (RAG): high inference latency and expensive computation cost. RAG enhances the factual correctness of Large Language Models (LLMs) by utilizing external knowledge sources; However, the auto-To achieve a good recall, the system applies a two-way retrieval mechanism: Dense retrieval: This module uses BAAI/bge-small-en-v1.5 to create a 384-dimensional embedding space, where queries and documents are mapped. The embeddings are stored in a FAISS IndexFlatL2. Sparse retrieval: This module uses TF-IDF vectorization to capture an exact keyword match. Reranking: A simple heuristic mechanism of matching substrings of the query terms in the documents selected to perform the final step of ranking them for prompt introduce a novel speculative RAG framework that combines hybrid retrieval with speculative decoding. Our framework employs hybrid dense vector search (BGE-small) and sparse keyword search (TF-IDF) for enhanced recall followed by a lightweight re-ranker model. A compact draft model (TinyLlama-1.1B) makes tentative future token generation, then a larger verifier model (Mistral-7B) checks the correctness of the candidate token. Empirical experiments demonstrate 33% and 29% improvement in inference latency and token reduction, respectively, compared to the baseline of a typical 7B model, while retaining 94% accuracy on factoid tasks. Key Words: Retrieval-Augmented Generation, Speculative Decoding, Large Language Models, Inference Optimization, Hybrid Retrieval",
      "authors": [
        "Dr. Sumalatha P",
        "Manoj Kumar"
      ],
      "categories": [],
      "primary_category": "",
      "published": "2026-05-06",
      "updated": "2026-05-06T17:13:30Z",
      "abs_url": "https://doi.org/10.55041/isjem07213",
      "pdf_url": "",
      "comment": "International Scientific Journal of Engineering and Management | Edtech Publishers (OPC) Private Limited | journal-article"
    },
    {
      "paper_id": "10.20944/preprints202602.0996.v1",
      "title": "Clinical Large Language Models with Multi-Stage Instruction Tuning and Advanced Retrieval-Augmented Generation",
      "summary": "The demand for efficient and accurate Clinical Decision Support Systems (CDSS) is growing rapidly, driven by the escalating volume of medical data. While Large Language Models (LLMs) offer significant potential, their direct application in healthcare is limited by issues like hallucinations and lack of domain-specific knowledge. Retrieval-Augmented Generation (RAG) addresses these challenges by grounding LLMs with external knowledge, and recent lightweight RAG-based CDSS have shown promise. Building on this, we propose Enhanced Clinical RAG-LLM (ECRAG-LLM), a novel system designed to elevate performance in complex clinical scenarios. ECRAG-LLM utilizes a robust yet lightweight Mistral-based LLM, integrated with a multi-stage instruction tuning strategy that first adapts to general medical knowledge and then reinforces context-aware and causal reasoning using a custom dataset of structured clinical cases. We employ BioSimCSE for domain-specific embeddings and introduce an enhanced RAG architecture featuring hybrid retrieval, cross-encoder-based contextual re-ranking, and context summarization to optimize retrieved information. Extensive experiments on medical benchmarks demonstrate that ECRAG-LLM consistently outperforms baseline lightweight fine-tuned LLMs, achieving significant improvements in diagnostic accuracy, treatment appropriateness, and explanatory quality, particularly in tasks requiring deep clinical reasoning. An ablation study confirms the synergistic contributions of our innovations, and an error analysis highlights a substantial reduction in critical errors, positioning ECRAG-LLM as a more reliable and intelligent solution for resource-constrained clinical environments.",
      "authors": [
        "Donald Martin",
        "Blake Bowman"
      ],
      "categories": [],
      "primary_category": "",
      "published": "2026-02-12",
      "updated": "2026-02-13T03:03:17Z",
      "abs_url": "https://doi.org/10.20944/preprints202602.0996.v1",
      "pdf_url": "",
      "comment": "MDPI AG | posted-content"
    },
    {
      "paper_id": "10.3390/buildings16132637",
      "title": "An Agentic AI System for Roof Design Compliance Using Computer Vision, Retrieval-Augmented Generation and Large Language Models",
      "summary": "Designers, engineers, and building officials face increasing pressure to accelerate and improve the accuracy of design review for buildings and infrastructure. Roof assemblies and rooftop structures are particularly challenging due to the complexity and fragmentation of regulatory requirements, especially in jurisdictions such as Florida, where compliance must be verified across both the residential and commercial volumes of the Florida Building Code (FBC). The resulting review process is technically demanding and time-intensive, imposing significant cognitive and operational burdens on practitioners and under-resourced public agencies. To address these challenges, this study proposes and evaluates an agentic artificial intelligence (AI) framework for automated code compliance checking of roof assemblies and rooftop structures. The framework employs a multi-agent architecture in which specialized AI agents collaboratively interpret regulatory provisions and evaluate roof design parameters across four core modules: data preprocessing and code ingestion, rule-based and semantic analysis, results visualization, and iterative validation. YOLO11m-seg and Mask R-CNN were used for element detection and segmentation, and the system was developed using 150 design projects, including roof plans, section details, and specifications. Four large language models from two families (Mistral and GPT) were comparatively evaluated on standardized compliance tasks. The framework was then tested on a held-out portfolio of 15 distinct roof-design projects comprising 60 code-compliance decisions derived from the FBC 2023, with performance measured by precision, recall, F1-score, and accuracy. GPT-5.4 achieved the highest overall performance (F1 = 0.97; accuracy = 97%). Because the reasoning and vision components were evaluated separately rather than as an integrated end-to-end pipeline, and the scope was limited to one jurisdiction and two drawing types, broader code coverage and production-setting validation are needed before claims of generality. Nonetheless, the results suggest that agentic AI can meaningfully support compliance review and reduce reviewer burden in roof-design permitting.",
      "authors": [
        "Nawari O. Nawari",
        "Oluwatoyin O. Lawal"
      ],
      "categories": [],
      "primary_category": "",
      "published": "2026-07-02",
      "updated": "2026-07-02T11:43:51Z",
      "abs_url": "https://doi.org/10.3390/buildings16132637",
      "pdf_url": "",
      "comment": "Buildings | MDPI AG | journal-article"
    },
    {
      "paper_id": "10.2196/preprints.106157",
      "title": "Does retrieval-augmented generation impact medical studentsâ€™ perceptions of large language models? (Preprint)",
      "summary": "BACKGROUND There is evidence of rapid adoption of large language models (LLMs) in undergraduate medical education, with medical students using it to support their learning. This raises concerns particularly around the accuracy of LLM-generated information students are learning. Retrieval-augmented generation (RAG), which grounds a LLM in curated materials, may be a strategy to improve their accuracy. OBJECTIVE This study investigates if grounding LLM outputs in verifiable sources using RAG impacts trust and perceived usability amongst medical students. METHODS In a four-month qualitative study, second-year medical students at Bristol Medical School used a RAG-enabled LLM (NotebookLM) to help them learn course content. Following this, their perspectives were explored using a focus group and survey was. Qualitative data was analysed using thematic analysis and was supplemented by Likert scale data. RESULTS RAG-based LLMs were perceived as more reliable than standard LLM responses mainly due to the transparency of and control over information sources. The system functioned as an accessible, on-demand learning resource, improving efficiency and supporting self-directed study. Students continued to use strategies to cross check generated information. They demonstrated some awareness of ethical concerns, mostly around the environmental impact of LLMs and data privacy. CONCLUSIONS These findings suggest that RAG may enhance studentsâ€™ trust in LLM outputs while maintaining their benefit as a flexible â€˜study partnerâ€™. It highlights RAG as a strategy that educators can use to support students who use LLMs in the context of increasing. However, the impact of RAG-based LLMs over a longer period and on learning outcomes requires further evaluation.",
      "authors": [
        "Rohin Athavale",
        "Alexander Cresswell",
        "Alice Huffman"
      ],
      "categories": [],
      "primary_category": "",
      "published": "2026-07-03",
      "updated": "2026-07-06T04:15:50Z",
      "abs_url": "https://doi.org/10.2196/preprints.106157",
      "pdf_url": "",
      "comment": "JMIR Publications Inc. | posted-content"
    },
    {
      "paper_id": "10.21203/rs.3.rs-10012178/v1",
      "title": "Retrieval-Augmented Generation (RAG), Generative AI, and Agentic AI Governance: An Integrated Enterprise Governance Prioritization Architecture",
      "summary": "Abstract Enterprise adoption of artificial intelligence (AI) systems, including Generative AI (GenAI), Retrieval-Augmented Generation (RAG), and agentic AI, is advancing faster than many organizations can adapt their governance, audit, cybersecurity, and executive oversight practices. This paper develops a proposed integrated AI governance prioritization architecture using a design-science research approach, supported by exploratory platform-risk analysis, a reproducible platform-risk dataset, a Monte Carlo robustness assessment, a framework coverage matrix, a Governance Priority Score (GPS)-based demonstration, and a public-document relevance assessment. The primary contribution is an integrated governance decision-support architecture that uses the Enterprise AI Platform Taxonomy (EAPT) to estimate platform burden, the Enterprise AI Risk Taxonomy (EART) to organize governance-risk exposure, the Enterprise AI Governance Maturity Model (EAGM) to represent organizational readiness, and the Integrated Agentic AI Governance Framework (IAGF) to identify agentic AI oversight requirements within a unified workflow. These components are operationally connected through GPS, which links platform burden, governancerisk gaps, organizational readiness, agentic runtime-control needs, and executive decision support. The proposed architecture draws upon NIST AI RMF, NIST AI 600-1, ISO/IEC 42001, COBIT, OWASP LLM Top 10, MITRE ATLAS, the EU AI Act, and related AI governance literature. A rubric-based analytical dataset covering 19 enterprise AI platforms evaluates each platform across eight subdimensions, with final platform-risk scores computed as the arithmetic mean of data access scope, operational autonomy, tool/API integration breadth, external connectivity, governance burden, cybersecurity exposure, adoption and shadow-AI risk, and supply-chain integrity. TThe expanded scoring method produces high rank stability relative to the original final-score dataset, with Spearmanâ€™s Ï = 0.996, and remains directionally stable under coding-uncertainty stress testing; these results are interpreted only as internal coding stability and robustness, not external validation. Public evidence from U.S. government agencies, universities, healthcare systems, and financial institutions is used to assess architecture relevance and observability, not to claim organizational effectiveness. The paper contributes a bounded design-science foundation for future inter-rater reliability testing, Delphi expert validation, organizational pilots, psychometric evaluation, and dashboard usability assessment.",
      "authors": [
        "Audrey Rah",
        "Sven Hahues"
      ],
      "categories": [],
      "primary_category": "",
      "published": "2026-06-15",
      "updated": "2026-06-15T06:52:56Z",
      "abs_url": "https://doi.org/10.21203/rs.3.rs-10012178/v1",
      "pdf_url": "",
      "comment": "Springer Science and Business Media LLC | posted-content"
    },
    {
      "paper_id": "10.2118/234689-pa",
      "title": "SafeRAG: A Large-Language-Model-Based Multistage Retrieval-Augmented Framework for Oil and Gas Safety Report Generation",
      "summary": "Summary In high-risk industrial settings, leveraging large language models (LLMs) for automated accident analysis and generating safety reports has emerged as an efficient workflow. However, this approach is fundamentally constrained by the modelsâ€™ inherent knowledge limitations, frequently resulting in analyses that lack domain-specific understanding and regulatory alignment. To tackle this issue, we introduce SafeRAG, a multistage retrieval-augmented framework for safety report generation. Specifically, the framework uses an entity-centric approach that prompts the LLMs to internally generate domain-specific knowledge. Concurrently, it performs a hierarchical retrieval of external regulations relevant to the accident at topic, concept, and context levels. To obtain well-structured reports, we leverage prompt engineering, integrating internal and external knowledge. Furthermore, a domain-expert persona is also assigned to help LLMs analyze accidents from a specific perspective. To evaluate our approach, we construct a data set from 10,818 accident-description/report pairs collected from real-world industry reports. Experiments show that SafeRAG substantially outperforms baseline LLMs on metrics that include bidirectional encoder representations from transformers (BERTScore) and bidirectional auto-regressive transformers (BARTScore), demonstrating the effectiveness of our approach.",
      "authors": [
        "Qianwen Cao",
        "Chiyu Zhang",
        "Junxiong Ning",
        "Gongru Li"
      ],
      "categories": [],
      "primary_category": "",
      "published": "2026-08-01",
      "updated": "2026-08-05T14:55:22Z",
      "abs_url": "https://doi.org/10.2118/234689-pa",
      "pdf_url": "https://onepetro.org/SJ/article-pdf/doi/10.2118/234689-PA/5396255/spe-234689-pa.pdf",
      "comment": "SPE Journal | Society of Petroleum Engineers (SPE) | journal-article"
    },
    {
      "paper_id": "10.52060/juptik.v4i1.4318",
      "title": "Chatbot Hybrid Fatwa MUI Menggunakan Retrieval Augmented Generation dan Large Language Model",
      "summary": "Aksesibilitas dokumen digital Fatwa Majelis Ulama Indonesia (MUI) yang terfragmentasi membuat pencarian informasi kurang efektif. Di sisi lain, sistem tanya jawab AI berbasis satu sumber dokumen (single-corpus) rentan menghasilkan jawaban tidak akurat (halusinasi) pada pertanyaan di luar domain. Penelitian ini mengembangkan Chatbot Hybrid Fatwa MUI menggunakan arsitektur Hybrid Retrieval bertingkat dengan dua sumber pengetahuan: dokumen Fatwa MUI sebagai korpus utama dan 12.370 hadis Bukhari-Muslim sebagai mekanisme cadangan (fallback). Sistem ini menerapkan pencarian semantik, verifikasi topik otomatis oleh model bahasa, dan pengalihan ke basis data hadis jika konteks fatwa dinilai tidak relevan. Hasil evaluasi menunjukkan peningkatan kesamaan makna jawaban sebesar 13,23% (dari 0,6664 menjadi 0,7546) dan peningkatan kesetiaan pada rujukan (faithfulness) sebesar 10,57% (dari 85,37% menjadi 94,39%), dengan tingkat penolakan (abstain rate) identik sebesar 26,83%. Pendekatan multi-korpus ini terbukti signifikan meningkatkan relevansi dan keakuratan jawaban dibandingkan RAG standar.",
      "authors": [
        "Surya Hidayatullah Firdaus",
        "Nazruddin Safaat H",
        "Yelfi Vitriani",
        "Novriyanto"
      ],
      "categories": [],
      "primary_category": "",
      "published": "2026-06-01",
      "updated": "2026-07-04T21:16:23Z",
      "abs_url": "https://doi.org/10.52060/juptik.v4i1.4318",
      "pdf_url": "https://www.ejournal.ummuba.ac.id/index.php/JUPTIK/article/download/4318/2057",
      "comment": "Jurnal Pengembangan Teknologi Informasi dan Komunikasi (JUPTIK) | Universitas Muhammadiyah Muara Bungo | journal-article"
    },
    {
      "paper_id": "10.21079/11681/50309",
      "title": "Microsoft Azure artificial intelligence / machine learning hackathon for development of retrieval-augmented generation large language model",
      "summary": "The US Army Corps of Engineers (USACE) Civil Works (CW) research and development (R&D) mission is to address challenging environmental sustainability problems through innovative science and engineering, which helps to ensure a safer, more prosperous, and more resilient nation. To achieve this, the US Army Engineer Research and Development Center (ERDC) plans, executes, leads, and directs many R&D programs in coordination with USACE Headquarters, Districts, and Divisions through its multiple strategic focus areas, which include infrastructure, water modeling, crisis preparedness, ecosystem, sediment management, data, artificial intelligence, and robotics. In this process, much information is generated, including internal progress reviews, financial reports, scopes of work, work package planning, and success stories.",
      "authors": [
        "Janet L. Autrey",
        "Lacey S. Duckworth",
        "Ashly N. Horner",
        "Thomas Sigler",
        "Victoria D. Moore"
      ],
      "categories": [],
      "primary_category": "",
      "published": "2026-07-01",
      "updated": "2026-07-10T15:16:13Z",
      "abs_url": "https://doi.org/10.21079/11681/50309",
      "pdf_url": "",
      "comment": "U.S. Army Engineer Research and Development Center | report"
    },
    {
      "paper_id": "10.1007/s10278-026-02086-9",
      "title": "JADE-Plus: A Multimodal Agentic Retrieval-Augmented Generation Large Language Framework for Diagnostic Support in Jawbone Lesions: Development and Technical Validation Study",
      "summary": "Abstract Diagnosing jawbone lesions in oral and maxillofacial radiology remains challenging due to overlapping radiological features and the need for integrated clinical reasoning. This study aimed to develop and validate JADE-Plus, a novel multimodal, agent-controlled retrieval-augmented generation (RAG) framework for diagnostic decision support in jawbone lesion assessment. JADE-Plus was implemented as a cloud-based, tablet-optimized system integrating a vision-language model (VLM) for panoramic radiograph analysis, a knowledge-grounded RAG module, and an agentic verification loop for diagnostic fusion and re-ranking. The system was evaluated using 40 representative jawbone lesion cases and compared with JADE, GPT-5.4, GPT-5.4 VLM, and ORAD. Performance was assessed using Top-1 and Top-3 accuracy, ablation and statistical analyses, intra-model stability, and response time. JADE-Plus achieved the highest diagnostic performance, with a Top-1 accuracy of 90% (36/40; 95% CI 76â€“97%) and a Top-3 accuracy of 100%, with no missed diagnoses. Cochranâ€™s Q test demonstrated significant differences among models for both Top-3 correctness ( Q = 25.66, p Q = 27.55, p",
      "authors": [
        "Soroush Baseri Saadi",
        "Jonas Ver Berne",
        "Rocharles Cavalcante Fontenele",
        "Peter Claes",
        "Reinhilde Jacobs"
      ],
      "categories": [],
      "primary_category": "",
      "published": "2026-07-13",
      "updated": "2026-07-13T15:09:05Z",
      "abs_url": "https://doi.org/10.1007/s10278-026-02086-9",
      "pdf_url": "https://link.springer.com/content/pdf/10.1007/s10278-026-02086-9.pdf",
      "comment": "Journal of Imaging Informatics in Medicine | Springer Science and Business Media LLC | journal-article"
    },
    {
      "paper_id": "10.70121/001c.158711",
      "title": "The Role of Retrieval-Augmented Generation in Improving Factual Accuracy for Medical Large Language Models",
      "summary": "Large Language Models (LLMs) that rely solely on parametric memory learned through training have demonstrated strong performance in biomedical question-answering, but their tendency to hallucinate facts and the difficulty of adjusting and adding to the learned knowledge limit their usefulness in clinical settings. Retrieval-Augmented Generation (RAG) has emerged as a promising solution by adding a non-parametric source of memory and grounding LLM outputs to reputable external sources. This paper aims to survey the evolution of RAG methodologies and highlight the most recent developments and shifts in paradigms like Agentic RAG. We highlight current state-of-the-art biomedical RAG systems, the latest evaluation benchmarks, and empirical findings regarding best fine-tuning practices. We also examine technical including lost-in-the-middle effects and scaling behaviour. Ethical concerns surrounding privacy and bias are brought to attention alongside research gaps. Finally, we discuss future directions of RAG in the biomedical field, including integration into Clinical Decision Support systems (CDS).",
      "authors": [
        "Eason Ni"
      ],
      "categories": [],
      "primary_category": "",
      "published": "2026-03-15",
      "updated": "2026-03-06T17:18:47Z",
      "abs_url": "https://doi.org/10.70121/001c.158711",
      "pdf_url": "https://www.scholarlyreview.org/article/158711-the-role-of-retrieval-augmented-generation-in-improving-factual-accuracy-for-medical-large-language-models.pdf",
      "comment": "Scholarly Review Journal | Leadership & Innovation Lab | journal-article"
    },
    {
      "paper_id": "10.35314/3y9hy151",
      "title": "Implementation of Retrieval-Augmented Generation Method on Large Language Model for Development of Campus Service and Information Chatbot",
      "summary": "Large language models have the potential to improve the quality of information services in higher education environments through responsive and natural interactions. However, LLMs are prone to generating answers that are not supported by valid knowledge sources due to knowledge cut-off limitations. This study implements Retrieval-Augmented Generation on LLMs to build an information service chatbot for the Indonesian University of Science and Technology (USTI). RAG is built using a hybrid retrieval mechanism that combines dense retrieval and sparse retrieval (BM25) through reciprocal rank fusion and is equipped with cross-encoder reranking. The knowledge base is compiled from official and public documents obtained through the USTI website. The evaluation was conducted using 13 test queries by comparing several configurations to analyze the contribution of each component. The evaluation results show that the hybrid retrieval configuration produces the best retrieval performance with Precision@3 of 71.7%, Recall@3 of 87.5%, and NDCG@3 of 96.3%. In addition, the application of RAG improved the quality of answers compared to LLM without retrieval, as shown by an increase in BERTScore-F1 from 84.8% to 89.4% and a faithfulness score of 88.8%. These findings indicate that RAG integration improves the relevance of LLM answers to source documents, with the hybrid configuration providing an optimal balance between retrieval quality and faithfulness.",
      "authors": [
        "Muhammad Dzaki Salman",
        "Rahmaddeni",
        "Torkis Nasution",
        "Susanti"
      ],
      "categories": [],
      "primary_category": "",
      "published": "2026-02-26",
      "updated": "2026-02-26T15:27:57Z",
      "abs_url": "https://doi.org/10.35314/3y9hy151",
      "pdf_url": "https://jurnal.polbeng.ac.id/index.php/ISI/article/download/1484/655",
      "comment": "INOVTEK Polbeng - Seri Informatika | Politeknik Negeri Bengkalis | journal-article"
    },
    {
      "paper_id": "10.1093/sleep/zsag091.0346",
      "title": "0346 Retrieval Augmented Generation Improves Large Language Model Performance in Sleep Medicine",
      "summary": "Abstract Introduction While Large Language Models (LLMs) offer generative capabilities, generic models often lack domain-specific grounding, leading to hallucinations in high-stakes contexts. However, LLMs can serve as clinical decision support tools if augmented with specific domain data. This study evaluates the utility of Retrieval-Augmented Generation (RAG) applied to open-source LLMs, utilizing a curated knowledge base of authoritative sleep medicine textbooks, to quantify improvement in performance. Methods We evaluated four open-source modelsâ€”Llama-70B, Llama-8B, Qwen-14B, and Qwen-235B, linked to a RAG system indexing five standard textbooks, including ICSD-3 TR. Models were tested on sleep boardâ€“style MCQs and clinical vignettes diagnostic accuracy. Performance was assessed across nine configurations derived from three factors: RAG pipeline complexity (Plain vs. Complicated), textbook preprocessing (Uncleaned vs. Cleaned/TOC-aligned), and retriever type (Dense-only vs. Hybrid). Metrics included MCQ Accuracy and the rates at which the correct diagnosis appeared as the top result or within the top 5 differential diagnosis lists for vignettes. Results RAG consistently outperformed the no-RAG baseline, yielding absolute performance gains of 5.6%â€“10.7% for MCQs and 8.1%â€“10.2% for the top diagnosis in cases across all models. For MCQs, Qwen-235B achieved the highest accuracy of 87.3% (vs. 81.7% baseline) using the Plain RAG configuration with Cleaned (TOC-aligned) Hybrid retrieval. Llama-70B followed with 83.6% in the same configuration. For case vignettes, Qwen-235B achieved a correct top diagnosis rate of 66.3% and a correct diagnosis rate within the top 5 differential diagnosis lists of 90.8% using Cleaned Hybrid retrieval configurations. Hybrid retrieval (Dense + Sparse) consistently surpassed Dense-only methods. Notably, while larger models benefited from Cleaned text, smaller models (e.g., Qwen-14B) achieved higher top diagnosis rates with Uncleaned text (57.1% vs. 51.0%), suggesting a dependency on redundant context in lower-parameter settings. Conclusion RAG significantly enhances knowledge performance of open-source LLMs in sleep medicine. Hybrid retrieval and curated, TOC-aligned knowledge bases yield optimal results for large models, whereas smaller models benefit from the redundancy of uncleaned text. These findings suggest that RAG systems can augment LLMs in domain specific knowledge for clinical decision support. Support (if any)",
      "authors": [
        "Joseph Cheung",
        "Pengze Li",
        "Anshum Patel",
        "SaiKrishna Vallamchetla",
        "Het Contractor",
        "Hayden Heninger",
        "Cui Tao"
      ],
      "categories": [],
      "primary_category": "",
      "published": "2026-05-01",
      "updated": "2026-05-09T03:10:46Z",
      "abs_url": "https://doi.org/10.1093/sleep/zsag091.0346",
      "pdf_url": "https://academic.oup.com/sleep/article-pdf/49/Supplement_1/A153/68252775/zsag091.0346.pdf",
      "comment": "SLEEPJ | Oxford University Press (OUP) | journal-article"
    },
    {
      "paper_id": "10.21203/rs.3.rs-10178277/v1",
      "title": "Retrieval-Augmented Large-Language-Model-Based Time-Series Forecasting for Cross-Market Equity Analysis",
      "summary": "Abstract Time-series foundation models and retrieval-based augmentation have recently emerged as relevant tools for financial forecasting, yet it remains unclear when explicit historical retrieval helps a pre-trained probabilistic forecaster in noisy equity settings. This study evaluates that question through Cross-Market Retrieval-Augmented Lag-Llama (CM-RAF-Lag-Llama), a controlled framework for comparing Lag-Llama-only forecasts with retrieval-augmented forecasts across emerging and developed market panels. The main validation uses three balanced seven-asset panels, IDX7, US7, and JP7, producing a 48-configuration panel-context-horizon grid across four context lengths and four prediction horizons. The hybrid system retrieves analogous historical windows from an indexed memory and blends the retrieved continuation with the Lag-Llama forecast while preserving the same forecasting backbone. In the same-backbone return validation, at least one retrieval variant reduces Lag-Llama MSE in all 48 configurations, with aggregate lower-error retrieval MSE reductions of 28.85\\% for IDX7, 27.27\\% for US7, and 33.60\\% for JP7. A second OHLCV-derived stock-feature experiment evaluates log-price, log-volume, range-volatility, and 20-day realized-volatility targets across 72 matched configurations. In that experiment, validation-selected RAF reduces MSE relative to Lag-Llama-only in 68 of 72 configurations and records the lowest MSE among the compared systems in 22 configurations, including 17 of 18 non-log-price US7 settings. A mechanism-level single-series ablation further compares Lag-Llama-only against Lag-Llama + RAF under zero-shot and scheduler-based inference, showing that retrieval effects are horizon-sensitive. The results indicate that retrieval can serve as an external-memory correction for Lag-Llama under selected equity targets, especially when volatility or volume structure provides reusable historical analogs.",
      "authors": [
        "Novanto Yudistira",
        "Yanuar Putra Kharisma Adhiyasa"
      ],
      "categories": [],
      "primary_category": "",
      "published": "2026-07-10",
      "updated": "2026-07-10T18:20:32Z",
      "abs_url": "https://doi.org/10.21203/rs.3.rs-10178277/v1",
      "pdf_url": "",
      "comment": "Springer Science and Business Media LLC | posted-content"
    },
    {
      "paper_id": "10.21203/rs.3.rs-9882260/v1",
      "title": "Operationalizing Reliability Gaps in Large Language Models: A Semi-Systematic Evidence Map of Reasoning, Factuality, Evaluation, and Retrieval-Augmented Generation",
      "summary": "Abstract Large language models (LLMs) increasingly support reasoning, question answering, decision support, and retrieval-augmented knowledge work. High benchmark performance, however, does not by itself establish reliability under realistic deployment conditions. This article treats LLM reliability as a pipeline-level evaluation construct rather than a single capability score. Using a semi-systematic evidence-map design, it synthesizes 77 studies selected from a broader OpenAlex audit trail of 1,010 candidate records. The review focuses on four linked dimensions: reasoning faithfulness, factual grounding, evaluation validity, and evidence-use reliability in retrieval-augmented generation. The synthesis distinguishes answer accuracy from reasoning faithfulness, truth from source-grounded support, benchmark performance from evaluation validity, and retrieved evidence from evidence actually used during generation. Across the reviewed literature, reasoning traces can improve answer accuracy without demonstrating process faithfulness; self-correction without external feedback shows inconsistent reliability; hallucination, attribution error, and sycophancy represent separable factuality risks; benchmark scores are sensitive to contamination, saturation, and protocol variation; and retrieval-augmented generation reliability depends on retrieval relevance, source sufficiency, context utilization, attribution, and calibrated refusal. The article contributes an operational reliability-gap framework and testable propositions for evaluating interactions among reasoning, factual grounding, evaluation trust, evidence use, lateral reasoning, and equitable multilingual reliability. The framework supports reliability-centered evaluation protocols that report process verification, claim-level grounding, contamination controls, uncertainty and refusal behavior, and stratified performance across language, culture, and domain contexts.",
      "authors": [
        "Kushal Budha",
        "Nikesh Lagun"
      ],
      "categories": [],
      "primary_category": "",
      "published": "2026-06-02",
      "updated": "2026-06-02T17:02:08Z",
      "abs_url": "https://doi.org/10.21203/rs.3.rs-9882260/v1",
      "pdf_url": "",
      "comment": "Springer Science and Business Media LLC | posted-content"
    },
    {
      "paper_id": "10.22214/ijraset.2026.82233",
      "title": "Hybrid Graph Neural Network and Large Language Model Framework for Robust Knowledge Graph Question Answering via Retrieval-Augmented Generation",
      "summary": "Knowledge graphs (KGs) hold facts about the world as connected triples, and they have become a backbone for any system that needs to reason over linked information. The task of Knowledge Graph Question Answering (KGQA) is to map a natural-language question onto the right entity, or set of entities, somewhere inside such a graph. Two communities have been pulling at this problem from opposite ends. Large language models (LLMs) read a question fluently but tend to invent facts and stumble on multi-hop chains they cannot verify. Graph neural networks (GNNs), on the other side, are good at walking through neighbourhoods and weighing relations, but cannot phrase an answer the way a person would. In this work, we describe a practical hybrid that places the two inside a retrieval- augmented generation (RAG) loop. A GNN first prunes a small subgraph around the question's seed entities and ranks candidate answers; we then extract shortest paths between the seeds and the top candidates, score each path with a lightweight function that combines GNN attention with degree centrality, and finally verbalise the surviving paths into plain-English sentences before passing them to a 7-8B open-source LLM. The proposed entity-priority scoring step is training-free and runs in milliseconds, yet it lifts Hits@1 by roughly 4-5 percentage points on the harder questions of ComplexWebQuestions. Experiments on WebQuestionsSP and ComplexWebQuestions show competitive or superior results against recent baselines, with the largest gains on multi-entity and three-or-more hop queries. The pipeline uses about one LLM call per question, runs comfortably on a single mid-range GPU, and exposes its reasoning as a short list of human-readable paths that anyone can audit. We argue that this combination of grounded retrieval, lightweight path scoring, and modest model size makes the approach particularly suited to academic and resourceconstrained settings.",
      "authors": [
        "Sohail Khan"
      ],
      "categories": [],
      "primary_category": "",
      "published": "2026-05-31",
      "updated": "2026-05-16T08:14:08Z",
      "abs_url": "https://doi.org/10.22214/ijraset.2026.82233",
      "pdf_url": "",
      "comment": "International Journal for Research in Applied Science and Engineering Technology | International Journal for Research in Applied Science and Engineering Technology (IJRASET) | journal-article"
    },
    {
      "paper_id": "10.54254/2753-8818/2026.dl34055",
      "title": "Hallucination in Large Language Models and Retrieval-Augmented Generation: Mechanisms, Mitigation, and Evaluation",
      "summary": "Large language models have demonstrated strong generative capability in question answering, dialogue, and other knowledge-intensive tasks. However, their outputs remain vulnerable to hallucination, including factual errors, unsupported claims, spurious citations, and distorted reasoning. Retrieval-augmented generation (RAG) has been proposed as a practical remedy because it supplements parametric knowledge with external evidence retrieved at inference time. Yet RAG does not guarantee truthfulness or attribution by default. Errors may arise during query formulation, document retrieval, evidence aggregation, and answer grounding. This paper reviews the relationship between hallucination and RAG from three perspectives: mechanism, mitigation, and evaluation. First, the major causes of hallucination in both vanilla LLMs and RAG-enhanced systems are analyzed. Second, the principal mitigation strategies are organized into retrieval optimization, evidence-grounded generation, and post-generation verification. Third, the main evaluation dimensions are examined, including factuality, faithfulness, attribution quality, and retrieval relevance. It is argued that RAG should not be treated as a complete solution to hallucination. Its value lies in enabling externally grounded generation, but its effectiveness depends on the reliability of retrieval, the fidelity of evidence use, and the rigor of evaluation. Future work should prioritize attribution-aware generation, conflict-sensitive reasoning, and unified evaluation protocols for trustworthy LLM systems.",
      "authors": [
        "Haopeng Yang"
      ],
      "categories": [],
      "primary_category": "",
      "published": "2026-06-01",
      "updated": "2026-06-01T08:01:15Z",
      "abs_url": "https://doi.org/10.54254/2753-8818/2026.dl34055",
      "pdf_url": "",
      "comment": "Theoretical and Natural Science | EWA Publishing | journal-article"
    },
    {
      "paper_id": "10.32473/flairs.39.1.141782",
      "title": "An Exploratory Study of Agentic Retrieval Augmented Generation for Mental Health Oriented Language Models",
      "summary": "Mental health conditions affect over one billion individuals globally and remain challenging to assess accurately due to fragmented clinical data and subjective evaluation methods. Mental health support systems increasingly rely on large language models (LLMs) due to their capabilities in natural language understanding and response generation. While retrieval augmented generation (RAG) and agentic frameworks have improved grounded generation in several domains, there is limited understanding of how such approaches affect response quality in mental health related tasks. In particular, the impact of structured context management and autonomous refinement on clinical relevance, empathy, completeness, and safety remains underexplored. In this study, we investigate the effects of agentic RAG on the performance of multiple mental health oriented language models. We adopt a common pipeline configuration that integrates patient dialogue, structured patient history, and externally retrieved clinical knowledge. The pipeline consists of coordinated stages for patient context retrieval, context augmentation, and response generation with autonomous evaluation and iterative refinement. We conduct empirical evaluations across four mental health models under this pipeline and analyze their performance in terms of medical accuracy, empathy, completeness, safety, and overall response quality. Our results show consistent trends toward improved responses when structured context handling and agentic refinement are applied, indicating that these components influence model behavior independent of architecture. This work provides insight into how agentic RAG influences model outputs in mental health applications and highlights the importance of context engineering and quality control in LLM based support systems. These findings indicate that Agentic Context Engineering (ACE) may contribute to improved reasoning depth, contextual alignment, and patient centered response quality across diverse models. However, despite the improvements observed, the framework remains an early step toward more reliable AI assisted mental health assessment. Continued research is needed to refine model architectures, optimize prompt engineering, and expand evaluation across broader and more diverse clinical contexts to ensure safety, consistency, and real world applicability.",
      "authors": [
        "Khoa Pham",
        "Jiacheng Li",
        "Hassan S. Al Khatib",
        "Shahram Rahimi",
        "Noorbakhsh Amiri Golilarz",
        "Andy Perkins"
      ],
      "categories": [],
      "primary_category": "",
      "published": "2026-05-06",
      "updated": "2026-05-06T14:14:40Z",
      "abs_url": "https://doi.org/10.32473/flairs.39.1.141782",
      "pdf_url": "https://journals.flvc.org/FLAIRS/article/download/141782/146987",
      "comment": "The International FLAIRS Conference Proceedings | University of Florida George A Smathers Libraries | journal-article"
    },
    {
      "paper_id": "10.21203/rs.3.rs-9770645/v1",
      "title": "Adapting Large Language Models for Low-Resource Regulated Domains: A Fine-Tuning and Retrieval-Augmented Generation Approach to Insurance Information Delivery in Kenya",
      "summary": "Abstract Background. Insurance penetration in Kenya stands at roughly 2.3% of GDP, well below the global average of 7.4%. Documented barriers include low financial literacy, affordability, cultural resistance and limited access to trusted, locally relevant information. Large Language Models (LLMs) could in principle deliver scalable, personalised information, but off-the-shelf models perform poorly on jurisdiction-specific regulatory content and are prone to hallucination in low-resource domains. Objective. We investigate how a mid-sized open-weights LLM can be adapted to a low-resource, highly regulated domain using two complementary techniques â€” parameter-efficient supervised fine-tuning and Retrieval-Augmented Generation (RAG) â€” and we quantify the marginal value of each technique and of their combination. Methods. A questionâ€“answer (QA) corpus was curated from primary regulatory sources (Insurance Regula- tory Authority of Kenya, Association of Kenya Insurers) and reformatted into JSONL. Metaâ€™s LLaMA-2- 13B-chat was used as the base model. We compared four configurations: (i) base model; (ii) base + LoRA fine-tuning; (iii) base + RAG over a Chroma vector index; and (iv) fine-tuning + RAG. Outputs were graded by GPT-4 (with a human-validated paraphrased test set) on accuracy (1â€“10), succinctness (5-level rubric mapped to a numerical scale) and relevancy (1â€“10). Results. The combined fine-tuning + RAG configuration achieved the best performance on all three metrics (accuracy 6.803, succinctness 7.03, relevancy 6.89), versus the base model (1.229, 3.78, 1.98). Fine-tuning alone yielded only marginal accuracy gains and a measurable drop in relevancy, indicating that parameter adaptation without external knowledge grounding can make the model more confident without making it more correct. RAG contributed the largest single improvement. Contribution. The paper offers (a) a reproducible recipe for adapting open-weights LLMs to a low-resource regulated domain on commodity hardware; (b) empirical evidence on the relative contribution of fine-tuning vs. retrieval grounding in that setting; and (c) a discussion of the implications for AI-assisted financial inclusion in Sub-Saharan Africa.",
      "authors": [
        "AMOS MBEKI NYAGAR"
      ],
      "categories": [],
      "primary_category": "",
      "published": "2026-05-22",
      "updated": "2026-05-22T04:10:39Z",
      "abs_url": "https://doi.org/10.21203/rs.3.rs-9770645/v1",
      "pdf_url": "",
      "comment": "Springer Science and Business Media LLC | posted-content"
    },
    {
      "paper_id": "10.1111/exsy.70341",
      "title": "Hiâ€ RAG : A Hierarchical Retrievalâ€Augmented Generation Framework for Scalable and Generalisable Tool Selection in Large Language Model Agents",
      "summary": "ABSTRACT As tool repositories for Large Language Model (LLM) agents grow from dozens to hundreds of endpoints, flat retrieval paradigms that treat the repository as an unstructured list suffer from context overload, crossâ€domain semantic collision and degraded selection accuracy. We propose Hiâ€RAG, a Hierarchical Retrievalâ€Augmented Generation framework that exploits the Type Service Tool structure of the Model Context Protocol (MCP) via a principled coarseâ€toâ€fine pipeline. Stage 1 applies a Toolâ€asâ€Proxy hybrid retrieval strategy (BM25 sparse retrieval combined with dense biâ€encoder search, fused via Weighted Reciprocal Rank Fusion) to identify candidate services efficiently. Stage 2 performs typeâ€aware reâ€ranking over a local heterogeneous graph, integrating a domainâ€level gating mechanism with contextualised tool attention for precise service scoring. We further introduce MCPBench , the first benchmark for hierarchical tool selection, comprising 201 tools across 40 realâ€enterprise servicesâ€”23% of queries require multiâ€service reasoning. Experiments across five LLMs show Hiâ€RAG improves Topâ€1 accuracy by up to 7.5% (singleâ€service) and 10.0% (multiâ€service) over Flatâ€RAG, while reducing token consumption by up to 89% against fullâ€context injection. Comparisons with a strong lateâ€interaction baseline (ColBERTâ€RAG) further confirm the superiority of Hiâ€RAG. Zeroâ€shot evaluation on ToolLLM (16,464 tools) confirms scalability, and formal analyses establish context growth with respect to repository size.",
      "authors": [
        "Wei Tian",
        "Yuhao Zhou"
      ],
      "categories": [],
      "primary_category": "",
      "published": "2026-06-30",
      "updated": "2026-07-16T10:07:33Z",
      "abs_url": "https://doi.org/10.1111/exsy.70341",
      "pdf_url": "https://onlinelibrary.wiley.com/doi/pdf/10.1111/exsy.70341",
      "comment": "Expert Systems | Wiley | journal-article"
    }
  ],
  "data/clean/papers_clean.json": [
    {
      "paper_id": "10.2118/234689-pa",
      "title": "SafeRAG: A Large-Language-Model-Based Multistage Retrieval-Augmented Framework for Oil and Gas Safety Report Generation",
      "summary": "Summary In high-risk industrial settings, leveraging large language models (LLMs) for automated accident analysis and generating safety reports has emerged as an efficient workflow. However, this approach is fundamentally constrained by the modelsâ€™ inherent knowledge limitations, frequently resulting in analyses that lack domain-specific understanding and regulatory alignment. To tackle this issue, we introduce SafeRAG, a multistage retrieval-augmented framework for safety report generation. Specifically, the framework uses an entity-centric approach that prompts the LLMs to internally generate domain-specific knowledge. Concurrently, it performs a hierarchical retrieval of external regulations relevant to the accident at topic, concept, and context levels. To obtain well-structured reports, we leverage prompt engineering, integrating internal and external knowledge. Furthermore, a domain-expert persona is also assigned to help LLMs analyze accidents from a specific perspective. To evaluate our approach, we construct a data set from 10,818 accident-description/report pairs collected from real-world industry reports. Experiments show that SafeRAG substantially outperforms baseline LLMs on metrics that include bidirectional encoder representations from transformers (BERTScore) and bidirectional auto-regressive transformers (BARTScore), demonstrating the effectiveness of our approach.",
      "authors": "[\"Qianwen Cao\", \"Chiyu Zhang\", \"Junxiong Ning\", \"Gongru Li\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-08-01",
      "updated": "2026-08-05T14:55:22+00:00",
      "abs_url": "https://doi.org/10.2118/234689-pa",
      "pdf_url": "https://onepetro.org/SJ/article-pdf/doi/10.2118/234689-PA/5396255/spe-234689-pa.pdf",
      "comment": "SPE Journal | Society of Petroleum Engineers (SPE) | journal-article",
      "age_days": 5,
      "authors_joined": "Qianwen Cao, Chiyu Zhang, Junxiong Ning, Gongru Li",
      "categories_joined": "",
      "summary_chars": 1404,
      "text_for_embedding": "SafeRAG: A Large-Language-Model-Based Multistage Retrieval-Augmented Framework for Oil and Gas Safety Report Generation\n\nSummary In high-risk industrial settings, leveraging large language models (LLMs) for automated accident analysis and generating safety reports has emerged as an efficient workflow. However, this approach is fundamentally constrained by the modelsâ€™ inherent knowledge limitations, frequently resulting in analyses that lack domain-specific understanding and regulatory alignment. To tackle this issue, we introduce SafeRAG, a multistage retrieval-augmented framework for safety report generation. Specifically, the framework uses an entity-centric approach that prompts the LLMs to internally generate domain-specific knowledge. Concurrently, it performs a hierarchical retrieval of external regulations relevant to the accident at topic, concept, and context levels. To obtain well-structured reports, we leverage prompt engineering, integrating internal and external knowledge. Furthermore, a domain-expert persona is also assigned to help LLMs analyze accidents from a specific perspective. To evaluate our approach, we construct a data set from 10,818 accident-description/report pairs collected from real-world industry reports. Experiments show that SafeRAG substantially outperforms baseline LLMs on metrics that include bidirectional encoder representations from transformers (BERTScore) and bidirectional auto-regressive transformers (BARTScore), demonstrating the effectiveness of our approach."
    },
    {
      "paper_id": "10.1007/s10278-026-02086-9",
      "title": "JADE-Plus: A Multimodal Agentic Retrieval-Augmented Generation Large Language Framework for Diagnostic Support in Jawbone Lesions: Development and Technical Validation Study",
      "summary": "Abstract Diagnosing jawbone lesions in oral and maxillofacial radiology remains challenging due to overlapping radiological features and the need for integrated clinical reasoning. This study aimed to develop and validate JADE-Plus, a novel multimodal, agent-controlled retrieval-augmented generation (RAG) framework for diagnostic decision support in jawbone lesion assessment. JADE-Plus was implemented as a cloud-based, tablet-optimized system integrating a vision-language model (VLM) for panoramic radiograph analysis, a knowledge-grounded RAG module, and an agentic verification loop for diagnostic fusion and re-ranking. The system was evaluated using 40 representative jawbone lesion cases and compared with JADE, GPT-5.4, GPT-5.4 VLM, and ORAD. Performance was assessed using Top-1 and Top-3 accuracy, ablation and statistical analyses, intra-model stability, and response time. JADE-Plus achieved the highest diagnostic performance, with a Top-1 accuracy of 90% (36/40; 95% CI 76â€“97%) and a Top-3 accuracy of 100%, with no missed diagnoses. Cochranâ€™s Q test demonstrated significant differences among models for both Top-3 correctness ( Q = 25.66, p Q = 27.55, p",
      "authors": "[\"Soroush Baseri Saadi\", \"Jonas Ver Berne\", \"Rocharles Cavalcante Fontenele\", \"Peter Claes\", \"Reinhilde Jacobs\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-07-13",
      "updated": "2026-07-13T15:09:05+00:00",
      "abs_url": "https://doi.org/10.1007/s10278-026-02086-9",
      "pdf_url": "https://link.springer.com/content/pdf/10.1007/s10278-026-02086-9.pdf",
      "comment": "Journal of Imaging Informatics in Medicine | Springer Science and Business Media LLC | journal-article",
      "age_days": 24,
      "authors_joined": "Soroush Baseri Saadi, Jonas Ver Berne, Rocharles Cavalcante Fontenele, Peter Claes, Reinhilde Jacobs",
      "categories_joined": "",
      "summary_chars": 1172,
      "text_for_embedding": "JADE-Plus: A Multimodal Agentic Retrieval-Augmented Generation Large Language Framework for Diagnostic Support in Jawbone Lesions: Development and Technical Validation Study\n\nAbstract Diagnosing jawbone lesions in oral and maxillofacial radiology remains challenging due to overlapping radiological features and the need for integrated clinical reasoning. This study aimed to develop and validate JADE-Plus, a novel multimodal, agent-controlled retrieval-augmented generation (RAG) framework for diagnostic decision support in jawbone lesion assessment. JADE-Plus was implemented as a cloud-based, tablet-optimized system integrating a vision-language model (VLM) for panoramic radiograph analysis, a knowledge-grounded RAG module, and an agentic verification loop for diagnostic fusion and re-ranking. The system was evaluated using 40 representative jawbone lesion cases and compared with JADE, GPT-5.4, GPT-5.4 VLM, and ORAD. Performance was assessed using Top-1 and Top-3 accuracy, ablation and statistical analyses, intra-model stability, and response time. JADE-Plus achieved the highest diagnostic performance, with a Top-1 accuracy of 90% (36/40; 95% CI 76â€“97%) and a Top-3 accuracy of 100%, with no missed diagnoses. Cochranâ€™s Q test demonstrated significant differences among models for both Top-3 correctness ( Q = 25.66, p Q = 27.55, p"
    },
    {
      "paper_id": "10.21203/rs.3.rs-10178277/v1",
      "title": "Retrieval-Augmented Large-Language-Model-Based Time-Series Forecasting for Cross-Market Equity Analysis",
      "summary": "Abstract Time-series foundation models and retrieval-based augmentation have recently emerged as relevant tools for financial forecasting, yet it remains unclear when explicit historical retrieval helps a pre-trained probabilistic forecaster in noisy equity settings. This study evaluates that question through Cross-Market Retrieval-Augmented Lag-Llama (CM-RAF-Lag-Llama), a controlled framework for comparing Lag-Llama-only forecasts with retrieval-augmented forecasts across emerging and developed market panels. The main validation uses three balanced seven-asset panels, IDX7, US7, and JP7, producing a 48-configuration panel-context-horizon grid across four context lengths and four prediction horizons. The hybrid system retrieves analogous historical windows from an indexed memory and blends the retrieved continuation with the Lag-Llama forecast while preserving the same forecasting backbone. In the same-backbone return validation, at least one retrieval variant reduces Lag-Llama MSE in all 48 configurations, with aggregate lower-error retrieval MSE reductions of 28.85\\% for IDX7, 27.27\\% for US7, and 33.60\\% for JP7. A second OHLCV-derived stock-feature experiment evaluates log-price, log-volume, range-volatility, and 20-day realized-volatility targets across 72 matched configurations. In that experiment, validation-selected RAF reduces MSE relative to Lag-Llama-only in 68 of 72 configurations and records the lowest MSE among the compared systems in 22 configurations, including 17 of 18 non-log-price US7 settings. A mechanism-level single-series ablation further compares Lag-Llama-only against Lag-Llama + RAF under zero-shot and scheduler-based inference, showing that retrieval effects are horizon-sensitive. The results indicate that retrieval can serve as an external-memory correction for Lag-Llama under selected equity targets, especially when volatility or volume structure provides reusable historical analogs.",
      "authors": "[\"Novanto Yudistira\", \"Yanuar Putra Kharisma Adhiyasa\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-07-10",
      "updated": "2026-07-10T18:20:32+00:00",
      "abs_url": "https://doi.org/10.21203/rs.3.rs-10178277/v1",
      "pdf_url": "",
      "comment": "Springer Science and Business Media LLC | posted-content",
      "age_days": 27,
      "authors_joined": "Novanto Yudistira, Yanuar Putra Kharisma Adhiyasa",
      "categories_joined": "",
      "summary_chars": 1945,
      "text_for_embedding": "Retrieval-Augmented Large-Language-Model-Based Time-Series Forecasting for Cross-Market Equity Analysis\n\nAbstract Time-series foundation models and retrieval-based augmentation have recently emerged as relevant tools for financial forecasting, yet it remains unclear when explicit historical retrieval helps a pre-trained probabilistic forecaster in noisy equity settings. This study evaluates that question through Cross-Market Retrieval-Augmented Lag-Llama (CM-RAF-Lag-Llama), a controlled framework for comparing Lag-Llama-only forecasts with retrieval-augmented forecasts across emerging and developed market panels. The main validation uses three balanced seven-asset panels, IDX7, US7, and JP7, producing a 48-configuration panel-context-horizon grid across four context lengths and four prediction horizons. The hybrid system retrieves analogous historical windows from an indexed memory and blends the retrieved continuation with the Lag-Llama forecast while preserving the same forecasting backbone. In the same-backbone return validation, at least one retrieval variant reduces Lag-Llama MSE in all 48 configurations, with aggregate lower-error retrieval MSE reductions of 28.85\\% for IDX7, 27.27\\% for US7, and 33.60\\% for JP7. A second OHLCV-derived stock-feature experiment evaluates log-price, log-volume, range-volatility, and 20-day realized-volatility targets across 72 matched configurations. In that experiment, validation-selected RAF reduces MSE relative to Lag-Llama-only in 68 of 72 configurations and records the lowest MSE among the compared systems in 22 configurations, including 17 of 18 non-log-price US7 settings. A mechanism-level single-series ablation further compares Lag-Llama-only against Lag-Llama + RAF under zero-shot and scheduler-based inference, showing that retrieval effects are horizon-sensitive. The results indicate that retrieval can serve as an external-memory correction for Lag-Llama under selected equity targets, especially when volatility or volume structure provides reusable historical analogs."
    },
    {
      "paper_id": "10.2196/preprints.106157",
      "title": "Does retrieval-augmented generation impact medical studentsâ€™ perceptions of large language models? (Preprint)",
      "summary": "BACKGROUND There is evidence of rapid adoption of large language models (LLMs) in undergraduate medical education, with medical students using it to support their learning. This raises concerns particularly around the accuracy of LLM-generated information students are learning. Retrieval-augmented generation (RAG), which grounds a LLM in curated materials, may be a strategy to improve their accuracy. OBJECTIVE This study investigates if grounding LLM outputs in verifiable sources using RAG impacts trust and perceived usability amongst medical students. METHODS In a four-month qualitative study, second-year medical students at Bristol Medical School used a RAG-enabled LLM (NotebookLM) to help them learn course content. Following this, their perspectives were explored using a focus group and survey was. Qualitative data was analysed using thematic analysis and was supplemented by Likert scale data. RESULTS RAG-based LLMs were perceived as more reliable than standard LLM responses mainly due to the transparency of and control over information sources. The system functioned as an accessible, on-demand learning resource, improving efficiency and supporting self-directed study. Students continued to use strategies to cross check generated information. They demonstrated some awareness of ethical concerns, mostly around the environmental impact of LLMs and data privacy. CONCLUSIONS These findings suggest that RAG may enhance studentsâ€™ trust in LLM outputs while maintaining their benefit as a flexible â€˜study partnerâ€™. It highlights RAG as a strategy that educators can use to support students who use LLMs in the context of increasing. However, the impact of RAG-based LLMs over a longer period and on learning outcomes requires further evaluation.",
      "authors": "[\"Rohin Athavale\", \"Alexander Cresswell\", \"Alice Huffman\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-07-03",
      "updated": "2026-07-06T04:15:50+00:00",
      "abs_url": "https://doi.org/10.2196/preprints.106157",
      "pdf_url": "",
      "comment": "JMIR Publications Inc. | posted-content",
      "age_days": 34,
      "authors_joined": "Rohin Athavale, Alexander Cresswell, Alice Huffman",
      "categories_joined": "",
      "summary_chars": 1765,
      "text_for_embedding": "Does retrieval-augmented generation impact medical studentsâ€™ perceptions of large language models? (Preprint)\n\nBACKGROUND There is evidence of rapid adoption of large language models (LLMs) in undergraduate medical education, with medical students using it to support their learning. This raises concerns particularly around the accuracy of LLM-generated information students are learning. Retrieval-augmented generation (RAG), which grounds a LLM in curated materials, may be a strategy to improve their accuracy. OBJECTIVE This study investigates if grounding LLM outputs in verifiable sources using RAG impacts trust and perceived usability amongst medical students. METHODS In a four-month qualitative study, second-year medical students at Bristol Medical School used a RAG-enabled LLM (NotebookLM) to help them learn course content. Following this, their perspectives were explored using a focus group and survey was. Qualitative data was analysed using thematic analysis and was supplemented by Likert scale data. RESULTS RAG-based LLMs were perceived as more reliable than standard LLM responses mainly due to the transparency of and control over information sources. The system functioned as an accessible, on-demand learning resource, improving efficiency and supporting self-directed study. Students continued to use strategies to cross check generated information. They demonstrated some awareness of ethical concerns, mostly around the environmental impact of LLMs and data privacy. CONCLUSIONS These findings suggest that RAG may enhance studentsâ€™ trust in LLM outputs while maintaining their benefit as a flexible â€˜study partnerâ€™. It highlights RAG as a strategy that educators can use to support students who use LLMs in the context of increasing. However, the impact of RAG-based LLMs over a longer period and on learning outcomes requires further evaluation."
    },
    {
      "paper_id": "10.3390/buildings16132637",
      "title": "An Agentic AI System for Roof Design Compliance Using Computer Vision, Retrieval-Augmented Generation and Large Language Models",
      "summary": "Designers, engineers, and building officials face increasing pressure to accelerate and improve the accuracy of design review for buildings and infrastructure. Roof assemblies and rooftop structures are particularly challenging due to the complexity and fragmentation of regulatory requirements, especially in jurisdictions such as Florida, where compliance must be verified across both the residential and commercial volumes of the Florida Building Code (FBC). The resulting review process is technically demanding and time-intensive, imposing significant cognitive and operational burdens on practitioners and under-resourced public agencies. To address these challenges, this study proposes and evaluates an agentic artificial intelligence (AI) framework for automated code compliance checking of roof assemblies and rooftop structures. The framework employs a multi-agent architecture in which specialized AI agents collaboratively interpret regulatory provisions and evaluate roof design parameters across four core modules: data preprocessing and code ingestion, rule-based and semantic analysis, results visualization, and iterative validation. YOLO11m-seg and Mask R-CNN were used for element detection and segmentation, and the system was developed using 150 design projects, including roof plans, section details, and specifications. Four large language models from two families (Mistral and GPT) were comparatively evaluated on standardized compliance tasks. The framework was then tested on a held-out portfolio of 15 distinct roof-design projects comprising 60 code-compliance decisions derived from the FBC 2023, with performance measured by precision, recall, F1-score, and accuracy. GPT-5.4 achieved the highest overall performance (F1 = 0.97; accuracy = 97%). Because the reasoning and vision components were evaluated separately rather than as an integrated end-to-end pipeline, and the scope was limited to one jurisdiction and two drawing types, broader code coverage and production-setting validation are needed before claims of generality. Nonetheless, the results suggest that agentic AI can meaningfully support compliance review and reduce reviewer burden in roof-design permitting.",
      "authors": "[\"Nawari O. Nawari\", \"Oluwatoyin O. Lawal\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-07-02",
      "updated": "2026-07-02T11:43:51+00:00",
      "abs_url": "https://doi.org/10.3390/buildings16132637",
      "pdf_url": "",
      "comment": "Buildings | MDPI AG | journal-article",
      "age_days": 35,
      "authors_joined": "Nawari O. Nawari, Oluwatoyin O. Lawal",
      "categories_joined": "",
      "summary_chars": 2207,
      "text_for_embedding": "An Agentic AI System for Roof Design Compliance Using Computer Vision, Retrieval-Augmented Generation and Large Language Models\n\nDesigners, engineers, and building officials face increasing pressure to accelerate and improve the accuracy of design review for buildings and infrastructure. Roof assemblies and rooftop structures are particularly challenging due to the complexity and fragmentation of regulatory requirements, especially in jurisdictions such as Florida, where compliance must be verified across both the residential and commercial volumes of the Florida Building Code (FBC). The resulting review process is technically demanding and time-intensive, imposing significant cognitive and operational burdens on practitioners and under-resourced public agencies. To address these challenges, this study proposes and evaluates an agentic artificial intelligence (AI) framework for automated code compliance checking of roof assemblies and rooftop structures. The framework employs a multi-agent architecture in which specialized AI agents collaboratively interpret regulatory provisions and evaluate roof design parameters across four core modules: data preprocessing and code ingestion, rule-based and semantic analysis, results visualization, and iterative validation. YOLO11m-seg and Mask R-CNN were used for element detection and segmentation, and the system was developed using 150 design projects, including roof plans, section details, and specifications. Four large language models from two families (Mistral and GPT) were comparatively evaluated on standardized compliance tasks. The framework was then tested on a held-out portfolio of 15 distinct roof-design projects comprising 60 code-compliance decisions derived from the FBC 2023, with performance measured by precision, recall, F1-score, and accuracy. GPT-5.4 achieved the highest overall performance (F1 = 0.97; accuracy = 97%). Because the reasoning and vision components were evaluated separately rather than as an integrated end-to-end pipeline, and the scope was limited to one jurisdiction and two drawing types, broader code coverage and production-setting validation are needed before claims of generality. Nonetheless, the results suggest that agentic AI can meaningfully support compliance review and reduce reviewer burden in roof-design permitting."
    },
    {
      "paper_id": "10.21079/11681/50309",
      "title": "Microsoft Azure artificial intelligence / machine learning hackathon for development of retrieval-augmented generation large language model",
      "summary": "The US Army Corps of Engineers (USACE) Civil Works (CW) research and development (R&D) mission is to address challenging environmental sustainability problems through innovative science and engineering, which helps to ensure a safer, more prosperous, and more resilient nation. To achieve this, the US Army Engineer Research and Development Center (ERDC) plans, executes, leads, and directs many R&D programs in coordination with USACE Headquarters, Districts, and Divisions through its multiple strategic focus areas, which include infrastructure, water modeling, crisis preparedness, ecosystem, sediment management, data, artificial intelligence, and robotics. In this process, much information is generated, including internal progress reviews, financial reports, scopes of work, work package planning, and success stories.",
      "authors": "[\"Janet L. Autrey\", \"Lacey S. Duckworth\", \"Ashly N. Horner\", \"Thomas Sigler\", \"Victoria D. Moore\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-07-01",
      "updated": "2026-07-10T15:16:13+00:00",
      "abs_url": "https://doi.org/10.21079/11681/50309",
      "pdf_url": "",
      "comment": "U.S. Army Engineer Research and Development Center | report",
      "age_days": 36,
      "authors_joined": "Janet L. Autrey, Lacey S. Duckworth, Ashly N. Horner, Thomas Sigler, Victoria D. Moore",
      "categories_joined": "",
      "summary_chars": 826,
      "text_for_embedding": "Microsoft Azure artificial intelligence / machine learning hackathon for development of retrieval-augmented generation large language model\n\nThe US Army Corps of Engineers (USACE) Civil Works (CW) research and development (R&D) mission is to address challenging environmental sustainability problems through innovative science and engineering, which helps to ensure a safer, more prosperous, and more resilient nation. To achieve this, the US Army Engineer Research and Development Center (ERDC) plans, executes, leads, and directs many R&D programs in coordination with USACE Headquarters, Districts, and Divisions through its multiple strategic focus areas, which include infrastructure, water modeling, crisis preparedness, ecosystem, sediment management, data, artificial intelligence, and robotics. In this process, much information is generated, including internal progress reviews, financial reports, scopes of work, work package planning, and success stories."
    },
    {
      "paper_id": "10.1111/exsy.70341",
      "title": "Hiâ€ RAG : A Hierarchical Retrievalâ€Augmented Generation Framework for Scalable and Generalisable Tool Selection in Large Language Model Agents",
      "summary": "ABSTRACT As tool repositories for Large Language Model (LLM) agents grow from dozens to hundreds of endpoints, flat retrieval paradigms that treat the repository as an unstructured list suffer from context overload, crossâ€domain semantic collision and degraded selection accuracy. We propose Hiâ€RAG, a Hierarchical Retrievalâ€Augmented Generation framework that exploits the Type Service Tool structure of the Model Context Protocol (MCP) via a principled coarseâ€toâ€fine pipeline. Stage 1 applies a Toolâ€asâ€Proxy hybrid retrieval strategy (BM25 sparse retrieval combined with dense biâ€encoder search, fused via Weighted Reciprocal Rank Fusion) to identify candidate services efficiently. Stage 2 performs typeâ€aware reâ€ranking over a local heterogeneous graph, integrating a domainâ€level gating mechanism with contextualised tool attention for precise service scoring. We further introduce MCPBench , the first benchmark for hierarchical tool selection, comprising 201 tools across 40 realâ€enterprise servicesâ€”23% of queries require multiâ€service reasoning. Experiments across five LLMs show Hiâ€RAG improves Topâ€1 accuracy by up to 7.5% (singleâ€service) and 10.0% (multiâ€service) over Flatâ€RAG, while reducing token consumption by up to 89% against fullâ€context injection. Comparisons with a strong lateâ€interaction baseline (ColBERTâ€RAG) further confirm the superiority of Hiâ€RAG. Zeroâ€shot evaluation on ToolLLM (16,464 tools) confirms scalability, and formal analyses establish context growth with respect to repository size.",
      "authors": "[\"Wei Tian\", \"Yuhao Zhou\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-06-30",
      "updated": "2026-07-16T10:07:33+00:00",
      "abs_url": "https://doi.org/10.1111/exsy.70341",
      "pdf_url": "https://onlinelibrary.wiley.com/doi/pdf/10.1111/exsy.70341",
      "comment": "Expert Systems | Wiley | journal-article",
      "age_days": 37,
      "authors_joined": "Wei Tian, Yuhao Zhou",
      "categories_joined": "",
      "summary_chars": 1527,
      "text_for_embedding": "Hiâ€ RAG : A Hierarchical Retrievalâ€Augmented Generation Framework for Scalable and Generalisable Tool Selection in Large Language Model Agents\n\nABSTRACT As tool repositories for Large Language Model (LLM) agents grow from dozens to hundreds of endpoints, flat retrieval paradigms that treat the repository as an unstructured list suffer from context overload, crossâ€domain semantic collision and degraded selection accuracy. We propose Hiâ€RAG, a Hierarchical Retrievalâ€Augmented Generation framework that exploits the Type Service Tool structure of the Model Context Protocol (MCP) via a principled coarseâ€toâ€fine pipeline. Stage 1 applies a Toolâ€asâ€Proxy hybrid retrieval strategy (BM25 sparse retrieval combined with dense biâ€encoder search, fused via Weighted Reciprocal Rank Fusion) to identify candidate services efficiently. Stage 2 performs typeâ€aware reâ€ranking over a local heterogeneous graph, integrating a domainâ€level gating mechanism with contextualised tool attention for precise service scoring. We further introduce MCPBench , the first benchmark for hierarchical tool selection, comprising 201 tools across 40 realâ€enterprise servicesâ€”23% of queries require multiâ€service reasoning. Experiments across five LLMs show Hiâ€RAG improves Topâ€1 accuracy by up to 7.5% (singleâ€service) and 10.0% (multiâ€service) over Flatâ€RAG, while reducing token consumption by up to 89% against fullâ€context injection. Comparisons with a strong lateâ€interaction baseline (ColBERTâ€RAG) further confirm the superiority of Hiâ€RAG. Zeroâ€shot evaluation on ToolLLM (16,464 tools) confirms scalability, and formal analyses establish context growth with respect to repository size."
    },
    {
      "paper_id": "10.63646/kpqm1958",
      "title": "The Age of Autonomous Agents: A Bibliometric Review of Agentic AI Architectures, Applications, and Emerging Challenges",
      "summary": "The rapid evolution of large language models (LLMs) has catalyzed a shift from passive AI systems toward autonomous agentic architectures capable of reasoning, memory, tool use, and multi-agent collaboration. This bibliometric review characterizes the emerging field through 810 publications retrieved from the Web of Science Core Collection for the period 2023â€“2025. Annual output rose sharply over this windowâ€”from 4 publications in 2023 to 96 in 2024 and 710 in 2025â€”accompanied by a parallel rise in citations, indicating rapid mainstream adoption. Author-keyword analysis reveals a landscape dominated by large language models, artificial intelligence, and multi-agent systems, with agentic AI, generative AI, and retrieval-augmented generation (RAG) emerging as core themes. Research output is geographically concentrated, led by China and the United States, and is distributed across a broad range of engineering, applied-science, and domain-specific journals rather than a single specialist venue, reflecting the field's cross-disciplinary uptake. Synthesizing this corpus, we organize the technical landscape around reasoning, memory, tool integration and RAG, and multi-agent orchestration; survey application domains spanning healthcare, scientific discovery, education, and software engineering, with emerging activity in finance and law; and analyze the principal challengesâ€”hallucination, trust and robustness, inter-agent coordination, scalability, and governance. The review provides a structured, evidence-based map of agentic AI research to orient researchers and practitioners navigating this rapidly evolving field.",
      "authors": "[\"Ben J. Weber\", \"Clara M. Hofmann\", \"Amara N. Okoye\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-06-30",
      "updated": "2026-07-17T02:04:13+00:00",
      "abs_url": "https://doi.org/10.63646/kpqm1958",
      "pdf_url": "https://inatgi.net/index.php/jaiaa/article/download/806/945",
      "comment": "Journal of AI Analytics and Applications | Institute of Advanced Technology and Green Innovation LLC | journal-article",
      "age_days": 37,
      "authors_joined": "Ben J. Weber, Clara M. Hofmann, Amara N. Okoye",
      "categories_joined": "",
      "summary_chars": 1635,
      "text_for_embedding": "The Age of Autonomous Agents: A Bibliometric Review of Agentic AI Architectures, Applications, and Emerging Challenges\n\nThe rapid evolution of large language models (LLMs) has catalyzed a shift from passive AI systems toward autonomous agentic architectures capable of reasoning, memory, tool use, and multi-agent collaboration. This bibliometric review characterizes the emerging field through 810 publications retrieved from the Web of Science Core Collection for the period 2023â€“2025. Annual output rose sharply over this windowâ€”from 4 publications in 2023 to 96 in 2024 and 710 in 2025â€”accompanied by a parallel rise in citations, indicating rapid mainstream adoption. Author-keyword analysis reveals a landscape dominated by large language models, artificial intelligence, and multi-agent systems, with agentic AI, generative AI, and retrieval-augmented generation (RAG) emerging as core themes. Research output is geographically concentrated, led by China and the United States, and is distributed across a broad range of engineering, applied-science, and domain-specific journals rather than a single specialist venue, reflecting the field's cross-disciplinary uptake. Synthesizing this corpus, we organize the technical landscape around reasoning, memory, tool integration and RAG, and multi-agent orchestration; survey application domains spanning healthcare, scientific discovery, education, and software engineering, with emerging activity in finance and law; and analyze the principal challengesâ€”hallucination, trust and robustness, inter-agent coordination, scalability, and governance. The review provides a structured, evidence-based map of agentic AI research to orient researchers and practitioners navigating this rapidly evolving field."
    },
    {
      "paper_id": "10.21203/rs.3.rs-10012178/v1",
      "title": "Retrieval-Augmented Generation (RAG), Generative AI, and Agentic AI Governance: An Integrated Enterprise Governance Prioritization Architecture",
      "summary": "Abstract Enterprise adoption of artificial intelligence (AI) systems, including Generative AI (GenAI), Retrieval-Augmented Generation (RAG), and agentic AI, is advancing faster than many organizations can adapt their governance, audit, cybersecurity, and executive oversight practices. This paper develops a proposed integrated AI governance prioritization architecture using a design-science research approach, supported by exploratory platform-risk analysis, a reproducible platform-risk dataset, a Monte Carlo robustness assessment, a framework coverage matrix, a Governance Priority Score (GPS)-based demonstration, and a public-document relevance assessment. The primary contribution is an integrated governance decision-support architecture that uses the Enterprise AI Platform Taxonomy (EAPT) to estimate platform burden, the Enterprise AI Risk Taxonomy (EART) to organize governance-risk exposure, the Enterprise AI Governance Maturity Model (EAGM) to represent organizational readiness, and the Integrated Agentic AI Governance Framework (IAGF) to identify agentic AI oversight requirements within a unified workflow. These components are operationally connected through GPS, which links platform burden, governancerisk gaps, organizational readiness, agentic runtime-control needs, and executive decision support. The proposed architecture draws upon NIST AI RMF, NIST AI 600-1, ISO/IEC 42001, COBIT, OWASP LLM Top 10, MITRE ATLAS, the EU AI Act, and related AI governance literature. A rubric-based analytical dataset covering 19 enterprise AI platforms evaluates each platform across eight subdimensions, with final platform-risk scores computed as the arithmetic mean of data access scope, operational autonomy, tool/API integration breadth, external connectivity, governance burden, cybersecurity exposure, adoption and shadow-AI risk, and supply-chain integrity. TThe expanded scoring method produces high rank stability relative to the original final-score dataset, with Spearmanâ€™s Ï = 0.996, and remains directionally stable under coding-uncertainty stress testing; these results are interpreted only as internal coding stability and robustness, not external validation. Public evidence from U.S. government agencies, universities, healthcare systems, and financial institutions is used to assess architecture relevance and observability, not to claim organizational effectiveness. The paper contributes a bounded design-science foundation for future inter-rater reliability testing, Delphi expert validation, organizational pilots, psychometric evaluation, and dashboard usability assessment.",
      "authors": "[\"Audrey Rah\", \"Sven Hahues\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-06-15",
      "updated": "2026-06-15T06:52:56+00:00",
      "abs_url": "https://doi.org/10.21203/rs.3.rs-10012178/v1",
      "pdf_url": "",
      "comment": "Springer Science and Business Media LLC | posted-content",
      "age_days": 52,
      "authors_joined": "Audrey Rah, Sven Hahues",
      "categories_joined": "",
      "summary_chars": 2610,
      "text_for_embedding": "Retrieval-Augmented Generation (RAG), Generative AI, and Agentic AI Governance: An Integrated Enterprise Governance Prioritization Architecture\n\nAbstract Enterprise adoption of artificial intelligence (AI) systems, including Generative AI (GenAI), Retrieval-Augmented Generation (RAG), and agentic AI, is advancing faster than many organizations can adapt their governance, audit, cybersecurity, and executive oversight practices. This paper develops a proposed integrated AI governance prioritization architecture using a design-science research approach, supported by exploratory platform-risk analysis, a reproducible platform-risk dataset, a Monte Carlo robustness assessment, a framework coverage matrix, a Governance Priority Score (GPS)-based demonstration, and a public-document relevance assessment. The primary contribution is an integrated governance decision-support architecture that uses the Enterprise AI Platform Taxonomy (EAPT) to estimate platform burden, the Enterprise AI Risk Taxonomy (EART) to organize governance-risk exposure, the Enterprise AI Governance Maturity Model (EAGM) to represent organizational readiness, and the Integrated Agentic AI Governance Framework (IAGF) to identify agentic AI oversight requirements within a unified workflow. These components are operationally connected through GPS, which links platform burden, governancerisk gaps, organizational readiness, agentic runtime-control needs, and executive decision support. The proposed architecture draws upon NIST AI RMF, NIST AI 600-1, ISO/IEC 42001, COBIT, OWASP LLM Top 10, MITRE ATLAS, the EU AI Act, and related AI governance literature. A rubric-based analytical dataset covering 19 enterprise AI platforms evaluates each platform across eight subdimensions, with final platform-risk scores computed as the arithmetic mean of data access scope, operational autonomy, tool/API integration breadth, external connectivity, governance burden, cybersecurity exposure, adoption and shadow-AI risk, and supply-chain integrity. TThe expanded scoring method produces high rank stability relative to the original final-score dataset, with Spearmanâ€™s Ï = 0.996, and remains directionally stable under coding-uncertainty stress testing; these results are interpreted only as internal coding stability and robustness, not external validation. Public evidence from U.S. government agencies, universities, healthcare systems, and financial institutions is used to assess architecture relevance and observability, not to claim organizational effectiveness. The paper contributes a bounded design-science foundation for future inter-rater reliability testing, Delphi expert validation, organizational pilots, psychometric evaluation, and dashboard usability assessment."
    },
    {
      "paper_id": "10.47576/2949-1894.2026.7.7.023",
      "title": "Ð¡Ð½Ð¸Ð¶ÐµÐ½Ð¸Ðµ Ñ€Ð¸ÑÐºÐ¾Ð² Ð¿Ñ€Ð¸Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ LLM (Large Language Model) Ð² ÑÑ„ÐµÑ€Ðµ ÑÐºÐ¾Ð½Ð¾Ð¼Ð¸Ñ‡ÐµÑÐºÐ¾Ð¹ Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ÑÑ‚Ð¸ Ð¿Ñ€ÐµÐ´Ð¿Ñ€Ð¸ÑÑ‚Ð¸Ð¹ Ð¼Ð¾Ð»Ð¾Ñ‡Ð½Ð¾Ð¹ Ð¿Ñ€Ð¾Ð¼Ñ‹ÑˆÐ»ÐµÐ½Ð½Ð¾ÑÑ‚Ð¸ Ð½Ð° Ð¾ÑÐ½Ð¾Ð²Ðµ Ð¿Ð¾Ð´Ñ…Ð¾Ð´Ð° RAG (Retrieval-Augmented Generation)",
      "summary": "Ð’ ÑÑ‚Ð°Ñ‚ÑŒÐµ Ð¿Ñ€Ð¾Ð²ÐµÐ´ÐµÐ½Ð¾ Ð¸ÑÑÐ»ÐµÐ´Ð¾Ð²Ð°Ð½Ð¸Ðµ Ð¾ÑÐ¾Ð±ÐµÐ½Ð½Ð¾ÑÑ‚ÐµÐ¹ ÑÐ½Ð¸Ð¶ÐµÐ½Ð¸Ñ Ñ€Ð¸ÑÐºÐ¾Ð² Ð¿Ñ€Ð¸Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ LLM (Large Language Model) Ð² ÑÑ„ÐµÑ€Ðµ ÑÐºÐ¾Ð½Ð¾Ð¼Ð¸Ñ‡ÐµÑÐºÐ¾Ð¹ Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ÑÑ‚Ð¸ Ð¿Ñ€ÐµÐ´Ð¿Ñ€Ð¸ÑÑ‚Ð¸Ð¹ Ð¼Ð¾Ð»Ð¾Ñ‡Ð½Ð¾Ð¹ Ð¿Ñ€Ð¾Ð¼Ñ‹ÑˆÐ»ÐµÐ½Ð½Ð¾ÑÑ‚Ð¸ Ð½Ð° Ð¾ÑÐ½Ð¾Ð²Ðµ Ð¿Ð¾Ð´Ñ…Ð¾Ð´Ð° RAG (Retrieval-Augmented Generation) Ð² ÑÐ¾Ð²Ñ€ÐµÐ¼ÐµÐ½Ð½Ñ‹Ñ… ÑƒÑÐ»Ð¾Ð²Ð¸ÑÑ…. Ð Ð°ÑÑÐ¼Ð¾Ñ‚Ñ€ÐµÐ½Ñ‹ Ñ€Ð¸ÑÐºÐ¸ Ð¿Ñ€Ð¸Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ LLM Ð² ÑÑ„ÐµÑ€Ðµ ÑÐºÐ¾Ð½Ð¾Ð¼Ð¸Ñ‡ÐµÑÐºÐ¾Ð¹ Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ÑÑ‚Ð¸ Ð¿Ñ€ÐµÐ´Ð¿Ñ€Ð¸ÑÑ‚Ð¸Ð¹ Ð¼Ð¾Ð»Ð¾Ñ‡Ð½Ð¾Ð¹ Ð¿Ñ€Ð¾Ð¼Ñ‹ÑˆÐ»ÐµÐ½Ð½Ð¾ÑÑ‚Ð¸. ÐŸÐ¾Ð´Ñ€Ð¾Ð±Ð½Ð¾ Ñ€Ð°Ð·Ð¾Ð±Ñ€Ð°Ð½Ñ‹ ÑÑ†ÐµÐ½Ð°Ñ€Ð¸Ð¸ Ð¿Ñ€Ð¸Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ LLM+RAG Ð² Ñ€Ð¾ÑÑÐ¸Ð¹ÑÐºÐ¾Ð¹ Ð¼Ð¾Ð»Ð¾Ñ‡Ð½Ð¾Ð¹ Ð¿Ñ€Ð¾Ð¼Ñ‹ÑˆÐ»ÐµÐ½Ð½Ð¾ÑÑ‚Ð¸ â€“ Ñ Ð¾Ð¿Ð¸ÑÐ°Ð½Ð¸ÐµÐ¼ Ð¿Ñ€Ð¾Ñ†ÐµÑÑÐ°, Ð·Ð°Ð´ÐµÐ¹ÑÑ‚Ð²Ð¾Ð²Ð°Ð½Ð½Ñ‹Ñ… Ð´Ð°Ð½Ð½Ñ‹Ñ…, Ñ€ÐµÑˆÐ°ÐµÐ¼Ñ‹Ñ… Ñ€Ð¸ÑÐºÐ¾Ð² Ð¸ Ð´Ð¾ÑÑ‚Ð¸Ð³Ð½ÑƒÑ‚Ñ‹Ñ… Ñ€ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚Ð¾Ð². ÐŸÐ¾ÐºÐ°Ð·Ð°Ð½Ð¾, Ñ‡Ñ‚Ð¾ Ð² Ñ€ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚Ðµ Ð¸Ð½Ñ‚ÐµÐ³Ñ€Ð°Ñ†Ð¸Ñ RAG Ñ LLM Ñ‚Ñ€Ð°Ð½ÑÑ„Ð¾Ñ€Ð¼Ð¸Ñ€ÑƒÐµÑ‚ Ð³ÐµÐ½ÐµÑ€Ð°Ñ‚Ð¸Ð²Ð½ÑƒÑŽ Ð¼Ð¾Ð´ÐµÐ»ÑŒ Ð¸Ð· Ð¿Ð¾Ñ‚ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½Ð¾ Ð¾Ð¿Ð°ÑÐ½Ð¾Ð³Ð¾ Ð¸Ð½ÑÑ‚Ñ€ÑƒÐ¼ÐµÐ½Ñ‚Ð° Ð² Ð½Ð°Ð´ÐµÐ¶Ð½Ñ‹Ð¹ Ð¼ÐµÑ…Ð°Ð½Ð¸Ð·Ð¼ Ð¿Ð¾Ð´Ð´ÐµÑ€Ð¶ÐºÐ¸ Ð¿Ñ€Ð¸Ð½ÑÑ‚Ð¸Ñ Ñ€ÐµÑˆÐµÐ½Ð¸Ð¹ â€“ Ð¾Ñ‚ Ð¼Ð¾Ð½Ð¸Ñ‚Ð¾Ñ€Ð¸Ð½Ð³Ð° ÑƒÐ³Ñ€Ð¾Ð· Ñ„Ð°Ð»ÑŒÑÐ¸Ñ„Ð¸ÐºÐ°Ñ†Ð¸Ð¸ Ð´Ð¾ Ð¿Ñ€Ð¾Ð³Ð½Ð¾Ð·Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð¸Ñ ÑÐºÐ¾Ð½Ð¾Ð¼Ð¸Ñ‡ÐµÑÐºÐ¸Ñ… Ð¿Ð¾ÐºÐ°Ð·Ð°Ñ‚ÐµÐ»ÐµÐ¹ Ñ ÑƒÑ‡ÐµÑ‚Ð¾Ð¼ Ð¾Ñ‚Ñ€Ð°ÑÐ»ÐµÐ²Ð¾Ð¹ ÑÐ¿ÐµÑ†Ð¸Ñ„Ð¸ÐºÐ¸. The article examines the features of reducing the risks of using LLM (Large Language Model) in the field of economic security of dairy industry enterprises based on the RAG (Retrieval-Augmented Generation) approach in modern conditions. The risks of using LLM in the field of economic security of dairy industry enterprises are considered. The scenarios of LLM+RAG application in the Russian dairy industry are analyzed in detail, describing the process, the data involved, the risks to be solved and the results achieved. It is shown that as a result, the integration of RAG with LLM transforms the generative model from a potentially dangerous tool into a reliable decision support mechanism, from monitoring fraud threats to forecasting economic indicators based on industry specifics.",
      "authors": "[\"Ð˜.Ð’. Ð•Ñ€Ð¼Ð°ÐºÐ¾Ð²\", \"Ð’.Ð’. Ð¤Ð¸Ð»Ð°Ñ‚Ð¾Ð²\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-06-15",
      "updated": "2026-06-17T08:52:47+00:00",
      "abs_url": "https://doi.org/10.47576/2949-1894.2026.7.7.023",
      "pdf_url": "",
      "comment": "Innovative economy: information, analytics, forecasts | Publishing house Pegas | journal-article",
      "age_days": 52,
      "authors_joined": "Ð˜.Ð’. Ð•Ñ€Ð¼Ð°ÐºÐ¾Ð², Ð’.Ð’. Ð¤Ð¸Ð»Ð°Ñ‚Ð¾Ð²",
      "categories_joined": "",
      "summary_chars": 1597,
      "text_for_embedding": "Ð¡Ð½Ð¸Ð¶ÐµÐ½Ð¸Ðµ Ñ€Ð¸ÑÐºÐ¾Ð² Ð¿Ñ€Ð¸Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ LLM (Large Language Model) Ð² ÑÑ„ÐµÑ€Ðµ ÑÐºÐ¾Ð½Ð¾Ð¼Ð¸Ñ‡ÐµÑÐºÐ¾Ð¹ Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ÑÑ‚Ð¸ Ð¿Ñ€ÐµÐ´Ð¿Ñ€Ð¸ÑÑ‚Ð¸Ð¹ Ð¼Ð¾Ð»Ð¾Ñ‡Ð½Ð¾Ð¹ Ð¿Ñ€Ð¾Ð¼Ñ‹ÑˆÐ»ÐµÐ½Ð½Ð¾ÑÑ‚Ð¸ Ð½Ð° Ð¾ÑÐ½Ð¾Ð²Ðµ Ð¿Ð¾Ð´Ñ…Ð¾Ð´Ð° RAG (Retrieval-Augmented Generation)\n\nÐ’ ÑÑ‚Ð°Ñ‚ÑŒÐµ Ð¿Ñ€Ð¾Ð²ÐµÐ´ÐµÐ½Ð¾ Ð¸ÑÑÐ»ÐµÐ´Ð¾Ð²Ð°Ð½Ð¸Ðµ Ð¾ÑÐ¾Ð±ÐµÐ½Ð½Ð¾ÑÑ‚ÐµÐ¹ ÑÐ½Ð¸Ð¶ÐµÐ½Ð¸Ñ Ñ€Ð¸ÑÐºÐ¾Ð² Ð¿Ñ€Ð¸Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ LLM (Large Language Model) Ð² ÑÑ„ÐµÑ€Ðµ ÑÐºÐ¾Ð½Ð¾Ð¼Ð¸Ñ‡ÐµÑÐºÐ¾Ð¹ Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ÑÑ‚Ð¸ Ð¿Ñ€ÐµÐ´Ð¿Ñ€Ð¸ÑÑ‚Ð¸Ð¹ Ð¼Ð¾Ð»Ð¾Ñ‡Ð½Ð¾Ð¹ Ð¿Ñ€Ð¾Ð¼Ñ‹ÑˆÐ»ÐµÐ½Ð½Ð¾ÑÑ‚Ð¸ Ð½Ð° Ð¾ÑÐ½Ð¾Ð²Ðµ Ð¿Ð¾Ð´Ñ…Ð¾Ð´Ð° RAG (Retrieval-Augmented Generation) Ð² ÑÐ¾Ð²Ñ€ÐµÐ¼ÐµÐ½Ð½Ñ‹Ñ… ÑƒÑÐ»Ð¾Ð²Ð¸ÑÑ…. Ð Ð°ÑÑÐ¼Ð¾Ñ‚Ñ€ÐµÐ½Ñ‹ Ñ€Ð¸ÑÐºÐ¸ Ð¿Ñ€Ð¸Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ LLM Ð² ÑÑ„ÐµÑ€Ðµ ÑÐºÐ¾Ð½Ð¾Ð¼Ð¸Ñ‡ÐµÑÐºÐ¾Ð¹ Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ÑÑ‚Ð¸ Ð¿Ñ€ÐµÐ´Ð¿Ñ€Ð¸ÑÑ‚Ð¸Ð¹ Ð¼Ð¾Ð»Ð¾Ñ‡Ð½Ð¾Ð¹ Ð¿Ñ€Ð¾Ð¼Ñ‹ÑˆÐ»ÐµÐ½Ð½Ð¾ÑÑ‚Ð¸. ÐŸÐ¾Ð´Ñ€Ð¾Ð±Ð½Ð¾ Ñ€Ð°Ð·Ð¾Ð±Ñ€Ð°Ð½Ñ‹ ÑÑ†ÐµÐ½Ð°Ñ€Ð¸Ð¸ Ð¿Ñ€Ð¸Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ LLM+RAG Ð² Ñ€Ð¾ÑÑÐ¸Ð¹ÑÐºÐ¾Ð¹ Ð¼Ð¾Ð»Ð¾Ñ‡Ð½Ð¾Ð¹ Ð¿Ñ€Ð¾Ð¼Ñ‹ÑˆÐ»ÐµÐ½Ð½Ð¾ÑÑ‚Ð¸ â€“ Ñ Ð¾Ð¿Ð¸ÑÐ°Ð½Ð¸ÐµÐ¼ Ð¿Ñ€Ð¾Ñ†ÐµÑÑÐ°, Ð·Ð°Ð´ÐµÐ¹ÑÑ‚Ð²Ð¾Ð²Ð°Ð½Ð½Ñ‹Ñ… Ð´Ð°Ð½Ð½Ñ‹Ñ…, Ñ€ÐµÑˆÐ°ÐµÐ¼Ñ‹Ñ… Ñ€Ð¸ÑÐºÐ¾Ð² Ð¸ Ð´Ð¾ÑÑ‚Ð¸Ð³Ð½ÑƒÑ‚Ñ‹Ñ… Ñ€ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚Ð¾Ð². ÐŸÐ¾ÐºÐ°Ð·Ð°Ð½Ð¾, Ñ‡Ñ‚Ð¾ Ð² Ñ€ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚Ðµ Ð¸Ð½Ñ‚ÐµÐ³Ñ€Ð°Ñ†Ð¸Ñ RAG Ñ LLM Ñ‚Ñ€Ð°Ð½ÑÑ„Ð¾Ñ€Ð¼Ð¸Ñ€ÑƒÐµÑ‚ Ð³ÐµÐ½ÐµÑ€Ð°Ñ‚Ð¸Ð²Ð½ÑƒÑŽ Ð¼Ð¾Ð´ÐµÐ»ÑŒ Ð¸Ð· Ð¿Ð¾Ñ‚ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½Ð¾ Ð¾Ð¿Ð°ÑÐ½Ð¾Ð³Ð¾ Ð¸Ð½ÑÑ‚Ñ€ÑƒÐ¼ÐµÐ½Ñ‚Ð° Ð² Ð½Ð°Ð´ÐµÐ¶Ð½Ñ‹Ð¹ Ð¼ÐµÑ…Ð°Ð½Ð¸Ð·Ð¼ Ð¿Ð¾Ð´Ð´ÐµÑ€Ð¶ÐºÐ¸ Ð¿Ñ€Ð¸Ð½ÑÑ‚Ð¸Ñ Ñ€ÐµÑˆÐµÐ½Ð¸Ð¹ â€“ Ð¾Ñ‚ Ð¼Ð¾Ð½Ð¸Ñ‚Ð¾Ñ€Ð¸Ð½Ð³Ð° ÑƒÐ³Ñ€Ð¾Ð· Ñ„Ð°Ð»ÑŒÑÐ¸Ñ„Ð¸ÐºÐ°Ñ†Ð¸Ð¸ Ð´Ð¾ Ð¿Ñ€Ð¾Ð³Ð½Ð¾Ð·Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð¸Ñ ÑÐºÐ¾Ð½Ð¾Ð¼Ð¸Ñ‡ÐµÑÐºÐ¸Ñ… Ð¿Ð¾ÐºÐ°Ð·Ð°Ñ‚ÐµÐ»ÐµÐ¹ Ñ ÑƒÑ‡ÐµÑ‚Ð¾Ð¼ Ð¾Ñ‚Ñ€Ð°ÑÐ»ÐµÐ²Ð¾Ð¹ ÑÐ¿ÐµÑ†Ð¸Ñ„Ð¸ÐºÐ¸. The article examines the features of reducing the risks of using LLM (Large Language Model) in the field of economic security of dairy industry enterprises based on the RAG (Retrieval-Augmented Generation) approach in modern conditions. The risks of using LLM in the field of economic security of dairy industry enterprises are considered. The scenarios of LLM+RAG application in the Russian dairy industry are analyzed in detail, describing the process, the data involved, the risks to be solved and the results achieved. It is shown that as a result, the integration of RAG with LLM transforms the generative model from a potentially dangerous tool into a reliable decision support mechanism, from monitoring fraud threats to forecasting economic indicators based on industry specifics."
    },
    {
      "paper_id": "10.21203/rs.3.rs-9882260/v1",
      "title": "Operationalizing Reliability Gaps in Large Language Models: A Semi-Systematic Evidence Map of Reasoning, Factuality, Evaluation, and Retrieval-Augmented Generation",
      "summary": "Abstract Large language models (LLMs) increasingly support reasoning, question answering, decision support, and retrieval-augmented knowledge work. High benchmark performance, however, does not by itself establish reliability under realistic deployment conditions. This article treats LLM reliability as a pipeline-level evaluation construct rather than a single capability score. Using a semi-systematic evidence-map design, it synthesizes 77 studies selected from a broader OpenAlex audit trail of 1,010 candidate records. The review focuses on four linked dimensions: reasoning faithfulness, factual grounding, evaluation validity, and evidence-use reliability in retrieval-augmented generation. The synthesis distinguishes answer accuracy from reasoning faithfulness, truth from source-grounded support, benchmark performance from evaluation validity, and retrieved evidence from evidence actually used during generation. Across the reviewed literature, reasoning traces can improve answer accuracy without demonstrating process faithfulness; self-correction without external feedback shows inconsistent reliability; hallucination, attribution error, and sycophancy represent separable factuality risks; benchmark scores are sensitive to contamination, saturation, and protocol variation; and retrieval-augmented generation reliability depends on retrieval relevance, source sufficiency, context utilization, attribution, and calibrated refusal. The article contributes an operational reliability-gap framework and testable propositions for evaluating interactions among reasoning, factual grounding, evaluation trust, evidence use, lateral reasoning, and equitable multilingual reliability. The framework supports reliability-centered evaluation protocols that report process verification, claim-level grounding, contamination controls, uncertainty and refusal behavior, and stratified performance across language, culture, and domain contexts.",
      "authors": "[\"Kushal Budha\", \"Nikesh Lagun\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-06-02",
      "updated": "2026-06-02T17:02:08+00:00",
      "abs_url": "https://doi.org/10.21203/rs.3.rs-9882260/v1",
      "pdf_url": "",
      "comment": "Springer Science and Business Media LLC | posted-content",
      "age_days": 65,
      "authors_joined": "Kushal Budha, Nikesh Lagun",
      "categories_joined": "",
      "summary_chars": 1949,
      "text_for_embedding": "Operationalizing Reliability Gaps in Large Language Models: A Semi-Systematic Evidence Map of Reasoning, Factuality, Evaluation, and Retrieval-Augmented Generation\n\nAbstract Large language models (LLMs) increasingly support reasoning, question answering, decision support, and retrieval-augmented knowledge work. High benchmark performance, however, does not by itself establish reliability under realistic deployment conditions. This article treats LLM reliability as a pipeline-level evaluation construct rather than a single capability score. Using a semi-systematic evidence-map design, it synthesizes 77 studies selected from a broader OpenAlex audit trail of 1,010 candidate records. The review focuses on four linked dimensions: reasoning faithfulness, factual grounding, evaluation validity, and evidence-use reliability in retrieval-augmented generation. The synthesis distinguishes answer accuracy from reasoning faithfulness, truth from source-grounded support, benchmark performance from evaluation validity, and retrieved evidence from evidence actually used during generation. Across the reviewed literature, reasoning traces can improve answer accuracy without demonstrating process faithfulness; self-correction without external feedback shows inconsistent reliability; hallucination, attribution error, and sycophancy represent separable factuality risks; benchmark scores are sensitive to contamination, saturation, and protocol variation; and retrieval-augmented generation reliability depends on retrieval relevance, source sufficiency, context utilization, attribution, and calibrated refusal. The article contributes an operational reliability-gap framework and testable propositions for evaluating interactions among reasoning, factual grounding, evaluation trust, evidence use, lateral reasoning, and equitable multilingual reliability. The framework supports reliability-centered evaluation protocols that report process verification, claim-level grounding, contamination controls, uncertainty and refusal behavior, and stratified performance across language, culture, and domain contexts."
    },
    {
      "paper_id": "10.52060/juptik.v4i1.4318",
      "title": "Chatbot Hybrid Fatwa MUI Menggunakan Retrieval Augmented Generation dan Large Language Model",
      "summary": "Aksesibilitas dokumen digital Fatwa Majelis Ulama Indonesia (MUI) yang terfragmentasi membuat pencarian informasi kurang efektif. Di sisi lain, sistem tanya jawab AI berbasis satu sumber dokumen (single-corpus) rentan menghasilkan jawaban tidak akurat (halusinasi) pada pertanyaan di luar domain. Penelitian ini mengembangkan Chatbot Hybrid Fatwa MUI menggunakan arsitektur Hybrid Retrieval bertingkat dengan dua sumber pengetahuan: dokumen Fatwa MUI sebagai korpus utama dan 12.370 hadis Bukhari-Muslim sebagai mekanisme cadangan (fallback). Sistem ini menerapkan pencarian semantik, verifikasi topik otomatis oleh model bahasa, dan pengalihan ke basis data hadis jika konteks fatwa dinilai tidak relevan. Hasil evaluasi menunjukkan peningkatan kesamaan makna jawaban sebesar 13,23% (dari 0,6664 menjadi 0,7546) dan peningkatan kesetiaan pada rujukan (faithfulness) sebesar 10,57% (dari 85,37% menjadi 94,39%), dengan tingkat penolakan (abstain rate) identik sebesar 26,83%. Pendekatan multi-korpus ini terbukti signifikan meningkatkan relevansi dan keakuratan jawaban dibandingkan RAG standar.",
      "authors": "[\"Surya Hidayatullah Firdaus\", \"Nazruddin Safaat H\", \"Yelfi Vitriani\", \"Novriyanto\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-06-01",
      "updated": "2026-07-04T21:16:23+00:00",
      "abs_url": "https://doi.org/10.52060/juptik.v4i1.4318",
      "pdf_url": "https://www.ejournal.ummuba.ac.id/index.php/JUPTIK/article/download/4318/2057",
      "comment": "Jurnal Pengembangan Teknologi Informasi dan Komunikasi (JUPTIK) | Universitas Muhammadiyah Muara Bungo | journal-article",
      "age_days": 66,
      "authors_joined": "Surya Hidayatullah Firdaus, Nazruddin Safaat H, Yelfi Vitriani, Novriyanto",
      "categories_joined": "",
      "summary_chars": 1095,
      "text_for_embedding": "Chatbot Hybrid Fatwa MUI Menggunakan Retrieval Augmented Generation dan Large Language Model\n\nAksesibilitas dokumen digital Fatwa Majelis Ulama Indonesia (MUI) yang terfragmentasi membuat pencarian informasi kurang efektif. Di sisi lain, sistem tanya jawab AI berbasis satu sumber dokumen (single-corpus) rentan menghasilkan jawaban tidak akurat (halusinasi) pada pertanyaan di luar domain. Penelitian ini mengembangkan Chatbot Hybrid Fatwa MUI menggunakan arsitektur Hybrid Retrieval bertingkat dengan dua sumber pengetahuan: dokumen Fatwa MUI sebagai korpus utama dan 12.370 hadis Bukhari-Muslim sebagai mekanisme cadangan (fallback). Sistem ini menerapkan pencarian semantik, verifikasi topik otomatis oleh model bahasa, dan pengalihan ke basis data hadis jika konteks fatwa dinilai tidak relevan. Hasil evaluasi menunjukkan peningkatan kesamaan makna jawaban sebesar 13,23% (dari 0,6664 menjadi 0,7546) dan peningkatan kesetiaan pada rujukan (faithfulness) sebesar 10,57% (dari 85,37% menjadi 94,39%), dengan tingkat penolakan (abstain rate) identik sebesar 26,83%. Pendekatan multi-korpus ini terbukti signifikan meningkatkan relevansi dan keakuratan jawaban dibandingkan RAG standar."
    },
    {
      "paper_id": "10.54254/2753-8818/2026.dl34055",
      "title": "Hallucination in Large Language Models and Retrieval-Augmented Generation: Mechanisms, Mitigation, and Evaluation",
      "summary": "Large language models have demonstrated strong generative capability in question answering, dialogue, and other knowledge-intensive tasks. However, their outputs remain vulnerable to hallucination, including factual errors, unsupported claims, spurious citations, and distorted reasoning. Retrieval-augmented generation (RAG) has been proposed as a practical remedy because it supplements parametric knowledge with external evidence retrieved at inference time. Yet RAG does not guarantee truthfulness or attribution by default. Errors may arise during query formulation, document retrieval, evidence aggregation, and answer grounding. This paper reviews the relationship between hallucination and RAG from three perspectives: mechanism, mitigation, and evaluation. First, the major causes of hallucination in both vanilla LLMs and RAG-enhanced systems are analyzed. Second, the principal mitigation strategies are organized into retrieval optimization, evidence-grounded generation, and post-generation verification. Third, the main evaluation dimensions are examined, including factuality, faithfulness, attribution quality, and retrieval relevance. It is argued that RAG should not be treated as a complete solution to hallucination. Its value lies in enabling externally grounded generation, but its effectiveness depends on the reliability of retrieval, the fidelity of evidence use, and the rigor of evaluation. Future work should prioritize attribution-aware generation, conflict-sensitive reasoning, and unified evaluation protocols for trustworthy LLM systems.",
      "authors": "[\"Haopeng Yang\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-06-01",
      "updated": "2026-06-01T08:01:15+00:00",
      "abs_url": "https://doi.org/10.54254/2753-8818/2026.dl34055",
      "pdf_url": "",
      "comment": "Theoretical and Natural Science | EWA Publishing | journal-article",
      "age_days": 66,
      "authors_joined": "Haopeng Yang",
      "categories_joined": "",
      "summary_chars": 1569,
      "text_for_embedding": "Hallucination in Large Language Models and Retrieval-Augmented Generation: Mechanisms, Mitigation, and Evaluation\n\nLarge language models have demonstrated strong generative capability in question answering, dialogue, and other knowledge-intensive tasks. However, their outputs remain vulnerable to hallucination, including factual errors, unsupported claims, spurious citations, and distorted reasoning. Retrieval-augmented generation (RAG) has been proposed as a practical remedy because it supplements parametric knowledge with external evidence retrieved at inference time. Yet RAG does not guarantee truthfulness or attribution by default. Errors may arise during query formulation, document retrieval, evidence aggregation, and answer grounding. This paper reviews the relationship between hallucination and RAG from three perspectives: mechanism, mitigation, and evaluation. First, the major causes of hallucination in both vanilla LLMs and RAG-enhanced systems are analyzed. Second, the principal mitigation strategies are organized into retrieval optimization, evidence-grounded generation, and post-generation verification. Third, the main evaluation dimensions are examined, including factuality, faithfulness, attribution quality, and retrieval relevance. It is argued that RAG should not be treated as a complete solution to hallucination. Its value lies in enabling externally grounded generation, but its effectiveness depends on the reliability of retrieval, the fidelity of evidence use, and the rigor of evaluation. Future work should prioritize attribution-aware generation, conflict-sensitive reasoning, and unified evaluation protocols for trustworthy LLM systems."
    },
    {
      "paper_id": "10.22214/ijraset.2026.82233",
      "title": "Hybrid Graph Neural Network and Large Language Model Framework for Robust Knowledge Graph Question Answering via Retrieval-Augmented Generation",
      "summary": "Knowledge graphs (KGs) hold facts about the world as connected triples, and they have become a backbone for any system that needs to reason over linked information. The task of Knowledge Graph Question Answering (KGQA) is to map a natural-language question onto the right entity, or set of entities, somewhere inside such a graph. Two communities have been pulling at this problem from opposite ends. Large language models (LLMs) read a question fluently but tend to invent facts and stumble on multi-hop chains they cannot verify. Graph neural networks (GNNs), on the other side, are good at walking through neighbourhoods and weighing relations, but cannot phrase an answer the way a person would. In this work, we describe a practical hybrid that places the two inside a retrieval- augmented generation (RAG) loop. A GNN first prunes a small subgraph around the question's seed entities and ranks candidate answers; we then extract shortest paths between the seeds and the top candidates, score each path with a lightweight function that combines GNN attention with degree centrality, and finally verbalise the surviving paths into plain-English sentences before passing them to a 7-8B open-source LLM. The proposed entity-priority scoring step is training-free and runs in milliseconds, yet it lifts Hits@1 by roughly 4-5 percentage points on the harder questions of ComplexWebQuestions. Experiments on WebQuestionsSP and ComplexWebQuestions show competitive or superior results against recent baselines, with the largest gains on multi-entity and three-or-more hop queries. The pipeline uses about one LLM call per question, runs comfortably on a single mid-range GPU, and exposes its reasoning as a short list of human-readable paths that anyone can audit. We argue that this combination of grounded retrieval, lightweight path scoring, and modest model size makes the approach particularly suited to academic and resourceconstrained settings.",
      "authors": "[\"Sohail Khan\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-05-31",
      "updated": "2026-05-16T08:14:08+00:00",
      "abs_url": "https://doi.org/10.22214/ijraset.2026.82233",
      "pdf_url": "",
      "comment": "International Journal for Research in Applied Science and Engineering Technology | International Journal for Research in Applied Science and Engineering Technology (IJRASET) | journal-article",
      "age_days": 67,
      "authors_joined": "Sohail Khan",
      "categories_joined": "",
      "summary_chars": 1949,
      "text_for_embedding": "Hybrid Graph Neural Network and Large Language Model Framework for Robust Knowledge Graph Question Answering via Retrieval-Augmented Generation\n\nKnowledge graphs (KGs) hold facts about the world as connected triples, and they have become a backbone for any system that needs to reason over linked information. The task of Knowledge Graph Question Answering (KGQA) is to map a natural-language question onto the right entity, or set of entities, somewhere inside such a graph. Two communities have been pulling at this problem from opposite ends. Large language models (LLMs) read a question fluently but tend to invent facts and stumble on multi-hop chains they cannot verify. Graph neural networks (GNNs), on the other side, are good at walking through neighbourhoods and weighing relations, but cannot phrase an answer the way a person would. In this work, we describe a practical hybrid that places the two inside a retrieval- augmented generation (RAG) loop. A GNN first prunes a small subgraph around the question's seed entities and ranks candidate answers; we then extract shortest paths between the seeds and the top candidates, score each path with a lightweight function that combines GNN attention with degree centrality, and finally verbalise the surviving paths into plain-English sentences before passing them to a 7-8B open-source LLM. The proposed entity-priority scoring step is training-free and runs in milliseconds, yet it lifts Hits@1 by roughly 4-5 percentage points on the harder questions of ComplexWebQuestions. Experiments on WebQuestionsSP and ComplexWebQuestions show competitive or superior results against recent baselines, with the largest gains on multi-entity and three-or-more hop queries. The pipeline uses about one LLM call per question, runs comfortably on a single mid-range GPU, and exposes its reasoning as a short list of human-readable paths that anyone can audit. We argue that this combination of grounded retrieval, lightweight path scoring, and modest model size makes the approach particularly suited to academic and resourceconstrained settings."
    },
    {
      "paper_id": "10.21203/rs.3.rs-9770645/v1",
      "title": "Adapting Large Language Models for Low-Resource Regulated Domains: A Fine-Tuning and Retrieval-Augmented Generation Approach to Insurance Information Delivery in Kenya",
      "summary": "Abstract Background. Insurance penetration in Kenya stands at roughly 2.3% of GDP, well below the global average of 7.4%. Documented barriers include low financial literacy, affordability, cultural resistance and limited access to trusted, locally relevant information. Large Language Models (LLMs) could in principle deliver scalable, personalised information, but off-the-shelf models perform poorly on jurisdiction-specific regulatory content and are prone to hallucination in low-resource domains. Objective. We investigate how a mid-sized open-weights LLM can be adapted to a low-resource, highly regulated domain using two complementary techniques â€” parameter-efficient supervised fine-tuning and Retrieval-Augmented Generation (RAG) â€” and we quantify the marginal value of each technique and of their combination. Methods. A questionâ€“answer (QA) corpus was curated from primary regulatory sources (Insurance Regula- tory Authority of Kenya, Association of Kenya Insurers) and reformatted into JSONL. Metaâ€™s LLaMA-2- 13B-chat was used as the base model. We compared four configurations: (i) base model; (ii) base + LoRA fine-tuning; (iii) base + RAG over a Chroma vector index; and (iv) fine-tuning + RAG. Outputs were graded by GPT-4 (with a human-validated paraphrased test set) on accuracy (1â€“10), succinctness (5-level rubric mapped to a numerical scale) and relevancy (1â€“10). Results. The combined fine-tuning + RAG configuration achieved the best performance on all three metrics (accuracy 6.803, succinctness 7.03, relevancy 6.89), versus the base model (1.229, 3.78, 1.98). Fine-tuning alone yielded only marginal accuracy gains and a measurable drop in relevancy, indicating that parameter adaptation without external knowledge grounding can make the model more confident without making it more correct. RAG contributed the largest single improvement. Contribution. The paper offers (a) a reproducible recipe for adapting open-weights LLMs to a low-resource regulated domain on commodity hardware; (b) empirical evidence on the relative contribution of fine-tuning vs. retrieval grounding in that setting; and (c) a discussion of the implications for AI-assisted financial inclusion in Sub-Saharan Africa.",
      "authors": "[\"AMOS MBEKI NYAGAR\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-05-22",
      "updated": "2026-05-22T04:10:39+00:00",
      "abs_url": "https://doi.org/10.21203/rs.3.rs-9770645/v1",
      "pdf_url": "",
      "comment": "Springer Science and Business Media LLC | posted-content",
      "age_days": 76,
      "authors_joined": "AMOS MBEKI NYAGAR",
      "categories_joined": "",
      "summary_chars": 2220,
      "text_for_embedding": "Adapting Large Language Models for Low-Resource Regulated Domains: A Fine-Tuning and Retrieval-Augmented Generation Approach to Insurance Information Delivery in Kenya\n\nAbstract Background. Insurance penetration in Kenya stands at roughly 2.3% of GDP, well below the global average of 7.4%. Documented barriers include low financial literacy, affordability, cultural resistance and limited access to trusted, locally relevant information. Large Language Models (LLMs) could in principle deliver scalable, personalised information, but off-the-shelf models perform poorly on jurisdiction-specific regulatory content and are prone to hallucination in low-resource domains. Objective. We investigate how a mid-sized open-weights LLM can be adapted to a low-resource, highly regulated domain using two complementary techniques â€” parameter-efficient supervised fine-tuning and Retrieval-Augmented Generation (RAG) â€” and we quantify the marginal value of each technique and of their combination. Methods. A questionâ€“answer (QA) corpus was curated from primary regulatory sources (Insurance Regula- tory Authority of Kenya, Association of Kenya Insurers) and reformatted into JSONL. Metaâ€™s LLaMA-2- 13B-chat was used as the base model. We compared four configurations: (i) base model; (ii) base + LoRA fine-tuning; (iii) base + RAG over a Chroma vector index; and (iv) fine-tuning + RAG. Outputs were graded by GPT-4 (with a human-validated paraphrased test set) on accuracy (1â€“10), succinctness (5-level rubric mapped to a numerical scale) and relevancy (1â€“10). Results. The combined fine-tuning + RAG configuration achieved the best performance on all three metrics (accuracy 6.803, succinctness 7.03, relevancy 6.89), versus the base model (1.229, 3.78, 1.98). Fine-tuning alone yielded only marginal accuracy gains and a measurable drop in relevancy, indicating that parameter adaptation without external knowledge grounding can make the model more confident without making it more correct. RAG contributed the largest single improvement. Contribution. The paper offers (a) a reproducible recipe for adapting open-weights LLMs to a low-resource regulated domain on commodity hardware; (b) empirical evidence on the relative contribution of fine-tuning vs. retrieval grounding in that setting; and (c) a discussion of the implications for AI-assisted financial inclusion in Sub-Saharan Africa."
    },
    {
      "paper_id": "10.32473/flairs.39.1.141782",
      "title": "An Exploratory Study of Agentic Retrieval Augmented Generation for Mental Health Oriented Language Models",
      "summary": "Mental health conditions affect over one billion individuals globally and remain challenging to assess accurately due to fragmented clinical data and subjective evaluation methods. Mental health support systems increasingly rely on large language models (LLMs) due to their capabilities in natural language understanding and response generation. While retrieval augmented generation (RAG) and agentic frameworks have improved grounded generation in several domains, there is limited understanding of how such approaches affect response quality in mental health related tasks. In particular, the impact of structured context management and autonomous refinement on clinical relevance, empathy, completeness, and safety remains underexplored. In this study, we investigate the effects of agentic RAG on the performance of multiple mental health oriented language models. We adopt a common pipeline configuration that integrates patient dialogue, structured patient history, and externally retrieved clinical knowledge. The pipeline consists of coordinated stages for patient context retrieval, context augmentation, and response generation with autonomous evaluation and iterative refinement. We conduct empirical evaluations across four mental health models under this pipeline and analyze their performance in terms of medical accuracy, empathy, completeness, safety, and overall response quality. Our results show consistent trends toward improved responses when structured context handling and agentic refinement are applied, indicating that these components influence model behavior independent of architecture. This work provides insight into how agentic RAG influences model outputs in mental health applications and highlights the importance of context engineering and quality control in LLM based support systems. These findings indicate that Agentic Context Engineering (ACE) may contribute to improved reasoning depth, contextual alignment, and patient centered response quality across diverse models. However, despite the improvements observed, the framework remains an early step toward more reliable AI assisted mental health assessment. Continued research is needed to refine model architectures, optimize prompt engineering, and expand evaluation across broader and more diverse clinical contexts to ensure safety, consistency, and real world applicability.",
      "authors": "[\"Khoa Pham\", \"Jiacheng Li\", \"Hassan S. Al Khatib\", \"Shahram Rahimi\", \"Noorbakhsh Amiri Golilarz\", \"Andy Perkins\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-05-06",
      "updated": "2026-05-06T14:14:40+00:00",
      "abs_url": "https://doi.org/10.32473/flairs.39.1.141782",
      "pdf_url": "https://journals.flvc.org/FLAIRS/article/download/141782/146987",
      "comment": "The International FLAIRS Conference Proceedings | University of Florida George A Smathers Libraries | journal-article",
      "age_days": 92,
      "authors_joined": "Khoa Pham, Jiacheng Li, Hassan S. Al Khatib, Shahram Rahimi, Noorbakhsh Amiri Golilarz, Andy Perkins",
      "categories_joined": "",
      "summary_chars": 2371,
      "text_for_embedding": "An Exploratory Study of Agentic Retrieval Augmented Generation for Mental Health Oriented Language Models\n\nMental health conditions affect over one billion individuals globally and remain challenging to assess accurately due to fragmented clinical data and subjective evaluation methods. Mental health support systems increasingly rely on large language models (LLMs) due to their capabilities in natural language understanding and response generation. While retrieval augmented generation (RAG) and agentic frameworks have improved grounded generation in several domains, there is limited understanding of how such approaches affect response quality in mental health related tasks. In particular, the impact of structured context management and autonomous refinement on clinical relevance, empathy, completeness, and safety remains underexplored. In this study, we investigate the effects of agentic RAG on the performance of multiple mental health oriented language models. We adopt a common pipeline configuration that integrates patient dialogue, structured patient history, and externally retrieved clinical knowledge. The pipeline consists of coordinated stages for patient context retrieval, context augmentation, and response generation with autonomous evaluation and iterative refinement. We conduct empirical evaluations across four mental health models under this pipeline and analyze their performance in terms of medical accuracy, empathy, completeness, safety, and overall response quality. Our results show consistent trends toward improved responses when structured context handling and agentic refinement are applied, indicating that these components influence model behavior independent of architecture. This work provides insight into how agentic RAG influences model outputs in mental health applications and highlights the importance of context engineering and quality control in LLM based support systems. These findings indicate that Agentic Context Engineering (ACE) may contribute to improved reasoning depth, contextual alignment, and patient centered response quality across diverse models. However, despite the improvements observed, the framework remains an early step toward more reliable AI assisted mental health assessment. Continued research is needed to refine model architectures, optimize prompt engineering, and expand evaluation across broader and more diverse clinical contexts to ensure safety, consistency, and real world applicability."
    },
    {
      "paper_id": "10.55041/isjem07213",
      "title": "Speculative Retrieval-Augmented Generation for Cost-Efficient Large Language Model Inference",
      "summary": "Abstract - This work focuses on the two crucial bottlenecks in Retrieval-Augmented Generation (RAG): high inference latency and expensive computation cost. RAG enhances the factual correctness of Large Language Models (LLMs) by utilizing external knowledge sources; However, the auto-To achieve a good recall, the system applies a two-way retrieval mechanism: Dense retrieval: This module uses BAAI/bge-small-en-v1.5 to create a 384-dimensional embedding space, where queries and documents are mapped. The embeddings are stored in a FAISS IndexFlatL2. Sparse retrieval: This module uses TF-IDF vectorization to capture an exact keyword match. Reranking: A simple heuristic mechanism of matching substrings of the query terms in the documents selected to perform the final step of ranking them for prompt introduce a novel speculative RAG framework that combines hybrid retrieval with speculative decoding. Our framework employs hybrid dense vector search (BGE-small) and sparse keyword search (TF-IDF) for enhanced recall followed by a lightweight re-ranker model. A compact draft model (TinyLlama-1.1B) makes tentative future token generation, then a larger verifier model (Mistral-7B) checks the correctness of the candidate token. Empirical experiments demonstrate 33% and 29% improvement in inference latency and token reduction, respectively, compared to the baseline of a typical 7B model, while retaining 94% accuracy on factoid tasks. Key Words: Retrieval-Augmented Generation, Speculative Decoding, Large Language Models, Inference Optimization, Hybrid Retrieval",
      "authors": "[\"Dr. Sumalatha P\", \"Manoj Kumar\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-05-06",
      "updated": "2026-05-06T17:13:30+00:00",
      "abs_url": "https://doi.org/10.55041/isjem07213",
      "pdf_url": "",
      "comment": "International Scientific Journal of Engineering and Management | Edtech Publishers (OPC) Private Limited | journal-article",
      "age_days": 92,
      "authors_joined": "Dr. Sumalatha P, Manoj Kumar",
      "categories_joined": "",
      "summary_chars": 1571,
      "text_for_embedding": "Speculative Retrieval-Augmented Generation for Cost-Efficient Large Language Model Inference\n\nAbstract - This work focuses on the two crucial bottlenecks in Retrieval-Augmented Generation (RAG): high inference latency and expensive computation cost. RAG enhances the factual correctness of Large Language Models (LLMs) by utilizing external knowledge sources; However, the auto-To achieve a good recall, the system applies a two-way retrieval mechanism: Dense retrieval: This module uses BAAI/bge-small-en-v1.5 to create a 384-dimensional embedding space, where queries and documents are mapped. The embeddings are stored in a FAISS IndexFlatL2. Sparse retrieval: This module uses TF-IDF vectorization to capture an exact keyword match. Reranking: A simple heuristic mechanism of matching substrings of the query terms in the documents selected to perform the final step of ranking them for prompt introduce a novel speculative RAG framework that combines hybrid retrieval with speculative decoding. Our framework employs hybrid dense vector search (BGE-small) and sparse keyword search (TF-IDF) for enhanced recall followed by a lightweight re-ranker model. A compact draft model (TinyLlama-1.1B) makes tentative future token generation, then a larger verifier model (Mistral-7B) checks the correctness of the candidate token. Empirical experiments demonstrate 33% and 29% improvement in inference latency and token reduction, respectively, compared to the baseline of a typical 7B model, while retaining 94% accuracy on factoid tasks. Key Words: Retrieval-Augmented Generation, Speculative Decoding, Large Language Models, Inference Optimization, Hybrid Retrieval"
    },
    {
      "paper_id": "10.1093/sleep/zsag091.0346",
      "title": "0346 Retrieval Augmented Generation Improves Large Language Model Performance in Sleep Medicine",
      "summary": "Abstract Introduction While Large Language Models (LLMs) offer generative capabilities, generic models often lack domain-specific grounding, leading to hallucinations in high-stakes contexts. However, LLMs can serve as clinical decision support tools if augmented with specific domain data. This study evaluates the utility of Retrieval-Augmented Generation (RAG) applied to open-source LLMs, utilizing a curated knowledge base of authoritative sleep medicine textbooks, to quantify improvement in performance. Methods We evaluated four open-source modelsâ€”Llama-70B, Llama-8B, Qwen-14B, and Qwen-235B, linked to a RAG system indexing five standard textbooks, including ICSD-3 TR. Models were tested on sleep boardâ€“style MCQs and clinical vignettes diagnostic accuracy. Performance was assessed across nine configurations derived from three factors: RAG pipeline complexity (Plain vs. Complicated), textbook preprocessing (Uncleaned vs. Cleaned/TOC-aligned), and retriever type (Dense-only vs. Hybrid). Metrics included MCQ Accuracy and the rates at which the correct diagnosis appeared as the top result or within the top 5 differential diagnosis lists for vignettes. Results RAG consistently outperformed the no-RAG baseline, yielding absolute performance gains of 5.6%â€“10.7% for MCQs and 8.1%â€“10.2% for the top diagnosis in cases across all models. For MCQs, Qwen-235B achieved the highest accuracy of 87.3% (vs. 81.7% baseline) using the Plain RAG configuration with Cleaned (TOC-aligned) Hybrid retrieval. Llama-70B followed with 83.6% in the same configuration. For case vignettes, Qwen-235B achieved a correct top diagnosis rate of 66.3% and a correct diagnosis rate within the top 5 differential diagnosis lists of 90.8% using Cleaned Hybrid retrieval configurations. Hybrid retrieval (Dense + Sparse) consistently surpassed Dense-only methods. Notably, while larger models benefited from Cleaned text, smaller models (e.g., Qwen-14B) achieved higher top diagnosis rates with Uncleaned text (57.1% vs. 51.0%), suggesting a dependency on redundant context in lower-parameter settings. Conclusion RAG significantly enhances knowledge performance of open-source LLMs in sleep medicine. Hybrid retrieval and curated, TOC-aligned knowledge bases yield optimal results for large models, whereas smaller models benefit from the redundancy of uncleaned text. These findings suggest that RAG systems can augment LLMs in domain specific knowledge for clinical decision support. Support (if any)",
      "authors": "[\"Joseph Cheung\", \"Pengze Li\", \"Anshum Patel\", \"SaiKrishna Vallamchetla\", \"Het Contractor\", \"Hayden Heninger\", \"Cui Tao\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-05-01",
      "updated": "2026-05-09T03:10:46+00:00",
      "abs_url": "https://doi.org/10.1093/sleep/zsag091.0346",
      "pdf_url": "https://academic.oup.com/sleep/article-pdf/49/Supplement_1/A153/68252775/zsag091.0346.pdf",
      "comment": "SLEEPJ | Oxford University Press (OUP) | journal-article",
      "age_days": 97,
      "authors_joined": "Joseph Cheung, Pengze Li, Anshum Patel, SaiKrishna Vallamchetla, Het Contractor, Hayden Heninger, Cui Tao",
      "categories_joined": "",
      "summary_chars": 2491,
      "text_for_embedding": "0346 Retrieval Augmented Generation Improves Large Language Model Performance in Sleep Medicine\n\nAbstract Introduction While Large Language Models (LLMs) offer generative capabilities, generic models often lack domain-specific grounding, leading to hallucinations in high-stakes contexts. However, LLMs can serve as clinical decision support tools if augmented with specific domain data. This study evaluates the utility of Retrieval-Augmented Generation (RAG) applied to open-source LLMs, utilizing a curated knowledge base of authoritative sleep medicine textbooks, to quantify improvement in performance. Methods We evaluated four open-source modelsâ€”Llama-70B, Llama-8B, Qwen-14B, and Qwen-235B, linked to a RAG system indexing five standard textbooks, including ICSD-3 TR. Models were tested on sleep boardâ€“style MCQs and clinical vignettes diagnostic accuracy. Performance was assessed across nine configurations derived from three factors: RAG pipeline complexity (Plain vs. Complicated), textbook preprocessing (Uncleaned vs. Cleaned/TOC-aligned), and retriever type (Dense-only vs. Hybrid). Metrics included MCQ Accuracy and the rates at which the correct diagnosis appeared as the top result or within the top 5 differential diagnosis lists for vignettes. Results RAG consistently outperformed the no-RAG baseline, yielding absolute performance gains of 5.6%â€“10.7% for MCQs and 8.1%â€“10.2% for the top diagnosis in cases across all models. For MCQs, Qwen-235B achieved the highest accuracy of 87.3% (vs. 81.7% baseline) using the Plain RAG configuration with Cleaned (TOC-aligned) Hybrid retrieval. Llama-70B followed with 83.6% in the same configuration. For case vignettes, Qwen-235B achieved a correct top diagnosis rate of 66.3% and a correct diagnosis rate within the top 5 differential diagnosis lists of 90.8% using Cleaned Hybrid retrieval configurations. Hybrid retrieval (Dense + Sparse) consistently surpassed Dense-only methods. Notably, while larger models benefited from Cleaned text, smaller models (e.g., Qwen-14B) achieved higher top diagnosis rates with Uncleaned text (57.1% vs. 51.0%), suggesting a dependency on redundant context in lower-parameter settings. Conclusion RAG significantly enhances knowledge performance of open-source LLMs in sleep medicine. Hybrid retrieval and curated, TOC-aligned knowledge bases yield optimal results for large models, whereas smaller models benefit from the redundancy of uncleaned text. These findings suggest that RAG systems can augment LLMs in domain specific knowledge for clinical decision support. Support (if any)"
    },
    {
      "paper_id": "10.20944/preprints202604.0339.v1",
      "title": "Retrieval-Augmented Large Language Model Agents for Automated Scientific Literature Review Generation",
      "summary": "This study investigates a method that integrates retrieval-augmented mechanisms into large language model agents for scientific literature review generation. The approach addresses the limitations of traditional review models that rely on parametric knowledge with insufficient timeliness and limited coverage. Incorporating external document retrieval and dynamic information fusion into the generation process enhances the accuracy and completeness of the output. The overall framework consists of query encoding, semantic retrieval, document filtering, knowledge fusion, language modeling, task planning, memory storage, and reinforcement optimization, forming a closed loop of retrieval, understanding, and generation. Relevant document fragments are first retrieved through semantic vector search to ensure comprehensive and reliable information sources. These external representations are then integrated with the internal embeddings of the language model through weighted fusion, which preserves fluency while maintaining factual grounding. The task planning module constrains logical flow and text structure, and reinforcement learning optimization further improves relevance and consistency. Comparative experiments on large-scale scientific literature datasets demonstrate that the method outperforms existing approaches on ROUGE, BLEU, METEOR, and diversity metrics, validating its effectiveness and practicality. The findings show that combining retrieval augmentation with agent architectures can significantly improve coverage, accuracy, and language quality in review generation, providing a feasible solution for knowledge organization in complex literature environments.",
      "authors": "[\"Ruotong Wang\", \"Nyutian Long\", \"Shunqi Liu\", \"Yuxi Wang\", \"Zhen Qi\", \"Huajun Zhang\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-04-06",
      "updated": "2026-07-30T14:22:32+00:00",
      "abs_url": "https://doi.org/10.20944/preprints202604.0339.v1",
      "pdf_url": "",
      "comment": "MDPI AG | posted-content",
      "age_days": 122,
      "authors_joined": "Ruotong Wang, Nyutian Long, Shunqi Liu, Yuxi Wang, Zhen Qi, Huajun Zhang",
      "categories_joined": "",
      "summary_chars": 1687,
      "text_for_embedding": "Retrieval-Augmented Large Language Model Agents for Automated Scientific Literature Review Generation\n\nThis study investigates a method that integrates retrieval-augmented mechanisms into large language model agents for scientific literature review generation. The approach addresses the limitations of traditional review models that rely on parametric knowledge with insufficient timeliness and limited coverage. Incorporating external document retrieval and dynamic information fusion into the generation process enhances the accuracy and completeness of the output. The overall framework consists of query encoding, semantic retrieval, document filtering, knowledge fusion, language modeling, task planning, memory storage, and reinforcement optimization, forming a closed loop of retrieval, understanding, and generation. Relevant document fragments are first retrieved through semantic vector search to ensure comprehensive and reliable information sources. These external representations are then integrated with the internal embeddings of the language model through weighted fusion, which preserves fluency while maintaining factual grounding. The task planning module constrains logical flow and text structure, and reinforcement learning optimization further improves relevance and consistency. Comparative experiments on large-scale scientific literature datasets demonstrate that the method outperforms existing approaches on ROUGE, BLEU, METEOR, and diversity metrics, validating its effectiveness and practicality. The findings show that combining retrieval augmentation with agent architectures can significantly improve coverage, accuracy, and language quality in review generation, providing a feasible solution for knowledge organization in complex literature environments."
    },
    {
      "paper_id": "10.70121/001c.158711",
      "title": "The Role of Retrieval-Augmented Generation in Improving Factual Accuracy for Medical Large Language Models",
      "summary": "Large Language Models (LLMs) that rely solely on parametric memory learned through training have demonstrated strong performance in biomedical question-answering, but their tendency to hallucinate facts and the difficulty of adjusting and adding to the learned knowledge limit their usefulness in clinical settings. Retrieval-Augmented Generation (RAG) has emerged as a promising solution by adding a non-parametric source of memory and grounding LLM outputs to reputable external sources. This paper aims to survey the evolution of RAG methodologies and highlight the most recent developments and shifts in paradigms like Agentic RAG. We highlight current state-of-the-art biomedical RAG systems, the latest evaluation benchmarks, and empirical findings regarding best fine-tuning practices. We also examine technical including lost-in-the-middle effects and scaling behaviour. Ethical concerns surrounding privacy and bias are brought to attention alongside research gaps. Finally, we discuss future directions of RAG in the biomedical field, including integration into Clinical Decision Support systems (CDS).",
      "authors": "[\"Eason Ni\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-03-15",
      "updated": "2026-03-06T17:18:47+00:00",
      "abs_url": "https://doi.org/10.70121/001c.158711",
      "pdf_url": "https://www.scholarlyreview.org/article/158711-the-role-of-retrieval-augmented-generation-in-improving-factual-accuracy-for-medical-large-language-models.pdf",
      "comment": "Scholarly Review Journal | Leadership & Innovation Lab | journal-article",
      "age_days": 144,
      "authors_joined": "Eason Ni",
      "categories_joined": "",
      "summary_chars": 1112,
      "text_for_embedding": "The Role of Retrieval-Augmented Generation in Improving Factual Accuracy for Medical Large Language Models\n\nLarge Language Models (LLMs) that rely solely on parametric memory learned through training have demonstrated strong performance in biomedical question-answering, but their tendency to hallucinate facts and the difficulty of adjusting and adding to the learned knowledge limit their usefulness in clinical settings. Retrieval-Augmented Generation (RAG) has emerged as a promising solution by adding a non-parametric source of memory and grounding LLM outputs to reputable external sources. This paper aims to survey the evolution of RAG methodologies and highlight the most recent developments and shifts in paradigms like Agentic RAG. We highlight current state-of-the-art biomedical RAG systems, the latest evaluation benchmarks, and empirical findings regarding best fine-tuning practices. We also examine technical including lost-in-the-middle effects and scaling behaviour. Ethical concerns surrounding privacy and bias are brought to attention alongside research gaps. Finally, we discuss future directions of RAG in the biomedical field, including integration into Clinical Decision Support systems (CDS)."
    },
    {
      "paper_id": "10.36227/techrxiv.177272838.89432844/v1",
      "title": "A Survey of (Deep RAG) Deep Retrieval Augmented Generation and Reasoning in Large Language Models",
      "summary": "Retrieval-Augmented Generation (RAG) has emerged as a powerful paradigm for combining large language models with external knowledge sources to produce accurate, context-aware, and verifiable outputs. In this survey, we focus on an advanced instantiation of this paradigm, referred to as Deep RAG, which integrates reasoning, memory, and multi-step planning into end-to-end research workflows. We provide a structured overview of Deep RAG systems, covering key components such as query planning, information retrieval, memory management, and answer generation, as well as practical optimization techniques including supervised fine-tuning, iterative self-evolving, and agentic reinforcement learning. We analyze different planning strategies, adaptive retrieval mechanisms, conflict resolution methods, and multimodal synthesis, highlighting both their strengths and limitations. By categorizing approaches according to workflow types, reasoning strategies, and optimization paradigms, we clarify the current landscape and identify open challenges for evaluation, scalability, and multimodal reasoning. This survey aims to provide a comprehensive roadmap for designing flexible, reliable, and intelligent Deep RAG systems capable of performing complex, real-world research tasks with minimal human supervision.",
      "authors": "[\"Lihui Liu\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-03-05",
      "updated": "2026-06-12T17:00:30+00:00",
      "abs_url": "https://doi.org/10.36227/techrxiv.177272838.89432844/v1",
      "pdf_url": "",
      "comment": "Institute of Electrical and Electronics Engineers (IEEE) | posted-content",
      "age_days": 154,
      "authors_joined": "Lihui Liu",
      "categories_joined": "",
      "summary_chars": 1309,
      "text_for_embedding": "A Survey of (Deep RAG) Deep Retrieval Augmented Generation and Reasoning in Large Language Models\n\nRetrieval-Augmented Generation (RAG) has emerged as a powerful paradigm for combining large language models with external knowledge sources to produce accurate, context-aware, and verifiable outputs. In this survey, we focus on an advanced instantiation of this paradigm, referred to as Deep RAG, which integrates reasoning, memory, and multi-step planning into end-to-end research workflows. We provide a structured overview of Deep RAG systems, covering key components such as query planning, information retrieval, memory management, and answer generation, as well as practical optimization techniques including supervised fine-tuning, iterative self-evolving, and agentic reinforcement learning. We analyze different planning strategies, adaptive retrieval mechanisms, conflict resolution methods, and multimodal synthesis, highlighting both their strengths and limitations. By categorizing approaches according to workflow types, reasoning strategies, and optimization paradigms, we clarify the current landscape and identify open challenges for evaluation, scalability, and multimodal reasoning. This survey aims to provide a comprehensive roadmap for designing flexible, reliable, and intelligent Deep RAG systems capable of performing complex, real-world research tasks with minimal human supervision."
    },
    {
      "paper_id": "10.3390/app16052244",
      "title": "Hybrid Retrieval-Augmented Generation: Semantic and Structural Integration for Large Language Model Reasoning",
      "summary": "Recent GraphRAG methods based on knowledge graphs (KGs) primarily rely on either under-reasoning or a structural path-level retriever, which prevents them from jointly capturing fine-grained semantic relevance and explicit multi-hop reasoning paths. This separation often results in semantic mismatchâ€”where logical links are missingâ€”or structural over-constraint in reasoningâ€” where rigid dependencies limit flexible reasoningâ€”thereby degrading both answer accuracy and the reliability of evidence in complex KGQA tasks. To address these issues, we propose HybRAG, a hybrid retrieval framework that synergistically integrates a semantic node-level retriever and structural path-level retriever. HybRAG constructs a hybrid subgraph that jointly reflects the semantic proximity of entities and the relational structures encoded in the KG. Furthermore, we incorporate retrieval-augmented fine-tuning, which enables the model to internalize advanced reasoning strategies for interpreting disparate semantic and structural signals, rather than merely memorizing domain facts. Through extensive experiments on the WebQSP and CWQ benchmarks, we demonstrate that HybRAG effectively bridges the gap between LLM-centric semantic approaches and GNN-centric structural approaches, outperforming single-retriever baselines. Our findings, including detailed sensitivity and ablation analyses, provide empirical evidence that the systematic alignment of semantic and structural signals is essential for ensuring the reasoning reliability and scalability of next-generation GraphRAG systems.",
      "authors": "[\"Hyewon Lee\", \"Sungsu Lim\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-02-26",
      "updated": "2026-05-14T14:47:26+00:00",
      "abs_url": "https://doi.org/10.3390/app16052244",
      "pdf_url": "",
      "comment": "Applied Sciences | MDPI AG | journal-article",
      "age_days": 161,
      "authors_joined": "Hyewon Lee, Sungsu Lim",
      "categories_joined": "",
      "summary_chars": 1575,
      "text_for_embedding": "Hybrid Retrieval-Augmented Generation: Semantic and Structural Integration for Large Language Model Reasoning\n\nRecent GraphRAG methods based on knowledge graphs (KGs) primarily rely on either under-reasoning or a structural path-level retriever, which prevents them from jointly capturing fine-grained semantic relevance and explicit multi-hop reasoning paths. This separation often results in semantic mismatchâ€”where logical links are missingâ€”or structural over-constraint in reasoningâ€” where rigid dependencies limit flexible reasoningâ€”thereby degrading both answer accuracy and the reliability of evidence in complex KGQA tasks. To address these issues, we propose HybRAG, a hybrid retrieval framework that synergistically integrates a semantic node-level retriever and structural path-level retriever. HybRAG constructs a hybrid subgraph that jointly reflects the semantic proximity of entities and the relational structures encoded in the KG. Furthermore, we incorporate retrieval-augmented fine-tuning, which enables the model to internalize advanced reasoning strategies for interpreting disparate semantic and structural signals, rather than merely memorizing domain facts. Through extensive experiments on the WebQSP and CWQ benchmarks, we demonstrate that HybRAG effectively bridges the gap between LLM-centric semantic approaches and GNN-centric structural approaches, outperforming single-retriever baselines. Our findings, including detailed sensitivity and ablation analyses, provide empirical evidence that the systematic alignment of semantic and structural signals is essential for ensuring the reasoning reliability and scalability of next-generation GraphRAG systems."
    },
    {
      "paper_id": "10.35314/3y9hy151",
      "title": "Implementation of Retrieval-Augmented Generation Method on Large Language Model for Development of Campus Service and Information Chatbot",
      "summary": "Large language models have the potential to improve the quality of information services in higher education environments through responsive and natural interactions. However, LLMs are prone to generating answers that are not supported by valid knowledge sources due to knowledge cut-off limitations. This study implements Retrieval-Augmented Generation on LLMs to build an information service chatbot for the Indonesian University of Science and Technology (USTI). RAG is built using a hybrid retrieval mechanism that combines dense retrieval and sparse retrieval (BM25) through reciprocal rank fusion and is equipped with cross-encoder reranking. The knowledge base is compiled from official and public documents obtained through the USTI website. The evaluation was conducted using 13 test queries by comparing several configurations to analyze the contribution of each component. The evaluation results show that the hybrid retrieval configuration produces the best retrieval performance with Precision@3 of 71.7%, Recall@3 of 87.5%, and NDCG@3 of 96.3%. In addition, the application of RAG improved the quality of answers compared to LLM without retrieval, as shown by an increase in BERTScore-F1 from 84.8% to 89.4% and a faithfulness score of 88.8%. These findings indicate that RAG integration improves the relevance of LLM answers to source documents, with the hybrid configuration providing an optimal balance between retrieval quality and faithfulness.",
      "authors": "[\"Muhammad Dzaki Salman\", \"Rahmaddeni\", \"Torkis Nasution\", \"Susanti\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-02-26",
      "updated": "2026-02-26T15:27:57+00:00",
      "abs_url": "https://doi.org/10.35314/3y9hy151",
      "pdf_url": "https://jurnal.polbeng.ac.id/index.php/ISI/article/download/1484/655",
      "comment": "INOVTEK Polbeng - Seri Informatika | Politeknik Negeri Bengkalis | journal-article",
      "age_days": 161,
      "authors_joined": "Muhammad Dzaki Salman, Rahmaddeni, Torkis Nasution, Susanti",
      "categories_joined": "",
      "summary_chars": 1462,
      "text_for_embedding": "Implementation of Retrieval-Augmented Generation Method on Large Language Model for Development of Campus Service and Information Chatbot\n\nLarge language models have the potential to improve the quality of information services in higher education environments through responsive and natural interactions. However, LLMs are prone to generating answers that are not supported by valid knowledge sources due to knowledge cut-off limitations. This study implements Retrieval-Augmented Generation on LLMs to build an information service chatbot for the Indonesian University of Science and Technology (USTI). RAG is built using a hybrid retrieval mechanism that combines dense retrieval and sparse retrieval (BM25) through reciprocal rank fusion and is equipped with cross-encoder reranking. The knowledge base is compiled from official and public documents obtained through the USTI website. The evaluation was conducted using 13 test queries by comparing several configurations to analyze the contribution of each component. The evaluation results show that the hybrid retrieval configuration produces the best retrieval performance with Precision@3 of 71.7%, Recall@3 of 87.5%, and NDCG@3 of 96.3%. In addition, the application of RAG improved the quality of answers compared to LLM without retrieval, as shown by an increase in BERTScore-F1 from 84.8% to 89.4% and a faithfulness score of 88.8%. These findings indicate that RAG integration improves the relevance of LLM answers to source documents, with the hybrid configuration providing an optimal balance between retrieval quality and faithfulness."
    },
    {
      "paper_id": "10.20944/preprints202602.0996.v1",
      "title": "Clinical Large Language Models with Multi-Stage Instruction Tuning and Advanced Retrieval-Augmented Generation",
      "summary": "The demand for efficient and accurate Clinical Decision Support Systems (CDSS) is growing rapidly, driven by the escalating volume of medical data. While Large Language Models (LLMs) offer significant potential, their direct application in healthcare is limited by issues like hallucinations and lack of domain-specific knowledge. Retrieval-Augmented Generation (RAG) addresses these challenges by grounding LLMs with external knowledge, and recent lightweight RAG-based CDSS have shown promise. Building on this, we propose Enhanced Clinical RAG-LLM (ECRAG-LLM), a novel system designed to elevate performance in complex clinical scenarios. ECRAG-LLM utilizes a robust yet lightweight Mistral-based LLM, integrated with a multi-stage instruction tuning strategy that first adapts to general medical knowledge and then reinforces context-aware and causal reasoning using a custom dataset of structured clinical cases. We employ BioSimCSE for domain-specific embeddings and introduce an enhanced RAG architecture featuring hybrid retrieval, cross-encoder-based contextual re-ranking, and context summarization to optimize retrieved information. Extensive experiments on medical benchmarks demonstrate that ECRAG-LLM consistently outperforms baseline lightweight fine-tuned LLMs, achieving significant improvements in diagnostic accuracy, treatment appropriateness, and explanatory quality, particularly in tasks requiring deep clinical reasoning. An ablation study confirms the synergistic contributions of our innovations, and an error analysis highlights a substantial reduction in critical errors, positioning ECRAG-LLM as a more reliable and intelligent solution for resource-constrained clinical environments.",
      "authors": "[\"Donald Martin\", \"Blake Bowman\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-02-12",
      "updated": "2026-02-13T03:03:17+00:00",
      "abs_url": "https://doi.org/10.20944/preprints202602.0996.v1",
      "pdf_url": "",
      "comment": "MDPI AG | posted-content",
      "age_days": 175,
      "authors_joined": "Donald Martin, Blake Bowman",
      "categories_joined": "",
      "summary_chars": 1713,
      "text_for_embedding": "Clinical Large Language Models with Multi-Stage Instruction Tuning and Advanced Retrieval-Augmented Generation\n\nThe demand for efficient and accurate Clinical Decision Support Systems (CDSS) is growing rapidly, driven by the escalating volume of medical data. While Large Language Models (LLMs) offer significant potential, their direct application in healthcare is limited by issues like hallucinations and lack of domain-specific knowledge. Retrieval-Augmented Generation (RAG) addresses these challenges by grounding LLMs with external knowledge, and recent lightweight RAG-based CDSS have shown promise. Building on this, we propose Enhanced Clinical RAG-LLM (ECRAG-LLM), a novel system designed to elevate performance in complex clinical scenarios. ECRAG-LLM utilizes a robust yet lightweight Mistral-based LLM, integrated with a multi-stage instruction tuning strategy that first adapts to general medical knowledge and then reinforces context-aware and causal reasoning using a custom dataset of structured clinical cases. We employ BioSimCSE for domain-specific embeddings and introduce an enhanced RAG architecture featuring hybrid retrieval, cross-encoder-based contextual re-ranking, and context summarization to optimize retrieved information. Extensive experiments on medical benchmarks demonstrate that ECRAG-LLM consistently outperforms baseline lightweight fine-tuned LLMs, achieving significant improvements in diagnostic accuracy, treatment appropriateness, and explanatory quality, particularly in tasks requiring deep clinical reasoning. An ablation study confirms the synergistic contributions of our innovations, and an error analysis highlights a substantial reduction in critical errors, positioning ECRAG-LLM as a more reliable and intelligent solution for resource-constrained clinical environments."
    }
  ],
  "data/clean/papers_clean_corrupted.json": [
    {
      "paper_id": "10.1007/s10278-026-02086-9",
      "title": "JADE-Plus: A Multimodal Agentic Retrieval-Augmented Generation Large Language Framework for Diagnostic Support in Jawbone Lesions: Development and Technical Validation Study",
      "summary": "",
      "authors": "[\"Soroush Baseri Saadi\", \"Jonas Ver Berne\", \"Rocharles Cavalcante Fontenele\", \"Peter Claes\", \"Reinhilde Jacobs\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-07-13",
      "updated": "2026-07-13T15:09:05+00:00",
      "abs_url": "https://doi.org/10.1007/s10278-026-02086-9",
      "pdf_url": "https://link.springer.com/content/pdf/10.1007/s10278-026-02086-9.pdf",
      "comment": "Journal of Imaging Informatics in Medicine | Springer Science and Business Media LLC | journal-article",
      "age_days": 24,
      "authors_joined": "Soroush Baseri Saadi, Jonas Ver Berne, Rocharles Cavalcante Fontenele, Peter Claes, Reinhilde Jacobs",
      "categories_joined": "",
      "summary_chars": 0,
      "text_for_embedding": "JADE-Plus: A Multimodal Agentic Retrieval-Augmented Generation Large Language Framework for Diagnostic Support in Jawbone Lesions: Development and Technical Validation Study\n\n"
    },
    {
      "paper_id": "10.21203/rs.3.rs-10178277/v1",
      "title": "Retrieval-Augmented Large-Language-Model-Based Time",
      "summary": "Abstract Time-series foundation models and retrieval-based augmentation have recently emerged as relevant tools for financial forecasting, yet it remains unclear when explicit historical retrieval helps a pre-trained probabilistic forecaster in noisy equity settings. This study evaluates that question through Cross-Market Retrieval-Augmented Lag-Llama (CM-RAF-Lag-Llama), a controlled framework for comparing Lag-Llama-only forecasts with retrieval-augmented forecasts across emerging and developed market panels. The main validation uses three balanced seven-asset panels, IDX7, US7, and JP7, producing a 48-configuration panel-context-horizon grid across four context lengths and four prediction horizons. The hybrid system retrieves analogous historical windows from an indexed memory and blends the retrieved continuation with the Lag-Llama forecast while preserving the same forecasting backbone. In the same-backbone return validation, at least one retrieval variant reduces Lag-Llama MSE in all 48 configurations, with aggregate lower-error retrieval MSE reductions of 28.85\\% for IDX7, 27.27\\% for US7, and 33.60\\% for JP7. A second OHLCV-derived stock-feature experiment evaluates log-price, log-volume, range-volatility, and 20-day realized-volatility targets across 72 matched configurations. In that experiment, validation-selected RAF reduces MSE relative to Lag-Llama-only in 68 of 72 configurations and records the lowest MSE among the compared systems in 22 configurations, including 17 of 18 non-log-price US7 settings. A mechanism-level single-series ablation further compares Lag-Llama-only against Lag-Llama + RAF under zero-shot and scheduler-based inference, showing that retrieval effects are horizon-sensitive. The results indicate that retrieval can serve as an external-memory correction for Lag-Llama under selected equity targets, especially when volatility or volume structure provides reusable historical analogs.",
      "authors": "[\"Novanto Yudistira\", \"Yanuar Putra Kharisma Adhiyasa\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-07-10",
      "updated": "2026-07-10T18:20:32+00:00",
      "abs_url": "https://doi.org/10.21203/rs.3.rs-10178277/v1",
      "pdf_url": "",
      "comment": "Springer Science and Business Media LLC | posted-content",
      "age_days": 27,
      "authors_joined": "Novanto Yudistira, Yanuar Putra Kharisma Adhiyasa",
      "categories_joined": "",
      "summary_chars": 1945,
      "text_for_embedding": "Retrieval-Augmented Large-Language-Model-Based Time\n\nAbstract Time-series foundation models and retrieval-based augmentation have recently emerged as relevant tools for financial forecasting, yet it remains unclear when explicit historical retrieval helps a pre-trained probabilistic forecaster in noisy equity settings. This study evaluates that question through Cross-Market Retrieval-Augmented Lag-Llama (CM-RAF-Lag-Llama), a controlled framework for comparing Lag-Llama-only forecasts with retrieval-augmented forecasts across emerging and developed market panels. The main validation uses three balanced seven-asset panels, IDX7, US7, and JP7, producing a 48-configuration panel-context-horizon grid across four context lengths and four prediction horizons. The hybrid system retrieves analogous historical windows from an indexed memory and blends the retrieved continuation with the Lag-Llama forecast while preserving the same forecasting backbone. In the same-backbone return validation, at least one retrieval variant reduces Lag-Llama MSE in all 48 configurations, with aggregate lower-error retrieval MSE reductions of 28.85\\% for IDX7, 27.27\\% for US7, and 33.60\\% for JP7. A second OHLCV-derived stock-feature experiment evaluates log-price, log-volume, range-volatility, and 20-day realized-volatility targets across 72 matched configurations. In that experiment, validation-selected RAF reduces MSE relative to Lag-Llama-only in 68 of 72 configurations and records the lowest MSE among the compared systems in 22 configurations, including 17 of 18 non-log-price US7 settings. A mechanism-level single-series ablation further compares Lag-Llama-only against Lag-Llama + RAF under zero-shot and scheduler-based inference, showing that retrieval effects are horizon-sensitive. The results indicate that retrieval can serve as an external-memory correction for Lag-Llama under selected equity targets, especially when volatility or volume structure provides reusable historical analogs."
    },
    {
      "paper_id": "10.2196/preprints.106157",
      "title": "Does retrieval-augmented generation impact medical studentsâ€™ perceptions of large language models? (Preprint)",
      "summary": "BACKGROUND There is evidence of rapid adoption of large language models (LLMs) in undergraduate medical education, with medical students using it to support their learning. This raises concerns particularly around the accuracy of LLM-generated information students are learning. Retrieval-augmented generation (RAG), which grounds a LLM in curated materials, may be a strategy to improve their accuracy. OBJECTIVE This study investigates if grounding LLM outputs in verifiable sources using RAG impacts trust and perceived usability amongst medical students. METHODS In a four-month qualitative study, second-year medical students at Bristol Medical School used a RAG-enabled LLM (NotebookLM) to help them learn course content. Following this, their perspectives were explored using a focus group and survey was. Qualitative data was analysed using thematic analysis and was supplemented by Likert scale data. RESULTS RAG-based LLMs were perceived as more reliable than standard LLM responses mainly due to the transparency of and control over information sources. The system functioned as an accessible, on-demand learning resource, improving efficiency and supporting self-directed study. Students continued to use strategies to cross check generated information. They demonstrated some awareness of ethical concerns, mostly around the environmental impact of LLMs and data privacy. CONCLUSIONS These findings suggest that RAG may enhance studentsâ€™ trust in LLM outputs while maintaining their benefit as a flexible â€˜study partnerâ€™. It highlights RAG as a strategy that educators can use to support students who use LLMs in the context of increasing. However, the impact of RAG-based LLMs over a longer period and on learning outcomes requires further evaluation.",
      "authors": "[\"Rohin Athavale\", \"Alexander Cresswell\", \"Alice Huffman\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2025-07-03",
      "updated": "2026-07-06T04:15:50+00:00",
      "abs_url": "https://doi.org/10.2196/preprints.106157",
      "pdf_url": "",
      "comment": "JMIR Publications Inc. | posted-content",
      "age_days": 399,
      "authors_joined": "Rohin Athavale, Alexander Cresswell, Alice Huffman",
      "categories_joined": "",
      "summary_chars": 1765,
      "text_for_embedding": "Does retrieval-augmented generation impact medical studentsâ€™ perceptions of large language models? (Preprint)\n\nBACKGROUND There is evidence of rapid adoption of large language models (LLMs) in undergraduate medical education, with medical students using it to support their learning. This raises concerns particularly around the accuracy of LLM-generated information students are learning. Retrieval-augmented generation (RAG), which grounds a LLM in curated materials, may be a strategy to improve their accuracy. OBJECTIVE This study investigates if grounding LLM outputs in verifiable sources using RAG impacts trust and perceived usability amongst medical students. METHODS In a four-month qualitative study, second-year medical students at Bristol Medical School used a RAG-enabled LLM (NotebookLM) to help them learn course content. Following this, their perspectives were explored using a focus group and survey was. Qualitative data was analysed using thematic analysis and was supplemented by Likert scale data. RESULTS RAG-based LLMs were perceived as more reliable than standard LLM responses mainly due to the transparency of and control over information sources. The system functioned as an accessible, on-demand learning resource, improving efficiency and supporting self-directed study. Students continued to use strategies to cross check generated information. They demonstrated some awareness of ethical concerns, mostly around the environmental impact of LLMs and data privacy. CONCLUSIONS These findings suggest that RAG may enhance studentsâ€™ trust in LLM outputs while maintaining their benefit as a flexible â€˜study partnerâ€™. It highlights RAG as a strategy that educators can use to support students who use LLMs in the context of increasing. However, the impact of RAG-based LLMs over a longer period and on learning outcomes requires further evaluation."
    },
    {
      "paper_id": "10.3390/buildings16132637",
      "title": "An Agentic AI System for Roof Design Compliance Using Computer Vision, Retrieval-Augmented Generation and Large Language Models",
      "summary": "Designers, engineers, and building officials face increasing pressure to accelerate and improve the accuracy of design review for buildings and infrastructure. Roof assemblies and rooftop structures are particularly challenging due to the complexity and fragmentation of regulatory requirements, especially in jurisdictions such as Florida, where compliance must be verified across both the residential and commercial volumes of the Florida Building Code (FBC). The resulting review process is technically demanding and time-intensive, imposing significant cognitive and operational burdens on practitioners and under-resourced public agencies. To address these challenges, this study proposes and evaluates an agentic artificial intelligence (AI) framework for automated code compliance checking of roof assemblies and rooftop structures. The framework employs a multi-agent architecture in which specialized AI agents collaboratively interpret regulatory provisions and evaluate roof design parameters across four core modules: data preprocessing and code ingestion, rule-based and semantic analysis, results visualization, and iterative validation. YOLO11m-seg and Mask R-CNN were used for element detection and segmentation, and the system was developed using 150 design projects, including roof plans, section details, and specifications. Four large language models from two families (Mistral and GPT) were comparatively evaluated on standardized compliance tasks. The framework was then tested on a held-out portfolio of 15 distinct roof-design projects comprising 60 code-compliance decisions derived from the FBC 2023, with performance measured by precision, recall, F1-score, and accuracy. GPT-5.4 achieved the highest overall performance (F1 = 0.97; accuracy = 97%). Because the reasoning and vision components were evaluated separately rather than as an integrated end-to-end pipeline, and the scope was limited to one jurisdiction and two drawing types, broader code coverage and production-setting validation are needed before claims of generality. Nonetheless, the results suggest that agentic AI can meaningfully support compliance review and reduce reviewer burden in roof-design permitting. irrelevant-noise-token",
      "authors": "[\"Nawari O. Nawari\", \"Oluwatoyin O. Lawal\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-07-02",
      "updated": "2026-07-02T11:43:51+00:00",
      "abs_url": "https://doi.org/10.3390/buildings16132637",
      "pdf_url": "",
      "comment": "Buildings | MDPI AG | journal-article",
      "age_days": 35,
      "authors_joined": "Nawari O. Nawari, Oluwatoyin O. Lawal",
      "categories_joined": "",
      "summary_chars": 2230,
      "text_for_embedding": "An Agentic AI System for Roof Design Compliance Using Computer Vision, Retrieval-Augmented Generation and Large Language Models\n\nDesigners, engineers, and building officials face increasing pressure to accelerate and improve the accuracy of design review for buildings and infrastructure. Roof assemblies and rooftop structures are particularly challenging due to the complexity and fragmentation of regulatory requirements, especially in jurisdictions such as Florida, where compliance must be verified across both the residential and commercial volumes of the Florida Building Code (FBC). The resulting review process is technically demanding and time-intensive, imposing significant cognitive and operational burdens on practitioners and under-resourced public agencies. To address these challenges, this study proposes and evaluates an agentic artificial intelligence (AI) framework for automated code compliance checking of roof assemblies and rooftop structures. The framework employs a multi-agent architecture in which specialized AI agents collaboratively interpret regulatory provisions and evaluate roof design parameters across four core modules: data preprocessing and code ingestion, rule-based and semantic analysis, results visualization, and iterative validation. YOLO11m-seg and Mask R-CNN were used for element detection and segmentation, and the system was developed using 150 design projects, including roof plans, section details, and specifications. Four large language models from two families (Mistral and GPT) were comparatively evaluated on standardized compliance tasks. The framework was then tested on a held-out portfolio of 15 distinct roof-design projects comprising 60 code-compliance decisions derived from the FBC 2023, with performance measured by precision, recall, F1-score, and accuracy. GPT-5.4 achieved the highest overall performance (F1 = 0.97; accuracy = 97%). Because the reasoning and vision components were evaluated separately rather than as an integrated end-to-end pipeline, and the scope was limited to one jurisdiction and two drawing types, broader code coverage and production-setting validation are needed before claims of generality. Nonetheless, the results suggest that agentic AI can meaningfully support compliance review and reduce reviewer burden in roof-design permitting. irrelevant-noise-token"
    },
    {
      "paper_id": "10.21079/11681/50309",
      "title": "Microsoft Azure artificial intelligence / machine learning hackathon for development of retrieval-augmented generation large language model",
      "summary": "The US Army Corps of Engineers (USACE) Civil Works (CW) research and development (R&D) mission is to address challenging environmental sustainability problems through innovative science and engineering, which helps to ensure a safer, more prosperous, and more resilient nation. To achieve this, the US Army Engineer Research and Development Center (ERDC) plans, executes, leads, and directs many R&D programs in coordination with USACE Headquarters, Districts, and Divisions through its multiple strategic focus areas, which include infrastructure, water modeling, crisis preparedness, ecosystem, sediment management, data, artificial intelligence, and robotics. In this process, much information is generated, including internal progress reviews, financial reports, scopes of work, work package planning, and success stories.",
      "authors": "[\"Janet L. Autrey\", \"Lacey S. Duckworth\", \"Ashly N. Horner\", \"Thomas Sigler\", \"Victoria D. Moore\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-07-01",
      "updated": "2026-07-10T15:16:13+00:00",
      "abs_url": "https://doi.org/10.21079/11681/50309",
      "pdf_url": "",
      "comment": "U.S. Army Engineer Research and Development Center | report",
      "age_days": 36,
      "authors_joined": "Janet L. Autrey, Lacey S. Duckworth, Ashly N. Horner, Thomas Sigler, Victoria D. Moore",
      "categories_joined": "",
      "summary_chars": 826,
      "text_for_embedding": "Microsoft Azure artificial intelligence / machine learning hackathon for development of retrieval-augmented generation large language model\n\nThe US Army Corps of Engineers (USACE) Civil Works (CW) research and development (R&D) mission is to address challenging environmental sustainability problems through innovative science and engineering, which helps to ensure a safer, more prosperous, and more resilient nation. To achieve this, the US Army Engineer Research and Development Center (ERDC) plans, executes, leads, and directs many R&D programs in coordination with USACE Headquarters, Districts, and Divisions through its multiple strategic focus areas, which include infrastructure, water modeling, crisis preparedness, ecosystem, sediment management, data, artificial intelligence, and robotics. In this process, much information is generated, including internal progress reviews, financial reports, scopes of work, work package planning, and success stories."
    },
    {
      "paper_id": "10.1111/exsy.70341",
      "title": "Hiâ€ RAG : A Hierarchical Retrievalâ€Augmented Generation Framework for Scalable and Generalisable Tool Selection in Large Language Model Agents",
      "summary": "ABSTRACT As tool repositories for Large Language Model (LLM) agents grow from dozens to hundreds of endpoints, flat retrieval paradigms that treat the repository as an unstructured list suffer from context overload, crossâ€domain semantic collision and degraded selection accuracy. We propose Hiâ€RAG, a Hierarchical Retrievalâ€Augmented Generation framework that exploits the Type Service Tool structure of the Model Context Protocol (MCP) via a principled coarseâ€toâ€fine pipeline. Stage 1 applies a Toolâ€asâ€Proxy hybrid retrieval strategy (BM25 sparse retrieval combined with dense biâ€encoder search, fused via Weighted Reciprocal Rank Fusion) to identify candidate services efficiently. Stage 2 performs typeâ€aware reâ€ranking over a local heterogeneous graph, integrating a domainâ€level gating mechanism with contextualised tool attention for precise service scoring. We further introduce MCPBench , the first benchmark for hierarchical tool selection, comprising 201 tools across 40 realâ€enterprise servicesâ€”23% of queries require multiâ€service reasoning. Experiments across five LLMs show Hiâ€RAG improves Topâ€1 accuracy by up to 7.5% (singleâ€service) and 10.0% (multiâ€service) over Flatâ€RAG, while reducing token consumption by up to 89% against fullâ€context injection. Comparisons with a strong lateâ€interaction baseline (ColBERTâ€RAG) further confirm the superiority of Hiâ€RAG. Zeroâ€shot evaluation on ToolLLM (16,464 tools) confirms scalability, and formal analyses establish context growth with respect to repository size.",
      "authors": "[\"Wei Tian\", \"Yuhao Zhou\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-06-30",
      "updated": "2026-07-16T10:07:33+00:00",
      "abs_url": "https://doi.org/10.1111/exsy.70341",
      "pdf_url": "https://onlinelibrary.wiley.com/doi/pdf/10.1111/exsy.70341",
      "comment": "Expert Systems | Wiley | journal-article",
      "age_days": 37,
      "authors_joined": "Wei Tian, Yuhao Zhou",
      "categories_joined": "",
      "summary_chars": 1527,
      "text_for_embedding": "Hiâ€ RAG : A Hierarchical Retrievalâ€Augmented Generation Framework for Scalable and Generalisable Tool Selection in Large Language Model Agents\n\nABSTRACT As tool repositories for Large Language Model (LLM) agents grow from dozens to hundreds of endpoints, flat retrieval paradigms that treat the repository as an unstructured list suffer from context overload, crossâ€domain semantic collision and degraded selection accuracy. We propose Hiâ€RAG, a Hierarchical Retrievalâ€Augmented Generation framework that exploits the Type Service Tool structure of the Model Context Protocol (MCP) via a principled coarseâ€toâ€fine pipeline. Stage 1 applies a Toolâ€asâ€Proxy hybrid retrieval strategy (BM25 sparse retrieval combined with dense biâ€encoder search, fused via Weighted Reciprocal Rank Fusion) to identify candidate services efficiently. Stage 2 performs typeâ€aware reâ€ranking over a local heterogeneous graph, integrating a domainâ€level gating mechanism with contextualised tool attention for precise service scoring. We further introduce MCPBench , the first benchmark for hierarchical tool selection, comprising 201 tools across 40 realâ€enterprise servicesâ€”23% of queries require multiâ€service reasoning. Experiments across five LLMs show Hiâ€RAG improves Topâ€1 accuracy by up to 7.5% (singleâ€service) and 10.0% (multiâ€service) over Flatâ€RAG, while reducing token consumption by up to 89% against fullâ€context injection. Comparisons with a strong lateâ€interaction baseline (ColBERTâ€RAG) further confirm the superiority of Hiâ€RAG. Zeroâ€shot evaluation on ToolLLM (16,464 tools) confirms scalability, and formal analyses establish context growth with respect to repository size."
    },
    {
      "paper_id": "10.63646/kpqm1958",
      "title": "The Age of Autonomous Agents: A Bibliometric Review of Agentic AI Architectures, Applications, and Emerging Challenges",
      "summary": "The rapid evolution of large language models (LLMs) has catalyzed a shift from passive AI systems toward autonomous agentic architectures capable of reasoning, memory, tool use, and multi-agent collaboration. This bibliometric review characterizes the emerging field through 810 publications retrieved from the Web of Science Core Collection for the period 2023â€“2025. Annual output rose sharply over this windowâ€”from 4 publications in 2023 to 96 in 2024 and 710 in 2025â€”accompanied by a parallel rise in citations, indicating rapid mainstream adoption. Author-keyword analysis reveals a landscape dominated by large language models, artificial intelligence, and multi-agent systems, with agentic AI, generative AI, and retrieval-augmented generation (RAG) emerging as core themes. Research output is geographically concentrated, led by China and the United States, and is distributed across a broad range of engineering, applied-science, and domain-specific journals rather than a single specialist venue, reflecting the field's cross-disciplinary uptake. Synthesizing this corpus, we organize the technical landscape around reasoning, memory, tool integration and RAG, and multi-agent orchestration; survey application domains spanning healthcare, scientific discovery, education, and software engineering, with emerging activity in finance and law; and analyze the principal challengesâ€”hallucination, trust and robustness, inter-agent coordination, scalability, and governance. The review provides a structured, evidence-based map of agentic AI research to orient researchers and practitioners navigating this rapidly evolving field.",
      "authors": "[\"Ben J. Weber\", \"Clara M. Hofmann\", \"Amara N. Okoye\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-06-30",
      "updated": "2026-07-17T02:04:13+00:00",
      "abs_url": "https://doi.org/10.63646/kpqm1958",
      "pdf_url": "https://inatgi.net/index.php/jaiaa/article/download/806/945",
      "comment": "Journal of AI Analytics and Applications | Institute of Advanced Technology and Green Innovation LLC | journal-article",
      "age_days": 37,
      "authors_joined": "Ben J. Weber, Clara M. Hofmann, Amara N. Okoye",
      "categories_joined": "",
      "summary_chars": 1635,
      "text_for_embedding": "The Age of Autonomous Agents: A Bibliometric Review of Agentic AI Architectures, Applications, and Emerging Challenges\n\nThe rapid evolution of large language models (LLMs) has catalyzed a shift from passive AI systems toward autonomous agentic architectures capable of reasoning, memory, tool use, and multi-agent collaboration. This bibliometric review characterizes the emerging field through 810 publications retrieved from the Web of Science Core Collection for the period 2023â€“2025. Annual output rose sharply over this windowâ€”from 4 publications in 2023 to 96 in 2024 and 710 in 2025â€”accompanied by a parallel rise in citations, indicating rapid mainstream adoption. Author-keyword analysis reveals a landscape dominated by large language models, artificial intelligence, and multi-agent systems, with agentic AI, generative AI, and retrieval-augmented generation (RAG) emerging as core themes. Research output is geographically concentrated, led by China and the United States, and is distributed across a broad range of engineering, applied-science, and domain-specific journals rather than a single specialist venue, reflecting the field's cross-disciplinary uptake. Synthesizing this corpus, we organize the technical landscape around reasoning, memory, tool integration and RAG, and multi-agent orchestration; survey application domains spanning healthcare, scientific discovery, education, and software engineering, with emerging activity in finance and law; and analyze the principal challengesâ€”hallucination, trust and robustness, inter-agent coordination, scalability, and governance. The review provides a structured, evidence-based map of agentic AI research to orient researchers and practitioners navigating this rapidly evolving field."
    },
    {
      "paper_id": "10.21203/rs.3.rs-10012178/v1",
      "title": "Retrieval-Augmented Generation (RAG), Generative AI, and Agentic AI Governance: An Integrated Enterprise Governance Prioritization Architecture",
      "summary": "Abstract Enterprise adoption of artificial intelligence (AI) systems, including Generative AI (GenAI), Retrieval-Augmented Generation (RAG), and agentic AI, is advancing faster than many organizations can adapt their governance, audit, cybersecurity, and executive oversight practices. This paper develops a proposed integrated AI governance prioritization architecture using a design-science research approach, supported by exploratory platform-risk analysis, a reproducible platform-risk dataset, a Monte Carlo robustness assessment, a framework coverage matrix, a Governance Priority Score (GPS)-based demonstration, and a public-document relevance assessment. The primary contribution is an integrated governance decision-support architecture that uses the Enterprise AI Platform Taxonomy (EAPT) to estimate platform burden, the Enterprise AI Risk Taxonomy (EART) to organize governance-risk exposure, the Enterprise AI Governance Maturity Model (EAGM) to represent organizational readiness, and the Integrated Agentic AI Governance Framework (IAGF) to identify agentic AI oversight requirements within a unified workflow. These components are operationally connected through GPS, which links platform burden, governancerisk gaps, organizational readiness, agentic runtime-control needs, and executive decision support. The proposed architecture draws upon NIST AI RMF, NIST AI 600-1, ISO/IEC 42001, COBIT, OWASP LLM Top 10, MITRE ATLAS, the EU AI Act, and related AI governance literature. A rubric-based analytical dataset covering 19 enterprise AI platforms evaluates each platform across eight subdimensions, with final platform-risk scores computed as the arithmetic mean of data access scope, operational autonomy, tool/API integration breadth, external connectivity, governance burden, cybersecurity exposure, adoption and shadow-AI risk, and supply-chain integrity. TThe expanded scoring method produces high rank stability relative to the original final-score dataset, with Spearmanâ€™s Ï = 0.996, and remains directionally stable under coding-uncertainty stress testing; these results are interpreted only as internal coding stability and robustness, not external validation. Public evidence from U.S. government agencies, universities, healthcare systems, and financial institutions is used to assess architecture relevance and observability, not to claim organizational effectiveness. The paper contributes a bounded design-science foundation for future inter-rater reliability testing, Delphi expert validation, organizational pilots, psychometric evaluation, and dashboard usability assessment.",
      "authors": "[\"Audrey Rah\", \"Sven Hahues\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-06-15",
      "updated": "2026-06-15T06:52:56+00:00",
      "abs_url": "https://doi.org/10.21203/rs.3.rs-10012178/v1",
      "pdf_url": "",
      "comment": "Springer Science and Business Media LLC | posted-content",
      "age_days": 52,
      "authors_joined": "Audrey Rah, Sven Hahues",
      "categories_joined": "",
      "summary_chars": 2610,
      "text_for_embedding": "Retrieval-Augmented Generation (RAG), Generative AI, and Agentic AI Governance: An Integrated Enterprise Governance Prioritization Architecture\n\nAbstract Enterprise adoption of artificial intelligence (AI) systems, including Generative AI (GenAI), Retrieval-Augmented Generation (RAG), and agentic AI, is advancing faster than many organizations can adapt their governance, audit, cybersecurity, and executive oversight practices. This paper develops a proposed integrated AI governance prioritization architecture using a design-science research approach, supported by exploratory platform-risk analysis, a reproducible platform-risk dataset, a Monte Carlo robustness assessment, a framework coverage matrix, a Governance Priority Score (GPS)-based demonstration, and a public-document relevance assessment. The primary contribution is an integrated governance decision-support architecture that uses the Enterprise AI Platform Taxonomy (EAPT) to estimate platform burden, the Enterprise AI Risk Taxonomy (EART) to organize governance-risk exposure, the Enterprise AI Governance Maturity Model (EAGM) to represent organizational readiness, and the Integrated Agentic AI Governance Framework (IAGF) to identify agentic AI oversight requirements within a unified workflow. These components are operationally connected through GPS, which links platform burden, governancerisk gaps, organizational readiness, agentic runtime-control needs, and executive decision support. The proposed architecture draws upon NIST AI RMF, NIST AI 600-1, ISO/IEC 42001, COBIT, OWASP LLM Top 10, MITRE ATLAS, the EU AI Act, and related AI governance literature. A rubric-based analytical dataset covering 19 enterprise AI platforms evaluates each platform across eight subdimensions, with final platform-risk scores computed as the arithmetic mean of data access scope, operational autonomy, tool/API integration breadth, external connectivity, governance burden, cybersecurity exposure, adoption and shadow-AI risk, and supply-chain integrity. TThe expanded scoring method produces high rank stability relative to the original final-score dataset, with Spearmanâ€™s Ï = 0.996, and remains directionally stable under coding-uncertainty stress testing; these results are interpreted only as internal coding stability and robustness, not external validation. Public evidence from U.S. government agencies, universities, healthcare systems, and financial institutions is used to assess architecture relevance and observability, not to claim organizational effectiveness. The paper contributes a bounded design-science foundation for future inter-rater reliability testing, Delphi expert validation, organizational pilots, psychometric evaluation, and dashboard usability assessment."
    },
    {
      "paper_id": "10.47576/2949-1894.2026.7.7.023",
      "title": "Ð¡Ð½Ð¸Ð¶ÐµÐ½Ð¸Ðµ Ñ€Ð¸ÑÐºÐ¾Ð² Ð¿Ñ€Ð¸Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ LLM (Large Language Model) Ð² ÑÑ„ÐµÑ€Ðµ ÑÐºÐ¾Ð½Ð¾Ð¼Ð¸Ñ‡ÐµÑÐºÐ¾Ð¹ Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ÑÑ‚Ð¸ Ð¿Ñ€ÐµÐ´Ð¿Ñ€Ð¸ÑÑ‚Ð¸Ð¹ Ð¼Ð¾Ð»Ð¾Ñ‡Ð½Ð¾Ð¹ Ð¿Ñ€Ð¾Ð¼Ñ‹ÑˆÐ»ÐµÐ½Ð½Ð¾ÑÑ‚Ð¸ Ð½Ð° Ð¾ÑÐ½Ð¾Ð²Ðµ Ð¿Ð¾Ð´Ñ…Ð¾Ð´Ð° RAG (Retrieval-Augmented Generation)",
      "summary": "Ð’ ÑÑ‚Ð°Ñ‚ÑŒÐµ Ð¿Ñ€Ð¾Ð²ÐµÐ´ÐµÐ½Ð¾ Ð¸ÑÑÐ»ÐµÐ´Ð¾Ð²Ð°Ð½Ð¸Ðµ Ð¾ÑÐ¾Ð±ÐµÐ½Ð½Ð¾ÑÑ‚ÐµÐ¹ ÑÐ½Ð¸Ð¶ÐµÐ½Ð¸Ñ Ñ€Ð¸ÑÐºÐ¾Ð² Ð¿Ñ€Ð¸Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ LLM (Large Language Model) Ð² ÑÑ„ÐµÑ€Ðµ ÑÐºÐ¾Ð½Ð¾Ð¼Ð¸Ñ‡ÐµÑÐºÐ¾Ð¹ Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ÑÑ‚Ð¸ Ð¿Ñ€ÐµÐ´Ð¿Ñ€Ð¸ÑÑ‚Ð¸Ð¹ Ð¼Ð¾Ð»Ð¾Ñ‡Ð½Ð¾Ð¹ Ð¿Ñ€Ð¾Ð¼Ñ‹ÑˆÐ»ÐµÐ½Ð½Ð¾ÑÑ‚Ð¸ Ð½Ð° Ð¾ÑÐ½Ð¾Ð²Ðµ Ð¿Ð¾Ð´Ñ…Ð¾Ð´Ð° RAG (Retrieval-Augmented Generation) Ð² ÑÐ¾Ð²Ñ€ÐµÐ¼ÐµÐ½Ð½Ñ‹Ñ… ÑƒÑÐ»Ð¾Ð²Ð¸ÑÑ…. Ð Ð°ÑÑÐ¼Ð¾Ñ‚Ñ€ÐµÐ½Ñ‹ Ñ€Ð¸ÑÐºÐ¸ Ð¿Ñ€Ð¸Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ LLM Ð² ÑÑ„ÐµÑ€Ðµ ÑÐºÐ¾Ð½Ð¾Ð¼Ð¸Ñ‡ÐµÑÐºÐ¾Ð¹ Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ÑÑ‚Ð¸ Ð¿Ñ€ÐµÐ´Ð¿Ñ€Ð¸ÑÑ‚Ð¸Ð¹ Ð¼Ð¾Ð»Ð¾Ñ‡Ð½Ð¾Ð¹ Ð¿Ñ€Ð¾Ð¼Ñ‹ÑˆÐ»ÐµÐ½Ð½Ð¾ÑÑ‚Ð¸. ÐŸÐ¾Ð´Ñ€Ð¾Ð±Ð½Ð¾ Ñ€Ð°Ð·Ð¾Ð±Ñ€Ð°Ð½Ñ‹ ÑÑ†ÐµÐ½Ð°Ñ€Ð¸Ð¸ Ð¿Ñ€Ð¸Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ LLM+RAG Ð² Ñ€Ð¾ÑÑÐ¸Ð¹ÑÐºÐ¾Ð¹ Ð¼Ð¾Ð»Ð¾Ñ‡Ð½Ð¾Ð¹ Ð¿Ñ€Ð¾Ð¼Ñ‹ÑˆÐ»ÐµÐ½Ð½Ð¾ÑÑ‚Ð¸ â€“ Ñ Ð¾Ð¿Ð¸ÑÐ°Ð½Ð¸ÐµÐ¼ Ð¿Ñ€Ð¾Ñ†ÐµÑÑÐ°, Ð·Ð°Ð´ÐµÐ¹ÑÑ‚Ð²Ð¾Ð²Ð°Ð½Ð½Ñ‹Ñ… Ð´Ð°Ð½Ð½Ñ‹Ñ…, Ñ€ÐµÑˆÐ°ÐµÐ¼Ñ‹Ñ… Ñ€Ð¸ÑÐºÐ¾Ð² Ð¸ Ð´Ð¾ÑÑ‚Ð¸Ð³Ð½ÑƒÑ‚Ñ‹Ñ… Ñ€ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚Ð¾Ð². ÐŸÐ¾ÐºÐ°Ð·Ð°Ð½Ð¾, Ñ‡Ñ‚Ð¾ Ð² Ñ€ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚Ðµ Ð¸Ð½Ñ‚ÐµÐ³Ñ€Ð°Ñ†Ð¸Ñ RAG Ñ LLM Ñ‚Ñ€Ð°Ð½ÑÑ„Ð¾Ñ€Ð¼Ð¸Ñ€ÑƒÐµÑ‚ Ð³ÐµÐ½ÐµÑ€Ð°Ñ‚Ð¸Ð²Ð½ÑƒÑŽ Ð¼Ð¾Ð´ÐµÐ»ÑŒ Ð¸Ð· Ð¿Ð¾Ñ‚ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½Ð¾ Ð¾Ð¿Ð°ÑÐ½Ð¾Ð³Ð¾ Ð¸Ð½ÑÑ‚Ñ€ÑƒÐ¼ÐµÐ½Ñ‚Ð° Ð² Ð½Ð°Ð´ÐµÐ¶Ð½Ñ‹Ð¹ Ð¼ÐµÑ…Ð°Ð½Ð¸Ð·Ð¼ Ð¿Ð¾Ð´Ð´ÐµÑ€Ð¶ÐºÐ¸ Ð¿Ñ€Ð¸Ð½ÑÑ‚Ð¸Ñ Ñ€ÐµÑˆÐµÐ½Ð¸Ð¹ â€“ Ð¾Ñ‚ Ð¼Ð¾Ð½Ð¸Ñ‚Ð¾Ñ€Ð¸Ð½Ð³Ð° ÑƒÐ³Ñ€Ð¾Ð· Ñ„Ð°Ð»ÑŒÑÐ¸Ñ„Ð¸ÐºÐ°Ñ†Ð¸Ð¸ Ð´Ð¾ Ð¿Ñ€Ð¾Ð³Ð½Ð¾Ð·Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð¸Ñ ÑÐºÐ¾Ð½Ð¾Ð¼Ð¸Ñ‡ÐµÑÐºÐ¸Ñ… Ð¿Ð¾ÐºÐ°Ð·Ð°Ñ‚ÐµÐ»ÐµÐ¹ Ñ ÑƒÑ‡ÐµÑ‚Ð¾Ð¼ Ð¾Ñ‚Ñ€Ð°ÑÐ»ÐµÐ²Ð¾Ð¹ ÑÐ¿ÐµÑ†Ð¸Ñ„Ð¸ÐºÐ¸. The article examines the features of reducing the risks of using LLM (Large Language Model) in the field of economic security of dairy industry enterprises based on the RAG (Retrieval-Augmented Generation) approach in modern conditions. The risks of using LLM in the field of economic security of dairy industry enterprises are considered. The scenarios of LLM+RAG application in the Russian dairy industry are analyzed in detail, describing the process, the data involved, the risks to be solved and the results achieved. It is shown that as a result, the integration of RAG with LLM transforms the generative model from a potentially dangerous tool into a reliable decision support mechanism, from monitoring fraud threats to forecasting economic indicators based on industry specifics.",
      "authors": "[\"Ð˜.Ð’. Ð•Ñ€Ð¼Ð°ÐºÐ¾Ð²\", \"Ð’.Ð’. Ð¤Ð¸Ð»Ð°Ñ‚Ð¾Ð²\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-06-15",
      "updated": "2026-06-17T08:52:47+00:00",
      "abs_url": "https://doi.org/10.47576/2949-1894.2026.7.7.023",
      "pdf_url": "",
      "comment": "Innovative economy: information, analytics, forecasts | Publishing house Pegas | journal-article",
      "age_days": 52,
      "authors_joined": "Ð˜.Ð’. Ð•Ñ€Ð¼Ð°ÐºÐ¾Ð², Ð’.Ð’. Ð¤Ð¸Ð»Ð°Ñ‚Ð¾Ð²",
      "categories_joined": "",
      "summary_chars": 1597,
      "text_for_embedding": "Ð¡Ð½Ð¸Ð¶ÐµÐ½Ð¸Ðµ Ñ€Ð¸ÑÐºÐ¾Ð² Ð¿Ñ€Ð¸Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ LLM (Large Language Model) Ð² ÑÑ„ÐµÑ€Ðµ ÑÐºÐ¾Ð½Ð¾Ð¼Ð¸Ñ‡ÐµÑÐºÐ¾Ð¹ Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ÑÑ‚Ð¸ Ð¿Ñ€ÐµÐ´Ð¿Ñ€Ð¸ÑÑ‚Ð¸Ð¹ Ð¼Ð¾Ð»Ð¾Ñ‡Ð½Ð¾Ð¹ Ð¿Ñ€Ð¾Ð¼Ñ‹ÑˆÐ»ÐµÐ½Ð½Ð¾ÑÑ‚Ð¸ Ð½Ð° Ð¾ÑÐ½Ð¾Ð²Ðµ Ð¿Ð¾Ð´Ñ…Ð¾Ð´Ð° RAG (Retrieval-Augmented Generation)\n\nÐ’ ÑÑ‚Ð°Ñ‚ÑŒÐµ Ð¿Ñ€Ð¾Ð²ÐµÐ´ÐµÐ½Ð¾ Ð¸ÑÑÐ»ÐµÐ´Ð¾Ð²Ð°Ð½Ð¸Ðµ Ð¾ÑÐ¾Ð±ÐµÐ½Ð½Ð¾ÑÑ‚ÐµÐ¹ ÑÐ½Ð¸Ð¶ÐµÐ½Ð¸Ñ Ñ€Ð¸ÑÐºÐ¾Ð² Ð¿Ñ€Ð¸Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ LLM (Large Language Model) Ð² ÑÑ„ÐµÑ€Ðµ ÑÐºÐ¾Ð½Ð¾Ð¼Ð¸Ñ‡ÐµÑÐºÐ¾Ð¹ Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ÑÑ‚Ð¸ Ð¿Ñ€ÐµÐ´Ð¿Ñ€Ð¸ÑÑ‚Ð¸Ð¹ Ð¼Ð¾Ð»Ð¾Ñ‡Ð½Ð¾Ð¹ Ð¿Ñ€Ð¾Ð¼Ñ‹ÑˆÐ»ÐµÐ½Ð½Ð¾ÑÑ‚Ð¸ Ð½Ð° Ð¾ÑÐ½Ð¾Ð²Ðµ Ð¿Ð¾Ð´Ñ…Ð¾Ð´Ð° RAG (Retrieval-Augmented Generation) Ð² ÑÐ¾Ð²Ñ€ÐµÐ¼ÐµÐ½Ð½Ñ‹Ñ… ÑƒÑÐ»Ð¾Ð²Ð¸ÑÑ…. Ð Ð°ÑÑÐ¼Ð¾Ñ‚Ñ€ÐµÐ½Ñ‹ Ñ€Ð¸ÑÐºÐ¸ Ð¿Ñ€Ð¸Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ LLM Ð² ÑÑ„ÐµÑ€Ðµ ÑÐºÐ¾Ð½Ð¾Ð¼Ð¸Ñ‡ÐµÑÐºÐ¾Ð¹ Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ÑÑ‚Ð¸ Ð¿Ñ€ÐµÐ´Ð¿Ñ€Ð¸ÑÑ‚Ð¸Ð¹ Ð¼Ð¾Ð»Ð¾Ñ‡Ð½Ð¾Ð¹ Ð¿Ñ€Ð¾Ð¼Ñ‹ÑˆÐ»ÐµÐ½Ð½Ð¾ÑÑ‚Ð¸. ÐŸÐ¾Ð´Ñ€Ð¾Ð±Ð½Ð¾ Ñ€Ð°Ð·Ð¾Ð±Ñ€Ð°Ð½Ñ‹ ÑÑ†ÐµÐ½Ð°Ñ€Ð¸Ð¸ Ð¿Ñ€Ð¸Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ LLM+RAG Ð² Ñ€Ð¾ÑÑÐ¸Ð¹ÑÐºÐ¾Ð¹ Ð¼Ð¾Ð»Ð¾Ñ‡Ð½Ð¾Ð¹ Ð¿Ñ€Ð¾Ð¼Ñ‹ÑˆÐ»ÐµÐ½Ð½Ð¾ÑÑ‚Ð¸ â€“ Ñ Ð¾Ð¿Ð¸ÑÐ°Ð½Ð¸ÐµÐ¼ Ð¿Ñ€Ð¾Ñ†ÐµÑÑÐ°, Ð·Ð°Ð´ÐµÐ¹ÑÑ‚Ð²Ð¾Ð²Ð°Ð½Ð½Ñ‹Ñ… Ð´Ð°Ð½Ð½Ñ‹Ñ…, Ñ€ÐµÑˆÐ°ÐµÐ¼Ñ‹Ñ… Ñ€Ð¸ÑÐºÐ¾Ð² Ð¸ Ð´Ð¾ÑÑ‚Ð¸Ð³Ð½ÑƒÑ‚Ñ‹Ñ… Ñ€ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚Ð¾Ð². ÐŸÐ¾ÐºÐ°Ð·Ð°Ð½Ð¾, Ñ‡Ñ‚Ð¾ Ð² Ñ€ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚Ðµ Ð¸Ð½Ñ‚ÐµÐ³Ñ€Ð°Ñ†Ð¸Ñ RAG Ñ LLM Ñ‚Ñ€Ð°Ð½ÑÑ„Ð¾Ñ€Ð¼Ð¸Ñ€ÑƒÐµÑ‚ Ð³ÐµÐ½ÐµÑ€Ð°Ñ‚Ð¸Ð²Ð½ÑƒÑŽ Ð¼Ð¾Ð´ÐµÐ»ÑŒ Ð¸Ð· Ð¿Ð¾Ñ‚ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½Ð¾ Ð¾Ð¿Ð°ÑÐ½Ð¾Ð³Ð¾ Ð¸Ð½ÑÑ‚Ñ€ÑƒÐ¼ÐµÐ½Ñ‚Ð° Ð² Ð½Ð°Ð´ÐµÐ¶Ð½Ñ‹Ð¹ Ð¼ÐµÑ…Ð°Ð½Ð¸Ð·Ð¼ Ð¿Ð¾Ð´Ð´ÐµÑ€Ð¶ÐºÐ¸ Ð¿Ñ€Ð¸Ð½ÑÑ‚Ð¸Ñ Ñ€ÐµÑˆÐµÐ½Ð¸Ð¹ â€“ Ð¾Ñ‚ Ð¼Ð¾Ð½Ð¸Ñ‚Ð¾Ñ€Ð¸Ð½Ð³Ð° ÑƒÐ³Ñ€Ð¾Ð· Ñ„Ð°Ð»ÑŒÑÐ¸Ñ„Ð¸ÐºÐ°Ñ†Ð¸Ð¸ Ð´Ð¾ Ð¿Ñ€Ð¾Ð³Ð½Ð¾Ð·Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð¸Ñ ÑÐºÐ¾Ð½Ð¾Ð¼Ð¸Ñ‡ÐµÑÐºÐ¸Ñ… Ð¿Ð¾ÐºÐ°Ð·Ð°Ñ‚ÐµÐ»ÐµÐ¹ Ñ ÑƒÑ‡ÐµÑ‚Ð¾Ð¼ Ð¾Ñ‚Ñ€Ð°ÑÐ»ÐµÐ²Ð¾Ð¹ ÑÐ¿ÐµÑ†Ð¸Ñ„Ð¸ÐºÐ¸. The article examines the features of reducing the risks of using LLM (Large Language Model) in the field of economic security of dairy industry enterprises based on the RAG (Retrieval-Augmented Generation) approach in modern conditions. The risks of using LLM in the field of economic security of dairy industry enterprises are considered. The scenarios of LLM+RAG application in the Russian dairy industry are analyzed in detail, describing the process, the data involved, the risks to be solved and the results achieved. It is shown that as a result, the integration of RAG with LLM transforms the generative model from a potentially dangerous tool into a reliable decision support mechanism, from monitoring fraud threats to forecasting economic indicators based on industry specifics."
    },
    {
      "paper_id": "10.21203/rs.3.rs-9882260/v1",
      "title": "Operationalizing Reliability Gaps in Large Language Models: A Semi-Systematic Evidence Map of Reasoning, Factuality, Evaluation, and Retrieval-Augmented Generation",
      "summary": "Abstract Large language models (LLMs) increasingly support reasoning, question answering, decision support, and retrieval-augmented knowledge work. High benchmark performance, however, does not by itself establish reliability under realistic deployment conditions. This article treats LLM reliability as a pipeline-level evaluation construct rather than a single capability score. Using a semi-systematic evidence-map design, it synthesizes 77 studies selected from a broader OpenAlex audit trail of 1,010 candidate records. The review focuses on four linked dimensions: reasoning faithfulness, factual grounding, evaluation validity, and evidence-use reliability in retrieval-augmented generation. The synthesis distinguishes answer accuracy from reasoning faithfulness, truth from source-grounded support, benchmark performance from evaluation validity, and retrieved evidence from evidence actually used during generation. Across the reviewed literature, reasoning traces can improve answer accuracy without demonstrating process faithfulness; self-correction without external feedback shows inconsistent reliability; hallucination, attribution error, and sycophancy represent separable factuality risks; benchmark scores are sensitive to contamination, saturation, and protocol variation; and retrieval-augmented generation reliability depends on retrieval relevance, source sufficiency, context utilization, attribution, and calibrated refusal. The article contributes an operational reliability-gap framework and testable propositions for evaluating interactions among reasoning, factual grounding, evaluation trust, evidence use, lateral reasoning, and equitable multilingual reliability. The framework supports reliability-centered evaluation protocols that report process verification, claim-level grounding, contamination controls, uncertainty and refusal behavior, and stratified performance across language, culture, and domain contexts.",
      "authors": "[\"Kushal Budha\", \"Nikesh Lagun\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-06-02",
      "updated": "2026-06-02T17:02:08+00:00",
      "abs_url": "https://doi.org/10.21203/rs.3.rs-9882260/v1",
      "pdf_url": "",
      "comment": "Springer Science and Business Media LLC | posted-content",
      "age_days": 65,
      "authors_joined": "Kushal Budha, Nikesh Lagun",
      "categories_joined": "",
      "summary_chars": 1949,
      "text_for_embedding": "Operationalizing Reliability Gaps in Large Language Models: A Semi-Systematic Evidence Map of Reasoning, Factuality, Evaluation, and Retrieval-Augmented Generation\n\nAbstract Large language models (LLMs) increasingly support reasoning, question answering, decision support, and retrieval-augmented knowledge work. High benchmark performance, however, does not by itself establish reliability under realistic deployment conditions. This article treats LLM reliability as a pipeline-level evaluation construct rather than a single capability score. Using a semi-systematic evidence-map design, it synthesizes 77 studies selected from a broader OpenAlex audit trail of 1,010 candidate records. The review focuses on four linked dimensions: reasoning faithfulness, factual grounding, evaluation validity, and evidence-use reliability in retrieval-augmented generation. The synthesis distinguishes answer accuracy from reasoning faithfulness, truth from source-grounded support, benchmark performance from evaluation validity, and retrieved evidence from evidence actually used during generation. Across the reviewed literature, reasoning traces can improve answer accuracy without demonstrating process faithfulness; self-correction without external feedback shows inconsistent reliability; hallucination, attribution error, and sycophancy represent separable factuality risks; benchmark scores are sensitive to contamination, saturation, and protocol variation; and retrieval-augmented generation reliability depends on retrieval relevance, source sufficiency, context utilization, attribution, and calibrated refusal. The article contributes an operational reliability-gap framework and testable propositions for evaluating interactions among reasoning, factual grounding, evaluation trust, evidence use, lateral reasoning, and equitable multilingual reliability. The framework supports reliability-centered evaluation protocols that report process verification, claim-level grounding, contamination controls, uncertainty and refusal behavior, and stratified performance across language, culture, and domain contexts."
    },
    {
      "paper_id": "10.52060/juptik.v4i1.4318",
      "title": "Chatbot Hybrid Fatwa MUI Menggunakan Retrieval Augmented Generation dan Large Language Model",
      "summary": "Aksesibilitas dokumen digital Fatwa Majelis Ulama Indonesia (MUI) yang terfragmentasi membuat pencarian informasi kurang efektif. Di sisi lain, sistem tanya jawab AI berbasis satu sumber dokumen (single-corpus) rentan menghasilkan jawaban tidak akurat (halusinasi) pada pertanyaan di luar domain. Penelitian ini mengembangkan Chatbot Hybrid Fatwa MUI menggunakan arsitektur Hybrid Retrieval bertingkat dengan dua sumber pengetahuan: dokumen Fatwa MUI sebagai korpus utama dan 12.370 hadis Bukhari-Muslim sebagai mekanisme cadangan (fallback). Sistem ini menerapkan pencarian semantik, verifikasi topik otomatis oleh model bahasa, dan pengalihan ke basis data hadis jika konteks fatwa dinilai tidak relevan. Hasil evaluasi menunjukkan peningkatan kesamaan makna jawaban sebesar 13,23% (dari 0,6664 menjadi 0,7546) dan peningkatan kesetiaan pada rujukan (faithfulness) sebesar 10,57% (dari 85,37% menjadi 94,39%), dengan tingkat penolakan (abstain rate) identik sebesar 26,83%. Pendekatan multi-korpus ini terbukti signifikan meningkatkan relevansi dan keakuratan jawaban dibandingkan RAG standar.",
      "authors": "[\"Surya Hidayatullah Firdaus\", \"Nazruddin Safaat H\", \"Yelfi Vitriani\", \"Novriyanto\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-06-01",
      "updated": "2026-07-04T21:16:23+00:00",
      "abs_url": "https://doi.org/10.52060/juptik.v4i1.4318",
      "pdf_url": "https://www.ejournal.ummuba.ac.id/index.php/JUPTIK/article/download/4318/2057",
      "comment": "Jurnal Pengembangan Teknologi Informasi dan Komunikasi (JUPTIK) | Universitas Muhammadiyah Muara Bungo | journal-article",
      "age_days": 66,
      "authors_joined": "Surya Hidayatullah Firdaus, Nazruddin Safaat H, Yelfi Vitriani, Novriyanto",
      "categories_joined": "",
      "summary_chars": 1095,
      "text_for_embedding": "Chatbot Hybrid Fatwa MUI Menggunakan Retrieval Augmented Generation dan Large Language Model\n\nAksesibilitas dokumen digital Fatwa Majelis Ulama Indonesia (MUI) yang terfragmentasi membuat pencarian informasi kurang efektif. Di sisi lain, sistem tanya jawab AI berbasis satu sumber dokumen (single-corpus) rentan menghasilkan jawaban tidak akurat (halusinasi) pada pertanyaan di luar domain. Penelitian ini mengembangkan Chatbot Hybrid Fatwa MUI menggunakan arsitektur Hybrid Retrieval bertingkat dengan dua sumber pengetahuan: dokumen Fatwa MUI sebagai korpus utama dan 12.370 hadis Bukhari-Muslim sebagai mekanisme cadangan (fallback). Sistem ini menerapkan pencarian semantik, verifikasi topik otomatis oleh model bahasa, dan pengalihan ke basis data hadis jika konteks fatwa dinilai tidak relevan. Hasil evaluasi menunjukkan peningkatan kesamaan makna jawaban sebesar 13,23% (dari 0,6664 menjadi 0,7546) dan peningkatan kesetiaan pada rujukan (faithfulness) sebesar 10,57% (dari 85,37% menjadi 94,39%), dengan tingkat penolakan (abstain rate) identik sebesar 26,83%. Pendekatan multi-korpus ini terbukti signifikan meningkatkan relevansi dan keakuratan jawaban dibandingkan RAG standar."
    },
    {
      "paper_id": "10.54254/2753-8818/2026.dl34055",
      "title": "Hallucination in Large Language Models and Retrieval-Augmented Generation: Mechanisms, Mitigation, and Evaluation",
      "summary": "Large language models have demonstrated strong generative capability in question answering, dialogue, and other knowledge-intensive tasks. However, their outputs remain vulnerable to hallucination, including factual errors, unsupported claims, spurious citations, and distorted reasoning. Retrieval-augmented generation (RAG) has been proposed as a practical remedy because it supplements parametric knowledge with external evidence retrieved at inference time. Yet RAG does not guarantee truthfulness or attribution by default. Errors may arise during query formulation, document retrieval, evidence aggregation, and answer grounding. This paper reviews the relationship between hallucination and RAG from three perspectives: mechanism, mitigation, and evaluation. First, the major causes of hallucination in both vanilla LLMs and RAG-enhanced systems are analyzed. Second, the principal mitigation strategies are organized into retrieval optimization, evidence-grounded generation, and post-generation verification. Third, the main evaluation dimensions are examined, including factuality, faithfulness, attribution quality, and retrieval relevance. It is argued that RAG should not be treated as a complete solution to hallucination. Its value lies in enabling externally grounded generation, but its effectiveness depends on the reliability of retrieval, the fidelity of evidence use, and the rigor of evaluation. Future work should prioritize attribution-aware generation, conflict-sensitive reasoning, and unified evaluation protocols for trustworthy LLM systems.",
      "authors": "[\"Haopeng Yang\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-06-01",
      "updated": "2026-06-01T08:01:15+00:00",
      "abs_url": "https://doi.org/10.54254/2753-8818/2026.dl34055",
      "pdf_url": "",
      "comment": "Theoretical and Natural Science | EWA Publishing | journal-article",
      "age_days": 66,
      "authors_joined": "Haopeng Yang",
      "categories_joined": "",
      "summary_chars": 1569,
      "text_for_embedding": "Hallucination in Large Language Models and Retrieval-Augmented Generation: Mechanisms, Mitigation, and Evaluation\n\nLarge language models have demonstrated strong generative capability in question answering, dialogue, and other knowledge-intensive tasks. However, their outputs remain vulnerable to hallucination, including factual errors, unsupported claims, spurious citations, and distorted reasoning. Retrieval-augmented generation (RAG) has been proposed as a practical remedy because it supplements parametric knowledge with external evidence retrieved at inference time. Yet RAG does not guarantee truthfulness or attribution by default. Errors may arise during query formulation, document retrieval, evidence aggregation, and answer grounding. This paper reviews the relationship between hallucination and RAG from three perspectives: mechanism, mitigation, and evaluation. First, the major causes of hallucination in both vanilla LLMs and RAG-enhanced systems are analyzed. Second, the principal mitigation strategies are organized into retrieval optimization, evidence-grounded generation, and post-generation verification. Third, the main evaluation dimensions are examined, including factuality, faithfulness, attribution quality, and retrieval relevance. It is argued that RAG should not be treated as a complete solution to hallucination. Its value lies in enabling externally grounded generation, but its effectiveness depends on the reliability of retrieval, the fidelity of evidence use, and the rigor of evaluation. Future work should prioritize attribution-aware generation, conflict-sensitive reasoning, and unified evaluation protocols for trustworthy LLM systems."
    },
    {
      "paper_id": "10.22214/ijraset.2026.82233",
      "title": "Hybrid Graph Neural Network and Large Language Model Framework for Robust Knowledge Graph Question Answering via Retrieval-Augmented Generation",
      "summary": "Knowledge graphs (KGs) hold facts about the world as connected triples, and they have become a backbone for any system that needs to reason over linked information. The task of Knowledge Graph Question Answering (KGQA) is to map a natural-language question onto the right entity, or set of entities, somewhere inside such a graph. Two communities have been pulling at this problem from opposite ends. Large language models (LLMs) read a question fluently but tend to invent facts and stumble on multi-hop chains they cannot verify. Graph neural networks (GNNs), on the other side, are good at walking through neighbourhoods and weighing relations, but cannot phrase an answer the way a person would. In this work, we describe a practical hybrid that places the two inside a retrieval- augmented generation (RAG) loop. A GNN first prunes a small subgraph around the question's seed entities and ranks candidate answers; we then extract shortest paths between the seeds and the top candidates, score each path with a lightweight function that combines GNN attention with degree centrality, and finally verbalise the surviving paths into plain-English sentences before passing them to a 7-8B open-source LLM. The proposed entity-priority scoring step is training-free and runs in milliseconds, yet it lifts Hits@1 by roughly 4-5 percentage points on the harder questions of ComplexWebQuestions. Experiments on WebQuestionsSP and ComplexWebQuestions show competitive or superior results against recent baselines, with the largest gains on multi-entity and three-or-more hop queries. The pipeline uses about one LLM call per question, runs comfortably on a single mid-range GPU, and exposes its reasoning as a short list of human-readable paths that anyone can audit. We argue that this combination of grounded retrieval, lightweight path scoring, and modest model size makes the approach particularly suited to academic and resourceconstrained settings.",
      "authors": "[\"Sohail Khan\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-05-31",
      "updated": "2026-05-16T08:14:08+00:00",
      "abs_url": "https://doi.org/10.22214/ijraset.2026.82233",
      "pdf_url": "",
      "comment": "International Journal for Research in Applied Science and Engineering Technology | International Journal for Research in Applied Science and Engineering Technology (IJRASET) | journal-article",
      "age_days": 67,
      "authors_joined": "Sohail Khan",
      "categories_joined": "",
      "summary_chars": 1949,
      "text_for_embedding": "Hybrid Graph Neural Network and Large Language Model Framework for Robust Knowledge Graph Question Answering via Retrieval-Augmented Generation\n\nKnowledge graphs (KGs) hold facts about the world as connected triples, and they have become a backbone for any system that needs to reason over linked information. The task of Knowledge Graph Question Answering (KGQA) is to map a natural-language question onto the right entity, or set of entities, somewhere inside such a graph. Two communities have been pulling at this problem from opposite ends. Large language models (LLMs) read a question fluently but tend to invent facts and stumble on multi-hop chains they cannot verify. Graph neural networks (GNNs), on the other side, are good at walking through neighbourhoods and weighing relations, but cannot phrase an answer the way a person would. In this work, we describe a practical hybrid that places the two inside a retrieval- augmented generation (RAG) loop. A GNN first prunes a small subgraph around the question's seed entities and ranks candidate answers; we then extract shortest paths between the seeds and the top candidates, score each path with a lightweight function that combines GNN attention with degree centrality, and finally verbalise the surviving paths into plain-English sentences before passing them to a 7-8B open-source LLM. The proposed entity-priority scoring step is training-free and runs in milliseconds, yet it lifts Hits@1 by roughly 4-5 percentage points on the harder questions of ComplexWebQuestions. Experiments on WebQuestionsSP and ComplexWebQuestions show competitive or superior results against recent baselines, with the largest gains on multi-entity and three-or-more hop queries. The pipeline uses about one LLM call per question, runs comfortably on a single mid-range GPU, and exposes its reasoning as a short list of human-readable paths that anyone can audit. We argue that this combination of grounded retrieval, lightweight path scoring, and modest model size makes the approach particularly suited to academic and resourceconstrained settings."
    },
    {
      "paper_id": "10.21203/rs.3.rs-9770645/v1",
      "title": "Adapting Large Language Models for Low-Resource Regulated Domains: A Fine-Tuning and Retrieval-Augmented Generation Approach to Insurance Information Delivery in Kenya",
      "summary": "Abstract Background. Insurance penetration in Kenya stands at roughly 2.3% of GDP, well below the global average of 7.4%. Documented barriers include low financial literacy, affordability, cultural resistance and limited access to trusted, locally relevant information. Large Language Models (LLMs) could in principle deliver scalable, personalised information, but off-the-shelf models perform poorly on jurisdiction-specific regulatory content and are prone to hallucination in low-resource domains. Objective. We investigate how a mid-sized open-weights LLM can be adapted to a low-resource, highly regulated domain using two complementary techniques â€” parameter-efficient supervised fine-tuning and Retrieval-Augmented Generation (RAG) â€” and we quantify the marginal value of each technique and of their combination. Methods. A questionâ€“answer (QA) corpus was curated from primary regulatory sources (Insurance Regula- tory Authority of Kenya, Association of Kenya Insurers) and reformatted into JSONL. Metaâ€™s LLaMA-2- 13B-chat was used as the base model. We compared four configurations: (i) base model; (ii) base + LoRA fine-tuning; (iii) base + RAG over a Chroma vector index; and (iv) fine-tuning + RAG. Outputs were graded by GPT-4 (with a human-validated paraphrased test set) on accuracy (1â€“10), succinctness (5-level rubric mapped to a numerical scale) and relevancy (1â€“10). Results. The combined fine-tuning + RAG configuration achieved the best performance on all three metrics (accuracy 6.803, succinctness 7.03, relevancy 6.89), versus the base model (1.229, 3.78, 1.98). Fine-tuning alone yielded only marginal accuracy gains and a measurable drop in relevancy, indicating that parameter adaptation without external knowledge grounding can make the model more confident without making it more correct. RAG contributed the largest single improvement. Contribution. The paper offers (a) a reproducible recipe for adapting open-weights LLMs to a low-resource regulated domain on commodity hardware; (b) empirical evidence on the relative contribution of fine-tuning vs. retrieval grounding in that setting; and (c) a discussion of the implications for AI-assisted financial inclusion in Sub-Saharan Africa.",
      "authors": "[\"AMOS MBEKI NYAGAR\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-05-22",
      "updated": "2026-05-22T04:10:39+00:00",
      "abs_url": "https://doi.org/10.21203/rs.3.rs-9770645/v1",
      "pdf_url": "",
      "comment": "Springer Science and Business Media LLC | posted-content",
      "age_days": 76,
      "authors_joined": "AMOS MBEKI NYAGAR",
      "categories_joined": "",
      "summary_chars": 2220,
      "text_for_embedding": "Adapting Large Language Models for Low-Resource Regulated Domains: A Fine-Tuning and Retrieval-Augmented Generation Approach to Insurance Information Delivery in Kenya\n\nAbstract Background. Insurance penetration in Kenya stands at roughly 2.3% of GDP, well below the global average of 7.4%. Documented barriers include low financial literacy, affordability, cultural resistance and limited access to trusted, locally relevant information. Large Language Models (LLMs) could in principle deliver scalable, personalised information, but off-the-shelf models perform poorly on jurisdiction-specific regulatory content and are prone to hallucination in low-resource domains. Objective. We investigate how a mid-sized open-weights LLM can be adapted to a low-resource, highly regulated domain using two complementary techniques â€” parameter-efficient supervised fine-tuning and Retrieval-Augmented Generation (RAG) â€” and we quantify the marginal value of each technique and of their combination. Methods. A questionâ€“answer (QA) corpus was curated from primary regulatory sources (Insurance Regula- tory Authority of Kenya, Association of Kenya Insurers) and reformatted into JSONL. Metaâ€™s LLaMA-2- 13B-chat was used as the base model. We compared four configurations: (i) base model; (ii) base + LoRA fine-tuning; (iii) base + RAG over a Chroma vector index; and (iv) fine-tuning + RAG. Outputs were graded by GPT-4 (with a human-validated paraphrased test set) on accuracy (1â€“10), succinctness (5-level rubric mapped to a numerical scale) and relevancy (1â€“10). Results. The combined fine-tuning + RAG configuration achieved the best performance on all three metrics (accuracy 6.803, succinctness 7.03, relevancy 6.89), versus the base model (1.229, 3.78, 1.98). Fine-tuning alone yielded only marginal accuracy gains and a measurable drop in relevancy, indicating that parameter adaptation without external knowledge grounding can make the model more confident without making it more correct. RAG contributed the largest single improvement. Contribution. The paper offers (a) a reproducible recipe for adapting open-weights LLMs to a low-resource regulated domain on commodity hardware; (b) empirical evidence on the relative contribution of fine-tuning vs. retrieval grounding in that setting; and (c) a discussion of the implications for AI-assisted financial inclusion in Sub-Saharan Africa."
    },
    {
      "paper_id": "10.32473/flairs.39.1.141782",
      "title": "An Exploratory Study of Agentic Retrieval Augmented Generation for Mental Health Oriented Language Models",
      "summary": "Mental health conditions affect over one billion individuals globally and remain challenging to assess accurately due to fragmented clinical data and subjective evaluation methods. Mental health support systems increasingly rely on large language models (LLMs) due to their capabilities in natural language understanding and response generation. While retrieval augmented generation (RAG) and agentic frameworks have improved grounded generation in several domains, there is limited understanding of how such approaches affect response quality in mental health related tasks. In particular, the impact of structured context management and autonomous refinement on clinical relevance, empathy, completeness, and safety remains underexplored. In this study, we investigate the effects of agentic RAG on the performance of multiple mental health oriented language models. We adopt a common pipeline configuration that integrates patient dialogue, structured patient history, and externally retrieved clinical knowledge. The pipeline consists of coordinated stages for patient context retrieval, context augmentation, and response generation with autonomous evaluation and iterative refinement. We conduct empirical evaluations across four mental health models under this pipeline and analyze their performance in terms of medical accuracy, empathy, completeness, safety, and overall response quality. Our results show consistent trends toward improved responses when structured context handling and agentic refinement are applied, indicating that these components influence model behavior independent of architecture. This work provides insight into how agentic RAG influences model outputs in mental health applications and highlights the importance of context engineering and quality control in LLM based support systems. These findings indicate that Agentic Context Engineering (ACE) may contribute to improved reasoning depth, contextual alignment, and patient centered response quality across diverse models. However, despite the improvements observed, the framework remains an early step toward more reliable AI assisted mental health assessment. Continued research is needed to refine model architectures, optimize prompt engineering, and expand evaluation across broader and more diverse clinical contexts to ensure safety, consistency, and real world applicability.",
      "authors": "[\"Khoa Pham\", \"Jiacheng Li\", \"Hassan S. Al Khatib\", \"Shahram Rahimi\", \"Noorbakhsh Amiri Golilarz\", \"Andy Perkins\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-05-06",
      "updated": "2026-05-06T14:14:40+00:00",
      "abs_url": "https://doi.org/10.32473/flairs.39.1.141782",
      "pdf_url": "https://journals.flvc.org/FLAIRS/article/download/141782/146987",
      "comment": "The International FLAIRS Conference Proceedings | University of Florida George A Smathers Libraries | journal-article",
      "age_days": 92,
      "authors_joined": "Khoa Pham, Jiacheng Li, Hassan S. Al Khatib, Shahram Rahimi, Noorbakhsh Amiri Golilarz, Andy Perkins",
      "categories_joined": "",
      "summary_chars": 2371,
      "text_for_embedding": "An Exploratory Study of Agentic Retrieval Augmented Generation for Mental Health Oriented Language Models\n\nMental health conditions affect over one billion individuals globally and remain challenging to assess accurately due to fragmented clinical data and subjective evaluation methods. Mental health support systems increasingly rely on large language models (LLMs) due to their capabilities in natural language understanding and response generation. While retrieval augmented generation (RAG) and agentic frameworks have improved grounded generation in several domains, there is limited understanding of how such approaches affect response quality in mental health related tasks. In particular, the impact of structured context management and autonomous refinement on clinical relevance, empathy, completeness, and safety remains underexplored. In this study, we investigate the effects of agentic RAG on the performance of multiple mental health oriented language models. We adopt a common pipeline configuration that integrates patient dialogue, structured patient history, and externally retrieved clinical knowledge. The pipeline consists of coordinated stages for patient context retrieval, context augmentation, and response generation with autonomous evaluation and iterative refinement. We conduct empirical evaluations across four mental health models under this pipeline and analyze their performance in terms of medical accuracy, empathy, completeness, safety, and overall response quality. Our results show consistent trends toward improved responses when structured context handling and agentic refinement are applied, indicating that these components influence model behavior independent of architecture. This work provides insight into how agentic RAG influences model outputs in mental health applications and highlights the importance of context engineering and quality control in LLM based support systems. These findings indicate that Agentic Context Engineering (ACE) may contribute to improved reasoning depth, contextual alignment, and patient centered response quality across diverse models. However, despite the improvements observed, the framework remains an early step toward more reliable AI assisted mental health assessment. Continued research is needed to refine model architectures, optimize prompt engineering, and expand evaluation across broader and more diverse clinical contexts to ensure safety, consistency, and real world applicability."
    },
    {
      "paper_id": "10.55041/isjem07213",
      "title": "Speculative Retrieval-Augmented Generation for Cost-Efficient Large Language Model Inference",
      "summary": "Abstract - This work focuses on the two crucial bottlenecks in Retrieval-Augmented Generation (RAG): high inference latency and expensive computation cost. RAG enhances the factual correctness of Large Language Models (LLMs) by utilizing external knowledge sources; However, the auto-To achieve a good recall, the system applies a two-way retrieval mechanism: Dense retrieval: This module uses BAAI/bge-small-en-v1.5 to create a 384-dimensional embedding space, where queries and documents are mapped. The embeddings are stored in a FAISS IndexFlatL2. Sparse retrieval: This module uses TF-IDF vectorization to capture an exact keyword match. Reranking: A simple heuristic mechanism of matching substrings of the query terms in the documents selected to perform the final step of ranking them for prompt introduce a novel speculative RAG framework that combines hybrid retrieval with speculative decoding. Our framework employs hybrid dense vector search (BGE-small) and sparse keyword search (TF-IDF) for enhanced recall followed by a lightweight re-ranker model. A compact draft model (TinyLlama-1.1B) makes tentative future token generation, then a larger verifier model (Mistral-7B) checks the correctness of the candidate token. Empirical experiments demonstrate 33% and 29% improvement in inference latency and token reduction, respectively, compared to the baseline of a typical 7B model, while retaining 94% accuracy on factoid tasks. Key Words: Retrieval-Augmented Generation, Speculative Decoding, Large Language Models, Inference Optimization, Hybrid Retrieval",
      "authors": "[\"Dr. Sumalatha P\", \"Manoj Kumar\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-05-06",
      "updated": "2026-05-06T17:13:30+00:00",
      "abs_url": "https://doi.org/10.55041/isjem07213",
      "pdf_url": "",
      "comment": "International Scientific Journal of Engineering and Management | Edtech Publishers (OPC) Private Limited | journal-article",
      "age_days": 92,
      "authors_joined": "Dr. Sumalatha P, Manoj Kumar",
      "categories_joined": "",
      "summary_chars": 1571,
      "text_for_embedding": "Speculative Retrieval-Augmented Generation for Cost-Efficient Large Language Model Inference\n\nAbstract - This work focuses on the two crucial bottlenecks in Retrieval-Augmented Generation (RAG): high inference latency and expensive computation cost. RAG enhances the factual correctness of Large Language Models (LLMs) by utilizing external knowledge sources; However, the auto-To achieve a good recall, the system applies a two-way retrieval mechanism: Dense retrieval: This module uses BAAI/bge-small-en-v1.5 to create a 384-dimensional embedding space, where queries and documents are mapped. The embeddings are stored in a FAISS IndexFlatL2. Sparse retrieval: This module uses TF-IDF vectorization to capture an exact keyword match. Reranking: A simple heuristic mechanism of matching substrings of the query terms in the documents selected to perform the final step of ranking them for prompt introduce a novel speculative RAG framework that combines hybrid retrieval with speculative decoding. Our framework employs hybrid dense vector search (BGE-small) and sparse keyword search (TF-IDF) for enhanced recall followed by a lightweight re-ranker model. A compact draft model (TinyLlama-1.1B) makes tentative future token generation, then a larger verifier model (Mistral-7B) checks the correctness of the candidate token. Empirical experiments demonstrate 33% and 29% improvement in inference latency and token reduction, respectively, compared to the baseline of a typical 7B model, while retaining 94% accuracy on factoid tasks. Key Words: Retrieval-Augmented Generation, Speculative Decoding, Large Language Models, Inference Optimization, Hybrid Retrieval"
    },
    {
      "paper_id": "10.1093/sleep/zsag091.0346",
      "title": "0346 Retrieval Augmented Generation Improves Large Language Model Performance in Sleep Medicine",
      "summary": "Abstract Introduction While Large Language Models (LLMs) offer generative capabilities, generic models often lack domain-specific grounding, leading to hallucinations in high-stakes contexts. However, LLMs can serve as clinical decision support tools if augmented with specific domain data. This study evaluates the utility of Retrieval-Augmented Generation (RAG) applied to open-source LLMs, utilizing a curated knowledge base of authoritative sleep medicine textbooks, to quantify improvement in performance. Methods We evaluated four open-source modelsâ€”Llama-70B, Llama-8B, Qwen-14B, and Qwen-235B, linked to a RAG system indexing five standard textbooks, including ICSD-3 TR. Models were tested on sleep boardâ€“style MCQs and clinical vignettes diagnostic accuracy. Performance was assessed across nine configurations derived from three factors: RAG pipeline complexity (Plain vs. Complicated), textbook preprocessing (Uncleaned vs. Cleaned/TOC-aligned), and retriever type (Dense-only vs. Hybrid). Metrics included MCQ Accuracy and the rates at which the correct diagnosis appeared as the top result or within the top 5 differential diagnosis lists for vignettes. Results RAG consistently outperformed the no-RAG baseline, yielding absolute performance gains of 5.6%â€“10.7% for MCQs and 8.1%â€“10.2% for the top diagnosis in cases across all models. For MCQs, Qwen-235B achieved the highest accuracy of 87.3% (vs. 81.7% baseline) using the Plain RAG configuration with Cleaned (TOC-aligned) Hybrid retrieval. Llama-70B followed with 83.6% in the same configuration. For case vignettes, Qwen-235B achieved a correct top diagnosis rate of 66.3% and a correct diagnosis rate within the top 5 differential diagnosis lists of 90.8% using Cleaned Hybrid retrieval configurations. Hybrid retrieval (Dense + Sparse) consistently surpassed Dense-only methods. Notably, while larger models benefited from Cleaned text, smaller models (e.g., Qwen-14B) achieved higher top diagnosis rates with Uncleaned text (57.1% vs. 51.0%), suggesting a dependency on redundant context in lower-parameter settings. Conclusion RAG significantly enhances knowledge performance of open-source LLMs in sleep medicine. Hybrid retrieval and curated, TOC-aligned knowledge bases yield optimal results for large models, whereas smaller models benefit from the redundancy of uncleaned text. These findings suggest that RAG systems can augment LLMs in domain specific knowledge for clinical decision support. Support (if any)",
      "authors": "[\"Joseph Cheung\", \"Pengze Li\", \"Anshum Patel\", \"SaiKrishna Vallamchetla\", \"Het Contractor\", \"Hayden Heninger\", \"Cui Tao\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-05-01",
      "updated": "2026-05-09T03:10:46+00:00",
      "abs_url": "https://doi.org/10.1093/sleep/zsag091.0346",
      "pdf_url": "https://academic.oup.com/sleep/article-pdf/49/Supplement_1/A153/68252775/zsag091.0346.pdf",
      "comment": "SLEEPJ | Oxford University Press (OUP) | journal-article",
      "age_days": 97,
      "authors_joined": "Joseph Cheung, Pengze Li, Anshum Patel, SaiKrishna Vallamchetla, Het Contractor, Hayden Heninger, Cui Tao",
      "categories_joined": "",
      "summary_chars": 2491,
      "text_for_embedding": "0346 Retrieval Augmented Generation Improves Large Language Model Performance in Sleep Medicine\n\nAbstract Introduction While Large Language Models (LLMs) offer generative capabilities, generic models often lack domain-specific grounding, leading to hallucinations in high-stakes contexts. However, LLMs can serve as clinical decision support tools if augmented with specific domain data. This study evaluates the utility of Retrieval-Augmented Generation (RAG) applied to open-source LLMs, utilizing a curated knowledge base of authoritative sleep medicine textbooks, to quantify improvement in performance. Methods We evaluated four open-source modelsâ€”Llama-70B, Llama-8B, Qwen-14B, and Qwen-235B, linked to a RAG system indexing five standard textbooks, including ICSD-3 TR. Models were tested on sleep boardâ€“style MCQs and clinical vignettes diagnostic accuracy. Performance was assessed across nine configurations derived from three factors: RAG pipeline complexity (Plain vs. Complicated), textbook preprocessing (Uncleaned vs. Cleaned/TOC-aligned), and retriever type (Dense-only vs. Hybrid). Metrics included MCQ Accuracy and the rates at which the correct diagnosis appeared as the top result or within the top 5 differential diagnosis lists for vignettes. Results RAG consistently outperformed the no-RAG baseline, yielding absolute performance gains of 5.6%â€“10.7% for MCQs and 8.1%â€“10.2% for the top diagnosis in cases across all models. For MCQs, Qwen-235B achieved the highest accuracy of 87.3% (vs. 81.7% baseline) using the Plain RAG configuration with Cleaned (TOC-aligned) Hybrid retrieval. Llama-70B followed with 83.6% in the same configuration. For case vignettes, Qwen-235B achieved a correct top diagnosis rate of 66.3% and a correct diagnosis rate within the top 5 differential diagnosis lists of 90.8% using Cleaned Hybrid retrieval configurations. Hybrid retrieval (Dense + Sparse) consistently surpassed Dense-only methods. Notably, while larger models benefited from Cleaned text, smaller models (e.g., Qwen-14B) achieved higher top diagnosis rates with Uncleaned text (57.1% vs. 51.0%), suggesting a dependency on redundant context in lower-parameter settings. Conclusion RAG significantly enhances knowledge performance of open-source LLMs in sleep medicine. Hybrid retrieval and curated, TOC-aligned knowledge bases yield optimal results for large models, whereas smaller models benefit from the redundancy of uncleaned text. These findings suggest that RAG systems can augment LLMs in domain specific knowledge for clinical decision support. Support (if any)"
    },
    {
      "paper_id": "10.20944/preprints202604.0339.v1",
      "title": "Retrieval-Augmented Large Language Model Agents for Automated Scientific Literature Review Generation",
      "summary": "This study investigates a method that integrates retrieval-augmented mechanisms into large language model agents for scientific literature review generation. The approach addresses the limitations of traditional review models that rely on parametric knowledge with insufficient timeliness and limited coverage. Incorporating external document retrieval and dynamic information fusion into the generation process enhances the accuracy and completeness of the output. The overall framework consists of query encoding, semantic retrieval, document filtering, knowledge fusion, language modeling, task planning, memory storage, and reinforcement optimization, forming a closed loop of retrieval, understanding, and generation. Relevant document fragments are first retrieved through semantic vector search to ensure comprehensive and reliable information sources. These external representations are then integrated with the internal embeddings of the language model through weighted fusion, which preserves fluency while maintaining factual grounding. The task planning module constrains logical flow and text structure, and reinforcement learning optimization further improves relevance and consistency. Comparative experiments on large-scale scientific literature datasets demonstrate that the method outperforms existing approaches on ROUGE, BLEU, METEOR, and diversity metrics, validating its effectiveness and practicality. The findings show that combining retrieval augmentation with agent architectures can significantly improve coverage, accuracy, and language quality in review generation, providing a feasible solution for knowledge organization in complex literature environments.",
      "authors": "[\"Ruotong Wang\", \"Nyutian Long\", \"Shunqi Liu\", \"Yuxi Wang\", \"Zhen Qi\", \"Huajun Zhang\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-04-06",
      "updated": "2026-07-30T14:22:32+00:00",
      "abs_url": "https://doi.org/10.20944/preprints202604.0339.v1",
      "pdf_url": "",
      "comment": "MDPI AG | posted-content",
      "age_days": 122,
      "authors_joined": "Ruotong Wang, Nyutian Long, Shunqi Liu, Yuxi Wang, Zhen Qi, Huajun Zhang",
      "categories_joined": "",
      "summary_chars": 1687,
      "text_for_embedding": "Retrieval-Augmented Large Language Model Agents for Automated Scientific Literature Review Generation\n\nThis study investigates a method that integrates retrieval-augmented mechanisms into large language model agents for scientific literature review generation. The approach addresses the limitations of traditional review models that rely on parametric knowledge with insufficient timeliness and limited coverage. Incorporating external document retrieval and dynamic information fusion into the generation process enhances the accuracy and completeness of the output. The overall framework consists of query encoding, semantic retrieval, document filtering, knowledge fusion, language modeling, task planning, memory storage, and reinforcement optimization, forming a closed loop of retrieval, understanding, and generation. Relevant document fragments are first retrieved through semantic vector search to ensure comprehensive and reliable information sources. These external representations are then integrated with the internal embeddings of the language model through weighted fusion, which preserves fluency while maintaining factual grounding. The task planning module constrains logical flow and text structure, and reinforcement learning optimization further improves relevance and consistency. Comparative experiments on large-scale scientific literature datasets demonstrate that the method outperforms existing approaches on ROUGE, BLEU, METEOR, and diversity metrics, validating its effectiveness and practicality. The findings show that combining retrieval augmentation with agent architectures can significantly improve coverage, accuracy, and language quality in review generation, providing a feasible solution for knowledge organization in complex literature environments."
    },
    {
      "paper_id": "10.70121/001c.158711",
      "title": "The Role of Retrieval-Augmented Generation in Improving Factual Accuracy for Medical Large Language Models",
      "summary": "Large Language Models (LLMs) that rely solely on parametric memory learned through training have demonstrated strong performance in biomedical question-answering, but their tendency to hallucinate facts and the difficulty of adjusting and adding to the learned knowledge limit their usefulness in clinical settings. Retrieval-Augmented Generation (RAG) has emerged as a promising solution by adding a non-parametric source of memory and grounding LLM outputs to reputable external sources. This paper aims to survey the evolution of RAG methodologies and highlight the most recent developments and shifts in paradigms like Agentic RAG. We highlight current state-of-the-art biomedical RAG systems, the latest evaluation benchmarks, and empirical findings regarding best fine-tuning practices. We also examine technical including lost-in-the-middle effects and scaling behaviour. Ethical concerns surrounding privacy and bias are brought to attention alongside research gaps. Finally, we discuss future directions of RAG in the biomedical field, including integration into Clinical Decision Support systems (CDS).",
      "authors": "[\"Eason Ni\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-03-15",
      "updated": "2026-03-06T17:18:47+00:00",
      "abs_url": "https://doi.org/10.70121/001c.158711",
      "pdf_url": "https://www.scholarlyreview.org/article/158711-the-role-of-retrieval-augmented-generation-in-improving-factual-accuracy-for-medical-large-language-models.pdf",
      "comment": "Scholarly Review Journal | Leadership & Innovation Lab | journal-article",
      "age_days": 144,
      "authors_joined": "Eason Ni",
      "categories_joined": "",
      "summary_chars": 1112,
      "text_for_embedding": "The Role of Retrieval-Augmented Generation in Improving Factual Accuracy for Medical Large Language Models\n\nLarge Language Models (LLMs) that rely solely on parametric memory learned through training have demonstrated strong performance in biomedical question-answering, but their tendency to hallucinate facts and the difficulty of adjusting and adding to the learned knowledge limit their usefulness in clinical settings. Retrieval-Augmented Generation (RAG) has emerged as a promising solution by adding a non-parametric source of memory and grounding LLM outputs to reputable external sources. This paper aims to survey the evolution of RAG methodologies and highlight the most recent developments and shifts in paradigms like Agentic RAG. We highlight current state-of-the-art biomedical RAG systems, the latest evaluation benchmarks, and empirical findings regarding best fine-tuning practices. We also examine technical including lost-in-the-middle effects and scaling behaviour. Ethical concerns surrounding privacy and bias are brought to attention alongside research gaps. Finally, we discuss future directions of RAG in the biomedical field, including integration into Clinical Decision Support systems (CDS)."
    },
    {
      "paper_id": "10.36227/techrxiv.177272838.89432844/v1",
      "title": "A Survey of (Deep RAG) Deep Retrieval Augmented Generation and Reasoning in Large Language Models",
      "summary": "Retrieval-Augmented Generation (RAG) has emerged as a powerful paradigm for combining large language models with external knowledge sources to produce accurate, context-aware, and verifiable outputs. In this survey, we focus on an advanced instantiation of this paradigm, referred to as Deep RAG, which integrates reasoning, memory, and multi-step planning into end-to-end research workflows. We provide a structured overview of Deep RAG systems, covering key components such as query planning, information retrieval, memory management, and answer generation, as well as practical optimization techniques including supervised fine-tuning, iterative self-evolving, and agentic reinforcement learning. We analyze different planning strategies, adaptive retrieval mechanisms, conflict resolution methods, and multimodal synthesis, highlighting both their strengths and limitations. By categorizing approaches according to workflow types, reasoning strategies, and optimization paradigms, we clarify the current landscape and identify open challenges for evaluation, scalability, and multimodal reasoning. This survey aims to provide a comprehensive roadmap for designing flexible, reliable, and intelligent Deep RAG systems capable of performing complex, real-world research tasks with minimal human supervision.",
      "authors": "[\"Lihui Liu\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-03-05",
      "updated": "2026-06-12T17:00:30+00:00",
      "abs_url": "https://doi.org/10.36227/techrxiv.177272838.89432844/v1",
      "pdf_url": "",
      "comment": "Institute of Electrical and Electronics Engineers (IEEE) | posted-content",
      "age_days": 154,
      "authors_joined": "Lihui Liu",
      "categories_joined": "",
      "summary_chars": 1309,
      "text_for_embedding": "A Survey of (Deep RAG) Deep Retrieval Augmented Generation and Reasoning in Large Language Models\n\nRetrieval-Augmented Generation (RAG) has emerged as a powerful paradigm for combining large language models with external knowledge sources to produce accurate, context-aware, and verifiable outputs. In this survey, we focus on an advanced instantiation of this paradigm, referred to as Deep RAG, which integrates reasoning, memory, and multi-step planning into end-to-end research workflows. We provide a structured overview of Deep RAG systems, covering key components such as query planning, information retrieval, memory management, and answer generation, as well as practical optimization techniques including supervised fine-tuning, iterative self-evolving, and agentic reinforcement learning. We analyze different planning strategies, adaptive retrieval mechanisms, conflict resolution methods, and multimodal synthesis, highlighting both their strengths and limitations. By categorizing approaches according to workflow types, reasoning strategies, and optimization paradigms, we clarify the current landscape and identify open challenges for evaluation, scalability, and multimodal reasoning. This survey aims to provide a comprehensive roadmap for designing flexible, reliable, and intelligent Deep RAG systems capable of performing complex, real-world research tasks with minimal human supervision."
    },
    {
      "paper_id": "10.3390/app16052244",
      "title": "Hybrid Retrieval-Augmented Generation: Semantic and Structural Integration for Large Language Model Reasoning",
      "summary": "Recent GraphRAG methods based on knowledge graphs (KGs) primarily rely on either under-reasoning or a structural path-level retriever, which prevents them from jointly capturing fine-grained semantic relevance and explicit multi-hop reasoning paths. This separation often results in semantic mismatchâ€”where logical links are missingâ€”or structural over-constraint in reasoningâ€” where rigid dependencies limit flexible reasoningâ€”thereby degrading both answer accuracy and the reliability of evidence in complex KGQA tasks. To address these issues, we propose HybRAG, a hybrid retrieval framework that synergistically integrates a semantic node-level retriever and structural path-level retriever. HybRAG constructs a hybrid subgraph that jointly reflects the semantic proximity of entities and the relational structures encoded in the KG. Furthermore, we incorporate retrieval-augmented fine-tuning, which enables the model to internalize advanced reasoning strategies for interpreting disparate semantic and structural signals, rather than merely memorizing domain facts. Through extensive experiments on the WebQSP and CWQ benchmarks, we demonstrate that HybRAG effectively bridges the gap between LLM-centric semantic approaches and GNN-centric structural approaches, outperforming single-retriever baselines. Our findings, including detailed sensitivity and ablation analyses, provide empirical evidence that the systematic alignment of semantic and structural signals is essential for ensuring the reasoning reliability and scalability of next-generation GraphRAG systems.",
      "authors": "[\"Hyewon Lee\", \"Sungsu Lim\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-02-26",
      "updated": "2026-05-14T14:47:26+00:00",
      "abs_url": "https://doi.org/10.3390/app16052244",
      "pdf_url": "",
      "comment": "Applied Sciences | MDPI AG | journal-article",
      "age_days": 161,
      "authors_joined": "Hyewon Lee, Sungsu Lim",
      "categories_joined": "",
      "summary_chars": 1575,
      "text_for_embedding": "Hybrid Retrieval-Augmented Generation: Semantic and Structural Integration for Large Language Model Reasoning\n\nRecent GraphRAG methods based on knowledge graphs (KGs) primarily rely on either under-reasoning or a structural path-level retriever, which prevents them from jointly capturing fine-grained semantic relevance and explicit multi-hop reasoning paths. This separation often results in semantic mismatchâ€”where logical links are missingâ€”or structural over-constraint in reasoningâ€” where rigid dependencies limit flexible reasoningâ€”thereby degrading both answer accuracy and the reliability of evidence in complex KGQA tasks. To address these issues, we propose HybRAG, a hybrid retrieval framework that synergistically integrates a semantic node-level retriever and structural path-level retriever. HybRAG constructs a hybrid subgraph that jointly reflects the semantic proximity of entities and the relational structures encoded in the KG. Furthermore, we incorporate retrieval-augmented fine-tuning, which enables the model to internalize advanced reasoning strategies for interpreting disparate semantic and structural signals, rather than merely memorizing domain facts. Through extensive experiments on the WebQSP and CWQ benchmarks, we demonstrate that HybRAG effectively bridges the gap between LLM-centric semantic approaches and GNN-centric structural approaches, outperforming single-retriever baselines. Our findings, including detailed sensitivity and ablation analyses, provide empirical evidence that the systematic alignment of semantic and structural signals is essential for ensuring the reasoning reliability and scalability of next-generation GraphRAG systems."
    },
    {
      "paper_id": "10.35314/3y9hy151",
      "title": "Implementation of Retrieval-Augmented Generation Method on Large Language Model for Development of Campus Service and Information Chatbot",
      "summary": "Large language models have the potential to improve the quality of information services in higher education environments through responsive and natural interactions. However, LLMs are prone to generating answers that are not supported by valid knowledge sources due to knowledge cut-off limitations. This study implements Retrieval-Augmented Generation on LLMs to build an information service chatbot for the Indonesian University of Science and Technology (USTI). RAG is built using a hybrid retrieval mechanism that combines dense retrieval and sparse retrieval (BM25) through reciprocal rank fusion and is equipped with cross-encoder reranking. The knowledge base is compiled from official and public documents obtained through the USTI website. The evaluation was conducted using 13 test queries by comparing several configurations to analyze the contribution of each component. The evaluation results show that the hybrid retrieval configuration produces the best retrieval performance with Precision@3 of 71.7%, Recall@3 of 87.5%, and NDCG@3 of 96.3%. In addition, the application of RAG improved the quality of answers compared to LLM without retrieval, as shown by an increase in BERTScore-F1 from 84.8% to 89.4% and a faithfulness score of 88.8%. These findings indicate that RAG integration improves the relevance of LLM answers to source documents, with the hybrid configuration providing an optimal balance between retrieval quality and faithfulness.",
      "authors": "[\"Muhammad Dzaki Salman\", \"Rahmaddeni\", \"Torkis Nasution\", \"Susanti\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-02-26",
      "updated": "2026-02-26T15:27:57+00:00",
      "abs_url": "https://doi.org/10.35314/3y9hy151",
      "pdf_url": "https://jurnal.polbeng.ac.id/index.php/ISI/article/download/1484/655",
      "comment": "INOVTEK Polbeng - Seri Informatika | Politeknik Negeri Bengkalis | journal-article",
      "age_days": 161,
      "authors_joined": "Muhammad Dzaki Salman, Rahmaddeni, Torkis Nasution, Susanti",
      "categories_joined": "",
      "summary_chars": 1462,
      "text_for_embedding": "Implementation of Retrieval-Augmented Generation Method on Large Language Model for Development of Campus Service and Information Chatbot\n\nLarge language models have the potential to improve the quality of information services in higher education environments through responsive and natural interactions. However, LLMs are prone to generating answers that are not supported by valid knowledge sources due to knowledge cut-off limitations. This study implements Retrieval-Augmented Generation on LLMs to build an information service chatbot for the Indonesian University of Science and Technology (USTI). RAG is built using a hybrid retrieval mechanism that combines dense retrieval and sparse retrieval (BM25) through reciprocal rank fusion and is equipped with cross-encoder reranking. The knowledge base is compiled from official and public documents obtained through the USTI website. The evaluation was conducted using 13 test queries by comparing several configurations to analyze the contribution of each component. The evaluation results show that the hybrid retrieval configuration produces the best retrieval performance with Precision@3 of 71.7%, Recall@3 of 87.5%, and NDCG@3 of 96.3%. In addition, the application of RAG improved the quality of answers compared to LLM without retrieval, as shown by an increase in BERTScore-F1 from 84.8% to 89.4% and a faithfulness score of 88.8%. These findings indicate that RAG integration improves the relevance of LLM answers to source documents, with the hybrid configuration providing an optimal balance between retrieval quality and faithfulness."
    },
    {
      "paper_id": "10.20944/preprints202602.0996.v1",
      "title": "Clinical Large Language Models with Multi-Stage Instruction Tuning and Advanced Retrieval-Augmented Generation",
      "summary": "The demand for efficient and accurate Clinical Decision Support Systems (CDSS) is growing rapidly, driven by the escalating volume of medical data. While Large Language Models (LLMs) offer significant potential, their direct application in healthcare is limited by issues like hallucinations and lack of domain-specific knowledge. Retrieval-Augmented Generation (RAG) addresses these challenges by grounding LLMs with external knowledge, and recent lightweight RAG-based CDSS have shown promise. Building on this, we propose Enhanced Clinical RAG-LLM (ECRAG-LLM), a novel system designed to elevate performance in complex clinical scenarios. ECRAG-LLM utilizes a robust yet lightweight Mistral-based LLM, integrated with a multi-stage instruction tuning strategy that first adapts to general medical knowledge and then reinforces context-aware and causal reasoning using a custom dataset of structured clinical cases. We employ BioSimCSE for domain-specific embeddings and introduce an enhanced RAG architecture featuring hybrid retrieval, cross-encoder-based contextual re-ranking, and context summarization to optimize retrieved information. Extensive experiments on medical benchmarks demonstrate that ECRAG-LLM consistently outperforms baseline lightweight fine-tuned LLMs, achieving significant improvements in diagnostic accuracy, treatment appropriateness, and explanatory quality, particularly in tasks requiring deep clinical reasoning. An ablation study confirms the synergistic contributions of our innovations, and an error analysis highlights a substantial reduction in critical errors, positioning ECRAG-LLM as a more reliable and intelligent solution for resource-constrained clinical environments.",
      "authors": "[\"Donald Martin\", \"Blake Bowman\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-02-12",
      "updated": "2026-02-13T03:03:17+00:00",
      "abs_url": "https://doi.org/10.20944/preprints202602.0996.v1",
      "pdf_url": "",
      "comment": "MDPI AG | posted-content",
      "age_days": 175,
      "authors_joined": "Donald Martin, Blake Bowman",
      "categories_joined": "",
      "summary_chars": 1713,
      "text_for_embedding": "Clinical Large Language Models with Multi-Stage Instruction Tuning and Advanced Retrieval-Augmented Generation\n\nThe demand for efficient and accurate Clinical Decision Support Systems (CDSS) is growing rapidly, driven by the escalating volume of medical data. While Large Language Models (LLMs) offer significant potential, their direct application in healthcare is limited by issues like hallucinations and lack of domain-specific knowledge. Retrieval-Augmented Generation (RAG) addresses these challenges by grounding LLMs with external knowledge, and recent lightweight RAG-based CDSS have shown promise. Building on this, we propose Enhanced Clinical RAG-LLM (ECRAG-LLM), a novel system designed to elevate performance in complex clinical scenarios. ECRAG-LLM utilizes a robust yet lightweight Mistral-based LLM, integrated with a multi-stage instruction tuning strategy that first adapts to general medical knowledge and then reinforces context-aware and causal reasoning using a custom dataset of structured clinical cases. We employ BioSimCSE for domain-specific embeddings and introduce an enhanced RAG architecture featuring hybrid retrieval, cross-encoder-based contextual re-ranking, and context summarization to optimize retrieved information. Extensive experiments on medical benchmarks demonstrate that ECRAG-LLM consistently outperforms baseline lightweight fine-tuned LLMs, achieving significant improvements in diagnostic accuracy, treatment appropriateness, and explanatory quality, particularly in tasks requiring deep clinical reasoning. An ablation study confirms the synergistic contributions of our innovations, and an error analysis highlights a substantial reduction in critical errors, positioning ECRAG-LLM as a more reliable and intelligent solution for resource-constrained clinical environments."
    },
    {
      "paper_id": "10.1007/s10278-026-02086-9",
      "title": "JADE-Plus: A Multimodal Agentic Retrieval-Augmented Generation Large Language Framework for Diagnostic Support in Jawbone Lesions: Development and Technical Validation Study",
      "summary": "",
      "authors": "[\"Soroush Baseri Saadi\", \"Jonas Ver Berne\", \"Rocharles Cavalcante Fontenele\", \"Peter Claes\", \"Reinhilde Jacobs\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-07-13",
      "updated": "2026-07-13T15:09:05+00:00",
      "abs_url": "https://doi.org/10.1007/s10278-026-02086-9",
      "pdf_url": "https://link.springer.com/content/pdf/10.1007/s10278-026-02086-9.pdf",
      "comment": "Journal of Imaging Informatics in Medicine | Springer Science and Business Media LLC | journal-article",
      "age_days": 24,
      "authors_joined": "Soroush Baseri Saadi, Jonas Ver Berne, Rocharles Cavalcante Fontenele, Peter Claes, Reinhilde Jacobs",
      "categories_joined": "",
      "summary_chars": 0,
      "text_for_embedding": "JADE-Plus: A Multimodal Agentic Retrieval-Augmented Generation Large Language Framework for Diagnostic Support in Jawbone Lesions: Development and Technical Validation Study\n\n"
    }
  ],
  "data/clean/papers_clean_repaired.json": [
    {
      "paper_id": "10.2118/234689-pa",
      "title": "SafeRAG: A Large-Language-Model-Based Multistage Retrieval-Augmented Framework for Oil and Gas Safety Report Generation",
      "summary": "Summary In high-risk industrial settings, leveraging large language models (LLMs) for automated accident analysis and generating safety reports has emerged as an efficient workflow. However, this approach is fundamentally constrained by the modelsâ€™ inherent knowledge limitations, frequently resulting in analyses that lack domain-specific understanding and regulatory alignment. To tackle this issue, we introduce SafeRAG, a multistage retrieval-augmented framework for safety report generation. Specifically, the framework uses an entity-centric approach that prompts the LLMs to internally generate domain-specific knowledge. Concurrently, it performs a hierarchical retrieval of external regulations relevant to the accident at topic, concept, and context levels. To obtain well-structured reports, we leverage prompt engineering, integrating internal and external knowledge. Furthermore, a domain-expert persona is also assigned to help LLMs analyze accidents from a specific perspective. To evaluate our approach, we construct a data set from 10,818 accident-description/report pairs collected from real-world industry reports. Experiments show that SafeRAG substantially outperforms baseline LLMs on metrics that include bidirectional encoder representations from transformers (BERTScore) and bidirectional auto-regressive transformers (BARTScore), demonstrating the effectiveness of our approach.",
      "authors": "[\"Qianwen Cao\", \"Chiyu Zhang\", \"Junxiong Ning\", \"Gongru Li\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-08-01",
      "updated": "2026-08-05T14:55:22+00:00",
      "abs_url": "https://doi.org/10.2118/234689-pa",
      "pdf_url": "https://onepetro.org/SJ/article-pdf/doi/10.2118/234689-PA/5396255/spe-234689-pa.pdf",
      "comment": "SPE Journal | Society of Petroleum Engineers (SPE) | journal-article",
      "age_days": 5,
      "authors_joined": "Qianwen Cao, Chiyu Zhang, Junxiong Ning, Gongru Li",
      "categories_joined": "",
      "summary_chars": 1404,
      "text_for_embedding": "SafeRAG: A Large-Language-Model-Based Multistage Retrieval-Augmented Framework for Oil and Gas Safety Report Generation\n\nSummary In high-risk industrial settings, leveraging large language models (LLMs) for automated accident analysis and generating safety reports has emerged as an efficient workflow. However, this approach is fundamentally constrained by the modelsâ€™ inherent knowledge limitations, frequently resulting in analyses that lack domain-specific understanding and regulatory alignment. To tackle this issue, we introduce SafeRAG, a multistage retrieval-augmented framework for safety report generation. Specifically, the framework uses an entity-centric approach that prompts the LLMs to internally generate domain-specific knowledge. Concurrently, it performs a hierarchical retrieval of external regulations relevant to the accident at topic, concept, and context levels. To obtain well-structured reports, we leverage prompt engineering, integrating internal and external knowledge. Furthermore, a domain-expert persona is also assigned to help LLMs analyze accidents from a specific perspective. To evaluate our approach, we construct a data set from 10,818 accident-description/report pairs collected from real-world industry reports. Experiments show that SafeRAG substantially outperforms baseline LLMs on metrics that include bidirectional encoder representations from transformers (BERTScore) and bidirectional auto-regressive transformers (BARTScore), demonstrating the effectiveness of our approach."
    },
    {
      "paper_id": "10.1007/s10278-026-02086-9",
      "title": "JADE-Plus: A Multimodal Agentic Retrieval-Augmented Generation Large Language Framework for Diagnostic Support in Jawbone Lesions: Development and Technical Validation Study",
      "summary": "Abstract Diagnosing jawbone lesions in oral and maxillofacial radiology remains challenging due to overlapping radiological features and the need for integrated clinical reasoning. This study aimed to develop and validate JADE-Plus, a novel multimodal, agent-controlled retrieval-augmented generation (RAG) framework for diagnostic decision support in jawbone lesion assessment. JADE-Plus was implemented as a cloud-based, tablet-optimized system integrating a vision-language model (VLM) for panoramic radiograph analysis, a knowledge-grounded RAG module, and an agentic verification loop for diagnostic fusion and re-ranking. The system was evaluated using 40 representative jawbone lesion cases and compared with JADE, GPT-5.4, GPT-5.4 VLM, and ORAD. Performance was assessed using Top-1 and Top-3 accuracy, ablation and statistical analyses, intra-model stability, and response time. JADE-Plus achieved the highest diagnostic performance, with a Top-1 accuracy of 90% (36/40; 95% CI 76â€“97%) and a Top-3 accuracy of 100%, with no missed diagnoses. Cochranâ€™s Q test demonstrated significant differences among models for both Top-3 correctness ( Q = 25.66, p Q = 27.55, p",
      "authors": "[\"Soroush Baseri Saadi\", \"Jonas Ver Berne\", \"Rocharles Cavalcante Fontenele\", \"Peter Claes\", \"Reinhilde Jacobs\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-07-13",
      "updated": "2026-07-13T15:09:05+00:00",
      "abs_url": "https://doi.org/10.1007/s10278-026-02086-9",
      "pdf_url": "https://link.springer.com/content/pdf/10.1007/s10278-026-02086-9.pdf",
      "comment": "Journal of Imaging Informatics in Medicine | Springer Science and Business Media LLC | journal-article",
      "age_days": 24,
      "authors_joined": "Soroush Baseri Saadi, Jonas Ver Berne, Rocharles Cavalcante Fontenele, Peter Claes, Reinhilde Jacobs",
      "categories_joined": "",
      "summary_chars": 1172,
      "text_for_embedding": "JADE-Plus: A Multimodal Agentic Retrieval-Augmented Generation Large Language Framework for Diagnostic Support in Jawbone Lesions: Development and Technical Validation Study\n\nAbstract Diagnosing jawbone lesions in oral and maxillofacial radiology remains challenging due to overlapping radiological features and the need for integrated clinical reasoning. This study aimed to develop and validate JADE-Plus, a novel multimodal, agent-controlled retrieval-augmented generation (RAG) framework for diagnostic decision support in jawbone lesion assessment. JADE-Plus was implemented as a cloud-based, tablet-optimized system integrating a vision-language model (VLM) for panoramic radiograph analysis, a knowledge-grounded RAG module, and an agentic verification loop for diagnostic fusion and re-ranking. The system was evaluated using 40 representative jawbone lesion cases and compared with JADE, GPT-5.4, GPT-5.4 VLM, and ORAD. Performance was assessed using Top-1 and Top-3 accuracy, ablation and statistical analyses, intra-model stability, and response time. JADE-Plus achieved the highest diagnostic performance, with a Top-1 accuracy of 90% (36/40; 95% CI 76â€“97%) and a Top-3 accuracy of 100%, with no missed diagnoses. Cochranâ€™s Q test demonstrated significant differences among models for both Top-3 correctness ( Q = 25.66, p Q = 27.55, p"
    },
    {
      "paper_id": "10.21203/rs.3.rs-10178277/v1",
      "title": "Retrieval-Augmented Large-Language-Model-Based Time-Series Forecasting for Cross-Market Equity Analysis",
      "summary": "Abstract Time-series foundation models and retrieval-based augmentation have recently emerged as relevant tools for financial forecasting, yet it remains unclear when explicit historical retrieval helps a pre-trained probabilistic forecaster in noisy equity settings. This study evaluates that question through Cross-Market Retrieval-Augmented Lag-Llama (CM-RAF-Lag-Llama), a controlled framework for comparing Lag-Llama-only forecasts with retrieval-augmented forecasts across emerging and developed market panels. The main validation uses three balanced seven-asset panels, IDX7, US7, and JP7, producing a 48-configuration panel-context-horizon grid across four context lengths and four prediction horizons. The hybrid system retrieves analogous historical windows from an indexed memory and blends the retrieved continuation with the Lag-Llama forecast while preserving the same forecasting backbone. In the same-backbone return validation, at least one retrieval variant reduces Lag-Llama MSE in all 48 configurations, with aggregate lower-error retrieval MSE reductions of 28.85\\% for IDX7, 27.27\\% for US7, and 33.60\\% for JP7. A second OHLCV-derived stock-feature experiment evaluates log-price, log-volume, range-volatility, and 20-day realized-volatility targets across 72 matched configurations. In that experiment, validation-selected RAF reduces MSE relative to Lag-Llama-only in 68 of 72 configurations and records the lowest MSE among the compared systems in 22 configurations, including 17 of 18 non-log-price US7 settings. A mechanism-level single-series ablation further compares Lag-Llama-only against Lag-Llama + RAF under zero-shot and scheduler-based inference, showing that retrieval effects are horizon-sensitive. The results indicate that retrieval can serve as an external-memory correction for Lag-Llama under selected equity targets, especially when volatility or volume structure provides reusable historical analogs.",
      "authors": "[\"Novanto Yudistira\", \"Yanuar Putra Kharisma Adhiyasa\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-07-10",
      "updated": "2026-07-10T18:20:32+00:00",
      "abs_url": "https://doi.org/10.21203/rs.3.rs-10178277/v1",
      "pdf_url": "",
      "comment": "Springer Science and Business Media LLC | posted-content",
      "age_days": 27,
      "authors_joined": "Novanto Yudistira, Yanuar Putra Kharisma Adhiyasa",
      "categories_joined": "",
      "summary_chars": 1945,
      "text_for_embedding": "Retrieval-Augmented Large-Language-Model-Based Time-Series Forecasting for Cross-Market Equity Analysis\n\nAbstract Time-series foundation models and retrieval-based augmentation have recently emerged as relevant tools for financial forecasting, yet it remains unclear when explicit historical retrieval helps a pre-trained probabilistic forecaster in noisy equity settings. This study evaluates that question through Cross-Market Retrieval-Augmented Lag-Llama (CM-RAF-Lag-Llama), a controlled framework for comparing Lag-Llama-only forecasts with retrieval-augmented forecasts across emerging and developed market panels. The main validation uses three balanced seven-asset panels, IDX7, US7, and JP7, producing a 48-configuration panel-context-horizon grid across four context lengths and four prediction horizons. The hybrid system retrieves analogous historical windows from an indexed memory and blends the retrieved continuation with the Lag-Llama forecast while preserving the same forecasting backbone. In the same-backbone return validation, at least one retrieval variant reduces Lag-Llama MSE in all 48 configurations, with aggregate lower-error retrieval MSE reductions of 28.85\\% for IDX7, 27.27\\% for US7, and 33.60\\% for JP7. A second OHLCV-derived stock-feature experiment evaluates log-price, log-volume, range-volatility, and 20-day realized-volatility targets across 72 matched configurations. In that experiment, validation-selected RAF reduces MSE relative to Lag-Llama-only in 68 of 72 configurations and records the lowest MSE among the compared systems in 22 configurations, including 17 of 18 non-log-price US7 settings. A mechanism-level single-series ablation further compares Lag-Llama-only against Lag-Llama + RAF under zero-shot and scheduler-based inference, showing that retrieval effects are horizon-sensitive. The results indicate that retrieval can serve as an external-memory correction for Lag-Llama under selected equity targets, especially when volatility or volume structure provides reusable historical analogs."
    },
    {
      "paper_id": "10.2196/preprints.106157",
      "title": "Does retrieval-augmented generation impact medical studentsâ€™ perceptions of large language models? (Preprint)",
      "summary": "BACKGROUND There is evidence of rapid adoption of large language models (LLMs) in undergraduate medical education, with medical students using it to support their learning. This raises concerns particularly around the accuracy of LLM-generated information students are learning. Retrieval-augmented generation (RAG), which grounds a LLM in curated materials, may be a strategy to improve their accuracy. OBJECTIVE This study investigates if grounding LLM outputs in verifiable sources using RAG impacts trust and perceived usability amongst medical students. METHODS In a four-month qualitative study, second-year medical students at Bristol Medical School used a RAG-enabled LLM (NotebookLM) to help them learn course content. Following this, their perspectives were explored using a focus group and survey was. Qualitative data was analysed using thematic analysis and was supplemented by Likert scale data. RESULTS RAG-based LLMs were perceived as more reliable than standard LLM responses mainly due to the transparency of and control over information sources. The system functioned as an accessible, on-demand learning resource, improving efficiency and supporting self-directed study. Students continued to use strategies to cross check generated information. They demonstrated some awareness of ethical concerns, mostly around the environmental impact of LLMs and data privacy. CONCLUSIONS These findings suggest that RAG may enhance studentsâ€™ trust in LLM outputs while maintaining their benefit as a flexible â€˜study partnerâ€™. It highlights RAG as a strategy that educators can use to support students who use LLMs in the context of increasing. However, the impact of RAG-based LLMs over a longer period and on learning outcomes requires further evaluation.",
      "authors": "[\"Rohin Athavale\", \"Alexander Cresswell\", \"Alice Huffman\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-07-03",
      "updated": "2026-07-06T04:15:50+00:00",
      "abs_url": "https://doi.org/10.2196/preprints.106157",
      "pdf_url": "",
      "comment": "JMIR Publications Inc. | posted-content",
      "age_days": 34,
      "authors_joined": "Rohin Athavale, Alexander Cresswell, Alice Huffman",
      "categories_joined": "",
      "summary_chars": 1765,
      "text_for_embedding": "Does retrieval-augmented generation impact medical studentsâ€™ perceptions of large language models? (Preprint)\n\nBACKGROUND There is evidence of rapid adoption of large language models (LLMs) in undergraduate medical education, with medical students using it to support their learning. This raises concerns particularly around the accuracy of LLM-generated information students are learning. Retrieval-augmented generation (RAG), which grounds a LLM in curated materials, may be a strategy to improve their accuracy. OBJECTIVE This study investigates if grounding LLM outputs in verifiable sources using RAG impacts trust and perceived usability amongst medical students. METHODS In a four-month qualitative study, second-year medical students at Bristol Medical School used a RAG-enabled LLM (NotebookLM) to help them learn course content. Following this, their perspectives were explored using a focus group and survey was. Qualitative data was analysed using thematic analysis and was supplemented by Likert scale data. RESULTS RAG-based LLMs were perceived as more reliable than standard LLM responses mainly due to the transparency of and control over information sources. The system functioned as an accessible, on-demand learning resource, improving efficiency and supporting self-directed study. Students continued to use strategies to cross check generated information. They demonstrated some awareness of ethical concerns, mostly around the environmental impact of LLMs and data privacy. CONCLUSIONS These findings suggest that RAG may enhance studentsâ€™ trust in LLM outputs while maintaining their benefit as a flexible â€˜study partnerâ€™. It highlights RAG as a strategy that educators can use to support students who use LLMs in the context of increasing. However, the impact of RAG-based LLMs over a longer period and on learning outcomes requires further evaluation."
    },
    {
      "paper_id": "10.3390/buildings16132637",
      "title": "An Agentic AI System for Roof Design Compliance Using Computer Vision, Retrieval-Augmented Generation and Large Language Models",
      "summary": "Designers, engineers, and building officials face increasing pressure to accelerate and improve the accuracy of design review for buildings and infrastructure. Roof assemblies and rooftop structures are particularly challenging due to the complexity and fragmentation of regulatory requirements, especially in jurisdictions such as Florida, where compliance must be verified across both the residential and commercial volumes of the Florida Building Code (FBC). The resulting review process is technically demanding and time-intensive, imposing significant cognitive and operational burdens on practitioners and under-resourced public agencies. To address these challenges, this study proposes and evaluates an agentic artificial intelligence (AI) framework for automated code compliance checking of roof assemblies and rooftop structures. The framework employs a multi-agent architecture in which specialized AI agents collaboratively interpret regulatory provisions and evaluate roof design parameters across four core modules: data preprocessing and code ingestion, rule-based and semantic analysis, results visualization, and iterative validation. YOLO11m-seg and Mask R-CNN were used for element detection and segmentation, and the system was developed using 150 design projects, including roof plans, section details, and specifications. Four large language models from two families (Mistral and GPT) were comparatively evaluated on standardized compliance tasks. The framework was then tested on a held-out portfolio of 15 distinct roof-design projects comprising 60 code-compliance decisions derived from the FBC 2023, with performance measured by precision, recall, F1-score, and accuracy. GPT-5.4 achieved the highest overall performance (F1 = 0.97; accuracy = 97%). Because the reasoning and vision components were evaluated separately rather than as an integrated end-to-end pipeline, and the scope was limited to one jurisdiction and two drawing types, broader code coverage and production-setting validation are needed before claims of generality. Nonetheless, the results suggest that agentic AI can meaningfully support compliance review and reduce reviewer burden in roof-design permitting.",
      "authors": "[\"Nawari O. Nawari\", \"Oluwatoyin O. Lawal\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-07-02",
      "updated": "2026-07-02T11:43:51+00:00",
      "abs_url": "https://doi.org/10.3390/buildings16132637",
      "pdf_url": "",
      "comment": "Buildings | MDPI AG | journal-article",
      "age_days": 35,
      "authors_joined": "Nawari O. Nawari, Oluwatoyin O. Lawal",
      "categories_joined": "",
      "summary_chars": 2207,
      "text_for_embedding": "An Agentic AI System for Roof Design Compliance Using Computer Vision, Retrieval-Augmented Generation and Large Language Models\n\nDesigners, engineers, and building officials face increasing pressure to accelerate and improve the accuracy of design review for buildings and infrastructure. Roof assemblies and rooftop structures are particularly challenging due to the complexity and fragmentation of regulatory requirements, especially in jurisdictions such as Florida, where compliance must be verified across both the residential and commercial volumes of the Florida Building Code (FBC). The resulting review process is technically demanding and time-intensive, imposing significant cognitive and operational burdens on practitioners and under-resourced public agencies. To address these challenges, this study proposes and evaluates an agentic artificial intelligence (AI) framework for automated code compliance checking of roof assemblies and rooftop structures. The framework employs a multi-agent architecture in which specialized AI agents collaboratively interpret regulatory provisions and evaluate roof design parameters across four core modules: data preprocessing and code ingestion, rule-based and semantic analysis, results visualization, and iterative validation. YOLO11m-seg and Mask R-CNN were used for element detection and segmentation, and the system was developed using 150 design projects, including roof plans, section details, and specifications. Four large language models from two families (Mistral and GPT) were comparatively evaluated on standardized compliance tasks. The framework was then tested on a held-out portfolio of 15 distinct roof-design projects comprising 60 code-compliance decisions derived from the FBC 2023, with performance measured by precision, recall, F1-score, and accuracy. GPT-5.4 achieved the highest overall performance (F1 = 0.97; accuracy = 97%). Because the reasoning and vision components were evaluated separately rather than as an integrated end-to-end pipeline, and the scope was limited to one jurisdiction and two drawing types, broader code coverage and production-setting validation are needed before claims of generality. Nonetheless, the results suggest that agentic AI can meaningfully support compliance review and reduce reviewer burden in roof-design permitting."
    },
    {
      "paper_id": "10.21079/11681/50309",
      "title": "Microsoft Azure artificial intelligence / machine learning hackathon for development of retrieval-augmented generation large language model",
      "summary": "The US Army Corps of Engineers (USACE) Civil Works (CW) research and development (R&D) mission is to address challenging environmental sustainability problems through innovative science and engineering, which helps to ensure a safer, more prosperous, and more resilient nation. To achieve this, the US Army Engineer Research and Development Center (ERDC) plans, executes, leads, and directs many R&D programs in coordination with USACE Headquarters, Districts, and Divisions through its multiple strategic focus areas, which include infrastructure, water modeling, crisis preparedness, ecosystem, sediment management, data, artificial intelligence, and robotics. In this process, much information is generated, including internal progress reviews, financial reports, scopes of work, work package planning, and success stories.",
      "authors": "[\"Janet L. Autrey\", \"Lacey S. Duckworth\", \"Ashly N. Horner\", \"Thomas Sigler\", \"Victoria D. Moore\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-07-01",
      "updated": "2026-07-10T15:16:13+00:00",
      "abs_url": "https://doi.org/10.21079/11681/50309",
      "pdf_url": "",
      "comment": "U.S. Army Engineer Research and Development Center | report",
      "age_days": 36,
      "authors_joined": "Janet L. Autrey, Lacey S. Duckworth, Ashly N. Horner, Thomas Sigler, Victoria D. Moore",
      "categories_joined": "",
      "summary_chars": 826,
      "text_for_embedding": "Microsoft Azure artificial intelligence / machine learning hackathon for development of retrieval-augmented generation large language model\n\nThe US Army Corps of Engineers (USACE) Civil Works (CW) research and development (R&D) mission is to address challenging environmental sustainability problems through innovative science and engineering, which helps to ensure a safer, more prosperous, and more resilient nation. To achieve this, the US Army Engineer Research and Development Center (ERDC) plans, executes, leads, and directs many R&D programs in coordination with USACE Headquarters, Districts, and Divisions through its multiple strategic focus areas, which include infrastructure, water modeling, crisis preparedness, ecosystem, sediment management, data, artificial intelligence, and robotics. In this process, much information is generated, including internal progress reviews, financial reports, scopes of work, work package planning, and success stories."
    },
    {
      "paper_id": "10.1111/exsy.70341",
      "title": "Hiâ€ RAG : A Hierarchical Retrievalâ€Augmented Generation Framework for Scalable and Generalisable Tool Selection in Large Language Model Agents",
      "summary": "ABSTRACT As tool repositories for Large Language Model (LLM) agents grow from dozens to hundreds of endpoints, flat retrieval paradigms that treat the repository as an unstructured list suffer from context overload, crossâ€domain semantic collision and degraded selection accuracy. We propose Hiâ€RAG, a Hierarchical Retrievalâ€Augmented Generation framework that exploits the Type Service Tool structure of the Model Context Protocol (MCP) via a principled coarseâ€toâ€fine pipeline. Stage 1 applies a Toolâ€asâ€Proxy hybrid retrieval strategy (BM25 sparse retrieval combined with dense biâ€encoder search, fused via Weighted Reciprocal Rank Fusion) to identify candidate services efficiently. Stage 2 performs typeâ€aware reâ€ranking over a local heterogeneous graph, integrating a domainâ€level gating mechanism with contextualised tool attention for precise service scoring. We further introduce MCPBench , the first benchmark for hierarchical tool selection, comprising 201 tools across 40 realâ€enterprise servicesâ€”23% of queries require multiâ€service reasoning. Experiments across five LLMs show Hiâ€RAG improves Topâ€1 accuracy by up to 7.5% (singleâ€service) and 10.0% (multiâ€service) over Flatâ€RAG, while reducing token consumption by up to 89% against fullâ€context injection. Comparisons with a strong lateâ€interaction baseline (ColBERTâ€RAG) further confirm the superiority of Hiâ€RAG. Zeroâ€shot evaluation on ToolLLM (16,464 tools) confirms scalability, and formal analyses establish context growth with respect to repository size.",
      "authors": "[\"Wei Tian\", \"Yuhao Zhou\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-06-30",
      "updated": "2026-07-16T10:07:33+00:00",
      "abs_url": "https://doi.org/10.1111/exsy.70341",
      "pdf_url": "https://onlinelibrary.wiley.com/doi/pdf/10.1111/exsy.70341",
      "comment": "Expert Systems | Wiley | journal-article",
      "age_days": 37,
      "authors_joined": "Wei Tian, Yuhao Zhou",
      "categories_joined": "",
      "summary_chars": 1527,
      "text_for_embedding": "Hiâ€ RAG : A Hierarchical Retrievalâ€Augmented Generation Framework for Scalable and Generalisable Tool Selection in Large Language Model Agents\n\nABSTRACT As tool repositories for Large Language Model (LLM) agents grow from dozens to hundreds of endpoints, flat retrieval paradigms that treat the repository as an unstructured list suffer from context overload, crossâ€domain semantic collision and degraded selection accuracy. We propose Hiâ€RAG, a Hierarchical Retrievalâ€Augmented Generation framework that exploits the Type Service Tool structure of the Model Context Protocol (MCP) via a principled coarseâ€toâ€fine pipeline. Stage 1 applies a Toolâ€asâ€Proxy hybrid retrieval strategy (BM25 sparse retrieval combined with dense biâ€encoder search, fused via Weighted Reciprocal Rank Fusion) to identify candidate services efficiently. Stage 2 performs typeâ€aware reâ€ranking over a local heterogeneous graph, integrating a domainâ€level gating mechanism with contextualised tool attention for precise service scoring. We further introduce MCPBench , the first benchmark for hierarchical tool selection, comprising 201 tools across 40 realâ€enterprise servicesâ€”23% of queries require multiâ€service reasoning. Experiments across five LLMs show Hiâ€RAG improves Topâ€1 accuracy by up to 7.5% (singleâ€service) and 10.0% (multiâ€service) over Flatâ€RAG, while reducing token consumption by up to 89% against fullâ€context injection. Comparisons with a strong lateâ€interaction baseline (ColBERTâ€RAG) further confirm the superiority of Hiâ€RAG. Zeroâ€shot evaluation on ToolLLM (16,464 tools) confirms scalability, and formal analyses establish context growth with respect to repository size."
    },
    {
      "paper_id": "10.63646/kpqm1958",
      "title": "The Age of Autonomous Agents: A Bibliometric Review of Agentic AI Architectures, Applications, and Emerging Challenges",
      "summary": "The rapid evolution of large language models (LLMs) has catalyzed a shift from passive AI systems toward autonomous agentic architectures capable of reasoning, memory, tool use, and multi-agent collaboration. This bibliometric review characterizes the emerging field through 810 publications retrieved from the Web of Science Core Collection for the period 2023â€“2025. Annual output rose sharply over this windowâ€”from 4 publications in 2023 to 96 in 2024 and 710 in 2025â€”accompanied by a parallel rise in citations, indicating rapid mainstream adoption. Author-keyword analysis reveals a landscape dominated by large language models, artificial intelligence, and multi-agent systems, with agentic AI, generative AI, and retrieval-augmented generation (RAG) emerging as core themes. Research output is geographically concentrated, led by China and the United States, and is distributed across a broad range of engineering, applied-science, and domain-specific journals rather than a single specialist venue, reflecting the field's cross-disciplinary uptake. Synthesizing this corpus, we organize the technical landscape around reasoning, memory, tool integration and RAG, and multi-agent orchestration; survey application domains spanning healthcare, scientific discovery, education, and software engineering, with emerging activity in finance and law; and analyze the principal challengesâ€”hallucination, trust and robustness, inter-agent coordination, scalability, and governance. The review provides a structured, evidence-based map of agentic AI research to orient researchers and practitioners navigating this rapidly evolving field.",
      "authors": "[\"Ben J. Weber\", \"Clara M. Hofmann\", \"Amara N. Okoye\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-06-30",
      "updated": "2026-07-17T02:04:13+00:00",
      "abs_url": "https://doi.org/10.63646/kpqm1958",
      "pdf_url": "https://inatgi.net/index.php/jaiaa/article/download/806/945",
      "comment": "Journal of AI Analytics and Applications | Institute of Advanced Technology and Green Innovation LLC | journal-article",
      "age_days": 37,
      "authors_joined": "Ben J. Weber, Clara M. Hofmann, Amara N. Okoye",
      "categories_joined": "",
      "summary_chars": 1635,
      "text_for_embedding": "The Age of Autonomous Agents: A Bibliometric Review of Agentic AI Architectures, Applications, and Emerging Challenges\n\nThe rapid evolution of large language models (LLMs) has catalyzed a shift from passive AI systems toward autonomous agentic architectures capable of reasoning, memory, tool use, and multi-agent collaboration. This bibliometric review characterizes the emerging field through 810 publications retrieved from the Web of Science Core Collection for the period 2023â€“2025. Annual output rose sharply over this windowâ€”from 4 publications in 2023 to 96 in 2024 and 710 in 2025â€”accompanied by a parallel rise in citations, indicating rapid mainstream adoption. Author-keyword analysis reveals a landscape dominated by large language models, artificial intelligence, and multi-agent systems, with agentic AI, generative AI, and retrieval-augmented generation (RAG) emerging as core themes. Research output is geographically concentrated, led by China and the United States, and is distributed across a broad range of engineering, applied-science, and domain-specific journals rather than a single specialist venue, reflecting the field's cross-disciplinary uptake. Synthesizing this corpus, we organize the technical landscape around reasoning, memory, tool integration and RAG, and multi-agent orchestration; survey application domains spanning healthcare, scientific discovery, education, and software engineering, with emerging activity in finance and law; and analyze the principal challengesâ€”hallucination, trust and robustness, inter-agent coordination, scalability, and governance. The review provides a structured, evidence-based map of agentic AI research to orient researchers and practitioners navigating this rapidly evolving field."
    },
    {
      "paper_id": "10.21203/rs.3.rs-10012178/v1",
      "title": "Retrieval-Augmented Generation (RAG), Generative AI, and Agentic AI Governance: An Integrated Enterprise Governance Prioritization Architecture",
      "summary": "Abstract Enterprise adoption of artificial intelligence (AI) systems, including Generative AI (GenAI), Retrieval-Augmented Generation (RAG), and agentic AI, is advancing faster than many organizations can adapt their governance, audit, cybersecurity, and executive oversight practices. This paper develops a proposed integrated AI governance prioritization architecture using a design-science research approach, supported by exploratory platform-risk analysis, a reproducible platform-risk dataset, a Monte Carlo robustness assessment, a framework coverage matrix, a Governance Priority Score (GPS)-based demonstration, and a public-document relevance assessment. The primary contribution is an integrated governance decision-support architecture that uses the Enterprise AI Platform Taxonomy (EAPT) to estimate platform burden, the Enterprise AI Risk Taxonomy (EART) to organize governance-risk exposure, the Enterprise AI Governance Maturity Model (EAGM) to represent organizational readiness, and the Integrated Agentic AI Governance Framework (IAGF) to identify agentic AI oversight requirements within a unified workflow. These components are operationally connected through GPS, which links platform burden, governancerisk gaps, organizational readiness, agentic runtime-control needs, and executive decision support. The proposed architecture draws upon NIST AI RMF, NIST AI 600-1, ISO/IEC 42001, COBIT, OWASP LLM Top 10, MITRE ATLAS, the EU AI Act, and related AI governance literature. A rubric-based analytical dataset covering 19 enterprise AI platforms evaluates each platform across eight subdimensions, with final platform-risk scores computed as the arithmetic mean of data access scope, operational autonomy, tool/API integration breadth, external connectivity, governance burden, cybersecurity exposure, adoption and shadow-AI risk, and supply-chain integrity. TThe expanded scoring method produces high rank stability relative to the original final-score dataset, with Spearmanâ€™s Ï = 0.996, and remains directionally stable under coding-uncertainty stress testing; these results are interpreted only as internal coding stability and robustness, not external validation. Public evidence from U.S. government agencies, universities, healthcare systems, and financial institutions is used to assess architecture relevance and observability, not to claim organizational effectiveness. The paper contributes a bounded design-science foundation for future inter-rater reliability testing, Delphi expert validation, organizational pilots, psychometric evaluation, and dashboard usability assessment.",
      "authors": "[\"Audrey Rah\", \"Sven Hahues\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-06-15",
      "updated": "2026-06-15T06:52:56+00:00",
      "abs_url": "https://doi.org/10.21203/rs.3.rs-10012178/v1",
      "pdf_url": "",
      "comment": "Springer Science and Business Media LLC | posted-content",
      "age_days": 52,
      "authors_joined": "Audrey Rah, Sven Hahues",
      "categories_joined": "",
      "summary_chars": 2610,
      "text_for_embedding": "Retrieval-Augmented Generation (RAG), Generative AI, and Agentic AI Governance: An Integrated Enterprise Governance Prioritization Architecture\n\nAbstract Enterprise adoption of artificial intelligence (AI) systems, including Generative AI (GenAI), Retrieval-Augmented Generation (RAG), and agentic AI, is advancing faster than many organizations can adapt their governance, audit, cybersecurity, and executive oversight practices. This paper develops a proposed integrated AI governance prioritization architecture using a design-science research approach, supported by exploratory platform-risk analysis, a reproducible platform-risk dataset, a Monte Carlo robustness assessment, a framework coverage matrix, a Governance Priority Score (GPS)-based demonstration, and a public-document relevance assessment. The primary contribution is an integrated governance decision-support architecture that uses the Enterprise AI Platform Taxonomy (EAPT) to estimate platform burden, the Enterprise AI Risk Taxonomy (EART) to organize governance-risk exposure, the Enterprise AI Governance Maturity Model (EAGM) to represent organizational readiness, and the Integrated Agentic AI Governance Framework (IAGF) to identify agentic AI oversight requirements within a unified workflow. These components are operationally connected through GPS, which links platform burden, governancerisk gaps, organizational readiness, agentic runtime-control needs, and executive decision support. The proposed architecture draws upon NIST AI RMF, NIST AI 600-1, ISO/IEC 42001, COBIT, OWASP LLM Top 10, MITRE ATLAS, the EU AI Act, and related AI governance literature. A rubric-based analytical dataset covering 19 enterprise AI platforms evaluates each platform across eight subdimensions, with final platform-risk scores computed as the arithmetic mean of data access scope, operational autonomy, tool/API integration breadth, external connectivity, governance burden, cybersecurity exposure, adoption and shadow-AI risk, and supply-chain integrity. TThe expanded scoring method produces high rank stability relative to the original final-score dataset, with Spearmanâ€™s Ï = 0.996, and remains directionally stable under coding-uncertainty stress testing; these results are interpreted only as internal coding stability and robustness, not external validation. Public evidence from U.S. government agencies, universities, healthcare systems, and financial institutions is used to assess architecture relevance and observability, not to claim organizational effectiveness. The paper contributes a bounded design-science foundation for future inter-rater reliability testing, Delphi expert validation, organizational pilots, psychometric evaluation, and dashboard usability assessment."
    },
    {
      "paper_id": "10.47576/2949-1894.2026.7.7.023",
      "title": "Ð¡Ð½Ð¸Ð¶ÐµÐ½Ð¸Ðµ Ñ€Ð¸ÑÐºÐ¾Ð² Ð¿Ñ€Ð¸Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ LLM (Large Language Model) Ð² ÑÑ„ÐµÑ€Ðµ ÑÐºÐ¾Ð½Ð¾Ð¼Ð¸Ñ‡ÐµÑÐºÐ¾Ð¹ Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ÑÑ‚Ð¸ Ð¿Ñ€ÐµÐ´Ð¿Ñ€Ð¸ÑÑ‚Ð¸Ð¹ Ð¼Ð¾Ð»Ð¾Ñ‡Ð½Ð¾Ð¹ Ð¿Ñ€Ð¾Ð¼Ñ‹ÑˆÐ»ÐµÐ½Ð½Ð¾ÑÑ‚Ð¸ Ð½Ð° Ð¾ÑÐ½Ð¾Ð²Ðµ Ð¿Ð¾Ð´Ñ…Ð¾Ð´Ð° RAG (Retrieval-Augmented Generation)",
      "summary": "Ð’ ÑÑ‚Ð°Ñ‚ÑŒÐµ Ð¿Ñ€Ð¾Ð²ÐµÐ´ÐµÐ½Ð¾ Ð¸ÑÑÐ»ÐµÐ´Ð¾Ð²Ð°Ð½Ð¸Ðµ Ð¾ÑÐ¾Ð±ÐµÐ½Ð½Ð¾ÑÑ‚ÐµÐ¹ ÑÐ½Ð¸Ð¶ÐµÐ½Ð¸Ñ Ñ€Ð¸ÑÐºÐ¾Ð² Ð¿Ñ€Ð¸Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ LLM (Large Language Model) Ð² ÑÑ„ÐµÑ€Ðµ ÑÐºÐ¾Ð½Ð¾Ð¼Ð¸Ñ‡ÐµÑÐºÐ¾Ð¹ Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ÑÑ‚Ð¸ Ð¿Ñ€ÐµÐ´Ð¿Ñ€Ð¸ÑÑ‚Ð¸Ð¹ Ð¼Ð¾Ð»Ð¾Ñ‡Ð½Ð¾Ð¹ Ð¿Ñ€Ð¾Ð¼Ñ‹ÑˆÐ»ÐµÐ½Ð½Ð¾ÑÑ‚Ð¸ Ð½Ð° Ð¾ÑÐ½Ð¾Ð²Ðµ Ð¿Ð¾Ð´Ñ…Ð¾Ð´Ð° RAG (Retrieval-Augmented Generation) Ð² ÑÐ¾Ð²Ñ€ÐµÐ¼ÐµÐ½Ð½Ñ‹Ñ… ÑƒÑÐ»Ð¾Ð²Ð¸ÑÑ…. Ð Ð°ÑÑÐ¼Ð¾Ñ‚Ñ€ÐµÐ½Ñ‹ Ñ€Ð¸ÑÐºÐ¸ Ð¿Ñ€Ð¸Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ LLM Ð² ÑÑ„ÐµÑ€Ðµ ÑÐºÐ¾Ð½Ð¾Ð¼Ð¸Ñ‡ÐµÑÐºÐ¾Ð¹ Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ÑÑ‚Ð¸ Ð¿Ñ€ÐµÐ´Ð¿Ñ€Ð¸ÑÑ‚Ð¸Ð¹ Ð¼Ð¾Ð»Ð¾Ñ‡Ð½Ð¾Ð¹ Ð¿Ñ€Ð¾Ð¼Ñ‹ÑˆÐ»ÐµÐ½Ð½Ð¾ÑÑ‚Ð¸. ÐŸÐ¾Ð´Ñ€Ð¾Ð±Ð½Ð¾ Ñ€Ð°Ð·Ð¾Ð±Ñ€Ð°Ð½Ñ‹ ÑÑ†ÐµÐ½Ð°Ñ€Ð¸Ð¸ Ð¿Ñ€Ð¸Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ LLM+RAG Ð² Ñ€Ð¾ÑÑÐ¸Ð¹ÑÐºÐ¾Ð¹ Ð¼Ð¾Ð»Ð¾Ñ‡Ð½Ð¾Ð¹ Ð¿Ñ€Ð¾Ð¼Ñ‹ÑˆÐ»ÐµÐ½Ð½Ð¾ÑÑ‚Ð¸ â€“ Ñ Ð¾Ð¿Ð¸ÑÐ°Ð½Ð¸ÐµÐ¼ Ð¿Ñ€Ð¾Ñ†ÐµÑÑÐ°, Ð·Ð°Ð´ÐµÐ¹ÑÑ‚Ð²Ð¾Ð²Ð°Ð½Ð½Ñ‹Ñ… Ð´Ð°Ð½Ð½Ñ‹Ñ…, Ñ€ÐµÑˆÐ°ÐµÐ¼Ñ‹Ñ… Ñ€Ð¸ÑÐºÐ¾Ð² Ð¸ Ð´Ð¾ÑÑ‚Ð¸Ð³Ð½ÑƒÑ‚Ñ‹Ñ… Ñ€ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚Ð¾Ð². ÐŸÐ¾ÐºÐ°Ð·Ð°Ð½Ð¾, Ñ‡Ñ‚Ð¾ Ð² Ñ€ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚Ðµ Ð¸Ð½Ñ‚ÐµÐ³Ñ€Ð°Ñ†Ð¸Ñ RAG Ñ LLM Ñ‚Ñ€Ð°Ð½ÑÑ„Ð¾Ñ€Ð¼Ð¸Ñ€ÑƒÐµÑ‚ Ð³ÐµÐ½ÐµÑ€Ð°Ñ‚Ð¸Ð²Ð½ÑƒÑŽ Ð¼Ð¾Ð´ÐµÐ»ÑŒ Ð¸Ð· Ð¿Ð¾Ñ‚ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½Ð¾ Ð¾Ð¿Ð°ÑÐ½Ð¾Ð³Ð¾ Ð¸Ð½ÑÑ‚Ñ€ÑƒÐ¼ÐµÐ½Ñ‚Ð° Ð² Ð½Ð°Ð´ÐµÐ¶Ð½Ñ‹Ð¹ Ð¼ÐµÑ…Ð°Ð½Ð¸Ð·Ð¼ Ð¿Ð¾Ð´Ð´ÐµÑ€Ð¶ÐºÐ¸ Ð¿Ñ€Ð¸Ð½ÑÑ‚Ð¸Ñ Ñ€ÐµÑˆÐµÐ½Ð¸Ð¹ â€“ Ð¾Ñ‚ Ð¼Ð¾Ð½Ð¸Ñ‚Ð¾Ñ€Ð¸Ð½Ð³Ð° ÑƒÐ³Ñ€Ð¾Ð· Ñ„Ð°Ð»ÑŒÑÐ¸Ñ„Ð¸ÐºÐ°Ñ†Ð¸Ð¸ Ð´Ð¾ Ð¿Ñ€Ð¾Ð³Ð½Ð¾Ð·Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð¸Ñ ÑÐºÐ¾Ð½Ð¾Ð¼Ð¸Ñ‡ÐµÑÐºÐ¸Ñ… Ð¿Ð¾ÐºÐ°Ð·Ð°Ñ‚ÐµÐ»ÐµÐ¹ Ñ ÑƒÑ‡ÐµÑ‚Ð¾Ð¼ Ð¾Ñ‚Ñ€Ð°ÑÐ»ÐµÐ²Ð¾Ð¹ ÑÐ¿ÐµÑ†Ð¸Ñ„Ð¸ÐºÐ¸. The article examines the features of reducing the risks of using LLM (Large Language Model) in the field of economic security of dairy industry enterprises based on the RAG (Retrieval-Augmented Generation) approach in modern conditions. The risks of using LLM in the field of economic security of dairy industry enterprises are considered. The scenarios of LLM+RAG application in the Russian dairy industry are analyzed in detail, describing the process, the data involved, the risks to be solved and the results achieved. It is shown that as a result, the integration of RAG with LLM transforms the generative model from a potentially dangerous tool into a reliable decision support mechanism, from monitoring fraud threats to forecasting economic indicators based on industry specifics.",
      "authors": "[\"Ð˜.Ð’. Ð•Ñ€Ð¼Ð°ÐºÐ¾Ð²\", \"Ð’.Ð’. Ð¤Ð¸Ð»Ð°Ñ‚Ð¾Ð²\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-06-15",
      "updated": "2026-06-17T08:52:47+00:00",
      "abs_url": "https://doi.org/10.47576/2949-1894.2026.7.7.023",
      "pdf_url": "",
      "comment": "Innovative economy: information, analytics, forecasts | Publishing house Pegas | journal-article",
      "age_days": 52,
      "authors_joined": "Ð˜.Ð’. Ð•Ñ€Ð¼Ð°ÐºÐ¾Ð², Ð’.Ð’. Ð¤Ð¸Ð»Ð°Ñ‚Ð¾Ð²",
      "categories_joined": "",
      "summary_chars": 1597,
      "text_for_embedding": "Ð¡Ð½Ð¸Ð¶ÐµÐ½Ð¸Ðµ Ñ€Ð¸ÑÐºÐ¾Ð² Ð¿Ñ€Ð¸Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ LLM (Large Language Model) Ð² ÑÑ„ÐµÑ€Ðµ ÑÐºÐ¾Ð½Ð¾Ð¼Ð¸Ñ‡ÐµÑÐºÐ¾Ð¹ Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ÑÑ‚Ð¸ Ð¿Ñ€ÐµÐ´Ð¿Ñ€Ð¸ÑÑ‚Ð¸Ð¹ Ð¼Ð¾Ð»Ð¾Ñ‡Ð½Ð¾Ð¹ Ð¿Ñ€Ð¾Ð¼Ñ‹ÑˆÐ»ÐµÐ½Ð½Ð¾ÑÑ‚Ð¸ Ð½Ð° Ð¾ÑÐ½Ð¾Ð²Ðµ Ð¿Ð¾Ð´Ñ…Ð¾Ð´Ð° RAG (Retrieval-Augmented Generation)\n\nÐ’ ÑÑ‚Ð°Ñ‚ÑŒÐµ Ð¿Ñ€Ð¾Ð²ÐµÐ´ÐµÐ½Ð¾ Ð¸ÑÑÐ»ÐµÐ´Ð¾Ð²Ð°Ð½Ð¸Ðµ Ð¾ÑÐ¾Ð±ÐµÐ½Ð½Ð¾ÑÑ‚ÐµÐ¹ ÑÐ½Ð¸Ð¶ÐµÐ½Ð¸Ñ Ñ€Ð¸ÑÐºÐ¾Ð² Ð¿Ñ€Ð¸Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ LLM (Large Language Model) Ð² ÑÑ„ÐµÑ€Ðµ ÑÐºÐ¾Ð½Ð¾Ð¼Ð¸Ñ‡ÐµÑÐºÐ¾Ð¹ Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ÑÑ‚Ð¸ Ð¿Ñ€ÐµÐ´Ð¿Ñ€Ð¸ÑÑ‚Ð¸Ð¹ Ð¼Ð¾Ð»Ð¾Ñ‡Ð½Ð¾Ð¹ Ð¿Ñ€Ð¾Ð¼Ñ‹ÑˆÐ»ÐµÐ½Ð½Ð¾ÑÑ‚Ð¸ Ð½Ð° Ð¾ÑÐ½Ð¾Ð²Ðµ Ð¿Ð¾Ð´Ñ…Ð¾Ð´Ð° RAG (Retrieval-Augmented Generation) Ð² ÑÐ¾Ð²Ñ€ÐµÐ¼ÐµÐ½Ð½Ñ‹Ñ… ÑƒÑÐ»Ð¾Ð²Ð¸ÑÑ…. Ð Ð°ÑÑÐ¼Ð¾Ñ‚Ñ€ÐµÐ½Ñ‹ Ñ€Ð¸ÑÐºÐ¸ Ð¿Ñ€Ð¸Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ LLM Ð² ÑÑ„ÐµÑ€Ðµ ÑÐºÐ¾Ð½Ð¾Ð¼Ð¸Ñ‡ÐµÑÐºÐ¾Ð¹ Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ÑÑ‚Ð¸ Ð¿Ñ€ÐµÐ´Ð¿Ñ€Ð¸ÑÑ‚Ð¸Ð¹ Ð¼Ð¾Ð»Ð¾Ñ‡Ð½Ð¾Ð¹ Ð¿Ñ€Ð¾Ð¼Ñ‹ÑˆÐ»ÐµÐ½Ð½Ð¾ÑÑ‚Ð¸. ÐŸÐ¾Ð´Ñ€Ð¾Ð±Ð½Ð¾ Ñ€Ð°Ð·Ð¾Ð±Ñ€Ð°Ð½Ñ‹ ÑÑ†ÐµÐ½Ð°Ñ€Ð¸Ð¸ Ð¿Ñ€Ð¸Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ LLM+RAG Ð² Ñ€Ð¾ÑÑÐ¸Ð¹ÑÐºÐ¾Ð¹ Ð¼Ð¾Ð»Ð¾Ñ‡Ð½Ð¾Ð¹ Ð¿Ñ€Ð¾Ð¼Ñ‹ÑˆÐ»ÐµÐ½Ð½Ð¾ÑÑ‚Ð¸ â€“ Ñ Ð¾Ð¿Ð¸ÑÐ°Ð½Ð¸ÐµÐ¼ Ð¿Ñ€Ð¾Ñ†ÐµÑÑÐ°, Ð·Ð°Ð´ÐµÐ¹ÑÑ‚Ð²Ð¾Ð²Ð°Ð½Ð½Ñ‹Ñ… Ð´Ð°Ð½Ð½Ñ‹Ñ…, Ñ€ÐµÑˆÐ°ÐµÐ¼Ñ‹Ñ… Ñ€Ð¸ÑÐºÐ¾Ð² Ð¸ Ð´Ð¾ÑÑ‚Ð¸Ð³Ð½ÑƒÑ‚Ñ‹Ñ… Ñ€ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚Ð¾Ð². ÐŸÐ¾ÐºÐ°Ð·Ð°Ð½Ð¾, Ñ‡Ñ‚Ð¾ Ð² Ñ€ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚Ðµ Ð¸Ð½Ñ‚ÐµÐ³Ñ€Ð°Ñ†Ð¸Ñ RAG Ñ LLM Ñ‚Ñ€Ð°Ð½ÑÑ„Ð¾Ñ€Ð¼Ð¸Ñ€ÑƒÐµÑ‚ Ð³ÐµÐ½ÐµÑ€Ð°Ñ‚Ð¸Ð²Ð½ÑƒÑŽ Ð¼Ð¾Ð´ÐµÐ»ÑŒ Ð¸Ð· Ð¿Ð¾Ñ‚ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½Ð¾ Ð¾Ð¿Ð°ÑÐ½Ð¾Ð³Ð¾ Ð¸Ð½ÑÑ‚Ñ€ÑƒÐ¼ÐµÐ½Ñ‚Ð° Ð² Ð½Ð°Ð´ÐµÐ¶Ð½Ñ‹Ð¹ Ð¼ÐµÑ…Ð°Ð½Ð¸Ð·Ð¼ Ð¿Ð¾Ð´Ð´ÐµÑ€Ð¶ÐºÐ¸ Ð¿Ñ€Ð¸Ð½ÑÑ‚Ð¸Ñ Ñ€ÐµÑˆÐµÐ½Ð¸Ð¹ â€“ Ð¾Ñ‚ Ð¼Ð¾Ð½Ð¸Ñ‚Ð¾Ñ€Ð¸Ð½Ð³Ð° ÑƒÐ³Ñ€Ð¾Ð· Ñ„Ð°Ð»ÑŒÑÐ¸Ñ„Ð¸ÐºÐ°Ñ†Ð¸Ð¸ Ð´Ð¾ Ð¿Ñ€Ð¾Ð³Ð½Ð¾Ð·Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð¸Ñ ÑÐºÐ¾Ð½Ð¾Ð¼Ð¸Ñ‡ÐµÑÐºÐ¸Ñ… Ð¿Ð¾ÐºÐ°Ð·Ð°Ñ‚ÐµÐ»ÐµÐ¹ Ñ ÑƒÑ‡ÐµÑ‚Ð¾Ð¼ Ð¾Ñ‚Ñ€Ð°ÑÐ»ÐµÐ²Ð¾Ð¹ ÑÐ¿ÐµÑ†Ð¸Ñ„Ð¸ÐºÐ¸. The article examines the features of reducing the risks of using LLM (Large Language Model) in the field of economic security of dairy industry enterprises based on the RAG (Retrieval-Augmented Generation) approach in modern conditions. The risks of using LLM in the field of economic security of dairy industry enterprises are considered. The scenarios of LLM+RAG application in the Russian dairy industry are analyzed in detail, describing the process, the data involved, the risks to be solved and the results achieved. It is shown that as a result, the integration of RAG with LLM transforms the generative model from a potentially dangerous tool into a reliable decision support mechanism, from monitoring fraud threats to forecasting economic indicators based on industry specifics."
    },
    {
      "paper_id": "10.21203/rs.3.rs-9882260/v1",
      "title": "Operationalizing Reliability Gaps in Large Language Models: A Semi-Systematic Evidence Map of Reasoning, Factuality, Evaluation, and Retrieval-Augmented Generation",
      "summary": "Abstract Large language models (LLMs) increasingly support reasoning, question answering, decision support, and retrieval-augmented knowledge work. High benchmark performance, however, does not by itself establish reliability under realistic deployment conditions. This article treats LLM reliability as a pipeline-level evaluation construct rather than a single capability score. Using a semi-systematic evidence-map design, it synthesizes 77 studies selected from a broader OpenAlex audit trail of 1,010 candidate records. The review focuses on four linked dimensions: reasoning faithfulness, factual grounding, evaluation validity, and evidence-use reliability in retrieval-augmented generation. The synthesis distinguishes answer accuracy from reasoning faithfulness, truth from source-grounded support, benchmark performance from evaluation validity, and retrieved evidence from evidence actually used during generation. Across the reviewed literature, reasoning traces can improve answer accuracy without demonstrating process faithfulness; self-correction without external feedback shows inconsistent reliability; hallucination, attribution error, and sycophancy represent separable factuality risks; benchmark scores are sensitive to contamination, saturation, and protocol variation; and retrieval-augmented generation reliability depends on retrieval relevance, source sufficiency, context utilization, attribution, and calibrated refusal. The article contributes an operational reliability-gap framework and testable propositions for evaluating interactions among reasoning, factual grounding, evaluation trust, evidence use, lateral reasoning, and equitable multilingual reliability. The framework supports reliability-centered evaluation protocols that report process verification, claim-level grounding, contamination controls, uncertainty and refusal behavior, and stratified performance across language, culture, and domain contexts.",
      "authors": "[\"Kushal Budha\", \"Nikesh Lagun\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-06-02",
      "updated": "2026-06-02T17:02:08+00:00",
      "abs_url": "https://doi.org/10.21203/rs.3.rs-9882260/v1",
      "pdf_url": "",
      "comment": "Springer Science and Business Media LLC | posted-content",
      "age_days": 65,
      "authors_joined": "Kushal Budha, Nikesh Lagun",
      "categories_joined": "",
      "summary_chars": 1949,
      "text_for_embedding": "Operationalizing Reliability Gaps in Large Language Models: A Semi-Systematic Evidence Map of Reasoning, Factuality, Evaluation, and Retrieval-Augmented Generation\n\nAbstract Large language models (LLMs) increasingly support reasoning, question answering, decision support, and retrieval-augmented knowledge work. High benchmark performance, however, does not by itself establish reliability under realistic deployment conditions. This article treats LLM reliability as a pipeline-level evaluation construct rather than a single capability score. Using a semi-systematic evidence-map design, it synthesizes 77 studies selected from a broader OpenAlex audit trail of 1,010 candidate records. The review focuses on four linked dimensions: reasoning faithfulness, factual grounding, evaluation validity, and evidence-use reliability in retrieval-augmented generation. The synthesis distinguishes answer accuracy from reasoning faithfulness, truth from source-grounded support, benchmark performance from evaluation validity, and retrieved evidence from evidence actually used during generation. Across the reviewed literature, reasoning traces can improve answer accuracy without demonstrating process faithfulness; self-correction without external feedback shows inconsistent reliability; hallucination, attribution error, and sycophancy represent separable factuality risks; benchmark scores are sensitive to contamination, saturation, and protocol variation; and retrieval-augmented generation reliability depends on retrieval relevance, source sufficiency, context utilization, attribution, and calibrated refusal. The article contributes an operational reliability-gap framework and testable propositions for evaluating interactions among reasoning, factual grounding, evaluation trust, evidence use, lateral reasoning, and equitable multilingual reliability. The framework supports reliability-centered evaluation protocols that report process verification, claim-level grounding, contamination controls, uncertainty and refusal behavior, and stratified performance across language, culture, and domain contexts."
    },
    {
      "paper_id": "10.52060/juptik.v4i1.4318",
      "title": "Chatbot Hybrid Fatwa MUI Menggunakan Retrieval Augmented Generation dan Large Language Model",
      "summary": "Aksesibilitas dokumen digital Fatwa Majelis Ulama Indonesia (MUI) yang terfragmentasi membuat pencarian informasi kurang efektif. Di sisi lain, sistem tanya jawab AI berbasis satu sumber dokumen (single-corpus) rentan menghasilkan jawaban tidak akurat (halusinasi) pada pertanyaan di luar domain. Penelitian ini mengembangkan Chatbot Hybrid Fatwa MUI menggunakan arsitektur Hybrid Retrieval bertingkat dengan dua sumber pengetahuan: dokumen Fatwa MUI sebagai korpus utama dan 12.370 hadis Bukhari-Muslim sebagai mekanisme cadangan (fallback). Sistem ini menerapkan pencarian semantik, verifikasi topik otomatis oleh model bahasa, dan pengalihan ke basis data hadis jika konteks fatwa dinilai tidak relevan. Hasil evaluasi menunjukkan peningkatan kesamaan makna jawaban sebesar 13,23% (dari 0,6664 menjadi 0,7546) dan peningkatan kesetiaan pada rujukan (faithfulness) sebesar 10,57% (dari 85,37% menjadi 94,39%), dengan tingkat penolakan (abstain rate) identik sebesar 26,83%. Pendekatan multi-korpus ini terbukti signifikan meningkatkan relevansi dan keakuratan jawaban dibandingkan RAG standar.",
      "authors": "[\"Surya Hidayatullah Firdaus\", \"Nazruddin Safaat H\", \"Yelfi Vitriani\", \"Novriyanto\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-06-01",
      "updated": "2026-07-04T21:16:23+00:00",
      "abs_url": "https://doi.org/10.52060/juptik.v4i1.4318",
      "pdf_url": "https://www.ejournal.ummuba.ac.id/index.php/JUPTIK/article/download/4318/2057",
      "comment": "Jurnal Pengembangan Teknologi Informasi dan Komunikasi (JUPTIK) | Universitas Muhammadiyah Muara Bungo | journal-article",
      "age_days": 66,
      "authors_joined": "Surya Hidayatullah Firdaus, Nazruddin Safaat H, Yelfi Vitriani, Novriyanto",
      "categories_joined": "",
      "summary_chars": 1095,
      "text_for_embedding": "Chatbot Hybrid Fatwa MUI Menggunakan Retrieval Augmented Generation dan Large Language Model\n\nAksesibilitas dokumen digital Fatwa Majelis Ulama Indonesia (MUI) yang terfragmentasi membuat pencarian informasi kurang efektif. Di sisi lain, sistem tanya jawab AI berbasis satu sumber dokumen (single-corpus) rentan menghasilkan jawaban tidak akurat (halusinasi) pada pertanyaan di luar domain. Penelitian ini mengembangkan Chatbot Hybrid Fatwa MUI menggunakan arsitektur Hybrid Retrieval bertingkat dengan dua sumber pengetahuan: dokumen Fatwa MUI sebagai korpus utama dan 12.370 hadis Bukhari-Muslim sebagai mekanisme cadangan (fallback). Sistem ini menerapkan pencarian semantik, verifikasi topik otomatis oleh model bahasa, dan pengalihan ke basis data hadis jika konteks fatwa dinilai tidak relevan. Hasil evaluasi menunjukkan peningkatan kesamaan makna jawaban sebesar 13,23% (dari 0,6664 menjadi 0,7546) dan peningkatan kesetiaan pada rujukan (faithfulness) sebesar 10,57% (dari 85,37% menjadi 94,39%), dengan tingkat penolakan (abstain rate) identik sebesar 26,83%. Pendekatan multi-korpus ini terbukti signifikan meningkatkan relevansi dan keakuratan jawaban dibandingkan RAG standar."
    },
    {
      "paper_id": "10.54254/2753-8818/2026.dl34055",
      "title": "Hallucination in Large Language Models and Retrieval-Augmented Generation: Mechanisms, Mitigation, and Evaluation",
      "summary": "Large language models have demonstrated strong generative capability in question answering, dialogue, and other knowledge-intensive tasks. However, their outputs remain vulnerable to hallucination, including factual errors, unsupported claims, spurious citations, and distorted reasoning. Retrieval-augmented generation (RAG) has been proposed as a practical remedy because it supplements parametric knowledge with external evidence retrieved at inference time. Yet RAG does not guarantee truthfulness or attribution by default. Errors may arise during query formulation, document retrieval, evidence aggregation, and answer grounding. This paper reviews the relationship between hallucination and RAG from three perspectives: mechanism, mitigation, and evaluation. First, the major causes of hallucination in both vanilla LLMs and RAG-enhanced systems are analyzed. Second, the principal mitigation strategies are organized into retrieval optimization, evidence-grounded generation, and post-generation verification. Third, the main evaluation dimensions are examined, including factuality, faithfulness, attribution quality, and retrieval relevance. It is argued that RAG should not be treated as a complete solution to hallucination. Its value lies in enabling externally grounded generation, but its effectiveness depends on the reliability of retrieval, the fidelity of evidence use, and the rigor of evaluation. Future work should prioritize attribution-aware generation, conflict-sensitive reasoning, and unified evaluation protocols for trustworthy LLM systems.",
      "authors": "[\"Haopeng Yang\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-06-01",
      "updated": "2026-06-01T08:01:15+00:00",
      "abs_url": "https://doi.org/10.54254/2753-8818/2026.dl34055",
      "pdf_url": "",
      "comment": "Theoretical and Natural Science | EWA Publishing | journal-article",
      "age_days": 66,
      "authors_joined": "Haopeng Yang",
      "categories_joined": "",
      "summary_chars": 1569,
      "text_for_embedding": "Hallucination in Large Language Models and Retrieval-Augmented Generation: Mechanisms, Mitigation, and Evaluation\n\nLarge language models have demonstrated strong generative capability in question answering, dialogue, and other knowledge-intensive tasks. However, their outputs remain vulnerable to hallucination, including factual errors, unsupported claims, spurious citations, and distorted reasoning. Retrieval-augmented generation (RAG) has been proposed as a practical remedy because it supplements parametric knowledge with external evidence retrieved at inference time. Yet RAG does not guarantee truthfulness or attribution by default. Errors may arise during query formulation, document retrieval, evidence aggregation, and answer grounding. This paper reviews the relationship between hallucination and RAG from three perspectives: mechanism, mitigation, and evaluation. First, the major causes of hallucination in both vanilla LLMs and RAG-enhanced systems are analyzed. Second, the principal mitigation strategies are organized into retrieval optimization, evidence-grounded generation, and post-generation verification. Third, the main evaluation dimensions are examined, including factuality, faithfulness, attribution quality, and retrieval relevance. It is argued that RAG should not be treated as a complete solution to hallucination. Its value lies in enabling externally grounded generation, but its effectiveness depends on the reliability of retrieval, the fidelity of evidence use, and the rigor of evaluation. Future work should prioritize attribution-aware generation, conflict-sensitive reasoning, and unified evaluation protocols for trustworthy LLM systems."
    },
    {
      "paper_id": "10.22214/ijraset.2026.82233",
      "title": "Hybrid Graph Neural Network and Large Language Model Framework for Robust Knowledge Graph Question Answering via Retrieval-Augmented Generation",
      "summary": "Knowledge graphs (KGs) hold facts about the world as connected triples, and they have become a backbone for any system that needs to reason over linked information. The task of Knowledge Graph Question Answering (KGQA) is to map a natural-language question onto the right entity, or set of entities, somewhere inside such a graph. Two communities have been pulling at this problem from opposite ends. Large language models (LLMs) read a question fluently but tend to invent facts and stumble on multi-hop chains they cannot verify. Graph neural networks (GNNs), on the other side, are good at walking through neighbourhoods and weighing relations, but cannot phrase an answer the way a person would. In this work, we describe a practical hybrid that places the two inside a retrieval- augmented generation (RAG) loop. A GNN first prunes a small subgraph around the question's seed entities and ranks candidate answers; we then extract shortest paths between the seeds and the top candidates, score each path with a lightweight function that combines GNN attention with degree centrality, and finally verbalise the surviving paths into plain-English sentences before passing them to a 7-8B open-source LLM. The proposed entity-priority scoring step is training-free and runs in milliseconds, yet it lifts Hits@1 by roughly 4-5 percentage points on the harder questions of ComplexWebQuestions. Experiments on WebQuestionsSP and ComplexWebQuestions show competitive or superior results against recent baselines, with the largest gains on multi-entity and three-or-more hop queries. The pipeline uses about one LLM call per question, runs comfortably on a single mid-range GPU, and exposes its reasoning as a short list of human-readable paths that anyone can audit. We argue that this combination of grounded retrieval, lightweight path scoring, and modest model size makes the approach particularly suited to academic and resourceconstrained settings.",
      "authors": "[\"Sohail Khan\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-05-31",
      "updated": "2026-05-16T08:14:08+00:00",
      "abs_url": "https://doi.org/10.22214/ijraset.2026.82233",
      "pdf_url": "",
      "comment": "International Journal for Research in Applied Science and Engineering Technology | International Journal for Research in Applied Science and Engineering Technology (IJRASET) | journal-article",
      "age_days": 67,
      "authors_joined": "Sohail Khan",
      "categories_joined": "",
      "summary_chars": 1949,
      "text_for_embedding": "Hybrid Graph Neural Network and Large Language Model Framework for Robust Knowledge Graph Question Answering via Retrieval-Augmented Generation\n\nKnowledge graphs (KGs) hold facts about the world as connected triples, and they have become a backbone for any system that needs to reason over linked information. The task of Knowledge Graph Question Answering (KGQA) is to map a natural-language question onto the right entity, or set of entities, somewhere inside such a graph. Two communities have been pulling at this problem from opposite ends. Large language models (LLMs) read a question fluently but tend to invent facts and stumble on multi-hop chains they cannot verify. Graph neural networks (GNNs), on the other side, are good at walking through neighbourhoods and weighing relations, but cannot phrase an answer the way a person would. In this work, we describe a practical hybrid that places the two inside a retrieval- augmented generation (RAG) loop. A GNN first prunes a small subgraph around the question's seed entities and ranks candidate answers; we then extract shortest paths between the seeds and the top candidates, score each path with a lightweight function that combines GNN attention with degree centrality, and finally verbalise the surviving paths into plain-English sentences before passing them to a 7-8B open-source LLM. The proposed entity-priority scoring step is training-free and runs in milliseconds, yet it lifts Hits@1 by roughly 4-5 percentage points on the harder questions of ComplexWebQuestions. Experiments on WebQuestionsSP and ComplexWebQuestions show competitive or superior results against recent baselines, with the largest gains on multi-entity and three-or-more hop queries. The pipeline uses about one LLM call per question, runs comfortably on a single mid-range GPU, and exposes its reasoning as a short list of human-readable paths that anyone can audit. We argue that this combination of grounded retrieval, lightweight path scoring, and modest model size makes the approach particularly suited to academic and resourceconstrained settings."
    },
    {
      "paper_id": "10.21203/rs.3.rs-9770645/v1",
      "title": "Adapting Large Language Models for Low-Resource Regulated Domains: A Fine-Tuning and Retrieval-Augmented Generation Approach to Insurance Information Delivery in Kenya",
      "summary": "Abstract Background. Insurance penetration in Kenya stands at roughly 2.3% of GDP, well below the global average of 7.4%. Documented barriers include low financial literacy, affordability, cultural resistance and limited access to trusted, locally relevant information. Large Language Models (LLMs) could in principle deliver scalable, personalised information, but off-the-shelf models perform poorly on jurisdiction-specific regulatory content and are prone to hallucination in low-resource domains. Objective. We investigate how a mid-sized open-weights LLM can be adapted to a low-resource, highly regulated domain using two complementary techniques â€” parameter-efficient supervised fine-tuning and Retrieval-Augmented Generation (RAG) â€” and we quantify the marginal value of each technique and of their combination. Methods. A questionâ€“answer (QA) corpus was curated from primary regulatory sources (Insurance Regula- tory Authority of Kenya, Association of Kenya Insurers) and reformatted into JSONL. Metaâ€™s LLaMA-2- 13B-chat was used as the base model. We compared four configurations: (i) base model; (ii) base + LoRA fine-tuning; (iii) base + RAG over a Chroma vector index; and (iv) fine-tuning + RAG. Outputs were graded by GPT-4 (with a human-validated paraphrased test set) on accuracy (1â€“10), succinctness (5-level rubric mapped to a numerical scale) and relevancy (1â€“10). Results. The combined fine-tuning + RAG configuration achieved the best performance on all three metrics (accuracy 6.803, succinctness 7.03, relevancy 6.89), versus the base model (1.229, 3.78, 1.98). Fine-tuning alone yielded only marginal accuracy gains and a measurable drop in relevancy, indicating that parameter adaptation without external knowledge grounding can make the model more confident without making it more correct. RAG contributed the largest single improvement. Contribution. The paper offers (a) a reproducible recipe for adapting open-weights LLMs to a low-resource regulated domain on commodity hardware; (b) empirical evidence on the relative contribution of fine-tuning vs. retrieval grounding in that setting; and (c) a discussion of the implications for AI-assisted financial inclusion in Sub-Saharan Africa.",
      "authors": "[\"AMOS MBEKI NYAGAR\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-05-22",
      "updated": "2026-05-22T04:10:39+00:00",
      "abs_url": "https://doi.org/10.21203/rs.3.rs-9770645/v1",
      "pdf_url": "",
      "comment": "Springer Science and Business Media LLC | posted-content",
      "age_days": 76,
      "authors_joined": "AMOS MBEKI NYAGAR",
      "categories_joined": "",
      "summary_chars": 2220,
      "text_for_embedding": "Adapting Large Language Models for Low-Resource Regulated Domains: A Fine-Tuning and Retrieval-Augmented Generation Approach to Insurance Information Delivery in Kenya\n\nAbstract Background. Insurance penetration in Kenya stands at roughly 2.3% of GDP, well below the global average of 7.4%. Documented barriers include low financial literacy, affordability, cultural resistance and limited access to trusted, locally relevant information. Large Language Models (LLMs) could in principle deliver scalable, personalised information, but off-the-shelf models perform poorly on jurisdiction-specific regulatory content and are prone to hallucination in low-resource domains. Objective. We investigate how a mid-sized open-weights LLM can be adapted to a low-resource, highly regulated domain using two complementary techniques â€” parameter-efficient supervised fine-tuning and Retrieval-Augmented Generation (RAG) â€” and we quantify the marginal value of each technique and of their combination. Methods. A questionâ€“answer (QA) corpus was curated from primary regulatory sources (Insurance Regula- tory Authority of Kenya, Association of Kenya Insurers) and reformatted into JSONL. Metaâ€™s LLaMA-2- 13B-chat was used as the base model. We compared four configurations: (i) base model; (ii) base + LoRA fine-tuning; (iii) base + RAG over a Chroma vector index; and (iv) fine-tuning + RAG. Outputs were graded by GPT-4 (with a human-validated paraphrased test set) on accuracy (1â€“10), succinctness (5-level rubric mapped to a numerical scale) and relevancy (1â€“10). Results. The combined fine-tuning + RAG configuration achieved the best performance on all three metrics (accuracy 6.803, succinctness 7.03, relevancy 6.89), versus the base model (1.229, 3.78, 1.98). Fine-tuning alone yielded only marginal accuracy gains and a measurable drop in relevancy, indicating that parameter adaptation without external knowledge grounding can make the model more confident without making it more correct. RAG contributed the largest single improvement. Contribution. The paper offers (a) a reproducible recipe for adapting open-weights LLMs to a low-resource regulated domain on commodity hardware; (b) empirical evidence on the relative contribution of fine-tuning vs. retrieval grounding in that setting; and (c) a discussion of the implications for AI-assisted financial inclusion in Sub-Saharan Africa."
    },
    {
      "paper_id": "10.32473/flairs.39.1.141782",
      "title": "An Exploratory Study of Agentic Retrieval Augmented Generation for Mental Health Oriented Language Models",
      "summary": "Mental health conditions affect over one billion individuals globally and remain challenging to assess accurately due to fragmented clinical data and subjective evaluation methods. Mental health support systems increasingly rely on large language models (LLMs) due to their capabilities in natural language understanding and response generation. While retrieval augmented generation (RAG) and agentic frameworks have improved grounded generation in several domains, there is limited understanding of how such approaches affect response quality in mental health related tasks. In particular, the impact of structured context management and autonomous refinement on clinical relevance, empathy, completeness, and safety remains underexplored. In this study, we investigate the effects of agentic RAG on the performance of multiple mental health oriented language models. We adopt a common pipeline configuration that integrates patient dialogue, structured patient history, and externally retrieved clinical knowledge. The pipeline consists of coordinated stages for patient context retrieval, context augmentation, and response generation with autonomous evaluation and iterative refinement. We conduct empirical evaluations across four mental health models under this pipeline and analyze their performance in terms of medical accuracy, empathy, completeness, safety, and overall response quality. Our results show consistent trends toward improved responses when structured context handling and agentic refinement are applied, indicating that these components influence model behavior independent of architecture. This work provides insight into how agentic RAG influences model outputs in mental health applications and highlights the importance of context engineering and quality control in LLM based support systems. These findings indicate that Agentic Context Engineering (ACE) may contribute to improved reasoning depth, contextual alignment, and patient centered response quality across diverse models. However, despite the improvements observed, the framework remains an early step toward more reliable AI assisted mental health assessment. Continued research is needed to refine model architectures, optimize prompt engineering, and expand evaluation across broader and more diverse clinical contexts to ensure safety, consistency, and real world applicability.",
      "authors": "[\"Khoa Pham\", \"Jiacheng Li\", \"Hassan S. Al Khatib\", \"Shahram Rahimi\", \"Noorbakhsh Amiri Golilarz\", \"Andy Perkins\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-05-06",
      "updated": "2026-05-06T14:14:40+00:00",
      "abs_url": "https://doi.org/10.32473/flairs.39.1.141782",
      "pdf_url": "https://journals.flvc.org/FLAIRS/article/download/141782/146987",
      "comment": "The International FLAIRS Conference Proceedings | University of Florida George A Smathers Libraries | journal-article",
      "age_days": 92,
      "authors_joined": "Khoa Pham, Jiacheng Li, Hassan S. Al Khatib, Shahram Rahimi, Noorbakhsh Amiri Golilarz, Andy Perkins",
      "categories_joined": "",
      "summary_chars": 2371,
      "text_for_embedding": "An Exploratory Study of Agentic Retrieval Augmented Generation for Mental Health Oriented Language Models\n\nMental health conditions affect over one billion individuals globally and remain challenging to assess accurately due to fragmented clinical data and subjective evaluation methods. Mental health support systems increasingly rely on large language models (LLMs) due to their capabilities in natural language understanding and response generation. While retrieval augmented generation (RAG) and agentic frameworks have improved grounded generation in several domains, there is limited understanding of how such approaches affect response quality in mental health related tasks. In particular, the impact of structured context management and autonomous refinement on clinical relevance, empathy, completeness, and safety remains underexplored. In this study, we investigate the effects of agentic RAG on the performance of multiple mental health oriented language models. We adopt a common pipeline configuration that integrates patient dialogue, structured patient history, and externally retrieved clinical knowledge. The pipeline consists of coordinated stages for patient context retrieval, context augmentation, and response generation with autonomous evaluation and iterative refinement. We conduct empirical evaluations across four mental health models under this pipeline and analyze their performance in terms of medical accuracy, empathy, completeness, safety, and overall response quality. Our results show consistent trends toward improved responses when structured context handling and agentic refinement are applied, indicating that these components influence model behavior independent of architecture. This work provides insight into how agentic RAG influences model outputs in mental health applications and highlights the importance of context engineering and quality control in LLM based support systems. These findings indicate that Agentic Context Engineering (ACE) may contribute to improved reasoning depth, contextual alignment, and patient centered response quality across diverse models. However, despite the improvements observed, the framework remains an early step toward more reliable AI assisted mental health assessment. Continued research is needed to refine model architectures, optimize prompt engineering, and expand evaluation across broader and more diverse clinical contexts to ensure safety, consistency, and real world applicability."
    },
    {
      "paper_id": "10.55041/isjem07213",
      "title": "Speculative Retrieval-Augmented Generation for Cost-Efficient Large Language Model Inference",
      "summary": "Abstract - This work focuses on the two crucial bottlenecks in Retrieval-Augmented Generation (RAG): high inference latency and expensive computation cost. RAG enhances the factual correctness of Large Language Models (LLMs) by utilizing external knowledge sources; However, the auto-To achieve a good recall, the system applies a two-way retrieval mechanism: Dense retrieval: This module uses BAAI/bge-small-en-v1.5 to create a 384-dimensional embedding space, where queries and documents are mapped. The embeddings are stored in a FAISS IndexFlatL2. Sparse retrieval: This module uses TF-IDF vectorization to capture an exact keyword match. Reranking: A simple heuristic mechanism of matching substrings of the query terms in the documents selected to perform the final step of ranking them for prompt introduce a novel speculative RAG framework that combines hybrid retrieval with speculative decoding. Our framework employs hybrid dense vector search (BGE-small) and sparse keyword search (TF-IDF) for enhanced recall followed by a lightweight re-ranker model. A compact draft model (TinyLlama-1.1B) makes tentative future token generation, then a larger verifier model (Mistral-7B) checks the correctness of the candidate token. Empirical experiments demonstrate 33% and 29% improvement in inference latency and token reduction, respectively, compared to the baseline of a typical 7B model, while retaining 94% accuracy on factoid tasks. Key Words: Retrieval-Augmented Generation, Speculative Decoding, Large Language Models, Inference Optimization, Hybrid Retrieval",
      "authors": "[\"Dr. Sumalatha P\", \"Manoj Kumar\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-05-06",
      "updated": "2026-05-06T17:13:30+00:00",
      "abs_url": "https://doi.org/10.55041/isjem07213",
      "pdf_url": "",
      "comment": "International Scientific Journal of Engineering and Management | Edtech Publishers (OPC) Private Limited | journal-article",
      "age_days": 92,
      "authors_joined": "Dr. Sumalatha P, Manoj Kumar",
      "categories_joined": "",
      "summary_chars": 1571,
      "text_for_embedding": "Speculative Retrieval-Augmented Generation for Cost-Efficient Large Language Model Inference\n\nAbstract - This work focuses on the two crucial bottlenecks in Retrieval-Augmented Generation (RAG): high inference latency and expensive computation cost. RAG enhances the factual correctness of Large Language Models (LLMs) by utilizing external knowledge sources; However, the auto-To achieve a good recall, the system applies a two-way retrieval mechanism: Dense retrieval: This module uses BAAI/bge-small-en-v1.5 to create a 384-dimensional embedding space, where queries and documents are mapped. The embeddings are stored in a FAISS IndexFlatL2. Sparse retrieval: This module uses TF-IDF vectorization to capture an exact keyword match. Reranking: A simple heuristic mechanism of matching substrings of the query terms in the documents selected to perform the final step of ranking them for prompt introduce a novel speculative RAG framework that combines hybrid retrieval with speculative decoding. Our framework employs hybrid dense vector search (BGE-small) and sparse keyword search (TF-IDF) for enhanced recall followed by a lightweight re-ranker model. A compact draft model (TinyLlama-1.1B) makes tentative future token generation, then a larger verifier model (Mistral-7B) checks the correctness of the candidate token. Empirical experiments demonstrate 33% and 29% improvement in inference latency and token reduction, respectively, compared to the baseline of a typical 7B model, while retaining 94% accuracy on factoid tasks. Key Words: Retrieval-Augmented Generation, Speculative Decoding, Large Language Models, Inference Optimization, Hybrid Retrieval"
    },
    {
      "paper_id": "10.1093/sleep/zsag091.0346",
      "title": "0346 Retrieval Augmented Generation Improves Large Language Model Performance in Sleep Medicine",
      "summary": "Abstract Introduction While Large Language Models (LLMs) offer generative capabilities, generic models often lack domain-specific grounding, leading to hallucinations in high-stakes contexts. However, LLMs can serve as clinical decision support tools if augmented with specific domain data. This study evaluates the utility of Retrieval-Augmented Generation (RAG) applied to open-source LLMs, utilizing a curated knowledge base of authoritative sleep medicine textbooks, to quantify improvement in performance. Methods We evaluated four open-source modelsâ€”Llama-70B, Llama-8B, Qwen-14B, and Qwen-235B, linked to a RAG system indexing five standard textbooks, including ICSD-3 TR. Models were tested on sleep boardâ€“style MCQs and clinical vignettes diagnostic accuracy. Performance was assessed across nine configurations derived from three factors: RAG pipeline complexity (Plain vs. Complicated), textbook preprocessing (Uncleaned vs. Cleaned/TOC-aligned), and retriever type (Dense-only vs. Hybrid). Metrics included MCQ Accuracy and the rates at which the correct diagnosis appeared as the top result or within the top 5 differential diagnosis lists for vignettes. Results RAG consistently outperformed the no-RAG baseline, yielding absolute performance gains of 5.6%â€“10.7% for MCQs and 8.1%â€“10.2% for the top diagnosis in cases across all models. For MCQs, Qwen-235B achieved the highest accuracy of 87.3% (vs. 81.7% baseline) using the Plain RAG configuration with Cleaned (TOC-aligned) Hybrid retrieval. Llama-70B followed with 83.6% in the same configuration. For case vignettes, Qwen-235B achieved a correct top diagnosis rate of 66.3% and a correct diagnosis rate within the top 5 differential diagnosis lists of 90.8% using Cleaned Hybrid retrieval configurations. Hybrid retrieval (Dense + Sparse) consistently surpassed Dense-only methods. Notably, while larger models benefited from Cleaned text, smaller models (e.g., Qwen-14B) achieved higher top diagnosis rates with Uncleaned text (57.1% vs. 51.0%), suggesting a dependency on redundant context in lower-parameter settings. Conclusion RAG significantly enhances knowledge performance of open-source LLMs in sleep medicine. Hybrid retrieval and curated, TOC-aligned knowledge bases yield optimal results for large models, whereas smaller models benefit from the redundancy of uncleaned text. These findings suggest that RAG systems can augment LLMs in domain specific knowledge for clinical decision support. Support (if any)",
      "authors": "[\"Joseph Cheung\", \"Pengze Li\", \"Anshum Patel\", \"SaiKrishna Vallamchetla\", \"Het Contractor\", \"Hayden Heninger\", \"Cui Tao\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-05-01",
      "updated": "2026-05-09T03:10:46+00:00",
      "abs_url": "https://doi.org/10.1093/sleep/zsag091.0346",
      "pdf_url": "https://academic.oup.com/sleep/article-pdf/49/Supplement_1/A153/68252775/zsag091.0346.pdf",
      "comment": "SLEEPJ | Oxford University Press (OUP) | journal-article",
      "age_days": 97,
      "authors_joined": "Joseph Cheung, Pengze Li, Anshum Patel, SaiKrishna Vallamchetla, Het Contractor, Hayden Heninger, Cui Tao",
      "categories_joined": "",
      "summary_chars": 2491,
      "text_for_embedding": "0346 Retrieval Augmented Generation Improves Large Language Model Performance in Sleep Medicine\n\nAbstract Introduction While Large Language Models (LLMs) offer generative capabilities, generic models often lack domain-specific grounding, leading to hallucinations in high-stakes contexts. However, LLMs can serve as clinical decision support tools if augmented with specific domain data. This study evaluates the utility of Retrieval-Augmented Generation (RAG) applied to open-source LLMs, utilizing a curated knowledge base of authoritative sleep medicine textbooks, to quantify improvement in performance. Methods We evaluated four open-source modelsâ€”Llama-70B, Llama-8B, Qwen-14B, and Qwen-235B, linked to a RAG system indexing five standard textbooks, including ICSD-3 TR. Models were tested on sleep boardâ€“style MCQs and clinical vignettes diagnostic accuracy. Performance was assessed across nine configurations derived from three factors: RAG pipeline complexity (Plain vs. Complicated), textbook preprocessing (Uncleaned vs. Cleaned/TOC-aligned), and retriever type (Dense-only vs. Hybrid). Metrics included MCQ Accuracy and the rates at which the correct diagnosis appeared as the top result or within the top 5 differential diagnosis lists for vignettes. Results RAG consistently outperformed the no-RAG baseline, yielding absolute performance gains of 5.6%â€“10.7% for MCQs and 8.1%â€“10.2% for the top diagnosis in cases across all models. For MCQs, Qwen-235B achieved the highest accuracy of 87.3% (vs. 81.7% baseline) using the Plain RAG configuration with Cleaned (TOC-aligned) Hybrid retrieval. Llama-70B followed with 83.6% in the same configuration. For case vignettes, Qwen-235B achieved a correct top diagnosis rate of 66.3% and a correct diagnosis rate within the top 5 differential diagnosis lists of 90.8% using Cleaned Hybrid retrieval configurations. Hybrid retrieval (Dense + Sparse) consistently surpassed Dense-only methods. Notably, while larger models benefited from Cleaned text, smaller models (e.g., Qwen-14B) achieved higher top diagnosis rates with Uncleaned text (57.1% vs. 51.0%), suggesting a dependency on redundant context in lower-parameter settings. Conclusion RAG significantly enhances knowledge performance of open-source LLMs in sleep medicine. Hybrid retrieval and curated, TOC-aligned knowledge bases yield optimal results for large models, whereas smaller models benefit from the redundancy of uncleaned text. These findings suggest that RAG systems can augment LLMs in domain specific knowledge for clinical decision support. Support (if any)"
    },
    {
      "paper_id": "10.20944/preprints202604.0339.v1",
      "title": "Retrieval-Augmented Large Language Model Agents for Automated Scientific Literature Review Generation",
      "summary": "This study investigates a method that integrates retrieval-augmented mechanisms into large language model agents for scientific literature review generation. The approach addresses the limitations of traditional review models that rely on parametric knowledge with insufficient timeliness and limited coverage. Incorporating external document retrieval and dynamic information fusion into the generation process enhances the accuracy and completeness of the output. The overall framework consists of query encoding, semantic retrieval, document filtering, knowledge fusion, language modeling, task planning, memory storage, and reinforcement optimization, forming a closed loop of retrieval, understanding, and generation. Relevant document fragments are first retrieved through semantic vector search to ensure comprehensive and reliable information sources. These external representations are then integrated with the internal embeddings of the language model through weighted fusion, which preserves fluency while maintaining factual grounding. The task planning module constrains logical flow and text structure, and reinforcement learning optimization further improves relevance and consistency. Comparative experiments on large-scale scientific literature datasets demonstrate that the method outperforms existing approaches on ROUGE, BLEU, METEOR, and diversity metrics, validating its effectiveness and practicality. The findings show that combining retrieval augmentation with agent architectures can significantly improve coverage, accuracy, and language quality in review generation, providing a feasible solution for knowledge organization in complex literature environments.",
      "authors": "[\"Ruotong Wang\", \"Nyutian Long\", \"Shunqi Liu\", \"Yuxi Wang\", \"Zhen Qi\", \"Huajun Zhang\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-04-06",
      "updated": "2026-07-30T14:22:32+00:00",
      "abs_url": "https://doi.org/10.20944/preprints202604.0339.v1",
      "pdf_url": "",
      "comment": "MDPI AG | posted-content",
      "age_days": 122,
      "authors_joined": "Ruotong Wang, Nyutian Long, Shunqi Liu, Yuxi Wang, Zhen Qi, Huajun Zhang",
      "categories_joined": "",
      "summary_chars": 1687,
      "text_for_embedding": "Retrieval-Augmented Large Language Model Agents for Automated Scientific Literature Review Generation\n\nThis study investigates a method that integrates retrieval-augmented mechanisms into large language model agents for scientific literature review generation. The approach addresses the limitations of traditional review models that rely on parametric knowledge with insufficient timeliness and limited coverage. Incorporating external document retrieval and dynamic information fusion into the generation process enhances the accuracy and completeness of the output. The overall framework consists of query encoding, semantic retrieval, document filtering, knowledge fusion, language modeling, task planning, memory storage, and reinforcement optimization, forming a closed loop of retrieval, understanding, and generation. Relevant document fragments are first retrieved through semantic vector search to ensure comprehensive and reliable information sources. These external representations are then integrated with the internal embeddings of the language model through weighted fusion, which preserves fluency while maintaining factual grounding. The task planning module constrains logical flow and text structure, and reinforcement learning optimization further improves relevance and consistency. Comparative experiments on large-scale scientific literature datasets demonstrate that the method outperforms existing approaches on ROUGE, BLEU, METEOR, and diversity metrics, validating its effectiveness and practicality. The findings show that combining retrieval augmentation with agent architectures can significantly improve coverage, accuracy, and language quality in review generation, providing a feasible solution for knowledge organization in complex literature environments."
    },
    {
      "paper_id": "10.70121/001c.158711",
      "title": "The Role of Retrieval-Augmented Generation in Improving Factual Accuracy for Medical Large Language Models",
      "summary": "Large Language Models (LLMs) that rely solely on parametric memory learned through training have demonstrated strong performance in biomedical question-answering, but their tendency to hallucinate facts and the difficulty of adjusting and adding to the learned knowledge limit their usefulness in clinical settings. Retrieval-Augmented Generation (RAG) has emerged as a promising solution by adding a non-parametric source of memory and grounding LLM outputs to reputable external sources. This paper aims to survey the evolution of RAG methodologies and highlight the most recent developments and shifts in paradigms like Agentic RAG. We highlight current state-of-the-art biomedical RAG systems, the latest evaluation benchmarks, and empirical findings regarding best fine-tuning practices. We also examine technical including lost-in-the-middle effects and scaling behaviour. Ethical concerns surrounding privacy and bias are brought to attention alongside research gaps. Finally, we discuss future directions of RAG in the biomedical field, including integration into Clinical Decision Support systems (CDS).",
      "authors": "[\"Eason Ni\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-03-15",
      "updated": "2026-03-06T17:18:47+00:00",
      "abs_url": "https://doi.org/10.70121/001c.158711",
      "pdf_url": "https://www.scholarlyreview.org/article/158711-the-role-of-retrieval-augmented-generation-in-improving-factual-accuracy-for-medical-large-language-models.pdf",
      "comment": "Scholarly Review Journal | Leadership & Innovation Lab | journal-article",
      "age_days": 144,
      "authors_joined": "Eason Ni",
      "categories_joined": "",
      "summary_chars": 1112,
      "text_for_embedding": "The Role of Retrieval-Augmented Generation in Improving Factual Accuracy for Medical Large Language Models\n\nLarge Language Models (LLMs) that rely solely on parametric memory learned through training have demonstrated strong performance in biomedical question-answering, but their tendency to hallucinate facts and the difficulty of adjusting and adding to the learned knowledge limit their usefulness in clinical settings. Retrieval-Augmented Generation (RAG) has emerged as a promising solution by adding a non-parametric source of memory and grounding LLM outputs to reputable external sources. This paper aims to survey the evolution of RAG methodologies and highlight the most recent developments and shifts in paradigms like Agentic RAG. We highlight current state-of-the-art biomedical RAG systems, the latest evaluation benchmarks, and empirical findings regarding best fine-tuning practices. We also examine technical including lost-in-the-middle effects and scaling behaviour. Ethical concerns surrounding privacy and bias are brought to attention alongside research gaps. Finally, we discuss future directions of RAG in the biomedical field, including integration into Clinical Decision Support systems (CDS)."
    },
    {
      "paper_id": "10.36227/techrxiv.177272838.89432844/v1",
      "title": "A Survey of (Deep RAG) Deep Retrieval Augmented Generation and Reasoning in Large Language Models",
      "summary": "Retrieval-Augmented Generation (RAG) has emerged as a powerful paradigm for combining large language models with external knowledge sources to produce accurate, context-aware, and verifiable outputs. In this survey, we focus on an advanced instantiation of this paradigm, referred to as Deep RAG, which integrates reasoning, memory, and multi-step planning into end-to-end research workflows. We provide a structured overview of Deep RAG systems, covering key components such as query planning, information retrieval, memory management, and answer generation, as well as practical optimization techniques including supervised fine-tuning, iterative self-evolving, and agentic reinforcement learning. We analyze different planning strategies, adaptive retrieval mechanisms, conflict resolution methods, and multimodal synthesis, highlighting both their strengths and limitations. By categorizing approaches according to workflow types, reasoning strategies, and optimization paradigms, we clarify the current landscape and identify open challenges for evaluation, scalability, and multimodal reasoning. This survey aims to provide a comprehensive roadmap for designing flexible, reliable, and intelligent Deep RAG systems capable of performing complex, real-world research tasks with minimal human supervision.",
      "authors": "[\"Lihui Liu\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-03-05",
      "updated": "2026-06-12T17:00:30+00:00",
      "abs_url": "https://doi.org/10.36227/techrxiv.177272838.89432844/v1",
      "pdf_url": "",
      "comment": "Institute of Electrical and Electronics Engineers (IEEE) | posted-content",
      "age_days": 154,
      "authors_joined": "Lihui Liu",
      "categories_joined": "",
      "summary_chars": 1309,
      "text_for_embedding": "A Survey of (Deep RAG) Deep Retrieval Augmented Generation and Reasoning in Large Language Models\n\nRetrieval-Augmented Generation (RAG) has emerged as a powerful paradigm for combining large language models with external knowledge sources to produce accurate, context-aware, and verifiable outputs. In this survey, we focus on an advanced instantiation of this paradigm, referred to as Deep RAG, which integrates reasoning, memory, and multi-step planning into end-to-end research workflows. We provide a structured overview of Deep RAG systems, covering key components such as query planning, information retrieval, memory management, and answer generation, as well as practical optimization techniques including supervised fine-tuning, iterative self-evolving, and agentic reinforcement learning. We analyze different planning strategies, adaptive retrieval mechanisms, conflict resolution methods, and multimodal synthesis, highlighting both their strengths and limitations. By categorizing approaches according to workflow types, reasoning strategies, and optimization paradigms, we clarify the current landscape and identify open challenges for evaluation, scalability, and multimodal reasoning. This survey aims to provide a comprehensive roadmap for designing flexible, reliable, and intelligent Deep RAG systems capable of performing complex, real-world research tasks with minimal human supervision."
    },
    {
      "paper_id": "10.3390/app16052244",
      "title": "Hybrid Retrieval-Augmented Generation: Semantic and Structural Integration for Large Language Model Reasoning",
      "summary": "Recent GraphRAG methods based on knowledge graphs (KGs) primarily rely on either under-reasoning or a structural path-level retriever, which prevents them from jointly capturing fine-grained semantic relevance and explicit multi-hop reasoning paths. This separation often results in semantic mismatchâ€”where logical links are missingâ€”or structural over-constraint in reasoningâ€” where rigid dependencies limit flexible reasoningâ€”thereby degrading both answer accuracy and the reliability of evidence in complex KGQA tasks. To address these issues, we propose HybRAG, a hybrid retrieval framework that synergistically integrates a semantic node-level retriever and structural path-level retriever. HybRAG constructs a hybrid subgraph that jointly reflects the semantic proximity of entities and the relational structures encoded in the KG. Furthermore, we incorporate retrieval-augmented fine-tuning, which enables the model to internalize advanced reasoning strategies for interpreting disparate semantic and structural signals, rather than merely memorizing domain facts. Through extensive experiments on the WebQSP and CWQ benchmarks, we demonstrate that HybRAG effectively bridges the gap between LLM-centric semantic approaches and GNN-centric structural approaches, outperforming single-retriever baselines. Our findings, including detailed sensitivity and ablation analyses, provide empirical evidence that the systematic alignment of semantic and structural signals is essential for ensuring the reasoning reliability and scalability of next-generation GraphRAG systems.",
      "authors": "[\"Hyewon Lee\", \"Sungsu Lim\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-02-26",
      "updated": "2026-05-14T14:47:26+00:00",
      "abs_url": "https://doi.org/10.3390/app16052244",
      "pdf_url": "",
      "comment": "Applied Sciences | MDPI AG | journal-article",
      "age_days": 161,
      "authors_joined": "Hyewon Lee, Sungsu Lim",
      "categories_joined": "",
      "summary_chars": 1575,
      "text_for_embedding": "Hybrid Retrieval-Augmented Generation: Semantic and Structural Integration for Large Language Model Reasoning\n\nRecent GraphRAG methods based on knowledge graphs (KGs) primarily rely on either under-reasoning or a structural path-level retriever, which prevents them from jointly capturing fine-grained semantic relevance and explicit multi-hop reasoning paths. This separation often results in semantic mismatchâ€”where logical links are missingâ€”or structural over-constraint in reasoningâ€” where rigid dependencies limit flexible reasoningâ€”thereby degrading both answer accuracy and the reliability of evidence in complex KGQA tasks. To address these issues, we propose HybRAG, a hybrid retrieval framework that synergistically integrates a semantic node-level retriever and structural path-level retriever. HybRAG constructs a hybrid subgraph that jointly reflects the semantic proximity of entities and the relational structures encoded in the KG. Furthermore, we incorporate retrieval-augmented fine-tuning, which enables the model to internalize advanced reasoning strategies for interpreting disparate semantic and structural signals, rather than merely memorizing domain facts. Through extensive experiments on the WebQSP and CWQ benchmarks, we demonstrate that HybRAG effectively bridges the gap between LLM-centric semantic approaches and GNN-centric structural approaches, outperforming single-retriever baselines. Our findings, including detailed sensitivity and ablation analyses, provide empirical evidence that the systematic alignment of semantic and structural signals is essential for ensuring the reasoning reliability and scalability of next-generation GraphRAG systems."
    },
    {
      "paper_id": "10.35314/3y9hy151",
      "title": "Implementation of Retrieval-Augmented Generation Method on Large Language Model for Development of Campus Service and Information Chatbot",
      "summary": "Large language models have the potential to improve the quality of information services in higher education environments through responsive and natural interactions. However, LLMs are prone to generating answers that are not supported by valid knowledge sources due to knowledge cut-off limitations. This study implements Retrieval-Augmented Generation on LLMs to build an information service chatbot for the Indonesian University of Science and Technology (USTI). RAG is built using a hybrid retrieval mechanism that combines dense retrieval and sparse retrieval (BM25) through reciprocal rank fusion and is equipped with cross-encoder reranking. The knowledge base is compiled from official and public documents obtained through the USTI website. The evaluation was conducted using 13 test queries by comparing several configurations to analyze the contribution of each component. The evaluation results show that the hybrid retrieval configuration produces the best retrieval performance with Precision@3 of 71.7%, Recall@3 of 87.5%, and NDCG@3 of 96.3%. In addition, the application of RAG improved the quality of answers compared to LLM without retrieval, as shown by an increase in BERTScore-F1 from 84.8% to 89.4% and a faithfulness score of 88.8%. These findings indicate that RAG integration improves the relevance of LLM answers to source documents, with the hybrid configuration providing an optimal balance between retrieval quality and faithfulness.",
      "authors": "[\"Muhammad Dzaki Salman\", \"Rahmaddeni\", \"Torkis Nasution\", \"Susanti\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-02-26",
      "updated": "2026-02-26T15:27:57+00:00",
      "abs_url": "https://doi.org/10.35314/3y9hy151",
      "pdf_url": "https://jurnal.polbeng.ac.id/index.php/ISI/article/download/1484/655",
      "comment": "INOVTEK Polbeng - Seri Informatika | Politeknik Negeri Bengkalis | journal-article",
      "age_days": 161,
      "authors_joined": "Muhammad Dzaki Salman, Rahmaddeni, Torkis Nasution, Susanti",
      "categories_joined": "",
      "summary_chars": 1462,
      "text_for_embedding": "Implementation of Retrieval-Augmented Generation Method on Large Language Model for Development of Campus Service and Information Chatbot\n\nLarge language models have the potential to improve the quality of information services in higher education environments through responsive and natural interactions. However, LLMs are prone to generating answers that are not supported by valid knowledge sources due to knowledge cut-off limitations. This study implements Retrieval-Augmented Generation on LLMs to build an information service chatbot for the Indonesian University of Science and Technology (USTI). RAG is built using a hybrid retrieval mechanism that combines dense retrieval and sparse retrieval (BM25) through reciprocal rank fusion and is equipped with cross-encoder reranking. The knowledge base is compiled from official and public documents obtained through the USTI website. The evaluation was conducted using 13 test queries by comparing several configurations to analyze the contribution of each component. The evaluation results show that the hybrid retrieval configuration produces the best retrieval performance with Precision@3 of 71.7%, Recall@3 of 87.5%, and NDCG@3 of 96.3%. In addition, the application of RAG improved the quality of answers compared to LLM without retrieval, as shown by an increase in BERTScore-F1 from 84.8% to 89.4% and a faithfulness score of 88.8%. These findings indicate that RAG integration improves the relevance of LLM answers to source documents, with the hybrid configuration providing an optimal balance between retrieval quality and faithfulness."
    },
    {
      "paper_id": "10.20944/preprints202602.0996.v1",
      "title": "Clinical Large Language Models with Multi-Stage Instruction Tuning and Advanced Retrieval-Augmented Generation",
      "summary": "The demand for efficient and accurate Clinical Decision Support Systems (CDSS) is growing rapidly, driven by the escalating volume of medical data. While Large Language Models (LLMs) offer significant potential, their direct application in healthcare is limited by issues like hallucinations and lack of domain-specific knowledge. Retrieval-Augmented Generation (RAG) addresses these challenges by grounding LLMs with external knowledge, and recent lightweight RAG-based CDSS have shown promise. Building on this, we propose Enhanced Clinical RAG-LLM (ECRAG-LLM), a novel system designed to elevate performance in complex clinical scenarios. ECRAG-LLM utilizes a robust yet lightweight Mistral-based LLM, integrated with a multi-stage instruction tuning strategy that first adapts to general medical knowledge and then reinforces context-aware and causal reasoning using a custom dataset of structured clinical cases. We employ BioSimCSE for domain-specific embeddings and introduce an enhanced RAG architecture featuring hybrid retrieval, cross-encoder-based contextual re-ranking, and context summarization to optimize retrieved information. Extensive experiments on medical benchmarks demonstrate that ECRAG-LLM consistently outperforms baseline lightweight fine-tuned LLMs, achieving significant improvements in diagnostic accuracy, treatment appropriateness, and explanatory quality, particularly in tasks requiring deep clinical reasoning. An ablation study confirms the synergistic contributions of our innovations, and an error analysis highlights a substantial reduction in critical errors, positioning ECRAG-LLM as a more reliable and intelligent solution for resource-constrained clinical environments.",
      "authors": "[\"Donald Martin\", \"Blake Bowman\"]",
      "categories": "[]",
      "primary_category": "",
      "published": "2026-02-12",
      "updated": "2026-02-13T03:03:17+00:00",
      "abs_url": "https://doi.org/10.20944/preprints202602.0996.v1",
      "pdf_url": "",
      "comment": "MDPI AG | posted-content",
      "age_days": 175,
      "authors_joined": "Donald Martin, Blake Bowman",
      "categories_joined": "",
      "summary_chars": 1713,
      "text_for_embedding": "Clinical Large Language Models with Multi-Stage Instruction Tuning and Advanced Retrieval-Augmented Generation\n\nThe demand for efficient and accurate Clinical Decision Support Systems (CDSS) is growing rapidly, driven by the escalating volume of medical data. While Large Language Models (LLMs) offer significant potential, their direct application in healthcare is limited by issues like hallucinations and lack of domain-specific knowledge. Retrieval-Augmented Generation (RAG) addresses these challenges by grounding LLMs with external knowledge, and recent lightweight RAG-based CDSS have shown promise. Building on this, we propose Enhanced Clinical RAG-LLM (ECRAG-LLM), a novel system designed to elevate performance in complex clinical scenarios. ECRAG-LLM utilizes a robust yet lightweight Mistral-based LLM, integrated with a multi-stage instruction tuning strategy that first adapts to general medical knowledge and then reinforces context-aware and causal reasoning using a custom dataset of structured clinical cases. We employ BioSimCSE for domain-specific embeddings and introduce an enhanced RAG architecture featuring hybrid retrieval, cross-encoder-based contextual re-ranking, and context summarization to optimize retrieved information. Extensive experiments on medical benchmarks demonstrate that ECRAG-LLM consistently outperforms baseline lightweight fine-tuned LLMs, achieving significant improvements in diagnostic accuracy, treatment appropriateness, and explanatory quality, particularly in tasks requiring deep clinical reasoning. An ablation study confirms the synergistic contributions of our innovations, and an error analysis highlights a substantial reduction in critical errors, positioning ECRAG-LLM as a more reliable and intelligent solution for resource-constrained clinical environments."
    }
  ],
  "data/results/baseline_metrics.json": {
    "samples": 24,
    "retrieval_hit_rate": 1.0,
    "mean_token_f1": 1.0,
    "judge_accuracy": 1.0,
    "mean_judge_score": 5,
    "ragas": {
      "skipped": "Set RUN_RAGAS=1 to enable the slower Ragas pass."
    }
  },
  "data/results/corrupted_metrics.json": {
    "samples": 24,
    "retrieval_hit_rate": 0.875,
    "mean_token_f1": 0.8391472868217055,
    "judge_accuracy": 0.8333333333333334,
    "mean_judge_score": 4.333333333333333,
    "ragas": {
      "skipped": "Set RUN_RAGAS=1 to enable the slower Ragas pass."
    }
  },
  "data/results/repaired_metrics.json": {
    "samples": 24,
    "retrieval_hit_rate": 1.0,
    "mean_token_f1": 1.0,
    "judge_accuracy": 1.0,
    "mean_judge_score": 5,
    "ragas": {
      "skipped": "Set RUN_RAGAS=1 to enable the slower Ragas pass."
    }
  },
  "data/quality/freshness_report.json": {
    "generated_at": "2026-08-06T05:52:05.092026+00:00",
    "latest_published": "2026-08-01",
    "oldest_published": "2026-02-12",
    "stale_rows": 0,
    "total_rows": 24,
    "threshold_days": 180,
    "is_fresh": true
  },
  "data/quality/freshness_report_corrupted.json": {
    "generated_at": "2026-08-06T05:52:56.525456+00:00",
    "latest_published": "2026-07-13",
    "oldest_published": "2025-07-03",
    "stale_rows": 1,
    "total_rows": 24,
    "threshold_days": 180,
    "is_fresh": false
  },
  "data/quality/freshness_report_repaired.json": {
    "generated_at": "2026-08-06T05:52:56.744493+00:00",
    "latest_published": "2026-08-01",
    "oldest_published": "2026-02-12",
    "stale_rows": 0,
    "total_rows": 24,
    "threshold_days": 180,
    "is_fresh": true
  },
  "data/quality/baseline_quality_report.json": {
    "report_name": "baseline_quality_report",
    "generated_at": "2026-08-06T05:52:05.091002+00:00",
    "row_count": 24,
    "checks": {
      "row_count_positive": {
        "passed": true,
        "row_count": 24
      },
      "paper_id_not_null": {
        "passed": true,
        "missing_count": 0
      },
      "paper_id_unique": {
        "passed": true,
        "duplicate_count": 0
      },
      "title_not_null": {
        "passed": true,
        "missing_count": 0
      },
      "summary_not_null": {
        "passed": true,
        "missing_count": 0
      },
      "no_duplicate_records": {
        "passed": true,
        "duplicate_count": 0
      },
      "freshness": {
        "passed": true,
        "stale_count": 0,
        "threshold_days": 180
      }
    },
    "passed": true
  },
  "data/quality/corrupted_quality_report.json": {
    "report_name": "corrupted_quality_report",
    "generated_at": "2026-08-06T05:52:56.524586+00:00",
    "row_count": 24,
    "checks": {
      "row_count_positive": {
        "passed": true,
        "row_count": 24
      },
      "paper_id_not_null": {
        "passed": true,
        "missing_count": 0
      },
      "paper_id_unique": {
        "passed": false,
        "duplicate_count": 1
      },
      "title_not_null": {
        "passed": true,
        "missing_count": 0
      },
      "summary_not_null": {
        "passed": false,
        "missing_count": 2
      },
      "no_duplicate_records": {
        "passed": false,
        "duplicate_count": 1
      },
      "freshness": {
        "passed": false,
        "stale_count": 1,
        "threshold_days": 180
      }
    },
    "passed": false
  },
  "data/quality/repaired_quality_report.json": {
    "report_name": "repaired_quality_report",
    "generated_at": "2026-08-06T05:52:56.744014+00:00",
    "row_count": 24,
    "checks": {
      "row_count_positive": {
        "passed": true,
        "row_count": 24
      },
      "paper_id_not_null": {
        "passed": true,
        "missing_count": 0
      },
      "paper_id_unique": {
        "passed": true,
        "duplicate_count": 0
      },
      "title_not_null": {
        "passed": true,
        "missing_count": 0
      },
      "summary_not_null": {
        "passed": true,
        "missing_count": 0
      },
      "no_duplicate_records": {
        "passed": true,
        "duplicate_count": 0
      },
      "freshness": {
        "passed": true,
        "stale_count": 0,
        "threshold_days": 180
      }
    },
    "passed": true
  }
};

    const FALLBACK_RAW_RECORDS = [
      {
        paper_id: "10.36227/techrxiv.177272838.89432844/v1",
        title: "A Survey of (Deep RAG) Deep Retrieval Augmented Generation and Reasoning in Large Language Models",
        summary: "Retrieval-Augmented Generation has emerged as a powerful paradigm for combining large language models with external knowledge sources to produce accurate, context-aware, and verifiable outputs. This survey focuses on Deep RAG systems that integrate reasoning, memory, query planning, information retrieval, answer generation, and practical optimization techniques for complex research workflows.",
        authors: ["Lihui Liu"],
        categories: [],
        primary_category: "",
        published: "2026-03-05",
        updated: "2026-06-12T17:00:30Z",
        abs_url: "https://doi.org/10.36227/techrxiv.177272838.89432844/v1",
        pdf_url: "",
        comment: "Institute of Electrical and Electronics Engineers (IEEE) | posted-content"
      },
      {
        paper_id: "10.63646/kpqm1958",
        title: "The Age of Autonomous Agents: A Bibliometric Review of Agentic AI Architectures, Applications, and Emerging Challenges",
        summary: "The rapid evolution of large language models has catalyzed a shift from passive AI systems toward autonomous agentic architectures capable of reasoning, memory, tool use, and multi-agent collaboration. The review maps agentic AI research across healthcare, scientific discovery, education, software engineering, finance, and law while highlighting challenges around hallucination, trust, coordination, scalability, and governance.",
        authors: ["Ben J. Weber", "Clara M. Hofmann", "Amara N. Okoye"],
        categories: [],
        primary_category: "",
        published: "2026-06-30",
        updated: "2026-07-17T02:04:13Z",
        abs_url: "https://doi.org/10.63646/kpqm1958",
        pdf_url: "https://inatgi.net/index.php/jaiaa/article/download/806/945",
        comment: "Journal of AI Analytics and Applications | journal-article"
      },
      {
        paper_id: "10.20944/preprints202604.0339.v1",
        title: "Retrieval-Augmented Large Language Model Agents for Automated Scientific Literature Review Generation",
        summary: "This study investigates a method that integrates retrieval-augmented mechanisms into large language model agents for scientific literature review generation. The approach combines semantic retrieval, document filtering, knowledge fusion, language modeling, task planning, memory storage, and reinforcement optimization to improve coverage, accuracy, and language quality in complex literature environments.",
        authors: ["Ruotong Wang", "Nyutian Long", "Shunqi Liu", "Yuxi Wang", "Zhen Qi", "Huajun Zhang"],
        categories: [],
        primary_category: "",
        published: "2026-04-06",
        updated: "2026-07-30T14:22:32Z",
        abs_url: "https://doi.org/10.20944/preprints202604.0339.v1",
        pdf_url: "",
        comment: "MDPI AG | posted-content"
      },
      {
        paper_id: "10.3390/app16052244",
        title: "Hybrid Retrieval-Augmented Generation: Semantic and Structural Integration for Large Language Model Reasoning",
        summary: "Recent GraphRAG methods based on knowledge graphs often separate semantic relevance from structural reasoning paths. HybRAG proposes a hybrid retrieval framework that combines semantic node-level retrieval with structural path-level retrieval and retrieval-augmented fine-tuning to improve reasoning reliability, evidence quality, and scalability in complex knowledge graph question answering tasks.",
        authors: ["Hyewon Lee", "Sungsu Lim"],
        categories: [],
        primary_category: "",
        published: "2026-02-26",
        updated: "2026-05-14T14:47:26Z",
        abs_url: "https://doi.org/10.3390/app16052244",
        pdf_url: "",
        comment: "Applied Sciences | MDPI AG | journal-article"
      },
      {
        paper_id: "10.55041/isjem07213",
        title: "Speculative Retrieval-Augmented Generation for Cost-Efficient Large Language Model Inference",
        summary: "This work focuses on high inference latency and expensive computation cost in Retrieval-Augmented Generation. The proposed speculative RAG framework combines hybrid dense and sparse retrieval with speculative decoding, lightweight re-ranking, and verifier-based token checking to improve latency and token efficiency while retaining accuracy on factoid tasks.",
        authors: ["Dr. Sumalatha P", "Manoj Kumar"],
        categories: [],
        primary_category: "",
        published: "2026-05-06",
        updated: "2026-05-06T17:13:30Z",
        abs_url: "https://doi.org/10.55041/isjem07213",
        pdf_url: "",
        comment: "International Scientific Journal of Engineering and Management | journal-article"
      }
    ];

    const ARTIFACTS = [
      ["Raw response", "data/raw/crossref_response.json"],
      ["Raw records", "data/raw/crossref_records.json"],
      ["Clean CSV", "data/clean/papers_clean.csv"],
      ["Clean JSON", "data/clean/papers_clean.json"],
      ["Baseline metrics", "data/results/baseline_metrics.json"],
      ["Baseline answers", "data/results/baseline_answers.json"],
      ["Corruption log", "data/results/corruption_log.json"],
      ["Corrupted metrics", "data/results/corrupted_metrics.json"],
      ["Repaired metrics", "data/results/repaired_metrics.json"],
      ["Phase 1 report", "data/reports/phase1_report.md"],
      ["Corruption report", "data/reports/corruption_report.md"]
    ];

    const app = {
      raw: [],
      states: { baseline: [], corrupted: [], repaired: [] },
      metricsFiles: {},
      freshnessFiles: {},
      qualityFiles: {},
      artifactStatus: [],
      activeState: "baseline",
      selectedId: null
    };

    const $ = (id) => document.getElementById(id);

    function stripTags(value) {
      return String(value || "")
        .replace(/<[^>]*>/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    }

    function normalizeList(value) {
      if (Array.isArray(value)) return value.map(stripTags).filter(Boolean);
      if (typeof value === "string" && value.trim().startsWith("[")) {
        try {
          const parsed = JSON.parse(value);
          if (Array.isArray(parsed)) return parsed.map(stripTags).filter(Boolean);
        } catch {}
      }
      if (!value) return [];
      return [stripTags(value)].filter(Boolean);
    }

    function daysSince(dateText) {
      const date = new Date(`${dateText}T00:00:00Z`);
      if (Number.isNaN(date.getTime())) return null;
      const now = new Date();
      return Math.max(0, Math.floor((now - date) / 86400000));
    }

    function cleanRecord(record) {
      const title = stripTags(record.title);
      const summary = stripTags(record.summary);
      const authors = normalizeList(record.authors);
      const categories = normalizeList(record.categories);
      const published = String(record.published || "").slice(0, 10);
      const authorsJoined = stripTags(record.authors_joined) || authors.join(", ");
      const categoriesJoined = stripTags(record.categories_joined) || categories.join(", ");
      return {
        paper_id: String(record.paper_id || "").trim().toLowerCase(),
        title,
        summary,
        authors,
        authors_joined: authorsJoined,
        categories,
        categories_joined: categoriesJoined,
        primary_category: stripTags(record.primary_category),
        published,
        updated: stripTags(record.updated),
        age_days: record.age_days === 0 || record.age_days ? Number(record.age_days) : daysSince(published),
        abs_url: String(record.abs_url || ""),
        pdf_url: String(record.pdf_url || ""),
        comment: stripTags(record.comment),
        summary_chars: record.summary_chars === 0 || record.summary_chars ? Number(record.summary_chars) : summary.length,
        text_for_embedding: stripTags(record.text_for_embedding || record.content) || `Title: ${title} | Authors: ${authorsJoined} | Summary: ${summary}`
      };
    }

    function buildDataset(records) {
      return records
        .map(cleanRecord)
        .sort((a, b) => String(b.published).localeCompare(String(a.published)) || a.paper_id.localeCompare(b.paper_id));
    }

    function summarize(records) {
      const ids = records.map((record) => record.paper_id);
      const unique = new Set(ids);
      const missingSummary = records.filter((record) => !record.summary || record.summary.length < 100).length;
      const duplicateRows = records.length - unique.size;
      const staleRows = records.filter((record) => Number.isFinite(record.age_days) && record.age_days > 180).length;
      const avgSummary = records.length
        ? Math.round(records.reduce((sum, record) => sum + (record.summary_chars || 0), 0) / records.length)
        : 0;
      return { rows: records.length, unique: unique.size, missingSummary, duplicateRows, staleRows, avgSummary };
    }

    function renderMetrics() {
      const records = app.states[app.activeState];
      const summary = summarize(records);
      const metricsFile = app.metricsFiles[app.activeState];
      const freshnessFile = app.freshnessFiles[app.activeState];
      const qualityFile = app.qualityFiles[app.activeState];
      const values = [
        ["Rows", summary.rows],
        ["Unique IDs", summary.unique],
        ["Bad summary", summary.missingSummary],
        ["Duplicates", summary.duplicateRows],
        ["Stale >180d", summary.staleRows],
        ["Avg summary chars", summary.avgSummary]
      ];

      if (metricsFile) {
        ["retrieval_hit_rate", "mean_token_f1", "judge_accuracy", "mean_judge_score"].forEach((key) => {
          if (metricsFile[key] !== undefined) values.unshift([key, formatMetric(metricsFile[key])]);
        });
      }

      if (freshnessFile) {
        values.push(["Freshness", freshnessFile.is_fresh ? "PASS" : "FAIL"]);
        values.push(["Stale rows", `${freshnessFile.stale_rows}/${freshnessFile.total_rows}`]);
      }

      if (qualityFile) {
        values.push(["Quality", qualityFile.passed ? "PASS" : "FAIL"]);
      }

      $("metrics").innerHTML = `
        <table class="metrics-table">
          <tbody>
            ${values.map(([label, value]) => `
              <tr>
                <th>${escapeHtml(label)}</th>
                <td>${escapeHtml(value)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      `;
    }

    function formatMetric(value) {
      if (typeof value === "number") {
        if (Number.isInteger(value)) return String(value);
        return value.toFixed(3).replace(/\.0+$/, "").replace(/(\.\d*?)0+$/, "$1");
      }
      return String(value);
    }

    function renderBullets() {
      const base = summarize(app.states.baseline);
      const corrupt = summarize(app.states.corrupted);
      const repaired = summarize(app.states.repaired);
      const baselineMetrics = app.metricsFiles.baseline || {};
      const corruptedMetrics = app.metricsFiles.corrupted || {};
      const repairedMetrics = app.metricsFiles.repaired || {};
      const baselineFresh = app.freshnessFiles.baseline || {};
      const corruptedFresh = app.freshnessFiles.corrupted || {};
      const repairedFresh = app.freshnessFiles.repaired || {};
      const baselineQuality = app.qualityFiles.baseline || {};
      const corruptedQuality = app.qualityFiles.corrupted || {};
      const repairedQuality = app.qualityFiles.repaired || {};

      const rows = [
        {
          state: "Baseline",
          badge: "baseline",
          records: base.rows,
          hitRate: formatMetric(baselineMetrics.retrieval_hit_rate),
          f1: formatMetric(baselineMetrics.mean_token_f1),
          accuracy: formatMetric(baselineMetrics.judge_accuracy),
          freshness: `${baselineFresh.is_fresh ? "PASS" : "FAIL"} (${baselineFresh.stale_rows || 0}/${baselineFresh.total_rows || 0})`,
          quality: baselineQuality.passed ? "PASS" : "FAIL"
        },
        {
          state: "Corrupted",
          badge: "corrupted",
          records: corrupt.rows,
          hitRate: formatMetric(corruptedMetrics.retrieval_hit_rate),
          f1: formatMetric(corruptedMetrics.mean_token_f1),
          accuracy: formatMetric(corruptedMetrics.judge_accuracy),
          freshness: `${corruptedFresh.is_fresh ? "PASS" : "FAIL"} (${corruptedFresh.stale_rows || 0}/${corruptedFresh.total_rows || 0})`,
          quality: corruptedQuality.passed ? "PASS" : "FAIL"
        },
        {
          state: "Repaired",
          badge: "repaired",
          records: repaired.rows,
          hitRate: formatMetric(repairedMetrics.retrieval_hit_rate),
          f1: formatMetric(repairedMetrics.mean_token_f1),
          accuracy: formatMetric(repairedMetrics.judge_accuracy),
          freshness: `${repairedFresh.is_fresh ? "PASS" : "FAIL"} (${repairedFresh.stale_rows || 0}/${repairedFresh.total_rows || 0})`,
          quality: repairedQuality.passed ? "PASS" : "FAIL"
        }
      ];

      $("stateSummaryTable").innerHTML = rows.map((row) => `
        <tr>
          <td><span class="badge ${row.badge}">${escapeHtml(row.state)}</span></td>
          <td>${escapeHtml(row.records)}</td>
          <td>${escapeHtml(row.hitRate)}</td>
          <td>${escapeHtml(row.f1)}</td>
          <td>${escapeHtml(row.accuracy)}</td>
          <td>${escapeHtml(row.freshness)}</td>
          <td>${escapeHtml(row.quality)}</td>
        </tr>
      `).join("");
    }

    function renderRunResults() {
      const rows = [];
      const rawCount = app.raw.length;
      const baseline = summarize(app.states.baseline);
      const corrupted = summarize(app.states.corrupted);
      const repaired = summarize(app.states.repaired);
      const baselineMetrics = app.metricsFiles.baseline || {};
      const corruptedMetrics = app.metricsFiles.corrupted || {};
      const repairedMetrics = app.metricsFiles.repaired || {};
      const baselineFresh = app.freshnessFiles.baseline || {};
      const corruptedFresh = app.freshnessFiles.corrupted || {};
      const repairedFresh = app.freshnessFiles.repaired || {};

      rows.push(["Python requirement", "Needs 3.11-3.13"]);
      rows.push(["Raw records artifact", rawCount ? `FOUND - ${rawCount} raw records` : "MISSING"]);
      rows.push(["Baseline metrics", `${formatMetric(baselineMetrics.retrieval_hit_rate)} hit rate / ${formatMetric(baselineMetrics.mean_token_f1)} f1 / ${formatMetric(baselineMetrics.judge_accuracy)} accuracy`]);
      rows.push(["Corrupted metrics", `${formatMetric(corruptedMetrics.retrieval_hit_rate)} hit rate / ${formatMetric(corruptedMetrics.mean_token_f1)} f1 / ${formatMetric(corruptedMetrics.judge_accuracy)} accuracy`]);
      rows.push(["Repaired metrics", `${formatMetric(repairedMetrics.retrieval_hit_rate)} hit rate / ${formatMetric(repairedMetrics.mean_token_f1)} f1 / ${formatMetric(repairedMetrics.judge_accuracy)} accuracy`]);
      rows.push(["Freshness summary", `Baseline ${baselineFresh.is_fresh ? "PASS" : "FAIL"}; Corrupted ${corruptedFresh.is_fresh ? "PASS" : "FAIL"}; Repaired ${repairedFresh.is_fresh ? "PASS" : "FAIL"}`]);

      app.artifactStatus.forEach((item) => {
        rows.push([item.label, item.exists ? "FOUND" : "MISSING"]);
      });

      const found = app.artifactStatus.filter((item) => item.exists).length;
      const total = app.artifactStatus.length;
      $("runBadge").textContent = `${found}/${total} artifacts`;
      $("runBadge").className = `badge ${found === total ? "baseline" : "missing"}`;
      $("runResults").innerHTML = rows.map(([label, value]) => {
        const text = String(value);
        const cls = text.includes("PASS") || text === "FOUND" ? "baseline" : text === "MISSING" ? "missing" : "repaired";
        return `
          <div class="result-row">
            <span>${escapeHtml(label)}</span>
            <span class="badge ${cls}">${escapeHtml(text)}</span>
          </div>
        `;
      }).join("");
    }

    function bullets(items) {
      return items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
    }

    function renderRecords() {
      const query = $("search").value.trim().toLowerCase();
      const records = app.states[app.activeState].filter((record) => {
        const haystack = `${record.paper_id} ${record.title} ${record.summary} ${record.authors_joined}`.toLowerCase();
        return !query || haystack.includes(query);
      });
      const selected = app.selectedId || records[0]?.paper_id || null;
      app.selectedId = selected;
      $("records").innerHTML = records.map((record) => `
        <tr data-id="${escapeHtml(record.paper_id)}" class="${record.paper_id === selected ? "selected" : ""}">
          <td class="title-cell">
            <strong>${escapeHtml(record.title || "(missing title)")}</strong>
            <div class="summary-cell">${escapeHtml(record.summary || "(blank summary)")}</div>
          </td>
          <td>${escapeHtml(record.published || "n/a")}</td>
          <td>${record.age_days === null ? "n/a" : `${record.age_days} days`}</td>
        </tr>
      `).join("");
      renderDetail(records.find((record) => record.paper_id === selected) || records[0]);
    }

    function renderDetail(record) {
      if (!record) {
        $("detail").innerHTML = "<p>KhÃ´ng cÃ³ record Ä‘á»ƒ hiá»ƒn thá»‹.</p>";
        return;
      }
      $("detail").innerHTML = `
        <h2>${escapeHtml(record.title || "(missing title)")}</h2>
        <div class="meta">
          <span>${escapeHtml(record.paper_id)}</span>
          <span>${escapeHtml(record.published || "n/a")}</span>
          <span>${record.age_days === null ? "n/a" : `${record.age_days} days old`}</span>
          <span>${escapeHtml(record.primary_category || "no category")}</span>
        </div>
        <div class="detail-section">
          <h3>Authors</h3>
          <p>${escapeHtml(record.authors_joined || "n/a")}</p>
        </div>
        <div class="detail-section">
          <h3>Summary</h3>
          <p>${escapeHtml(record.summary || "(blank summary)")}</p>
        </div>
        <div class="detail-section">
          <h3>Text for Embedding</h3>
          <p class="mono">${escapeHtml(record.text_for_embedding || "")}</p>
        </div>
        <div class="detail-section">
          <h3>Artifact Link</h3>
          <p class="mono">${escapeHtml(record.abs_url || "n/a")}</p>
        </div>
      `;
    }

    function updateState(state) {
      app.activeState = state;
      app.selectedId = null;
      document.querySelectorAll("button[data-state]").forEach((button) => {
        button.classList.toggle("active", button.dataset.state === state);
      });
      $("stateTitle").textContent = `${titleCase(state)} dataset`;
      $("stateBadge").className = `badge ${state}`;
      $("stateBadge").textContent = titleCase(state);
      $("artifactBadge").textContent = app.metricsFiles[state] ? "metrics artifact" : "raw-derived";
      $("artifactBadge").className = `badge ${app.metricsFiles[state] ? state : "missing"}`;
      renderMetrics();
      renderBullets();
      renderRunResults();
      renderRecords();
    }

    function titleCase(value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }

    function escapeHtml(value) {
      return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
    }

    async function loadJson(path) {
      try {
        const response = await fetch(path, { cache: "no-store" });
        if (!response.ok) throw new Error(`${path}: ${response.status}`);
        return response.json();
      } catch (error) {
        if (EMBEDDED_DATA[path]) {
          return EMBEDDED_DATA[path];
        }
        throw error;
      }
    }

    async function loadMetrics() {
      const pairs = [
        ["baseline", PATHS.baselineMetrics],
        ["corrupted", PATHS.corruptedMetrics],
        ["repaired", PATHS.repairedMetrics]
      ];
      for (const [state, path] of pairs) {
        try {
          app.metricsFiles[state] = await loadJson(path);
        } catch {
          app.metricsFiles[state] = null;
        }
      }
    }

    async function loadFreshness() {
      const pairs = [
        ["baseline", PATHS.baselineFreshness],
        ["corrupted", PATHS.corruptedFreshness],
        ["repaired", PATHS.repairedFreshness]
      ];
      for (const [state, path] of pairs) {
        try {
          app.freshnessFiles[state] = await loadJson(path);
        } catch {
          app.freshnessFiles[state] = null;
        }
      }
    }

    async function loadQuality() {
      const pairs = [
        ["baseline", PATHS.baselineQuality],
        ["corrupted", PATHS.corruptedQuality],
        ["repaired", PATHS.repairedQuality]
      ];
      for (const [state, path] of pairs) {
        try {
          app.qualityFiles[state] = await loadJson(path);
        } catch {
          app.qualityFiles[state] = null;
        }
      }
    }

    async function loadArtifactStatus() {
      const checks = [];
      for (const [label, path] of ARTIFACTS) {
        try {
          const response = await fetch(path, { method: "HEAD", cache: "no-store" });
          checks.push({ label, path, exists: response.ok });
        } catch {
          const fallback = window.location.protocol === "file:" || EMBEDDED_DATA[path];
          checks.push({ label, path, exists: fallback });
        }
      }
      app.artifactStatus = checks;
    }

    function setStateData(rawRecords, baselineRecords, corruptedRecords, repairedRecords, sourceLabel) {
      app.raw = rawRecords || [];
      app.states.baseline = buildDataset(baselineRecords || []);
      app.states.corrupted = buildDataset(corruptedRecords || []);
      app.states.repaired = buildDataset(repairedRecords || []);
      $("statusDot").className = "dot ready";
      $("statusText").textContent = `${sourceLabel}: baseline=${app.states.baseline.length}, corrupted=${app.states.corrupted.length}, repaired=${app.states.repaired.length}`;
      updateState(app.activeState);
    }

    async function init() {
      try {
        await loadArtifactStatus();
        await loadMetrics();
        await loadFreshness();
        await loadQuality();
        const [rawRecords, baselineRecords, corruptedRecords, repairedRecords] = await Promise.all([
          loadJson(PATHS.raw).catch(() => []),
          loadJson(PATHS.baselineData),
          loadJson(PATHS.corruptedData),
          loadJson(PATHS.repairedData)
        ]);
        setStateData(rawRecords, baselineRecords, corruptedRecords, repairedRecords, "Loaded artifact files");
      } catch (error) {
        $("statusDot").className = "dot error";
        $("statusText").textContent = "KhÃ´ng Ä‘á»c Ä‘Æ°á»£c clean/corrupted/repaired JSON. Má»Ÿ báº±ng http://localhost:8000 vÃ  kiá»ƒm tra cÃ¡c file trong data/clean/.";
        renderRunResults();
      }
    }

    document.querySelectorAll("button[data-state]").forEach((button) => {
      button.addEventListener("click", () => updateState(button.dataset.state));
    });

    $("search").addEventListener("input", renderRecords);

    $("records").addEventListener("click", (event) => {
      const row = event.target.closest("tr[data-id]");
      if (!row) return;
      app.selectedId = row.dataset.id;
      renderRecords();
    });

    init();
  
