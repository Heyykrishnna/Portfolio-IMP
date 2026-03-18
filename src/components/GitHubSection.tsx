import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';

const GITHUB_CONFIG = {
  username: "Heyykrishnna",
  token: import.meta.env.VITE_GITHUB_TOKEN || "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",
};

interface GHUser {
  name: string;
  bio: string;
  totalContributions: number;
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

export default function GitHubSection() {
  const [user, setUser] = useState<GHUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [langStats, setLangStats] = useState<{ lang: string; count: number }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = {
          Authorization: `bearer ${GITHUB_CONFIG.token}`,
          "Content-Type": "application/json",
        };

        const contributionsQuery = {
          query: `
            query($username: String!) {
              user(login: $username) {
                contributionsCollection {
                  contributionCalendar {
                    totalContributions
                  }
                }
              }
            }
          `,
          variables: { username: GITHUB_CONFIG.username },
        };

        const [userRes, reposRes, contributionsRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_CONFIG.username}`, { headers }),
          fetch(`https://api.github.com/users/${GITHUB_CONFIG.username}/repos?sort=pushed&per_page=100`, { headers }),
          fetch("https://api.github.com/graphql", {
            method: "POST",
            headers,
            body: JSON.stringify(contributionsQuery),
          }),
        ]);

        const userData = await userRes.json();
        const reposData: GHRepo[] = await reposRes.json();
        const contributionsData = await contributionsRes.json();

        const totalContributions = contributionsData.data?.user?.contributionsCollection?.contributionCalendar?.totalContributions || 0;

        const langMap: Record<string, number> = {};
        if (Array.isArray(reposData)) {
          reposData.forEach(r => {
            if (r.language) langMap[r.language] = (langMap[r.language] ?? 0) + 1;
          });
        }
        
        const sortedLangs = Object.entries(langMap)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([lang, count]) => ({ lang, count }));

        setUser({
          ...userData,
          totalContributions,
        });
        setLangStats(sortedLangs);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
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
                @{GITHUB_CONFIG.username}
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
                      {user.name || GITHUB_CONFIG.username}
                    </p>
                    {user.bio && (
                      <p className="body-sm opacity-60 mt-1 line-clamp-2">{user.bio}</p>
                    )}
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    <StatPill value={user.totalContributions} label="Contributions" />
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
