import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Cpu, Sparkles, Workflow, Layers, Terminal, Zap, Database, GitBranch, Code } from 'lucide-react';

const FloatingTechIcons = () => {
  const techIcons = [
    { icon: <Code />, label: 'Python', position: { top: '10%', left: '5%' }, delay: 0 },
    { icon: <Bot />, label: 'AI Agents', position: { top: '15%', right: '8%' }, delay: 0.2 },
    { icon: <Workflow />, label: 'LangChain', position: { bottom: '20%', left: '8%' }, delay: 0.4 },
    { icon: <Sparkles />, label: 'GenAI & LLMs', position: { bottom: '22%', right: '10%' }, delay: 0.6 },
    { icon: <Database />, label: 'RAG / Vector DB', position: { top: '30%', left: '7%' }, delay: 0.8 },
    { icon: <Cpu />, label: 'OpenAI API', position: { top: '38%', right: '5%' }, delay: 1.0 },
    { icon: <Layers />, label: 'FastAPI', position: { bottom: '35%', left: '6%' }, delay: 1.2 },
    { icon: <Terminal />, label: 'Docker', position: { bottom: '15%', right: '8%' }, delay: 1.4 },
    { icon: <Zap />, label: 'Automation', position: { top: '50%', left: '4%' }, delay: 1.6 },
    { icon: <GitBranch />, label: 'Git / GitHub', position: { top: '60%', right: '6%' }, delay: 1.8 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {techIcons.map((tech, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.35, 0.75, 0.35],
            scale: [1, 1.08, 1],
            y: [0, -16, 0],
            rotate: [0, 4, -4, 0]
          }}
          transition={{
            opacity: { duration: 3.5, repeat: Infinity, delay: tech.delay },
            scale: { duration: 2.5, repeat: Infinity, delay: tech.delay },
            y: { duration: 4 + index * 0.4, repeat: Infinity, ease: "easeInOut", delay: tech.delay },
            rotate: { duration: 5 + index * 0.3, repeat: Infinity, ease: "easeInOut", delay: tech.delay }
          }}
          whileHover={{ scale: 1.25, opacity: 1 }}
          className="absolute group cursor-pointer"
          style={tech.position}
        >
          <div className="relative">
            <div className="w-13 h-13 sm:w-14 sm:h-14 bg-dark-800/80 backdrop-blur-md rounded-xl border border-ai-indigo/30 flex items-center justify-center hover:border-ai-cyan transition-all duration-300 shadow-md hover:shadow-ai-indigo/30">
              <div className="text-ai-indigo group-hover:text-ai-cyan transition-colors">
                {React.cloneElement(tech.icon, { size: 22 })}
              </div>
            </div>
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileHover={{ opacity: 1, y: -4 }}
              className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs text-gray-300 font-medium pointer-events-none bg-dark-900/90 px-2 py-0.5 rounded border border-ai-indigo/20"
            >
              {tech.label}
            </motion.span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingTechIcons;


