import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const navLinks = [
    { name: 'Servicios', href: '#services' },
    { name: 'Metodología', href: '#methodology' },
    { name: 'Proyectos', href: '#projects' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface-light/90 dark:bg-bg-dark/90 backdrop-blur-md border-b border-accent-light dark:border-accent-dark py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="relative w-12 h-12 flex items-center justify-center rounded-lg overflow-hidden group-hover:scale-105 transition-transform">
               <img 
                 src="/assets/kaizenlogo-removebg-preview.png" 
                 alt="Kaizen Code Logo" 
                 className="w-full h-full object-contain dark:invert-0 invert"
               />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-text-dark dark:text-white uppercase">
              Kaizen Code
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={toggleTheme}
              className="text-text-muted hover:text-primary transition-colors p-2"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-text-dark-muted dark:text-text-muted hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2.5 bg-primary hover:bg-primary-dark text-white rounded text-sm font-medium transition-colors duration-200"
            >
              Contacto
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-surface-light dark:bg-surface-dark border-b border-accent-light dark:border-accent-dark"
        >
          <div className="px-6 pt-4 pb-8 space-y-4">
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 text-base font-medium text-text-dark dark:text-text-light hover:text-primary w-full"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
              <span>{isDark ? 'Modo Claro' : 'Modo Oscuro'}</span>
            </button>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-base font-medium text-text-dark dark:text-text-light hover:text-primary"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-6 py-3 bg-primary text-white rounded font-medium mt-4"
            >
              Contacto
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};