import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { SERVICE_IMAGES } from '../data/images';

interface Service {
  num: string;
  title: string;
  desc: string;
  image: string;
}

const SERVICES: Service[] = [
  {
    num: '01',
    title: 'Strategy',
    desc: 'Data-informed thinking meets creative vision. I define brand positioning, audience personas, and content hierarchies that make every design decision purposeful.',
    image: SERVICE_IMAGES.strategy,
  },
  {
    num: '02',
    title: 'Web Design',
    desc: 'From wireframes to polished interfaces, I craft digital experiences with obsessive attention to typography, spacing, motion, and interaction.',
    image: SERVICE_IMAGES.webDesign,
  },
  {
    num: '03',
    title: 'Branding',
    desc: 'Identity systems that go beyond a logo. Comprehensive visual languages built to work across every touchpoint — digital, print, and beyond.',
    image: SERVICE_IMAGES.branding,
  },
  {
    num: '04',
    title: 'UI/UX Design',
    desc: 'User-centered interfaces designed through research, usability testing, and behavioral insights to create seamless and intuitive digital journeys.',
    image: SERVICE_IMAGES.uiux,
  },
  {
  num: '05',
  title: 'Team Leadership',
  desc: 'Leading cross-functional teams with clarity and collaboration — aligning designers, developers, and stakeholders toward a shared product vision.',
  image: SERVICE_IMAGES.teamLead,
},
{
  num: '06',
  title: 'Creative Direction',
  desc: 'Defining visual narratives and guiding design execution to maintain consistency, innovation, and strong brand storytelling.',
  image: SERVICE_IMAGES.creativeDirection,
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

  // Scroll-based activation: when row enters viewport center, mark it active
  useEffect(() => {
    if (!isMobile) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveId(service.num);
        }
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
      animate={{
        opacity: isDimmed ? 0.3 : 1,
        y: 0,
      }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseEnter={() => !isMobile && setActiveId(service.num)}
      onMouseLeave={() => !isMobile && setActiveId(null)}
      className="group relative border-t border-black-border last:border-b cursor-default"
    >
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-[120px_1fr_1fr] gap-8 py-10 transition-all duration-500">
        <motion.span
          animate={{ opacity: isActive ? 1 : 0.35 }}
          transition={{ duration: 0.3 }}
          className="body-sm font-mono pt-1 text-gold"
        >
          {service.num}
        </motion.span>

        <motion.h3
          animate={{
            x: isActive ? 8 : 0,
            color: isActive ? '#c9a87c' : '#e8e0d4',
          }}
          transition={{ duration: 0.35 }}
          className="font-display font-semibold transition-colors duration-300"
          style={{
            fontSize: 'clamp(24px, 3vw, 40px)',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
          }}
        >
          {service.title}
        </motion.h3>

        <motion.p
          animate={{ opacity: isActive ? 1 : 0.6 }}
          transition={{ duration: 0.3 }}
          className="body-lg"
        >
          {service.desc}
        </motion.p>
      </div>

      {/* Mobile Inline Image (accordion) */}
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

  return (
    <div
      className="relative w-full"
      onMouseMove={handleMouseMove}
    >
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
            {activeId && (
              <motion.div
                key={activeId}
                initial={{ opacity: 0, scale: 0.85, filter: 'blur(4px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.9, filter: 'blur(4px)' }}
                transition={{ duration: 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-60 w-80 overflow-hidden rounded-sm border border-white/10 shadow-2xl"
              >
                <img
                  src={SERVICES.find((s) => s.num === activeId)?.image}
                  alt="Preview"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold/80">
                    {SERVICES.find((s) => s.num === activeId)?.title}
                  </p>
                </div>
                <div className="absolute inset-0 rounded-sm ring-1 ring-gold/20 pointer-events-none" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
