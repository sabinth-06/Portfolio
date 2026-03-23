import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, ExternalLink } from 'lucide-react';

const Resume = () => {
  const placeholderImg = "https://images.unsplash.com/photo-1586282391129-59a998fd034c?auto=format&fit=crop&q=80&w=800";
  return (
    <section id="resume" className="py-24 bg-midnight relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent-secondary/5 blur-[120px] rounded-full -translate-x-1/2"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left side: Text & CTA */}
            <motion.div 
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
                MY <span className="text-accent">RESUME</span>
              </h2>
              <p className="text-xl text-white/40 leading-relaxed mb-10 font-medium max-w-xl">
                A summary of my technical journey, academic background, and the impact I've made through various projects and roles. Feel free to download my full CV below.
              </p>

              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                <a 
                  href={placeholderImg} 
                  download="Sabinth_Sakthivelan_CV.png"
                  className="px-10 py-5 bg-white text-black font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-accent hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all flex items-center gap-3 group"
                >
                  <Download size={18} className="group-hover:bounce-slow" /> Download CV
                </a>
                <a 
                  href="#" 
                  className="px-10 py-5 glass border border-white/10 text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-white/5 transition-all flex items-center gap-3"
                >
                  <FileText size={18} /> View PDF Version
                </a>
              </div>
            </motion.div>

            {/* Right side: Creative CV Display */}
            <motion.div 
              className="flex-1 relative group"
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
            >
              {/* Decorative Frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-accent-secondary/20 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all opacity-50"></div>
              
              <div className="relative glass-card p-4 rounded-[3rem] border border-white/10 shadow-2xl backdrop-blur-3xl overflow-hidden hover:border-accent/40 transition-all duration-700 transform hover:scale-[1.02] hover:-rotate-1">
                 {/* Shiny Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 
                 <div className="aspect-[3/4] rounded-[2.5rem] bg-neutral-900 overflow-hidden relative border border-white/5">
                <img 
                  src={placeholderImg} 
                  alt="Sabinth's CV" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
                    
                    {/* View Fullscreen Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center backdrop-blur-sm">
                       <a href={placeholderImg} target="_blank" className="p-6 bg-white rounded-full text-black transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100 hover:bg-accent">
                          <ExternalLink size={32} />
                       </a>
                    </div>
                 </div>
              </div>

              {/* Floaties */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent-secondary/20 rounded-full blur-xl animate-pulse delay-700"></div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="layered-text-bg select-none opacity-5 tracking-[0.5em]">RESUME</div>
    </section>
  );
};

export default Resume;
