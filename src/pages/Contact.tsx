import { useEffect, useRef } from 'react';
import RevealOnScroll from '../components/RevealOnScroll';
import ContactForm from '../components/ContactForm';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.contact-reveal').forEach((el, i) => {
        gsap.fromTo(el,
          { y: 50, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.9, delay: i * 0.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const contactItems = [
    { label: 'Email', value: 'hi@yathrth.com', href: 'mailto:hi@yathrth.com', sub: 'Fastest response' },
    { label: 'Twitter', value: '@yathrth', href: 'https://twitter.com', sub: 'For quick chats' },
    { label: 'LinkedIn', value: 'Yathrth', href: 'https://linkedin.com', sub: 'Professional network' },
    { label: 'Dribbble', value: 'yathrth', href: 'https://dribbble.com', sub: 'Design showcase' },
  ];

  return (
    <main>
      <section
        ref={heroRef}
        className="relative min-h-[65vh] flex items-end pb-24 overflow-hidden border-b border-black-border"
      >
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #080808 0%, #0f0b07 40%, #1a1208 70%, #080808 100%)' }} />
        <div className="noise-overlay" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 70% at 50% 60%, rgba(201,168,124,0.1) 0%, transparent 70%)' }} />

        <div className="container-main relative z-10">
          <p className="tag block mb-5" style={{ animation: 'revealIn 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s forwards', opacity: 0 }}>
            contact Us.25
          </p>
          <h1
            className="heading-xl mb-6"
            style={{ animation: 'revealIn 1s cubic-bezier(0.16,1,0.3,1) 0.3s forwards', opacity: 0 }}
          >
            Let's create
            <br />
            <em className="not-italic text-gold">together.</em>
          </h1>
          <p
            className="body-lg max-w-lg"
            style={{ animation: 'revealIn 1s cubic-bezier(0.16,1,0.3,1) 0.5s forwards', opacity: 0 }}
          >
            Have a project in mind? Whether you're launching a brand, designing a product, or elevating your digital presence — I'm here.
          </p>
        </div>

        <div className="absolute bottom-8 right-8 hidden lg:flex items-center gap-3 opacity-30">
          <div className="w-8 h-px bg-cream" />
          <p className="body-sm text-xs tracking-[0.2em] uppercase">Scroll</p>
        </div>
      </section>

      <section className="section-pad border-b border-black-border">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-24">
            <div className="flex flex-col gap-12">
              <RevealOnScroll>
                <h2 className="heading-md mb-3">
                  Start a conversation.
                </h2>
                <p className="body-lg">
                  Every great project starts with a single conversation. Reach out through any channel — I typically respond within 24 hours.
                </p>
              </RevealOnScroll>

              <div className="flex flex-col">
                {contactItems.map((item, i) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="contact-reveal group flex items-center justify-between py-5 border-b border-black-border hover:border-gold/30 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-8 h-8 rounded-sm border border-black-border group-hover:border-gold/50 flex items-center justify-center transition-all duration-300">
                        <span className="text-[10px] font-mono text-cream-dim group-hover:text-gold transition-colors duration-300">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <div>
                        <p className="text-[13px] font-semibold tracking-btn uppercase text-cream-dim group-hover:text-gold transition-colors duration-300 mb-0.5">{item.label}</p>
                        <p className="text-[12px] text-cream-dim opacity-40">{item.sub}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-display text-[16px] font-medium text-cream group-hover:text-gold transition-colors duration-300" style={{ letterSpacing: '-0.01em' }}>
                        {item.value}
                      </span>
                      <span className="text-cream-dim group-hover:text-gold transition-all duration-300 group-hover:translate-x-1 inline-block">→</span>
                    </div>
                  </a>
                ))}
              </div>

              <div className="contact-reveal grid grid-cols-2 gap-4">
                <div className="p-6 border border-black-border rounded-sm bg-black-mid hover:bg-black-soft transition-all duration-400">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <p className="text-[11px] font-semibold tracking-btn uppercase text-emerald-400">Available Now</p>
                  </div>
                  <p className="font-display text-lg font-semibold text-cream mb-1" style={{ letterSpacing: '-0.01em' }}>Open for Projects</p>
                  <p className="body-sm text-[12px]">Accepting work for Q2 2025 onwards.</p>
                </div>
                <div className="p-6 border border-black-border rounded-sm bg-black-mid hover:bg-black-soft transition-all duration-400">
                  <p className="tag mb-3">Response Time</p>
                  <p className="font-display text-4xl font-semibold text-gold mb-1" style={{ letterSpacing: '-0.03em' }}>24h</p>
                  <p className="body-sm text-[12px]">Average reply turnaround.</p>
                </div>
              </div>
            </div>

            <RevealOnScroll delay={100}>
              <div className="sticky top-28">
                <div className="p-8 border border-black-border rounded-sm bg-black-mid/50">
                  <p className="tag mb-2">Send a message</p>
                  <h3 className="heading-sm mb-8" style={{ fontSize: 'clamp(18px, 2vw, 26px)' }}>
                    Tell me about your project.
                  </h3>
                  <ContactForm />
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-black-border">
        <div className="container-main">
          <RevealOnScroll>
            <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-10 p-12 border border-black-border rounded-sm relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #0f0f0f 0%, #141008 100%)' }}
            >
              <div className="absolute inset-0 pointer-events-none opacity-5"
                style={{ background: 'radial-gradient(ellipse 80% 80% at 0% 100%, rgba(201,168,124,0.8) 0%, transparent 70%)' }} />
              <div className="relative z-10">
                <p className="tag mb-4">Ready to start?</p>
                <h2 className="heading-md max-w-lg">
                  Got a vision?
                  <span className="text-gold italic"> Let's build it.</span>
                </h2>
                <p className="body-lg mt-4 max-w-md">
                  From concept to launch — every pixel intentional, every interaction purposeful.
                </p>
              </div>
              <a href="mailto:hi@yathrth.com" className="btn-primary relative z-10 flex-shrink-0 !py-5 !px-12 text-base">
                Start a Project
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}
