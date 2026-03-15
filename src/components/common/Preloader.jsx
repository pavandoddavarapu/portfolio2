import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ setLoading }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let currentProgress = 0;
        const interval = setInterval(() => {
            currentProgress += Math.floor(Math.random() * 15) + 5;
            if (currentProgress >= 100) {
                currentProgress = 100;
                clearInterval(interval);
                setTimeout(() => setLoading(false), 500); // Small delay before hiding
            }
            setProgress(currentProgress);
        }, 100);

        return () => clearInterval(interval);
    }, [setLoading]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.95 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[9999] dark:bg-[#050505] flex flex-col items-center justify-center pointer-events-none"
        >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <motion.div
                    className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-600 mb-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {progress}%
                </motion.div>

                <div className="h-[2px] w-64 md:w-96 bg-gray-800 mx-auto rounded-full overflow-hidden relative">
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        initial={{ width: '0%' }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "linear", duration: 0.1 }}
                    />
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="uppercase tracking-[0.3em] text-gray-600 dark:text-gray-400 text-xs font-bold mt-8"
                >
                    Loading Environment
                </motion.p>
            </div>

            {/* Ambient Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
        </motion.div>
    );
};

export default Preloader;
