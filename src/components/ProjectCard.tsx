import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';

interface Props {
  project: Project;
  index: number;
  variant?: 'default' | 'featured';
}

export default function ProjectCard({ project, index, variant = 'default' }: Props) {
  const isFeatured = variant === 'featured';

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block border border-black-border hover:border-gray-mid rounded-sm overflow-hidden bg-black-mid transition-all duration-500"
      style={{ transform: 'translateY(0)', transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1), border-color 0.4s' }}
      onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-8px)')}
      onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
    >
      <div
        className={`relative overflow-hidden ${isFeatured ? 'h-[420px]' : 'h-[280px]'}`}
      >
        <div
          className="absolute inset-0 transition-transform duration-700"
          style={{
            background: project.bgGradient,
            transform: 'scale(1)',
            transition: 'transform 0.8s cubic-bezier(0.16,1,0.3,1)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />

        <div
          className="absolute bottom-0 left-0 right-0 h-0.5 transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100"
          style={{ background: project.accentColor }}
        />

        <div className="absolute top-5 left-5">
          <span className="tag">{project.category}</span>
        </div>

        <div className="absolute bottom-5 right-5">
          <span className="font-display text-5xl font-semibold text-stroke opacity-30">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
      </div>

      <div className="p-7 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="tag">{project.year}</span>
        </div>
        <h3
          className="font-display font-semibold text-cream group-hover:text-gold transition-colors duration-300"
          style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', letterSpacing: '-0.015em', lineHeight: 1.1 }}
        >
          {project.title}
        </h3>
        <p className="body-sm line-clamp-2">{project.description}</p>
        <span className="arrow-link mt-2">Explore More</span>
      </div>
    </Link>
  );
}
