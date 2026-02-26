import { Link } from 'react-router-dom';
import type { JournalPost } from '../data/journal';

interface Props {
  post: JournalPost;
}

export default function JournalCard({ post }: Props) {
  return (
    <Link
      to={`/journal/${post.slug}`}
      className="group block p-9 border border-black-border hover:border-gray-mid rounded-sm bg-black-mid hover:bg-black-soft transition-all duration-500 cursor-pointer"
      style={{ transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)' }}
      onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-4px)')}
      onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <span className="tag">{post.category}</span>
          <span className="text-[13px] text-cream-dim opacity-50">
            {post.date} · {post.readTime}
          </span>
        </div>
        <h3
          className="font-display font-medium text-cream group-hover:text-gold transition-colors duration-300 leading-snug"
          style={{ fontSize: 'clamp(18px, 2vw, 24px)', letterSpacing: '-0.015em' }}
        >
          {post.title}
        </h3>
        <p className="body-sm line-clamp-3">{post.excerpt}</p>
        <span className="arrow-link mt-1">Read Article</span>
      </div>
    </Link>
  );
}
