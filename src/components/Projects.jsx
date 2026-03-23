import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = React.useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const projects = [
    {
      title: "Supermarket Billing & Inventory",
      tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS", "JWT"],
      description: "A comprehensive POS-style MERN application for product inventory management, automated billing, and detailed sales tracking. Built with secure JWT authentication.",
      link: "https://github.com/sabinth-06/supermarket-billing-system",
      demo: "https://tranquil-bonbon-329744.netlify.app/",
      date: "Jan 2026 - Feb 2026",
      category: "MERN Stack",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Car Service Booking Platform",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      description: "Online vehicle maintenance system enabling customers to book slots and track service status with an admin dashboard for service records and customer details.",
      link: "https://github.com/sabinth-06/Car-Service-Platform",
      demo: "https://carpaintingwebsite-m4t6.vercel.app/",
      date: "Nov 2025 - Dec 2025",
      category: "Full Stack",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Agent Hiring Experience",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      description: "Focused recruitment platform designed to provide a seamless technological experience for hiring specialized agents.",
      link: "https://github.com/sabinth-06/Creating-a-seamless-agent-hiring-experience-with-technology-",
      demo: "https://venerable-narwhal-912424.netlify.app/",
      date: "Jun 2023",
      category: "Frontend UI",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section 
      id="projects" 
      className="py-24 relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Dynamic Cursor Spotlight Glow */}
      <motion.div 
        className="pointer-events-none absolute w-[800px] h-[800px] bg-accent/20 rounded-full blur-[200px] -ml-[400px] -mt-[400px] z-0"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          opacity: isHovering ? 1 : 0
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.8 }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter">
            SELECTED <span className="text-accent underline decoration-accent/20">WORKS</span>
          </h2>
          <div className="w-24 h-2 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              className="glass-card rounded-[3rem] overflow-hidden border border-white/5 flex flex-col relative group transition-all duration-500 hover:border-accent/30 hover:shadow-[0_20px_50px_rgba(6,182,212,0.15)]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -12, scale: 1.01 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
               <div className="absolute top-8 left-8 z-20">
                  <span className="px-5 py-2 glass backdrop-blur-3xl border border-white/10 text-white font-black uppercase text-[10px] tracking-widest rounded-full">
                     {project.category}
                  </span>
               </div>

              <div className="h-80 relative overflow-hidden border-b border-white/5">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight to-transparent opacity-60"></div>
                <div className="absolute bottom-6 right-8 px-4 py-1.5 glass border border-white/5 text-accent text-[10px] font-black rounded-full uppercase tracking-widest">
                  {project.date}
                </div>
              </div>

              <div className="p-12 flex-1 flex flex-col">
                <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                  {project.title}
                </h3>
                <p className="text-white/40 text-lg leading-relaxed mb-8 flex-1 font-medium">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-12">
                  {project.tech.map((t, tIdx) => (
                    <span key={tIdx} className="px-4 py-1.5 bg-white/5 text-white/60 text-[10px] font-bold uppercase tracking-widest rounded-xl border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    className="flex items-center gap-3 px-8 py-4 bg-white text-black font-black uppercase text-xs tracking-widest rounded-2xl hover:bg-accent transition-all transform hover:scale-105"
                  >
                    <Github size={18} /> Source Code
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    className="flex items-center gap-3 px-8 py-4 glass border border-white/10 text-white font-black uppercase text-xs tracking-widest rounded-2xl hover:bg-white/5 transition-all"
                  >
                    Live Demo <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="layered-text-bg opacity-10">CREATIONS</div>
    </section>
  );
};

export default Projects;
