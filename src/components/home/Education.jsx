import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Rocket, BookOpen, Award, Code, Briefcase, FileText, ArrowUpRight } from 'lucide-react';

const timelineData = [
    {
        year: '2020 - 2021',
        title: '10th with Science — 90.2%',
        company: 'Jawahar Navodaya Vidyalaya, Yanam',
        description: 'Completed secondary education with a strong academic record, building a solid foundation in Science and Mathematics.',
        icon: <BookOpen className="text-blue-400 group-hover:text-cyan-400 transition-colors" size={24} />,
        type: 'Education'
    },
    {
        year: '2022 - 2023',
        title: '12th with Science — 80.8%',
        company: 'Jawahar Navodaya Vidyalaya, Yanam',
        description: 'Completed higher secondary education in the Science stream with strong performance in Physics, Chemistry, and Mathematics.',
        icon: <Award className="text-yellow-400 group-hover:text-yellow-300 transition-colors" size={24} />,
        type: 'Education'
    },
    {
        year: 'Aug 2023 - Jul 2027',
        title: 'B.Tech, Computer Science Engineering',
        company: 'Lovely Professional University, Phagwara, Punjab',
        description: 'Pursuing B.Tech CSE with a CGPA of 8.49. Active participant in hackathons, AI challenges, and the ML/AI community at LPU.',
        icon: <Code className="text-purple-400 group-hover:text-purple-300 transition-colors" size={24} />,
        type: 'Education'
    },
    {
        year: 'Oct 2025 - Dec 2025',
        title: 'ML Intern',
        company: 'Infosys Springboard, India',
        description: 'Developed an end-to-end ML system for loan default prediction improving risk detection accuracy by ~30%. Built a real-time Streamlit credit risk web app and optimised model generalisation through cross-dataset validation.',
        icon: <Briefcase className="text-green-400 group-hover:text-green-300 transition-colors" size={24} />,
        type: 'Internship'
    }
];

const TimelineCard = ({ item, isEven }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="glass p-8 rounded-2xl border border-black/5 dark:border-white/5 hover:border-cyan-500/30 transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] group relative overflow-hidden backdrop-blur-md w-full max-w-lg"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="p-3 rounded-xl bg-white/5 border border-black/5 dark:border-white/10 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-colors">
                    {item.icon}
                </div>
                <div>
                    <span className="text-sm font-bold text-cyan-400 tracking-wider uppercase block">{item.year}</span>
                    <span className="text-xs text-purple-300 font-medium uppercase tracking-widest">{item.type}</span>
                </div>
            </div>

            <h4 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors text-gray-100 relative z-10">{item.title}</h4>
            <h5 className="text-lg text-cyan-300/80 mb-4 font-medium relative z-10">{item.company}</h5>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base group-hover:text-gray-700 dark:text-gray-300 transition-colors relative z-10">
                {item.description}
            </p>
        </motion.div>
    );
};

const Education = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const lineProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, bounce: 0 });
    const yPosStr = useTransform(lineProgress, [0, 1], ["0%", "100%"]);

    return (
        <section className="py-24 relative overflow-hidden flex flex-col items-center">

            {/* Ambient Background Glow for the "Game" feel */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-5xl font-extrabold tracking-tight mb-4">
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                            Timeline & Journey
                        </span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-lg">Tracing the path from foundational learning to cutting-edge development.</p>
                </motion.div>

                <div className="relative max-w-5xl mx-auto" ref={containerRef}>

                    {/* Background Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 md:-translate-x-1/2 bg-white/5 rounded-full" />

                    {/* Animated Filled Line */}
                    <motion.div
                        className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 md:-translate-x-1/2 origin-top rounded-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10"
                        style={{ scaleY: lineProgress }}
                    />

                    {/* The Spaceship */}
                    <motion.div
                        className="absolute left-4 md:left-1/2 md:-translate-x-[50%] -translate-x-[50%] z-30 flex flex-col items-center pointer-events-none"
                        style={{ top: yPosStr }}
                    >
                        <div className="relative flex flex-col items-center justify-center translate-y-[-50%]">

                            {/* Thruster Flames */}
                            <motion.div
                                animate={{ height: [20, 35, 20], opacity: [0.6, 1, 0.6] }}
                                transition={{ duration: 0.2, repeat: Infinity, ease: "linear" }}
                                className="absolute -top-6 w-4 bg-gradient-to-t from-orange-500 via-yellow-300 to-transparent rounded-full blur-[2px]"
                            />

                            <div className="w-12 h-12 bg-[#020617] rounded-full border border-cyan-500/50 shadow-[0_0_20px_rgba(34,211,238,0.6)] flex items-center justify-center z-10 backdrop-blur-md">
                                <Rocket size={24} className="rotate-180 text-cyan-400" strokeWidth={2} />
                            </div>
                        </div>
                    </motion.div>

                    {/* Timeline Items */}
                    <div className="relative z-20 w-full pt-12 pb-24">
                        {timelineData.map((item, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div key={index} className="relative flex flex-col md:flex-row items-center w-full mb-16 md:mb-32">

                                    {/* Desktop Center Nodes */}
                                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#020617] border-2 border-cyan-500/80 shadow-[0_0_10px_rgba(34,211,238,0.5)] z-20" />

                                    {/* Desktop Left Area */}
                                    <div className={`hidden md:flex w-full md:w-1/2 justify-end pr-16 ${isEven ? '' : 'invisible'}`}>
                                        {isEven && <TimelineCard item={item} isEven={isEven} />}
                                    </div>

                                    {/* Desktop Right Area */}
                                    <div className={`hidden md:flex w-full md:w-1/2 justify-start pl-16 ${!isEven ? '' : 'invisible'}`}>
                                        {!isEven && <TimelineCard item={item} isEven={isEven} />}
                                    </div>

                                    {/* Mobile View Content */}
                                    <div className="flex md:hidden w-full pl-12 sm:pl-16">
                                        <TimelineCard item={item} isEven={false} />
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 w-full max-w-5xl mx-auto relative z-20"
                >
                    <div className="glass p-8 md:p-12 rounded-3xl border border-blue-500/20 overflow-hidden group hover:border-blue-500/40 transition-colors">
                        {/* Background Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-50 pointer-events-none" />

                        <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                            {/* Left Side: Text and CTA */}
                            <div className="flex-1 text-center md:text-left">
                                <div className="w-16 h-16 bg-[#020617] border border-black/5 dark:border-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto md:mx-0">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Medium_logo_Monogram.svg" className="w-8 h-8 invert opacity-80" alt="Medium" />
                                </div>
                                <h3 className="text-3xl lg:text-4xl font-black mb-4 bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
                                    Open Source Developer | GitHub Projects
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0 text-lg">
                                    Exploring ML, AI, and full-stack projects. All my work is open-source and available on GitHub.
                                </p>
                                <a
                                    href="https://github.com/pavandoddavarapu"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-black hover:bg-gray-200 font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                                >
                                    Visit My GitHub Profile
                                    <ArrowUpRight size={18} />
                                </a>
                            </div>

                            {/* Right Side: Example Blogs */}
                            <div className="flex-1 w-full space-y-4">
                                {[
                                    { title: "Hospital Load Forecasting — ML, Time-Series, DTW + K-Shape Clustering", tag: "ML Project" },
                                    { title: "Smart Waste Management System — IoT, GPS, LSTM/Prophet Forecasting", tag: "IoT & ML" },
                                    { title: "Loan Default Prediction — XGBoost, Streamlit, Real-time Risk Scoring", tag: "Fintech ML" }
                                ].map((blog, idx) => (
                                    <a
                                        key={idx}
                                        href="https://github.com/pavandoddavarapu"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="block glass p-6 rounded-2xl border border-black/5 dark:border-white/5 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all w-full text-left cursor-pointer group/card shadow-lg"
                                    >
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider bg-blue-500/10 px-3 py-1 rounded-full">{blog.tag}</span>
                                            <ArrowUpRight size={18} className="text-gray-500 group-hover/card:text-blue-400 transition-colors" />
                                        </div>
                                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 group-hover/card:text-white transition-colors leading-snug">
                                            {blog.title}
                                        </h4>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
