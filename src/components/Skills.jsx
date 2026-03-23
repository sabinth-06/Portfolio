import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Server, Settings, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code size={22} />,
      skills: [
        { name: "C++", slug: "cpp" },
        { name: "Java", slug: "java" },
        { name: "JavaScript", slug: "js" }
      ],
      color: "from-cyan-500 to-blue-500",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20"
    },
    {
      title: "Technologies",
      icon: <Layout size={22} />,
      skills: [
        { name: "React.js", slug: "react" },
        { name: "Node.js", slug: "nodejs" },
        { name: "Express.js", slug: "express" },
        { name: "MongoDB", slug: "mongodb" }
      ],
      color: "from-pink-500 to-rose-500",
      bg: "bg-pink-500/10",
      border: "border-pink-500/20"
    },
    {
      title: "Frameworks & CSS",
      icon: <Server size={22} />,
      skills: [
        { name: "Tailwind CSS", slug: "tailwind" },
        { name: "Bootstrap", slug: "bootstrap" },
        { name: "HTML5", slug: "html" },
        { name: "CSS3", slug: "css" }
      ],
      color: "from-emerald-500 to-green-500",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    },
    {
      title: "Tools & OS",
      icon: <Settings size={22} />,
      skills: [
        { name: "Git", slug: "git" },
        { name: "GitHub", slug: "github" },
        { name: "Ubuntu", slug: "ubuntu" },
        { name: "VS Code", slug: "vscode" }
      ],
      color: "from-amber-500 to-orange-500",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20"
    }
  ];

  const domainSkills = [
    { label: "Data Structures & Algorithms", pct: 80 },
    { label: "Full-Stack Web Development", pct: 85 },
    { label: "Problem Solving", pct: 78 },
    { label: "Object-Oriented Programming", pct: 82 },
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-[140px]"></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#8B5CF6]/5 rounded-full blur-[140px]"></div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-accent text-sm font-black uppercase tracking-[0.4em] mb-4">What I Work With</p>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight">
            TECHNICAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#8B5CF6]">ARSENAL</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-[#8B5CF6] mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-[2.5rem] border border-white/5 relative overflow-hidden group transition-all duration-500 hover:border-accent/30"
            >
              <div className={`absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br ${category.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}></div>
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>

              <div className={`w-12 h-12 rounded-2xl ${category.bg} ${category.border} border flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform duration-500`}>
                {category.icon}
              </div>

              <h3 className="text-base font-black text-white uppercase tracking-widest mb-8">{category.title}</h3>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, sIdx) => (
                  <motion.div 
                    key={sIdx} 
                    className="flex flex-col items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 group/skill hover:bg-white/10 hover:border-white/10 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (idx * 0.1) + (sIdx * 0.05) }}
                  >
                    <div className="w-10 h-10 flex items-center justify-center p-1 bg-[#020617] rounded-xl shadow-inner group-hover/skill:scale-110 transition-transform">
                      <img 
                        src={`https://skillicons.dev/icons?i=${skill.slug}`} 
                        alt={skill.name}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-[10px] font-black text-white/50 uppercase tracking-tighter text-center group-hover/skill:text-accent transition-colors truncate w-full">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Domain Proficiency */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-10 md:p-14 rounded-[3rem] border border-white/5 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-[#8B5CF6] to-accent"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Cpu size={22} className="text-accent" />
                <h3 className="text-2xl font-black text-white uppercase tracking-widest">Domain Expertise</h3>
              </div>
              <p className="text-white/40 text-lg leading-relaxed">
                Proficient in system design and building scalable web architectures with a focus on performance and clean code.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                {["Problem Solver", "Full-Stack Dev", "DSA Enthusiast"].map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-accent/10 border border-accent/20 text-accent text-xs font-black uppercase tracking-widest rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {domainSkills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/70 text-sm font-bold">{skill.label}</span>
                    <span className="text-accent text-sm font-black">{skill.pct}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-accent to-[#8B5CF6]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <div className="layered-text-bg opacity-5">EXPERTISE</div>
    </section>
  );
};

export default Skills;
