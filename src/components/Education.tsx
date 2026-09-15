import { useEffect, useRef } from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';

const degrees = [
  {
    degree: "Master's in Artificial Intelligence & Virtual Reality",
    school: 'Ibn Tofail University',
    location: 'Kenitra, Morocco',
    period: '2022 – 2024',
    icon: GraduationCap,
    description: 'Advanced study in AI, machine learning, deep learning, computer vision, and virtual reality systems.',
    highlight: true,
  },
  {
    degree: "Bachelor's in Mathematics & Computer Science",
    school: 'Ibn Tofail University',
    location: 'Kenitra, Morocco',
    period: '2019 – 2022',
    icon: BookOpen,
    description: 'Foundation in mathematical reasoning, algorithms, data structures, and software engineering principles.',
    highlight: false,
  },
];

export default function Education() {
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
    <section id="education" ref={ref} className="py-24 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="reveal flex items-center gap-3 mb-4">
          <span className="font-mono text-teal-600 text-sm">/ Education</span>
          <div className="h-px flex-1 max-w-12 bg-teal-200"></div>
        </div>

        <h2 className="reveal font-sans font-bold text-3xl sm:text-4xl text-navy-900 mb-12">
          Academic Background
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {degrees.map((d, i) => {
            const Icon = d.icon;
            return (
              <div
                key={i}
                className={`reveal group p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  d.highlight
                    ? 'bg-gradient-to-br from-teal-50 to-cyan-50/40 border-teal-200 shadow-sm hover:shadow-teal-100 hover:shadow-lg'
                    : 'bg-white border-slate-100 hover:border-teal-200 hover:shadow-md'
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    d.highlight ? 'bg-teal-100' : 'bg-slate-100'
                  } group-hover:bg-teal-100 transition-colors`}>
                    <Icon size={22} className={d.highlight ? 'text-teal-600' : 'text-slate-500 group-hover:text-teal-600'} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-xs text-teal-500 mb-2">{d.period}</div>
                    <h3 className="font-bold text-navy-900 text-base leading-snug mb-1">{d.degree}</h3>
                    <div className="font-semibold text-slate-500 text-sm mb-3">{d.school} · {d.location}</div>
                    <p className="text-slate-500 text-sm leading-relaxed">{d.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
