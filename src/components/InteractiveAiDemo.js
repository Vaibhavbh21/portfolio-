import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Play, CheckCircle2, Cpu, Database, Bot, Sparkles, RefreshCw } from 'lucide-react';

const demos = [
  {
    id: 'rag',
    title: 'PDF RAG Engine',
    subtitle: 'Vector Retrieval & Contextual QA',
    icon: <Database className="w-4 h-4 text-indigo-400" />,
    prompt: 'How does the financial model handle Q3 revenue projections?',
    steps: [
      { label: 'Ingesting & Chunking PDF Document', duration: '200ms', status: 'done' },
      { label: 'Generating Dense Embeddings (text-embedding-3-small)', duration: '150ms', status: 'done' },
      { label: 'Querying FAISS Vector Database (Top-K=3, Cosine Sim > 0.88)', duration: '80ms', status: 'done' },
      { label: 'Synthesizing Response with GPT-4o Context Injection', duration: '310ms', status: 'done' }
    ],
    output: `[RAG RESPONSE]
Q3 revenue projections are modeled with a baseline growth of +14.2% YoY, driven primarily by recurring enterprise subscriptions. 

Key Drivers:
• Expansion ARR: $420K across Tier-1 accounts
• Churn Reduction: Down to 1.1% post-RAG deployment
• Citation: Page 14, Paragraph 3 [Confidence Score: 0.94]`
  },
  {
    id: 'agent',
    title: 'Job Auto-Applier',
    subtitle: 'Browser Automation & Resume Matcher',
    icon: <Bot className="w-4 h-4 text-cyan-400" />,
    prompt: 'Match resume against Senior AI Engineer posting at Tech Corp.',
    steps: [
      { label: 'Scraping Job Description & Requirement Keywords', duration: '180ms', status: 'done' },
      { label: 'Executing Semantic Skill Gap Analysis via LangChain', duration: '240ms', status: 'done' },
      { label: 'Tailoring Bullet Points & Cover Note Persona', duration: '300ms', status: 'done' },
      { label: 'Automating Selenium Form Input & Verification', duration: '420ms', status: 'done' }
    ],
    output: `[AGENT WORKFLOW COMPLETE]
Match Score: 96% (Strong Alignment)

Key Skill Hits:
✓ Python, PyTorch, LangChain, FastAPI, FAISS
✓ Enterprise RAG Systems & Agentic Workflows

Action Summary:
• Form Fields Completed: 18/18
• Custom Cover Letter: Generated & Attached
• Application Status: Submitted Successfully!`
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp Lead Bot',
    subtitle: 'RAG Lead Qualification & Auto-Reply',
    icon: <Sparkles className="w-4 h-4 text-violet-400" />,
    prompt: 'Customer: "Hi, do you offer custom AI agent development for e-commerce?"',
    steps: [
      { label: 'Incoming Webhook Received & Authenticated', duration: '40ms', status: 'done' },
      { label: 'Fetching Business Service Catalog from Vector Store', duration: '90ms', status: 'done' },
      { label: 'Intent Classification: Sales Inquiry / Custom AI Solution', duration: '110ms', status: 'done' },
      { label: 'Generating Natural Tone Response via Fine-tuned Prompt', duration: '210ms', status: 'done' }
    ],
    output: `[AUTO-RESPONSE SENT]
"Hello! Yes, we specialize in building custom AI agents for e-commerce, including review analysis, automated customer support, and inventory RAG bots. 

Would you like to schedule a 15-minute demo call or view sample case studies?"`
  }
];

const InteractiveAiDemo = () => {
  const [activeTab, setActiveTab] = useState(demos[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(demos[0].steps.length);

  const handleRunDemo = (demo) => {
    setActiveTab(demo);
    setIsRunning(true);
    setCurrentStep(0);

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= demo.steps.length) {
          clearInterval(interval);
          setIsRunning(false);
          return demo.steps.length;
        }
        return prev + 1;
      });
    }, 450);
  };

  return (
    <div className="bento-card p-6 md:p-8 relative border border-white/15 overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/20 flex items-center justify-center">
            <Terminal className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              LIVE AI SYSTEM SIMULATOR
            </h3>
            <p className="text-xs text-zinc-400">Interactive execution of AI pipelines and agentic workflows</p>
          </div>
        </div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          REALTIME ENGINE READY
        </span>
      </div>

      {/* Tabs Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        {demos.map((demo) => {
          const isSelected = activeTab.id === demo.id;
          return (
            <button
              key={demo.id}
              onClick={() => handleRunDemo(demo)}
              className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex items-center justify-between ${
                isSelected
                  ? 'bg-zinc-850 border-white/30 shadow-md'
                  : 'bg-zinc-900/60 border-white/10 hover:border-white/20 text-zinc-400 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-zinc-950 border border-white/10">
                  {demo.icon}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">{demo.title}</h4>
                  <p className="text-[10px] text-zinc-400 font-mono">{demo.subtitle}</p>
                </div>
              </div>
              <Play className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-zinc-500'}`} />
            </button>
          );
        })}
      </div>

      {/* Terminal Sandbox Box */}
      <div className="rounded-xl bg-zinc-950 border border-white/15 p-5 font-mono text-xs overflow-hidden shadow-2xl">
        
        {/* Terminal Bar */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10 text-zinc-500 text-[11px]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
            <span className="ml-2 font-mono text-zinc-400 text-[10px]">ai-orchestrator.py --exec {activeTab.id}</span>
          </div>

          <button
            onClick={() => handleRunDemo(activeTab)}
            disabled={isRunning}
            className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-3 h-3 ${isRunning ? 'animate-spin' : ''}`} />
            <span>Re-run</span>
          </button>
        </div>

        {/* Prompt Input Line */}
        <div className="mb-4 text-zinc-300 flex items-start gap-2 bg-zinc-900/80 p-3 rounded-lg border border-white/10">
          <span className="text-indigo-400 font-bold">$</span>
          <div>
            <span className="text-zinc-500 text-[10px] uppercase block tracking-wider font-mono">INPUT PROMPT</span>
            <span className="text-zinc-200">{activeTab.prompt}</span>
          </div>
        </div>

        {/* Execution Steps */}
        <div className="space-y-2 mb-5">
          {activeTab.steps.map((step, idx) => {
            const isCompleted = idx < currentStep;
            const isCurrent = idx === currentStep && isRunning;
            return (
              <div
                key={idx}
                className={`flex items-center justify-between p-2 rounded transition-colors ${
                  isCompleted ? 'text-zinc-200 bg-white/5' : isCurrent ? 'text-indigo-300 bg-indigo-500/10' : 'text-zinc-600'
                }`}
              >
                <div className="flex items-center gap-2">
                  {isCompleted ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  ) : isCurrent ? (
                    <Cpu className="w-3.5 h-3.5 text-indigo-400 animate-spin shrink-0" />
                  ) : (
                    <div className="w-3.5 h-3.5 rounded-full border border-zinc-700 shrink-0"></div>
                  )}
                  <span>{step.label}</span>
                </div>
                <span className="text-[10px] text-zinc-500 font-mono">{step.duration}</span>
              </div>
            );
          })}
        </div>

        {/* Final Output Display */}
        <AnimatePresence mode="wait">
          {currentStep >= activeTab.steps.length && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-4 rounded-lg bg-zinc-900 border border-emerald-500/30 text-emerald-300 whitespace-pre-wrap leading-relaxed shadow-glow-indigo"
            >
              {activeTab.output}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default InteractiveAiDemo;
