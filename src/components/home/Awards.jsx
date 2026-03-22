import { motion } from 'framer-motion';
import { Award, Trophy, Medal, Star, Sparkles } from 'lucide-react';
import { useState } from 'react';

const awardsData = [
    { title: "Vibecode India Hackathon 2025 — Agentic AI (LangChain)", rank: "Runner Up", icon: Trophy, color: "text-amber-500 dark:text-amber-400" },
    { title: "AU DevDayT20DSA Challenge — AlgoUniversity", rank: "Winner", icon: Award, color: "text-yellow-500 dark:text-yellow-400" },
    { title: "Anomaly Hunter League Hackathon — School of CSE, ML, LPU", rank: "Winner", icon: Medal, color: "text-amber-500 dark:text-amber-400" }
];

const MuseumPlaque = ({ award, index, isHovered, onHover, onLeave }) => {
    // Each item's neutral physical resting state feels dynamic but stable 
    // It's not moving horizontally, but it subtly floats vertically when hovered
    const isMuted = isHovered !== null && isHovered !== index;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            onMouseEnter={() => onHover(index)}
            onMouseLeave={onLeave}
            animate={{
                scale: isHovered === index ? 1.05 : 1,
                opacity: isMuted ? 0.4 : 1,
                filter: isMuted ? "grayscale(80%) blur(1px)" : "grayscale(0%) blur(0px)",
                y: isHovered === index ? -8 : 0,
            }}
            className="relative flex items-center justify-between p-4 md:p-6 rounded-[20px] md:rounded-[24px] border border-gray-200/50 dark:border-black/5 dark:border-white/10 bg-white/40 dark:bg-black/20 backdrop-blur-md shadow-sm transition-all duration-500 cursor-none"
        >
            {/* Ambient internal spotlight on hover */}
            <div
                className={`absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent transition-opacity duration-500 rounded-[20px] md:rounded-[24px] pointer-events-none ${isHovered === index ? 'opacity-100' : 'opacity-0'}`}
            />

            <div className="relative flex items-center gap-4 md:gap-6 z-10 w-full">
                <div className={`relative flex shrink-0 items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-full border border-gray-200 dark:border-black/5 dark:border-white/10 shadow-inner ${award.color} bg-gray-50 dark:bg-white/5`}>
                    <award.icon size={28} className="md:scale-125" strokeWidth={1.5} />
                </div>

                <div className="flex flex-col gap-1 w-full">
                    <h4 className="text-base md:text-xl font-semibold text-gray-900 dark:text-white leading-tight">
                        {award.title}
                    </h4>

                    <div className="flex items-center gap-3">
                        <span className="text-xs md:text-sm font-mono font-bold tracking-[0.2em] text-amber-600 dark:text-amber-500 uppercase">
                            {award.rank}
                        </span>
                        <div className="h-px bg-gradient-to-r from-amber-500/50 to-transparent flex-grow hidden sm:block opacity-50" />
                    </div>
                </div>
            </div>

            {/* Subtle decorative glowing corner on hover */}
            <div className={`absolute top-0 right-0 p-6 opacity-0 translate-x-4 -translate-y-4 transition-all duration-500 pointer-events-none ${isHovered === index ? 'opacity-5 dark:opacity-20 translate-x-0 translate-y-0' : ''}`}>
                <award.icon size={80} className={`${award.color} blur-[2px]`} />
            </div>
        </motion.div>
    );
};

const Awards = () => {
    // Tracks which plaque is being hovered to create depth/focus interaction
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section className="py-24 relative overflow-hidden flex flex-col items-center justify-center font-sans tracking-tight border-t border-gray-100 dark:border-black/5 dark:border-white/5">
            {/* Museum Gallery Spotlight Backdrop */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-gray-300 dark:via-white/10 to-transparent w-full" />
            <div className="absolute top-1/4 left-1/2 w-full max-w-5xl h-[500px] bg-amber-500/5 dark:bg-amber-500/10 rounded-full blur-[160px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="w-full relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8"
                >
                    <div className="flex flex-col text-left">
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 backdrop-blur-md self-start">
                            <Sparkles size={14} className="text-amber-500 animate-pulse" fill="currentColor" />
                            <span className="text-amber-700 dark:text-amber-400 font-semibold text-xs tracking-[0.2em] uppercase">Gallery of Excellence</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white max-w-2xl leading-[1.1]">
                            Honors & <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-600 drop-shadow-sm">Awards</span>
                        </h2>
                    </div>

                    <p className="text-gray-600 dark:text-gray-600 dark:text-gray-400 max-w-md text-lg leading-relaxed text-left lg:text-right">
                        A curated exhibition of records and achievements, standing as testaments to continuous growth and dedication.
                    </p>
                </motion.div>

                {/* Highly Organized, Interactive "Plaque Wall" */}
                {/* 
                  Instead of automatic sliding, this utilizes a 'Responsive Masonry/Grid'
                  that perfectly organizes all items. Motion acts upon hover to make it "Alive".
                */}
                <div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 auto-rows-max"
                    onMouseLeave={() => setHoveredIndex(null)} // Reset focus when leaving the wall entirely
                >
                    {awardsData.map((award, index) => (
                        <div
                            key={index}
                            // Make the first item full width if odd count, or generally to break the grid monotony
                            className={index === 0 ? "lg:col-span-2" : "col-span-1"}
                        >
                            <MuseumPlaque
                                award={award}
                                index={index}
                                isHovered={hoveredIndex}
                                onHover={setHoveredIndex}
                                onLeave={() => setHoveredIndex(null)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Awards;
