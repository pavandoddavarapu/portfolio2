import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollProgressButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { scrollYProgress } = useScroll();

    // Smooth out the progress value
    const pathLength = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <motion.div
            className={`fixed bottom-6 left-6 z-50 ${isVisible ? 'block' : 'hidden'}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
            transition={{ duration: 0.3 }}
        >
            <button
                onClick={scrollToTop}
                className="relative group flex items-center justify-center p-3 rounded-full dark:bg-[#0a0a0a]/80 backdrop-blur-md border border-black/5 dark:border-white/10 shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300"
                aria-label="Scroll to top"
            >
                {/* SVG Progress Circle */}
                <svg width="44" height="44" viewBox="0 0 44 44" className="absolute -inset-1 -z-10 -rotate-90">
                    <circle
                        cx="22"
                        cy="22"
                        r="20"
                        className="stroke-white/10"
                        strokeWidth="2"
                        fill="none"
                    />
                    <motion.circle
                        cx="22"
                        cy="22"
                        r="20"
                        className="stroke-blue-500"
                        strokeWidth="2"
                        fill="none"
                        style={{ pathLength }}
                    />
                </svg>

                <ArrowUp className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-blue-400 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
        </motion.div>
    );
};

export default ScrollProgressButton;
