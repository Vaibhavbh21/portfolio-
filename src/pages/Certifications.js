import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink, Award, Sparkles } from 'lucide-react';

const Certifications = () => {
    const certifications = [
        {
            title: "Ducat India Training",
            fileName: "Certificate - Ducat India VAIBHAV.pdf",
            description: "Comprehensive technical training certification in software development and computing fundamentals."
        },
        {
            title: "IoT Product Security",
            fileName: "CertificateOfCompletion_IoT Product Security.pdf",
            description: "Certificate of completion for IoT Product Security and connected device defense protocols."
        },
        {
            title: "Cyber Incident Response & Forensics",
            fileName: "CertificateOfCompletion_Learning Cyber Incident Response and Digital Forensics 2019.pdf",
            description: "Specialized training in cyber incident response, threat containment, and digital forensics."
        },
        {
            title: "Effective Communication",
            fileName: "CertificateOfCompletion_Preparing for Successful Communication.pdf",
            description: "Course completion for mastering executive and technical communication strategies."
        },
        {
            title: "Dark Web Operations",
            fileName: "Introduction to Dark Web Operations-course.pdf",
            description: "In-depth course on intelligence analysis, threat monitoring, and dark web operations."
        }
    ];

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
                            <span>CREDENTIALS & VERIFICATIONS</span>
                        </div>
                        <h1 className="section-title mb-4">
                            CERTIFICATIONS
                        </h1>
                        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
                            Verified technical certifications and specialized course accomplishments
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Certifications Grid */}
            <section className="px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bento-card p-6 flex flex-col justify-between group"
                            >
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-ai-indigo/10 border border-ai-indigo/30 flex items-center justify-center mb-5 group-hover:border-ai-cyan/50 transition-colors">
                                        <Award className="w-6 h-6 text-ai-cyan" />
                                    </div>

                                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-ai-cyan transition-colors">
                                        {cert.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                        {cert.description}
                                    </p>
                                </div>

                                <a
                                    href={`/certificates/${cert.fileName}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-dark-750 hover:bg-ai-indigo/20 border border-white/10 hover:border-ai-indigo/40 text-gray-200 hover:text-white rounded-xl text-sm font-medium transition-all duration-300 gap-2"
                                >
                                    <FileText className="w-4 h-4 text-ai-indigo" />
                                    <span>View Certificate</span>
                                    <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-ai-cyan transition-colors" />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Certifications;

