import React from 'react';
import './Header.css';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = ({ theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`py-3 px-5 fixed w-full z-50 ${
      theme === 'dark' 
        ? 'bg-black text-cyan-300'
        : 'bg-transparent text-cyan-300'
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-cyan-400 text-xl font-bold neon-text">
          <span 
            className="glitch" 
            data-text="CYBER_DEV" 
            onClick={() => scrollToSection('home')}
            style={{ cursor: 'pointer' }}
          >
            NIRANJAN
          </span>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className={`md:flex md:space-x-5 ${isMenuOpen ? 'block' : 'hidden'} absolute md:relative top-full left-0 w-full md:w-auto bg-black md:bg-transparent`}>
          {['Home','Skills', 'Experience', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="block py-2 px-4 md:p-0 nav-link text-gray-300 hover:text-cyan-400 transition-colors duration-250 relative overflow-hidden group text-sm"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.toLowerCase());
                setIsMenuOpen(false);
              }}
            >
              <span className="relative z-10">{item}</span>
              <span className="absolute inset-0 bg-cyan-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-250 ease-in-out"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;