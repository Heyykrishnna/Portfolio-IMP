import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { PROJECT_IMAGES } from '../data/images';
import RevealOnScroll from '../components/RevealOnScroll';
import ProjectCard from '../components/ProjectCard';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);
  const other = projects.filter(p => p.slug !== slug).slice(0, 2);
  const projectIndex = projects.findIndex(p => p.slug === slug);
  const projectImages = slug ? PROJECT_IMAGES[slug] : undefined;
  const coverImage = projectImages?.coverImage;
  const galleryImages = projectImages?.galleryImages ?? [];

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!project) return <Navigate to="/work" replace />;

  return (
    <main>
      <section className="relative min-h-[80vh] flex items-end pb-20 overflow-hidden border-b border-black-border">
        <div className="absolute inset-0" style={{ background: project.bgGradient }} />
        {coverImage && (
          <img
            src={coverImage}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
        )}
        <div className="noise-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="container-main relative z-10">
          <div className="mb-8" style={{ animation: 'revealIn 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s forwards', opacity: 0 }}>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-[12px] font-medium tracking-btn uppercase text-cream-dim hover:text-cream transition-colors duration-300"
            >
              ← Back to Work
            </Link>
          </div>
          <div style={{ animation: 'revealIn 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s forwards', opacity: 0 }}>
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <span className="tag">{project.category}</span>
              <span className="body-sm opacity-50">{project.year}</span>
              <span className="body-sm opacity-50 font-mono">
                {String(projectIndex + 1).padStart(2, '0')}/{String(projects.length).padStart(2, '0')}
              </span>
            </div>
          </div>
          <h1
            className="heading-xl mb-8 max-w-4xl"
            style={{ animation: 'revealIn 0.9s cubic-bezier(0.16,1,0.3,1) 0.3s forwards', opacity: 0 }}
          >
            {project.title}
          </h1>
          <p
            className="body-lg max-w-2xl"
            style={{ animation: 'revealIn 0.9s cubic-bezier(0.16,1,0.3,1) 0.45s forwards', opacity: 0 }}
          >
            {project.description}
          </p>
          {project.link && (
            <div style={{ animation: 'revealIn 0.9s cubic-bezier(0.16,1,0.3,1) 0.6s forwards', opacity: 0 }}>
              <a href={project.link} target="_blank" rel="noreferrer" className="btn-primary mt-8 inline-flex">
                Visit Live Site
              </a>
            </div>
          )}
        </div>
      </section>

      <section className="border-b border-black-border">
        <div className="container-main">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-black-border border-x border-black-border">
            {[
              { label: 'Role', value: project.role },
              { label: 'Category', value: project.category },
              { label: 'Year', value: project.year },
              { label: 'Duration', value: project.duration },
            ].map(item => (
              <div key={item.label} className="px-8 py-7">
                <p className="tag mb-2">{item.label}</p>
                <p className="font-body text-[14px] font-medium text-cream">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-b border-black-border">
        <div className="container-main">
          <RevealOnScroll>
            <div className="flex flex-wrap gap-2 mb-12">
              {project.tags.map(tag => (
                <span key={tag} className="px-4 py-2 border border-black-border rounded-sm text-[12px] font-medium tracking-btn uppercase text-cream-dim">
                  {tag}
                </span>
              ))}
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <p className="body-lg text-cream text-lg leading-[1.8] max-w-3xl pb-16 mb-16 border-b border-black-border">
              {project.fullDescription}
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {[
              { label: 'The Challenge', body: project.challenge },
              { label: 'The Solution', body: project.solution },
              { label: 'The Outcome', body: project.outcome },
            ].map((s, i) => (
              <RevealOnScroll key={s.label} delay={i * 100}>
                <div className="flex flex-col gap-5 p-8 border border-black-border rounded-sm bg-black-mid hover:bg-black-soft hover:border-gray-mid transition-all duration-400">
                  <div>
                    <span className="body-sm opacity-40 font-mono block mb-3">0{i + 1}</span>
                    <h3
                      className="font-display font-semibold text-cream"
                      style={{ fontSize: 'clamp(18px,2vw,24px)', letterSpacing: '-0.015em', lineHeight: 1.2 }}
                    >
                      {s.label}
                    </h3>
                  </div>
                  <p className="body-sm leading-relaxed">{s.body}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-b border-black-border">
        <div className="container-main">
          <RevealOnScroll>
            <span className="tag block mb-4">Visual Gallery</span>
            <h2 className="heading-md mb-12">Project Showcase</h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[0, 1, 2, 3].map((n, i) => {
              const img = galleryImages[n];
              const isHero = n === 0;
              return (
                <RevealOnScroll key={n} delay={i * 60}>
                  <div
                    className={`rounded-sm overflow-hidden ${isHero ? 'md:col-span-2 h-[500px]' : 'h-[300px]'}`}
                    style={{ background: project.bgGradient }}
                  >
                    {img ? (
                      <img
                        src={img}
                        alt={`${project.title} — ${n + 1}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center opacity-20">
                        <span className="font-display text-[80px] font-semibold" style={{ WebkitTextStroke: '1px #3a3a3a', color: 'transparent' }}>
                          {String(n + 1).padStart(2, '0')}
                        </span>
                      </div>
                    )}
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {other.length > 0 && (
        <section className="section-pad">
          <div className="container-main">
            <RevealOnScroll>
              <div className="flex items-end justify-between mb-12">
                <div>
                  <span className="tag block mb-4">Next Up</span>
                  <h2 className="heading-md">More Projects</h2>
                </div>
                <Link to="/work" className="arrow-link hidden sm:flex">All Work</Link>
              </div>
            </RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {other.map((p, i) => (
                <RevealOnScroll key={p.slug} delay={i * 80}>
                  <ProjectCard project={p} index={projects.indexOf(p)} />
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
