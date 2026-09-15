import { useEffect, useRef } from 'react';

const skillGroups = [
  {
    category: 'Computer Vision',
    color: 'teal',
    skills: ['Object Detection', 'Image Segmentation', 'Action Recognition', 'Optical Flow', 'UAV Processing', 'Video Analysis', 'Depth Estimation', '3D Reconstruction', 'Pose Estimation'],
  },
  {
    category: 'Deep Learning Frameworks',
    color: 'cyan',
    skills: ['PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn', 'HuggingFace Transformers', 'OpenCV'],
  },
  {
    category: 'Generative AI & NLP',
    color: 'blue',
    skills: ['OpenAI API', 'llama-index', 'RAG Pipelines', 'Vector Databases', 'langChain', 'llama_parse'],
  },
  {
    category: 'Data Engineering',
    color: 'emerald',
    skills: ['Apache Airflow', 'MLflow', 'Selenium', 'BeautifulSoup', 'Parallel Processing'],
  },
  {
    category: 'DevOps & Cloud',
    color: 'sky',
    skills: ['AWS', 'Docker', 'Git', 'CI/CD', 'FastAPI'],
  },
];

const coreModels = [
  { name: 'PyTorch', level: 95, color: '#00C9B1' },
  { name: 'OpenCV', level: 92, color: '#0EA5E9' },
  { name: 'TensorFlow', level: 88, color: '#10B981' },
  { name: 'Cpp', level: 90, color: '#F59E0B' },
  { name: 'Transformers', level: 82, color: '#0EA5E9' },
  { name: 'Docker', level: 78, color: '#00C9B1' },
];

const colorMap: Record<string, string> = {
  teal: 'bg-teal-50 text-teal-700 border-teal-200',
  cyan: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  blue: 'bg-blue-50 text-blue-700 border-blue-200',
  emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  sky: 'bg-sky-50 text-sky-700 border-sky-200',
};

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    const barsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll<HTMLElement>('[data-level]').forEach((bar) => {
              const level = bar.dataset.level || '0';
              bar.style.width = level + '%';
            });
          }
        });
      },
      { threshold: 0.3 }
    );
    if (barsRef.current) barsObserver.observe(barsRef.current);

    return () => { observer.disconnect(); barsObserver.disconnect(); };
  }, []);

  return (
    <section id="skills" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="reveal flex items-center gap-3 mb-4">
          <span className="font-mono text-teal-600 text-sm">/ Skills</span>
          <div className="h-px flex-1 max-w-12 bg-teal-200"></div>
        </div>

        <h2 className="reveal font-sans font-bold text-3xl sm:text-4xl text-navy-900 mb-12">
          Tools & Technologies
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left: Skill groups */}
          <div className="flex flex-col gap-8">
            {skillGroups.map((group, i) => (
              <div key={group.category} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <h3 className="font-semibold text-slate-700 text-sm mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <span key={s} className={`skill-pill ${colorMap[group.color]}`}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Proficiency bars */}
          <div ref={barsRef} className="reveal">
            <h3 className="font-semibold text-slate-700 text-sm mb-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-400"></span>
              Core Proficiencies
            </h3>

            <div className="flex flex-col gap-6">
              {coreModels.map((item) => (
                <div key={item.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono font-medium text-slate-700 text-sm">{item.name}</span>
                    <span className="font-mono text-slate-400 text-xs">{item.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      data-level={item.level}
                      style={{ width: '0%', background: `linear-gradient(90deg, #00C9B1, ${item.color})` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="mt-10 p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <h4 className="font-semibold text-slate-600 text-xs uppercase tracking-widest mb-4">Languages</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { lang: 'Arabic', level: 'Native' },
                  { lang: 'French', level: 'Professional' },
                  { lang: 'English', level: 'Professional' },
                ].map(({ lang, level }) => (
                  <div key={lang} className="flex items-center justify-between">
                    <span className="text-slate-700 font-medium text-sm">{lang}</span>
                    <span className="text-xs font-mono text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-100">
                      {level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
