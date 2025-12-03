import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter, Code2, BarChart3, Database, TrendingUp } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    // yahan baad me apne projects add karna
    // example:
    // {
    //   id: 1,
    //   title: 'Sales Dashboard',
    //   description: 'Built an interactive dashboard in Power BI',
    //   category: 'Data Analytics',
    //   tags: ['Power BI', 'SQL', 'Excel'],
    //   link: 'https://your-live-link.com',
    //   github: 'https://github.com/your-repo'
    // }
  ];

  const categories = ['all'];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter(project => project.category === filter);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Data Analytics':
        return <BarChart3 className="w-5 h-5" />;
      case 'Machine Learning':
        return <TrendingUp className="w-5 h-5" />;
      case 'Business Intelligence':
        return <Database className="w-5 h-5" />;
      default:
        return <Code2 className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="section-title mb-4">
              PORTFOLIO
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Real projects that demonstrate data analytics expertise and six-figure skills
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons - Only show when projects exist */}
      {projects.length > 0 && (
        <section className="px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 ${
                    filter === category
                      ? 'bg-gradient-to-r from-neon-purple to-neon-orange text-white'
                      : 'bg-dark-800 border border-neon-purple/30 text-gray-300 hover:border-neon-orange/50'
                  }`}
                >
                  <Filter className="w-4 h-4" />
                  {category.toUpperCase()}
                </button>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Projects Grid */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {projects.length === 0 ? (
            <div className="text-center py-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-dark-800/50 backdrop-blur-sm border border-neon-purple/20 rounded-xl p-12 max-w-2xl mx-auto"
              >
                <Code2 className="w-16 h-16 text-neon-purple mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Projects Coming Soon</h3>
                <p className="text-gray-400 mb-6">
                  I&apos;m working on adding my portfolio projects here. Check back soon to see my latest work in data analytics, 
                  data science, and AI/ML!
                </p>
              </motion.div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative magnetic-card"
                >
                  <div className="relative bg-dark-800/50 backdrop-blur-sm border border-neon-purple/20 rounded-xl overflow-hidden h-full hover:border-neon-orange/50 transition-all duration-300 hover-glow">
                    {/* Top preview area */}
                    <div className="relative h-48 bg-gradient-to-br from-neon-purple/20 to-neon-orange/20 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        {getCategoryIcon(project.category)}
                      </div>
                      <div className="absolute inset-0 bg-dark-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        <a
                          href={project.link}
                          className="w-12 h-12 bg-neon-orange rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </a>
                        <a
                          href={project.github}
                          className="w-12 h-12 bg-dark-700 border border-white/20 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                        >
                          <Github className="w-5 h-5 text-white" />
                        </a>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-neon-purple">
                          {getCategoryIcon(project.category)}
                        </span>
                        <span className="text-xs text-gray-400 uppercase tracking-wider">
                          {project.category}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-neon-orange transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm mb-4">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags?.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs px-3 py-1 bg-dark-700 border border-neon-purple/30 rounded-full text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-r from-neon-purple/20 via-neon-orange/20 to-neon-pink/20 backdrop-blur-sm border border-neon-purple/30 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-white">
              Want to Know More?
            </h2>
            <p className="text-gray-300 mb-8">
              Check out my blog posts and learn more about my journey in data analytics and AI/ML.
            </p>
            <a href="/blog" className="btn-primary inline-flex items-center group">
              READ BLOG
              <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
