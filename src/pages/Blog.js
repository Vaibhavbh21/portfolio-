import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, TrendingUp, BookOpen, Users } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    // Add your blog posts here
    // Example structure:
    // {
    //   id: 1,
    //   title: "Blog Post Title",
    //   excerpt: "Short description of the blog post",
    //   category: "Data Science",
    //   date: "March 15, 2024",
    //   readTime: "8 min read",
    //   image: "blog-image",
    //   featured: true
    // },
  ];

  const featuredPosts = blogPosts.filter(post => post.featured) || [];
  const regularPosts = blogPosts.filter(post => !post.featured) || [];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Career':
        return <TrendingUp className="w-5 h-5" />;
      case 'Skills':
        return <BookOpen className="w-5 h-5" />;
      case 'Portfolio':
        return <Users className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
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
              BLOG
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Insights, tips, and strategies to help you build your six-figure data career
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 ? (
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-white flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-neon-orange" />
              Featured Articles
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-dark-800/50 backdrop-blur-sm border border-neon-purple/20 rounded-xl overflow-hidden hover:border-neon-orange/50 transition-all duration-300"
                >
                  {/* Image Placeholder */}
                  <div className="relative h-64 bg-gradient-to-br from-neon-purple/20 to-neon-orange/20 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {getCategoryIcon(post.category)}
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-neon-orange text-white text-xs font-semibold rounded-full">
                        FEATURED
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-neon-purple">
                        {getCategoryIcon(post.category)}
                      </span>
                      <span className="text-xs text-gray-400 uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-neon-orange transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-400 mb-4">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                      <a
                        href={`#post-${post.id}`}
                        className="text-neon-orange hover:text-neon-purple flex items-center gap-1 group-hover:gap-2 transition-all"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Regular Posts */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {blogPosts.length === 0 ? (
            <div className="text-center py-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-dark-800/50 backdrop-blur-sm border border-neon-purple/20 rounded-xl p-12 max-w-2xl mx-auto"
              >
                <BookOpen className="w-16 h-16 text-neon-purple mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Blog Posts Coming Soon</h3>
                <p className="text-gray-400 mb-6">
                  I'm working on writing blog posts about my journey in data analytics, data science, and AI/ML. 
                  Check back soon for insights, tutorials, and learnings!
                </p>
                <p className="text-gray-500 text-sm">
                  You can add your blog posts by editing the blogPosts array in Blog.js
                </p>
              </motion.div>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-8 text-white flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-neon-purple" />
                Latest Articles
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-dark-800/50 backdrop-blur-sm border border-neon-purple/20 rounded-xl overflow-hidden hover:border-neon-orange/50 transition-all duration-300 h-full flex flex-col"
              >
                {/* Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-neon-purple/20 to-neon-orange/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {getCategoryIcon(post.category)}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-neon-purple">
                      {getCategoryIcon(post.category)}
                    </span>
                    <span className="text-xs text-gray-400 uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-neon-orange transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 mb-4 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-neon-purple/20">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <a
                      href={`#post-${post.id}`}
                      className="text-neon-orange hover:text-neon-purple flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      Read
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
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
              Stay Connected
            </h2>
            <p className="text-gray-300 mb-8">
              Get updates about my latest projects and blog posts on data analytics and AI/ML.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-dark-800 border border-neon-purple/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-orange"
              />
              <button className="btn-primary">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

