import { motion } from 'framer-motion';

const pageVariants = {
    initial: {
        opacity: 0,
        y: 30,
        scale: 0.98,
        filter: 'blur(10px)',
    },
    in: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] // Custom cubic bezier
        }
    },
    out: {
        opacity: 0,
        y: -30,
        scale: 0.98,
        filter: 'blur(10px)',
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
        }
    },
};

const PageWrapper = ({ children, className = '' }) => {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            className={`w-full ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default PageWrapper;
