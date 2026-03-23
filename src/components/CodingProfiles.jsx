import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Target, Award, ExternalLink } from 'lucide-react';

const CodingProfiles = () => {
  const profiles = [
    {
      platform: "LeetCode",
      username: "sabinth20",
      stats: "50+ Problems Solved",
      rank: "Basic Badge",
      color: "from-orange-400 to-yellow-400",
      bg: "bg-orange-500/10",
      border: "border-orange-500/20",
      textColor: "text-orange-400",
      link: "https://leetcode.com/u/sabinth20/"
    },
    {
      platform: "GitHub",
      username: "sabinth-06",
      stats: "20+ Repositories",
      rank: "Active Contributor",
      color: "from-neutral-400 to-white",
      bg: "bg-white/5",
      border: "border-white/10",
      textColor: "text-white",
      link: "https://github.com/sabinth-06"
    },
    {
      platform: "HackerRank",
      username: "sabinth20",
      stats: "5 Star in Problem Solving",
      rank: "Gold Badge",
      color: "from-emerald-400 to-green-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      textColor: "text-emerald-400",
      link: "https://www.hackerrank.com/profile/sabinth20"
    }
  ];

  return (
    <section id="coding-profiles" className="py-32 relative overflow-hidden">
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-[140px]"></div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-accent text-sm font-black uppercase tracking-[0.4em] mb-4">Where I Code</p>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight">
            CODING <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#8B5CF6]">PROFILES</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-[#8B5CF6] mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {profiles.map((profile, idx) => (
            <motion.a
              key={idx}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="glass-card p-10 rounded-[2.5rem] flex flex-col relative overflow-hidden border border-white/5 transition-all duration-500 hover:border-accent/30 hover:shadow-[0_20px_50px_rgba(6,182,212,0.1)] group"
            >
              {/* Top gradient bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${profile.color}`}></div>

              {/* Background glow */}
              <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${profile.color} opacity-5 blur-3xl rounded-full`}></div>

              {/* Header */}
              <div className="flex items-start justify-between mb-8">
                <div className={`p-4 rounded-2xl ${profile.bg} ${profile.border} border`}>
                  <Code2 size={26} className={profile.textColor} />
                </div>
                <ExternalLink size={17} className="text-white/20 mt-1" />
              </div>


              <h3 className="text-2xl font-black text-white mb-1">{profile.platform}</h3>
              <p className={`font-mono text-sm mb-6 ${profile.textColor}`}>@{profile.username}</p>

              <div className="space-y-3 mt-auto">
                <div className={`flex items-center gap-3 p-3 ${profile.bg} ${profile.border} border rounded-xl`}>
                  <Target size={15} className={profile.textColor} />
                  <span className="text-white/70 text-sm font-medium">{profile.stats}</span>
                </div>
                <div className={`flex items-center gap-3 p-3 ${profile.bg} ${profile.border} border rounded-xl`}>
                  <Award size={15} className={profile.textColor} />
                  <span className="text-white/70 text-sm font-medium">{profile.rank}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
      <div className="layered-text-bg opacity-5">PROFILES</div>
    </section>
  );
};

export default CodingProfiles;
