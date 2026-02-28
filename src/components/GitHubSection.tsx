import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';

const GITHUB_USERNAME = 'Heyykrishnna';

interface GHUser {
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  html_url: string;
}

interface GHRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  pushed_at: string;
}

const LANG_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  Rust: '#dea584',
  Go: '#00ADD8',
  CSS: '#563d7c',
  HTML: '#e34c26',
  Swift: '#F05138',
  Kotlin: '#A97BFF',
  Dart: '#00B4AB',
  Java: '#b07219',
  'C++': '#f34b7d',
  C: '#555555',
  Shell: '#89e051',
  Vue: '#41b883',
  Svelte: '#ff3e00',
};

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return 'today';
  if (days === 1) return 'yesterday';
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}

function LangDot({ lang }: { lang: string | null }) {
  if (!lang) return null;
  const color = LANG_COLORS[lang] ?? '#888';
  return (
    <span className="flex items-center gap-1.5">
      <span style={{ background: color }} className="inline-block h-2.5 w-2.5 rounded-full flex-shrink-0" />
      <span className="text-[11px] text-cream-dim">{lang}</span>
    </span>
  );
}

function StatPill({ value, label }: { value: number | string; label: string }) {
  return (
    <div className="flex flex-col items-center px-6 py-4 border border-black-border rounded-sm bg-black-mid hover:bg-black-soft hover:border-gray-mid transition-all duration-300">
      <span className="font-display text-3xl font-semibold text-gold" style={{ letterSpacing: '-0.03em' }}>
        {value}
      </span>
      <span className="body-sm text-[11px] mt-1 uppercase tracking-widest opacity-60">{label}</span>
    </div>
  );
}

function RepoCard({ repo, index }: { repo: GHRepo; index: number }) {
  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="group flex flex-col justify-between gap-4 p-6 border border-black-border rounded-sm bg-black-mid hover:bg-black-soft hover:border-gray-mid transition-all duration-300"
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-3">
          <h4
            className="font-display font-semibold text-cream group-hover:text-gold transition-colors duration-300 leading-tight"
            style={{ fontSize: 'clamp(14px, 1.4vw, 17px)', letterSpacing: '-0.01em' }}
          >
            {repo.name}
          </h4>
          <svg
            className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gold"
            width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          >
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>
        {repo.description && (
          <p className="text-[12px] leading-relaxed opacity-50 line-clamp-2">{repo.description}</p>
        )}
        {repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-1">
            {repo.topics.slice(0, 3).map(t => (
              <span
                key={t}
                className="px-2 py-0.5 text-[10px] font-medium tracking-wide uppercase rounded-sm border border-black-border text-cream-dim"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-black-border">
        <LangDot lang={repo.language} />
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-[11px] opacity-50">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            {repo.stargazers_count}
          </span>
          <span className="flex items-center gap-1 text-[11px] opacity-50">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M6 9v1a2 2 0 002 2h8a2 2 0 002-2V9"/><line x1="12" y1="12" x2="12" y2="15"/></svg>
            {repo.forks_count}
          </span>
          <span className="text-[11px] opacity-40 font-mono">{timeAgo(repo.pushed_at)}</span>
        </div>
      </div>
    </motion.a>
  );
}

export default function GitHubSection() {
  const [user, setUser] = useState<GHUser | null>(null);
  const [repos, setRepos] = useState<GHRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [langStats, setLangStats] = useState<{ lang: string; count: number }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=100`),
        ]);
        const userData: GHUser = await userRes.json();
        const reposData: GHRepo[] = await reposRes.json();

        const sorted = reposData
          .filter(r => !r.name.toLowerCase().includes('fork'))
          .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
          .slice(0, 6);

        const langMap: Record<string, number> = {};
        reposData.forEach(r => {
          if (r.language) langMap[r.language] = (langMap[r.language] ?? 0) + 1;
        });
        const sortedLangs = Object.entries(langMap)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([lang, count]) => ({ lang, count }));

        setUser(userData);
        setRepos(sorted);
        setLangStats(sortedLangs);
      } catch {
        // no-op
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const totalLangs = langStats.reduce((a, b) => a + b.count, 0);

  return (
    <section className="section-pad border-b border-black-border">
      <div className="container-main">
        <RevealOnScroll>
          <span className="tag block mb-5">Open Source</span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
            <h2 className="heading-lg">GitHub Activity</h2>
            {user && (
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="arrow-link"
              >
                @{GITHUB_USERNAME}
              </a>
            )}
          </div>
        </RevealOnScroll>

        {loading ? (
          <div className="flex items-center justify-center py-24">
            <div className="flex gap-2">
              {[0, 1, 2].map(i => (
                <motion.span
                  key={i}
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.2 }}
                  className="inline-block w-2 h-2 rounded-full bg-gold"
                />
              ))}
            </div>
          </div>
        ) : (
          <>
            {user && (
              <RevealOnScroll>
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-12 p-8 border border-black-border rounded-sm bg-black-mid">
                  <img
                    src={user.avatar_url}
                    alt={user.name}
                    className="w-16 h-16 rounded-sm border border-black-border object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-semibold text-cream text-lg leading-tight" style={{ letterSpacing: '-0.01em' }}>
                      {user.name || GITHUB_USERNAME}
                    </p>
                    {user.bio && (
                      <p className="body-sm opacity-60 mt-1 line-clamp-2">{user.bio}</p>
                    )}
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    <StatPill value={user.public_repos} label="Repos" />
                    <StatPill value={user.followers} label="Followers" />
                    <StatPill value={user.following} label="Following" />
                  </div>
                </div>
              </RevealOnScroll>
            )}

            {langStats.length > 0 && (
              <RevealOnScroll delay={100}>
                <div className="mb-12">
                  <p className="tag mb-4">Top Languages</p>
                  <div className="flex rounded-sm overflow-hidden h-2.5 gap-px mb-4">
                    {langStats.map(({ lang, count }) => (
                      <motion.div
                        key={lang}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                          width: `${(count / totalLangs) * 100}%`,
                          background: LANG_COLORS[lang] ?? '#888',
                          transformOrigin: 'left',
                        }}
                      />
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {langStats.map(({ lang, count }) => (
                      <span key={lang} className="flex items-center gap-2">
                        <span
                          className="inline-block w-2.5 h-2.5 rounded-full"
                          style={{ background: LANG_COLORS[lang] ?? '#888' }}
                        />
                        <span className="text-[12px] text-cream-dim">{lang}</span>
                        <span className="text-[11px] opacity-40 font-mono">
                          {Math.round((count / totalLangs) * 100)}%
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            )}
          </>
        )}
      </div>
    </section>
  );
}
