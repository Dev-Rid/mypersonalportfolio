import React, { useState, useEffect } from 'react';
import { Menu, X, Code, User, Briefcase, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-2">
            {/* <Code className="h-8 w-8 text-blue-600" /> */}
            <code className="text-blue-600 bold text-4xl">&lt;/&gt;</code>
            <span className="text-xl font-bold text-gray-900">DevBiola</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <User className="h-4 w-4" />
              <span>About</span>
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Code className="h-4 w-4" />
              <span>Skills</span>
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Briefcase className="h-4 w-4" />
              <span>Projects</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>Contact</span>
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <User className="h-4 w-4" />
                <span>About</span>
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Code className="h-4 w-4" />
                <span>Skills</span>
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Briefcase className="h-4 w-4" />
                <span>Projects</span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>Contact</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;