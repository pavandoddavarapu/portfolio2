import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon, Github, Linkedin, Search } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import MagneticButton from './MagneticButton';
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
        <motion.nav
            variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: "-100%", opacity: 0 }
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4 pointer-events-none"
        >
            <div className="glass pointer-events-auto rounded-full px-6 py-3 flex items-center gap-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] border border-black/5 dark:border-white/10 backdrop-blur-xl">

                {/* Logo Area */}
                <MagneticButton>
                    <Link to="/" className="text-xl font-black tracking-tighter bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent px-2">
                        P.
                    </Link>
                </MagneticButton>

                <div className="w-px h-6 bg-white/10" />

                {/* Primary Links */}
                <div className="flex items-center gap-1 sm:gap-2">
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

                <div className="w-px h-6 bg-white/10 hidden sm:block" />

                {/* Socials / Actions */}
                <div className="hidden sm:flex items-center gap-2">
                    <MagneticButton>
                        <button
                            onClick={() => window.dispatchEvent(new CustomEvent('open-command-palette'))}
                            className="mr-2 px-3 py-1.5 rounded-lg bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white flex items-center gap-2 text-xs font-mono"
                        >
                            <Search size={14} />
                            <span>Cmd K</span>
                        </button>
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
                        <div className="p-2 rounded-full hover:bg-white/10 transition-colors">
                            <img
                                src="https://codolio.com/codolio_assets/codolio.svg"
                                className={cn("w-[18px] h-[18px]", theme === 'dark' ? 'opacity-80' : 'opacity-80 scale-110')}
                                alt="Codolio"
                            />
                        </div>
                    </MagneticButton>

                    <MagneticButton href="https://leetcode.com/u/pavandodddavarapu7/">
                        <div className="p-2 rounded-full hover:bg-white/10 transition-colors">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                                className={cn("w-[18px] h-[18px]", theme === 'dark' ? 'invert opacity-80' : 'opacity-80')}
                                alt="LeetCode"
                            />
                        </div>
                    </MagneticButton>


                    <MagneticButton onClick={toggleTheme}>
                        <div className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-700 dark:text-gray-300 hover:text-white cursor-pointer">
                            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                        </div>
                    </MagneticButton>
                </div>

            </div>
        </motion.nav >
    );
};

export default Navbar;
