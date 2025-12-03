import React from 'react';
import { motion } from 'framer-motion';
import { Database, Code2, FileCode, Server, Layers, Terminal, Zap, Cpu, BarChart3, TrendingUp } from 'lucide-react';

const FloatingTechIcons = () => {
  const techIcons = [
    { icon: <Code2 />, label: 'Python', position: { top: '10%', left: '5%' }, delay: 0 },
    { icon: <Database />, label: 'SQL', position: { top: '15%', right: '8%' }, delay: 0.2 },
    { icon: <FileCode />, label: 'Power BI', position: { bottom: '20%', left: '10%' }, delay: 0.4 },
    { icon: <BarChart3 />, label: 'Excel', position: { bottom: '25%', right: '12%' }, delay: 0.6 },
    { icon: <Server />, label: 'Data Science', position: { top: '30%', left: '8%' }, delay: 0.8 },
    { icon: <TrendingUp />, label: 'AI/ML', position: { top: '40%', right: '5%' }, delay: 1.0 },
    { icon: <Layers />, label: 'Analytics', position: { bottom: '35%', left: '6%' }, delay: 1.2 },
    { icon: <Terminal />, label: 'Linux', position: { bottom: '15%', right: '8%' }, delay: 1.4 },
    { icon: <Zap />, label: 'Fast', position: { top: '50%', left: '4%' }, delay: 1.6 },
    { icon: <Cpu />, label: 'Optimized', position: { top: '60%', right: '6%' }, delay: 1.8 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {techIcons.map((tech, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.1, 1],
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            opacity: { duration: 3, repeat: Infinity, delay: tech.delay },
            scale: { duration: 2, repeat: Infinity, delay: tech.delay },
            y: { duration: 4 + index * 0.5, repeat: Infinity, ease: "easeInOut", delay: tech.delay },
            rotate: { duration: 5 + index * 0.3, repeat: Infinity, ease: "easeInOut", delay: tech.delay }
          }}
          whileHover={{ scale: 1.3, opacity: 1 }}
          className="absolute group cursor-pointer"
          style={tech.position}
        >
          <div className="relative">
            <div className="w-14 h-14 bg-gradient-to-br from-neon-purple/20 to-neon-orange/20 backdrop-blur-sm rounded-xl border border-neon-purple/30 flex items-center justify-center hover:border-neon-orange/50 transition-all duration-300 hover:shadow-lg hover:shadow-neon-purple/50">
              <div className="text-neon-purple group-hover:text-neon-orange transition-colors">
                {React.cloneElement(tech.icon, { size: 24 })}
              </div>
            </div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: -5 }}
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs text-gray-400 font-semibold pointer-events-none"
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
