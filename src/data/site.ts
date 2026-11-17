// ─────────────────────────────────────────────────────────────
// ALL THE TEXT OF THE SITE LIVES IN THIS FILE.
// Profile copy is based on LinkedIn and documented project details.
// You do not need to touch any other file to change what people read.
//
// The home page is the "Poster" design (src/components/Poster.astro).
// hero.intro is also the description search engines and link previews show.
// A few texts only show on the older layouts (/classic and /re/original):
// hero.eyebrow, secondaryCta, the chart, work.intro, experience.intro,
// shortRole and the themes.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Christopher Prieto",
  initials: "CP",
  role: "Software Engineer",
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
      highlight: "reliable systems",
      after: "people can trust.",
    },
    intro:
      "Software engineer who turns messy data and AI-generated code into systems you can verify. I work on the data, logic and APIs behind a product, and I test and trace problems until the answer is proven.",
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
      { label: "Main stack", value: "TypeScript · Python" },
    ],
    // Small chart under the rows. Any list of numbers works
    // (commits per month, study hours, users of a project...).
    chartLabel: "",
    chartPoints: [],
  },

  // The moving strip under the hero. Tools you really use.
  stack: [
    "TypeScript",
    "Python",
    "PostgreSQL",
    "SQL",
    "Testing",
    "Node.js",
    "REST APIs",
    "Docker",
    "Git",
    "React",
  ],

  work: {
    title: "Selected work",
    intro:
      "A selection of what I build: tools that turn raw data into decisions people can act on.",
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
    intro: "Building the logic, data and reliability behind product features as a freelance software engineer.",
    entries: [
      {
        period: "Aug 2025 — Present",
        role: "Software Engineer · Freelance",
        place: "Greater Odd · Remote",
        note: "Shipped a habit tracker with Next.js: wired up the login flow and the habit-history data, and tuned server-side rendering so the data loads reliably. Investigated and fixed bugs across the app to keep it stable as it changed.",
      },
    ],
  },

  about: {
    title: "About",
    paragraphs: [
      "I’m Christopher, a software engineer based in Venezuela. AI can write code quickly now, so my value is in deciding what is worth building, checking what gets generated, and making sure the result is correct, data-driven and stable.",
      "At Greater Odd, I work on the product end to end: login flows, the data behind habit history, and the bugs that show up when real people use it. I’m looking to join teams that care about correctness and use data to make better decisions.",
    ],
    // Working priorities reflected in the LinkedIn profile.
    principles: [
      {
        title: "Judgment over output",
        text: "AI makes code cheap. I decide what is worth building and review what gets generated before it ships.",
      },
      {
        title: "Verify, don’t assume",
        text: "I reproduce bugs, trace their cause and write tests, so AI-written code is proven rather than just plausible.",
      },
      {
        title: "Data into decisions",
        text: "I build pipelines and analysis engines that turn raw data, like match history, into guidance people can act on.",
      },
    ],
  },

  contact: {
    title: "Let's talk",
    text: "I’m open to software engineering roles where I can work on data, backend logic and reliability, and where AI tools are used with careful review. Get in touch by email or LinkedIn.",
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
