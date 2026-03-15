import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ClickSparkles = () => {
    const [sparkles, setSparkles] = useState([]);

    useEffect(() => {
        const handleClick = (e) => {
            // Don't add sparkles on input elements or buttons that might have their own effects
            if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

            const id = Date.now();
            const newSparkles = Array.from({ length: 6 }).map((_, i) => ({
                id: `${id}-${i}`,
                x: e.clientX,
                y: e.clientY,
                angle: (i * 60 * Math.PI) / 180, // 6 particles in a circle
            }));

            setSparkles((prev) => [...prev, ...newSparkles]);

            // Cleanup sparkles after animation
            setTimeout(() => {
                setSparkles((prev) => prev.filter((s) => !newSparkles.map((ns) => ns.id).includes(s.id)));
            }, 700);
        };

        window.addEventListener('click', handleClick);
        return () => window.removeEventListener('click', handleClick);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999]">
            <AnimatePresence>
                {sparkles.map((sparkle) => (
                    <motion.div
                        key={sparkle.id}
                        initial={{
                            opacity: 1,
                            x: sparkle.x,
                            y: sparkle.y,
                            scale: 0
                        }}
                        animate={{
                            opacity: 0,
                            x: sparkle.x + Math.cos(sparkle.angle) * 40,
                            y: sparkle.y + Math.sin(sparkle.angle) * 40,
                            scale: 1.5
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="absolute w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                    />
                ))}
            </AnimatePresence>
        </div>
    );
};

export default ClickSparkles;
