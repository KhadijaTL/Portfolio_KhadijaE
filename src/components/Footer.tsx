import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center text-white font-bold text-xs tracking-widest">
            KE
          </div>
          <span className="text-slate-400 text-sm">
            © 2026 <span className="text-white font-semibold">Khadija ETTOUIL</span> — AI & Computer Vision Engineer
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/KhadijaTL"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-500 hover:text-teal-400 transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/khadija-e-b54132241"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-500 hover:text-teal-400 transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:Khadijaettouil01@gmail.com"
            className="p-2 rounded-lg text-slate-500 hover:text-teal-400 transition-colors"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
