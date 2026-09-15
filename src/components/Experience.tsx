import { useEffect, useRef } from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const jobs = [
{
  role: 'AI & Computer Vision Research Engineer',
  company: 'Harmony Technology',
  location: 'Rabat, Morocco',
  period: 'Apr 2025 – Present',
  current: true,
  bullets: [
    'Design, develop and deploy deep learning solutions for computer vision, including object detection, segmentation, recognition, tracking, pose estimation, facial recognition, OCR, 3D reconstruction, and video understanding.',
    'Build and optimize image and video datasets to improve model accuracy, robustness and generalization.',
    'Benchmark, evaluate and optimize vision models for accuracy, latency, robustness, and deployment efficiency.',
    'Collaborate with software and embedded teams to integrate AI models into production applications and edge devices.'
  ],
  tags: [
    'Computer Vision',
    'PyTorch',
    'TensorFlow',
    'OpenCV',
    '3D Vision',
    'Edge AI',
    'Deep Learning'
  ]
},
  {
    role: 'NLP Engineer Intern',
    company: 'Omdena',
    location: 'Remote',
    period: 'Sep 2024 – Dec 2024',
    current: false,
    bullets: [
      'Data Extraction & Web Scraping: extracted and scraped archival documents from government and research databases',
      'Text Preprocessing: cleaned datasets with deduplication, metadata extraction using llama_parse and groq',
      'Ingestion Pipeline Optimization: built a scalable document ingestion pipeline using parallel processing and caching',
      'RAG-Based System Development: designed a Retrieval-Augmented Generation pipeline with vector database integration',
      'Chatbot Q&A Model: developed a conversational AI interface for intuitive historical knowledge retrieval',
    ],
    tags: ['RAG', 'llama-index', 'groq', 'Vector DB', 'NLP'],
  },
  {
    role: 'Computer Vision Research Intern',
    company: 'SETIME',
    location: 'Kenitra, Morocco',
    period: 'Mar 2024 – Sep 2024',
    current: false,
    bullets: [
      'Conducted extensive literature review on violence detection in videos: handcrafted features, deep learning, and hybrid methods',
      '99.63% accuracy on Hockey Fight dataset — state-of-the-art results',
      '100% accuracy on Violent Flow dataset; 99.62% on Reel Life Violence Situation dataset',
      'Designed a novel smart frame selection algorithm that reduced computational overhead significantly',
    ],
    tags: ['Action Recognition', 'Violence Detection', 'CNN', 'Research'],
    highlight: true,
  },
  {
    role: 'AI Engineering Intern',
    company: '3D Smart Factory',
    location: 'Mohemadia, Morocco',
    period: 'Jun 2023 – Sep 2023',
    current: false,
    bullets: [
      'Dataset Creation: collaborated on new dataset through data collection, augmentation, and annotation',
      'Component Detection: implemented YOLOv8 model to detect electronic components in technical drawings',
      'Textual Information Extraction: used Keras OCR to extract text from engineering drawings',
    ],
    tags: ['YOLOv8', 'Keras OCR', 'Dataset Annotation', 'Computer Vision'],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={ref} className="py-24 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="reveal flex items-center gap-3 mb-4">
          <span className="font-mono text-teal-600 text-sm">/ Experience</span>
          <div className="h-px flex-1 max-w-12 bg-teal-200"></div>
        </div>

        <h2 className="reveal font-sans font-bold text-3xl sm:text-4xl text-navy-900 mb-12">
          Where I've worked
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 lg:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-teal-400 via-teal-200 to-transparent" />

          <div className="flex flex-col gap-8 pl-6 lg:pl-20">
            {jobs.map((job, i) => (
              <div
                key={i}
                className="reveal relative"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-9 lg:-left-[72px] top-6 w-4 h-4 rounded-full border-2 border-teal-500 bg-white flex items-center justify-center">
                  {job.current && <span className="w-2 h-2 rounded-full bg-teal-500 animate-blink" />}
                </div>

                <div className="timeline-card bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        {job.current && (
                          <span className="px-2 py-0.5 rounded-full bg-teal-50 text-teal-600 text-xs font-semibold font-mono border border-teal-200">
                            Current
                          </span>
                        )}
                        {job.highlight && (
                          <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 text-xs font-semibold font-mono border border-amber-200">
                            Research
                          </span>
                        )}
                      </div>
                      <h3 className="font-bold text-xl text-navy-900">{job.role}</h3>
                      <div className="flex items-center gap-1 mt-1">
                        <Briefcase size={13} className="text-teal-500" />
                        <span className="text-teal-600 font-semibold text-sm">{job.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-slate-400 text-xs">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        <span className="font-mono">{job.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={12} />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-4">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-slate-600 text-sm leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
