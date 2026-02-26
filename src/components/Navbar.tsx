import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { label: 'Work', to: '/work' },
    { label: 'About', to: '/about' },
    { label: 'Journal', to: '/journal' },
    { label: 'Contact', to: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-500 border-b ${
        scrolled
          ? 'bg-black/90 border-black-border backdrop-blur-xl'
          : 'bg-transparent border-transparent'
      }`}>
        <div className="container-main flex items-center justify-between gap-6 w-full">
          <Link
            to="/"
            className="font-display text-xl font-semibold tracking-tighter text-cream hover:text-gold transition-colors duration-300 flex-shrink-0"
            style={{ letterSpacing: '-0.02em' }}
          >
            Yatharth
          </Link>

          <ul className="hidden md:flex items-center gap-9 list-none">
            {navLinks.map(link => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`relative text-[13px] font-medium tracking-btn uppercase transition-colors duration-300 group ${
                    isActive(link.to) ? 'text-cream' : 'text-cream-dim hover:text-cream'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                    isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3 ml-auto">
            <Link to="/contact" className="btn-primary !py-2.5 !px-6 !text-xs">
              Get in touch
            </Link>
          </div>

          <button
            className="md:hidden flex flex-col gap-[5px] w-8 p-1"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span className={`block w-full h-px bg-cream transition-transform duration-500 ${menuOpen ? 'translate-y-[6px] rotate-45' : ''}`} />
            <span className={`block w-full h-px bg-cream transition-all duration-500 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-full h-px bg-cream transition-transform duration-500 ${menuOpen ? '-translate-y-[6px] -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-40 bg-black flex flex-col justify-center px-8 transition-all duration-500 ${
        menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-x-full'
      }`}>
        <div className="pt-[72px] flex flex-col gap-12">
          <ul className="list-none flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <li
                key={link.to}
                className="transition-all duration-300"
                style={{ opacity: menuOpen ? 1 : 0, transform: menuOpen ? 'translateX(0)' : 'translateX(20px)', transitionDelay: `${i * 60}ms` }}
              >
                <Link
                  to={link.to}
                  className="flex items-center gap-4 font-display font-semibold text-cream hover:text-gold transition-colors duration-300 py-3 border-b border-black-border"
                  style={{ fontSize: 'clamp(36px, 10vw, 64px)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
                >
                  <span className="font-body text-[13px] font-normal text-cream-dim tracking-btn uppercase">0{i + 1}</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4">
            <Link to="/contact" className="btn-primary self-start">Get in touch</Link>
            <p className="body-sm">khandelwalyatharth39@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
