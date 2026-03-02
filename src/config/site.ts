const site = {
  // --- Site Metadata ---
  meta: {
    title: "Coley Logan",
    description: "A content designer in Melbourne, Australia",
    author: "Coley Logan",
    logo: "/logo.svg",
    ogImage: "/og-image.png",
    // HTML lang attribute, affects page language and date formatting
    // Options: "zh-CN", "en", "ja", etc.
    lang: "en",
  },

  // --- Navigation ---
  // subtitle: decorative label shown below the name (uppercase, small text)
  navigation: [
    { label: "Writing", subtitle: "Notes", href: "/posts" },
    { label: "Work", subtitle: "Case studies", href: "/case-studies" },
    { label: "About", subtitle: "Me", href: "/about" },
    { label: "Tools", subtitle: "How I work", href: "/tools" },
  ],

  // --- Social Links ---
  social: [
    {
      name: "GitHub",
      href: "https://github.com/your-username",
      icon: "mdi:github",
    },
    { name: "Email", href: "mailto:hello@example.com", icon: "mdi:email" },
  ],

  // --- Homepage Hero ---
  hero: {
    greeting: "Hi, I'm Coley",
    description:
      "Content designer with 14 years simplifying complex systems. I work across UX writing, IA, plain language, and design systems — for regulated, high-stakes products.",
    info: [
      { label: "Status", value: "Open to work — full-time & contract" },
      { label: "Location", value: "Melbourne, Australia" },
      { label: "Resume", value: "Download PDF", href: "/resume.pdf" },
    ],
  },

  // --- Footer ---
  footer: {
    copyright: "© 2025 Breeze",
    builtWith: "Built with Astro",
  },

  // --- Comments ---
  comments: {
    enabled: false,
    provider: "artalk" as const,
    artalk: {
      server: "https://your-artalk-server.com",
    },
  },

  // --- Feature Toggles ---
  features: {
    search: true,
    rss: true,
  },

  // --- Tools Page Data ---
  tools: [
    { name: "development", items: ["VS Code", "Terminal", "Chrome", "Git"] },
    { name: "design", items: ["Figma"] },
  ],

  // --- UI Labels ---
  // Customize these values to change the text displayed on pages
  labels: {
    postsTitle: "Writing",
    postsDescription: "Notes, thoughts, and technical musings",
    projectsTitle: "Case studies",
    projectsDescription: "Small tools built for fun or to solve real problems.",
    friendsTitle: "Friends",
    friendsDescription: "Like-minded folks around the web.",
    toolsTitle: "Stack",
    aboutTitle: "About",
    aboutDescription: "About this site and its author",
    backToPosts: "Back to posts",
    goHome: "Go Home",
    notFoundTitle: "Page not found",
    notFoundDescription:
      "The page you're looking for may have been removed or the link is broken.",
    endOfPost: "End of Post",
    tableOfContents: "Table of Contents",
    searchPlaceholder: "Search posts, tags, or commands...",
    searchNavigate: "Navigate",
    commentSuccess: "Comment submitted",
  },

  ogImage: "/og-image.png",
} as const;

export default site;
