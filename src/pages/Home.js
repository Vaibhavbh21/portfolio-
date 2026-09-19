import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Bot,
  ArrowRight,
  ArrowUpRight,
  Database,
  Code,
  Zap,
  Layers,
  Mail,
  Github,
  ExternalLink
} from 'lucide-react';
import ProjectVisual from '../components/ProjectVisual';
import ExperienceTimeline from '../components/ExperienceTimeline';
import Marquee from '../components/Marquee';
import ProjectModal from '../components/ProjectModal';

const Home = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Copy email helper
  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('Vaibhavbhardwaj1942@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // Smooth scroll helper
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Shared scroll reveal transition props
  const sectionReveal = {
    initial: { opacity: 0, y: 35, scale: 0.98 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }
  };

  // 1. EXPERTISE DATA
  const expertiseItems = [
    {
      title: "Generative AI",
      description: "Building practical applications powered by modern LLMs.",
      tag: "LLMs & GenAI",
      icon: <Sparkles className="w-6 h-6 text-white" />,
      colSpan: "lg:col-span-2"
    },
    {
      title: "RAG Systems",
      description: "Building document intelligence and knowledge retrieval systems.",
      tag: "Retrieval & Vectors",
      icon: <Database className="w-6 h-6 text-indigo-400" />,
      colSpan: "lg:col-span-1"
    },
    {
      title: "AI Agents",
      description: "Creating agentic workflows capable of using tools and automating tasks.",
      tag: "Agentic Workflows",
      icon: <Bot className="w-6 h-6 text-violet-400" />,
      colSpan: "lg:col-span-1"
    },
    {
      title: "LLM Applications",
      description: "Integrating LLMs into real-world applications and business workflows.",
      tag: "Full Application Stack",
      icon: <Code className="w-6 h-6 text-cyan-400" />,
      colSpan: "lg:col-span-2"
    },
    {
      title: "AI Automation",
      description: "Automating repetitive tasks using AI, Python, APIs, and browser automation.",
      tag: "Process Automation",
      icon: <Zap className="w-6 h-6 text-amber-400" />,
      colSpan: "lg:col-span-2"
    },
    {
      title: "AI Backend",
      description: "Building AI APIs and backend systems using Python and FastAPI.",
      tag: "FastAPI & Microservices",
      icon: <Layers className="w-6 h-6 text-emerald-400" />,
      colSpan: "lg:col-span-1"
    }
  ];

  // 2. EXPERIENCE DATA
  const experiences = [
    {
      role: "AI Engineer",
      company: "SGFinance",
      period: "Aug 2025 – Present",
      location: "Remote",
      bullets: [
        "Built an AI-powered WhatsApp lead responder using LangChain, RAG, and Selenium, achieving sub-5 second response time and automating 100+ daily customer interactions.",
        "Developed and deployed the company website end-to-end, handling backend, frontend, and deployment independently using modern web technologies.",
        "Built a production-grade PDF RAG system using hybrid retrieval (semantic vector search + BM25), enabling high-accuracy document Q&A and scalable knowledge extraction from unstructured PDFs."
      ]
    },
    {
      role: "Data Science Intern",
      company: "LG Electronics India Pvt Ltd",
      period: "Feb 2025 – Aug 2025",
      location: "Noida, Uttar Pradesh",
      bullets: [
        "Developed a Selenium-based automation system to scrape Amazon product data and recommend optimal products using rating analysis and review sentiment insights.",
        "Built ML-powered data pipelines and AI-driven workflows using Python, Flask, and SQL, processing 5,000+ records with approximately 30% reduction in manual reporting time.",
        "Developed REST APIs for AI services enabling real-time data processing; applied feature engineering to support LLM-based systems."
      ]
    },
    {
      role: "Internship Trainee",
      company: "DRDO, Ministry of Defence, Govt. of India",
      period: "Dec 2019 – Jan 2020",
      location: "Timarpur, Delhi",
      bullets: [
        "Analyzed structured technical data using Excel and SQL; prepared reports to support research projects."
      ]
    }
  ];

  // 3. SKILLS DATA
  const skillCategories = [
    {
      category: "AI / GenAI",
      skills: ["Generative AI", "LLMs", "Prompt Engineering", "NLP", "AI Application Development"]
    },
    {
      category: "RAG",
      skills: ["RAG", "FAISS", "Embeddings", "Vector Search", "Hybrid Search", "BM25"]
    },
    {
      category: "AI Frameworks",
      skills: ["LangChain", "LangGraph", "OpenAI API"]
    },
    {
      category: "Backend",
      skills: ["Python", "FastAPI", "Flask", "REST APIs"]
    },
    {
      category: "Automation",
      skills: ["Selenium", "Browser Automation", "Workflow Automation"]
    },
    {
      category: "Data & Development",
      skills: ["SQL", "PostgreSQL", "Pandas", "NumPy", "Git", "GitHub", "Docker", "Linux"]
    }
  ];

  // 4. PROJECTS DATA
  const projects = [
    {
      id: "01",
      title: "Amazon Shopping AI Assistant",
      description: "AI-powered shopping assistant that analyzes product reviews and helps users make informed purchasing decisions using LLMs, AI agents, and intelligent retrieval.",
      tech: ["Python", "OpenAI API", "AI Agents", "FAISS", "LLMs"],
      github: "https://github.com/Vaibhavbh21"
    },
    {
      id: "02",
      title: "Job Application Automation",
      description: "AI-powered automation system designed to streamline job application workflows using browser automation and LLM-powered processing.",
      tech: ["Python", "Selenium", "OpenAI API", "LangChain", "Automation"],
      github: "https://github.com/Vaibhavbh21"
    },
    {
      id: "03",
      title: "WhatsApp Lead Responder",
      description: "AI-powered WhatsApp lead response system using LLMs and RAG to understand customer queries and generate contextual responses.",
      tech: ["Python", "LangChain", "RAG", "LLMs", "Automation"],
      github: "https://github.com/Vaibhavbh21"
    },
    {
      id: "04",
      title: "Advanced PDF RAG System",
      description: "Advanced document question-answering system that processes PDF documents using retrieval augmented generation.",
      tech: ["Python", "FastAPI", "LangChain", "RAG", "FAISS", "Embeddings", "LLMs"],
      github: "https://github.com/Vaibhavbh21"
    },
    {
      id: "05",
      title: "Cold Email Bot",
      description: "AI-powered cold email automation system that generates personalized outreach messages and automates email workflows.",
      tech: ["Python", "LLMs", "Prompt Engineering", "Automation", "Email APIs"],
      github: "https://github.com/Vaibhavbh21"
    }
  ];

  // 5. CURRENTLY LEARNING DATA
  const currentlyLearning = [
    "Advanced Agentic AI",
    "Multi-Agent Systems",
    "Advanced RAG",
    "AI System Design",
    "MCP",
    "AI Voice Agents",
    "LLM Evaluation",
    "Production AI Deployment"
  ];

  return (
    <div className="relative bg-black text-gray-100 min-h-screen">
      
      {/* Detail Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* ------------------------------------------------------------- */}
      {/* 1. HERO SECTION */}
      {/* ------------------------------------------------------------- */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/* Soft Radial Glowing Orbs */}
        <div className="radial-glow-orb w-[500px] h-[500px] bg-indigo-600/10 top-1/4 left-1/2 -translate-x-1/2 pointer-events-none"></div>
        <div className="radial-glow-orb w-[400px] h-[400px] bg-violet-600/10 top-1/3 right-10 pointer-events-none"></div>
        <div className="radial-glow-orb w-[400px] h-[400px] bg-cyan-600/10 bottom-1/4 left-10 pointer-events-none"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          {/* Hero Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-white/15 text-zinc-300 text-xs font-mono mb-8 shadow-glow-indigo"
          >
            <Bot className="w-3.5 h-3.5 text-white animate-pulse" />
            <span>AI ENGINEER</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold font-display tracking-tight text-white mb-6 leading-[1.1]"
          >
            Building Intelligent Systems with{' '}
            <span className="inline-block text-glow-gradient">AI, LLMs & Automation</span>
          </motion.h1>

          {/* Short Bio */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-zinc-400 text-base sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-normal"
          >
            AI Engineer focused on building Generative AI applications, RAG systems, AI agents, intelligent automation, and LLM-powered solutions using Python and modern AI technologies.
          </motion.p>

          {/* Hero CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary w-full sm:w-auto group"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary w-full sm:w-auto group"
            >
              <span>Contact Me</span>
              <Mail className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. ABOUT SECTION */}
      {/* ------------------------------------------------------------- */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...sectionReveal}>
            <div className="badge-ai mb-4">ABOUT ME</div>
            <h2 className="section-title mb-6">
              Engineering Practical <span className="text-zinc-400">AI Systems</span>
            </h2>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-6 max-w-3xl mx-auto font-normal">
              I am an AI Engineer specializing in moving Large Language Models beyond chat interfaces into functional, robust software solutions. My core focus lies in architecting end-to-end Generative AI systems that automate operations, extract intelligence from complex datasets, and streamline business processes.
            </p>
            <p className="text-zinc-400 text-base leading-relaxed max-w-3xl mx-auto font-normal">
              By combining Python backend frameworks with cutting-edge orchestration tools like LangChain and LangGraph, I build deterministic RAG pipelines and tool-using AI agents that deliver tangible enterprise value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. EXPERTISE SECTION (Bento Grid) */}
      {/* ------------------------------------------------------------- */}
      <section id="expertise" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <motion.div {...sectionReveal} className="text-center mb-16">
            <div className="badge-ai mb-4">CORE CAPABILITIES</div>
            <h2 className="section-title mb-4">EXPERTISE</h2>
            <p className="section-subtitle">
              Specialized engineering domains across the modern AI and Generative AI stack
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bento-card p-8 flex flex-col justify-between group ${item.colSpan}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/15 flex items-center justify-center group-hover:border-white/40 transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-xs font-mono text-zinc-500 tracking-wider">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400 text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. EXPERIENCE SECTION (Vertical Glowing Timeline) */}
      {/* ------------------------------------------------------------- */}
      <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <motion.div {...sectionReveal} className="text-center mb-16">
            <div className="badge-ai mb-4">TRACK RECORD</div>
            <h2 className="section-title mb-4">EXPERIENCE</h2>
            <p className="section-subtitle">
              Proven engineering experience in building AI solutions, backends, and automated workflows
            </p>
          </motion.div>

          <ExperienceTimeline experiences={experiences} />

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 5. SKILLS SECTION */}
      {/* ------------------------------------------------------------- */}
      <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <motion.div {...sectionReveal} className="text-center mb-16">
            <div className="badge-ai mb-4">TECHNICAL STACK</div>
            <h2 className="section-title mb-4">SKILLS</h2>
            <p className="section-subtitle">
              Comprehensive toolkit for building modern AI, RAG, and automation software
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bento-card p-6"
              >
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  {group.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg bg-zinc-900/90 border border-white/10 text-zinc-300 text-xs font-medium hover:border-white/40 hover:text-white hover:scale-[1.04] transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 6. PROJECTS SECTION (Bento Grid with Interactive Detail Modal) */}
      {/* ------------------------------------------------------------- */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <motion.div {...sectionReveal} className="text-center mb-16">
            <div className="badge-ai mb-4">SELECTED WORK</div>
            <h2 className="section-title mb-4">PROJECTS</h2>
            <p className="section-subtitle">
              Production-grade AI applications, RAG pipelines, agents, and intelligent tools. <span className="text-indigo-400">Click any card to inspect architecture.</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className={`bento-card p-8 flex flex-col justify-between group cursor-pointer ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-mono text-zinc-500 font-bold">
                      #{project.id}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-zinc-500 group-hover:text-indigo-300 transition-colors flex items-center gap-1">
                        Inspect <ExternalLink className="w-3 h-3" />
                      </span>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 transition-colors"
                        aria-label="GitHub Code"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Micro Workflow Visual Diagram */}
                  <ProjectVisual id={project.id} />
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-zinc-900 border border-white/10 text-[11px] font-mono text-zinc-300 group-hover:border-white/20 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 7. CURRENTLY LEARNING SECTION (Infinite Marquee Ticker) */}
      {/* ------------------------------------------------------------- */}
      <section id="learning" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          <motion.div {...sectionReveal} className="text-center mb-10">
            <div className="badge-ai mb-4">CONTINUOUS INNOVATION</div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-2">CURRENTLY LEARNING</h2>
            <p className="text-zinc-400 text-sm max-w-xl mx-auto">
              Actively exploring next-generation AI architectures, frameworks, and deployment paradigms
            </p>
          </motion.div>

          {/* Continuous Ticker */}
          <Marquee items={currentlyLearning} />

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 8. CONTACT SECTION */}
      {/* ------------------------------------------------------------- */}
      <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative z-10">
        <div className="radial-glow-orb w-[600px] h-[600px] bg-indigo-600/10 bottom-10 left-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          <motion.div {...sectionReveal}>
            <div className="badge-ai mb-6">GET IN TOUCH</div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display text-white mb-6 tracking-tight">
              Let's Build Something Intelligent.
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto mb-12 leading-relaxed">
              Open to AI Engineering opportunities, collaborations, and interesting AI projects.
            </p>

            {/* Editorial Text-Based Contact Row */}
            <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-14 lg:gap-16 max-w-5xl mx-auto text-center md:text-left">
              
              {/* Email */}
              <div className="flex flex-col items-center md:items-start group shrink-0">
                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                  EMAIL {copiedEmail && <span className="text-emerald-400 font-bold lowercase">(copied!)</span>}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="text-sm font-medium text-zinc-300 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group-hover:underline underline-offset-4 cursor-pointer text-left"
                >
                  <span>Vaibhavbhardwaj1942@gmail.com</span>
                </button>
              </div>

              <div className="hidden md:block w-[1px] h-10 bg-white/10 shrink-0"></div>

              {/* LinkedIn */}
              <div className="flex flex-col items-center md:items-start group shrink-0">
                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">
                  LINKEDIN
                </span>
                <a
                  href="https://linkedin.com/in/vaibhav-bhardwaj-b1731117a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-zinc-300 hover:text-white transition-colors duration-200 flex items-center gap-1 group-hover:underline underline-offset-4"
                >
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </a>
              </div>

              <div className="hidden md:block w-[1px] h-10 bg-white/10 shrink-0"></div>

              {/* GitHub */}
              <div className="flex flex-col items-center md:items-start group shrink-0">
                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">
                  GITHUB
                </span>
                <a
                  href="https://github.com/Vaibhavbh21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-zinc-300 hover:text-white transition-colors duration-200 flex items-center gap-1 group-hover:underline underline-offset-4"
                >
                  <span>GitHub Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </a>
              </div>

              <div className="hidden md:block w-[1px] h-10 bg-white/10 shrink-0"></div>

              {/* WhatsApp */}
              <div className="flex flex-col items-center md:items-start group shrink-0">
                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">
                  WHATSAPP
                </span>
                <a
                  href="https://wa.me/918851687228"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-zinc-300 hover:text-white transition-colors duration-200 flex items-center gap-1 group-hover:underline underline-offset-4"
                >
                  <span>+91 8851687228</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </a>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default Home;

