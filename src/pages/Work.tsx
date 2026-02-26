import { useEffect } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import RevealOnScroll from '../components/RevealOnScroll';
import MarqueeText from '../components/MarqueeText';

export default function Work() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main>
      <section className="relative min-h-[60vh] flex items-end pb-20 overflow-hidden border-b border-black-border">
        <div className="hero-bg-placeholder" />
        <div className="noise-overlay" />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 80% 50%, rgba(201,168,124,0.07) 0%, transparent 70%)' }} />
        <div className="container-main relative z-10">
          <div style={{ animation: 'revealIn 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s forwards', opacity: 0 }}>
            <span className="tag block mb-5">Selected Work</span>
          </div>
          <h1 className="heading-xl mb-6" style={{ animation: 'revealIn 0.9s cubic-bezier(0.16,1,0.3,1) 0.35s forwards', opacity: 0 }}>
            Work
          </h1>
          <p className="body-lg max-w-xl" style={{ animation: 'revealIn 0.9s cubic-bezier(0.16,1,0.3,1) 0.5s forwards', opacity: 0 }}>
            A curated collection of projects spanning web design, branding, and digital experiences.
          </p>
        </div>
      </section>

      <section className="py-5 border-b border-black-border">
        <MarqueeText text="Web · Brand · Motion · Strategy" speed={28} separator="" />
      </section>

      <section className="section-pad">
        <div className="container-main">
          <RevealOnScroll>
            <div className="flex items-center justify-between mb-12">
              <p className="body-sm">
                <span className="text-gold font-semibold">{projects.length}</span> projects
              </p>
              <div className="flex gap-6">
                {['All', 'Web', 'Brand', 'Motion'].map((f, i) => (
                  <button
                    key={f}
                    className={`text-[12px] font-medium tracking-btn uppercase transition-colors duration-300 ${
                      i === 0 ? 'text-cream' : 'text-cream-dim hover:text-cream'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <RevealOnScroll key={project.slug} delay={i * 100}>
                <ProjectCard project={project} index={i} variant={i < 2 ? 'featured' : 'default'} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
