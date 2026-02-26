import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import MarqueeText from '../components/MarqueeText';
import ContactForm from '../components/ContactForm';
import HeroCursorGlow from '../components/HeroCursorGlow';

export default function About() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const services = [
    {
      num: '01',
      title: 'Strategy',
      desc: 'Data-informed thinking meets creative vision. I define brand positioning, audience personas, and content hierarchies that make every design decision purposeful.',
    },
    {
      num: '02',
      title: 'Web Design',
      desc: 'From wireframes to polished interfaces, I craft digital experiences with obsessive attention to typography, spacing, motion, and interaction.',
    },
    {
      num: '03',
      title: 'Branding',
      desc: 'Identity systems that go beyond a logo. Comprehensive visual languages built to work across every touchpoint — digital, print, and beyond.',
    },
  ];

  const milestones = [
    { num: '3+', label: 'Years of Experience', sub: 'Extensive industry expertise across creative disciplines.' },
    { num: '25+', label: 'Projects Completed', sub: 'Each delivered with precision and intentionality.' },
    { num: '100%', label: 'Client Satisfaction', sub: 'Every client engagement ends with a delighted partner.' },
    { num: '∞', label: 'Creative Drive', sub: 'Relentless passion for craft, never settling for good enough.' },
  ];

  return (
    <main>
      <section className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden border-b border-black-border">
        <div className="hero-bg-placeholder" />
        <div className="noise-overlay" />
        <HeroCursorGlow size={650} intensity={0.14} />

        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 50% 70% at 15% 60%, rgba(201,168,124,0.09) 0%, transparent 65%)' }} />

        <div className="absolute inset-0 grid grid-cols-3 pointer-events-none">
          {[0,1,2].map(i => (
            <div key={i} className="border-r border-black-border h-full opacity-30" />
          ))}
        </div>

        <div
          className="absolute top-[72px] right-10 font-display font-semibold leading-none select-none pointer-events-none hidden lg:flex flex-col items-end gap-1"
          style={{ WebkitTextStroke: '1px #1e1e1e', color: 'transparent', fontSize: 'clamp(80px, 13vw, 200px)', letterSpacing: '-0.05em' }}
        >
          <span>US</span>
          <span className="text-gold opacity-20" style={{ WebkitTextStroke: '1px rgba(201,168,124,0.3)' }}>.25</span>
        </div>

        <div className="absolute left-[33.33%] top-[72px] bottom-0 pointer-events-none hidden lg:flex flex-col items-center gap-3 pt-16 overflow-hidden">
          <div className="w-px flex-1 bg-gradient-to-b from-transparent via-black-border to-transparent opacity-60" />
        </div>

        <div className="container-main relative z-10 pb-16">
          <div className="mb-14" style={{ animation: 'revealIn 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s forwards', opacity: 0 }}>
            <span className="tag block mb-7">about Us.25</span>
            <h1 className="heading-xl max-w-3xl">
              About
            </h1>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-3 border-t border-black-border"
            style={{ animation: 'revealIn 0.9s cubic-bezier(0.16,1,0.3,1) 0.4s forwards', opacity: 0 }}
          >
            <div className="sm:border-r border-black-border pt-6 pr-8 pb-6">
              <p className="tag mb-2">Role</p>
              <p className="text-lg font-medium text-cream" style={{ letterSpacing: '-0.01em' }}>Designer & Developer</p>
            </div>
            <div className="sm:border-r border-black-border sm:px-8 pt-6 pb-6">
              <p className="tag mb-2">Based in</p>
              <p className="text-lg font-medium text-cream" style={{ letterSpacing: '-0.01em' }}>India · Remote</p>
            </div>
            <div className="sm:pl-8 pt-6 pb-6">
              <p className="tag mb-2">Focus</p>
              <p className="text-lg font-medium text-cream">A solo designer who believes great design is both art and strategy.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad border-b border-black-border">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <RevealOnScroll>
              <span className="tag block mb-5">My Story</span>
              <h2 className="heading-md mb-8">
                Designs that don't just look stunning —
                <span className="text-gold italic"> they create impact.</span>
              </h2>
              <div className="flex flex-col gap-5">
                <p className="body-lg">
                  At Yatharth, I craft designs that don't just look stunning — they create impact. Blending creativity with strategy, I transform ideas into immersive digital experiences that captivate, engage, and convert.
                </p>
                <p className="body-lg">
                  I collaborate with forward-thinking brands, startups, and industry leaders who dare to challenge the norm. Every project is an opportunity to push boundaries, challenge conventions, and create something that truly resonates.
                </p>
              </div>
              <div className="mt-10">
                <Link to="/work" className="btn-primary">View My Work</Link>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={150}>
              <div className="relative">
                <div
                  className="w-full aspect-[4/5] rounded-sm"
                  style={{ background: 'linear-gradient(135deg, #0f0f0f 0%, #1e1710 50%, #0f0f0f 100%)' }}
                />
                <div className="absolute -bottom-6 -right-6 p-6 bg-black border border-black-border rounded-sm">
                  <p className="font-display text-5xl font-semibold text-gold" style={{ letterSpacing: '-0.03em' }}>3+</p>
                  <p className="body-sm mt-1">Years crafting<br />digital excellence</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="py-5 border-b border-black-border">
        <MarqueeText text="Strategy · Design · Branding" speed={35} separator="" />
      </section>

      <section className="section-pad border-b border-black-border">
        <div className="container-main">
          <RevealOnScroll>
            <span className="tag block mb-5">Services</span>
            <h2 className="heading-lg mb-16">What I do</h2>
          </RevealOnScroll>
          <div className="flex flex-col">
            {services.map((s, i) => (
              <RevealOnScroll key={s.num} delay={i * 100}>
                <div className="grid grid-cols-1 md:grid-cols-[120px_1fr_1fr] gap-8 py-10 border-b border-black-border group">
                  <span className="body-sm opacity-40 font-mono pt-1">{s.num}</span>
                  <h3
                    className="font-display font-semibold text-cream group-hover:text-gold transition-colors duration-300"
                    style={{ fontSize: 'clamp(24px, 3vw, 40px)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
                  >
                    {s.title}
                  </h3>
                  <p className="body-lg">{s.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-b border-black-border">
        <div className="container-main">
          <RevealOnScroll>
            <span className="tag block mb-5">Milestones</span>
            <h2 className="heading-lg mb-16">By the numbers</h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black-border border border-black-border rounded-sm overflow-hidden">
            {milestones.map((m, i) => (
              <RevealOnScroll key={m.label} delay={i * 80}>
                <div className="bg-black p-10 hover:bg-black-mid transition-colors duration-400 h-full">
                  <p className="font-display text-6xl font-semibold text-gold mb-3" style={{ letterSpacing: '-0.03em' }}>{m.num}</p>
                  <p className="font-body text-[13px] font-semibold tracking-btn uppercase text-cream mb-2">{m.label}</p>
                  <p className="body-sm text-[13px]">{m.sub}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <RevealOnScroll>
              <span className="tag block mb-5">Get in touch</span>
              <h2 className="heading-lg mb-6">Let's create something exceptional.</h2>
              <p className="body-lg mb-10">Have a project in mind? Let's talk. I'm always open to new collaborations.</p>
              <a href="mailto:hi@Yatharth.com" className="btn-primary">hi@Yatharth.com</a>
            </RevealOnScroll>
            <RevealOnScroll delay={150}>
              <ContactForm />
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </main>
  );
}
