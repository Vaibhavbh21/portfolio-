import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const AiJobsPost = () => {
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
                            Career
                        </span>
                        <span className="px-3 py-1 bg-neon-orange/10 border border-neon-orange/30 rounded-full text-neon-orange text-xs font-semibold uppercase tracking-wider">
                            AI & Future
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        AI Will Not Kill Jobs, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-orange">
                            It Will Kill Outdated Skills
                        </span>
                    </h1>

                    <div className="flex items-center justify-between border-b border-gray-800 pb-8">
                        <div className="flex items-center gap-6 text-gray-400 text-sm">
                            <span className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                Jan 02, 2026
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                5 min read
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
                        Let’s be real for a second. Our generation already knows what AI can do. We use it almost every day, sometimes without even thinking about it. So for us, AI is not some scary future thing. It is already part of normal life.
                    </p>

                    <p>
                        But when you try to explain this to someone from an older generation, the reaction is usually different. They say things like, “You don’t want to work” or “You are just taking excuses in the name of AI.” And honestly, I do not blame them. They come from a time where working hard meant doing everything manually. No shortcuts, no automation.
                    </p>

                    <p>
                        But there is something important that even we need to accept. Yes, AI has actually reduced some jobs, and yes, getting a job today is harder than before. A lot of entry-level and repetitive work is slowly disappearing. Companies want fewer people who can do more things. Competition is high, and expectations are higher.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">From My Experience</h2>

                    <p>
                        From my own experience, things changed once I started using AI tools properly. Earlier, if my Python code had a bug, I could easily spend one hour just figuring out what went wrong. Now, with AI helping me debug, the same thing usually takes around ten minutes. The same happened with SQL. Earlier, optimizing a query used to take two or three hours of thinking and trial and error. Now I can get a better version in a few minutes and then improve it myself.
                    </p>

                    <p>
                        Even for presentations, earlier I used to spend one or two hours just thinking about content. Now I can prepare a full PPT in five minutes. That does not mean I blindly trust AI. I still verify everything. I still check the logic, the output, and the data. AI saves time, but the responsibility is still mine.
                    </p>

                    <quote className="block p-6 my-8 border-l-4 border-neon-orange bg-dark-800/50 rounded-r-lg italic text-lg text-gray-200">
                        "This is why I feel AI is not killing work. It is changing what “hard work” looks like. AI is removing outdated skills."
                    </quote>

                    <p>
                        If a task is repetitive and easy to automate, it is obviously at risk. Jobs are not gone, but the bar to get hired is definitely higher.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Real Shift</h2>

                    <p>
                        Earlier, knowing Excel was enough. Now you need Excel, SQL, and the ability to use AI tools smartly. Earlier, basic coding could get you in. Now problem-solving matters more than typing code.
                    </p>

                    <p>
                        The real problem is not AI. The real problem is refusing to adapt. Every generation faces change. Ours just happens to be moving faster. So no, AI will not kill all jobs, but it has made things tougher and it will continue to replace skills that stay stuck in the past.
                    </p>
                </motion.div>
            </article>
        </div>
    );
};

export default AiJobsPost;
