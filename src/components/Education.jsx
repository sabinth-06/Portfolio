import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Trophy } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: "Lovely Professional University",
      degree: "B.Tech – Computer Science & Engineering",
      duration: "2023 — 2027",
      location: "Phagwara, Punjab",
      score: "CGPA: 6.50",
      description: "Focusing on Core CS principles, Data Structures, Algorithms, and full-stack web development.",
      color: "from-cyan-500 to-blue-500",
      tag: "Pursuing"
    },
    {
      institution: "National Public School",
      degree: "Higher Secondary (12th Grade)",
      duration: "2018 — 2019",
      location: "Namakkal, Tamil Nadu",
      score: "67.50%",
      description: "Completed with a focus on Physics, Chemistry, and Mathematics.",
      color: "from-purple-500 to-pink-500",
      tag: "Completed"
    },
    {
      institution: "Narayana School",
      degree: "Secondary School (10th Grade)",
      duration: "2019 — 2020",
      location: "Nellore, Andhra Pradesh",
      score: "CGPA: 10 / 10",
      description: "Achieved a perfect CGPA of 10 in the board examinations.",
      color: "from-emerald-500 to-green-500",
      tag: "Perfect Score"
    }
  ];

  return (
    <section id="education" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-accent text-sm font-black uppercase tracking-[0.4em] mb-4">My Background</p>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight">
            ACADEMIC <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#8B5CF6]">JOURNEY</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-[#8B5CF6] mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/60 via-[#8B5CF6]/40 to-transparent md:-translate-x-1/2 hidden md:block"></div>

          <div className="space-y-16">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 z-10 items-center justify-center">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} shadow-lg flex items-center justify-center text-white`}>
                    <GraduationCap size={24} />
                  </div>
                </div>

                {/* spacer for opposite side */}
                <div className="hidden md:block flex-1"></div>

                {/* Card */}
                <div className="flex-1">
                  <div className="glass-card p-8 md:p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden">
                    {/* gradient accent bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`}></div>
                    <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${item.color} opacity-5 blur-3xl rounded-full`}></div>

                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                      <span className={`px-4 py-1.5 bg-gradient-to-r ${item.color} text-white text-[10px] font-black uppercase tracking-widest rounded-full`}>
                        {item.tag}
                      </span>
                      <div className="flex items-center gap-2 text-white/40 text-sm font-bold">
                        <MapPin size={14} className="text-accent" /> {item.location}
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black text-white mb-2">{item.institution}</h3>
                    <h4 className="text-white/60 font-medium mb-4">{item.degree}</h4>
                    <p className="text-white/40 text-sm leading-relaxed mb-6">{item.description}</p>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/5">
                      <div className="flex items-center gap-2">
                        <Trophy size={16} className="text-accent" />
                        <span className="text-white font-black text-lg">{item.score}</span>
                      </div>
                      <span className="text-white/30 text-xs font-bold uppercase tracking-widest">{item.duration}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="layered-text-bg opacity-5">ACADEMICS</div>
    </section>
  );
};

export default Education;
