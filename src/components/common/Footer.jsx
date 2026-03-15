import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react';
import MagneticButton from './MagneticButton';

const Footer = () => {
    return (
        <footer className="relative dark:bg-[#050505] pt-32 pb-10 overflow-hidden border-t border-black/5 dark:border-white/5">
            {/* Background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl h-32 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 w-full"
                >
                    <h2 className="text-5xl md:text-7xl lg:text-9xl font-black mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
                        Let's Talk.
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light mb-10">
                        Got a project in mind? Let's build something extraordinary.
                    </p>

                    <MagneticButton>
                        <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                            <Mail size={20} />
                            Get in Touch
                            <ArrowUpRight size={20} />
                        </Link>
                    </MagneticButton>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full pt-12 border-t border-black/5 dark:border-white/10 z-10 relative">
                    <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
                        <Link to="/" className="text-4xl font-black tracking-tighter bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent pr-4">
                            P.
                        </Link>
                        <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                            Crafting engaging digital experiences with a focus on UI/UX, analytics, and robust engineering.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 items-center">
                        <h4 className="text-gray-900 dark:text-white font-semibold">Explore</h4>
                        <div className="flex flex-col gap-2 items-center">
                            <Link to="/projects" className="text-gray-600 dark:text-gray-400 hover:text-white transition-colors">Projects</Link>
                            <Link to="/experience" className="text-gray-600 dark:text-gray-400 hover:text-white transition-colors">Experience</Link>
                            <Link to="/analytics" className="text-gray-600 dark:text-gray-400 hover:text-white transition-colors">Analytics</Link>
                            <Link to="/certifications" className="text-gray-600 dark:text-gray-400 hover:text-white transition-colors">Certifications</Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 items-center md:items-end w-full">
                        <h4 className="text-gray-900 dark:text-white font-semibold">Socials</h4>
                        <div className="flex gap-4">
                            <MagneticButton href="https://github.com/pavandoddavarapu">
                                <div className="p-3 rounded-full bg-white/5 border border-black/5 dark:border-white/10 hover:bg-white/10 hover:border-blue-500/50 hover:text-blue-400 transition-all shadow-lg hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                                    <Github size={20} />
                                </div>
                            </MagneticButton>
                            <MagneticButton href="https://www.linkedin.com/in/pavandoddavarapu/">
                                <div className="p-3 rounded-full bg-white/5 border border-black/5 dark:border-white/10 hover:bg-white/10 hover:border-blue-500/50 hover:text-blue-400 transition-all shadow-lg hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                                    <Linkedin size={20} />
                                </div>
                            </MagneticButton>
                            <MagneticButton href="https://github.com/pavandoddavarapu">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-black/5 dark:border-white/10 hover:bg-white/10 hover:border-blue-500/50 hover:text-blue-400 transition-all shadow-lg hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                                    <span className="font-bold text-lg leading-none">M</span>
                                </div>
                            </MagneticButton>
                            <MagneticButton href="mailto:pavandoddavarapu7@gmail.com">
                                <div className="p-3 rounded-full bg-white/5 border border-black/5 dark:border-white/10 hover:bg-white/10 hover:border-blue-500/50 hover:text-blue-400 transition-all shadow-lg hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                                    <Mail size={20} />
                                </div>
                            </MagneticButton>
                        </div>
                    </div>
                </div>

                <div className="w-full text-center pt-8 mt-12 border-t border-black/5 dark:border-white/10 text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4 z-10 relative">
                    <p>© {new Date().getFullYear()} Doddavarapu Pavan Venkat Kumar. All rights reserved.</p>
                </div>
            </div>

            {/* Ambient Background Blur Bottom */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none z-0"></div>
        </footer>
    );
};

export default Footer;
