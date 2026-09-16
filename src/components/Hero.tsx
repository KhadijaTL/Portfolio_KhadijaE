import { useEffect, useRef } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';

const tech = [
  'TensorFlow', 'PyTorch', 'OpenCV', 'ViT', 
  'LSTM', 'Transformers', 'CUDA', 'Docker', 'AWS', 'Scikit-learn',
  'RAG Pipelines', 'Airflow', 'Mlflow'
];

export default function Hero() {
  const portraitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = portraitRef.current;
    if (!el) return;
    const timer = setTimeout(() => el.classList.add('opacity-100', 'translate-x-0'), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen hero-radial overflow-hidden flex flex-col">
      {/* Main hero content */}
      <div className="flex-1 max-w-7xl mx-auto px-6 lg:px-8 w-full flex items-center pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

          {/* Left: Text */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 border border-teal-200 rounded-full px-4 py-2 w-fit shadow-sm">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-blink"></span>
              <span className="text-sm font-medium text-slate-600">Open to new opportunities</span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="font-sans font-black text-5xl sm:text-6xl xl:text-7xl text-navy-900 leading-tight mb-2">
                Hi, I'm Khadija
              </h1>
              <div className="font-serif italic font-light text-4xl sm:text-5xl xl:text-6xl leading-tight">
                <span className="gradient-text">AI & Computer</span>
                <br />
                <span className="gradient-text">Vision</span>
                <span className="text-navy-900"> Engineer</span>
              </div>
            </div>

            {/* Subheadline */}
            <p className="text-slate-500 text-lg leading-relaxed max-w-md">
              Building intelligent systems that <em>see</em>, understand, and act —
              from real-time surveillance to sports analytics to aerial imagery processing.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold text-sm shadow-lg hover:shadow-teal-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                View Projects <ArrowRight size={16} />
              </a>
              {/*
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-slate-300 text-slate-700 font-semibold text-sm hover:border-teal-400 hover:text-teal-600 transition-all duration-200"
              >
                <Download size={16} /> Download CV
              </a>
              */}
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com/KhadijaTL"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/70 border border-slate-200 text-slate-500 hover:text-teal-600 hover:border-teal-300 transition-all duration-200"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/khadija-e-b54132241"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/70 border border-slate-200 text-slate-500 hover:text-teal-600 hover:border-teal-300 transition-all duration-200"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:Khadijaettouil01@gmail.com"
                className="p-2.5 rounded-xl bg-white/70 border border-slate-200 text-slate-500 hover:text-teal-600 hover:border-teal-300 transition-all duration-200"
              >
                <Mail size={18} />
              </a>
              <span className="text-slate-300">|</span>
              <span className="text-xs text-slate-400 font-mono">Kenitra, Morocco</span>
            </div>
          </div>

          {/* Right: Portrait */}
          {/*
          <div
            ref={portraitRef}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2 opacity-0 translate-x-8 transition-all duration-700"
          >
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[28rem]">
              
              <div className="absolute inset-0 rounded-3xl teal-glow bg-gradient-to-br from-teal-100 to-cyan-100" />

              
              
              <div className="relative rounded-3xl overflow-hidden w-full h-full border border-teal-100">
                
                <img
                  src="/images/IMG20260603170831_00.jpg"
                  alt="Khadija ETTOUIL"
                  className="w-full h-full object-cover object-top portrait-filter"
                />
                
                
                <div className="scan-line top-0" />
              </div>
              
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <rect
                  x="4" y="4" width="92" height="92"
                  fill="none"
                  stroke="#00C9B1"
                  strokeWidth="0.6"
                  strokeDasharray="8 4"
                  opacity="0.5"
                  rx="3"
                  style={{ animation: 'drawBox 1.8s ease 0.8s forwards', strokeDashoffset: 400 }}
                />
                
                <path d="M4 16 L4 4 L16 4" fill="none" stroke="#00C9B1" strokeWidth="1.5" opacity="0.9" />
                <path d="M84 4 L96 4 L96 16" fill="none" stroke="#00C9B1" strokeWidth="1.5" opacity="0.9" />
                <path d="M4 84 L4 96 L16 96" fill="none" stroke="#00C9B1" strokeWidth="1.5" opacity="0.9" />
                <path d="M84 96 L96 96 L96 84" fill="none" stroke="#00C9B1" strokeWidth="1.5" opacity="0.9" />
              </svg>

              
              <div className="absolute top-3 left-3 bg-teal-600/90 backdrop-blur-sm text-white text-xs font-mono px-2 py-0.5 rounded-md">
                AI Engineer · 0.97
              </div>

              
              <div className="absolute -bottom-6 -right-4 bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center">
                  <span className="text-teal-600 text-lg font-bold">4+</span>
                </div>
                <div>
                  <div className="text-xs text-slate-400 leading-none">Years of</div>
                  <div className="text-sm font-semibold text-slate-700 leading-snug">Experience</div>
                </div>
              </div>
              
              
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3">
                <div className="text-xs text-slate-400 mb-0.5">Best accuracy</div>
                <div className="text-lg font-bold gradient-text">99.63%</div>
              </div>
            </div>
          </div> 
          */}
            
        </div>
      </div>

      
      <div className="w-full border-t border-slate-100 bg-white/60 backdrop-blur-sm py-4">
        <div className="marquee-wrapper">
          <div className="marquee-inner">
            {[...tech, ...tech].map((t, i) => (
              <span key={i} className="mx-6 text-sm font-mono text-slate-400 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-teal-400 inline-block"></span>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
