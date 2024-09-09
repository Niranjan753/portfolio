import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaReact, FaPaintBrush, FaTools, FaVial, FaRocket, FaToggleOn, FaToggleOff, FaChevronDown } from 'react-icons/fa';

const Skills = ({ theme }) => {
  const [showAllSkills, setShowAllSkills] = useState(false);

  const skillCategories = [
    { title: "Core Technologies", skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"], icon: FaCode },
    { title: "Frameworks & Libraries", skills: ["React.js","Next.js"], icon: FaReact },
    { title: "Styling", skills: ["Tailwind CSS", "Sass/SCSS", "Styled Components", "CSS Modules"], icon: FaPaintBrush },
    { title: "Tools & Workflow", skills: ["Git & GitHub", "Webpack", "Babel", "npm/yarn"], icon: FaTools },
    { title: "Testing", skills: ["Jest", "React Testing Library", "Cypress", "Enzyme"], icon: FaVial },
    { title: "Performance Optimization", skills: ["Lazy Loading", "Code Splitting", "Lighthouse", "Web Vitals"], icon: FaRocket }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div 
      className={`max-w-4xl mx-auto my-16 p-4 sm:p-8 rounded-lg shadow-lg ${
        theme === 'dark' ? 'bg-black' : 'bg-transparent'
      } text-cyan-300`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-12">
        <h2 className={`text-3xl sm:text-4xl font-bold font-['Orbitron'] mb-4 sm:mb-0 ${
          theme === 'cyberpunk' ? 'glitch-text' : ''
        }`}>Frontend Skills</h2>
        <button
          onClick={() => setShowAllSkills(!showAllSkills)}
          className={`flex items-center px-4 py-2 rounded-full ${
            theme === 'dark'
              ? 'bg-gray-800 hover:bg-gray-700'
              : 'bg-cyan-700 hover:bg-cyan-600'
          } text-cyan-300 transition-colors duration-300`}
        >
          {showAllSkills ? <FaToggleOn className="text-xl sm:text-2xl" /> : <FaToggleOff className="text-xl sm:text-2xl" />}
          <span className="ml-2 text-sm sm:text-base">{showAllSkills ? 'Hide' : 'Show'} All</span>
        </button>
      </div>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className={`skill-card p-6 rounded-lg transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-gray-900 hover:bg-gray-800'
                : 'cyberpunk-card hover:shadow-neon'
            }`}
          >
            <div className="flex items-center mb-4">
              <category.icon className={`text-3xl mr-3 ${
                theme === 'cyberpunk' ? 'text-pink-400' : 'text-cyan-300'
              }`} />
              <h3 className={`text-xl font-semibold ${
                theme === 'cyberpunk' ? 'text-pink-400 neon-text' : 'text-cyan-300'
              }`}>{category.title}</h3>
            </div>
            <motion.ul 
              className="space-y-2"
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: showAllSkills ? 'auto' : 0,
                opacity: showAllSkills ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
            >
              {category.skills.map((skill, skillIndex) => (
                <motion.li 
                  key={skillIndex}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: skillIndex * 0.1 }}
                  className={`${
                    theme === 'cyberpunk' 
                      ? 'text-cyan-200 glitch-hover' 
                      : 'text-cyan-300'
                  } transition-colors duration-200 hover:text-white`}
                >
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;