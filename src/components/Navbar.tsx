import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Monogram */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center text-white font-bold text-sm tracking-widest">
              KE
            </div>
            <span className="font-semibold text-navy-900 text-sm hidden sm:block">Khadija ETTOUIL</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
            <a
              href="mailto:Khadijaettouil01@gmail.com"
              className="ml-2 px-5 py-2 rounded-full border-2 border-teal-600 text-teal-600 font-semibold text-sm hover:bg-teal-600 hover:text-white transition-all duration-200"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-teal-600 transition-colors"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-slate-100 shadow-xl">
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-slate-700 font-medium text-lg hover:text-teal-600 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="mailto:Khadijaettouil01@gmail.com"
              className="mt-2 px-6 py-3 rounded-full border-2 border-teal-600 text-teal-600 font-semibold text-center hover:bg-teal-600 hover:text-white transition-all"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
