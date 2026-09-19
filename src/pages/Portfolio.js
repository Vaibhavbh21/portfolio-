import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter, Bot, ShoppingBag, Briefcase, MessageSquare, FileText, Mail, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      num: '01',
      id: 1,
      title: 'Amazon Shopping AI Assistant',
      description: 'AI-powered shopping assistant that analyzes product reviews and helps users make informed purchasing decisions using LLMs, AI agents, and intelligent retrieval.',
      category: 'AI Agents',
      tags: ['Python', 'OpenAI API', 'AI Agents', 'FAISS', 'LLMs'],
      link: 'https://github.com/Vaibhavbh21',
      github: 'https://github.com/Vaibhavbh21',
      colSpan: 'lg:col-span-2',
      icon: <ShoppingBag className="w-8 h-8 text-ai-cyan" />
    },
    {
      num: '02',
      id: 2,
      title: 'Job Application Automation',
      description: 'AI-powered job application automation system designed to streamline job discovery and application workflows using browser automation and LLM-powered processing.',
      category: 'Automation',
      tags: ['Python', 'Selenium', 'OpenAI API', 'LangChain', 'Automation'],
      link: 'https://github.com/Vaibhavbh21',
      github: 'https://github.com/Vaibhavbh21',
      colSpan: 'lg:col-span-1',
      icon: <Briefcase className="w-8 h-8 text-ai-indigo" />
    },
    {
      num: '03',
      id: 3,
      title: 'WhatsApp Lead Responder',
      description: 'AI-powered WhatsApp lead response system that uses LLMs and RAG to understand customer queries and generate contextual responses automatically.',
      category: 'Conversational AI',
      tags: ['Python', 'LangChain', 'RAG', 'LLMs', 'Automation'],
      link: 'https://github.com/Vaibhavbh21',
      github: 'https://github.com/Vaibhavbh21',
      colSpan: 'lg:col-span-1',
      icon: <MessageSquare className="w-8 h-8 text-ai-emerald" />
    },
    {
      num: '04',
      id: 4,
      title: 'Advanced PDF RAG System',
      subtitle: 'Advanced PDF RAG System using FastAPI',
      description: 'Advanced document question-answering system that processes PDF documents and retrieves relevant information using embeddings, vector search, and LLM-powered generation.',
      category: 'RAG Systems',
      tags: ['Python', 'FastAPI', 'LangChain', 'RAG', 'FAISS', 'Embeddings', 'LLMs'],
      link: 'https://github.com/Vaibhavbh21',
      github: 'https://github.com/Vaibhavbh21',
      colSpan: 'lg:col-span-2',
      icon: <FileText className="w-8 h-8 text-ai-violet" />
    },
    {
      num: '05',
      id: 5,
      title: 'Cold Email Bot',
      description: 'AI-powered cold email automation system that generates personalized outreach messages using LLMs and automates the email workflow.',
      category: 'Automation',
      tags: ['Python', 'LLMs', 'Prompt Engineering', 'Automation', 'Email APIs'],
      link: 'https://github.com/Vaibhavbh21',
      github: 'https://github.com/Vaibhavbh21',
      colSpan: 'lg:col-span-3',
      icon: <Mail className="w-8 h-8 text-ai-sky" />
    }
  ];

  const categories = ['all', 'AI Agents', 'RAG Systems', 'Automation', 'Conversational AI'];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter(project => project.category === filter);

  return (
    <div id="projects" className="min-h-screen pt-24 pb-20 bg-dark-900 text-gray-100">
      
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
              <span>SELECTED PROJECTS</span>
            </div>
            <h1 className="section-title mb-4">
              FEATURED PROJECTS
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              Practical Generative AI applications, RAG architectures, agentic workflows, and automated LLM systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Category Pills */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap justify-center gap-2.5"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-xl font-medium text-xs md:text-sm transition-all duration-300 flex items-center gap-2 ${
                  filter === category
                    ? 'bg-gradient-to-r from-ai-indigo to-ai-cyan text-white shadow-lg shadow-ai-indigo/20'
                    : 'bg-dark-800/80 border border-white/10 text-gray-300 hover:border-white/25 hover:text-white'
                }`}
              >
                <Filter className="w-3.5 h-3.5" />
                {category.toUpperCase()}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Bento Grid */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`bento-card p-8 flex flex-col justify-between group ${project.colSpan}`}
              >
                <div>
                  {/* Top Bar: Number & Category Badge */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                    <span className="text-2xl font-mono font-bold text-ai-indigo group-hover:text-ai-cyan transition-colors">
                      {project.num}
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-xl bg-dark-950 border border-white/10">
                        {project.icon}
                      </div>
                      <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/5 text-ai-cyan border border-white/10">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-ai-cyan transition-colors">
                    {project.title}
                  </h3>

                  {project.subtitle && (
                    <p className="text-xs font-mono text-ai-indigo mb-3">{project.subtitle}</p>
                  )}

                  {/* Description */}
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Bar: Tech Pills & Action Buttons */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-1 bg-dark-950/80 border border-white/10 rounded-md text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-2.5 flex-shrink-0">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-dark-950 border border-white/15 hover:border-ai-cyan text-xs font-semibold text-gray-200 hover:text-white flex items-center gap-1.5 transition-all"
                    >
                      <Github className="w-3.5 h-3.5 text-gray-300" />
                      <span>Code</span>
                    </a>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-ai-indigo/20 border border-ai-indigo/40 hover:bg-ai-indigo hover:text-white text-xs font-semibold text-ai-cyan hover:text-white flex items-center gap-1.5 transition-all"
                    >
                      <span>Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="mt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bento-card p-10 text-center bg-gradient-to-r from-ai-indigo/15 via-dark-800 to-ai-cyan/15 border-white/15"
          >
            <h3 className="text-2xl md:text-3xl font-bold font-display text-white mb-3">
              Want to see more AI projects or code samples?
            </h3>
            <p className="text-gray-300 text-sm md:text-base max-w-lg mx-auto mb-6">
              Check out my GitHub repository for complete codebases, agent graph definitions, and API implementations.
            </p>
            <a
              href="https://github.com/Vaibhavbh21"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>Visit GitHub Profile</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Portfolio;


