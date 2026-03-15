import PageWrapper from '../components/common/PageWrapper';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import MagneticButton from '../components/common/MagneticButton';

const Projects = () => {
    const projects = [
        {
            title: 'FileShare Pro',
            description: 'A full-stack file sharing and management platform featuring a modern dashboard for secure upload, management, and activity tracking with real-time feedback.',
            tags: ['React', 'Full-stack', 'State Management'],
            url: 'https://github.com/Khush2040/FileShare-Pro',
            color: 'from-blue-500/20 to-indigo-500/20'
        },
        {
            title: 'StyleMate – AI Fashion Assistant',
            description: 'Interactive AI-powered fashion assistant generating personalized outfit suggestions based on mood, occasion, season, and budget.',
            tags: ['HTML', 'CSS', 'JavaScript', 'FastAPI'],
            url: 'https://github.com/Khush2040/StyleMate',
            color: 'from-purple-500/20 to-pink-500/20'
        },
        {
            title: 'Real-Time-Air-Quality-Index-AQI-Monitoring',
            description: 'Interactive Air Quality Analysis and Prediction System built using machine learning and data visualization to forecast pollution levels.',
            tags: ['Python', 'Streamlit', 'Machine Learning'],
            url: 'https://github.com/Khush2040/Real-Time-Air-Quality-Index-AQI-Monitoring',
            color: 'from-teal-500/20 to-emerald-500/20'
        },
        {
            title: 'EDA-Coffee-Shop-Sales',
            description: 'Exploratory Data Analysis (EDA) of Coffee Shop Sales using Python and Jupyter Notebook. Transforming raw data into readable insights.',
            tags: ['Python', 'Data Analysis', 'Jupyter'],
            url: 'https://github.com/Khush2040/EDA-Coffee-Shop-Sales',
            color: 'from-blue-500/20 to-cyan-500/20'
        },
        {
            title: 'Sales-Tracker-AI',
            description: 'Responsive sales tracker web app with built-in Gemini chatbot. Switch between light/dark mode, and chat with an AI assistant in text or speech.',
            tags: ['JavaScript', 'HTML', 'AI Integration'],
            url: 'https://github.com/Khush2040/Sales-Tracker-AI',
            color: 'from-violet-500/20 to-fuchsia-500/20'
        },
        {
            title: 'CrewSync',
            description: 'A dynamic JavaScript-based web application providing team synchronization tools, featuring a robust frontend and responsive design.',
            tags: ['JavaScript', 'Web Development'],
            url: 'https://github.com/Khush2040/CrewSync',
            color: 'from-green-500/20 to-emerald-500/20'
        },
        {
            title: 'Dashboard Analysis',
            description: 'A comprehensive visual dashboard for tracking and analyzing integrated scheme performance metrics.',
            tags: ['Dashboard', 'Analytics', 'Data Viz'],
            url: 'https://github.com/Khush2040/Integrated-Scheme-Performance-Report-Dashboard-Analysis',
            color: 'from-orange-500/20 to-red-500/20'
        },
        {
            title: 'Parking-Management',
            description: 'An enterprise-level Java-based system built to effectively manage and allocate parking spaces organically.',
            tags: ['Java', 'Management Systems'],
            url: 'https://github.com/Khush2040/Parking-Management-System',
            color: 'from-pink-500/20 to-rose-500/20'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
    };

    return (
        <PageWrapper className="min-h-screen py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full dark:bg-[#050505] overflow-hidden">

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-20 text-center md:text-left"
            >
                <h2 className="text-sm font-bold tracking-widest uppercase text-blue-500 mb-6 flex items-center justify-center md:justify-start gap-4">
                    <span className="w-12 h-px bg-blue-500"></span>
                    Portfolio
                </h2>

                <h3 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1] mb-6 tracking-tight text-gray-900 dark:text-white">
                    Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Works.</span>
                </h3>

                <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-light max-w-2xl mx-auto md:mx-0">
                    A collection of scalable web applications, data engineering models, and creative frontend architectures built with modern frameworks.
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {projects.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="group relative flex flex-col h-full rounded-3xl overflow-hidden glass border border-black/5 dark:border-white/5 hover:border-black/10 dark:border-white/20 transition-all duration-500 hover:-translate-y-2 bg-gradient-to-b from-white/[0.03] to-transparent"
                    >
                        {/* Glow Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl`}></div>

                        <div className="relative p-8 flex flex-col h-full z-10">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center mb-8 group-hover:bg-white/10 transition-colors">
                                <Code2 className="text-gray-700 dark:text-gray-300 group-hover:text-blue-400 transition-colors" size={28} />
                            </div>

                            <a href={item.url} target="_blank" rel="noopener noreferrer" className="inline-block w-fit">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 hover:text-blue-400 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300 flex items-center gap-2 cursor-pointer">
                                    {item.title} <ExternalLink size={20} className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                                </h3>
                            </a>

                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 flex-grow font-light">
                                {item.description}
                            </p>

                            <div className="flex gap-2 flex-wrap mb-8 mt-auto">
                                {item.tags.map(tag => (
                                    <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-black/5 dark:border-white/10 text-gray-700 dark:text-gray-300 font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="border-t border-black/5 dark:border-white/10 pt-6">
                                <MagneticButton href={item.url}>
                                    <div className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 rounded-full bg-white text-black font-bold text-sm hover:scale-105 transition-transform duration-300">
                                        <Github size={18} /> View Source Code
                                    </div>
                                </MagneticButton>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-20 flex justify-center pb-10"
            >
                <MagneticButton href="https://github.com/Khush2040">
                    <div className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-black/5 dark:border-white/10 text-gray-900 dark:text-white font-bold hover:bg-white/10 hover:border-black/10 dark:border-white/20 transition-all duration-300">
                        <Github size={20} /> View More on GitHub
                    </div>
                </MagneticButton>
            </motion.div>
        </PageWrapper>
    );
};

export default Projects;
