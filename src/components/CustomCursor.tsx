import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    let mouseX = 0, mouseY = 0;
    let curX = 0, curY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.to(dot, { x: mouseX - 4, y: mouseY - 4, duration: 0.08, ease: 'power2.out' });
    };

    const animate = () => {
      curX += (mouseX - curX) * 0.1;
      curY += (mouseY - curY) * 0.1;
      gsap.set(cursor, { x: curX - 20, y: curY - 20 });
      requestAnimationFrame(animate);
    };
    animate();

    const onEnterLink = () => {
      gsap.to(cursor, { scale: 2.5, opacity: 0.5, duration: 0.3, ease: 'power2.out' });
      gsap.to(dot, { scale: 0, duration: 0.2 });
    };
    const onLeaveLink = () => {
      gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3, ease: 'power2.out' });
      gsap.to(dot, { scale: 1, duration: 0.2 });
    };

    window.addEventListener('mousemove', onMove);

    const links = document.querySelectorAll('a, button');
    links.forEach(el => {
      el.addEventListener('mouseenter', onEnterLink);
      el.addEventListener('mouseleave', onLeaveLink);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      links.forEach(el => {
        el.removeEventListener('mouseenter', onEnterLink);
        el.removeEventListener('mouseleave', onLeaveLink);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-gold/60 pointer-events-none z-[9999] mix-blend-difference"
        style={{ transform: 'translate(-100px, -100px)' }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-gold pointer-events-none z-[9999]"
        style={{ transform: 'translate(-100px, -100px)' }}
      />
    </>
  );
}
