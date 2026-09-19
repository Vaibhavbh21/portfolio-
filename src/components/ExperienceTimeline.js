import React from 'react';
import { motion } from 'framer-motion';
import { Building2, CheckCircle2, Calendar, MapPin } from 'lucide-react';

const ExperienceTimeline = ({ experiences }) => {
  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Glowing Vertical Timeline Bar */}
      <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-indigo-500 via-violet-500 to-cyan-500 opacity-30 md:-translate-x-1/2 pointer-events-none"></div>

      <div className="space-y-12 relative">
        {experiences.map((exp, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex flex-col md:flex-row items-start ${
                isEven ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Center Node Orb */}
              <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-indigo-400 z-20 shadow-glow-indigo">
                <div className="w-1.5 h-1.5 rounded-full bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              </div>

              {/* Card Container */}
              <div className={`w-full md:w-[calc(50%-2.5rem)] pl-12 md:pl-0 ${isEven ? 'md:text-right' : ''}`}>
                <div className="bento-card p-6 md:p-8 hover:border-white/30 group">
                  
                  {/* Company & Period Badge */}
                  <div className={`flex flex-wrap items-center gap-2 mb-3 ${isEven ? 'md:justify-end' : ''}`}>
                    <span className="px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      {exp.period}
                    </span>
                    <span className="text-xs text-zinc-500 font-mono flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                    {exp.role}
                  </h3>

                  <div className={`flex items-center gap-2 text-zinc-400 font-medium text-sm mb-5 ${isEven ? 'md:justify-end' : ''}`}>
                    <Building2 className="w-4 h-4 text-zinc-500" />
                    <span>{exp.company}</span>
                  </div>

                  <ul className="space-y-2.5 text-left">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-zinc-300 text-xs sm:text-sm leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
