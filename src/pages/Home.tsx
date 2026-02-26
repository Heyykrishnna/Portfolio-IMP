import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data/projects';
import { journalPosts } from '../data/journal';
import ProjectCard from '../components/ProjectCard';
import JournalCard from '../components/JournalCard';
import MarqueeText from '../components/MarqueeText';
import ContactForm from '../components/ContactForm';
import RevealOnScroll from '../components/RevealOnScroll';
import GradientBlinds from '../components/GradientBlinds';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroTextRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      if (heroRef.current) {
        gsap.to(heroRef.current, {
          yPercent: -20,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5,
          },
        });
      }

      gsap.utils.toArray<HTMLElement>('.gsap-fade-up').forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: i * 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>('.gsap-stagger-children').forEach(parent => {
        const children = parent.children;
        gsap.fromTo(
          children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: parent,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>('.gsap-line-reveal').forEach(line => {
        gsap.fromTo(
          line,
          { scaleX: 0, transformOrigin: 'left center' },
          {
            scaleX: 1,
            duration: 1.2,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: line,
              start: 'top 90%',
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main>
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-end pb-20 overflow-hidden"
      >
        <GradientBlinds
          imageSrc="/hero-bg.png"
          numBlinds={14}
        />

        <div className="container-main relative z-10" ref={heroTextRef}>
          <div className="mb-10">
            <span
              className="tag block mb-6"
              style={{ animation: 'revealIn 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s forwards', opacity: 0 }}
            >
              Creative Portfolio · 2025
            </span>

            <h1
              className="heading-xl mb-8"
              style={{ animation: 'revealIn 1s cubic-bezier(0.16,1,0.3,1) 0.4s forwards', opacity: 0 }}
            >
              Design that
              <br />
              <em className="not-italic text-gold">makes impact.</em>
            </h1>

            <div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 max-w-xl"
              style={{ animation: 'revealIn 1s cubic-bezier(0.16,1,0.3,1) 0.6s forwards', opacity: 0 }}
            >
              <p className="body-lg flex-1">
                Blending creativity with strategy to craft digital experiences that captivate, engage, and convert.
              </p>
              <Link to="/work" className="btn-primary flex-shrink-0">
                View Work
              </Link>
            </div>
          </div>

          <div
            className="flex items-center justify-between pt-8 border-t border-white/10"
            style={{ animation: 'revealIn 1s cubic-bezier(0.16,1,0.3,1) 0.75s forwards', opacity: 0 }}
          >
            <div className="flex gap-10">
              {[{ num: '4+', label: 'Projects' }, { num: '3+', label: 'Years' }].map(s => (
                <div key={s.label}>
                  <p className="font-display text-3xl font-semibold text-cream" style={{ letterSpacing: '-0.02em' }}>{s.num}</p>
                  <p className="body-sm mt-1">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <div className="w-px h-8 bg-white/20" />
              <p className="body-sm opacity-50">Scroll to explore</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <MarqueeText text="Work" speed={25} />
      </section>

      <section className="section-pad border-t border-black-border">
        <div className="container-main">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 gsap-fade-up">
            <div>
              <span className="tag block mb-4">Selected Work</span>
              <h2 className="heading-lg">Recent Projects</h2>
            </div>
            <Link to="/work" className="arrow-link flex-shrink-0 mb-2">View All Work</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gsap-stagger-children">
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} variant={i === 0 ? 'featured' : 'default'} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-black-border">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="gsap-fade-up">
              <span className="tag block mb-5">about Us.25</span>
              <h2 className="heading-lg mb-8">
                We make designs that
                <span className="text-gold italic"> create impact.</span>
              </h2>
              <p className="body-lg mb-10">
                At Yatharth, I craft designs that don't just look stunning — they create impact. Blending creativity with strategy, I transform ideas into immersive digital experiences that captivate, engage, and convert.
              </p>
              <Link to="/about" className="btn-outline">Learn More</Link>
            </div>

            <div className="grid grid-cols-2 gap-5 gsap-stagger-children">
              {[
                { num: '4+', label: 'Projects', desc: 'Each crafted with care.' },
                { num: '3+', label: 'Years', desc: 'Deep expertise built over time.' },
                { num: '100%', label: 'Satisfaction', desc: 'Every client leaves delighted.' },
                { num: '∞', label: 'Drive', desc: 'Passion fuels every project.' },
              ].map(s => (
                <div key={s.label} className="p-6 border border-black-border rounded-sm bg-black-mid hover:border-gray-mid hover:bg-black-soft transition-all duration-500 group">
                  <p className="font-display text-4xl font-semibold text-gold mb-2 group-hover:scale-110 transition-transform duration-300 origin-left" style={{ letterSpacing: '-0.02em' }}>{s.num}</p>
                  <p className="font-body text-[12px] font-semibold tracking-btn uppercase text-cream mb-1">{s.label}</p>
                  <p className="body-sm text-[12px]">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-black-border overflow-hidden">
        <div className="container-main mb-12">
          <RevealOnScroll>
            <span className="tag block mb-4">clients</span>
            <h2 className="heading-md max-w-2xl">
              Collaborating with forward-thinking brands who dare to challenge the norm.
            </h2>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-t border-b border-black-border divide-x divide-black-border">
          {['Elysiar', 'Revox', 'Studio X', 'Minimal Co.', 'Arch.22', 'Form Lab'].map(client => (
            <div key={client} className="h-24 flex items-center justify-center px-4 group cursor-default">
              <p className="font-display text-lg font-medium text-cream-dim group-hover:text-cream opacity-30 group-hover:opacity-80 transition-all duration-400 text-center" style={{ letterSpacing: '-0.01em' }}>
                {client}
              </p>
            </div>
          ))}
        </div>

        <div className="container-main mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-black-border">
          <div className="gsap-fade-up md:col-span-1">
            <span className="tag block mb-5">Services</span>
            <ul className="flex flex-col gap-px">
              {[{ num: '01', label: 'Strategy' }, { num: '02', label: 'Web Design' }, { num: '03', label: 'Branding' }].map(s => (
                <li key={s.num} className="flex items-center gap-5 py-4 border-b border-black-border group cursor-default">
                  <span className="body-sm opacity-40 font-mono text-xs">{s.num}</span>
                  <span className="font-display font-medium text-cream group-hover:text-gold transition-colors duration-300 group-hover:translate-x-2 inline-block transition-transform" style={{ fontSize: 'clamp(18px,2vw,24px)', letterSpacing: '-0.01em' }}>
                    {s.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <RevealOnScroll className="md:col-span-2">
            <div className="p-8 border border-black-border rounded-sm bg-black-mid h-full flex flex-col justify-between gap-8">
              <p className="body-lg leading-[1.8]">
                I craft digital experiences that elevate brands and engage audiences. Every service blends creativity with strategy, ensuring every design is not just visually striking but also results-driven.
              </p>
              <Link to="/about" className="arrow-link">Explore Services</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-5">
        <MarqueeText text="Journal · Insights · Trends" speed={35} separator="" />
      </section>

      <section className="section-pad border-t border-black-border">
        <div className="container-main">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-6 gsap-fade-up">
            <div>
              <span className="tag block mb-4">Journal</span>
              <h2 className="heading-lg">Latest Articles</h2>
            </div>
            <Link to="/journal" className="arrow-link flex-shrink-0 mb-2">All Articles</Link>
          </div>
          <p className="body-lg max-w-2xl mb-12 gsap-fade-up">
            Where design meets thought leadership. Insights that inspire and push boundaries.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 gsap-stagger-children">
            {journalPosts.map(post => (
              <JournalCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-t border-black-border overflow-hidden" style={{ background: '#000000' }}>
        <div className="noise-overlay" />

        <div className="container-main relative z-10 pt-20 lg:pt-32 pb-0">
          <div className="gsap-fade-up mb-16">
            <span className="tag block mb-6">contact Us.25</span>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <h2 className="heading-xl max-w-3xl">
                Got a project?
                <br />
                <em className="not-italic text-gold">Let's talk.</em>
              </h2>
              <p className="body-lg max-w-xs lg:max-w-sm mb-2">
                Every great project starts with a conversation. I respond within 24 hours.
              </p>
            </div>
          </div>

          <div className="gsap-line-reveal w-full h-px bg-white/10 mb-0" />
        </div>

        <div className="container-main relative z-10 pt-0 pb-0">
          <div className="grid grid-cols-2 lg:grid-cols-4 border-b border-white/10">
            {[
              { label: 'Email', value: 'hi@Yatharth.com', href: 'mailto:hi@Yatharth.com' },
              { label: 'Twitter', value: '@Yatharth', href: 'https://twitter.com' },
              { label: 'Response', value: '< 24h', href: null },
              { label: 'Available', value: 'Q2 2025', href: null },
            ].map((item, i) => (
              <div
                key={item.label}
                className={`py-6 ${i < 3 ? 'border-r border-white/10' : ''} ${i > 0 ? 'px-6' : 'pr-6'}`}
              >
                <p className="tag mb-2">{item.label}</p>
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                    className="font-display text-[15px] font-medium text-cream hover:text-gold transition-colors duration-300"
                    style={{ letterSpacing: '-0.01em' }}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="font-display text-[15px] font-medium text-cream" style={{ letterSpacing: '-0.01em' }}>{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="container-main relative z-10 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24">
            <div className="gsap-fade-up flex flex-col justify-between">
              <div>
                <p className="tag mb-8">Let's work together</p>
                <div className="flex flex-col gap-0">
                  {[
                    { num: '01', label: 'Strategy & Positioning' },
                    { num: '02', label: 'Web Design & Dev' },
                    { num: '03', label: 'Brand Identity' },
                    { num: '04', label: 'Motion & Interaction' },
                  ].map(s => (
                    <div key={s.num} className="flex items-center gap-5 py-5 border-b border-white/[0.06] group cursor-default">
                      <span className="font-mono text-[11px] text-cream-dim opacity-30">{s.num}</span>
                      <span
                        className="font-display font-medium text-cream group-hover:text-gold group-hover:translate-x-2 transition-all duration-300 inline-block"
                        style={{ fontSize: 'clamp(18px, 2.2vw, 26px)', letterSpacing: '-0.01em' }}
                      >
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <p className="body-sm">Open to new projects for Q2 2025 onwards</p>
              </div>
            </div>

            <RevealOnScroll delay={100}>
              <div
                className="p-8 lg:p-10"
                style={{
                  background: '#050505',
                  border: '1px solid #1e1e1e',
                  clipPath: 'polygon(14px 0%, 100% 0%, calc(100% - 14px) 100%, 0% 100%)',
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <p className="tag">Available for projects</p>
                </div>
                <h3
                  className="heading-sm mb-8 font-display"
                  style={{ fontSize: 'clamp(20px, 2vw, 28px)', letterSpacing: '0.04em' }}
                >
                  Start the conversation.
                </h3>
                <ContactForm variant="home" />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </main>
  );
}
