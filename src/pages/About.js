import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, TrendingUp, Target, Lightbulb, Database } from 'lucide-react';

const About = () => {
  const experiences = [
    {
      company: "LG Electronics India Pvt Ltd",
      position: "Data Analyst Intern",
      location: "Noida, Uttar Pradesh",
      period: "Feb 2025 – Present",
      achievements: [
        "Conducted 30+ data audits and assessments for web-based applications, ensuring alignment with organizational KPIs and industry standards",
        "Reviewed and analyzed 10,000+ lines of application data and business logic to identify inconsistencies, trends, and actionable insights",
        "Performed exploratory data analysis across 100+ datasets using tools like SQL, Excel, and Power BI, identifying over 90% of critical data issues",
        "Recommended 20+ data-driven optimization strategies to improve reporting accuracy and reduce data redundancy"
      ]
    },
    {
      company: "Vincentio Tech Solutions Private Limited",
      position: "Data Analyst Trainee",
      location: "Faridabad, Haryana",
      period: "Jul 2023 – Aug 2023",
      achievements: [
        "Developed and optimized 5+ analytical models to streamline reporting and support key business decisions",
        "Performed data cleaning, transformation, and statistical analysis on various datasets using Python and Excel",
        "Utilized 10+ data analysis tools and libraries (Pandas, NumPy, matplotlib) to visualize insights and communicate findings",
        "Simulated real-world data scenarios to test forecasting models and validate business assumptions"
      ]
    },
    {
      company: "IRADesign And Solutions Pvt. Ltd",
      position: "Data Operations Intern",
      location: "Faridabad, Haryana",
      period: "Oct 2022 – Nov 2022",
      achievements: [
        "Configured and managed 10+ data pipelines and reporting setups to ensure 99.9% uptime and real-time analytics",
        "Leveraged Linux automation to resolve 100+ system-level data processing issues, improving efficiency by 30%",
        "Deployed and monitored 5+ sandbox environments to test data integrity, pipeline performance, and dashboard accuracy",
        "Improved system-level monitoring and data reliability, reducing downtime by 40%"
      ]
    },
    {
      company: "DRDO, Ministry of Defence, Govt. of India",
      position: "Internship Trainee",
      location: "Timarpur, Delhi",
      period: "Dec 2019 – Jan 2020",
      achievements: [
        "Engineered tailored solutions to align with project needs, boosting efficiency and performance",
        "Assessed technical specs for optimal hardware/software selection, maximizing system effectiveness and cost savings",
        "Managed end-to-end project execution, optimizing task allocation, timelines, and resource utilization, resulting in 20% faster project delivery and improved operational efficiency",
        "Compiled detailed documentation covering workflows, technical blueprints, and user guides for long-term maintainability"
      ]
    }
  ];

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
              ABOUT ME
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Data Analyst passionate about transforming raw data into meaningful insights
            </p>
          </motion.div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-dark-800/50 backdrop-blur-sm border border-neon-purple/20 rounded-2xl p-8 md:p-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-neon-purple to-neon-orange rounded-full flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">My Story</h2>
            </div>
            
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Hi, I'm <span className="text-neon-orange font-semibold">Vaibhav Bhardwaj</span>, and I have a deep love for data. 
                Every dataset tells a story, and I'm passionate about uncovering those hidden narratives that drive business decisions.
              </p>
              
              <p>
                As a Data Analyst, I specialize in transforming complex data into actionable insights. With hands-on experience 
                in SQL, Python, Power BI, and Excel, I've helped organizations optimize their operations, identify trends, and 
                make data-driven decisions.
              </p>
              
              <p>
                Currently, I'm <span className="text-neon-purple font-semibold">deep diving into Data Science, Artificial Intelligence, and Machine Learning</span>. 
                The world of AI/ML fascinates me, and I'm constantly learning new techniques and methodologies to expand my expertise. 
                From predictive modeling to neural networks, I'm exploring every aspect of this exciting field.
              </p>
              
              <p>
                My journey in data analytics has been marked by continuous learning and growth. Each project teaches me something new, 
                and every dataset challenges me to think differently. I believe in the power of data to solve real-world problems, 
                and I'm committed to using my skills to make a meaningful impact.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-4">
              WORK EXPERIENCE
            </h2>
            <p className="text-gray-400 text-lg">
              My professional journey in data analytics
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline Line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-neon-purple to-neon-orange opacity-30"></div>
                )}
                
                <div className="relative bg-dark-800/50 backdrop-blur-sm border border-neon-purple/20 rounded-xl p-8 hover:border-neon-orange/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Timeline Dot */}
                    <div className="relative flex-shrink-0 w-16 md:w-20">
                      <div className="absolute left-0 top-2 w-16 h-16 bg-gradient-to-br from-neon-purple to-neon-orange rounded-full flex items-center justify-center z-10 border-4 border-dark-900">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 pl-0 md:pl-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div className="w-full min-w-0">
                          <h3 className="text-2xl font-bold text-white mb-1 break-words">{exp.position}</h3>
                          <h4 className="text-xl text-neon-orange font-semibold mb-2 break-words whitespace-normal">{exp.company}</h4>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-400">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-neon-purple" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-neon-orange" />
                          {exp.location}
                        </span>
                      </div>

                      <ul className="space-y-3 mt-6">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-300">
                            <Target className="w-5 h-5 text-neon-purple flex-shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Learning Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title mb-4">
              SKILLS & LEARNING
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-dark-800/50 backdrop-blur-sm border border-neon-purple/20 rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Database className="w-8 h-8 text-neon-purple" />
                <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Programming & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'SQL', 'Excel', 'Power BI', 'Pandas', 'NumPy', 'Matplotlib'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-dark-700 border border-neon-purple/30 rounded-full text-sm text-gray-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Data Analysis</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Data Cleaning', 'Statistical Analysis', 'Data Visualization', 'Exploratory Data Analysis'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-dark-700 border border-neon-orange/30 rounded-full text-sm text-gray-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Currently Learning */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-dark-800/50 backdrop-blur-sm border border-neon-orange/20 rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-8 h-8 text-neon-orange" />
                <h3 className="text-2xl font-bold text-white">Currently Learning</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Deep Diving Into</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Data Science', 'Machine Learning', 'Artificial Intelligence', 'Deep Learning'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-dark-700 border border-neon-pink/30 rounded-full text-sm text-gray-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Continuously expanding my knowledge in AI/ML to build more advanced analytical models and predictive solutions. 
                  Exploring neural networks, natural language processing, and advanced machine learning algorithms.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
