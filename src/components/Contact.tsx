import { useEffect, useRef } from 'react';
import { Mail, Linkedin, Github, MapPin, ArrowRight } from 'lucide-react';

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: 'Khadijaettouil01@gmail.com',
    href: 'mailto:Khadijaettouil01@gmail.com',
    desc: 'Best for project inquiries',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'khadija-ettouil-b54132241',
    href: 'https://www.linkedin.com/in/khadija-e-b54132241',
    desc: 'Connect professionally',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'KhadijaTL',
    href: 'https://github.com/KhadijaTL',
    desc: 'Browse my projects & code',
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={ref} className="py-24 bg-navy-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-teal-900/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-cyan-900/10 blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <div className="reveal flex items-center gap-3 mb-4">
          <span className="font-mono text-teal-400 text-sm">/ Get in Touch</span>
          <div className="h-px flex-1 max-w-12 bg-teal-700"></div>
        </div>

        <div className="reveal max-w-2xl mb-14">
          <h2 className="font-sans font-bold text-3xl sm:text-5xl text-white leading-tight mb-5">
            Let's Build Something{' '}
            <span className="gradient-text font-serif italic font-light">Intelligent</span>{' '}
            Together
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Open to AI/ML roles, research collaborations, computer vision consulting, and
            interesting projects. Reach out through any of the channels below.
          </p>
        </div>

        {/* Location */}
        <div className="reveal flex items-center gap-2 mb-10 text-slate-500">
          <MapPin size={14} className="text-teal-500" />
          <span className="text-sm font-mono">Kenitra, Morocco </span>
        </div>

        {/* Contact cards */}
        <div className="reveal grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
          {contactItems.map(({ icon: Icon, label, value, href, desc }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-teal-500/60 hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-900/60 flex items-center justify-center mb-4 group-hover:bg-teal-800/60 transition-colors">
                <Icon size={18} className="text-teal-400" />
              </div>
              <div className="font-semibold text-white text-sm mb-1">{label}</div>
              <div className="font-mono text-teal-400 text-xs mb-2 truncate">{value}</div>
              <div className="text-slate-500 text-xs">{desc}</div>
              <div className="mt-3 flex items-center gap-1 text-teal-500 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Connect <ArrowRight size={11} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
