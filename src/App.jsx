import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { ReactLenis } from 'lenis/react';
import { useState, useEffect } from 'react';
import CustomCursor from './components/common/CustomCursor';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Experience from './pages/Experience';
import Certifications from './pages/Certifications';
import Blogs from './pages/Blogs';
import Preloader from './components/common/Preloader';
import TerminalConsole from './components/common/TerminalConsole';
import AIChatbot from './components/common/AIChatbot';
import ScrollProgressButton from './components/common/ScrollProgressButton';
import CommandPalette from './components/common/CommandPalette';
import ClickSparkles from './components/common/ClickSparkles';
function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader setLoading={setLoading} key="preloader" />}
      </AnimatePresence>

      {!loading && (
        <ReactLenis root>
          <div className="min-h-screen flex flex-col font-sans transition-colors duration-300">
            <CustomCursor />
            <ClickSparkles />
            <TerminalConsole />
            <ScrollProgressButton />
            <CommandPalette />
            <AIChatbot />
            <motion.div
              className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left z-[100]"
              style={{ scaleX }}
            />
            <Navbar />
            <main className="flex-grow pt-24 overflow-x-hidden relative">
              <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/experience" element={<Experience />} />
                  <Route path="/certifications" element={<Certifications />} />
                  <Route path="/blogs" element={<Blogs />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/command-center" element={<Admin />} />
                </Routes>
              </AnimatePresence>
            </main>
            <Footer />
          </div>
        </ReactLenis>
      )}
    </>
  );
}

export default App;
