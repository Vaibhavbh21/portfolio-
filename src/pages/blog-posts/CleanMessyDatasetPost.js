import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const CleanMessyDatasetPost = () => {
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
                        How I Clean a <span className="text-neon-orange">Messy Dataset</span>
                        <br />
                        <span className="text-xl md:text-2xl text-gray-400 font-normal block mt-2">
                            (My Step-by-Step Process with Python + pandas)
                        </span>
                    </h1>

                    <div className="flex items-center justify-between border-b border-gray-800 pb-8">
                        <div className="flex items-center gap-6 text-gray-400 text-sm">
                            <span className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                Jan 18, 2026
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                8 min read
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
                        When I started working with real datasets, I quickly realised one thing.
                        <br />
                        <span className="text-neon-orange font-semibold">Data is almost never clean.</span>
                    </p>

                    <p>
                        Tutorial datasets look perfect. Real datasets do not. Column names are confusing, values are missing, formats are inconsistent, and nothing works smoothly. Cleaning data takes more time than analysis, and that is normal.
                    </p>

                    <p>
                        This is my actual step-by-step process, with the Python and pandas code I usually use.
                    </p>

                    <div className="my-12 space-y-12">

                        {/* Step 1 */}
                        <section>
                            <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-4">
                                <span className="bg-neon-purple text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                                Uderstand the data first
                            </h2>
                            <p>I always start by loading the data and just looking at it.</p>

                            <div className="bg-dark-800 rounded-lg p-4 border border-gray-800 my-4 overflow-x-auto">
                                <pre className="text-gray-300 font-mono text-sm">
                                    <code>{`import pandas as pd

df = pd.read_csv("data.csv")
df.head()`}</code>
                                </pre>
                            </div>

                            <p>I check:</p>
                            <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                                <li>Column names</li>
                                <li>Sample rows</li>
                                <li>Overall shape</li>
                            </ul>

                            <div className="bg-dark-800 rounded-lg p-4 border border-gray-800 my-4 overflow-x-auto">
                                <pre className="text-gray-300 font-mono text-sm">
                                    <code>{`df.shape
df.columns`}</code>
                                </pre>
                            </div>

                            <p>If I do not understand the data, I stop and figure it out first. Cleaning without understanding is risky.</p>
                        </section>

                        {/* Step 2 */}
                        <section>
                            <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-4">
                                <span className="bg-neon-purple text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                                Check data types
                            </h2>
                            <p>Wrong data types cause problems later.</p>

                            <div className="bg-dark-800 rounded-lg p-4 border border-gray-800 my-4 overflow-x-auto">
                                <pre className="text-gray-300 font-mono text-sm">
                                    <code>{`df.dtypes`}</code>
                                </pre>
                            </div>

                            <p>If a numeric column is stored as text:</p>
                            <div className="bg-dark-800 rounded-lg p-4 border border-gray-800 my-4 overflow-x-auto">
                                <pre className="text-gray-300 font-mono text-sm">
                                    <code>{`df["sales"] = pd.to_numeric(df["sales"], errors="coerce")`}</code>
                                </pre>
                            </div>

                            <p>If dates are inconsistent:</p>
                            <div className="bg-dark-800 rounded-lg p-4 border border-gray-800 my-4 overflow-x-auto">
                                <pre className="text-gray-300 font-mono text-sm">
                                    <code>{`df["order_date"] = pd.to_datetime(df["order_date"], errors="coerce")`}</code>
                                </pre>
                            </div>
                            <p>I always fix data types early.</p>
                        </section>

                        {/* Step 3 */}
                        <section>
                            <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-4">
                                <span className="bg-neon-purple text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                                Handle missing values
                            </h2>
                            <p>First, I check how many values are missing.</p>

                            <div className="bg-dark-800 rounded-lg p-4 border border-gray-800 my-4 overflow-x-auto">
                                <pre className="text-gray-300 font-mono text-sm">
                                    <code>{`df.isnull().sum()`}</code>
                                </pre>
                            </div>

                            <p>Then I decide what to do based on context.</p>

                            <div className="grid md:grid-cols-2 gap-4 my-4">
                                <div className="bg-dark-800/50 p-4 rounded-lg border border-gray-800">
                                    <p className="font-semibold text-white mb-2">Drop rows if missing values are very few:</p>
                                    <pre className="text-gray-300 font-mono text-sm bg-dark-900 p-2 rounded">
                                        <code>{`df = df.dropna()`}</code>
                                    </pre>
                                </div>
                                <div className="bg-dark-800/50 p-4 rounded-lg border border-gray-800">
                                    <p className="font-semibold text-white mb-2">Fill missing values if it makes sense:</p>
                                    <pre className="text-gray-300 font-mono text-sm bg-dark-900 p-2 rounded">
                                        <code>{`df["rating"] = df["rating"].fillna(df["rating"].mean())`}</code>
                                    </pre>
                                </div>
                            </div>
                            <p>I avoid filling everything blindly.</p>
                        </section>

                        {/* Step 4 */}
                        <section>
                            <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-4">
                                <span className="bg-neon-purple text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
                                Remove duplicates carefully
                            </h2>

                            <div className="bg-dark-800 rounded-lg p-4 border border-gray-800 my-4 overflow-x-auto">
                                <pre className="text-gray-300 font-mono text-sm">
                                    <code>{`df.duplicated().sum()`}</code>
                                </pre>
                            </div>

                            <p>If duplicates are clearly unwanted:</p>
                            <div className="bg-dark-800 rounded-lg p-4 border border-gray-800 my-4 overflow-x-auto">
                                <pre className="text-gray-300 font-mono text-sm">
                                    <code>{`df = df.drop_duplicates()`}</code>
                                </pre>
                            </div>
                            <p>But I always think first. Sometimes duplicates are valid records.</p>
                        </section>

                        {/* Step 5 */}
                        <section>
                            <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-4">
                                <span className="bg-neon-purple text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">5</span>
                                Standardize text and formats
                            </h2>
                            <p>Text data is usually messy.</p>

                            <p className="mt-4 mb-2 font-semibold text-white">Remove extra spaces and fix casing:</p>
                            <div className="bg-dark-800 rounded-lg p-4 border border-gray-800 mb-4 overflow-x-auto">
                                <pre className="text-gray-300 font-mono text-sm">
                                    <code>{`df["city"] = df["city"].str.strip().str.lower()`}</code>
                                </pre>
                            </div>

                            <p className="mt-4 mb-2 font-semibold text-white">Fix inconsistent values:</p>
                            <div className="bg-dark-800 rounded-lg p-4 border border-gray-800 mb-4 overflow-x-auto">
                                <pre className="text-gray-300 font-mono text-sm">
                                    <code>{`df["gender"] = df["gender"].replace({"M": "Male", "F": "Female"})`}</code>
                                </pre>
                            </div>
                            <p>This step improves data quality a lot.</p>
                        </section>

                        {/* Step 6 */}
                        <section>
                            <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-4">
                                <span className="bg-neon-purple text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">6</span>
                                Handle outliers logically
                            </h2>
                            <p>I never delete outliers without checking.</p>

                            <div className="bg-dark-800 rounded-lg p-4 border border-gray-800 my-4 overflow-x-auto">
                                <pre className="text-gray-300 font-mono text-sm">
                                    <code>{`df.describe()`}</code>
                                </pre>
                            </div>

                            <p>I also visualize before deciding:</p>
                            <div className="bg-dark-800 rounded-lg p-4 border border-gray-800 my-4 overflow-x-auto">
                                <pre className="text-gray-300 font-mono text-sm">
                                    <code>{`import matplotlib.pyplot as plt

df["sales"].plot(kind="box")
plt.show()`}</code>
                                </pre>
                            </div>
                            <p>Sometimes outliers are errors. Sometimes they are important business cases.</p>
                        </section>

                        {/* Step 7 */}
                        <section>
                            <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-4">
                                <span className="bg-neon-purple text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">7</span>
                                Validate after cleaning
                            </h2>
                            <p>After cleaning, I recheck everything.</p>

                            <div className="bg-dark-800 rounded-lg p-4 border border-gray-800 my-4 overflow-x-auto">
                                <pre className="text-gray-300 font-mono text-sm">
                                    <code>{`df.info()
df.describe()
df.head()`}</code>
                                </pre>
                            </div>
                            <p>This confirms that cleaning did not break anything.</p>
                        </section>

                        {/* Step 8 */}
                        <section>
                            <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-4">
                                <span className="bg-neon-purple text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">8</span>
                                Document what I did
                            </h2>
                            <p>I always write comments or keep notes in a notebook.</p>

                            <div className="bg-dark-800 rounded-lg p-4 border border-gray-800 my-4 overflow-x-auto">
                                <pre className="text-gray-300 font-mono text-sm">
                                    <code>{`# Converted sales column to numeric
# Filled missing ratings with mean
# Removed duplicate rows`}</code>
                                </pre>
                            </div>
                        </section>

                    </div>
                </motion.div>
            </article>
        </div>
    );
};

export default CleanMessyDatasetPost;
