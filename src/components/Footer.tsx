import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black-border bg-black">
      <div className="grid grid-cols-2 lg:grid-cols-4 border-b border-black-border">
        <div className="p-8 lg:p-10 border-r border-black-border flex flex-col gap-5">
          {[
            { label: 'Work', to: '/work' },
            { label: 'About', to: '/about' },
            { label: 'Journal', to: '/journal' },
            { label: 'Contact', to: '/contact' },
          ].map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="font-body text-[15px] text-cream-dim hover:text-cream transition-colors duration-300 w-fit"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="p-8 lg:p-10 lg:border-r border-black-border flex flex-col gap-5">
          {[
            { label: 'Instagram', href: 'https://instagram.com' },
            { label: 'Dribbble', href: 'https://dribbble.com' },
            { label: 'Twitter', href: 'https://twitter.com' },
            { label: 'LinkedIn', href: 'https://linkedin.com' },
          ].map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="font-body text-[15px] text-cream-dim hover:text-cream transition-colors duration-300 w-fit"
            >
              {s.label}
            </a>
          ))}
        </div>

        <div className="p-8 lg:p-10 border-t lg:border-t-0 border-r border-black-border flex flex-col justify-start gap-1">
          <p className="font-body text-[15px] text-cream-dim leading-relaxed">
            India · Remote
          </p>
          <p className="font-body text-[15px] text-cream-dim leading-relaxed opacity-40">
            Open to work worldwide
          </p>
        </div>

        <div className="p-8 lg:p-10 border-t lg:border-t-0 border-black-border flex flex-col justify-start gap-3">
          <a
            href="mailto:hi@Yatharth.com"
            className="font-body text-[15px] text-cream-dim hover:text-cream transition-colors duration-300 w-fit block"
          >
            hi@Yatharth.com
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="font-body text-[15px] text-cream-dim hover:text-cream transition-colors duration-300 w-fit block"
          >
            @Yatharth
          </a>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="grid grid-cols-[260px_1fr] border-b border-black-border min-h-[280px] lg:min-h-[380px]">
          <div className="border-r border-black-border relative flex flex-col justify-between p-8 lg:p-10">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
              <svg
                viewBox="0 0 200 280"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full opacity-20"
                preserveAspectRatio="xMidYMid meet"
              >
                <line x1="0" y1="140" x2="200" y2="0" stroke="#3a3a3a" strokeWidth="1" />
                <line x1="0" y1="140" x2="200" y2="280" stroke="#3a3a3a" strokeWidth="1" />
                <line x1="0" y1="70" x2="160" y2="0" stroke="#3a3a3a" strokeWidth="1" />
                <line x1="0" y1="210" x2="160" y2="280" stroke="#3a3a3a" strokeWidth="1" />
                <line x1="100" y1="0" x2="100" y2="280" stroke="#3a3a3a" strokeWidth="0.5" />
                <rect x="1" y="1" width="198" height="278" stroke="#2a2a2a" strokeWidth="0.5" />
              </svg>
            </div>
            <div />
            <p className="body-sm text-[12px] opacity-40 relative z-10">
              © Yatharth {year} — All rights reserved
            </p>
          </div>

          <div className="flex items-end pb-2 px-6 lg:px-8">
            <span
              className="font-display font-semibold text-cream select-none leading-[0.82]"
              style={{
                fontSize: 'clamp(120px, 18vw, 300px)',
                letterSpacing: '-0.04em',
                lineHeight: 0.82,
                whiteSpace: 'nowrap',
              }}
            >
              Yatharth
            </span>
          </div>
        </div>

        <div className="flex items-center justify-end px-8 lg:px-10 py-4">
          <span
            className="font-display text-cream-dim opacity-40 select-none"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1 }}
          >
            ®
          </span>
        </div>
      </div>
    </footer>
  );
}
