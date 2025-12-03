import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, BarChart3, Database } from 'lucide-react';
import MouseParallax from '../components/MouseParallax';
import FloatingTechIcons from '../components/FloatingTechIcons';
import AnimatedShapes from '../components/AnimatedShapes';

const Home = () => {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Geometric Shapes */}
        <AnimatedShapes />
        
        {/* Floating Technology Icons */}
        <FloatingTechIcons />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-orange/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-neon-pink/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Cyber Pattern Overlay */}
        <div className="absolute inset-0 cyber-pattern opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-neon-orange text-lg md:text-xl font-semibold mb-4"
              >
                Data Analyst
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6 leading-tight"
              >
                <span className="text-white">VAIBHAV</span>{' '}
                <span className="text-gradient">BHARDWAJ</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-gray-300 text-lg md:text-xl mb-6 max-w-2xl"
              >
                Passionate about data, analytics, and turning insights into action. Currently learning Data Science, AI, and Machine Learning to deepen my expertise in the field.
              </motion.p>

              {/* Tech Stack Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start"
              >
                {['Python', 'SQL', 'Power BI', 'Excel', 'Data Science', 'AI/ML'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="px-4 py-2 bg-gradient-to-r from-neon-purple/10 to-neon-orange/10 border border-neon-purple/30 rounded-full text-sm font-semibold text-gray-300 hover:text-neon-orange hover:border-neon-orange/50 transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <a
                  href="/about"
                  className="btn-primary flex items-center justify-center group"
                >
                  KNOW MORE ABOUT ME
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </a>
                <a
                  href="/portfolio"
                  className="btn-secondary flex items-center justify-center group"
                >
                  VIEW MY WORK
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </motion.div>
            </motion.div>

            {/* Right Side - Hero Image/Visual */}
            <MouseParallax intensity={0.3}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div className="relative w-full h-[500px] lg:h-[600px]">
                  {/* Futuristic Card/Visual */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-neon-orange/20 rounded-2xl border border-neon-purple/30 backdrop-blur-sm p-8 glow-effect hover-glow">
                  <div className="relative h-full flex items-center justify-center">
                    {/* Animated Grid Pattern */}
                    <div className="absolute inset-0 cyber-grid opacity-30"></div>
                    
                    {/* Central Icon/Visual */}
                    <motion.div
                      animate={{ 
                        y: [0, -20, 0],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="relative z-10"
                    >
                      <div className="w-64 h-64 mx-auto relative">
                        {/* Glowing Circles */}
                        <div className="absolute inset-0 rounded-full border-4 border-neon-purple/50 animate-pulse"></div>
                        <div className="absolute inset-4 rounded-full border-2 border-neon-orange/50 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        
                        {/* Center Icon - Enhanced with glow */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            animate={{
                              scale: [1, 1.05, 1],
                              opacity: [0.8, 1, 0.8],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className="relative"
                          >
                            <Database className="w-32 h-32 text-neon-purple drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]" />
                            <div className="absolute inset-0 bg-neon-purple/30 rounded-full blur-2xl -z-10" />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Floating Elements - Enhanced with more icons */}
                    <motion.div
                      animate={{ y: [0, -30, 0], rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-10 left-10 group"
                    >
                      <div className="relative">
                        <Code2 className="w-14 h-14 text-neon-orange/70 group-hover:text-neon-orange transition-colors" />
                        <div className="absolute inset-0 bg-neon-orange/20 rounded-full blur-xl -z-10 group-hover:bg-neon-orange/30 transition-all" />
                      </div>
                    </motion.div>
                    
                    <motion.div
                      animate={{ y: [0, -25, 0], rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute bottom-10 right-10 group"
                    >
                      <div className="relative">
                        <BarChart3 className="w-14 h-14 text-neon-pink/70 group-hover:text-neon-pink transition-colors" />
                        <div className="absolute inset-0 bg-neon-pink/20 rounded-full blur-xl -z-10 group-hover:bg-neon-pink/30 transition-all" />
                      </div>
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, -35, 0], rotate: [0, 15, -15, 0] }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-1/2 right-10 group"
                    >
                      <div className="relative">
                        <Sparkles className="w-12 h-12 text-neon-purple/70 group-hover:text-neon-purple transition-colors" />
                        <div className="absolute inset-0 bg-neon-purple/20 rounded-full blur-xl -z-10 group-hover:bg-neon-purple/30 transition-all" />
                      </div>
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, -20, 0], rotate: [0, -15, 15, 0] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute bottom-1/4 left-8 group"
                    >
                      <div className="relative">
                        <Database className="w-10 h-10 text-neon-orange/60 group-hover:text-neon-orange transition-colors" />
                        <div className="absolute inset-0 bg-neon-orange/15 rounded-full blur-lg -z-10 group-hover:bg-neon-orange/25 transition-all" />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
              </motion.div>
            </MouseParallax>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-4">
              My Expertise
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Continuously learning and evolving in the world of data
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Database className="w-12 h-12" />,
                title: "Data Analysis",
                description: "Expert in SQL, Excel, Power BI, and Python for comprehensive data analysis and visualization"
              },
              {
                icon: <Code2 className="w-12 h-12" />,
                title: "Python & Tools",
                description: "Proficient in Pandas, NumPy, Matplotlib for data manipulation and statistical analysis"
              },
              {
                icon: <BarChart3 className="w-12 h-12" />,
                title: "Learning AI/ML",
                description: "Deep diving into Data Science, Artificial Intelligence, and Machine Learning"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group magnetic-card"
              >
                <div className="bg-dark-800/50 backdrop-blur-sm border border-neon-purple/20 rounded-xl p-8 h-full hover:border-neon-orange/50 transition-all duration-300 hover-glow">
                  <div className="text-neon-purple mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

