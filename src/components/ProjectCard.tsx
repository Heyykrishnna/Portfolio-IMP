import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';
import { PROJECT_IMAGES } from '../data/images';

interface Props {
  project: Project;
  index: number;
  variant?: 'default' | 'featured';
}

export default function ProjectCard({ project, index, variant = 'default' }: Props) {
  const isFeatured = variant === 'featured';
  const coverImage = PROJECT_IMAGES[project.slug]?.coverImage;

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block border border-black-border hover:border-gold/30 rounded-sm overflow-hidden bg-black transition-all duration-500 relative"
      style={{ transform: 'translateY(0)', transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1), border-color 0.4s' }}
      onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-8px)')}
      onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
      
      <div
        className={`relative overflow-hidden ${isFeatured ? 'h-[500px]' : 'h-[360px]'}`}
      >
        <div
          className="absolute inset-0 transition-transform duration-700"
          style={{
            background: project.bgGradient,
            transform: 'scale(1)',
            transition: 'transform 0.8s cubic-bezier(0.16,1,0.3,1)',
          }}
        />
        {coverImage && (
          <img
            src={coverImage}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
            style={{ transition: 'transform 0.8s cubic-bezier(0.16,1,0.3,1), opacity 0.5s' }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90 pointer-events-none" />

        <div
          className="absolute bottom-0 left-0 right-0 h-0.5 transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100 z-20"
          style={{ background: project.accentColor || '#c9a87c' }}
        />

        <div className="absolute top-6 left-6 z-20">
          <div className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
            <span className="text-[10px] font-medium uppercase tracking-widest text-cream">{project.category}</span>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 overflow-hidden z-20">
          <div className="transform translate-y-[120%] group-hover:translate-y-0 transition-transform duration-500 ease-out" style={{ transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }}>
            <div className="w-12 h-12 rounded-full bg-gold text-black flex items-center justify-center float-right shadow-[0_0_20px_rgba(201,168,124,0.3)]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 flex flex-col gap-4 relative z-10 bg-black-mid group-hover:bg-[#080808] transition-colors duration-500 border-t border-white/[0.02]">
        
        {/* Number overlapping the image slightly */}
        <div className="absolute -top-14 left-8 z-20 mix-blend-overlay pointer-events-none origin-bottom group-hover:scale-110 transition-transform duration-700 ease-out">
          <span className="font-display font-bold italic text-white/30" style={{ fontSize: '110px', lineHeight: 1, letterSpacing: '-0.05em' }}>
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <div className="pt-8 pb-8 flex flex-col gap-3">
          <div className="flex items-center justify-between relative z-10">
            <span className="text-[11px] font-mono tracking-widest text-gold opacity-90 uppercase">{project.category}</span>
            <span className="text-[10px] font-medium uppercase tracking-widest px-2 py-1 rounded border border-white/10 text-white/50 group-hover:text-gold group-hover:border-gold/30 transition-all">{project.year}</span>
          </div>
          <div className="relative z-10 mt-2">
            <h3
              className="font-display font-semibold text-cream group-hover:text-gold transition-colors duration-300 mb-3"
              style={{ fontSize: 'clamp(26px, 3vw, 36px)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
            >
              {project.title}
            </h3>
            <p className="body-sm line-clamp-2 opacity-60 group-hover:opacity-90 transition-opacity duration-300 max-w-[95%] font-light leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
