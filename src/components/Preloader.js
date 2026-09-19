import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot } from 'lucide-react';

const Preloader = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (onComplete) onComplete();
    }, 1200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center pointer-events-none"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-white/20 flex items-center justify-center relative shadow-glow-indigo">
              <Bot className="w-8 h-8 text-white animate-pulse" />
              <div className="absolute inset-0 rounded-2xl bg-indigo-500/10 animate-ping pointer-events-none"></div>
            </div>
            
            <div className="flex flex-col items-center">
              <span className="text-sm font-bold tracking-widest text-white font-display">
                VAIBHAV BHARDWAJ
              </span>
              <span className="text-[10px] font-mono text-zinc-500 tracking-wider mt-0.5">
                INITIALIZING AI PORTFOLIO...
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
