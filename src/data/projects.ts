export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  fullDescription: string;
  link?: string;
  tags: string[];
  role: string;
  duration: string;
  challenge: string;
  solution: string;
  outcome: string;
  accentColor: string;
  bgGradient: string;
}

export const projects: Project[] = [
  {
    slug: 'elysiar',
    title: 'Elysiar',
    category: 'Web Design & Development',
    year: '2025',
    description: 'A luxury digital experience built for a premium brand. Crafted with precision from typography to motion.',
    fullDescription:
      'Elysiar is a full-stack web platform built to deliver a premium, immersive digital experience. Every interaction is intentional — from the fluid page transitions to the meticulously crafted typography system that reinforces the brand identity.',
    link: 'https://elysiardev.vercel.app/',
    tags: ['UI/UX', 'Web Development', 'Branding', 'Motion'],
    role: 'Lead Designer & Developer',
    duration: '3 Months',
    challenge:
      "The core challenge was translating a luxury physical brand into a digital-first experience without losing the tactility and exclusivity that define the brand's essence.",
    solution:
      'We built a custom design system grounded in restrained color, generous whitespace, and precise motion choreography. Every component was crafted from scratch to ensure pixel-perfect fidelity.',
    outcome:
      "Elysiar launched to outstanding reception — user engagement doubled, and the brand's digital presence now matches the prestige of its physical counterpart",
    accentColor: '#c9a87c',
    bgGradient: 'linear-gradient(135deg, #0e0c0a 0%, #1a1510 50%, #0e0c0a 100%)',
  },
  {
    slug: 'revox-forms',
    title: 'Revox Forms',
    category: 'Product Design & Development',
    year: '2025',
    description: 'Reinventing the form-building experience. A beautifully engineered product that makes data collection feel effortless.',
    fullDescription:
      'Revox Forms is a next-generation form builder that challenges the conventions of data collection interfaces. Built with a focus on user delight, it transforms mundane form completions into smooth, engaging interactions.',
    link: 'https://elysiardev.vercel.app/',
    tags: ['Product Design', 'SaaS', 'Full Stack', 'UI/UX'],
    role: 'Product Designer & Full Stack Developer',
    duration: '4 Months',
    challenge:
      "Most form builders prioritize functionality over aesthetics — resulting in products that work but don't delight. The challenge was to build something that is both powerfully functional and visually outstanding.",
    solution:
      'We redesigned every touchpoint of the form experience: conditional logic with a visual builder, real-time collaboration, and a response dashboard that surfaces meaningful analytics at a glance.',
    outcome:
      'Revox Forms achieved extremely positive user feedback, with users specifically calling out the design quality as a differentiator from competitors like Google Forms and Typeform.',
    accentColor: '#7c9ec9',
    bgGradient: 'linear-gradient(135deg, #090c0e 0%, #101520 50%, #090c0e 100%)',
  },
  {
    slug: 'every-second',
    title: 'Every Second',
    category: 'Ad Campaign & Motion',
    year: '2024',
    description: 'A high-impact advertising campaign that captures urgency with cinematic storytelling and bold visual language.',
    fullDescription:
      'Every Second is an ad campaign concept built around the theme of time as a luxury. Through bold typography, stark contrasts, and carefully timed motion design, the campaign communicates the irreplaceable value of every moment.',
    tags: ['Ad Campaign', 'Motion Design', 'Art Direction'],
    role: 'Art Director & Motion Designer',
    duration: '6 Weeks',
    challenge:
      'Communicating an abstract concept — the preciousness of time — in a way that feels visceral, immediate, and emotionally resonant across digital and print media.',
    solution:
      'We anchored the visual language around countdown typography, high-contrast black and white photography, and motion sequences that literally accelerate as the campaign unfolds.',
    outcome:
      'The campaign garnered widespread attention with strong engagement metrics and was cited by peers as a benchmark for impactful minimalist advertising.',
    accentColor: '#e0e0e0',
    bgGradient: 'linear-gradient(135deg, #0a0a0a 0%, #191919 50%, #0a0a0a 100%)',
  },
  {
    slug: 'timeless-mastery',
    title: 'Timeless Mastery',
    category: 'Art Direction & Branding',
    year: '2024',
    description: 'An editorial branding study exploring the intersection of heritage craftsmanship and modern digital expression.',
    fullDescription:
      'Timeless Mastery is an editorial project and brand study for a heritage craftsmanship brand. The goal was to bridge generational tradition with a contemporary visual language that resonates with a modern, design-conscious audience.',
    tags: ['Art Direction', 'Brand Identity', 'Editorial'],
    role: 'Art Director & Brand Strategist',
    duration: '2 Months',
    challenge:
      'Modernizing a heritage brand without diluting its authenticity is a delicate balance. The risk of stripping away legacy while chasing trend was ever-present.',
    solution:
      'We preserved key visual equities of the original brand — its serif wordmark, earthy color palette, and craft imagery — while introducing editorial grid systems, refined whitespace, and restrained motion to signal contemporaneity.',
    outcome:
      'The rebrand received exceptional reception from both longstanding loyal customers and a new generation of design enthusiasts, proving that timelessness is itself a strategy.',
    accentColor: '#c9a87c',
    bgGradient: 'linear-gradient(135deg, #0e0b08 0%, #1e1710 50%, #0e0b08 100%)',
  },
];
