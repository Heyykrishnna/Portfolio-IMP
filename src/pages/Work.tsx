import { useEffect } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import RevealOnScroll from '../components/RevealOnScroll';
import MarqueeText from '../components/MarqueeText';
import HeroCursorGlow from '../components/HeroCursorGlow';

export default function Work() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main>
      <section className="relative min-h-[85vh] flex flex-col justify-end overflow-hidden border-b border-black-border">
        <div className="hero-bg-placeholder" />
        <div className="noise-overlay" />
        <HeroCursorGlow size={700} intensity={0.12} />

        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 80% at 90% 20%, rgba(201,168,124,0.08) 0%, transparent 60%)' }} />

        <div className="absolute top-0 left-0 right-0 grid grid-cols-4 h-full pointer-events-none">
          {[0,1,2,3].map(i => (
            <div key={i} className="border-r border-black-border h-full opacity-40" />
          ))}
        </div>

        <div
          className="absolute top-[72px] right-14 font-display font-semibold text-black-border leading-none select-none pointer-events-none hidden lg:block"
          style={{ fontSize: 'clamp(120px, 18vw, 260px)', letterSpacing: '-0.05em', WebkitTextStroke: '1px #1e1e1e', color: 'transparent' }}
        >
          {String(projects.length).padStart(2, '0')}
        </div>

        <div className="container-main relative z-10 pb-16">
          <div className="mb-14" style={{ animation: 'revealIn 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s forwards', opacity: 0 }}>
            <span className="tag block mb-6">Selected Work</span>
            <h1 className="heading-xl max-w-4xl">
              Work
            </h1>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-t border-black-border pt-8"
            style={{ animation: 'revealIn 0.9s cubic-bezier(0.16,1,0.3,1) 0.4s forwards', opacity: 0 }}
          >
            <div className="sm:border-r border-black-border pr-8 pb-6 sm:pb-0">
              <p className="font-display text-5xl font-semibold text-gold mb-2" style={{ letterSpacing: '-0.03em' }}>{projects.length}</p>
              <p className="body-sm">Projects</p>
            </div>
            <div className="sm:border-r border-black-border sm:px-8 py-4 sm:py-0">
              <p className="body-lg max-w-xs">A curated collection spanning web design, branding, and digital experiences.</p>
            </div>
            <div className="sm:pl-8 pt-4 sm:pt-0 flex items-end">
              <p className="body-sm opacity-40 font-mono text-xs tracking-wider uppercase">2022 — 2026</p>
            </div>
          </div>
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

          <RevealOnScroll>
            <div className="mt-16 text-center">
              <p className="body-lg">
                Discover <span className="text-gold font-semibold">50+</span> more projects on my{' '}
                <a 
                  href="https://github.com/Heyykrishnna" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-cream hover:text-gold transition-colors duration-300 underline decoration-white/20 underline-offset-4"
                >
                  GitHub Profile
                </a>.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}
