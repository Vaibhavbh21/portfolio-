import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, CheckCircle2, Cpu, Layers } from 'lucide-react';
import ProjectVisual from './ProjectVisual';

const projectDetailsMap = {
  "01": {
    architecture: "Multi-stage RAG Pipeline + Custom Sentiment Extractor",
    highlights: [
      "Processes 10,000+ Amazon product reviews per batch using asynchronous Pandas data pipelines.",
      "Extracts structured sentiment vectors into FAISS vector database for sub-100ms semantic similarity search.",
      "Integrated OpenAI GPT-4o for natural language summary and recommendation synthesis."
    ],
    codeSnippet: `# Amazon Review RAG Vector Search
from langchain_community.vectorstores import FAISS
from langchain_openai import OpenAIEmbeddings

embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
vector_store = FAISS.load_local("amazon_reviews_idx", embeddings)

docs = vector_store.similarity_search(query, k=5)
response = llm.invoke(format_prompt(docs, query))`
  },
  "02": {
    architecture: "Agentic Browser Automation + Resume Parser",
    highlights: [
      "Automates end-to-end job portal form filling using Python and Selenium Webdriver.",
      "Parses target job descriptions with LangChain to auto-generate contextually aligned resume summary bullets.",
      "Implements anti-bot detection evasions and robust exception retries."
    ],
    codeSnippet: `# Job Application Agent Form Ingestion
from selenium import webdriver
from langchain.agents import initialize_agent

driver = webdriver.Chrome(options=chrome_options)
driver.get(target_job_url)

parsed_data = parse_job_description(driver.page_source)
tailored_bullets = generate_tailored_summary(parsed_data, resume_profile)`
  },
  "03": {
    architecture: "Async Webhook API + Contextual RAG Auto-Responder",
    highlights: [
      "Ingests real-time WhatsApp incoming lead webhooks via FastAPI.",
      "Queries vector inventory store to retrieve relevant product options, pricing, and availability.",
      "Sends instant human-like replies back to WhatsApp business API within 1.5 seconds."
    ],
    codeSnippet: `# WhatsApp Lead Webhook Endpoint
@app.post("/webhook/whatsapp")
async def handle_incoming_lead(request: Request):
    payload = await request.json()
    user_msg = payload["message"]["text"]
    context = vector_db.similarity_search(user_msg, k=3)
    reply = generate_ai_reply(user_msg, context)
    return await whatsapp_api.send_message(payload["sender"], reply)`
  },
  "04": {
    architecture: "High-Throughput PDF Chunking & Vector Retrieval Engine",
    highlights: [
      "Extracts complex PDF text layouts, tables, and sections using PyPDF & LangChain Document Loaders.",
      "Implements hybrid BM25 + FAISS vector retrieval for precise page and paragraph attribution.",
      "Exposes REST endpoints in FastAPI with automated Swagger documentation."
    ],
    codeSnippet: `# Hybrid Search Retriever Setup
from langchain.retrievers import EnsembleRetriever
from langchain_community.retrievers import BM25Retriever

bm25_retriever = BM25Retriever.from_documents(pdf_chunks)
faiss_retriever = faiss_vector_store.as_retriever(search_kwargs={"k": 3})

ensemble_retriever = EnsembleRetriever(
    retrievers=[bm25_retriever, faiss_retriever], weights=[0.4, 0.6]
)`
  },
  "05": {
    architecture: "Lead Web Scraping + AI Persona Cold Email Generator",
    highlights: [
      "Scrapes prospect company websites to extract core value propositions and key decision-maker titles.",
      "Prompts LLMs to draft hyper-personalized cold outreach emails customized to prospect pain points.",
      "Automates bulk email dispatch through SMTP & API integrations with rate limit throttling."
    ],
    codeSnippet: `# Cold Email Personalization Prompt Pipeline
def generate_personalized_email(company_insights, prospect_name):
    prompt = f"""Draft a concise cold outreach email to {prospect_name}.
    Company Context: {company_insights}
    Tone: Professional, direct, ROI-focused."""
    return llm.predict(prompt)`
  }
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const extraDetails = projectDetailsMap[project.id] || {
    architecture: "Python & LLM Orchestration Stack",
    highlights: ["Custom AI implementation built for scalable production deployment."],
    codeSnippet: `# AI Pipeline Execution\nres = llm.predict("Process inputs")`
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl z-0"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-zinc-950 border border-white/20 p-6 sm:p-8 shadow-2xl text-left"
        >
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-zinc-900 border border-white/15 text-xs font-mono text-zinc-400">
              PROJECT #{project.id}
            </span>
            <span className="text-xs font-mono text-indigo-400 font-semibold">
              PRODUCTION READY
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            {project.title}
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Workflow Diagram */}
          <div className="mb-6">
            <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">SYSTEM FLOW</h4>
            <ProjectVisual id={project.id} />
          </div>

          {/* Architecture Breakdown */}
          <div className="mb-6 p-4 rounded-xl bg-zinc-900/80 border border-white/10">
            <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1.5 flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-400" />
              ARCHITECTURE OVERVIEW
            </h4>
            <p className="text-sm font-semibold text-white">
              {extraDetails.architecture}
            </p>
          </div>

          {/* Key Engineering Highlights */}
          <div className="mb-6">
            <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-3">KEY HIGHLIGHTS & CAPABILITIES</h4>
            <ul className="space-y-2.5">
              {extraDetails.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Code Snippet Box */}
          <div className="mb-6">
            <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              CODE SNIPPET PREVIEW
            </h4>
            <pre className="p-4 rounded-xl bg-black border border-white/15 text-xs font-mono text-zinc-300 overflow-x-auto leading-relaxed">
              <code>{extraDetails.codeSnippet}</code>
            </pre>
          </div>

          {/* Tech Stack Pills */}
          <div className="mb-8">
            <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">TECH STACK</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <span key={idx} className="px-3 py-1 rounded-lg bg-zinc-900 border border-white/15 text-xs font-mono text-zinc-200">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-zinc-900 border border-white/15 text-xs font-semibold text-zinc-300 hover:text-white hover:border-white/30 transition-colors"
            >
              Close
            </button>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-2.5 px-5"
            >
              <span>View Source Code</span>
              <Github className="w-4 h-4" />
            </a>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
