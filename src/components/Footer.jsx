import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const navLinks = ['Home', 'About', 'Projects', 'Skills', 'Certificates', 'Contact'];
  const socials = [
    { icon: <Github size={18} />, link: "https://github.com/sabinth-06", label: "GitHub" },
    { icon: <Linkedin size={18} />, link: "https://linkedin.com/in/sabinth", label: "LinkedIn" },
    { icon: <Mail size={18} />, link: "mailto:sabinth20@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative overflow-hidden pt-20 pb-8">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
      
      {/* Background glows */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-accent/5 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-6">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-block mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-black font-black text-lg shadow-lg shadow-accent/30">S</div>
                <span className="text-2xl font-black text-white tracking-widest">SABINTH</span>
              </div>
            </a>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              B.Tech CSE Student & Full-Stack Developer passionate about building scalable, impactful web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em] mb-5">Quick Links</p>
            <ul className="grid grid-cols-2 gap-3">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/50 text-sm font-medium flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-accent rounded-full"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em] mb-5">Connect With Me</p>
            <div className="space-y-3">
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  className="flex items-center gap-4 p-3 glass border border-white/5 rounded-xl text-white/60 text-sm font-medium"
                >
                  <span className="text-accent">{social.icon}</span>
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs font-bold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Sabinth Sakthivelan — All Rights Reserved
          </p>
          <p className="text-white/30 text-sm flex items-center gap-2">
            Built with <Heart size={14} className="text-accent fill-accent animate-pulse" /> using React & Vite
          </p>
          <a
            href="#home"
            className="p-3 glass border border-white/10 rounded-xl text-white/40 text-xs font-black uppercase tracking-widest flex items-center gap-2"
          >
            <ArrowUp size={14} /> Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
