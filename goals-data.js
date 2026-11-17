// Goal content: subjects, milestones, pathways, area colours.
// Pure data — no Firebase, no app state. Edit goals here.

// ============================================================
// DATA: Months 1-6, each with theme, ongoing-habit overrides, goals, and weeks
// ============================================================

// ============================================================
// SEQUENTIAL SUBJECTS — replaces the old calendar-month MONTHS array.
// One subject active at a time. Each has a day-budget (target/guide,
// not a hard deadline) and a set of milestones (~5 days/milestone,
// min 1) that auto-advance daily as you check them off.
// ============================================================

// One subject active at a time. Each has a day-budget (target/guide,
// not a hard deadline) and ONE MILESTONE PER DAY — sized so a single
// day's work is genuinely doable in a day, not a multi-day chunk
// pretending to be "today's task". Quantum Computing is the deliberate
// exception (paced slower, 15-30 min/day, so its hours don't map 1:1
// to its days — see its own milestone list below).
// ============================================================

function milestoneCount(days) {
  return Math.max(1, days);
}

// Builds an array of milestone objects, ONE PER DAY of the budget.
function buildMilestones(subjectId, days, labelFn) {
  const count = milestoneCount(days);
  const milestones = [];
  for (let i = 0; i < count; i++) {
    milestones.push({
      id: `${subjectId}_ms${i + 1}`,
      label: labelFn ? labelFn(i, count) : `Day ${i + 1} of ${count}`,
    });
  }
  return milestones;
}

// Default label generator: "Day 1 of 24", etc.
function defaultLabels(i, count) {
  return `Day ${i + 1} of ${count}`;
}

// For hour-based courses where 1 day = 1 hour exactly: "Hour 1 of 24", etc.
function hourLabels(i, count) {
  return `Hour ${i + 1} of ${count}`;
}

export const SUBJECTS = [
  // ---------------- FOUNDATIONS ----------------
  {
    id: "physics", group: "Foundations", title: "Physics", color: "#3B6FA0",
    icon: "⚛️", budgetDays: 24,
    blurb: "24-hour course — 1 hour a day, work through it properly.",
    why: "Builds the scientific foundation everything else (including Quantum Computing later) leans on.",
    milestones: buildMilestones("physics", 24, hourLabels),
  },
  {
    id: "chemistry", group: "Foundations", title: "Chemistry", color: "#3B6FA0",
    icon: "🧪", budgetDays: 35,
    blurb: "35-hour freeCodeCamp course — 1 hour a day, first-year science-stream level.",
    why: "Keeps pace with university coursework, self-study reinforcing what's taught in class.",
    milestones: buildMilestones("chemistry", 35, hourLabels),
  },
  {
    id: "mathematics", group: "Foundations", title: "Mathematics", color: "#3B6FA0",
    icon: "📐", budgetDays: 12,
    blurb: "12-hour course — 1 hour a day, first-year science-stream level.",
    why: "Same self-study spirit as Chemistry — reinforces what college covers.",
    milestones: buildMilestones("mathematics", 12, hourLabels),
  },
  {
    id: "c_basics", group: "Foundations", title: "C Basics", color: "#3B6FA0",
    icon: "💻", budgetDays: 7,
    blurb: "~4-hour course — a quick, focused win.",
    why: "Programming fundamentals that make Linux and later web dev concepts click faster.",
    milestones: buildMilestones("c_basics", 7, defaultLabels),
    project: { id: "proj_c_basics", text: "Build a small command-line program — a number-guessing game or basic calculator." },
  },
  {
    id: "linux", group: "Foundations", title: "Linux", color: "#3B6FA0",
    icon: "🐧", budgetDays: 21,
    blurb: "Understand the filesystem fully — structure, permissions, key directories.",
    why: "Most servers and security tools run on Linux — foundational for both web dev and security work ahead.",
    milestones: buildMilestones("linux", 21, defaultLabels),
    project: { id: "proj_linux", text: "Set up a small folder structure with correct permissions for a hypothetical multi-user project, and write one short script automating a repetitive task." },
  },

  // ---------------- WEB DEVELOPMENT ----------------
  {
    id: "html_css", group: "Web Development", title: "HTML & CSS Foundations", color: "#C6601E",
    icon: "🌐", budgetDays: 21,
    blurb: "Structure, styling, layout — the building blocks of any webpage.",
    why: "The literal foundation of every website you'll ever build, including your own portfolio.",
    milestones: buildMilestones("html_css", 21, defaultLabels),
    project: { id: "proj_html_css", text: "Build a single static page (e.g. a personal bio page) using semantic HTML and a responsive layout." },
  },
  {
    id: "javascript", group: "Web Development", title: "JavaScript Fundamentals", color: "#C6601E",
    icon: "📜", budgetDays: 21,
    blurb: "Logic, DOM manipulation, interactivity — the most important skill in web dev.",
    why: "Nothing on the web moves without it — and it's the gateway to React next.",
    milestones: buildMilestones("javascript", 21, defaultLabels),
    project: { id: "proj_javascript", text: "Build a small interactive feature — a to-do list or simple counter with DOM manipulation." },
  },
  {
    id: "css_tools", group: "Web Development", title: "Modern CSS & Developer Tools", color: "#C6601E",
    icon: "🛠️", budgetDays: 14,
    blurb: "Tailwind, Git & GitHub, VS Code, browser DevTools.",
    why: "The daily-use tools every professional web developer relies on.",
    milestones: buildMilestones("css_tools", 14, defaultLabels),
    project: { id: "proj_css_tools", text: "Take an earlier page and restyle it with Tailwind, then push it to a real Git repo with at least 3 commits." },
  },
  {
    id: "react", group: "Web Development", title: "React", color: "#C6601E",
    icon: "⚛️", budgetDays: 30,
    blurb: "Components, hooks, state management, Next.js basics.",
    why: "Appears in more job listings than any other frontend framework.",
    milestones: buildMilestones("react", 30, defaultLabels),
    project: { id: "proj_react", text: "Build a small multi-component app (e.g. a notes app) using hooks and basic state." },
  },
  {
    id: "pro_skills", group: "Web Development", title: "Professional Skills", color: "#C6601E",
    icon: "🎯", budgetDays: 21,
    blurb: "TypeScript, AI-assisted development, performance & Core Web Vitals.",
    why: "What separates a hobbyist from someone employers take seriously in 2026.",
    milestones: buildMilestones("pro_skills", 21, defaultLabels),
    project: { id: "proj_pro_skills", text: "Convert one existing JS file to TypeScript, and run a Lighthouse performance check on a deployed page." },
  },
  {
    id: "web_portfolio", group: "Web Development", title: "Portfolio", color: "#C6601E",
    icon: "📁", budgetDays: 14,
    blurb: "3–5 real, deployed, responsive projects.",
    why: "Beats any certificate — proof you can actually build things.",
    milestones: buildMilestones("web_portfolio", 14, defaultLabels),
    project: { id: "proj_web_portfolio", text: "Deploy the portfolio site live (Vercel/Netlify/GitHub Pages) with at least 3 real projects linked." },
  },

  // ---------------- SECURITY ----------------
  {
    id: "web_sec_basics", group: "Security", title: "Web Security Basics", color: "#B5482A",
    icon: "🔒", budgetDays: 7,
    blurb: "HTTP, client/server, what a vulnerability actually is.",
    why: "Groundwork that makes the OWASP lists click instead of being abstract buzzwords.",
    milestones: buildMilestones("web_sec_basics", 7, defaultLabels),
  },
  {
    id: "owasp_2017", group: "Security", title: "OWASP Top 10 (2017)", color: "#B5482A",
    icon: "🛡️", budgetDays: 7,
    blurb: "The original, simplest list — start here.",
    why: "The historical baseline everything since has built on.",
    milestones: buildMilestones("owasp_2017", 7, defaultLabels),
  },
  {
    id: "owasp_2021", group: "Security", title: "OWASP Top 10 (2021)", color: "#B5482A",
    icon: "🛡️", budgetDays: 4,
    blurb: "Compare against 2017 — what changed, and why.",
    why: "Seeing what changed cements understanding better than memorizing in isolation.",
    milestones: buildMilestones("owasp_2021", 4, defaultLabels),
  },
  {
    id: "owasp_2025", group: "Security", title: "OWASP Top 10 (2025)", color: "#B5482A",
    icon: "🛡️", budgetDays: 4,
    blurb: "Compare against 2021 — what changed, and why.",
    why: "The most current picture of what attackers actually exploit today.",
    milestones: buildMilestones("owasp_2025", 4, defaultLabels),
  },
  {
    id: "applied_security", group: "Security", title: "Applied Security Project", color: "#B5482A",
    icon: "🔍", budgetDays: 7,
    blurb: "Build a form-based page, analyze it for OWASP-relevant weaknesses, fix and document.",
    why: "Turns theory into a real, explainable resume talking point.",
    milestones: buildMilestones("applied_security", 7, defaultLabels),
  },

  // ---------------- CAREER ----------------
  {
    id: "draft_resume", group: "Career", title: "Draft Resume", color: "#1F3A5F",
    icon: "📝", budgetDays: 2,
    blurb: "Get everything down — structure, sections, all skills/certificates.",
    why: "The first real artifact in the job-search process.",
    milestones: buildMilestones("draft_resume", 2, defaultLabels),
  },
  {
    id: "refine_resume", group: "Career", title: "Refine Resume", color: "#1F3A5F",
    icon: "✨", budgetDays: 1,
    blurb: "Tighten wording, make the web dev/security sections concrete.",
    why: "A sharp resume is what actually gets read past the first ten seconds.",
    milestones: buildMilestones("refine_resume", 1, defaultLabels),
  },
  {
    id: "career_portfolio", group: "Career", title: "Portfolio Project", color: "#1F3A5F",
    icon: "📁", budgetDays: 3,
    blurb: "Something real to point to in interviews.",
    why: "Talking about a real project beats reciting a list of skills.",
    milestones: buildMilestones("career_portfolio", 3, defaultLabels),
  },
  {
    id: "interview_prep", group: "Career", title: "Interview Prep", color: "#1F3A5F",
    icon: "🎤", budgetDays: 7,
    blurb: "Common questions + your own \"tell me about a project\" answer.",
    why: "Skills without the ability to talk about them don't land the job.",
    milestones: buildMilestones("interview_prep", 7, defaultLabels),
  },
  {
    id: "start_applying", group: "Career", title: "Start Applying", color: "#1F3A5F",
    icon: "🚀", budgetDays: null, // open-ended, no fixed budget
    blurb: "Freelance (Upwork/Fiverr) + internships/LinkedIn — whichever comes first.",
    why: "This is the actual goal the last several subjects were preparing for.",
    milestones: [{ id: "start_applying_ms1", label: "Applying — ongoing until something lands" }],
    openEnded: true,
  },

  // ---------------- GAME DEVELOPMENT ----------------
  {
    id: "godot_course", group: "Game Development", title: "Godot Course", color: "#3C8C6B",
    icon: "🎮", budgetDays: 9,
    blurb: "9-hour course covering Godot + GDScript basics — 1 hour a day.",
    why: "Learn the tool properly before building the real thing.",
    milestones: buildMilestones("godot_course", 9, hourLabels),
    project: { id: "proj_godot_course", text: "Build a tiny standalone scene — a character that moves, jumps, and hits one obstacle." },
  },
  {
    id: "build_game", group: "Game Development", title: "Build & Ship the Platformer", color: "#3C8C6B",
    icon: "🏁", budgetDays: 21,
    blurb: "The actual Geometry-Dash-style game, built using what the course taught. Soft target — flexible.",
    why: "The original passion-project goal — now backed by real skills.",
    milestones: buildMilestones("build_game", 21, defaultLabels),
    softTarget: true,
  },

  // ---------------- ADVANCED ----------------
  {
    id: "quantum", group: "Advanced", title: "Quantum Computing", color: "#7A5195",
    icon: "🌀", budgetDays: 36,
    blurb: "12-hour course, paced 15–30 min/day — deliberately slower than the other courses.",
    why: "Benefits from Physics and Math already being done — saved for last on purpose.",
    milestones: buildMilestones("quantum", 36, (i, n) => `Day ${i + 1} of ${n} — ~15–30 min`),
  },
];

export const SUBJECT_GROUPS = ["Foundations", "Web Development", "Security", "Career", "Game Development", "Advanced"];

export const AREA_COLORS = {
  "Foundations": "#3B6FA0", "Web Development": "#C6601E", "Security": "#B5482A",
  "Career": "#1F3A5F", "Game Development": "#3C8C6B", "Advanced": "#7A5195",
  "Personal": "#3C8C6B", "Health": "#B5482A",
};
export const ONGOING_HABITS = [
  { id: "h_chess", label: "Chess", detail: "a game or a review" },
  { id: "h_jp", label: "Japanese", detail: "10–15 min" },
  { id: "h_box", label: "Boxing", detail: "if it's a training day" },
];

// ============================================================
// PATHWAYS — timeless, subject-based "what to learn next" checklists.
// Independent of the Month/Week system on purpose — these track topic
// progress, not schedule. Some content naturally overlaps with the
// Months (e.g. Linux, OWASP) — that's intentional, not a bug.
// ============================================================
export const PATHWAYS = [
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    color: "#B5482A",
    icon: "🛡️",
    blurb: "Networking → Linux → OS → Security fundamentals → OWASP → Hands-on labs → Specialization → Portfolio",
    stages: [
      {
        id: "cs1", title: "Networking Foundations",
        note: "The single most valuable foundation before specializing in any area of security.",
        items: [
          { id: "cs1a", text: "OSI model & TCP/IP model" },
          { id: "cs1b", text: "IP addressing & subnetting" },
          { id: "cs1c", text: "DNS — how domain names resolve to IPs" },
          { id: "cs1d", text: "HTTP & HTTPS — how web traffic works" },
          { id: "cs1e", text: "Firewalls — how they filter traffic" },
          { id: "cs1f", text: "Common protocols: FTP, SSH, SMTP, DHCP" },
        ]
      },
      {
        id: "cs2", title: "Linux for Security",
        note: "The majority of servers and security tools run on Linux.",
        items: [
          { id: "cs2a", text: "Navigating the directory structure" },
          { id: "cs2b", text: "Core commands: ls, cd, cp, mv, rm, grep, find" },
          { id: "cs2c", text: "File permissions & chmod" },
          { id: "cs2d", text: "Text editors: nano or vim" },
          { id: "cs2e", text: "Managing running processes" },
          { id: "cs2f", text: "How networking is configured in Linux" },
        ]
      },
      {
        id: "cs3", title: "Operating Systems Deeper",
        note: "Most enterprise environments run Windows — security needs both sides.",
        items: [
          { id: "cs3a", text: "How processes & threads work" },
          { id: "cs3b", text: "Windows Active Directory basics" },
          { id: "cs3c", text: "How the Windows registry functions" },
          { id: "cs3d", text: "Authentication in Windows & Linux" },
          { id: "cs3e", text: "How malware interacts with OS internals" },
        ]
      },
      {
        id: "cs4", title: "Security Fundamentals",
        note: "The core concepts that underpin every area of cybersecurity.",
        items: [
          { id: "cs4a", text: "CIA triad — Confidentiality, Integrity, Availability" },
          { id: "cs4b", text: "Authentication vs authorization" },
          { id: "cs4c", text: "Common attacks: phishing, malware, MITM, DoS" },
          { id: "cs4d", text: "Cryptography basics — encryption, hashing, signatures" },
          { id: "cs4e", text: "Firewalls, IDS, and SIEM platforms" },
          { id: "cs4f", text: "Frameworks: NIST CSF, ISO 27001, MITRE ATT&CK" },
        ]
      },
      {
        id: "cs5", title: "OWASP Top 10",
        note: "Already underway in Month 3 — tracked here too as its own milestone.",
        items: [
          { id: "cs5a", text: "OWASP Top 10 (2017) — learned & understood" },
          { id: "cs5b", text: "OWASP Top 10 (2021) — learned & compared vs 2017" },
          { id: "cs5c", text: "OWASP Top 10 (2025) — learned & compared vs 2021" },
          { id: "cs5d", text: "Can recall all three lists from memory" },
        ]
      },
      {
        id: "cs6", title: "Hands-On Practice",
        note: "Reading about security and doing security are very different things.",
        items: [
          { id: "cs6a", text: "TryHackMe — Pre-Security path" },
          { id: "cs6b", text: "TryHackMe — Complete Beginner path" },
          { id: "cs6c", text: "PortSwigger Web Security Academy — work through core modules" },
          { id: "cs6d", text: "Hack The Box — first retired machine (once ready)" },
        ]
      },
      {
        id: "cs7", title: "Specialization + First Certification",
        note: "Pick a direction once fundamentals are solid — don't try to master everything at once.",
        items: [
          { id: "cs7a", text: "Explore specializations: pentesting, SOC, cloud, appsec, threat intel" },
          { id: "cs7b", text: "Pick a direction that genuinely interests you" },
          { id: "cs7c", text: "Study toward CompTIA Security+ (or eJPT if pentesting-focused)" },
          { id: "cs7d", text: "Sit the certification exam" },
        ]
      },
      {
        id: "cs8", title: "Portfolio",
        note: "Demonstrates you can actually do the work — not just pass exams.",
        items: [
          { id: "cs8a", text: "Publish TryHackMe/HTB writeups (blog or GitHub)" },
          { id: "cs8b", text: "Participate in a CTF and write up the solution" },
          { id: "cs8c", text: "Set up a home lab, document what you built" },
          { id: "cs8d", text: "Apply to SOC Analyst / Junior Pentester / Security Analyst roles" },
        ]
      },
    ]
  },
  {
    id: "webdev",
    title: "Web Development",
    color: "#C6601E",
    icon: "💻",
    blurb: "Frontend-deep: HTML/CSS/JS → Modern tools → React → Professional skills → Portfolio",
    stages: [
      {
        id: "wd1", title: "HTML & CSS Foundations",
        note: "Already underway in Month 2 — tracked here too as its own milestone.",
        items: [
          { id: "wd1a", text: "Semantic HTML5 elements (header, main, section, article, footer)" },
          { id: "wd1b", text: "Forms, input types, validation attributes" },
          { id: "wd1c", text: "Accessibility basics — ARIA labels, alt text, keyboard navigation" },
          { id: "wd1d", text: "CSS Flexbox — one-dimensional layouts" },
          { id: "wd1e", text: "CSS Grid — two-dimensional layouts" },
          { id: "wd1f", text: "Responsive design — media queries, mobile-first" },
        ]
      },
      {
        id: "wd2", title: "JavaScript Fundamentals",
        note: "Already underway in Month 2 — the most important skill in the whole roadmap.",
        items: [
          { id: "wd2a", text: "Variables, data types, operators, control flow" },
          { id: "wd2b", text: "Functions, scope, closures, 'this'" },
          { id: "wd2c", text: "DOM manipulation — select, create, modify, delete elements" },
          { id: "wd2d", text: "Asynchronous JS — Promises, async/await, Fetch API" },
          { id: "wd2e", text: "ES6+ syntax — arrow functions, destructuring, spread, modules" },
        ]
      },
      {
        id: "wd3", title: "Modern CSS & Developer Tools",
        note: "The daily-use tools every professional web developer relies on.",
        items: [
          { id: "wd3a", text: "CSS custom properties (variables)" },
          { id: "wd3b", text: "Tailwind CSS — utility-first styling" },
          { id: "wd3c", text: "Git & GitHub — version control basics" },
          { id: "wd3d", text: "VS Code — shortcuts, Prettier, ESLint, Live Server" },
          { id: "wd3e", text: "Browser DevTools — inspect, network, breakpoints, performance" },
        ]
      },
      {
        id: "wd4", title: "React",
        note: "The framework that appears in more job listings than any other frontend tech.",
        items: [
          { id: "wd4a", text: "Components — functional components, component hierarchy" },
          { id: "wd4b", text: "JSX syntax" },
          { id: "wd4c", text: "Hooks — useState, useEffect, useContext" },
          { id: "wd4d", text: "State management — Context, when to reach for Redux/Zustand" },
          { id: "wd4e", text: "Next.js basics — routing, SSR, performance" },
        ]
      },
      {
        id: "wd5", title: "Professional Skills",
        note: "What separates a hobbyist from someone employers take seriously in 2026.",
        items: [
          { id: "wd5a", text: "TypeScript — static typing on top of JavaScript" },
          { id: "wd5b", text: "AI-assisted development — using tools like Copilot/Cursor well" },
          { id: "wd5c", text: "Core Web Vitals & performance — lazy loading, code splitting, caching" },
        ]
      },
      {
        id: "wd6", title: "Portfolio",
        note: "3–5 real, deployed, responsive projects beat any certificate.",
        items: [
          { id: "wd6a", text: "Project 1 — deployed and live (Vercel/Netlify/GitHub Pages)" },
          { id: "wd6b", text: "Project 2 — solves a real problem, not just a demo" },
          { id: "wd6c", text: "Project 3 — fully responsive, clean documented code" },
          { id: "wd6d", text: "Personal portfolio site showcasing all projects" },
        ]
      },
    ]
  },
  {
    id: "gamedev",
    title: "Game Development",
    color: "#3C8C6B",
    icon: "🎮",
    blurb: "Godot + GDScript: Foundations → 2D Essentials → UI → Game Systems → Polish → Ship",
    stages: [
      {
        id: "gd1", title: "Engine & GDScript Foundations",
        note: "Already underway in Month 6 — tracked here too as its own milestone.",
        items: [
          { id: "gd1a", text: "Nodes, scenes, and the scene tree hierarchy" },
          { id: "gd1b", text: "GDScript syntax — variables, functions, control flow" },
          { id: "gd1c", text: "Signals — connecting events between nodes" },
          { id: "gd1d", text: "Input handling — keyboard, Input singleton, InputEvent" },
          { id: "gd1e", text: "Scene instancing & inheritance — reusable templates" },
          { id: "gd1f", text: "Autoload singletons — basic global state" },
        ]
      },
      {
        id: "gd2", title: "2D Essentials",
        note: "The core building blocks of any 2D platformer.",
        items: [
          { id: "gd2a", text: "Sprites & sprite animation" },
          { id: "gd2b", text: "2D coordinate system — position, rotation, scale" },
          { id: "gd2c", text: "TileMap — building levels from tiles" },
          { id: "gd2d", text: "Collision detection — Area2D, CollisionShape2D" },
          { id: "gd2e", text: "Physics — gravity, velocity, CharacterBody2D" },
          { id: "gd2f", text: "Jump mechanic that feels right" },
        ]
      },
      {
        id: "gd3", title: "UI Systems",
        note: "Menus and HUD turn a tech demo into something that feels like a real game.",
        items: [
          { id: "gd3a", text: "Main menu — start, retry, quit" },
          { id: "gd3b", text: "HUD — score/progress display during play" },
          { id: "gd3c", text: "Dialogs/popups — pause, game over" },
          { id: "gd3d", text: "Themes & layout containers — consistent UI styling" },
        ]
      },
      {
        id: "gd4", title: "Game Systems",
        note: "The logic that makes a platformer like Geometry Dash actually work.",
        items: [
          { id: "gd4a", text: "State machine — player states (running, jumping, dead)" },
          { id: "gd4b", text: "Instant-death / retry loop" },
          { id: "gd4c", text: "Scoring & progress tracking" },
          { id: "gd4d", text: "Save/load — best score, unlocked levels" },
        ]
      },
      {
        id: "gd5", title: "Polish & Tools",
        note: "What separates a prototype from something that feels good to play.",
        items: [
          { id: "gd5a", text: "Audio — sound effects and background music" },
          { id: "gd5b", text: "Game feel / \"juice\" — screen shake, particles, feedback" },
          { id: "gd5c", text: "Profiling — find and fix performance bottlenecks" },
          { id: "gd5d", text: "Export presets — build for your target platform" },
        ]
      },
      {
        id: "gd6", title: "Ship & Portfolio",
        note: "A finished, playable game beats a dozen unfinished prototypes.",
        items: [
          { id: "gd6a", text: "Finished, playable build — start to finish, no major bugs" },
          { id: "gd6b", text: "Published somewhere (e.g. itch.io)" },
          { id: "gd6c", text: "Written devlog or postmortem — what you built, what you learned" },
          { id: "gd6d", text: "Shared for feedback (friends, a community, socials)" },
        ]
      },
    ]
  },
];

