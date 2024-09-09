import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaRobot } from 'react-icons/fa';
import "./index.css";
import './App.css';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

const ThemeToggle = ({ theme, setTheme }) => {
  return (
    <div className="flex justify-center space-x-4 my-4">
      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-full ${theme === 'dark' ? 'bg-blue-600' : 'bg-gray-600'} hover:bg-blue-700 transition-colors duration-200`}
      >
        <FaMoon className="text-white" />
      </button>
      <button
        onClick={() => setTheme('cyberpunk')}
        className={`p-2 rounded-full ${theme === 'cyberpunk' ? 'bg-pink-600' : 'bg-gray-600'} hover:bg-pink-700 transition-colors duration-200`}
      >
        <FaRobot className="text-white" />
      </button>
    </div>
  );
};

function App() {
  const [theme, setTheme] = useState('cyberpunk');
  const [showHeader, setShowHeader] = useState(false);
  const [showHome, setShowHome] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Apply theme classes to the body element
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > window.innerHeight * 0.5) {
        setShowSkills(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          setTimeout(() => {
            setLoading(false);
            // Start fade-in sequence
            setTimeout(() => setShowHeader(true), 200);
            setTimeout(() => setShowHome(true), 700);
            setTimeout(() => setShowSkills(true), 1200);
            setTimeout(() => setShowExperience(true), 1700);
          }, 500); // Delay to show 100% briefly
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-black">
        <div className="w-64 h-6 bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
            style={{ width: `${progress}%`, transition: 'width 0.5s ease-out' }}
          ></div>
        </div>
        <p className="mt-4 text-cyan-400 font-mono text-lg">Loading... {Math.round(progress)}%</p>
      </div>
    );
  }

  return (
    <AnimatePresence>
      <div className={`min-h-screen ${
        theme === 'dark' 
          ? 'bg-black text-cyan-300'
          : 'bg-gradient-to-br from-gray-900 to-black text-cyan-300'
      }`}>
        <Header theme={theme} />
        <div className="pt-16">
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
        <div id="home" className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <motion.div
            className="relative z-10 w-full max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-6 font-['Orbitron'] leading-tight tracking-wider cyberpunk-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Welcome to My Cyberpunk Portfolio
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl font-semibold text-cyan-300 text-center font-mono mb-4 tracking-wide glitch"
              data-text="Niranjan - Frontend Developer"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Niranjan - Frontend Developer
            </motion.p>
            <motion.div
              className="w-40 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 mx-auto rounded-full mb-6"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            />
            <motion.div
              className="text-center text-cyan-200 text-sm md:text-base font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              <motion.p
                className="mb-3 neon-text"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.2, duration: 0.5 }}
              >
                Hacking reality, one line of code at a time
              </motion.p>
              <motion.p
                className="neon-text"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.4, duration: 0.5 }}
              >
                Turning dystopian dreams into digital realities
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
        <div id="skills" className="max-w-4xl mx-auto my-16 p-8 bg-transparent rounded-lg shadow-lg">
          <Skills theme={theme} />
        </div>
        <div id="experience" className="max-w-4xl mx-auto my-16 p-8 bg-transparent rounded-lg shadow-lg">
          <Experience theme={theme} />
        </div>
        <div id="contact" className="max-w-4xl mx-auto py-16 px-8">
          <Contact theme={theme} />
        </div>
      </div>
    </AnimatePresence>
  );
}

export default App;