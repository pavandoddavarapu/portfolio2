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
                                I’m a <span className="text-blue-600 dark:text-blue-400 font-semibold">Pre-Final Year B.Tech Computer Science student</span> at Lovely Professional University (<span className="text-blue-600 dark:text-blue-400 font-semibold">CGPA: 8.49</span>), driven by a deep passion for <span className="text-blue-600 dark:text-blue-400 font-semibold">Machine Learning, Artificial Intelligence, and full-stack development</span>.
                            </p>
                            <p>
                                I specialize in building <span className="text-purple-600 dark:text-purple-400 font-semibold">end-to-end intelligent systems</span> from data preprocessing and model development to deploying scalable, real-time applications. My tech stack includes Python, Java, C++, SQL, along with modern ML and AI tools like Scikit-learn, Hugging Face, LangChain, and Streamlit.
                            </p>
                            <p>
                                As an ML Intern at <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Infosys Springboard</span>, I led the development of a loan default prediction system that <span className="text-emerald-600 dark:text-emerald-400 font-semibold">improved risk detection accuracy by ~30%</span>, achieving the highest performance recorded within the program.
                            </p>
                            <p>
                                I focus on building technology that creates <span className="text-orange-600 dark:text-orange-400 font-semibold">real-world impact</span>. My food waste prediction system <span className="text-orange-600 dark:text-orange-400 font-semibold">has been adopted by 500+ families</span> around LPU, actively helping reduce waste. I also developed a Smart Waste Management System integrating IoT with LSTM and Prophet forecasting, which was <span className="text-orange-600 dark:text-orange-400 font-semibold">showcased at the HSC Pre Summit for the AI Impact Summit, India</span>.
                            </p>
                            <p>
                                Currently, I’m working on a cutting-edge <span className="text-cyan-600 dark:text-cyan-400 font-semibold">Agentic AI project in collaboration with senior academic leadership</span>, pushing the boundaries of autonomous agentic systems.
                            </p>
                            <p className="text-gray-800 dark:text-gray-200 font-medium border-l-2 border-blue-500 pl-4 mt-6">
                                I’m actively seeking internship and full-time opportunities in <span className="font-semibold">AI, ML, and Software Development</span> where I can build impactful solutions and grow as a high-performance engineer.
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
                                src="/pavan_real.jpg"
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
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 dark:from-[#050505] to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 dark:from-[#050505] to-transparent z-10"></div>

                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 40, repeat: Infinity }}
                    className="flex gap-16 items-center px-8"
                >
                    {[...keywords, ...keywords, ...keywords].map((keyword, i) => (
                        <div key={i} className="flex items-center gap-4">
                            <span className="text-3xl md:text-5xl font-black text-black/10 dark:text-white/20 transition-colors">
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
