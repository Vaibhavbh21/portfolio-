import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, TrendingUp, BookOpen, Sparkles } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "AI Will Not Kill Jobs, It Will Kill Outdated Skills",
      excerpt: "Why staying ahead in Generative AI, prompt engineering, and automated agent workflows is the ultimate skill multiplier...",
      date: "Jan 02, 2026",
      readTime: "5 min read",
      category: "Career",
      link: "/blog/ai-will-not-kill-jobs",
      featured: true
    },
    {
      id: 2,
      title: "Why Python Rules AI & LLM Systems Engineering",
      excerpt: "From LangChain orchestration to Async FastAPI endpoints and FAISS vector indices—why Python is the foundation of GenAI...",
      date: "Jan 15, 2026",
      readTime: "7 min read",
      category: "Skills",
      link: "/blog/python-data-analytics",
      featured: false
    },
    {
      id: 3,
      title: "Building Production RAG Pipelines: Lessons Learned",
      excerpt: "Unstructured document chunking, hybrid keyword & dense retrieval, context reranking, and preventing LLM hallucinations...",
      date: "Jan 18, 2026",
      readTime: "8 min read",
      category: "Skills",
      link: "/blog/clean-messy-dataset",
      featured: false
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured) || [];
  const regularPosts = blogPosts.filter(post => !post.featured) || [];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Career':
        return <TrendingUp className="w-5 h-5 text-ai-cyan" />;
      case 'Skills':
        return <BookOpen className="w-5 h-5 text-ai-indigo" />;
      default:
        return <BookOpen className="w-5 h-5 text-ai-violet" />;
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-dark-900 text-gray-100">
      {/* Header */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ai-indigo/10 border border-ai-indigo/30 text-ai-cyan text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-ai-cyan" />
              <span>THOUGHTS & ARTICLES</span>
            </div>
            <h1 className="section-title mb-4">
              BLOG & INSIGHTS
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              Engineering notes, architecture breakdowns, and perspectives on Generative AI, RAG systems, and AI Agents
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-ai-cyan" />
              Featured Article
            </h2>

            <div className="grid md:grid-cols-1 gap-6">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bento-card p-8 group hover:border-ai-cyan/40"
                >
                  <a href={post.link} className="block">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-ai-cyan/10 border border-ai-cyan/30 text-ai-cyan text-xs font-semibold rounded-full">
                        FEATURED
                      </span>
                      <span className="text-xs text-gray-400 uppercase tracking-wider font-mono">
                        {post.category}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white group-hover:text-ai-cyan transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-400 text-base leading-relaxed mb-6 max-w-4xl">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-gray-500 pt-4 border-t border-white/10">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-ai-indigo" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-ai-indigo" />
                          {post.readTime}
                        </span>
                      </div>
                      <span className="text-ai-cyan font-medium flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                        Read Full Article
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </a>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-ai-indigo" />
            Latest Articles
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bento-card p-6 flex flex-col justify-between group"
              >
                <a href={post.link} className="block h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      {getCategoryIcon(post.category)}
                      <span className="text-xs text-gray-400 uppercase tracking-wider font-mono">
                        {post.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-ai-cyan transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-white/10">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-ai-indigo" />
                      {post.date}
                    </span>
                    <span className="text-ai-cyan font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;


