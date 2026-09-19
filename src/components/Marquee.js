import React from 'react';
import { Sparkles } from 'lucide-react';

const Marquee = ({ items }) => {
  // Duplicate array to enable seamless infinite scroll loop
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden py-4 relative group">
      {/* Left/Right Fading Vignette Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] gap-4">
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="bento-card-subtle px-5 py-3 flex items-center gap-2.5 shrink-0 hover:border-white/30 cursor-default"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-xs sm:text-sm font-medium text-zinc-200 font-mono tracking-wide">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
