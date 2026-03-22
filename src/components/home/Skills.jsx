import { motion } from 'framer-motion';

const categories = [
    {
        title: 'Programming Languages',
        color: 'blue',
        borderColor: 'border-blue-500/30',
        glowColor: 'rgba(59,130,246,0.15)',
        iconColor: 'text-blue-400',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
            </svg>
        ),
        skills: ['Java', 'Python', 'C++', 'C', 'SQL', 'HTML5', 'CSS3', 'JavaScript', 'Bash'],
    },
    {
        title: 'Libraries & Frameworks',
        color: 'purple',
        borderColor: 'border-purple-500/30',
        glowColor: 'rgba(168,85,247,0.15)',
        iconColor: 'text-purple-400',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            </svg>
        ),
        skills: ['NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'XGBoost', 'LangChain', 'Spring Boot', 'Streamlit', 'Hugging Face', 'React', 'Node.js'],
    },
    {
        title: 'Tools & Platforms',
        color: 'pink',
        borderColor: 'border-pink-500/30',
        glowColor: 'rgba(236,72,153,0.15)',
        iconColor: 'text-pink-400',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
        ),
        skills: ['Git', 'GitHub', 'Docker', 'AWS', 'Jupyter Notebook', 'n8n', 'MySQL', 'REST APIs', 'Postman', 'VS Code'],
    },
    {
        title: 'Core & Soft Skills',
        color: 'emerald',
        borderColor: 'border-emerald-500/30',
        glowColor: 'rgba(16,185,129,0.15)',
        iconColor: 'text-emerald-400',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
            </svg>
        ),
        skills: ['Machine Learning', 'Deep Learning (Basics)', 'IoT Integration', 'DSA', 'DBMS', 'Computer Networks', 'Time-Series Forecasting', 'End-to-End ML Pipelines', 'Communication', 'Teamwork', 'Adaptability', 'Leadership', 'Problem Solving', 'Learning Agility'],
    },
];

const colorMap = {
    blue: {
        pill: 'bg-blue-500/10 border border-blue-500/20 text-blue-700 dark:text-blue-300 hover:bg-blue-500/20 hover:border-blue-500/50 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)]',
        icon: 'bg-blue-500/10 border border-blue-500/20',
    },
    purple: {
        pill: 'bg-purple-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-300 hover:bg-purple-500/20 hover:border-purple-500/50 hover:shadow-[0_0_10px_rgba(168,85,247,0.3)]',
        icon: 'bg-purple-500/10 border border-purple-500/20',
    },
    pink: {
        pill: 'bg-pink-500/10 border border-pink-500/20 text-pink-700 dark:text-pink-300 hover:bg-pink-500/20 hover:border-pink-500/50 hover:shadow-[0_0_10px_rgba(236,72,153,0.3)]',
        icon: 'bg-pink-500/10 border border-pink-500/20',
    },
    emerald: {
        pill: 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:shadow-[0_0_10px_rgba(16,185,129,0.3)]',
        icon: 'bg-emerald-500/10 border border-emerald-500/20',
    },
};

const SkillMarquee = ({ skills, color, reverse = false }) => {
    const tripled = [...skills, ...skills, ...skills];
    return (
        <div className="relative w-full overflow-hidden">
            <motion.div
                className="flex gap-3 w-max"
                animate={{ x: reverse ? ['-33.33%', '0%'] : ['0%', '-33.33%'] }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            >
                {tripled.map((skill, i) => (
                    <span
                        key={i}
                        className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold cursor-default transition-all duration-300 whitespace-nowrap ${colorMap[color].pill}`}
                    >
                        {skill}
                    </span>
                ))}
            </motion.div>
            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white dark:from-[#0d0d14] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white dark:from-[#0d0d14] to-transparent z-10 pointer-events-none" />
        </div>
    );
};

const Skills = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Section Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center relative z-10">
                <span className="text-blue-500 font-semibold tracking-widest uppercase text-sm mb-3 block">My Arsenal</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-gray-200 dark:to-gray-500">
                    Skills &amp; Categories
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                    A comprehensive overview of my technical expertise and core skills, logically organized to highlight my capabilities.
                </p>
            </div>

            {/* 2x2 Category Cards */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                {categories.map((cat, idx) => (
                    <motion.div
                        key={cat.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className={`glass rounded-3xl border ${cat.borderColor} p-6 relative overflow-hidden group transition-all duration-500`}
                    >
                        {/* Ambient glow */}
                        <div
                            className="absolute top-0 right-0 w-48 h-48 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none rounded-full"
                            style={{ background: cat.glowColor }}
                        />

                        {/* Card Header */}
                        <div className="flex items-center gap-3 mb-5 relative z-10">
                            <div className={`p-2.5 rounded-xl ${colorMap[cat.color].icon} ${cat.iconColor}`}>
                                {cat.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">{cat.title}</h3>
                        </div>

                        {/* Scrolling Skill Pills */}
                        <div className="relative z-10">
                            <SkillMarquee skills={cat.skills} color={cat.color} />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Ambient Background Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[400px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-[120px] rounded-full pointer-events-none z-0" />
        </section>
    );
};

export default Skills;
