import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, Download } from 'lucide-react';
import heroImg from '../assets/Hero1.png';

const Hero = () => {
  const roles = ["Full Stack Developer", "Software Engineer", "Problem Solver", "AI Enthusiast"];
  const [roleIndex, setRoleIndex] = React.useState(0);
  const [displayText, setDisplayText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);

  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const containerRef = React.useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 40 : 100);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section 
      id="home" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Mouse Following Glow */}
        <motion.div
          animate={{
            x: mousePos.x - 200,
            y: mousePos.y - 200,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 50 }}
          className="absolute w-[400px] h-[400px] bg-accent/20 rounded-full blur-[120px] pointer-events-none hidden md:block"
        />

        {/* Large Liquid Blobs */}
        <motion.div 
          animate={{ 
            x: [0, 100, -60, 0],
            y: [0, -80, 50, 0],
            scale: [1, 1.15, 0.95, 1]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-accent/20 rounded-full blur-[160px]"
        />
        
        <motion.div 
          animate={{ 
            x: [0, -100, 70, 0],
            y: [0, 100, -80, 0],
            scale: [1, 0.9, 1.25, 1]
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute bottom-[-15%] right-[-10%] w-[700px] h-[700px] bg-accent-secondary/20 rounded-full blur-[140px]"
        />

        {/* Third Liquid Blob for Color Variety */}
        <motion.div 
          animate={{ 
            x: [0, 60, -80, 0],
            y: [0, 80, -40, 0],
            scale: [0.8, 1, 0.8]
          }}
          transition={{ 
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] bg-[#8B5CF6]/15 rounded-full blur-[120px]"
        />

        {/* Center Soft Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-accent/5 rounded-full blur-[200px]" />
        
        {/* Floating Particles (Softer) */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`soft-particle-${i}`}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.4 + 0.1,
              scale: Math.random() * 0.8 + 0.2
            }}
            animate={{ 
              y: [null, -150 - Math.random() * 150],
              x: [null, (Math.random() - 0.5) * 100],
              opacity: [null, 0]
            }}
            transition={{ 
              duration: Math.random() * 15 + 8,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 15
            }}
            className="absolute w-2 h-2 bg-accent/30 rounded-full blur-[4px]"
          />
        ))}

      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h2 className="text-accent font-black tracking-[0.3em] uppercase mb-6 text-sm flex items-center justify-center md:justify-start gap-3">
              <span className="w-12 h-[2px] bg-accent"></span>
              Creative Developer
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tighter leading-none">
              SABINTH <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">SAKTHIVELAN</span>
            </h1>
            <div className="text-lg md:text-2xl text-white/40 font-bold h-10 mb-8">
              I am a <span className="text-white border-b-2 border-accent/40">{displayText}</span>
              <span className="animate-pulse ml-1 text-accent">|</span>
            </div>

            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
              <motion.a 
                href="#projects" 
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-5 bg-white text-black font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-accent transition-all flex items-center gap-3"
              >
                <span className="relative z-10">Explore Works</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a 
                href="/Sabinth_Sakthivelan_CV.jpg" 
                download="Sabinth_Sakthivelan_CV.jpg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 glass border border-white/10 text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-accent hover:text-black transition-all flex items-center gap-3"
              >
                <Download size={18} /> Resume
              </motion.a>
              <motion.a 
                href="#contact" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 glass border border-white/10 text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-white/5 transition-all flex items-center gap-3"
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-[360px] md:h-[360px] relative mx-auto group">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-[50px] group-hover:bg-accent/40 transition-all duration-700"></div>
              
              {/* Animated Gradient Border Layer */}
              <div className="absolute inset-[-6px] rounded-full bg-gradient-to-tr from-accent via-accent-secondary to-[#8B5CF6] opacity-60 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent via-accent-secondary to-[#8B5CF6] animate-spin-slow"></div>
              </div>
              
              {/* Inner Dark Background */}
              <div className="absolute inset-0 rounded-full bg-black z-0"></div>
              
              {/* Image Container - Circular "Half Image" Style */}
              <div className="absolute inset-[4px] rounded-full overflow-hidden bg-neutral-900 z-10 transition-transform duration-500 group-hover:scale-[1.02] shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
                <img 
                  src={heroImg} 
                  alt="Sabinth" 
                  className="w-full h-full object-cover object-top" 
                />
                
                {/* Subtle Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>



      <div className="layered-text-bg select-none opacity-20">SABINTH</div>
    </section>
  );
};

export default Hero;
