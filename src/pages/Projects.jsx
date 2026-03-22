import PageWrapper from '../components/common/PageWrapper';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import MagneticButton from '../components/common/MagneticButton';

const Projects = () => {
    const projects = [
        {
            title: 'Food Demand Predictor',
            description: 'Driven by a passion for social good, this interactive machine learning model predicts and forecasts food demand. It has been used by 500 families near LPU to successfully reduce food waste.',
            tags: ['Python', 'Machine Learning', 'Gradio', 'Hugging Face'],
            url: 'https://github.com/pavandoddavarapu/food-demand-predictor',
            color: 'from-blue-500/20 to-yellow-500/20',
            image: '/projects/food_demand_predictor.png'
        },
        {
            title: 'CreditPathAI',
            description: 'End-to-end Machine Learning system for predicting loan defaults in collaboration with Infosys Springboard. It has shown the highest results in the institution till now, proving its immense data-driven impact.',
            tags: ['Python', 'Machine Learning', 'Streamlit', 'Data Science'],
            url: 'https://github.com/springboardmentor891v/CreditPathAI_Oct_Batch/tree/pavan_doddavarapu',
            color: 'from-emerald-500/20 to-teal-500/20',
            image: '/projects/credit_path_ai.png'
        },
        {
            title: 'Smart Waste Management System',
            description: 'IoT and ML-based solution utilizing LSTM/Prophet models to predict waste patterns. It was proudly presented at the HSC Pre Summit for the AI Impact Summit, India, by the LPU Media Team.',
            tags: ['IoT', 'Machine Learning', 'Python', 'LSTM', 'Prophet'],
            url: 'https://github.com/pavandoddavarapu/smart-waste-management-system',
            color: 'from-purple-500/20 to-pink-500/20',
            image: '/projects/smart_waste_management.png'
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
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none`}></div>

                        {item.image && (
                            <div className="relative w-full h-52 bg-black/20 overflow-hidden z-0 border-b border-black/5 dark:border-white/5">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out opacity-80 group-hover:opacity-100" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#f9fafb] dark:from-[#0a0a0a] to-transparent pointer-events-none opacity-80 dark:opacity-90"></div>
                            </div>
                        )}

                        <div className={`relative flex flex-col h-full z-10 ${item.image ? 'p-8 pt-2' : 'p-8'}`}>
                            {!item.image && (
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center mb-8 group-hover:bg-white/10 transition-colors">
                                    <Code2 className="text-gray-700 dark:text-gray-300 group-hover:text-blue-400 transition-colors" size={28} />
                                </div>
                            )}

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
