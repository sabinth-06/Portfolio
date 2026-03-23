import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Sparkles } from 'lucide-react';

const Contact = () => {
  const contactItems = [
    { icon: <Mail size={20} />, label: "Email", value: "sabinth20@gmail.com", color: "from-blue-500 to-cyan-500", href: "mailto:sabinth20@gmail.com" },
    { icon: <Phone size={20} />, label: "Phone", value: "+91 9003851392", color: "from-emerald-500 to-green-500", href: "tel:+919003851392" },
    { icon: <MapPin size={20} />, label: "Location", value: "Namakkal, Tamil Nadu", color: "from-purple-500 to-pink-500", href: "#" },
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Ambient background orbs */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-accent/8 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#8B5CF6]/8 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-accent text-sm font-black uppercase tracking-[0.4em] mb-4">Contact</p>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight">
            LET'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#8B5CF6]">CONNECT</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-[#8B5CF6] mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-6">
              <Sparkles size={20} className="text-accent" />
              <span className="text-accent text-sm font-black uppercase tracking-widest">Open to Work</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#8B5CF6]">legendary</span> together.
            </h3>
            <p className="text-white/40 text-lg leading-relaxed mb-12">
              Have a project in mind, a job opportunity, or just want to say hi? My inbox is always open — I'd love to hear from you!
            </p>

            <div className="space-y-4 mb-12">
              {contactItems.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-5 p-5 glass border border-white/5 rounded-2xl"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white flex-shrink-0`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white/30 text-[10px] font-black uppercase tracking-widest mb-0.5">{item.label}</p>
                    <p className="text-white font-bold">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="flex gap-4">
              <a href="https://github.com/sabinth-06" target="_blank"
                className="flex items-center gap-3 px-6 py-4 glass border border-white/10 text-white font-black uppercase text-xs tracking-widest rounded-2xl">
                <Github size={18} /> GitHub
              </a>
              <a href="https://linkedin.com/in/sabinth" target="_blank"
                className="flex items-center gap-3 px-6 py-4 bg-[#0A66C2]/20 border border-[#0A66C2]/30 text-[#0A66C2] font-black uppercase text-xs tracking-widest rounded-2xl">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-14 rounded-[3rem] border border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#8B5CF6]/5 rounded-full blur-[80px]"></div>

            <h3 className="text-2xl font-black text-white mb-8 relative z-10">Drop a Message 👋</h3>

            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-white/30 mb-2 ml-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-accent focus:bg-accent/5 outline-none transition-all placeholder:text-white/20"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-white/30 mb-2 ml-2">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-accent focus:bg-accent/5 outline-none transition-all placeholder:text-white/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-white/30 mb-2 ml-2">Subject</label>
                <input
                  type="text"
                  placeholder="What's this about?"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-accent focus:bg-accent/5 outline-none transition-all placeholder:text-white/20"
                />
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-white/30 mb-2 ml-2">Message</label>
                <textarea
                  rows="5"
                  placeholder="Tell me about your project or idea..."
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-accent focus:bg-accent/5 outline-none transition-all resize-none placeholder:text-white/20"
                ></textarea>
              </div>

              <button className="w-full py-5 bg-gradient-to-r from-accent to-[#0891b2] text-black font-black uppercase tracking-[0.25em] text-sm rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-accent/20">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      <div className="layered-text-bg opacity-5">CONNECT</div>
    </section>
  );
};

export default Contact;
