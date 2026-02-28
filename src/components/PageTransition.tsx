import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitioning(true);
      
      setTimeout(() => {
        setDisplayLocation(location);
        window.scrollTo(0, 0);
      }, 700);
      
      setTimeout(() => {
        setTransitioning(false);
      }, 1400);
    }
  }, [location, displayLocation.pathname]);

  return (
    <>
      <AnimatePresence>
        {transitioning && (
          <motion.div
            key="page-transition-overlay"
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-black-true flex items-center justify-center pointer-events-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' }}
              className="relative text-gold font-display font-semibold tracking-tighter mix-blend-difference"
              style={{ fontSize: 'clamp(100px, 20vw, 240px)', letterSpacing: '-0.06em', lineHeight: 1 }}
            >
              YK
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={transitioning ? 'pointer-events-none' : ''}>
        <div key={displayLocation.pathname}>
          {children}
        </div>
      </div>
    </>
  );
}
