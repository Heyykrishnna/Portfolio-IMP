import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { SERVICE_IMAGES } from '../data/images';

interface Service {
  num: string;
  title: string;
  desc: string;
  image: string;
  tag: string;
}

const SERVICES: Service[] = [
  {
    num: '01',
    title: 'Event Management',
    desc: 'I organize and execute events that leave a lasting impression. From intimate gatherings to large-scale conferences, I handle every detail to ensure a seamless and memorable experience for attendees.',
    image: SERVICE_IMAGES.management,
    tag: 'Management',
  },
  {
    num: '02',
    title: 'Web Design',
    desc: 'From wireframes to polished interfaces, I craft digital experiences with obsessive attention to typography, spacing, motion, and interaction.',
    image: SERVICE_IMAGES.webDesign,
    tag: 'Digital Product',
  },
  {
    num: '03',
    title: 'Branding',
    desc: 'Identity systems that go beyond a logo. Comprehensive visual languages built to work across every touchpoint — digital, print, and beyond.',
    image: SERVICE_IMAGES.branding,
    tag: 'Identity Systems',
  },
  {
    num: '04',
    title: 'UI/UX Design',
    desc: 'User-centered interfaces designed through research, usability testing, and behavioral insights to create seamless and intuitive digital journeys.',
    image: SERVICE_IMAGES.uiux,
    tag: 'Experience Design',
  },
  {
    num: '05',
    title: 'Team Leadership',
    desc: 'Leading cross-functional teams with clarity and collaboration — aligning designers, developers, and stakeholders toward a shared product vision.',
    image: SERVICE_IMAGES.teamLead,
    tag: 'Management',
  },
  {
    num: '06',
    title: 'Creative Direction',
    desc: 'Defining visual narratives and guiding design execution to maintain consistency, innovation, and strong brand storytelling.',
    image: SERVICE_IMAGES.creativeDirection,
    tag: 'Art Direction',
  },
];

function ServiceRow({
  service,
  index,
  isActive,
  setActiveId,
  isMobile,
  isAnyActive,
}: {
  service: Service;
  index: number;
  isActive: boolean;
  setActiveId: (id: string | null) => void;
  isMobile: boolean;
  isAnyActive: boolean;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const isDimmed = isAnyActive && !isActive;

  useEffect(() => {
    if (!isMobile) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActiveId(service.num);
      },
      { threshold: 0.6 }
    );
    if (rowRef.current) observer.observe(rowRef.current);
    return () => observer.disconnect();
  }, [isMobile, service.num, setActiveId]);

  return (
    <motion.div
      ref={rowRef}
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: isDimmed ? 0.25 : 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      onMouseEnter={() => !isMobile && setActiveId(service.num)}
      onMouseLeave={() => !isMobile && setActiveId(null)}
      className="group relative border-t border-black-border last:border-b cursor-default"
    >
      <motion.div
        animate={{ backgroundColor: isActive ? 'rgba(201,168,124,0.03)' : 'transparent' }}
        transition={{ duration: 0.3 }}
        className="relative z-10 grid grid-cols-1 md:grid-cols-[80px_1fr_auto_200px] gap-6 md:gap-10 py-8 md:py-10 items-center transition-all duration-500 px-0 md:px-2"
      >
        <motion.span
          animate={{ opacity: isActive ? 1 : 0.3 }}
          transition={{ duration: 0.3 }}
          className="font-mono text-[11px] text-gold hidden md:block"
        >
          {service.num}
        </motion.span>

        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-3 md:hidden mb-1">
            <span className="font-mono text-[10px] text-gold">{service.num}</span>
            <span className="text-[9px] font-medium uppercase tracking-widest text-cream-dim opacity-50 border border-black-border px-2 py-0.5 rounded-sm">
              {service.tag}
            </span>
          </div>
          <motion.h3
            animate={{
              x: isActive ? 6 : 0,
              color: isActive ? '#c9a87c' : '#e8e0d4',
            }}
            transition={{ duration: 0.3 }}
            className="font-display font-semibold transition-colors duration-300"
            style={{
              fontSize: 'clamp(22px, 2.8vw, 38px)',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            {service.title}
          </motion.h3>
        </div>

        <motion.span
          animate={{ opacity: isActive ? 0.8 : 0 }}
          transition={{ duration: 0.2 }}
          className="hidden md:block text-[10px] font-medium uppercase tracking-widest text-cream-dim border border-black-border px-3 py-1 rounded-sm whitespace-nowrap"
        >
          {service.tag}
        </motion.span>

        <motion.p
          animate={{ opacity: isActive ? 1 : 0.45 }}
          transition={{ duration: 0.3 }}
          className="body-sm text-[13px] leading-relaxed"
        >
          {service.desc}
        </motion.p>
      </motion.div>

      <AnimatePresence>
        {isMobile && isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8">
              <div className="relative w-full aspect-video rounded-sm overflow-hidden border border-black-border">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <p className="absolute bottom-4 left-4 text-xs uppercase tracking-widest text-cream opacity-80">
                  {service.title}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function KineticServices() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springCfg = { damping: 28, stiffness: 400, mass: 0.15 };
  const cursorX = useSpring(mouseX, springCfg);
  const cursorY = useSpring(mouseY, springCfg);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    mouseX.set(e.clientX + 24);
    mouseY.set(e.clientY + 24);
  };

  const activeService = SERVICES.find(s => s.num === activeId);

  return (
    <div className="relative w-full" onMouseMove={handleMouseMove}>
      <div className="flex flex-col">
        {SERVICES.map((s, i) => (
          <ServiceRow
            key={s.num}
            service={s}
            index={i}
            isActive={activeId === s.num}
            setActiveId={setActiveId}
            isMobile={isMobile}
            isAnyActive={activeId !== null}
          />
        ))}
      </div>

      {!isMobile && (
        <motion.div
          style={{ x: cursorX, y: cursorY }}
          className="pointer-events-none fixed left-0 top-0 z-[999] hidden md:block"
        >
          <AnimatePresence mode="wait">
            {activeId && activeService && (
              <motion.div
                key={activeId}
                initial={{ opacity: 0, scale: 0.85, filter: 'blur(4px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.9, filter: 'blur(4px)' }}
                transition={{ duration: 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-60 w-80 overflow-hidden rounded-sm border border-white/10 shadow-2xl"
              >
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 flex flex-col gap-1">
                  <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-gold/70">
                    {activeService.tag}
                  </span>
                  <span className="text-[13px] font-display font-semibold text-cream" style={{ letterSpacing: '-0.01em' }}>
                    {activeService.title}
                  </span>
                </div>
                <div className="absolute inset-0 rounded-sm ring-1 ring-gold/15 pointer-events-none" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
