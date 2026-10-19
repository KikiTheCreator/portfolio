// ─────────────────────────────────────────────────────────────
// ALL THE TEXT OF THE SITE LIVES IN THIS FILE.
// Profile copy is based on LinkedIn and documented project details.
// You do not need to touch any other file to change what people read.
//
// A few texts only show on the old layout at /classic, not on the home
// page: hero.intro (also used as the description search engines show),
// the chart, work.intro, experience.intro, and contact.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Christopher Prieto",
  initials: "CP",
  role: "Software Engineer · Frontend",
  // Tiny line under your name in the logo. Keep it to two or three words.
  shortRole: "Software Engineer",
  location: "Venezuela",
  email: "christophersamuelprieto@gmail.com",
  // Short status shown next to the green dot in the hero.
  status: "Open to work",

  // Which theme a first-time visitor sees: "unit-00" | "unit-01" | "unit-02"
  defaultTheme: "unit-01",

  hero: {
    eyebrow: "Portfolio / 2026",
    // The headline is split in three so the middle part gets the accent color.
    headline: {
      before: "I build",
      highlight: "fast interfaces",
      after: "that feel right.",
    },
    intro:
      "Software engineer focused on performant interfaces with Next.js and React Native. I build responsive experiences with an emphasis on client-side efficiency, product stability, and visual detail.",
    primaryCta: { label: "See my work", href: "#work" },
    secondaryCta: { label: "Contact me", href: "#contact" },
  },

  // The "account summary" panel in the hero. Use real numbers you can defend.
  summary: {
    title: "Summary",
    rows: [
      // "since" (year-month) makes the value count itself up, e.g. "1.3".
      { label: "Years coding", value: "", since: "2025-08" },
      { label: "Featured project", value: "Zen" },
      { label: "Main stack", value: "TypeScript" },
      { label: "Focus", value: "Frontend" },
    ],
    // Small chart under the rows. Any list of numbers works
    // (commits per month, study hours, users of a project...).
    chartLabel: "",
    chartPoints: [],
  },

  // The moving strip under the hero. Tools you really use.
  stack: [
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "React",
    "Python",
    "Docker",
    "REST APIs",
    "Testing",
    "SQL",
    "Git",
  ],

  work: {
    title: "Selected work",
    intro:
      "A selection of what I build, from responsive interfaces to tools that turn data into practical guidance.",
    projects: [
      {
        name: "Zen",
        kind: "League of Legends learning app",
        year: "2026",
        summary:
          "Turn match data into actionable lessons. Zen reviews your games, helps you choose champions from your own pool, and connects mistakes to focused lessons through a shared TypeScript analysis engine.",
        metric: { value: "3", label: "Core tools: reviews, draft & lessons" },
        tags: ["TypeScript", "Next.js", "React", "Riot API"],
        status: "Live",
        links: [
          { label: "Visit Zen", href: "https://zen-pi-ten.vercel.app/" },
        ],
      },

    ],
  },

  experience: {
    title: "Experience",
    intro: "Building responsive, performant interfaces as a freelance software engineer.",
    entries: [
      {
        period: "Aug 2025 — Present",
        role: "Software Engineer · Freelance",
        place: "Greater Odd · Remote",
        note: "Built a habit tracker interface with Next.js, optimizing components and server-side rendering for faster loading. Implemented an interactive habit-history calendar with Shadcn UI, integrated the login flow, and built responsive layouts with Tailwind CSS. Resolved frontend bugs and refined visual consistency to improve product stability.",
      },
    ],
  },

  about: {
    title: "About",
    paragraphs: [
      "I’m Christopher, a software engineer based in Venezuela. I create interfaces with Next.js and React Native, focusing on client-side performance, product stability, and visual appeal.",
      "At Greater Odd, I work on frontend product development, from responsive layouts and login flows to interactive calendars. I’m looking to join teams that value quality and contribute to products people enjoy using.",
    ],
    // Working priorities reflected in the LinkedIn profile.
    principles: [
      {
        title: "Performance first",
        text: "I optimize components and rendering to keep interfaces lightweight and responsive.",
      },
      {
        title: "Stable products",
        text: "I investigate frontend bugs and refine behavior to improve product reliability.",
      },
      {
        title: "Visual consistency",
        text: "I pay attention to visual details and build layouts that work across screen sizes.",
      },
    ],
  },

  contact: {
    title: "Let's talk",
    text: "I’m open to frontend developer opportunities where I can contribute to performant, thoughtfully built products. Get in touch by email or LinkedIn.",
  },

  links: [
    { label: "GitHub", href: "https://github.com/KikiTheCreator" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/christopherprietog/" },
  ],
};

// The three color themes. Change the labels here; change the colors in
// src/styles/themes.css.
export const themes = [
  { id: "unit-00", label: "00" },
  { id: "unit-01", label: "01" },
  { id: "unit-02", label: "02" },
];
