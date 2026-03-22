import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Award, Search, ChevronRight, GraduationCap, Link2 } from 'lucide-react';
import { cn } from '../components/common/Navbar';

// Standardized list without extraneous icons to keep it ultra-clean
const ALL_CERTS = [
    // AI & Cloud
    { id: 1, title: "Deep Learning for Developers", category: "AI & Cloud", issuer: "DeepLearning.AI", link: "/certificates/Deep Learning for Developers.pdf" },
    { id: 2, title: "Generative Models for Developers", category: "AI & Cloud", issuer: "DeepLearning.AI", link: "/certificates/Generative models for developers.pdf" },
    { id: 3, title: "Introduction to OpenAI GPT Models", category: "AI & Cloud", issuer: "Coursera", link: "/certificates/Introduction to OpenAI GPT Models.pdf" },
    { id: 4, title: "OpenAI GPT-3 for Developers", category: "AI & Cloud", issuer: "DeepLearning.AI", link: "/certificates/OpenAI Generative Pre-trained Transformer 3 (GPT-3) for developers.pdf" },
    { id: 5, title: "Computer Vision 101", category: "AI & Cloud", issuer: "Institution", link: "/certificates/computer vision 101.pdf" },
    { id: 6, title: "Introduction to Deep Learning", category: "AI & Cloud", issuer: "Institution", link: "/certificates/introduction to deeplearning.pdf" },
    { id: 7, title: "Natural Language Processing (NLP)", category: "AI & Cloud", issuer: "Institution", link: "/certificates/nlp.pdf" },
    { id: 8, title: "Artificial Intelligence Fundamentals", category: "AI & Cloud", issuer: "Institution", link: "/certificates/ai.pdf" },
    { id: 9, title: "Introduction to Data Science", category: "AI & Cloud", issuer: "Institution", link: "/certificates/introduction to datascience.pdf" },
    { id: 10, title: "Cloud Computing", category: "AI & Cloud", issuer: "NPTEL", link: "/certificates/12305446_MOOC_CCZYZV4Certificate (1).pdf" },
    { id: 11, title: "Agentic-AI Applications", category: "AI & Cloud", issuer: "Programming Pathshala", link: "/certificates/1-081078bb-293d-4992-8d6c-f97a7d58ef6d.pdf" },

    // Core Tech & Development
    { id: 13, title: "Bits and Bytes of Computer Networking", category: "Core Tech & Dev", issuer: "Coursera", link: "/certificates/bits and bytes coursera.pdf" },

    // Soft Skills
    { id: 14, title: "Time Management", category: "Soft Skills", issuer: "Institution", link: "/certificates/time management.pdf" },

    // Additional Certifications
    { id: 15, title: "Coursera Specialization (WX3D)", category: "Various Certifications", issuer: "Coursera", link: "/certificates/Coursera WX3DXC5IRR5V.pdf" },
    { id: 16, title: "Coursera Specialization (YG69)", category: "Various Certifications", issuer: "Coursera", link: "/certificates/Coursera YG69ZHXRKX9H.pdf" },
    { id: 17, title: "Coursera Certification (DM40)", category: "Various Certifications", issuer: "Coursera", link: "/certificates/Coursera DM40HDVS9EQX.pdf" },
    { id: 18, title: "Coursera Certification (N5UT)", category: "Various Certifications", issuer: "Coursera", link: "/certificates/Coursera N5UTJYUNC2H5.pdf" },
    { id: 19, title: "Coursera Certification (NQSP)", category: "Various Certifications", issuer: "Coursera", link: "/certificates/Coursera NQSPQLP749DR.pdf" },
    { id: 20, title: "Coursera Certification (R4IX)", category: "Various Certifications", issuer: "Coursera", link: "/certificates/Coursera R4IXPMHB8EY7.pdf" },
    { id: 21, title: "Coursera Certification (RP25)", category: "Various Certifications", issuer: "Coursera", link: "/certificates/Coursera RP25L6WLGX7A.pdf" },
];

const CATEGORIES = ["AI & Cloud", "Core Tech & Dev", "Soft Skills", "Various Certifications"];

const Certifications = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [searchQuery, setSearchQuery] = useState("");

    // Group certificates by category, applying search filter
    const groupedCerts = useMemo(() => {
        const filtered = ALL_CERTS.filter(cert => {
            const query = searchQuery.toLowerCase();
            return cert.title.toLowerCase().includes(query) ||
                cert.issuer.toLowerCase().includes(query) ||
                cert.category.toLowerCase().includes(query);
        });

        const groups = {};
        CATEGORIES.forEach(cat => {
            groups[cat] = filtered.filter(c => c.category === cat);
        });

        // Remove empty categories if searching
        if (searchQuery) {
            Object.keys(groups).forEach(key => {
                if (groups[key].length === 0) delete groups[key];
            });
        }

        return groups;
    }, [searchQuery]);

    const totalResults = useMemo(() => {
        return Object.values(groupedCerts).reduce((sum, current) => sum + current.length, 0);
    }, [groupedCerts]);

    return (
        <div className={cn(
            "min-h-screen pt-32 pb-24 px-4 sm:px-8 md:px-16 transition-colors duration-300",
            isDark ? "dark:bg-[#0a0a0a]" : "bg-[#fcfcfc]"
        )}>
            <div className="max-w-4xl mx-auto">

                {/* Minimal Header */}
                <div className="mb-12">
                    <h1 className={cn(
                        "text-3xl md:text-4xl font-semibold tracking-tight mb-3 flex items-center gap-3",
                        isDark ? "text-gray-100" : "text-gray-900"
                    )}>
                        <GraduationCap className="opacity-50" size={32} />
                        Certifications
                    </h1>
                    <p className={cn(
                        "text-base mt-2",
                        isDark ? "text-gray-600 dark:text-gray-400" : "text-gray-500"
                    )}>
                        A consolidated record of {ALL_CERTS.length} professional achievements, courses, and event participations.
                    </p>
                </div>

                {/* Refined Search Bar */}
                <div className="relative mb-16 max-w-xl">
                    <Search className={cn("absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4", isDark ? "text-gray-500" : "text-gray-600 dark:text-gray-400")} />
                    <input
                        type="text"
                        placeholder="Search by title, issuer, or category..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className={cn(
                            "w-full pl-11 pr-4 py-3 rounded-xl text-[15px] outline-none transition-all border",
                            isDark
                                ? "bg-[#111] border-black/5 dark:border-white/10 text-white placeholder-gray-500 focus:border-black/10 dark:border-white/20 focus:bg-[#161616]"
                                : "bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-gray-300 shadow-sm"
                        )}
                    />
                </div>

                {/* Empty State */}
                {totalResults === 0 && (
                    <div className="py-20 text-center">
                        <p className={cn("text-lg", isDark ? "text-gray-500" : "text-gray-600 dark:text-gray-400")}>
                            No matching certifications found for "{searchQuery}".
                        </p>
                        <button
                            onClick={() => setSearchQuery("")}
                            className="mt-4 text-sm font-medium text-blue-500 hover:text-blue-600 underline"
                        >
                            Clear search
                        </button>
                    </div>
                )}

                {/* Grouped List Content */}
                <div className="space-y-16">
                    {Object.entries(groupedCerts).map(([category, certs]) => (
                        <motion.section
                            key={category}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="flex items-end justify-between mb-4 border-b pb-3 border-gray-200 dark:border-black/5 dark:border-white/10">
                                <h2 className={cn(
                                    "text-sm font-bold uppercase tracking-widest",
                                    isDark ? "text-gray-600 dark:text-gray-400" : "text-gray-500"
                                )}>
                                    {category}
                                </h2>
                                <span className={cn(
                                    "text-xs font-mono rounded px-2 py-0.5",
                                    isDark ? "bg-white/10 text-gray-600 dark:text-gray-400" : "bg-gray-100 text-gray-500"
                                )}>
                                    {certs.length}
                                </span>
                            </div>

                            <div className="flex flex-col gap-1">
                                {certs.map((cert) => (
                                    <div
                                        key={cert.id}
                                        className={cn(
                                            "group flex flex-col sm:flex-row sm:items-center justify-between py-3 px-3 -mx-3 rounded-lg transition-colors border-b border-transparent sm:border-b-0",
                                            isDark ? "hover:bg-white/5 sm:border-black/5 dark:border-white/5" : "hover:bg-black/5 sm:border-gray-100"
                                        )}
                                    >
                                        <div className="flex items-center gap-4">
                                            {/* Certificate Thumbnail */}
                                            {cert.link && (
                                                <div className="flex-shrink-0 relative overflow-hidden rounded-md border border-black/5 dark:border-white/10 group-hover:border-blue-500/50 transition-colors bg-white w-14 h-10 sm:w-20 sm:h-14">
                                                    <img
                                                        src={cert.link.replace('/certificates/', '/certificates/thumbnails/').replace('.pdf', '.jpg')}
                                                        alt={`${cert.title} thumbnail`}
                                                        className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            )}

                                            <div className="flex flex-col">
                                                <h3 className={cn(
                                                    "text-[15px] font-medium leading-snug mb-1",
                                                    isDark ? "text-white/90 group-hover:text-white" : "text-black/90 group-hover:text-black"
                                                )}>
                                                    {cert.title}
                                                </h3>
                                                <div className="flex flex-wrap items-center gap-2 text-[13px]">
                                                    <span className={isDark ? "text-white/50" : "text-black/60"}>
                                                        {cert.issuer}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {cert.link && (
                                            <a href={cert.link} target="_blank" rel="noreferrer" title="View Certificate" className={cn("mt-3 sm:mt-0 p-2 rounded-full transition-colors self-start sm:self-center", isDark ? "bg-white/5 hover:bg-white/10 text-white" : "bg-black/5 hover:bg-black/10 text-black")}>
                                                <Link2 size={16} />
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.section>
                    ))}
                </div>

                {/* Footer simple space */}
                <div className="h-12" />
            </div>
        </div>
    );
};

export default Certifications;
