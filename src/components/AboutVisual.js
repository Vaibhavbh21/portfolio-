import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Bot, Zap, ArrowRight } from 'lucide-react';

const AboutVisual = () => {
  const pipelineNodes = [
    {
      id: 'llm',
      title: 'LLM Core',
      desc: 'OpenAI GPT-4o / Foundation Models',
      icon: <Cpu className="w-5 h-5 text-white" />,
      tag: 'INPUT'
    },
    {
      id: 'rag',
      title: 'RAG Retrieval',
      desc: 'FAISS / Dense & Hybrid Vector Search',
      icon: <Database className="w-5 h-5 text-indigo-400" />,
      tag: 'CONTEXT'
    },
    {
      id: 'agent',
      title: 'Agentic Reasoning',
      desc: 'LangChain & LangGraph Orchestration',
      icon: <Bot className="w-5 h-5 text-violet-400" />,
      tag: 'LOGIC'
    },
    {
      id: 'automation',
      title: 'AI Automation',
      desc: 'Async FastAPI & Process Execution',
      icon: <Zap className="w-5 h-5 text-cyan-400" />,
      tag: 'OUTPUT'
    }
  ];

  return (
    <div className="bento-card p-6 md:p-8 relative group border border-white/15">
      {/* Top Header Badge */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-ping"></div>
          <span className="text-xs font-mono text-zinc-300 font-semibold uppercase tracking-wider">
            AI PIPELINE ARCHITECTURE
          </span>
        </div>
        <span className="text-[10px] font-mono text-zinc-500 bg-zinc-900 px-2.5 py-1 rounded-full border border-white/10">
          v2.4 ACTIVE
        </span>
      </div>

      {/* Nodes Flow */}
      <div className="space-y-4 relative">
        {pipelineNodes.map((node, index) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.12 }}
            className="relative z-10 flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/90 border border-white/10 hover:border-white/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-white/15 flex items-center justify-center shrink-0">
                {node.icon}
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  {node.title}
                </h4>
                <p className="text-xs text-zinc-400 font-normal">{node.desc}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-zinc-500 px-2 py-0.5 rounded bg-zinc-950 border border-white/10">
                {node.tag}
              </span>
              {index < pipelineNodes.length - 1 && (
                <ArrowRight className="w-4 h-4 text-zinc-600 hidden sm:block" />
              )}
            </div>
          </motion.div>
        ))}

        {/* Animated Connecting Vertical Line */}
        <div className="absolute left-[27px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-indigo-500 via-violet-500 to-cyan-500 opacity-30 pointer-events-none z-0"></div>
      </div>
    </div>
  );
};

export default AboutVisual;
