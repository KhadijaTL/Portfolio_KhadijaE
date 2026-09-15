import { useEffect, useRef } from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';

const projects = [
  {
    title: 'Sports Analytics — Action Detection',
    description:
      'AI-driven sports analytics using ViT and MViT architectures for real-time action detection in futsal with predictive player performance models.',
    image: 'images/sports.jpg',
    tags: ['ViT', 'MViT', 'RNN', 'Sports Analytics', 'PyTorch'],
    featured: false,
    github: 'https://github.com/KhadijaTL',
  },
  {
    title: 'UAV Image Processing Pipeline',
    description:
      'Object detection, classification, and segmentation on high-resolution aerial imagery with optimization for large-scale UAV datasets.',
    image: 'images/UAV.jpg',
    tags: ['Object Detection', 'Segmentation', 'UAV', 'OpenCV', 'Deep Learning'],
    featured: false,
    github: 'https://github.com/KhadijaTL',
  },
  {
    title: 'Temporal Action Segmentation',
    description:
      'Continuous factory activity recognition addressing long-term temporal dependencies in video streams using RNNs and Transformers.',
    image: 'images/activityRec.jpg',
    tags: ['LSTM', 'Transformers', 'Video Analysis', 'Action Recognition'],
    featured: false,
    github: 'https://github.com/KhadijaTL',
  },
  {
    title: 'Crowd Behavior Analysis',
    description:
      'Motion pattern analysis, density estimation, and abnormal behavior detection in video sequences using deep learning techniques.',
    image: 'images/crowd.jpg',
    tags: ['Video Analysis', 'Behavior Detection', 'Motion Analysis', 'CNN'],
    featured: false,
    github: 'https://github.com/KhadijaTL',
  },
  {
    title: 'Livestock Weight Estimation',
    description:
      'Visual data processing combining object detection and regression-based approaches for automated livestock analysis and weight prediction.',
    image: 'images/weightEst.jpg',
    tags: ['Object Detection', 'Regression', 'Agriculture AI', 'PyTorch'],
    featured: false,
    github: 'https://github.com/KhadijaTL',
  },
  {
  title: 'Face Recognition System',
  description:
    'AI-powered face recognition system using computer vision and deep learning for face detection, identification, and real-time recognition.',
  image:
    'images/Face.PNG',
  tags: ['Face Recognition', 'Computer Vision', 'Deep Learning', 'Python'],
  featured: false,
  github: 'https://github.com/KhadijaTL',
},

];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} className="py-24 bg-navy-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="reveal flex items-center gap-3 mb-4">
          <span className="font-mono text-teal-400 text-sm">/ Best Projects</span>
          <div className="h-px flex-1 max-w-12 bg-teal-700"></div>
        </div>

        <div className="reveal flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white">
            Selected Works
          </h2>
          <a
            href="https://github.com/KhadijaTL"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 text-sm font-semibold transition-colors group"
          >
            See all on GitHub
            <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="reveal project-card bg-slate-800/60 rounded-2xl overflow-hidden border border-slate-700/60 flex flex-col group"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Dark overlay with scan line on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

                {/* Featured badge */}
                {p.featured && (
                  <div className="absolute top-3 left-3 flex items-center gap-1 bg-teal-500/90 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    <Star size={11} fill="currentColor" />
                    Featured
                  </div>
                )}

                {/* Detection overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <rect x="8" y="8" width="84" height="84" fill="none" stroke="#00C9B1" strokeWidth="0.5" strokeDasharray="4 2" opacity="0.6" rx="2" />
                    <path d="M8 18 L8 8 L18 8" fill="none" stroke="#00C9B1" strokeWidth="1.2" opacity="0.9" />
                    <path d="M82 8 L92 8 L92 18" fill="none" stroke="#00C9B1" strokeWidth="1.2" opacity="0.9" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-white text-base mb-2 group-hover:text-teal-300 transition-colors">
                  {p.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  {p.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center px-2 py-0.5 rounded-md bg-slate-700/60 text-cyan-400 border border-slate-600/50 font-mono text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-2 border-t border-slate-700/50">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-400 hover:text-teal-400 text-xs font-medium transition-colors"
                  >
                    <Github size={13} /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
