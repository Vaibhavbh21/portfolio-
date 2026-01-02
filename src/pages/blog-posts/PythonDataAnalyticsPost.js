import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Share2, Code2, Database, BarChart2, Brain, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const PythonDataAnalyticsPost = () => {
    return (
        <div className="min-h-screen pt-24 pb-20">
            <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Link */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <Link to="/blog" className="inline-flex items-center text-gray-400 hover:text-neon-orange transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Blog
                    </Link>
                </motion.div>

                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-neon-purple/10 border border-neon-purple/30 rounded-full text-neon-purple text-xs font-semibold uppercase tracking-wider">
                            Skills
                        </span>
                        <span className="px-3 py-1 bg-neon-blue/10 border border-neon-blue/30 rounded-full text-neon-blue text-xs font-semibold uppercase tracking-wider">
                            Python
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Why Python Feels Easy in <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">
                            Data Analytics
                        </span>
                    </h1>

                    <div className="flex items-center justify-between border-b border-gray-800 pb-8">
                        <div className="flex items-center gap-6 text-gray-400 text-sm">
                            <span className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                Jan 15, 2026
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                7 min read
                            </span>
                        </div>
                        <button className="p-2 rounded-full hover:bg-dark-800 text-gray-400 hover:text-white transition-colors">
                            <Share2 className="w-5 h-5" />
                        </button>
                    </div>
                </motion.header>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="prose prose-invert prose-lg max-w-none text-gray-300"
                >
                    <p className="lead text-xl text-gray-200 mb-8">
                        A lot of people say the same thing when they start learning Python: <span className="text-neon-orange font-semibold">"Python is easy."</span> But beginners usually feel the opposite.
                    </p>

                    <p>
                        The confusion happens because Python itself is huge, but data analytics and data science use only a small part of Python. In analytics, Python feels easy because most of the heavy work is already done by libraries. You are not writing everything from scratch. You are using tools that were built exactly for data-related problems.
                    </p>

                    <p>
                        For data analytics, libraries like pandas, numpy, matplotlib, and seaborn do most of the work. Pandas handles data cleaning and manipulation, numpy handles calculations, and matplotlib or seaborn take care of visualizations. With just a few lines of code, you can analyze thousands of rows of data.
                    </p>

                    <p>
                        For data science, you usually add libraries like scikit-learn for machine learning, scipy for advanced calculations, and sometimes statsmodels for statistical analysis. Again, you are not building algorithms from zero. You are applying already-tested methods.
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-12 mb-6">The Real Challenge</h3>

                    <p>
                        That is why Python feels beginner-friendly in these fields. The difficulty is not the syntax. The real challenge is <span className="text-white font-semibold">understanding the data, asking the right questions, and interpreting results.</span>
                    </p>

                    <p>
                        This is where many beginners go wrong. They try to learn complete Python first. They go deep into topics like classes, decorators, advanced OOP, file systems, and things that are rarely used in day-to-day analytics work. This makes Python feel confusing and heavy.
                    </p>

                    <div className="bg-dark-800/50 border-l-4 border-neon-purple p-6 my-8 rounded-r-lg">
                        <p className="text-white font-semibold mb-2">The Truth:</p>
                        <p className="italic m-0">
                            For data analytics and even data science, you do not need to master full Python. You mainly need basic Python syntax, lists, dictionaries, loops, and a strong understanding of libraries.
                        </p>
                    </div>

                    {/* Library List Box */}
                    <div className="my-12">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Code2 className="text-neon-blue" />
                            Python Libraries You Actually Use
                        </h3>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Data Analytics Column */}
                            <div className="bg-dark-800/80 rounded-xl p-6 border border-gray-800 hover:border-neon-purple/50 transition-all">
                                <h4 className="text-xl font-bold text-neon-purple mb-4 flex items-center gap-2">
                                    <BarChart2 className="w-5 h-5" /> Data Analytics
                                </h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2">
                                        <span className="font-mono text-neon-orange bg-neon-orange/10 px-2 py-0.5 rounded text-sm">pandas</span>
                                        <span className="text-sm">Data cleaning, filtering, grouping</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="font-mono text-neon-orange bg-neon-orange/10 px-2 py-0.5 rounded text-sm">numpy</span>
                                        <span className="text-sm">Calculations, arrays, numerical work</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="font-mono text-neon-orange bg-neon-orange/10 px-2 py-0.5 rounded text-sm">matplotlib</span>
                                        <span className="text-sm">Basic charts and plots</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="font-mono text-neon-orange bg-neon-orange/10 px-2 py-0.5 rounded text-sm">seaborn</span>
                                        <span className="text-sm">Clean and readable visualizations</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="font-mono text-neon-orange bg-neon-orange/10 px-2 py-0.5 rounded text-sm">openpyxl</span>
                                        <span className="text-sm">Excel file handling</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Data Science Column */}
                            <div className="bg-dark-800/80 rounded-xl p-6 border border-gray-800 hover:border-neon-blue/50 transition-all">
                                <h4 className="text-xl font-bold text-neon-blue mb-4 flex items-center gap-2">
                                    <Brain className="w-5 h-5" /> Data Science / ML
                                </h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2">
                                        <span className="font-mono text-neon-orange bg-neon-orange/10 px-2 py-0.5 rounded text-sm">scikit-learn</span>
                                        <span className="text-sm">Machine learning models</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="font-mono text-neon-orange bg-neon-orange/10 px-2 py-0.5 rounded text-sm">scipy</span>
                                        <span className="text-sm">Advanced math and stats</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="font-mono text-neon-orange bg-neon-orange/10 px-2 py-0.5 rounded text-sm">statsmodels</span>
                                        <span className="text-sm">Statistical analysis</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="font-mono text-neon-orange bg-neon-orange/10 px-2 py-0.5 rounded text-sm">xgboost</span>
                                        <span className="text-sm">Advanced ML models</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="font-mono text-neon-orange bg-neon-orange/10 px-2 py-0.5 rounded text-sm">pytorch</span>
                                        <span className="text-sm">Deep learning (later stage)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mt-12 mb-6">Topics You Can Safely Skip (At First)</h3>

                    <p>
                        One big mistake beginners make is trying to learn all of Python before starting data analytics or data science. That approach sounds logical, but in reality, it slows you down. As a data analyst, you do not need to be a Python engineer. You need Python as a tool, not as a subject.
                    </p>

                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 my-6">
                        <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2">
                            <Layers className="w-5 h-5" /> Don't Get Stuck On These:
                        </h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li><strong>Deep Object-Oriented Programming:</strong> Classes, inheritance, and advanced patterns are rarely used in daily analytics.</li>
                            <li><strong>Decorators, Generators, Metaclasses:</strong> Impressive, but add confusion without immediate value.</li>
                            <li><strong>Complex File Handling:</strong> Libraries like pandas handle CSVs and Excel files for you.</li>
                            <li><strong>Advanced Syntax Tricks:</strong> Readable code is better than clever code.</li>
                        </ul>
                    </div>

                    <p>
                        What you actually need is much simpler: <strong>Load data, Clean data, Analyze patterns, Visualize insights, and Explain results.</strong> Libraries already handle most of the heavy work for you.
                    </p>

                    <p>
                        Instead of spending months perfecting Python theory, it is better to spend time building projects. When you build projects, Python concepts automatically start making sense. You learn only what you need, exactly when you need it.
                    </p>

                    <p>
                        Later, when your projects grow and your role expands, you can always come back and learn advanced Python. Learning never stops. But at the beginning, focus on doing, not mastering.
                    </p>

                    <p className="text-xl font-bold text-white mt-8">
                        Python becomes powerful when you stop treating it like a subject and start using it like a tool.
                    </p>
                </motion.div>
            </article>
        </div>
    );
};

export default PythonDataAnalyticsPost;
