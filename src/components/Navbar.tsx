import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import FileTree from './FileTree';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [isFileTreeOpen, setIsFileTreeOpen] = useState(false);

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
          <div className="flex flex-col gap-4 mt-6">
            <Link to="/contact" className="btn-primary self-start">Get in touch</Link>
            <p className="body-sm">khandelwalyatharth39@gmail.com</p>
            <button
              onClick={() => setIsFileTreeOpen(true)}
              className="flex items-center gap-2 group self-start border border-white/10 bg-white/5 hover:bg-white/10 hover:border-gold/30 px-3 py-2 rounded-sm transition-all duration-300 mt-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cream-dim group-hover:text-gold transition-colors duration-300">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </button>
          </div>

      <AnimatePresence>
        {isFileTreeOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8"
            data-lenis-prevent
          >
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsFileTreeOpen(false)}
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[85vh] bg-[#0a0a0a] border border-black-border rounded-sm shadow-2xl flex flex-col overflow-hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-black-border bg-[#050505]">
                <div className="flex items-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9a87c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <h3 className="font-display font-medium text-cream text-lg tracking-wide">Project Source</h3>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 640 640"
                    fill="#c9a87c"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M451.5 160C434.9 160 418.8 164.5 404.7 172.7C388.9 156.7 370.5 143.3 350.2 133.2C378.4 109.2 414.3 96 451.5 96C537.9 96 608 166 608 252.5C608 294 591.5 333.8 562.2 363.1L491.1 434.2C461.8 463.5 422 480 380.5 480C294.1 480 224 410 224 323.5C224 322 224 320.5 224.1 319C224.6 301.3 239.3 287.4 257 287.9C274.7 288.4 288.6 303.1 288.1 320.8C288.1 321.7 288.1 322.6 288.1 323.4C288.1 374.5 329.5 415.9 380.6 415.9C405.1 415.9 428.6 406.2 446 388.8L517.1 317.7C534.4 300.4 544.2 276.8 544.2 252.3C544.2 201.2 502.8 159.8 451.7 159.8ZM307.2 237.3C305.3 236.5 303.4 235.4 301.7 234.2C289.1 227.7 274.7 224 259.6 224C235.1 224 211.6 233.7 194.2 251.1L123.1 322.2C105.8 339.5 96 363.1 96 387.6C96 438.7 137.4 480.1 188.5 480.1C205 480.1 221.1 475.7 235.2 467.5C251 483.5 269.4 496.9 289.8 507C261.6 530.9 225.8 544.2 188.5 544.2C102.1 544.2 32 474.2 32 387.7C32 346.2 48.5 306.4 77.8 277.1L148.9 206C178.2 176.7 218 160.2 259.5 160.2C346.1 160.2 416 230.8 416 317.1C416 318.4 416 319.7 416 321C415.6 338.7 400.9 352.6 383.2 352.2C365.5 351.8 351.6 337.1 352 319.4C352 318.6 352 317.9 352 317.1C352 283.4 334 253.8 307.2 237.5Z"/>
                  </svg>
                  <a href="https://github.com/Heyykrishnna/Portfolio-IMP" target="_blank" rel="noreferrer"><h3 className="font-display font-medium text-[#c9a87c] text-lg tracking-wide">GitHub</h3></a>
                </div>
                <button
                  onClick={() => setIsFileTreeOpen(false)}
                  className="p-1.5 text-cream-dim hover:text-gold transition-colors duration-300"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-6 scrollbar-custom">
                <FileTree />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
        </div>
      </div>
    </>
  );
}
