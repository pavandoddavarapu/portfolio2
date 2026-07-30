import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon, Github, Linkedin, Search, Menu } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import MagneticButton from './MagneticButton';
import Sidebar from './Sidebar';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

// Helper for clean class merging
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Hide navbar on scroll down, show on scroll up
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Experience', path: '/experience' },
        { name: 'Projects', path: '/projects' },
        { name: 'Certifications', path: '/certifications' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            <motion.nav
                variants={{
                    visible: { y: 0, opacity: 1 },
                    hidden: { y: "-100%", opacity: 0 }
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4 pointer-events-none"
            >
                <div className="glass w-full sm:w-auto justify-between sm:justify-center pointer-events-auto rounded-[2rem] px-5 sm:px-6 py-3 flex items-center gap-4 sm:gap-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] border border-black/5 dark:border-white/10 backdrop-blur-xl">

                    {/* Logo Area */}
                    <MagneticButton>
                        <Link to="/" className="relative text-2xl font-black tracking-tighter px-2 flex items-center justify-center group overflow-visible z-10 transition-transform hover:scale-110">
                            <motion.span
                                className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent bg-[length:200%_auto]"
                                animate={{ backgroundPosition: ['0% center', '200% center'] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                            >
                                P.
                            </motion.span>
                            <motion.div
                                className="absolute inset-0 bg-purple-500/30 blur-md rounded-full -z-10 opacity-0 group-hover:opacity-100"
                                transition={{ duration: 0.3 }}
                            />
                        </Link>
                    </MagneticButton>

                    <div className="hidden sm:block w-px h-6 bg-white/10" />

                    {/* Primary Links */}
                    <div className="hidden sm:flex items-center gap-1 sm:gap-2">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="relative px-4 py-2"
                                >
                                    <span className={cn(
                                        "relative z-10 text-sm font-medium transition-colors duration-300",
                                        isActive ? "text-gray-900 dark:text-white" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                                    )}>
                                        {link.name}
                                    </span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-pill"
                                            className="absolute inset-0 bg-black/5 dark:bg-white/10 rounded-full border border-black/5 dark:border-white/5"
                                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    <div className="w-px h-6 bg-black/10 dark:bg-white/10 hidden sm:block" />

                    {/* Socials / Actions */}
                    <div className="hidden sm:flex items-center gap-2">
                        <MagneticButton>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => window.dispatchEvent(new CustomEvent('open-command-palette'))}
                                className="mr-2 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-2 text-xs font-mono"
                            >
                                <Search size={14} />
                                <span>Cmd K</span>
                            </motion.button>
                        </MagneticButton>

                        <MagneticButton href="https://github.com/pavandoddavarapu">
                            <div className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
                                <Github size={18} />
                            </div>
                        </MagneticButton>

                        <MagneticButton href="https://www.linkedin.com/in/pavandoddavarapu/">
                            <div className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
                                <Linkedin size={18} />
                            </div>
                        </MagneticButton>

                        <MagneticButton href="https://codolio.com/profile/pavandoddavarapu">
                            <div className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white" title="Codolio Profile">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                                    <polyline points="16 18 22 12 16 6" />
                                    <polyline points="8 6 2 12 8 18" />
                                </svg>
                            </div>
                        </MagneticButton>

                        <MagneticButton href="https://leetcode.com/u/pavandodddavarapu7/">
                            <div className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white" title="LeetCode Profile">
                                <svg width="18" height="18" viewBox="0 0 24 24" className="w-[18px] h-[18px]">
                                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.17 6.1l-2.858 2.858a1.349 1.349 0 0 0-.416.947c0 .347.14.676.386.914l4.524 4.524a1.36 1.36 0 0 0 .961.398c.356 0 .685-.14.931-.386l4.773-4.773a1.367 1.367 0 0 0 0-1.932l-2.28-2.28 2.858-2.858a1.367 1.367 0 0 0 0-1.932A1.367 1.367 0 0 0 13.483 0zm-2.82 8.04l2.28 2.28-3.812 3.812-4.524-4.524 3.812-3.812z" fill="#FFA116"/>
                                    <path d="M20.811 13.01H10.666c-.702 0-1.27-.568-1.27-1.27 0-.702.568-1.27 1.27-1.27h10.145c.702 0 1.27.568 1.27 1.27 0 .702-.568 1.27-1.27 1.27z" fill="currentColor"/>
                                </svg>
                            </div>
                        </MagneticButton>

                        <MagneticButton onClick={toggleTheme}>
                            <div className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white cursor-pointer">
                                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                            </div>
                        </MagneticButton>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="flex sm:hidden items-center gap-2">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsSidebarOpen(true)}
                            className="p-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white flex items-center justify-center cursor-pointer"
                        >
                            <Menu size={20} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05, rotate: 15 }}
                            whileTap={{ scale: 0.9, rotate: -15 }}
                            onClick={toggleTheme}
                            className="p-2 ml-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white flex items-center justify-center cursor-pointer"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </motion.button>
                    </div>

                </div>
            </motion.nav >
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} navLinks={navLinks} />
        </>
    );
};

export default Navbar;
