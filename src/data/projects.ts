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
    slug: 'neutron',
    title: 'Neutron',
    category: 'Fest Management & Tech Drive',
    year: '2025',
    description: 'A technology driven fest management platform built to organize, streamline, and elevate large scale technical and cultural events through structured digital systems.',
    fullDescription:
      'Neutron is a modern fest management and tech driven initiative designed to handle the planning, execution, and digital operations of large scale college festivals. The platform focuses on simplifying event coordination by integrating registrations, team workflows, scheduling, announcements, and participant engagement into a unified ecosystem. Built with a clean futuristic interface and performance oriented architecture, Neutron enables organizers to manage complex fest operations efficiently while delivering an engaging and seamless experience for participants and attendees.',
    tags: ['Fest Management', 'Web Platform', 'Event Technology', 'UI/UX'],
    role: 'Product Designer & Full Stack Developer',
    duration: '7 Weeks',
    challenge:
      'Managing multiple fest activities, participant flows, and organizing teams simultaneously while maintaining clarity, scalability, and smooth operational execution.',
    solution:
      'We designed a centralized digital infrastructure featuring automated registration systems, real time event updates, structured management dashboards, and intuitive user interfaces to reduce manual workload and improve coordination.',
    outcome:
      'Neutron significantly improved event organization efficiency, minimized operational confusion, and established a scalable digital framework capable of supporting high participation technical festivals with professional execution.',
    accentColor: '#2f80ff',
    bgGradient: 'linear-gradient(135deg, #020617 0%, #0b1f3a 50%, #020617 100%)',
  },
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
    link: 'https://revoxforms.vercel.app/',
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
    slug: 'quantica',
    title: 'Quantica',
    category: 'Fest Website and Branding',
    year: '2026',
    description: 'A dynamic esports festival platform designed to deliver seamless tournament management, immersive player experiences, and high-energy digital engagement.',
    fullDescription:
      'Quantica is a comprehensive esports festival and management platform built to power competitive gaming events from start to finish. The website integrates tournament registrations, live match tracking, team management, event scheduling, and audience engagement into one unified ecosystem. Designed with a futuristic visual identity and performance focused architecture, Quantica transforms esports events into scalable, professionally managed digital experiences while maintaining the excitement, competitiveness, and community spirit of modern gaming culture.',
    link: 'https://www.quantica.fun/',
    tags: ['Esports Platform', 'Web Design', 'Event Management', 'UI/UX'],
    role: 'Product Designer & Full Stack Developer',
    duration: '8 Weeks',
    challenge:
      'Creating a centralized digital platform capable of handling large scale esports festival operations while maintaining real time performance, intuitive navigation, and an engaging experience for players, organizers, and spectators.',
    solution:
      'We developed a modular and scalable web system combining tournament automation, responsive dashboards, live updates, and visually immersive UI elements inspired by competitive gaming environments to ensure smooth event execution and user engagement.',
    outcome:
      'Quantica streamlined esports event management, reduced manual coordination efforts, and significantly improved participant onboarding and audience interaction, establishing a strong digital presence for hosting competitive gaming festivals efficiently.',
    accentColor: '#e0e0e0',
    bgGradient: 'linear-gradient(135deg, #0a0a0a 0%, #191919 50%, #0a0a0a 100%)',
  },
  {
    slug: 'openrouter',
    title: 'OpenRouter',
    category: 'API, UI/UX & Development',
    year: '2026',
    description: 'A powerful AI integration platform enabling seamless access to multiple large language models through a unified and developer friendly interface.',
    fullDescription:
      'OpenRouter is a scalable AI platform designed to simplify access to multiple leading language models through a single streamlined gateway. The project focuses on building an efficient interface that allows developers and teams to route, manage, and optimize AI model usage without dealing with fragmented APIs or complex integrations. With performance driven architecture, clean developer workflows, and real time response handling, the platform empowers users to experiment, deploy, and scale AI powered applications faster while maintaining flexibility and cost efficiency.',
    link: 'https://github.com/Heyykrishnna/OPENROUTER',
    tags: ['AI Platform', 'API Integration', 'Developer Tools', 'Web Application'],
    role: 'Full Stack Developer',
    duration: '5 Weeks',
    challenge:
      'Managing access to multiple AI models while ensuring consistent performance, simplified integration, and transparent routing across different providers without increasing system complexity.',
    solution:
      'We implemented a unified routing layer supported by an intuitive dashboard, optimized request handling, and scalable backend infrastructure that enables developers to switch between models effortlessly while monitoring usage and performance.',
    outcome:
      'The platform significantly reduced integration time for AI applications, improved experimentation speed for developers, and provided a flexible foundation for building scalable AI driven products using multiple model providers.',
    accentColor: '#c9a87c',
    bgGradient: 'linear-gradient(135deg, #0e0b08 0%, #1e1710 50%, #0e0b08 100%)',
  },
  {
    slug: 'vegah',
    title: 'Vegah',
    category: 'Team Management, Branding & Development',
    year: '2025',
    description: 'A centralized hackathon management ecosystem built to streamline team coordination, participant engagement, and event execution at scale.',
    fullDescription:
      'Vegah is a hackathon management initiative focused on organizing, branding, and executing innovation driven events with efficiency and clarity. The platform and identity were designed to simplify team collaboration, participant onboarding, event communication, and workflow management throughout the hackathon lifecycle. By combining structured management systems with strong visual branding and digital infrastructure, Vegah enables organizers to run high impact hackathons while ensuring a smooth and engaging experience for participants, mentors, and sponsors.',
    link: 'https://hustlers-vegah.vercel.app/',
    tags: ['Hackathon Platform', 'Team Management', 'Brand Identity', 'Web Development'],
    role: 'Core Team Member & Developer',
    duration: '6 Weeks',
    challenge:
      'Managing large scale hackathon operations while maintaining clear communication, consistent branding, and efficient coordination between organizers, participants, and stakeholders.',
    solution:
      'We built structured management workflows supported by a cohesive brand identity, centralized communication systems, and scalable web solutions that simplified registrations, announcements, and team operations.',
    outcome:
      'Vegah improved operational efficiency, strengthened event branding, and enabled smoother execution of hackathons, creating a professional and well coordinated innovation environment.',
    accentColor: '#ff6a00',
    bgGradient: 'linear-gradient(135deg, #140300 0%, #3b0a05 50%, #140300 100%)',  },
];
