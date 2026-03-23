import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, Calendar } from 'lucide-react';
import fccCert from '../assets/cert-freecodecamp.png';
import infosysPrompt from '../assets/cert-infosys-prompt.png';
import infosysGenAI from '../assets/cert-infosys-genai.png';

const Certifications = () => {
  const certs = [
    {
      title: "Front End Web Development",
      provider: "freeCodeCamp",
      date: "Oct 2023",
      image: fccCert,
      link: "https://www.freecodecamp.org/certification/sabinth/responsive-web-design",
      color: "from-orange-500 to-red-500",
      tag: "Verified"
    },
    {
      title: "Prompt Engineering",
      provider: "Infosys Springboard",
      date: "Aug 2024",
      image: infosysPrompt,
      link: "https://drive.google.com/file/d/1dryzqs4HjloTS7GbW2kizBAdHt6KNkil/view?usp=sharing",
      color: "from-blue-500 to-purple-500",
      tag: "AI & ML"
    },
    {
      title: "No Code Gen-AI Development",
      provider: "Infosys Springboard",
      date: "Aug 2024",
      image: infosysGenAI,
      link: "https://drive.google.com/file/d/1kw-1pEbKYOsj5vfyXFDTpsSrcPDgM51f/view?usp=sharing",
      color: "from-emerald-500 to-cyan-500",
      tag: "Gen-AI"
    }
  ];

  return (
    <section id="certificates" className="py-32 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-[140px]"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#8B5CF6]/5 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-accent text-sm font-black uppercase tracking-[0.4em] mb-4">Achievements</p>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight">
            CERTIFICATIONS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-[#8B5CF6] mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certs.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="glass-card rounded-[2.5rem] overflow-hidden border border-white/5 flex flex-col group transition-all duration-500 hover:border-accent/30 hover:shadow-[0_20px_50px_rgba(6,182,212,0.1)]"
            >
              {/* Image with overlay */}
              <div className="h-52 relative overflow-hidden">
                <img src={cert.image} alt={cert.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent`}></div>
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color}`}></div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-white mb-5 shadow-lg`}>
                  <Award size={18} />
                </div>
                
                <p className="text-accent text-[10px] font-black uppercase tracking-widest mb-2">{cert.provider}</p>
                <h3 className="text-xl font-black text-white mb-3 leading-tight">{cert.title}</h3>

                <div className="flex items-center gap-2 text-white/30 text-xs font-bold mb-6">
                  <Calendar size={12} /> {cert.date}
                </div>

                <div className="mt-auto">
                  <a
                    href={cert.link}
                    target="_blank"
                    className={`flex items-center gap-3 w-full py-3.5 px-5 bg-gradient-to-r ${cert.color} text-white font-black uppercase text-[10px] tracking-widest rounded-2xl shadow-lg justify-center`}
                  >
                    <ShieldCheck size={14} /> Verify <ExternalLink size={12} className="ml-auto" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="layered-text-bg opacity-5">CREDENTIALS</div>
    </section>
  );
};

export default Certifications;
