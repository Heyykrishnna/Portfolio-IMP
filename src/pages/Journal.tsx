import { useEffect } from 'react';
import { journalPosts } from '../data/journal';
import JournalCard from '../components/JournalCard';
import RevealOnScroll from '../components/RevealOnScroll';

export default function Journal() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main>
      <section className="relative min-h-[60vh] flex items-end pb-20 overflow-hidden border-b border-black-border">
        <div className="hero-bg-placeholder" />
        <div className="noise-overlay" />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 70% at 20% 60%, rgba(201,168,124,0.07) 0%, transparent 70%)' }} />
        <div className="container-main relative z-10">
          <div style={{ animation: 'revealIn 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s forwards', opacity: 0 }}>
            <span className="tag block mb-5">Journal</span>
          </div>
          <h1 className="heading-xl mb-6" style={{ animation: 'revealIn 0.9s cubic-bezier(0.16,1,0.3,1) 0.35s forwards', opacity: 0 }}>
            Journal
          </h1>
          <p className="body-lg max-w-xl" style={{ animation: 'revealIn 0.9s cubic-bezier(0.16,1,0.3,1) 0.5s forwards', opacity: 0 }}>
            Our journal is where design meets thought leadership. Insights that inspire, challenge, and push the boundaries of design.
          </p>
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
