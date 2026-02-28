import { TreeView } from "@/components/ui/tree-view";

const FileTree = () => {

const treeData = [
  {
    id: "1",
    label: "dist",
    children: [
      {
        id: "1-1",
        label: "assets",
        children: [
          { id: "1-1-1", label: "index-Bf3ZCnql.css" },
          { id: "1-1-2", label: "index-BpVLMKvT.js" },
        ],
      },
      {
        id: "1-2",
        label: "sounds",
        children: [
          { id: "1-2-1", label: "config.json" },
          { id: "1-2-2", label: "sound.ogg" },
        ],
      },
      { id: "1-3", label: "hero-bg.png" },
      { id: "1-4", label: "ICON.png" },
      { id: "1-5", label: "index.html" },
      { id: "1-6", label: "vite.svg" },
    ],
  },

  {
    id: "3",
    label: "public",
    children: [
      {
        id: "3-1",
        label: "sounds",
        children: [
          { id: "3-1-1", label: "config.json" },
          { id: "3-1-2", label: "sound.ogg" },
        ],
      },
      { id: "3-2", label: "hero-bg.png" },
      { id: "3-3", label: "ICON.png" },
      { id: "3-4", label: "vite.svg" },
    ],
  },

  {
    id: "4",
    label: "src",
    children: [
      {
        id: "4-1",
        label: "assets",
        children: [{ id: "4-1-1", label: "react.svg" }],
      },

      {
        id: "4-2",
        label: "components",
        children: [
          {
            id: "4-2-1",
            label: "blocks",
            children: [
              { id: "4-2-1-1", label: "testimonials-columns-1.tsx" },
            ],
          },
          {
            id: "4-2-2",
            label: "ui",
            children: [
              { id: "4-2-2-1", label: "keyboard.tsx" },
              { id: "4-2-2-2", label: "kinetic-team-hybrid.tsx" },
              { id: "4-2-2-3", label: "tree-view.tsx" },
            ],
          },
          { id: "4-2-3", label: "ContactForm.tsx" },
          { id: "4-2-4", label: "CustomCursor.tsx" },
          { id: "4-2-5", label: "FileTree.tsx" },
          { id: "4-2-6", label: "Footer.tsx" },
          { id: "4-2-7", label: "GitHubSection.tsx" },
          { id: "4-2-8", label: "GradientBlinds.tsx" },
          { id: "4-2-9", label: "HeroCursorGlow.tsx" },
          { id: "4-2-10", label: "JournalCard.tsx" },
          { id: "4-2-11", label: "KineticServices.tsx" },
          { id: "4-2-12", label: "MarqueeText.tsx" },
          { id: "4-2-13", label: "Navbar.tsx" },
          { id: "4-2-14", label: "PageTransition.tsx" },
          { id: "4-2-15", label: "ProjectCard.tsx" },
          { id: "4-2-16", label: "RevealOnScroll.tsx" },
          { id: "4-2-17", label: "ScrollToTop.tsx" },
          { id: "4-2-18", label: "SmoothScroll.tsx" },
          { id: "4-2-19", label: "Testimonials.tsx" },
        ],
      },

      {
        id: "4-3",
        label: "context",
        children: [{ id: "4-3-1", label: "ThemeContext.tsx" }],
      },

      {
        id: "4-4",
        label: "data",
        children: [
          { id: "4-4-1", label: "images.ts" },
          { id: "4-4-2", label: "journal.ts" },
          { id: "4-4-3", label: "projects.ts" },
        ],
      },

      {
        id: "4-5",
        label: "lib",
        children: [
          { id: "4-5-1", label: "supabase.ts" },
          { id: "4-5-2", label: "utils.ts" },
        ],
      },

      {
        id: "4-6",
        label: "pages",
        children: [
          { id: "4-6-1", label: "About.tsx" },
          { id: "4-6-2", label: "Contact.tsx" },
          { id: "4-6-3", label: "Home.tsx" },
          { id: "4-6-4", label: "Journal.tsx" },
          { id: "4-6-5", label: "JournalPost.tsx" },
          { id: "4-6-6", label: "NotFound.tsx" },
          { id: "4-6-7", label: "ProjectDetail.tsx" },
          { id: "4-6-8", label: "Work.tsx" },
        ],
      },

      { id: "4-7", label: "App.css" },
      { id: "4-8", label: "App.tsx" },
      { id: "4-9", label: "index.css" },
      { id: "4-10", label: "main.tsx" },
    ],
  },

  { id: "5", label: ".env" },
  { id: "6", label: ".gitignore" },
  { id: "7", label: "components.json" },
  { id: "8", label: "eslint.config.js" },
  { id: "9", label: "index.html" },
  { id: "10", label: "package-lock.json" },
  { id: "11", label: "package.json" },
  { id: "12", label: "postcss.config.js" },
  { id: "13", label: "README.md" },
  { id: "14", label: "tailwind.config.js" },
  { id: "15", label: "tsconfig.app.json" },
  { id: "16", label: "tsconfig.json" },
  { id: "17", label: "tsconfig.node.json" },
  { id: "18", label: "vercel.json" },
  { id: "19", label: "vite.config.ts" },
];

  return (
    <>
    <div className="max-w-xl mx-auto w-full">
      <TreeView
        data={treeData}
        onNodeClick={(node) => console.log("Clicked:", node.label)}
        defaultExpandedIds={["1"]}
      />
    </div>
    </>
  );
};

export default FileTree;
