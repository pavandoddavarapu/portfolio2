import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { DataNodes } from '../components/three/DataNodes';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import PageWrapper from '../components/common/PageWrapper';
import Services from '../components/home/Services';
import About from '../components/home/About';
import Skills from '../components/home/Skills';
import Education from '../components/home/Education';
import Awards from '../components/home/Awards';

import Languages from '../components/home/Languages';
import Publications from '../components/home/Publications';
import MagneticButton from '../components/common/MagneticButton';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Home = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end start"]
    });

    // Parallax values
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
    const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(".reveal-text", {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power4.out",
            delay: 0.2
        })
            .from(".reveal-fade", {
                opacity: 0,
                y: 20,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out"
            }, "-=0.5")
            .from(".avatar-reveal", {
                scale: 0.5,
                opacity: 0,
                duration: 1.5,
                ease: "elastic.out(1, 0.5)"
            }, "-=1")
    }, { scope: container });

    return (
        <PageWrapper>
            <div className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden" ref={container}>
                {/* 3D Background */}
                <motion.div style={{ y: yBg }} className="absolute inset-0 z-0 opacity-40 md:opacity-50 pointer-events-none">
                    <Canvas camera={{ position: [0, 0, 8] }}>
                        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
                        <DataNodes />
                        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                    </Canvas>
                </motion.div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Left Column: Text */}
                        <motion.div className="text-left font-sans">
                            <div className="overflow-hidden mb-8">
                                <div className="reveal-text inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                                    </span>
                                    <span className="text-sm font-semibold tracking-wide text-blue-600 dark:text-blue-300">
                                        Available for Internships & Collaborations
                                    </span>
                                </div>
                            </div>

                            <div className="mb-6 leading-[1.1]">
                                <div className="overflow-hidden mb-2">
                                    <h2 className="reveal-text text-xl sm:text-2xl md:text-3xl font-bold text-gray-600 dark:text-gray-400">
                                        Hi, I am <span className="text-gray-900 dark:text-white">Pavan Doddavarapu</span>.
                                    </h2>
                                </div>
                                <div className="overflow-hidden">
                                    <h1 className="reveal-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-gray-900 dark:text-white block">
                                        An Aspiring
                                    </h1>
                                </div>
                                <div className="overflow-hidden min-h-[60px] sm:min-h-[72px] md:min-h-[85px] lg:min-h-[100px] flex items-center shrink-0">
                                    <h1 className="reveal-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent pb-2 block w-full">
                                        <TypeAnimation
                                            sequence={[
                                                'ML Engineer',
                                                2000,
                                                'Data Scientist',
                                                2000,
                                                'AI/ML Enthusiast',
                                                2000,
                                            ]}
                                            wrapper="span"
                                            speed={50}
                                            repeat={Infinity}
                                            className="inline-block"
                                        />
                                    </h1>
                                </div>
                            </div>

                            <p className="reveal-fade text-lg sm:text-xl text-gray-700 dark:text-gray-700 dark:text-gray-300 max-w-xl mb-6 leading-relaxed font-light">
                                <span className="text-gray-900 dark:text-white font-semibold border-b border-purple-500/50">Java | Python | C++ | ML & AI | Streamlit | <br /> Cloud & DevOps</span>
                                <br /><br />
                                Building intelligent ML systems, crafting data-driven insights, and developing robust full-stack applications.
                            </p>


                        </motion.div>

                        {/* Right Column: Interactive Image/Graphics */}
                        <motion.div style={{ opacity: opacityHero }} className="relative hidden lg:flex justify-center items-center h-[500px]">
                            <div className="avatar-reveal absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 blur-3xl rounded-full animate-pulse"></div>

                            {/* Main Avatar */}
                            <div className="avatar-reveal relative w-80 h-80 xl:w-96 xl:h-96 rounded-full p-2 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 shadow-[0_0_50px_rgba(139,92,246,0.3)] hover:shadow-[0_0_80px_rgba(139,92,246,0.6)] transition-shadow duration-500">
                                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-[#0f1016] bg-white dark:bg-[#0f1016]">
                                    <img
                                        src="/pavan_real.jpg"
                                        alt="Pavan Profile"
                                        className="w-full h-full object-cover object-center select-none pointer-events-none scale-[1.5] hover:scale-[1.65] transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>

            <About />
            <Education />
            <Skills />
            <Publications />
            <Awards />
            <Languages />
            <Services />

        </PageWrapper >
    );
};

export default Home;
