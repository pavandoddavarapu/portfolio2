import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { X, Sun, Moon, Github, Linkedin, Download, Mail, ExternalLink, Settings, LayoutTemplate, Volume2, Sparkles } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { cn } from './Navbar';
import { useState, useEffect } from 'react';

const Sidebar = ({ isOpen, onClose, navLinks }) => {
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();
    const navigate = useNavigate();

    // Features state initialized from localStorage
    const [animationsEnabled, setAnimationsEnabled] = useState(() => {
        return localStorage.getItem('animationsEnabled') !== 'false';
    });
    const [soundEnabled, setSoundEnabled] = useState(() => {
        return localStorage.getItem('soundEnabled') === 'true';
    });

    // Toggle Animations CSS class on body
    useEffect(() => {
        localStorage.setItem('animationsEnabled', animationsEnabled);
        if (!animationsEnabled) {
            document.body.classList.add('no-animations');
        } else {
            document.body.classList.remove('no-animations');
        }
    }, [animationsEnabled]);

    // Handle sound persist state
    useEffect(() => {
        localStorage.setItem('soundEnabled', soundEnabled);
    }, [soundEnabled]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                    />

                    {/* Sidebar Panel */}
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className={cn(
                            "fixed top-0 left-0 h-[100dvh] w-[320px] max-w-[85vw] backdrop-blur-3xl shadow-2xl z-[110] p-6 flex flex-col overflow-y-auto",
                            theme === 'dark' ? "dark:bg-[#0a0a0a]/90 border-r border-black/5 dark:border-white/10" : "bg-white/90 border-r border-black/10"
                        )}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-3">
                                <img src="/avatar_cartoon.png" alt="Pavan Avatar" className="w-10 h-10 rounded-full border-2 border-purple-500/50 object-cover" />
                                <span className="text-xl font-black tracking-tighter bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                                    Hello!
                                </span>
                            </div>
                            <button
                                onClick={onClose}
                                className={cn(
                                    "p-2 rounded-full transition-colors",
                                    theme === 'dark' ? "hover:bg-white/10 text-gray-600 dark:text-gray-400 hover:text-white" : "hover:bg-black/10 text-gray-600 hover:text-black"
                                )}
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <div className="flex flex-col gap-2 mb-8">
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 px-2">Navigation</p>
                            {navLinks.map((link) => {
                                const isActive = location.pathname === link.path;
                                return (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        onClick={(e) => {
                                            onClose();
                                        }}
                                        className={cn(
                                            "px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-between group relative overflow-hidden",
                                            isActive
                                                ? (theme === 'dark' ? "bg-white/10 text-white" : "bg-black/5 text-black font-semibold")
                                                : (theme === 'dark' ? "text-gray-600 dark:text-gray-400 hover:bg-white/5 hover:text-white" : "text-gray-600 hover:bg-black/5 hover:text-black")
                                        )}
                                    >
                                        <span className="relative z-10 font-medium">{link.name}</span>
                                        {isActive && (
                                            <motion.div
                                                layoutId="sidebar-active"
                                                className="w-1.5 h-1.5 rounded-full bg-blue-500 relative z-10"
                                            />
                                        )}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Additional Features */}
                        <div className="flex flex-col gap-2 mt-auto">
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 px-2">Features & Quick Links</p>

                            <a
                                href="/resume.pdf"
                                download="Pavan_Resume.pdf"
                                onClick={onClose}
                                className={cn(
                                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left group",
                                    theme === 'dark' ? "text-gray-600 dark:text-gray-400 hover:bg-white/5 hover:text-white" : "text-gray-600 hover:bg-black/5 hover:text-black"
                                )}
                            >
                                <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                                <span className="font-medium flex-1">Download Resume</span>
                                <ExternalLink size={14} className="opacity-50" />
                            </a>

                            <button
                                onClick={() => {
                                    navigate('/projects');
                                    onClose();
                                }}
                                className={cn(
                                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left group",
                                    theme === 'dark' ? "text-gray-600 dark:text-gray-400 hover:bg-white/5 hover:text-white" : "text-gray-600 hover:bg-black/5 hover:text-black"
                                )}
                            >
                                <LayoutTemplate size={18} className="group-hover:scale-110 transition-transform" />
                                <span className="font-medium flex-1">View Case Studies</span>
                                <ExternalLink size={14} className="opacity-50" />
                            </button>

                            <div className={cn(
                                "flex flex-col gap-3 p-4 rounded-xl mt-4 border",
                                theme === 'dark' ? "bg-white/5 border-black/5 dark:border-white/10" : "bg-black/5 border-black/10"
                            )}>
                                <div className="flex items-center justify-between">
                                    <div className={cn("flex items-center gap-3 font-medium cursor-default", theme === 'dark' ? "text-gray-800 dark:text-gray-200" : "text-gray-800")}>
                                        <Settings size={16} />
                                        <span>Preferences</span>
                                    </div>
                                    <button
                                        onClick={toggleTheme}
                                        className={cn(
                                            "p-2 rounded-lg transition-colors flex items-center justify-center cursor-pointer",
                                            theme === 'dark' ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/10 hover:bg-black/20 text-black"
                                        )}
                                        title="Toggle Theme"
                                    >
                                        {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
                                    </button>
                                </div>

                                <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500/20 to-transparent my-1" />

                                <div className="flex items-center justify-between">
                                    <div className={cn("flex items-center gap-3 text-sm font-medium", theme === 'dark' ? "text-gray-600 dark:text-gray-400" : "text-gray-600")}>
                                        <Sparkles size={15} />
                                        <span>Animations</span>
                                    </div>
                                    <button
                                        onClick={() => setAnimationsEnabled(!animationsEnabled)}
                                        className={cn(
                                            "w-10 h-6 rounded-full p-1 transition-colors duration-300 ease-in-out cursor-pointer",
                                            animationsEnabled ? "bg-blue-500" : (theme === 'dark' ? "bg-white/20" : "bg-black/20")
                                        )}
                                    >
                                        <motion.div
                                            className="w-4 h-4 rounded-full bg-white shadow-sm"
                                            animate={{ x: animationsEnabled ? 16 : 0 }}
                                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                        />
                                    </button>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className={cn("flex items-center gap-3 text-sm font-medium", theme === 'dark' ? "text-gray-600 dark:text-gray-400" : "text-gray-600")}>
                                        <Volume2 size={15} />
                                        <span>Sound Effects</span>
                                    </div>
                                    <button
                                        onClick={() => setSoundEnabled(!soundEnabled)}
                                        className={cn(
                                            "w-10 h-6 rounded-full p-1 transition-colors duration-300 ease-in-out cursor-pointer",
                                            soundEnabled ? "bg-blue-500" : (theme === 'dark' ? "bg-white/20" : "bg-black/20")
                                        )}
                                    >
                                        <motion.div
                                            className="w-4 h-4 rounded-full bg-white shadow-sm"
                                            animate={{ x: soundEnabled ? 16 : 0 }}
                                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Footer Socials */}
                        <div className={cn(
                            "mt-8 pt-6 border-t flex justify-center gap-4",
                            theme === 'dark' ? "border-black/5 dark:border-white/10" : "border-black/10"
                        )}>
                            <a href="https://github.com/pavandoddavarapu" target="_blank" rel="noreferrer" className={cn(
                                "p-2 transition-colors duration-300",
                                theme === 'dark' ? "text-gray-600 dark:text-gray-400 hover:text-white" : "text-gray-500 hover:text-black"
                            )}>
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/pavandoddavarapu/" target="_blank" rel="noreferrer" className={cn(
                                "p-2 transition-colors duration-300",
                                theme === 'dark' ? "text-gray-600 dark:text-gray-400 hover:text-white" : "text-gray-500 hover:text-black"
                            )}>
                                <Linkedin size={20} />
                            </a>

                            <a href="https://codolio.com/profile/pavandoddavarapu" target="_blank" rel="noreferrer" className={cn(
                                "p-2 transition-colors duration-300 flex items-center justify-center",
                                theme === 'dark' ? "text-gray-600 dark:text-gray-400 hover:text-white" : "text-gray-500 hover:text-black"
                            )}>
                                <img src="https://codolio.com/codolio_assets/codolio.svg" className={cn("w-5 h-5", theme === 'dark' ? 'opacity-80 hover:opacity-100' : 'opacity-80 hover:opacity-100 scale-110')} alt="Codolio" />
                            </a>

                            <a href="https://leetcode.com/u/pavandodddavarapu7/" target="_blank" rel="noreferrer" className={cn(
                                "p-2 transition-colors duration-300 flex items-center justify-center",
                                theme === 'dark' ? "text-gray-600 dark:text-gray-400 hover:text-white" : "text-gray-500 hover:text-black"
                            )}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" className={cn("w-5 h-5", theme === 'dark' ? 'invert opacity-80 hover:opacity-100' : 'opacity-80 hover:opacity-100')} alt="LeetCode" />
                            </a>

                            <a href="mailto:pavandoddavarapu7@gmail.com" className={cn(
                                "p-2 transition-colors duration-300",
                                theme === 'dark' ? "text-gray-600 dark:text-gray-400 hover:text-white" : "text-gray-500 hover:text-black"
                            )}>
                                <Mail size={20} />
                            </a>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Sidebar;
