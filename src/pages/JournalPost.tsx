import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { journalPosts } from '../data/journal';
import RevealOnScroll from '../components/RevealOnScroll';
import JournalCard from '../components/JournalCard';

export default function JournalPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = journalPosts.find(p => p.slug === slug);
  const otherPosts = journalPosts.filter(p => p.slug !== slug).slice(0, 2);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!post) return <Navigate to="/journal" replace />;

  return (
    <main>
      <section className="relative min-h-[55vh] flex items-end pb-20 overflow-hidden border-b border-black-border">
        <div className="hero-bg-placeholder" />
        <div className="noise-overlay" />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 60%, rgba(201,168,124,0.06) 0%, transparent 70%)' }} />
        <div className="container-main relative z-10">
          <div className="mb-6" style={{ animation: 'revealIn 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s forwards', opacity: 0 }}>
            <Link to="/journal" className="arrow-link text-cream-dim hover:text-cream" style={{ direction: 'rtl' }}>
              <span style={{ direction: 'ltr', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                ← Back to Journal
              </span>
            </Link>
          </div>
          <div style={{ animation: 'revealIn 0.9s cubic-bezier(0.16,1,0.3,1) 0.25s forwards', opacity: 0 }}>
            <div className="flex items-center gap-4 mb-5 flex-wrap">
              <span className="tag">{post.category}</span>
              <span className="body-sm opacity-50">{post.date}</span>
              <span className="body-sm opacity-50">{post.readTime}</span>
            </div>
          </div>
          <h1
            className="heading-lg max-w-4xl"
            style={{ animation: 'revealIn 0.9s cubic-bezier(0.16,1,0.3,1) 0.35s forwards', opacity: 0 }}
          >
            {post.title}
          </h1>
        </div>
      </section>

      <section className="section-pad border-b border-black-border">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-20">
            <article>
              <p className="body-lg text-cream mb-12 pb-12 border-b border-black-border leading-[1.8] text-lg">
                {post.excerpt}
              </p>

              <div className="flex flex-col gap-10">
                {post.content.map((section, i) => (
                  <RevealOnScroll key={i} delay={i * 60}>
                    <div className="flex flex-col gap-4">
                      {section.heading && (
                        <h2
                          className="font-display font-semibold text-cream"
                          style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', letterSpacing: '-0.015em', lineHeight: 1.2 }}
                        >
                          {section.heading}
                        </h2>
                      )}
                      <p className="body-lg leading-[1.8]">{section.body}</p>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>

              <div className="mt-16 pt-10 border-t border-black-border flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4 flex-wrap">
                  {['Design', 'Insights', post.category].map(tag => (
                    <span key={tag} className="px-4 py-2 border border-black-border rounded-sm text-[12px] font-medium tracking-btn uppercase text-cream-dim">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to="/journal" className="arrow-link">All Articles</Link>
              </div>
            </article>

            <aside className="hidden lg:block">
              <div className="sticky top-28 flex flex-col gap-8">
                <div className="p-7 border border-black-border rounded-sm bg-black-mid">
                  <p className="tag mb-5">In This Article</p>
                  <ul className="list-none flex flex-col gap-3">
                    {post.content.filter(s => s.heading).map((s, i) => (
                      <li key={i}>
                        <span className="body-sm text-[13px] hover:text-cream transition-colors duration-300 cursor-default leading-snug block">
                          {s.heading}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-7 border border-black-border rounded-sm bg-black-mid">
                  <p className="tag mb-4">About The Author</p>
                  <p className="body-sm leading-relaxed">
                    Yatharth is a digital designer and developer focused on crafting luxury digital experiences with intention.
                  </p>
                  <Link to="/about" className="arrow-link mt-4">Learn More</Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {otherPosts.length > 0 && (
        <section className="section-pad">
          <div className="container-main">
            <RevealOnScroll>
              <div className="flex items-end justify-between mb-12">
                <div>
                  <span className="tag block mb-4">More Reading</span>
                  <h2 className="heading-md">You might also like</h2>
                </div>
                <Link to="/journal" className="arrow-link hidden sm:flex">All Articles</Link>
              </div>
            </RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherPosts.map((p, i) => (
                <RevealOnScroll key={p.slug} delay={i * 80}>
                  <JournalCard post={p} />
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
