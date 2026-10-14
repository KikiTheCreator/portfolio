// ─────────────────────────────────────────────────────────────
// ALL THE TEXT OF THE SITE LIVES IN THIS FILE.
// Everything below is EXAMPLE text. Replace it with your own words.
// You do not need to touch any other file to change what people read.
//
// A few texts only show on the old layout at /classic, not on the home
// page: hero.intro (also used as the description search engines show),
// the chart, work.intro, experience.intro, and contact.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Christopher Prieto",
  initials: "CP",
  role: "Software Engineer · Fintech",
  // Tiny line under your name in the logo. Keep it to two or three words.
  shortRole: "Software Engineer",
  location: "City, Country",
  email: "christophersamuelprieto@gmail.com",
  // Short status shown next to the green dot in the hero.
  status: "Open to work",

  // Which theme a first-time visitor sees: "unit-00" | "unit-01" | "unit-02"
  defaultTheme: "unit-01",

  hero: {
    eyebrow: "Portfolio / 2026",
    // The headline is split in three so the middle part gets the accent color.
    headline: {
      before: "I build software that",
      highlight: "moves money",
      after: "safely.",
    },
    intro:
      "Example intro. In two sentences say who you are, what you build, and why a fintech team should care. Keep it concrete: payments, ledgers, risk, banking APIs.",
    primaryCta: { label: "See my work", href: "#work" },
    secondaryCta: { label: "Contact me", href: "#contact" },
  },

  // The "account summary" panel in the hero. Use real numbers you can defend.
  summary: {
    title: "Summary",
    rows: [
      // "since" (year-month) makes the value count itself up, e.g. "1.3".
      { label: "Years coding", value: "", since: "2025-07" },
      { label: "Projects shipped", value: "00" },
      { label: "Main stack", value: "TypeScript" },
      { label: "Focus", value: "Payments" },
    ],
    // Small chart under the rows. Any list of numbers works
    // (commits per month, study hours, users of a project...).
    chartLabel: "Example chart · commits per month",
    chartPoints: [4, 7, 5, 11, 9, 14, 12, 19, 16, 24, 21, 30],
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
      "Example text. Three projects are enough. For each one say the problem, what you built, and one result with a number.",
    projects: [
      {
        name: "Project One",
        kind: "Payments API",
        year: "2026",
        summary:
          "Example description. What problem did this solve? What did you build? Mention the hard part: idempotency, retries, reconciliation, security.",
        metric: { value: "00%", label: "Example result" },
        tags: ["TypeScript", "PostgreSQL", "Stripe"],
        status: "Live",
        links: [
          { label: "Live demo", href: "#" },
          { label: "Source code", href: "#" },
        ],
      },
      {
        name: "Project Two",
        kind: "Double-entry ledger",
        year: "2025",
        summary:
          "Example description. Explain it like you would to a hiring manager in 20 seconds. One clear sentence beats five vague ones.",
        metric: { value: "0.0s", label: "Example result" },
        tags: ["Node.js", "SQL", "Testing"],
        status: "Live",
        links: [{ label: "Source code", href: "#" }],
      },
      {
        name: "Project Three",
        kind: "Expense dashboard",
        year: "2025",
        summary:
          "Example description. If the project is still in progress, say so. It is fine, as long as you show what already works.",
        metric: { value: "0k", label: "Example result" },
        tags: ["React", "Charts", "Auth"],
        status: "In progress",
        links: [{ label: "Case study", href: "#" }],
      },
    ],
  },

  experience: {
    title: "Experience",
    intro: "Example text. Jobs, freelance, hackathons, studies. Newest first.",
    entries: [
      {
        period: "2025 — Now",
        role: "Your role",
        place: "Company or client",
        note: "Example line. One thing you did and the result it had.",
      },
      {
        period: "2024 — 2025",
        role: "Your role",
        place: "Company or client",
        note: "Example line. One thing you did and the result it had.",
      },
      {
        period: "2023 — 2024",
        role: "Course or degree",
        place: "School or platform",
        note: "Example line. What you learned that you still use today.",
      },
    ],
  },

  about: {
    title: "About",
    paragraphs: [
      "Example paragraph. Tell your story in a few lines: where you come from, how you started programming, what you enjoy building.",
      "Example paragraph. Say why fintech. A personal reason is stronger than a generic one, so write the real one.",
    ],
    // How you work. Fintech teams care about these a lot.
    principles: [
      {
        title: "Correct first",
        text: "Example text. Money bugs are expensive, so I test the edge cases.",
      },
      {
        title: "Secure by default",
        text: "Example text. I treat user data and credentials with care.",
      },
      {
        title: "Clear to read",
        text: "Example text. I write code and docs that the next person understands.",
      },
    ],
  },

  contact: {
    title: "Let's talk",
    text: "Example text. Say what kind of role or project you are looking for and how fast you usually reply.",
  },

  links: [
    { label: "GitHub", href: "https://github.com/KikiTheCreator" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/christopherprietog/" },
    { label: "CV (PDF)", href: "#" },
  ],
};

// The three color themes. Change the labels here; change the colors in
// src/styles/themes.css.
export const themes = [
  { id: "unit-00", label: "00" },
  { id: "unit-01", label: "01" },
  { id: "unit-02", label: "02" },
];
