import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface HeroCursorGlowProps {
  color?: string;
  size?: number;
  intensity?: number;
}

export default function HeroCursorGlow({
  color = '201,168,124',
  size = 600,
  intensity = 0.13,
}: HeroCursorGlowProps) {
  const glowRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    const container = containerRef.current?.parentElement;
    if (!glow || !container) return;

    gsap.set(glow, { x: -size / 2, y: -size / 2, opacity: 0 });

    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(glow, {
        x: x - size / 2,
        y: y - size / 2,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    const onLeave = () => {
      gsap.to(glow, {
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      });
    };

    container.addEventListener('mousemove', onMove);
    container.addEventListener('mouseleave', onLeave);

    return () => {
      container.removeEventListener('mousemove', onMove);
      container.removeEventListener('mouseleave', onLeave);
    };
  }, [size]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        ref={glowRef}
        className="absolute rounded-full pointer-events-none"
        style={{
          width: size,
          height: size,
          background: `radial-gradient(circle, rgba(${color},${intensity}) 0%, rgba(${color},${intensity * 0.4}) 40%, transparent 70%)`,
          filter: 'blur(40px)',
          mixBlendMode: 'screen',
          willChange: 'transform, opacity',
        }}
      />
    </div>
  );
}
