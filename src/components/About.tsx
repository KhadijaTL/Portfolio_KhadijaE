import { useEffect, useRef } from 'react';
import { Eye, Brain, Video, MessageSquare, Cpu, Database } from 'lucide-react';

const specializations = [
  { icon: Eye, label: 'Computer Vision', desc: 'Object detection, image segmentation, visual recognition' },
  { icon: Brain, label: 'Deep Learning Research', desc: 'State-of-the-art model design and optimization' },
  { icon: Video, label: 'Video Analysis', desc: 'Action recognition, temporal segmentation, behavior detection' },
  { icon: MessageSquare, label: 'NLP & RAG Systems', desc: 'Retrieval-augmented generation, conversational AI' },
  { icon: Cpu, label: 'Embedded AI', desc: 'AI integration into embedded systems and applications' },
  { icon: Database, label: 'Data Engineering', desc: 'Scalable ingestion pipelines, preprocessing workflows' },
];

const stats = [
  { value: '20+', label: 'Computer Vision Projects', sub: 'Research & production' },
  { value: '6+', label: 'Vision AI Domains', sub: 'Sports • 3D • Face • UAV • Surveillance • OCR' },
  { value: '2+', label: 'Years in AI & ML', sub: 'Research + engineering' },
];

export default function About() {
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
    <section id="about" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section label */}
        <div className="reveal flex items-center gap-3 mb-4">
          <span className="font-mono text-teal-600 text-sm">/ Hello</span>
          <div className="h-px flex-1 max-w-12 bg-teal-200"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: Specializations list */}
          <div>
            <h2 className="reveal font-sans font-bold text-3xl sm:text-4xl text-navy-900 mb-3">
              What I focus on
            </h2>
            <p className="reveal text-slate-400 font-mono text-sm mb-10">building intelligent systems that perceive the world</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specializations.map(({ icon: Icon, label, desc }, i) => (
                <div
                  key={label}
                  className="reveal group flex items-start gap-3 p-4 rounded-xl border border-slate-100 hover:border-teal-200 hover:bg-teal-50/30 transition-all duration-200"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="mt-0.5 w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-100 transition-colors">
                    <Icon size={16} className="text-teal-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 text-sm mb-0.5">{label}</div>
                    <div className="text-slate-400 text-xs leading-relaxed">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Bio + stats */}
          <div className="flex flex-col gap-8">
            <div className="reveal">
              <h3 className="font-sans font-bold text-2xl text-navy-900 mb-4">A bit about me</h3>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                I'm an <strong className="text-navy-900">AI & Computer Vision Engineer</strong> currently at{' '}
                <span className="text-teal-600 font-semibold">Harmony Technology</span> in Rabat, Morocco, where I design
                and deploy deep learning models for real-world visual intelligence challenges.
              </p>
              <p className="text-slate-500 text-base leading-relaxed mb-4">
                My work spans 3D computer vision, sports analytics, intelligent surveillance, face recognition, and drone vision systems, developing AI solutions that transform visual data into accurate, real-time insights for automation, safety, and decision-making.
              </p>
              <p className="text-slate-500 text-base leading-relaxed">
                I hold a <strong className="text-slate-700">Master's in Artificial Intelligence and Virtual Reality</strong> from
                Ibn Tofail University. I also build NLP pipelines and RAG-based systems, bridging vision and language.
              </p>
            </div>

            {/* Stats */}
            <div className="reveal grid grid-cols-3 gap-4">
              {stats.map(({ value, label, sub }) => (
                <div key={label} className="p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-teal-50/40 border border-slate-100 text-center">
                  <div className="font-black text-2xl gradient-text mb-1">{value}</div>
                  <div className="text-slate-700 font-semibold text-xs leading-tight mb-0.5">{label}</div>
                  <div className="text-slate-400 text-xs">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
