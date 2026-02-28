import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface GradientBlindsProps {
  imageSrc?: string;
  numBlinds?: number;
  className?: string;
}

export default function GradientBlinds({
  imageSrc,
  numBlinds = 14,
  className = '',
}: GradientBlindsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const blindsRef = useRef<HTMLDivElement[]>([]);
  const mouse = useRef({ x: 0.5, y: 0.5 });
  const rafId = useRef<number>(0);
  const [effectiveBlinds, setEffectiveBlinds] = useState(numBlinds);

  useEffect(() => {
    const handleResize = () => {
      setEffectiveBlinds(window.innerWidth < 768 ? Math.max(4, Math.floor(numBlinds / 2)) : numBlinds);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [numBlinds]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const blinds = blindsRef.current.slice(0, effectiveBlinds).filter(Boolean);

    gsap.set(blinds, {
      transformOrigin: 'center center',
      scaleX: 1,
      skewX: 0,
      rotateX: 0,
    });

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.current.x = (e.clientX - rect.left) / rect.width;
      mouse.current.y = (e.clientY - rect.top) / rect.height;
    };

    const onMouseLeave = () => {
      gsap.to(mouse, {
        duration: 1.5,
        ease: 'power2.out',
        onUpdate: () => {
          mouse.current.x += (0.5 - mouse.current.x) * 0.05;
          mouse.current.y += (0.5 - mouse.current.y) * 0.05;
        },
      });
    };

    const tick = () => {
      const { x, y } = mouse.current;

      blinds.forEach((blind, i) => {
        const blindPos = i / (effectiveBlinds - 1) || 0;
        const distFromCursor = Math.abs(blindPos - x);
        const proximity = Math.max(0, 1 - distFromCursor * 2.5);

        const targetSkew = (blindPos - x) * -18 * proximity;
        const targetBrightness = 0.6 + proximity * 0.9;
        const targetScaleX = 1 + proximity * 0.06;
        const targetY = (y - 0.5) * -30 * proximity;

        gsap.to(blind, {
          skewX: targetSkew,
          scaleX: targetScaleX,
          y: targetY,
          duration: 0.6,
          ease: 'power2.out',
          overwrite: 'auto',
        });

        const hue = 25 + proximity * 15;
        const sat = 30 + proximity * 50;
        const lum = 8 + proximity * 18;
        blind.style.background = `hsl(${hue}, ${sat}%, ${lum}%)`;
        blind.style.filter = `brightness(${targetBrightness})`;
      });

      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);
    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(rafId.current);
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [effectiveBlinds]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{ perspective: '800px' }}
    >
      <div className="absolute inset-0 flex" style={{ transformStyle: 'preserve-3d' }}>
        {Array.from({ length: effectiveBlinds }).map((_, i) => (
          <div
            key={i}
            ref={el => { if (el) blindsRef.current[i] = el; }}
            className="h-full flex-1 will-change-transform"
            style={{
              background: `hsl(${25 + (i / effectiveBlinds) * 10}, 30%, ${8 + (i / effectiveBlinds) * 6}%)`,
              transformOrigin: 'center center',
              transition: 'background 0.4s ease',
            }}
          />
        ))}
      </div>

      {imageSrc && (
        <img
          src={imageSrc}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          style={{ mixBlendMode: 'color-dodge', opacity: 0.18 }}
        />
      )}

      {imageSrc && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'overlay',
            opacity: 0.25,
          }}
        />
      )}

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(8,8,8,0.15) 0%, rgba(8,8,8,0.0) 25%, rgba(8,8,8,0.65) 75%, rgba(8,8,8,1) 100%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, rgba(8,8,8,0.5) 100%)',
        }}
      />
    </div>
  );
}
