import React from 'react';
import { ArrowRight, Sparkles, FileText, MessageSquare, Mail, Briefcase, ShoppingCart } from 'lucide-react';

const projectFlows = {
  "01": {
    steps: ["Reviews", "AI Agent", "Recommendations"],
    icon: <ShoppingCart className="w-3.5 h-3.5 text-indigo-400" />
  },
  "02": {
    steps: ["Job Query", "AI Extractor", "Automation", "Application"],
    icon: <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
  },
  "03": {
    steps: ["Lead Query", "AI RAG", "Context", "Response"],
    icon: <MessageSquare className="w-3.5 h-3.5 text-violet-400" />
  },
  "04": {
    steps: ["PDF Doc", "Embeddings", "Vector Search", "LLM Answer"],
    icon: <FileText className="w-3.5 h-3.5 text-indigo-400" />
  },
  "05": {
    steps: ["Prospect Lead", "AI Personalizer", "Outreach Email"],
    icon: <Mail className="w-3.5 h-3.5 text-cyan-400" />
  }
};

const ProjectVisual = ({ id }) => {
  const flow = projectFlows[id];
  if (!flow) return null;

  return (
    <div className="w-full my-4 p-3 rounded-xl bg-zinc-950/80 border border-white/10 group-hover:border-white/25 transition-all">
      <div className="flex items-center gap-1.5 mb-2">
        <Sparkles className="w-3 h-3 text-zinc-400" />
        <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">SYSTEM FLOW</span>
      </div>
      
      <div className="flex items-center flex-wrap gap-1.5 text-xs font-mono text-zinc-300">
        {flow.steps.map((step, index) => (
          <React.Fragment key={index}>
            <span className="px-2 py-1 rounded bg-zinc-900 border border-white/10 text-[11px] font-medium flex items-center gap-1">
              {index === 1 && flow.icon}
              {step}
            </span>
            {index < flow.steps.length - 1 && (
              <ArrowRight className="w-3 h-3 text-zinc-600 shrink-0" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProjectVisual;
