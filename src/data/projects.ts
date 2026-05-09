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
    bgGradient: 'linear-gradient(135deg, #140300 0%, #3b0a05 50%, #140300 100%)',  
  },
  {
    slug: 'sportseat',
    title: 'SportSeat',
    category: 'Sports Ticketing & Booking Platform',
    year: '2026',
    description:
      'A modern sports seat booking and event discovery platform focused on seamless ticket management and premium match experiences.',
    fullDescription:
      'SportSeat is a sports focused digital platform designed to simplify stadium ticket booking and audience engagement for live sporting events. The project focuses on delivering a fast and intuitive booking flow combined with responsive UI systems and scalable frontend architecture. The platform aims to provide users with a smooth experience for discovering matches, selecting seats, and managing sports event participation digitally.',
    tags: ['Sports', 'Ticket Booking', 'Frontend', 'UI/UX'],
    role: 'Full Stack Developer & Product Designer',
    duration: '3 Weeks',
    challenge:
      'Creating a smooth and scalable booking experience capable of handling large user interactions while maintaining visual clarity and responsiveness.',
    solution:
      'Designed a responsive interface with structured booking flows, reusable UI systems, and optimized frontend rendering for better usability and scalability.',
    outcome:
      'SportSeat established a polished foundation for a modern sports ticketing ecosystem with scalable frontend architecture and strong user experience.',
    accentColor: '#2563eb',
    bgGradient:
      'linear-gradient(135deg, #020617 0%, #0f172a 50%, #1e3a8a 100%)',
  },

  {
    slug: 'portfolio-new',
    title: 'Portfolio New',
    category: 'Personal Brand & Portfolio',
    year: '2026',
    description:
      'A refined developer portfolio focused on modern aesthetics, interactive experiences, and strong personal branding.',
    fullDescription:
      'Portfolio New is an advanced iteration of a personal portfolio platform crafted to showcase projects, achievements, skills, and technical identity through immersive design systems and smooth frontend interactions. The platform emphasizes visual storytelling, responsiveness, and minimal yet premium user experience patterns to create a memorable digital presence.',
    tags: ['Portfolio', 'Frontend', 'Personal Branding', 'UI Design'],
    role: 'Designer & Frontend Developer',
    duration: '2 Weeks',
    challenge:
      'Building a portfolio that feels visually premium while maintaining clarity, performance, and structured project presentation.',
    solution:
      'Implemented modern design systems, smooth animations, responsive layouts, and modular project showcases to create a professional developer identity.',
    outcome:
      'The project significantly strengthened personal branding and provided a polished representation of technical and creative capabilities.',
    accentColor: '#7c3aed',
    bgGradient:
      'linear-gradient(135deg, #0f172a 0%, #312e81 50%, #020617 100%)',
  },

  {
    slug: 'forms-dev',
    title: 'FORMS DEV',
    category: 'Form Builder & Workflow Automation',
    year: '2026',
    description:
      'A scalable digital forms platform designed for structured data collection and workflow management.',
    fullDescription:
      'FORMS DEV is a modern form creation and management system built to simplify digital workflows, submissions, and structured information handling. The platform focuses on dynamic form generation, responsive interfaces, and streamlined user interactions to support scalable organizational and productivity use cases.',
    tags: ['Forms', 'Automation', 'Dashboard', 'TypeScript'],
    role: 'Full Stack Developer',
    duration: '5 Weeks',
    challenge:
      'Handling complex form structures and scalable submission workflows while maintaining intuitive usability.',
    solution:
      'Developed a modular form architecture with reusable components, validation systems, and efficient frontend state management.',
    outcome:
      'The project created a scalable workflow platform capable of supporting structured data operations and digital productivity systems.',
    accentColor: '#06b6d4',
    bgGradient:
      'linear-gradient(135deg, #082f49 0%, #0f172a 50%, #022c22 100%)',
  },

  {
    slug: 'components',
    title: 'Components',
    category: 'Reusable UI Component Library',
    year: '2026',
    description:
      'A curated collection of production ready UI components built for scalability, speed, and seamless integration.',
    fullDescription:
      'Components is a reusable design system and frontend component library focused on accelerating modern web development workflows. The repository contains scalable UI patterns, reusable layouts, and polished frontend utilities crafted for maintainability, responsiveness, and rapid integration into real world applications.',
    tags: ['UI Library', 'Design System', 'Frontend', 'Reusable Components'],
    role: 'UI Engineer & System Designer',
    duration: 'Ongoing',
    challenge:
      'Creating reusable frontend systems that remain flexible, scalable, and visually consistent across multiple projects.',
    solution:
      'Designed modular component architecture with scalable styling patterns and standardized UI structures.',
    outcome:
      'The library improved development speed, design consistency, and maintainability across multiple frontend projects.',
    accentColor: '#14b8a6',
    bgGradient:
      'linear-gradient(135deg, #022c22 0%, #134e4a 50%, #020617 100%)',
  },

  {
    slug: 'revox',
    title: 'Revox',
    category: 'AI Communication & Productivity Platform',
    year: '2026',
    description:
      'An AI powered productivity and communication platform designed to streamline modern digital workflows.',
    fullDescription:
      'Revox is a futuristic productivity ecosystem focused on enhancing communication, workflow management, and AI assisted interactions. The platform emphasizes performance driven architecture, modern UI systems, and scalable integrations to create an intelligent digital workspace experience.',
    tags: ['AI', 'Productivity', 'Workflow', 'SaaS'],
    role: 'Product Architect & Full Stack Developer',
    duration: '6 Weeks',
    challenge:
      'Balancing advanced productivity features with a clean and accessible user experience.',
    solution:
      'Built scalable frontend systems with structured workflows, responsive dashboards, and AI focused interaction patterns.',
    outcome:
      'Revox established a strong foundation for an intelligent productivity ecosystem with scalable design architecture.',
    accentColor: '#8b5cf6',
    bgGradient:
      'linear-gradient(135deg, #111827 0%, #312e81 50%, #020617 100%)',
  },

  {
    slug: 'clario',
    title: 'Clario',
    category: 'Productivity & Knowledge Platform',
    year: '2026',
    description:
      'A structured digital workspace designed for clarity, organization, and intelligent productivity.',
    fullDescription:
      'Clario is a productivity focused platform crafted to organize workflows, information systems, and digital collaboration through clean interfaces and scalable architecture. The platform emphasizes minimal design, usability, and efficient information management.',
    tags: ['Productivity', 'Knowledge Management', 'Dashboard', 'UI/UX'],
    role: 'Full Stack Developer',
    duration: '4 Weeks',
    challenge:
      'Creating a productivity environment that remains lightweight, intuitive, and scalable for long term usage.',
    solution:
      'Designed structured dashboard systems, modular frontend architecture, and responsive user interactions.',
    outcome:
      'Clario delivered a polished productivity foundation centered around clarity and scalable workflow management.',
    accentColor: '#0ea5e9',
    bgGradient:
      'linear-gradient(135deg, #082f49 0%, #1e293b 50%, #020617 100%)',
  },

  {
    slug: 'sandwich-components',
    title: 'Sandwich Components',
    category: 'Frontend UI Library',
    year: '2026',
    description:
      'A thoughtfully crafted collection of reusable UI components built for modern frontend development.',
    fullDescription:
      'Sandwich Components is a scalable component repository focused on reusable frontend systems, premium UI patterns, and efficient development workflows. Built with modern frontend practices, the project aims to provide developers with production ready interfaces that accelerate application building.',
    tags: ['Components', 'Frontend', 'UI Library', 'TypeScript'],
    role: 'Frontend Engineer',
    duration: 'Ongoing',
    challenge:
      'Building highly reusable frontend patterns without compromising design quality or flexibility.',
    solution:
      'Implemented modular UI systems with scalable structures and reusable styling methodologies.',
    outcome:
      'The repository streamlined frontend development workflows and improved consistency across applications.',
    accentColor: '#f97316',
    bgGradient:
      'linear-gradient(135deg, #431407 0%, #9a3412 50%, #020617 100%)',
  },

  {
    slug: 'quiz-oasis-portal',
    title: 'Quiz Oasis Portal',
    category: 'AI Learning & LMS Platform',
    year: '2026',
    description:
      'An AI integrated educational platform focused on learning management, assessments, and digital engagement.',
    fullDescription:
      'Quiz Oasis Portal, later evolved into Elysiar, is an advanced learning and engagement ecosystem designed for educational institutions and digital learning experiences. The platform integrates structured assessments, AI powered workflows, participant management, and scalable dashboards to modernize educational operations.',
    tags: ['AI', 'LMS', 'Education', 'Assessment Platform'],
    role: 'Product Designer & Full Stack Developer',
    duration: '8 Weeks',
    challenge:
      'Building a scalable educational ecosystem capable of supporting intelligent workflows and engaging learning experiences.',
    solution:
      'Developed modular dashboards, AI driven integrations, responsive educational workflows, and scalable architecture.',
    outcome:
      'The platform established a strong digital foundation for AI powered educational management and student engagement.',
    accentColor: '#ec4899',
    bgGradient:
      'linear-gradient(135deg, #500724 0%, #831843 50%, #020617 100%)',
  },

  {
    slug: 'photon',
    title: 'Photon',
    category: 'Modern Web Platform',
    year: '2026',
    description:
      'A futuristic frontend platform focused on performance, scalability, and immersive user experiences.',
    fullDescription:
      'Photon is a modern web experience project designed with performance oriented frontend systems and immersive interface design principles. The platform focuses on responsive architecture, interactive visuals, and clean scalable development patterns.',
    tags: ['Frontend', 'Interactive Design', 'Web Experience', 'TypeScript'],
    role: 'Frontend Developer & UI Designer',
    duration: '3 Weeks',
    challenge:
      'Delivering immersive user experiences without sacrificing responsiveness or maintainability.',
    solution:
      'Used modular frontend architecture, optimized rendering, and modern interaction patterns to balance aesthetics with performance.',
    outcome:
      'Photon delivered a visually engaging and technically scalable web experience.',
    accentColor: '#38bdf8',
    bgGradient:
      'linear-gradient(135deg, #082f49 0%, #0f172a 50%, #164e63 100%)',
  },

  {
    slug: 'forms-dev-backend',
    title: 'FORMS DEV Backend',
    category: 'Backend Infrastructure & APIs',
    year: '2026',
    description:
      'Backend infrastructure powering scalable form workflows, data processing, and secure APIs.',
    fullDescription:
      'FORMS DEV Backend serves as the server side architecture for handling form submissions, authentication, workflow processing, and scalable data management. The project focuses on backend performance, structured APIs, and reliable database interactions.',
    tags: ['Backend', 'API', 'Node.js', 'Database'],
    role: 'Backend Developer',
    duration: '4 Weeks',
    challenge:
      'Managing secure and scalable data workflows for complex form systems.',
    solution:
      'Built structured APIs, optimized backend operations, and scalable database management systems.',
    outcome:
      'The backend infrastructure enabled reliable and scalable workflow handling for the broader FORMS DEV ecosystem.',
    accentColor: '#22c55e',
    bgGradient:
      'linear-gradient(135deg, #052e16 0%, #166534 50%, #020617 100%)',
  },

  {
    slug: 'ai-telephony-agent',
    title: 'AI Telephony Agent',
    category: 'Artificial Intelligence & Voice Automation',
    year: '2026',
    description:
      'An AI powered telephony automation system designed for intelligent voice interactions and workflow execution.',
    fullDescription:
      'AI Telephony Agent is a Python based voice automation platform focused on AI driven telephony interactions, conversational workflows, and smart communication systems. The project explores intelligent automation through speech handling, conversational processing, and scalable AI integrations.',
    tags: ['AI', 'Telephony', 'Python', 'Voice Automation'],
    role: 'AI Developer',
    duration: '3 Weeks',
    challenge:
      'Building intelligent conversational systems capable of handling automated communication workflows efficiently.',
    solution:
      'Integrated AI driven processing with structured telephony logic and scalable backend workflows.',
    outcome:
      'The project demonstrated practical implementation of AI assisted communication systems and automated interactions.',
    accentColor: '#e11d48',
    bgGradient:
      'linear-gradient(135deg, #4c0519 0%, #881337 50%, #020617 100%)',
  },

  {
    slug: 'newton-elysiar',
    title: 'Newton Elysiar',
    category: 'Educational Technology Platform',
    year: '2026',
    description:
      'A custom digital ecosystem built for Newton School of Technology at Rishihood University.',
    fullDescription:
      'Newton Elysiar is a scalable educational technology ecosystem focused on streamlining institutional workflows, student engagement, and digital academic operations. Designed with a modern interface and scalable architecture, the platform acts as a centralized system for managing educational experiences efficiently.',
    tags: ['EdTech', 'Dashboard', 'AI', 'University Platform'],
    role: 'Product Designer & Full Stack Developer',
    duration: '8 Weeks',
    challenge:
      'Creating a scalable academic ecosystem capable of supporting structured educational operations and modern student experiences.',
    solution:
      'Developed centralized dashboard systems, responsive interfaces, and scalable workflows tailored for institutional requirements.',
    outcome:
      'Newton Elysiar established a modern digital infrastructure for streamlined educational management and engagement.',
    accentColor: '#6366f1',
    bgGradient:
      'linear-gradient(135deg, #1e1b4b 0%, #3730a3 50%, #020617 100%)',
  },

  {
    slug: 'openrouter',
    title: 'OPENROUTER',
    category: 'AI Infrastructure & Model Routing',
    year: '2026',
    description:
      'A custom implementation exploring scalable AI model routing and orchestration systems.',
    fullDescription:
      'OPENROUTER is an experimental AI infrastructure project focused on building model routing systems from scratch. The platform explores scalable architecture for handling AI requests, managing multiple models, and optimizing intelligent workflows.',
    tags: ['AI', 'Infrastructure', 'Routing', 'TypeScript'],
    role: 'AI Infrastructure Developer',
    duration: '5 Weeks',
    challenge:
      'Designing a scalable AI orchestration layer capable of handling multiple model interactions efficiently.',
    solution:
      'Implemented structured routing systems, modular backend architecture, and optimized request handling workflows.',
    outcome:
      'The project provided hands on exploration into scalable AI infrastructure and intelligent orchestration systems.',
    accentColor: '#a855f7',
    bgGradient:
      'linear-gradient(135deg, #2e1065 0%, #581c87 50%, #020617 100%)',
  },
];
