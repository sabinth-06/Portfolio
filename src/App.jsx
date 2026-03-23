import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Training from './components/Training';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-midnight text-white selection:bg-accent selection:text-black relative">
      {/* Global Premium Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Base dark color */}
        <div className="absolute inset-0 bg-midnight"></div>
        
        {/* Interactive Mouse Glow */}
        <motion.div
          className="absolute w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] mix-blend-screen"
          style={{
            x: cursorX,
            y: cursorY,
            translateX: '-50%',
            translateY: '-50%',
          }}
        />

        {/* Noise texture for premium feel */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        
        {/* Animated Glowing Aurora Orbs */}
        <motion.div 
          animate={{ 
            x: [0, 100, -50, 0],
            y: [0, -80, 40, 0],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-accent/15 blur-[150px] rounded-full"
        ></motion.div>
        
        <motion.div 
          animate={{ 
            x: [0, -120, 80, 0],
            y: [0, 60, -100, 0],
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1 
          }}
          className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-[#8B5CF6]/15 blur-[180px] rounded-full"
        ></motion.div>

        {/* Floating Orbs for Extra Movement */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              scale: Math.random() * 0.5 + 0.5,
              opacity: 0.1
            }}
            animate={{ 
              x: [null, Math.random() * 100 + "%"],
              y: [null, Math.random() * 100 + "%"],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-64 h-64 bg-accent/10 rounded-full blur-[100px]"
          />
        ))}
        
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Training />
        <Certifications />
        <CodingProfiles />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
