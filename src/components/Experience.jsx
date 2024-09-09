import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLaptopCode, FaBriefcase, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Experience = ({ theme }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const experiences = [
    {
      title: "Developer",
      company: "Team Neon (Maestrominds startup)",
      period: "2022 - Present",
      responsibilities: [
        "Engineered cutting-edge web applications using React and Next.js in the neon-lit digital frontier",
        "Crafted futuristic UI/UX designs with Tailwind CSS and Framer Motion, pushing the boundaries of human-machine interaction",
        "Optimized application performance, achieving a 40% boost in neural-link load times",
        "Mentored junior developers, upgrading their skills in the ever-evolving tech landscape"
      ],
      icon: FaLaptopCode
    },
    {
      title: "Frontend Developer",
      company: "Nexus Info",
      period: "2022-2023",
      responsibilities: [
        "Developed responsive and interactive user interfaces using React.js, bridging the gap between human and machine",
        "Collaborated with UX designers to create seamless user experiences in the digital realm",
        "Integrated RESTful APIs, establishing secure data highways in the cyber network",
        "Implemented unit and integration tests using Jest and React Testing Library, fortifying our digital fortress"
      ],
      icon: FaBriefcase
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  const expandVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: 'auto', opacity: 1, transition: { duration: 0.3 } }
  };

  return (
    <motion.div 
      className="max-w-4xl mx-auto my-8 sm:my-16 p-4 sm:p-8 rounded-lg shadow-lg"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h2 className={`text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center font-['Orbitron'] ${
        theme === 'cyberpunk' ? 'glitch-text' : ''
      }`}>Experience</h2>
      <div className="space-y-6 sm:space-y-8">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
              theme === 'dark' 
                ? 'bg-gray-900 hover:bg-gray-800' 
                : 'experience-card cyberpunk-card hover:shadow-neon'
            }`}
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <exp.icon className={`text-3xl mr-4 ${
                  theme === 'cyberpunk' ? 'text-pink-400' : 'text-cyan-300'
                }`} />
                <div>
                  <h3 className={`text-2xl font-semibold mb-2 ${
                    theme === 'cyberpunk' ? 'text-pink-400 neon-text' : 'text-cyan-300'
                  }`}>{exp.title}</h3>
                  <p className="text-cyan-300">{exp.company} | {exp.period}</p>
                </div>
              </div>
              {expandedIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            <AnimatePresence>
              {expandedIndex === index && (
                <motion.ul 
                  className="list-disc list-inside mt-4 space-y-2"
                  variants={expandVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {exp.responsibilities.map((resp, respIndex) => (
                    <motion.li 
                      key={respIndex} 
                      className={`${
                        theme === 'cyberpunk' ? 'text-cyan-200 glitch-hover' : 'text-cyan-300'
                      }`}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: respIndex * 0.1 }}
                    >
                      {resp}
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
