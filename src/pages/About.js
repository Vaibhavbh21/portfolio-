import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Target, Bot, Sparkles, Cpu, Layers, Database, Terminal, Workflow, Search, Zap, GitBranch } from 'lucide-react';

const About = () => {
  const experiences = [
    {
      company: "SGFinance",
      position: "AI Engineer",
      location: "Remote",
      period: "Aug 2025 – Present",
      achievements: [
        "Built an AI-powered WhatsApp lead responder using LangChain, RAG, and Selenium, achieving sub-5 second response time and automating 100+ daily customer interactions.",
        "Developed and deployed the company website end-to-end, handling backend, frontend, and deployment independently using modern web technologies.",
        "Built a production-grade PDF RAG system using hybrid retrieval (semantic vector search + BM25), enabling high-accuracy document Q&A and scalable knowledge extraction from unstructured PDFs."
      ]
    },
    {
      company: "LG Electronics India Pvt Ltd",
      position: "Data Science Intern",
      location: "Noida, Uttar Pradesh",
      period: "Feb 2025 – Aug 2025",
      achievements: [
        "Developed a Selenium-based automation system to scrape Amazon product data and recommend optimal products using rating analysis and review sentiment insights.",
        "Built ML-powered data pipelines and AI-driven workflows using Python, Flask, and SQL, processing 5,000+ records with approximately 30% reduction in manual reporting time.",
        "Developed REST APIs for AI services enabling real-time data processing; applied feature engineering to support LLM-based systems."
      ]
    },
    {
      company: "DRDO, Ministry of Defence, Govt. of India",
      position: "Internship Trainee",
      location: "Timarpur, Delhi",
      period: "Dec 2019 – Jan 2020",
      achievements: [
        "Analyzed structured technical data using Excel and SQL; prepared reports to support research projects."
      ]
    }
  ];

  const skillCategories = [
    {
      title: "AI & Generative AI",
      icon: <Sparkles className="w-5 h-5 text-ai-cyan" />,
      skills: ['Generative AI', 'Large Language Models', 'Prompt Engineering', 'NLP', 'LLM Application Development'],
      colSpan: 'lg:col-span-2'
    },
    {
      title: "AI Frameworks",
      icon: <Workflow className="w-5 h-5 text-ai-indigo" />,
      skills: ['LangChain', 'LangGraph', 'OpenAI API'],
      colSpan: 'lg:col-span-1'
    },
    {
      title: "RAG & Retrieval",
      icon: <Search className="w-5 h-5 text-ai-violet" />,
      skills: ['RAG', 'FAISS', 'Embeddings', 'Vector Search', 'Hybrid Search', 'BM25', 'Document Retrieval', 'Contextual Compression'],
      colSpan: 'lg:col-span-2'
    },
    {
      title: "AI Agents",
      icon: <Bot className="w-5 h-5 text-ai-emerald" />,
      skills: ['AI Agents', 'Agentic Workflows', 'Tool Calling', 'Multi-Agent Systems'],
      colSpan: 'lg:col-span-1'
    },
    {
      title: "Backend & APIs",
      icon: <Layers className="w-5 h-5 text-ai-sky" />,
      skills: ['Python', 'FastAPI', 'Flask', 'REST APIs'],
      colSpan: 'lg:col-span-1'
    },
    {
      title: "Automation",
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      skills: ['Selenium', 'Browser Automation', 'Workflow Automation'],
      colSpan: 'lg:col-span-1'
    },
    {
      title: "Data & Databases",
      icon: <Database className="w-5 h-5 text-blue-400" />,
      skills: ['SQL', 'PostgreSQL', 'Pandas', 'NumPy'],
      colSpan: 'lg:col-span-1'
    },
    {
      title: "Development",
      icon: <GitBranch className="w-5 h-5 text-purple-400" />,
      skills: ['Git', 'GitHub', 'Docker', 'Linux'],
      colSpan: 'lg:col-span-3'
    }
  ];

  const learningTopics = [
    'Advanced Agentic AI',
    'Multi-Agent Systems',
    'Advanced RAG Architectures',
    'AI System Design',
    'Production LLM Applications',
    'Model Context Protocol (MCP)',
    'AI Voice Agents',
    'LLM Evaluation',
    'AI Application Deployment'
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-dark-900 text-gray-100">
      
      {/* Header */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ai-indigo/10 border border-ai-indigo/30 text-ai-cyan text-xs font-semibold mb-4">
              <Bot className="w-3.5 h-3.5 text-ai-cyan" />
              <span>AI ENGINEER PROFILE</span>
            </div>
            <h1 className="section-title mb-4">
              ABOUT ME
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              Turning modern AI capabilities into practical, reliable, and high-impact software solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Engineer Story Section */}
      <section id="about" className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bento-card p-8 md:p-12 border-white/10"
          >
            <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-5">
              <div className="w-12 h-12 bg-gradient-to-tr from-ai-indigo to-ai-cyan rounded-xl flex items-center justify-center shadow-lg shadow-ai-indigo/20">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">Engineering Practical AI Systems</h2>
                <p className="text-ai-cyan text-xs font-mono uppercase tracking-wider">End-to-End LLM & Automation Stack</p>
              </div>
            </div>

            <div className="space-y-5 text-gray-300 text-base md:text-lg leading-relaxed">
              <p>
                I am an <span className="text-white font-semibold">AI Engineer</span> focused on turning modern AI capabilities into practical software solutions. My work involves building LLM-powered applications, RAG pipelines, AI agents, automation workflows, and intelligent systems that solve real-world business problems.
              </p>

              <p>
                I work across the AI application stack, from data and document processing to retrieval, prompting, agent workflows, API development, and deployment. Using tools like <span className="text-ai-cyan font-semibold">Python, LangChain, LangGraph, OpenAI APIs, FastAPI, FAISS, and vector search</span>, I engineer robust systems that perform contextual retrieval, automated reasoning, and background task execution.
              </p>

              <p>
                Whether it's deploying document intelligence systems for PDF analysis, building context-aware WhatsApp customer responders, or automating complex browser workflows with Selenium and LLMs, my priority is writing clean, maintainable code that delivers practical business value.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section id="experience" className="px-4 sm:px-6 lg:px-8 mb-24 border-t border-white/5 pt-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ai-indigo/10 border border-ai-indigo/20 text-ai-cyan text-xs font-semibold mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>TRACK RECORD</span>
            </div>
            <h2 className="section-title mb-4">
              WORK EXPERIENCE
            </h2>
            <p className="text-gray-400 text-base md:text-lg">
              Engineering experience in software development, AI model integration, and workflow automation
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bento-card p-8 relative overflow-hidden"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 border-b border-white/10 pb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.position}</h3>
                    <h4 className="text-lg font-semibold text-ai-cyan">{exp.company}</h4>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400">
                    <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-md border border-white/10">
                      <Calendar className="w-3.5 h-3.5 text-ai-indigo" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-md border border-white/10">
                      <MapPin className="w-3.5 h-3.5 text-ai-cyan" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.achievements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm md:text-base leading-relaxed">
                      <Target className="w-4 h-4 text-ai-indigo flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Skills Section */}
      <section id="skills" className="px-4 sm:px-6 lg:px-8 mb-24 border-t border-white/5 pt-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ai-indigo/10 border border-ai-indigo/20 text-ai-cyan text-xs font-semibold mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>STACK</span>
            </div>
            <h2 className="section-title mb-4">
              TECHNICAL SKILLS
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              Organized AI engineering toolkit across generative models, agentic frameworks, retrieval pipelines, and backend APIs.
            </p>
          </motion.div>

          {/* Bento Grid Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skillCategories.map((cat, idx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className={`bento-card p-6 ${cat.colSpan}`}
              >
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
                  <div className="p-2 bg-dark-950 rounded-xl border border-white/10">
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-dark-950/80 border border-white/10 rounded-lg text-xs md:text-sm font-medium text-gray-300 hover:text-white hover:border-ai-cyan transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Currently Learning Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bento-card p-8 md:p-10 border-ai-cyan/30 bg-gradient-to-br from-dark-800/80 to-dark-900"
          >
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="w-6 h-6 text-ai-cyan" />
              <h3 className="text-2xl font-bold text-white">Currently Learning</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {learningTopics.map((topic) => (
                <span
                  key={topic}
                  className="px-4 py-2 bg-dark-950/90 border border-ai-cyan/30 rounded-xl text-xs md:text-sm font-semibold text-ai-cyan shadow-sm"
                >
                  {topic}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;


