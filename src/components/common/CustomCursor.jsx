import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName.toLowerCase() === 'a' || e.target.tagName.toLowerCase() === 'button' || e.target.closest('a') || e.target.closest('button')) {
                setCursorVariant("hover");
            } else if (e.target.tagName.toLowerCase() === 'h1' || e.target.tagName.toLowerCase() === 'h2' || e.target.tagName.toLowerCase() === 'h3' || e.target.tagName.toLowerCase() === 'p') {
                setCursorVariant("text");
            } else {
                setCursorVariant("default");
            }
        };

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
            height: 16,
            width: 16,
            backgroundColor: "#fff",
            mixBlendMode: "difference"
        },
        hover: {
            x: mousePosition.x - 24,
            y: mousePosition.y - 24,
            height: 48,
            width: 48,
            backgroundColor: "#fff",
            mixBlendMode: "difference"
        },
        text: {
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
            height: 64,
            width: 64,
            backgroundColor: "#fff",
            mixBlendMode: "difference"
        }
    };

    return (
        <motion.div
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[100] hidden md:block"
            variants={variants}
            animate={cursorVariant}
            transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
        />
    );
};

export default CustomCursor;
