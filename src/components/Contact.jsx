import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = ({ theme }) => {
  return (
    <div className={`max-w-4xl mx-auto my-8 sm:my-16 p-4 sm:p-8 rounded-lg shadow-lg ${
      theme === 'dark' ? 'bg-black' : 'bg-transparent'
    } text-cyan-300`}>
      <h2 className={`text-3xl sm:text-4xl font-bold mb-8 text-center font-['Orbitron'] ${
        theme === 'cyberpunk' ? 'glitch-text' : ''
      }`}>Contact Me</h2>
      <div 
        className={`p-4 sm:p-8 rounded-lg ${
          theme === 'dark' 
            ? 'bg-gray-900' 
            : 'cyberpunk-card bg-gray-900 bg-opacity-80 shadow-neon border-2 border-cyan-400 hover:border-pink-400'
        } max-w-md mx-auto transition-all duration-300 transform hover:rotate-3`}
      >
        <div className="flex flex-col items-center">
          <h3 className={`text-3xl font-bold mb-2 ${
            theme === 'cyberpunk' ? 'text-pink-400 glitch-text' : 'text-cyan-300'
          }`}>Niranjan R</h3>
          <p className={`text-xl mb-4 ${
            theme === 'cyberpunk' ? 'text-cyan-300 neon-text' : 'text-cyan-300'
          }`}>Frontend Developer</p>
          <div className="w-full border-t border-cyan-400 my-4 opacity-50"></div>
          <div className="grid grid-cols-1 gap-4 w-full">
            <div className="flex items-center group">
              <FaEnvelope className={`mr-4 text-xl ${
                theme === 'cyberpunk' ? 'text-pink-400 group-hover:text-cyan-400' : 'text-cyan-300'
              } transition-colors duration-200`} />
              <a href="mailto:niranjanr753@gmail.com" className="text-cyan-300 hover:text-white transition-colors duration-200 text-sm">niranjanr753@gmail.com</a>
            </div>
            <div className="flex items-center group">
              <FaPhone className={`mr-4 text-xl ${
                theme === 'cyberpunk' ? 'text-pink-400 group-hover:text-cyan-400' : 'text-cyan-300'
              } transition-colors duration-200`} />
              <a href="tel:+9177708552062" className="text-cyan-300 hover:text-white transition-colors duration-200 text-sm">+91 77708552062</a>
            </div>
            <div className="flex items-center group">
              <FaLinkedin className={`mr-4 text-xl ${
                theme === 'cyberpunk' ? 'text-pink-400 group-hover:text-cyan-400' : 'text-cyan-300'
              } transition-colors duration-200`} />
              <a href="https://www.linkedin.com/in/niranjan-06861a216/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-white transition-colors duration-200 text-sm">LinkedIn Profile</a>
            </div>
            <div className="flex items-center group">
              <FaGithub className={`mr-4 text-xl ${
                theme === 'cyberpunk' ? 'text-pink-400 group-hover:text-cyan-400' : 'text-cyan-300'
              } transition-colors duration-200`} />
              <a href="https://github.com/Niranjan753" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-white transition-colors duration-200 text-sm">GitHub Profile</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
