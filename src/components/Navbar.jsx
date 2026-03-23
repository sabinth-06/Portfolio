import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Home, User, GraduationCap, Briefcase, PenTool, Target, Award, Code2, Mail, Menu, X, Github, Linkedin } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navLinks = [
    { name: 'Home', href: '#home', icon: <Home size={14} /> },
    { name: 'About', href: '#about', icon: <User size={14} /> },
    { name: 'Projects', href: '#projects', icon: <Briefcase size={14} /> },
    { name: 'Skills', href: '#skills', icon: <PenTool size={14} /> },
    { name: 'Training', href: '#training', icon: <Target size={14} /> },
    { name: 'Certificates', href: '#certificates', icon: <Award size={14} /> },
    { name: 'Profiles', href: '#coding-profiles', icon: <Code2 size={14} /> },
    { name: 'Education', href: '#education', icon: <GraduationCap size={14} /> },
    { name: 'Contact', href: '#contact', icon: <Mail size={14} /> },
  ];

  return (
    <nav 
      className={`fixed left-0 right-0 z-50 transition-all duration-500 mx-auto ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      } ${
        isScrolled 
          ? 'top-0 w-full bg-midnight/90 backdrop-blur-3xl py-4 border-b border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.8)]' 
          : 'top-0 w-full bg-transparent py-6'
      }`}
    >
      <div className={`flex justify-between items-center transition-all duration-700 container mx-auto px-6`}>
        <div className="flex items-center gap-6">
          <a href="#home" className="flex items-center group">
            {/* Monogram badge */}
            <div className="relative flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-[#0891b2] rounded-xl flex items-center justify-center text-black font-black text-lg shadow-lg shadow-accent/30 group-hover:shadow-accent/50 transition-all duration-500">
                S
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-accent rounded-full border-2 border-midnight animate-pulse"></div>
            </div>
          </a>

          {/* Social Icons instead of name */}
          <div className="hidden sm:flex items-center gap-4 border-l border-white/10 pl-6 h-8">
            <motion.a
              href="https://linkedin.com/in/sabinth"
              target="_blank"
              whileHover={{ y: -2, color: '#06b6d4' }}
              className="text-white/40 transition-colors"
            >
              <Linkedin size={18} />
            </motion.a>
            <motion.a
              href="https://github.com/sabinth-06"
              target="_blank"
              whileHover={{ y: -2, color: '#06b6d4' }}
              className="text-white/40 transition-colors"
            >
              <Github size={18} />
            </motion.a>
          </div>
        </div>
        
        {/* Desktop Menu */}
        <ul className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="text-white/80 font-bold tracking-widest text-[10px] uppercase flex items-center gap-2"
              >
                <span className="text-accent">{link.icon}</span>
                <span>{link.name}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="xl:hidden p-3 glass border border-white/10 rounded-xl text-white shadow-lg"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className={`xl:hidden absolute left-0 w-full ${isScrolled ? 'top-[110%] px-4' : 'top-full px-6'}`}
          >
            <div className="bg-midnight/95 backdrop-blur-3xl border border-white/10 rounded-3xl p-6 flex flex-col gap-3 shadow-2xl">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-6 py-4 glass border border-white/5 rounded-2xl text-white/80 font-bold uppercase tracking-widest text-xs flex items-center gap-4"
                >
                  <span className="text-accent">{link.icon}</span>
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-accent-secondary to-[#8B5CF6] origin-left"
        style={{ scaleX }}
      />
    </nav>
  );
};

export default Navbar;
