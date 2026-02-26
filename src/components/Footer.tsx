import { Link } from 'react-router-dom';
import MarqueeText from './MarqueeText';

export default function Footer() {
  const year = new Date().getFullYear();

  const navLinks = [
    { label: 'Work', to: '/work' },
    { label: 'About', to: '/about' },
    { label: 'Journal', to: '/journal' },
    { label: 'Contact', to: '/contact' },
  ];

  const socialLinks = [
    { label: 'Twitter', href: 'https://twitter.com', handle: '@yathrth' },
    { label: 'LinkedIn', href: 'https://linkedin.com', handle: 'Yathrth' },
    { label: 'Dribbble', href: 'https://dribbble.com', handle: 'yathrth' },
  ];

  const projects = [
    { label: 'Elysiar', to: '/projects/elysiar' },
    { label: 'Revox Forms', to: '/projects/revox-forms' },
    { label: 'Every Second', to: '/projects/every-second' },
    { label: 'Timeless Mastery', to: '/projects/timeless-mastery' },
  ];

  return (
    <footer className="border-t border-black-border">
      <div className="py-3 border-b border-black-border overflow-hidden">
        <MarqueeText text="Available for new projects" speed={40} separator="·" />
      </div>

      <div className="container-main pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-14 mb-16">
          <div>
            <Link
              to="/"
              className="font-display text-[42px] font-semibold text-cream hover:text-gold transition-colors duration-300 block mb-6 leading-none"
              style={{ letterSpacing: '-0.03em' }}
            >
              Yathrth
            </Link>
            <p className="body-sm leading-relaxed max-w-[260px] mb-8">
              Crafting digital experiences that go beyond aesthetics — creating real, lasting impact through design and strategy.
            </p>
            <a
              href="mailto:hi@yathrth.com"
              className="inline-flex items-center gap-2 font-display text-[15px] font-medium text-gold hover:text-gold-light transition-colors duration-300"
              style={{ letterSpacing: '-0.01em' }}
            >
              hi@yathrth.com
              <span className="text-base">→</span>
            </a>
          </div>

          <div>
            <p className="tag mb-6">Navigation</p>
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group flex items-center gap-3 text-[14px] text-cream-dim hover:text-cream transition-colors duration-300"
                  >
                    <span className="w-0 h-px bg-gold transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="tag mb-6">Projects</p>
            <ul className="list-none flex flex-col gap-4">
              {projects.map(p => (
                <li key={p.to}>
                  <Link
                    to={p.to}
                    className="group flex items-center gap-3 text-[14px] text-cream-dim hover:text-cream transition-colors duration-300"
                  >
                    <span className="w-0 h-px bg-gold transition-all duration-300 group-hover:w-4" />
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="tag mb-6">Connect</p>
            <ul className="list-none flex flex-col gap-4">
              {socialLinks.map(s => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-0 h-px bg-gold transition-all duration-300 group-hover:w-4" />
                      <span className="text-[14px] text-cream-dim group-hover:text-cream transition-colors duration-300">
                        {s.label}
                      </span>
                    </div>
                    <span className="text-[12px] text-cream-dim opacity-40 group-hover:opacity-80 transition-opacity duration-300 font-mono">
                      {s.handle}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-10 p-5 border border-black-border rounded-sm bg-black-mid">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-[11px] font-semibold tracking-btn uppercase text-emerald-400">Available</p>
              </div>
              <p className="body-sm text-[12px]">Open to projects for Q2 2025</p>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-black-border mb-8" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <p className="body-sm opacity-40">{year} Yathrth</p>
            <span className="w-1 h-1 rounded-full bg-black-border" />
            <p className="body-sm opacity-40">All rights reserved</p>
          </div>
          <div className="flex items-center gap-6">
            <p className="body-sm opacity-30 text-[12px]">Designed & built with intention.</p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gold opacity-60" />
              <p className="body-sm opacity-30 text-[12px]">Tailwind · GSAP · React</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
