import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, MapPin } from 'lucide-react';
import profileImg from '../assets/Hero.png';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-accent text-sm font-black uppercase tracking-[0.4em] mb-4">Who I Am</p>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-6">
            ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#8B5CF6]">ME</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-[#8B5CF6] mx-auto rounded-full"></div>
        </motion.div>

        {/* Two-column layout */}
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-14">

          {/* Profile Image */}
          <motion.div
            className="flex-shrink-0 flex justify-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-[#8B5CF6] blur-2xl opacity-30 scale-110"></div>
              {/* Gradient border */}
              <div className="relative p-1 rounded-full bg-gradient-to-br from-accent via-[#8B5CF6] to-accent">
                <div className="p-1 rounded-full bg-[#020617]">
                  <img
                    src={profileImg}
                    alt="Profile"
                    className="w-52 h-52 md:w-64 md:h-64 rounded-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="flex-1 text-left"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-xl text-white/60 leading-relaxed mb-5">
              I'm a passionate <span className="text-white font-bold">B.Tech CSE</span> student at{' '}
              <span className="text-accent font-bold">Lovely Professional University</span>, building scalable web applications with the MERN stack.
            </p>
            <p className="text-lg text-white/40 leading-relaxed mb-8">
              Strong foundation in <span className="text-white">Data Structures</span> and{' '}
              <span className="text-white">OOP</span>, with hands-on experience in full-stack development, UI/UX design, and continuous learning.
            </p>

            <div className="flex items-center gap-2 text-white/40 text-sm font-bold mb-8">
              <MapPin size={14} className="text-accent" />
              Namakkal, Tamil Nadu, India
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { label: 'University', value: 'LPU' },
                { label: 'Major', value: 'CSE' },
                { label: 'CGPA', value: '6.50' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  whileHover={{ y: -4, borderColor: 'var(--color-accent)' }}
                  className="px-5 py-3 glass border border-white/8 rounded-2xl text-center min-w-[90px] transition-colors"
                >
                  <p className="text-accent font-black text-base leading-tight">{item.value}</p>
                  <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest mt-0.5">{item.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              <motion.a
                href="https://linkedin.com/in/sabinth"
                target="_blank"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.08)' }}
                className="flex items-center gap-3 px-7 py-4 bg-white/5 border border-white/10 text-white font-black uppercase text-xs tracking-widest rounded-2xl transition-all"
              >
                <Linkedin size={16} /> LinkedIn
              </motion.a>
              <motion.a
                href="https://github.com/sabinth-06"
                target="_blank"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.08)' }}
                className="flex items-center gap-3 px-7 py-4 bg-white/5 border border-white/10 text-white font-black uppercase text-xs tracking-widest rounded-2xl transition-all"
              >
                <Github size={16} /> GitHub
              </motion.a>
            </div>
          </motion.div>

        </div>
      </div>
      <div className="layered-text-bg opacity-5">ABOUT</div>
    </section>
  );
};

export default About;
