/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#000000',
          900: '#050505',
          850: '#09090b',
          800: '#121215',
          750: '#18181b',
          700: '#27272a',
          600: '#3f3f46',
        },
        ai: {
          indigo: '#6366f1',
          violet: '#8b5cf6',
          purple: '#a855f7',
          cyan: '#06b6d4',
          blue: '#3b82f6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'bento': '0 4px 25px -2px rgba(0, 0, 0, 0.9), inset 0 1px 1px 0 rgba(255, 255, 255, 0.05)',
        'bento-hover': '0 12px 35px -4px rgba(99, 102, 241, 0.15), inset 0 1px 1px 0 rgba(255, 255, 255, 0.12)',
        'glow-indigo': '0 0 30px -5px rgba(99, 102, 241, 0.3)',
        'glow-cyan': '0 0 30px -5px rgba(6, 182, 212, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'glow-pulse': {
          '0%': { opacity: 0.3, transform: 'scale(1)' },
          '100%': { opacity: 0.7, transform: 'scale(1.08)' },
        },
      },
    },
  },
  plugins: [],
}
