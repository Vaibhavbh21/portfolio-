import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink, Award } from 'lucide-react';

const Certifications = () => {
    const certifications = [
        {
            title: "Ducat India Training",
            fileName: "Certificate - Ducat India VAIBHAV.pdf",
            description: "Comprehensive training certification from Ducat India."
        },
        {
            title: "IoT Product Security",
            fileName: "CertificateOfCompletion_IoT Product Security.pdf",
            description: "Certificate of completion for IoT Product Security course."
        },
        {
            title: "Cyber Incident Response & forensics",
            fileName: "CertificateOfCompletion_Learning Cyber Incident Response and Digital Forensics 2019.pdf",
            description: "Specialized training in cyber incident response and digital forensics."
        },
        {
            title: "Effective Communication",
            fileName: "CertificateOfCompletion_Preparing for Successful Communication.pdf",
            description: "Course completion for mastering successful communication strategies."
        },
        {
            title: "Dark Web Operations",
            fileName: "Introduction to Dark Web Operations-course.pdf",
            description: "In-depth course on understanding and navigating dark web operations."
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
                            CERTIFICATIONS
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Professional certifications and courses that validate my technical expertise
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Certifications Grid */}
            <section className="px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative magnetic-card"
                            >
                                <div className="relative bg-dark-800/50 backdrop-blur-sm border border-neon-purple/20 rounded-xl overflow-hidden h-full hover:border-neon-orange/50 transition-all duration-300 hover-glow flex flex-col">
                                    {/* Top Icon Area */}
                                    <div className="relative h-40 bg-gradient-to-br from-neon-purple/10 to-neon-orange/10 flex items-center justify-center group-hover:from-neon-purple/20 group-hover:to-neon-orange/20 transition-all duration-300">
                                        <div className="w-16 h-16 bg-dark-900/50 rounded-full flex items-center justify-center border border-neon-purple/30 group-hover:scale-110 transition-transform duration-300">
                                            <Award className="w-8 h-8 text-neon-orange" />
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-neon-orange transition-colors">
                                            {cert.title}
                                        </h3>

                                        <p className="text-gray-400 text-sm mb-6 flex-1">
                                            {cert.description}
                                        </p>

                                        <a
                                            href={`/certificates/${cert.fileName}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center w-full px-4 py-3 bg-dark-700 hover:bg-neon-purple/20 border border-neon-purple/30 hover:border-neon-purple text-white rounded-lg transition-all duration-300 group/btn"
                                        >
                                            <FileText className="w-4 h-4 mr-2 text-neon-purple group-hover/btn:text-white transition-colors" />
                                            <span className="font-semibold">View Certificate</span>
                                            <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover/btn:opacity-100 transform translate-x-[-10px] group-hover/btn:translate-x-0 transition-all duration-300" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Certifications;
