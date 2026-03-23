import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Briefcase, MapPin } from 'lucide-react';

const Training = () => {
  const trainingData = [
    {
      institution: "Thuglak",
      title: "Summer Training",
      duration: "Jun 2024 - Jul 2024",
      location: "On-site",
      score: "Completed",
      description: "C, C++ Programming: OOPs. Gained hands-on experience in C and C++ programming, including pointers, functions, arrays, file handling, and memory management. Applied Object-Oriented Programming concepts such as classes, objects, inheritance, polymorphism, abstraction, and encapsulation to build structured programs.",
      type: "training"
    }
  ];

  return (
    <section id="training" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter">
            SPECIAL <span className="text-accent underline decoration-accent/20">TRAINING</span>
          </h2>
          <div className="w-24 h-2 bg-accent mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto relative group">
          <div className="absolute inset-0 bg-accent/20 rounded-[3rem] blur-2xl"></div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative glass p-10 md:p-14 rounded-[3rem] border border-white/10 overflow-hidden"
          >
            {/* Decorative Top Right Corner */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl"></div>
            <div className="absolute top-8 right-8 text-accent/20 animate-pulse">
              <GraduationCap size={100} />
            </div>

            {/* Content Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10 relative z-10">
              <div>
                <p className="text-accent text-sm font-black uppercase tracking-[0.3em] mb-2">{trainingData[0].institution}</p>
                <h3 className="text-4xl md:text-5xl font-black text-white">{trainingData[0].title}</h3>
              </div>
              <div className="flex flex-col gap-3">
                <span className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-white/60 text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                  <Calendar size={16} className="text-accent" /> {trainingData[0].duration}
                </span>
                <span className="px-5 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                  <MapPin size={16} /> {trainingData[0].location}
                </span>
              </div>
            </div>

            {/* Main Description */}
            <p className="text-lg md:text-xl text-white/50 leading-relaxed mb-10 relative z-10">
              {trainingData[0].description}
            </p>

            {/* Tech Stack Focus */}
            <div className="pt-8 border-t border-white/10 relative z-10">
              <p className="text-white/30 text-xs font-black uppercase tracking-[0.2em] mb-6">Key Focus Areas</p>
              <div className="flex flex-wrap gap-4">
                {["C Programming", "C++", "OOPs Concepts", "Memory Management", "File Handling"].map((tech, idx) => (
                  <span key={idx} className="px-5 py-3 glass rounded-xl text-white/80 text-sm font-bold border border-white/5 shadow-lg">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Status Footer */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-accent/20 to-transparent rounded-br-[3rem] pointer-events-none"></div>
            <div className="mt-12 flex justify-end relative z-10">
              <div className="flex items-center gap-3 text-accent font-black uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-accent animate-ping"></span>
                {trainingData[0].score}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="layered-text-bg opacity-10">JOURNEY</div>
    </section>
  );
};

export default Training;
