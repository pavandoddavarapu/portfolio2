import PageWrapper from '../components/common/PageWrapper';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Download, Calendar, ExternalLink, HandHeart, Link } from 'lucide-react';
import MagneticButton from '../components/common/MagneticButton';

const Experience = () => {
    const experiences = [
        {
            type: 'work',
            role: 'MERN Stack Development Intern',
            company: 'Webstack Academy, Bangalore (Remote)',
            period: 'Mar 2026 - Present',
            description: 'Selected for an intensive 4-week internship program building full-stack applications. Developed React frontends and Node.js/Express backends, implemented RESTful APIs, and integrated MongoDB databases. Actively participated in technical evaluations and project assessments.',
            skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs', 'Full-Stack Web Dev']
        },
        {
            type: 'work',
            role: 'ML Intern',
            company: 'Infosys Springboard, India',
            period: 'Oct 2025 - Dec 2025',
            description: 'Developed an end-to-end Machine Learning system for loan default prediction, improving risk detection accuracy by ~30%. Built a real-time Streamlit credit risk web application and rigorously optimized model generalization through cross-dataset validation.',
            skills: ['Machine Learning', 'Data Science', 'Streamlit', 'Model Evaluation', 'Data Analysis']
        },
        {
            type: 'volunteer',
            role: 'Chief Technical Team Member',
            company: 'SPIRIT Student Organization, LPU',
            period: 'Aug 2024 - May 2025',
            description: 'Led technical initiatives and managed digital infrastructure supporting university events. Developed web-based tools for event coordination, collaborated with cross-functional teams to streamline workflows, and mentored junior members in debugging and web development.',
            skills: ['Technical Leadership', 'Web Development', 'Mentorship', 'Event Tech Coordination']
        }
    ];

    return (
        <PageWrapper className="min-h-screen py-32 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full dark:bg-[#050505]">

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-20 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-8 border-b border-black/5 dark:border-white/10 pb-12"
            >
                <div>
                    <h2 className="text-sm font-bold tracking-widest uppercase text-emerald-500 mb-6 flex items-center justify-center md:justify-start gap-4">
                        <span className="w-12 h-px bg-emerald-500"></span>
                        Work Experience
                    </h2>

                    <h3 className="text-5xl sm:text-6xl font-black leading-[1.1] tracking-tight text-gray-900 dark:text-white mb-4">
                        Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Journey.</span>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-light text-lg max-w-xl">
                        A detailed timeline of my professional roles and engineering experience.
                    </p>
                </div>

                <MagneticButton href="/resume.pdf" download="Khush_Resume.pdf">
                    <div className="flex items-center gap-3 glass px-8 py-4 rounded-2xl border border-emerald-500/30 hover:bg-emerald-500/10 text-emerald-400 font-bold tracking-wide transition-all hover:scale-105 group">
                        <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                        Download Resumé
                    </div>
                </MagneticButton>
            </motion.div>

            <div className="relative border-l-2 border-black/5 dark:border-white/10 ml-4 md:ml-10 space-y-16">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="relative pl-10 md:pl-16 group"
                    >
                        {/* Timeline Dot */}
                        <div className={`absolute -left-[11px] top-0 w-5 h-5 rounded-full border-4 border-[#050505] z-10 ${exp.type === 'work' ? 'bg-emerald-500' : exp.type === 'volunteer' ? 'bg-rose-500' : 'bg-purple-500'}`}></div>

                        <div className="glass p-8 rounded-3xl border border-black/5 dark:border-white/5 hover:border-black/10 dark:border-white/20 transition-all duration-300 relative overflow-hidden bg-gradient-to-br from-white/[0.02] to-transparent">

                            {/* Ambient Glow Based on Type */}
                            <div className={`absolute top-0 right-0 w-64 h-64 blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none ${exp.type === 'work' ? 'bg-emerald-500' : exp.type === 'volunteer' ? 'bg-rose-500' : 'bg-purple-500'}`}></div>

                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 relative z-10">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-black/5 dark:border-white/10">
                                        {exp.type === 'work' ? <Briefcase className="text-emerald-400" size={24} /> : exp.type === 'volunteer' ? <HandHeart className="text-rose-400" size={24} /> : <GraduationCap className="text-purple-400" size={24} />}
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-bold text-gray-900 dark:text-white tracking-wide">{exp.role}</h4>
                                        <p className="text-gray-600 dark:text-gray-400 font-medium">{exp.company}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-500 font-mono bg-white/5 px-4 py-2 rounded-lg border border-black/5 dark:border-white/5">
                                    <Calendar size={14} /> {exp.period}
                                </div>
                            </div>

                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-light mb-8 relative z-10">
                                {exp.description}
                            </p>

                            {exp.links && (
                                <div className="flex flex-col gap-3 mb-8 relative z-10">
                                    <p className="text-xs uppercase tracking-widest text-emerald-500 font-semibold mb-2 ml-1">Highlights</p>
                                    {exp.links.map((link, idx) => (
                                        <a
                                            key={idx}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/link flex items-center gap-3 p-3 rounded-xl border border-black/5 dark:border-white/10 bg-white/5 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 w-full md:w-fit min-w-[300px]"
                                        >
                                            <div className="p-1.5 rounded-md bg-emerald-500/10 text-emerald-400 group-hover/link:bg-emerald-500 group-hover/link:text-white transition-colors shrink-0">
                                                <Link size={14} />
                                            </div>
                                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover/link:text-white transition-colors truncate">
                                                {link.label}
                                            </span>
                                            <ExternalLink size={14} className="text-gray-500 group-hover/link:text-emerald-400 ml-auto transition-colors shrink-0" />
                                        </a>
                                    ))}
                                </div>
                            )}

                            {exp.image && (
                                <div className="mb-6 rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 relative z-10">
                                    <img
                                        src={exp.image}
                                        alt={`${exp.company} activity`}
                                        className="w-full h-auto object-cover max-h-[400px] hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            )}

                            <div className="flex flex-wrap gap-2 pt-6 border-t border-black/5 dark:border-white/5 relative z-10">
                                {exp.skills.map((skill, idx) => (
                                    <span key={idx} className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-black/5 dark:border-white/10 text-gray-700 dark:text-gray-300">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </PageWrapper>
    );
};

export default Experience;
