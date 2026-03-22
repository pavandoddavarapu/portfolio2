import { motion } from 'framer-motion';

const skillsRow1 = [
    "Java", "Python", "C++", "C", "SQL", "HTML5", "CSS3",
    "MySQL", "REST APIs", "LangChain", "Streamlit", "n8n",
    "Spring Boot", "Git", "GitHub", "Docker", "AWS"
];
// Duplicate for seamless loop
const duplicatedRow1 = [...skillsRow1, ...skillsRow1, ...skillsRow1];

const skillsRow2 = [
    "Scikit-learn", "Hugging Face", "NumPy", "Pandas", "Matplotlib",
    "Jupyter Notebook", "XGBoost", "ARIMA", "Time-Series Forecasting",
    "Data Structures & Algorithms", "Computer Networks", "DBMS",
    "Machine Learning", "Deep Learning (Basics)",
    "IoT Integration", "End-to-End ML Pipelines"
];
// Duplicate for seamless loop
const duplicatedRow2 = [...skillsRow2, ...skillsRow2, ...skillsRow2];

const Skills = () => {
    return (
        <section className="py-24 relative overflow-hidden flex flex-col items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center z-10 relative">
                <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm mb-3 block">My Arsenal</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-gray-200 dark:to-gray-500">
                    Technologies & Tools
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                    I leverage the latest tools and frameworks to build scalable, high-performance, and visually stunning web applications.
                </p>
            </div>

            {/* Marquee Row 1 */}
            <div className="relative w-full flex overflow-x-hidden mb-6 group">
                <motion.div
                    className="flex whitespace-nowrap gap-6 w-max"
                    animate={{ x: ["0%", "-33.33%"] }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {duplicatedRow1.map((skill, index) => (
                        <div
                            key={index}
                            className="px-8 py-4 rounded-2xl glass border border-black/5 dark:border-white/5 shadow-lg bg-white/5 hover:bg-white/10 hover:border-blue-500/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 flex items-center justify-center cursor-default"
                        >
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-200 dark:to-white">
                                {skill}
                            </span>
                        </div>
                    ))}
                </motion.div>
                {/* Gradient Masks */}
                <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-gray-50 dark:from-[#0f1016] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-gray-50 dark:from-[#0f1016] to-transparent z-10 pointer-events-none"></div>
            </div>

            {/* Marquee Row 2 (Reverse direction) */}
            <div className="relative w-full flex overflow-x-hidden group">
                <motion.div
                    className="flex whitespace-nowrap gap-6 w-max"
                    animate={{ x: ["-33.33%", "0%"] }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {duplicatedRow2.map((skill, index) => (
                        <div
                            key={index}
                            className="px-8 py-4 rounded-2xl glass border border-black/5 dark:border-white/5 shadow-lg bg-white/5 hover:bg-white/10 hover:border-purple-500/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 flex items-center justify-center cursor-default"
                        >
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-200 dark:to-white">
                                {skill}
                            </span>
                        </div>
                    ))}
                </motion.div>
                {/* Gradient Masks */}
                <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-gray-50 dark:from-[#0f1016] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-gray-50 dark:from-[#0f1016] to-transparent z-10 pointer-events-none"></div>
            </div>

            {/* Ambient Background Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[400px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-[100px] rounded-full pointer-events-none z-0"></div>
        </section>
    );
};

export default Skills;
