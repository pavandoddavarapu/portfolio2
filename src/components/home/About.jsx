import { motion } from 'framer-motion';

const keywords = [
    'Machine Learning', 'Data Science', 'AI/ML Engineering',
    'Python & Java', 'Cloud & DevOps', 'AI/ML',
    'LangChain & RAG', 'Problem Solving'
];

const About = () => {
    return (
        <section className="py-32 relative z-10 w-full dark:bg-[#050505] overflow-hidden border-t border-black/5 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row gap-16 items-start justify-between">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="md:w-1/2"
                    >
                        <h2 className="text-xl sm:text-2xl font-black tracking-widest uppercase text-blue-500 mb-8 flex items-center gap-4">
                            <span className="w-16 h-1 bg-blue-500 rounded-full"></span>
                            About Me
                        </h2>



                        <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed font-light text-base sm:text-lg mb-8">
                            <p>
                                I am a Pre-Final Year B.Tech Computer Science student at Lovely Professional University (CGPA: 8.49) with a strong passion for Machine Learning, Artificial Intelligence, and full-stack development.
                            </p>
                            <p>
                                My technical foundation covers Python, Java, C++, SQL, and a range of ML frameworks including Scikit-learn, Hugging Face, LangChain, and Streamlit. I have hands-on experience building end-to-end ML pipelines — from data preprocessing and model training to real-time deployment via interactive web apps.
                            </p>
                            <p>
                                During my internship at Infosys Springboard as an ML Intern, I led the development of a loan default prediction system using 24+ features and multiple ML models, improving risk detection accuracy by ~30%. I also built a real-time Streamlit credit risk app and optimised model generalisation through cross-dataset validation.
                            </p>
                            <p>
                                Beyond internships, I have built projects such as a Hospital Load Forecasting system (using DTW + K-Shape clustering and supervised ML) and a Smart Waste Management System with IoT, GPS, and LSTM/Prophet-based overflow prediction, achieving a ~30% reduction in collection trips.
                            </p>
                            <p className="text-gray-800 dark:text-gray-200 font-medium border-l-2 border-blue-500 pl-4 mt-6">
                                I am actively seeking internship and full-time opportunities in ML, AI, and Software Development where I can apply my skills, drive impact, and continue growing as a technology professional.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="md:w-1/3 w-full"
                    >
                        <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden transition-all duration-700 pointer-events-none relative">
                            <img
                                src="/profile.jpg"
                                alt="Studio Profile"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 border border-black/5 dark:border-white/10 rounded-2xl"></div>
                        </div>
                    </motion.div>
                </div>

            </div>

            {/* Infinite Marquee Strip */}
            <div className="mt-32 w-full py-8 border-y border-black/5 dark:border-white/10 bg-white/[0.02] flex overflow-hidden whitespace-nowrap relative">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>

                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 40, repeat: Infinity }}
                    className="flex gap-16 items-center px-8"
                >
                    {[...keywords, ...keywords, ...keywords].map((keyword, i) => (
                        <div key={i} className="flex items-center gap-4">
                            <span className="text-3xl md:text-5xl font-black text-transparent bg-clip-text" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
                                {keyword}
                            </span>
                            <span className="w-3 h-3 rounded-full bg-blue-500/50"></span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default About;
