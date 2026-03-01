import { useEffect, useRef, useState } from 'react';
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
import { Keyboard } from "@/components/ui/keyboard";
import Testimonials from '../components/Testimonials';

gsap.registerPlugin(ScrollTrigger); 

const HOME_SERVICES = [
  {
    num: '01',
    label: 'Strategy',
    tag: 'Research & Planning',
    desc: 'Data-informed thinking meets creative vision. Brand positioning, audience personas, and content hierarchies that make every design decision purposeful.',
  },
  {
    num: '02',
    label: 'Web Design',
    tag: 'Digital Product',
    desc: 'From wireframes to polished interfaces — digital experiences with obsessive attention to typography, spacing, motion, and interaction.',
  },
  {
    num: '03',
    label: 'Branding',
    tag: 'Identity Systems',
    desc: 'Identity systems that go beyond a logo. Visual languages built to work across every touchpoint — digital, print, and beyond.',
  },
];

function HomeServices() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = HOME_SERVICES.find(s => s.num === activeId) ?? HOME_SERVICES[0];

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-0 border border-black-border rounded-sm overflow-hidden">
      <ul className="flex flex-col divide-y divide-black-border">
        {HOME_SERVICES.map(s => {
          const isActive = activeId === s.num || (!activeId && s.num === '01');
          return (
            <li
              key={s.num}
              onMouseEnter={() => setActiveId(s.num)}
              onMouseLeave={() => setActiveId(null)}
              className="relative flex items-center gap-6 px-6 py-7 cursor-default group transition-colors duration-300"
              style={{ background: isActive ? 'rgba(201,168,124,0.04)' : 'transparent' }}
            >
              <span
                className="font-mono text-[11px] transition-colors duration-300"
                style={{ color: isActive ? '#c9a87c' : 'rgba(232,224,212,0.3)' }}
              >
                {s.num}
              </span>
              <div className="flex-1 flex flex-col gap-1">
                <span
                  className="font-display font-semibold transition-all duration-300 inline-block"
                  style={{
                    fontSize: 'clamp(20px,2.2vw,28px)',
                    letterSpacing: '-0.015em',
                    color: isActive ? '#c9a87c' : '#e8e0d4',
                    transform: isActive ? 'translateX(6px)' : 'translateX(0)',
                  }}
                >
                  {s.label}
                </span>
                <span
                  className="text-[10px] font-medium uppercase tracking-widest transition-opacity duration-300"
                  style={{ color: '#c9a87c', opacity: isActive ? 0.7 : 0 }}
                >
                  {s.tag}
                </span>
              </div>
              <svg
                className="flex-shrink-0 transition-all duration-300 text-gold"
                style={{ opacity: isActive ? 1 : 0, transform: isActive ? 'translateX(0)' : 'translateX(-6px)' }}
                width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
              {isActive && (
                <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-gold" />
              )}
            </li>
          );
        })}
      </ul>

      <div className="border-t md:border-t-0 md:border-l border-black-border bg-black-mid p-8 flex flex-col justify-between gap-6 min-h-[220px]">
        <div className="flex flex-col gap-3">
          <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-gold opacity-70">{active.tag}</span>
          <p className="body-lg leading-[1.85] transition-all duration-300">{active.desc}</p>
        </div>
        <Link to="/about" className="arrow-link">Explore Services</Link>
      </div>
    </div>
  );
}

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
              Yatharth Khandelwal · 2026
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
            </div>
          </div>

          <div
            className="flex items-center justify-between pt-8 border-t border-white/10"
            style={{ animation: 'revealIn 1s cubic-bezier(0.16,1,0.3,1) 0.75s forwards', opacity: 0 }}
          >
            <div className="flex gap-10">
              <Link to="/work" className="btn-primary flex-shrink-0">
                View Work
              </Link>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <div className="w-px h-8 bg-white/20" />
              <p className="body-sm opacity-50">Scroll to explore</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <MarqueeText text="Work · Design · Development · Branding · Full Stack · UI/UX · Motion · Strategy · Creative · Digital · Innovation · Craft" speed={100} />
      </section>

      <section className="section-pad border-t border-black-border relative overflow-hidden bg-black text-cream">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(201,168,124,0.03) 0%, transparent 100%)' }} />
        <div className="container-main relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 gsap-fade-up">
            <div>
              <h2 className="heading-lg font-display">
                Recent <em className="italic text-gold font-light">Projects.</em>
              </h2>
            </div>
            <Link to="/work" className="arrow-link flex-shrink-0 mb-2">View All Work</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 gsap-stagger-children">
            {projects.slice(0, 5).map((project, i) => (
              <div key={project.slug} className={i === 0 ? "md:col-span-2" : "md:col-span-1"}>
                <ProjectCard project={project} index={i} variant={i === 0 ? 'featured' : 'default'} />
              </div>
            ))}
          </div>

          <div className="mt-16 text-center gsap-fade-up">
            <p className="body-sm">
              Discover <span className="text-gold font-semibold">25+</span> more projects on my{' '}
              <a 
                href="https://github.com/Heyykrishnna" 
                target="_blank" 
                rel="noreferrer"
                className="text-cream hover:text-gold transition-colors duration-300 underline decoration-white/20 hover:decoration-gold/50 underline-offset-4"
              >
                GitHub Profile
              </a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-black-border">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="gsap-fade-up">
              <span className="tag block mb-5">about Us.26</span>
              <h2 className="heading-lg mb-8">
                We make designs that
                <span className="text-gold italic"> create impact.</span>
              </h2>
              <p className="body-lg mb-10">
                I’m Yatharth, a Full Stack Developer and Design Developer passionate about creating meaningful digital experiences. I combine creativity with technical expertise to transform ideas into modern, responsive, and user-focused web solutions. My approach goes beyond visual appeal — focusing on usability, performance, and seamless interaction.
              </p>
              <Link to="/about" className="btn-outline">Learn More</Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1px] bg-black-border border border-black-border rounded-sm overflow-hidden gsap-stagger-children">
              {[
                { num: '25+', label: 'Projects Completed', desc: 'Each delivered with precision and intentionality.' },
                { num: '3+', label: 'Years Active', desc: 'Deep expertise built across creative disciplines.' },
                { num: '100%', label: 'Client Satisfaction', desc: 'Every engagement ends with a delighted partner.' },
                { num: '∞', label: 'Creative Drive', desc: 'Relentless passion — never settling for good enough.' },
                { num: '1000+', label: 'Coffee Consumed', desc: 'Fueling creativity and late-night coding sessions.' },
                { num: '15+', label: 'Clients', desc: 'Across the Globe.' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-black group relative flex flex-col justify-between gap-4 p-7 cursor-default overflow-hidden transition-colors duration-500 hover:bg-black-mid"
                >
                  <div>
                    <p
                      className="font-display font-semibold text-gold transition-transform duration-500 group-hover:translate-x-1 origin-left"
                      style={{ fontSize: 'clamp(36px, 4.5vw, 64px)', letterSpacing: '-0.03em', lineHeight: 1 }}
                    >
                      {s.num}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cream-dim opacity-70">
                      {s.label}
                    </p>
                    <p className="body-sm text-[12px] leading-relaxed opacity-55 transition-opacity duration-300 group-hover:opacity-75">
                      {s.desc}
                    </p>
                  </div>
                  <div
                    className="absolute bottom-0 left-0 h-0.5 bg-gold transition-all duration-500 ease-out"
                    style={{ width: '0%' }}
                    ref={el => {
                      if (!el) return;
                      const parent = el.parentElement;
                      if (!parent) return;
                      parent.addEventListener('mouseenter', () => { el.style.width = '100%'; });
                      parent.addEventListener('mouseleave', () => { el.style.width = '0%'; });
                    }}
                  />
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
          {['Elysiar', 'Revox', 'Studio X', 'Minimal Co.', 'Neutron', 'Hastakala'].map(client => (
            <div key={client} className="h-24 flex items-center justify-center px-4 group cursor-default">
              <p className="font-display text-lg font-medium text-cream-dim group-hover:text-cream opacity-30 group-hover:opacity-80 transition-all duration-400 text-center" style={{ letterSpacing: '-0.01em' }}>
                {client}
              </p>
            </div>
          ))}
        </div>

        <div className="container-main mt-16 pt-12 border-t border-black-border gsap-fade-up">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <span className="tag">Services</span>
            <Link to="/about" className="arrow-link text-[12px]">All Services</Link>
          </div>
          <HomeServices />
        </div>
      </section>
      <section className="border-t md:pb-20 hidden md:block border-black-border overflow-hidden relative">
        <div className="noise-overlay" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(201,168,124,0.04) 0%, transparent 100%)' }} />
        <div className="container-main relative z-10">
          <RevealOnScroll delay={150}>
            <div className="flex w-full items-center justify-center">
              <Keyboard enableSound showPreview />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-5 border-t border-black-border">
        <MarqueeText text="Journal · Insights · Trends · Design Thinking · Dev Notes · Creative Process · Case Studies · Industry · Perspective · Experiments · Ideas · Stories" speed={100} separator="/" />
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

      {/* Add dark background class to blend with the surrounding sections */}
      <div className="bg-black border-t border-black-border">
        <Testimonials />
      </div>

      <section className="relative border-t border-black-border overflow-hidden" style={{ background: '#000000' }}>
        <div className="noise-overlay" />

        <div className="container-main relative z-10 pt-20 lg:pt-32 pb-0">
          <div className="gsap-fade-up mb-16">
            <span className="tag block mb-6">contact Us.26</span>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-white/10 bg-white/10 gap-[1px]">
            {[
              { label: 'Email', value: 'khandelwalyatharth39@gmail.com', href: 'mailto:khandelwalyatharth39@gmail.com' },
              { label: 'GitHub', value: '@Heyykrishnna', href: 'https://github.com/Heyykrishnna' },
              { label: 'Response', value: '< 24h', href: null },
              { label: 'Available', value: 'Q2 2026', href: null },
            ].map((item) => (
              <div
                key={item.label}
                className="py-6 px-6 bg-black"
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
                <div className="w-2 h-2 rounded-full bg-emerald-400 " />
                <p className="body-sm">Open to new projects for Q2 2026 onwards</p>
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
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
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
