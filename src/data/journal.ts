export interface JournalPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: JournalSection[];
}

export interface JournalSection {
  heading?: string;
  body: string;
}

export const journalPosts: JournalPost[] = [
  {
    slug: 'how-ai-is-transforming-design-in-2025',
    title: 'How AI is Transforming Design in 2025',
    category: 'AI Design',
    date: 'February 10, 2025',
    readTime: '6 min read',
    excerpt:
      'Artificial intelligence is no longer a novelty in the design world — it is a fundamental shift in how we ideate, prototype, and deliver experiences.',
    content: [
      {
        body:
          'Artificial intelligence is no longer a novelty in the design world — it is a fundamental shift in how we ideate, prototype, and deliver experiences. From generative layouts to AI-assisted accessibility audits, 2025 marks the year design and machine intelligence reached genuine creative parity.',
      },
      {
        heading: 'The Rise of Generative Interfaces',
        body:
          'Generative UI tools can now produce design variants from a single prompt, dramatically compressing the ideation phase. Designers who once spent days exploring directions can now curate across hundreds of iterations in hours — freeing cognitive bandwidth for higher-order judgment. The role of the designer shifts from maker to curator, from executor to director.',
      },
      {
        heading: 'AI as a Research Partner',
        body:
          'Sentiment analysis, heatmap prediction, and user behavior modeling — tasks that once demanded weeks of user testing — are now available as real-time AI insights embedded directly in design tools. This means teams can validate hypotheses before a single prototype is built, fundamentally changing how we approach user research.',
      },
      {
        heading: 'The Ethical Dimension',
        body:
          "With greater power comes greater responsibility. AI-generated design can inherit biases present in its training data, producing outputs that feel culturally insensitive or aesthetically homogenized. The designer's critical eye — informed by cultural awareness, empathy, and aesthetic judgment — remains the irreplaceable counterweight to unchecked AI generation.",
      },
      {
        heading: 'What This Means for Designers',
        body:
          'The designers who thrive in 2025 are not those who resist AI, but those who harness it deliberately. Craft, taste, and human judgment are more valuable than ever precisely because they are scarce. AI handles iteration; humans handle meaning. That distinction is everything.',
      },
    ],
  },
  {
    slug: 'how-to-choose-the-right-palette-for-your-brand',
    title: 'How to Choose the Right Palette for Your Brand',
    category: 'Visual Design',
    date: 'January 22, 2025',
    readTime: '5 min read',
    excerpt:
      'Color is the first thing people feel about a brand before they read a word. Choosing the right palette is one of the highest-leverage decisions in brand design.',
    content: [
      {
        body:
          'Color is the first thing people feel about a brand — often before they read a single word. A well-chosen palette communicates personality, builds recognition, and triggers emotional responses that advertising copy never could. Yet color selection is frequently reduced to personal preference when it deserves far more rigor.',
      },
      {
        heading: 'Start with Strategy, Not Aesthetics',
        body:
          'Before pulling up a color wheel, define what your brand stands for. Is it bold and disruptive, or trusted and steady? Warm and approachable, or cool and authoritative? Your palette should be the visual embodiment of those attributes — not just a collection of colors that look pleasant together.',
      },
      {
        heading: 'Study Your Competitive Landscape',
        body:
          'Map the color territory of your competitors. In most categories, certain colors are overused — tech defaults to blue, finance to navy, wellness to green. Understanding these conventions lets you choose to fit in strategically or stand out deliberately. Both can be the right answer depending on your positioning.',
      },
      {
        heading: 'Build for System, Not Just Moments',
        body:
          'A brand palette must work across contexts: dark backgrounds, light backgrounds, print, digital, small sizes, large formats. Test your colors in these varied environments before committing. A palette that sings in a presentation but fails on a business card is not a finished palette.',
      },
      {
        heading: 'Less is More, Always',
        body:
          'The most iconic brand palettes are ruthlessly restrained. One or two primary colors, a neutral, and a single accent. Complexity signals insecurity; restraint signals confidence. When in doubt, remove a color. Your brand will almost always be stronger for it.',
      },
    ],
  },
  {
    slug: '10-web-design-trends-that-will-dominate-this-year',
    title: '10 Web Design Trends That Will Dominate This Year',
    category: 'Trends',
    date: 'January 5, 2025',
    readTime: '8 min read',
    excerpt:
      'Web design in 2025 is defined by the tension between technological capability and human desire for warmth, authenticity, and meaning.',
    content: [
      {
        body:
          'Web design in 2025 is defined by the tension between technological capability and the human desire for warmth, authenticity, and meaning. The trends that dominate this year are not superficial aesthetic shifts — they are responses to deeper cultural currents reshaping how we relate to screens.',
      },
      {
        heading: '1. Motion-First Design',
        body:
          'Animation is no longer decorative — it is structural. Pages are designed around motion sequences first, with static states treated as a fallback. Scroll-triggered choreography, entrance animations, and micro-interactions define the experience before content does.',
      },
      {
        heading: '2. Typographic Maximalism',
        body:
          'Bold, oversized type as the primary visual element. Headlines that span the full viewport width. Type as image, texture, and composition. In a landscape saturated with photography, typography reclaims its position as the most expressive design tool.',
      },
      {
        heading: '3. Dark Mode as Default',
        body:
          'While light modes dominated the 2010s, 2025 sees the sophistication of dark interfaces mature. Premium brands increasingly default to dark — not as a feature toggle, but as a primary identity statement.',
      },
      {
        heading: '4. Bento Grid Layouts',
        body:
          "Inspired by Apple's marketing language, bento grids — modular, card-based compositions with varied proportions — have become the dominant layout paradigm for feature showcases and portfolio grids.",
      },
      {
        heading: '5. Grain and Texture',
        body:
          'A counter-reaction to the hyper-clean digital aesthetic of the past decade. Subtle noise textures, film grain overlays, and material surfaces bring tactility back to the screen, making interfaces feel physically present.',
      },
      {
        heading: '6. Spatial Design',
        body:
          'Influenced by the rise of spatial computing, web design increasingly employs depth, parallax, and three-dimensional cues — not for novelty, but to create genuine hierarchy and focus.',
      },
      {
        heading: '7. Editorial Grid Systems',
        body:
          'Borrowed from print design, editorial grids bring structured rhythm to web layouts. Designers are revisiting the Swiss grid tradition, applying its rigor to digital scroll experiences.',
      },
      {
        heading: '8. Monochrome Palettes',
        body:
          'Single-hue palettes — exploring every shade, tint, and tone of one color — create powerful, unified visual identities that feel both restrained and immersive.',
      },
      {
        heading: '9. Cursor Interactivity',
        body:
          'Custom cursors, magnetic hover effects, and cursor-driven interactions transform the mouse pointer into an expressive design element that deepens engagement and adds personality.',
      },
      {
        heading: '10. Value-Forward White Space',
        body:
          'Generous negative space — used not as absence but as presence — signals luxury, confidence, and editorial restraint. In 2025, what you don\'t show is as important as what you do.',
      },
    ],
  },
];
