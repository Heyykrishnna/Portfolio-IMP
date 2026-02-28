import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const footer = document.querySelector('footer');
    if (footer) footer.style.display = 'none';

    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.to('.funny-text', {
        y: -15,
        rotation: () => gsap.utils.random(-3, 3),
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: {
          each: 0.1,
          from: 'random'
        }
      });
      
      const onMouseMove = (e: MouseEvent) => {
        if (!textRef.current) return;
        const x = (e.clientX / window.innerWidth - 0.5) * 60;
        const y = (e.clientY / window.innerHeight - 0.5) * 60;
        gsap.to(textRef.current, { x, y, duration: 1.5, ease: 'power2.out', rotationY: x / 5, rotationX: -y / 5 });
      };
      
      window.addEventListener('mousemove', onMouseMove);
      
      return () => window.removeEventListener('mousemove', onMouseMove);
    });

    return () => {
      if (footer) footer.style.display = '';
      ctx.revert();
    };
  }, []);

  return (
    <main className="min-h-[100dvh] flex items-center justify-center relative overflow-hidden bg-black text-cream">
      <div className="noise-overlay opacity-30" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(201,168,124,0.06) 0%, transparent 60%)' }} />
      
      <div className="funny-text absolute top-[20%] left-[15%] opacity-30 pointer-events-none hidden md:block">
        <p className="text-sm rotate-[-15deg] text-gold">where am I?</p>
      </div>
      <div className="funny-text absolute top-[30%] right-[15%] opacity-30 pointer-events-none hidden md:block">
        <p className="text-sm rotate-[10deg]">this is getting weird...</p>
      </div>
      <div className="funny-text absolute bottom-[25%] left-[20%] opacity-30 pointer-events-none hidden md:block">
        <p className="text-sm rotate-[5deg] text-red-400">send help</p>
      </div>
      <div className="funny-text absolute bottom-[35%] right-[25%] opacity-30 pointer-events-none hidden md:block">
        <p className="text-sm rotate-[-20deg]">it's dark here</p>
      </div>

      <div className="container-main text-center relative z-10" ref={containerRef} style={{ perspective: '1000px' }}>
        <p
          ref={textRef}
          className="font-display font-semibold select-none mb-4"
          style={{ 
            fontSize: 'clamp(140px, 28vw, 350px)', 
            letterSpacing: '-0.06em', 
            lineHeight: 1, 
            WebkitTextStroke: '2px #c9a87c', 
            color: 'transparent',
            textShadow: '0 0 30px rgba(201,168,124,0.15)',
            transformStyle: 'preserve-3d'
          }}
        >
          404
        </p>
        
        <h1 className="heading-md mt-6 mb-6 funny-text">Oops. You broke the internet.</h1>
        <p className="body-lg mb-12 max-w-lg mx-auto funny-text opacity-70">
          Just kidding. But you did wander completely off the map. There is literally nothing here but cold, dark pixels and a very lonely 404 error.
        </p>
        
        <div className="funny-text inline-block group">
          <Link to="/" className="btn-primary relative">
            <span className="relative z-10">Teleport to Safety</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
