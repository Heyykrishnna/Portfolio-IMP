import { useEffect } from 'react';
import { journalPosts } from '../data/journal';
import JournalCard from '../components/JournalCard';
import RevealOnScroll from '../components/RevealOnScroll';
import HeroCursorGlow from '../components/HeroCursorGlow';

export default function Journal() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main>
      <section className="relative min-h-[85vh] flex flex-col justify-end overflow-hidden border-b border-black-border">
        <div className="hero-bg-placeholder" />
        <div className="noise-overlay" />
        <HeroCursorGlow size={700} intensity={0.12} />

        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 55% 70% at 5% 70%, rgba(201,168,124,0.09) 0%, transparent 65%)' }} />

        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 40% 50% at 95% 30%, rgba(201,168,124,0.05) 0%, transparent 60%)' }} />

        <div
          className="absolute top-[72px] left-[50%] -translate-x-[50%] font-display font-semibold leading-none select-none pointer-events-none hidden lg:block text-center"
          style={{ fontSize: 'clamp(140px, 22vw, 320px)', letterSpacing: '-0.055em', WebkitTextStroke: '1px #1a1a1a', color: 'transparent', opacity: 1 }}
        >
          IDEAS
        </div>

        <div className="container-main relative z-10 pb-14">
          <div className="mb-12" style={{ animation: 'revealIn 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s forwards', opacity: 0 }}>
            <span className="tag block mb-7">Journal</span>
            <h1 className="heading-xl">
              Journal
            </h1>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_auto] gap-0 border-t border-black-border"
            style={{ animation: 'revealIn 0.9s cubic-bezier(0.16,1,0.3,1) 0.4s forwards', opacity: 0 }}
          >
            <div className="sm:border-r border-black-border pt-6 pr-8 pb-4">
              <p className="tag mb-2">Articles</p>
              <p className="font-display text-5xl font-semibold text-gold" style={{ letterSpacing: '-0.03em' }}>{journalPosts.length}</p>
            </div>
            <div className="sm:px-8 pt-6 pb-4">
              <p className="tag mb-2">About</p>
              <p className="body-lg max-w-sm">Design meets thought leadership — insights that inspire, challenge, and push boundaries.</p>
            </div>
            <div className="sm:pl-8 pt-6 pb-4 flex flex-col justify-between items-start sm:items-end">
              <p className="body-sm opacity-40 font-mono text-xs tracking-wider uppercase mb-auto pt-6">Est. 2022</p>
              <p className="tag mt-4">Ongoing</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-main">
          <RevealOnScroll>
            <div className="flex items-center justify-between mb-12">
              <p className="body-sm">
                <span className="text-gold font-semibold">{journalPosts.length}</span> articles
              </p>
              <div className="flex gap-6">
                {['All', 'AI Design', 'Visual Design', 'Trends'].map((f, i) => (
                  <button
                    key={f}
                    className={`text-[12px] font-medium tracking-btn uppercase transition-colors duration-300 ${i === 0 ? 'text-cream' : 'text-cream-dim hover:text-cream'
                      }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {journalPosts.map((post, i) => (
              <RevealOnScroll key={post.slug} delay={i * 80}>
                <JournalCard post={post} />
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll>
            <div className="border-t border-black-border pt-12 text-center">
              <p className="body-sm mb-6 opacity-60">You've reached the end of the journal.</p>
              <div className="w-1 h-1 rounded-full bg-gold mx-auto" />
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}
