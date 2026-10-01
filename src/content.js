// All site content lives here. Edit this file; the components just render it.
// Anything in [square brackets] is a placeholder to replace with your real details.

export const profile = {
  name: "Manoj Jayaraman",
  role: "Software Engineer",
  location: "India",
  email: "manojjayaraman2001@gmail.com",
  github: "https://github.com/manoj-jayaraman2001",
  linkedin: "https://www.linkedin.com/in/manoj-jayaraman-37694818b/",
  resume:
    "https://drive.google.com/file/d/1M-bJTNXzNhp8gEGjryxzG-1jKQe8qf4_/view?usp=sharing",
  headline: "I build reliable, scalable web products end to end.",
  intro:
    "Software engineer with 2.5+ years of experience shipping full-stack applications with React, Node.js and MongoDB. I care about clean architecture, performance and the details that make software pleasant to use.",
  status: "Open to new opportunities",
};

export const stats = [
  { value: "2.5+", label: "Years of experience" },
  { value: "[N]", label: "Production features shipped" },
  { value: "[N]", label: "Teams / products worked on" },
];

export const about = [
  "I'm a software engineer from Nellore, Andhra Pradesh, with a B.Tech in Computer Science and Engineering from Bennett University.",
  "Over the past 2.5+ years I've moved from building side projects to shipping production software: designing APIs, building responsive interfaces, and owning features from requirements through release.",
  "Outside of work I cook, listen to music and follow cricket.",
];

export const experience = [
  {
    role: "Software Engineer",
    company: "[Company name]",
    period: "[Mon YYYY] — Present",
    summary: [
      "[Impact statement: what you built, and the measurable result (latency, revenue, users, time saved).]",
      "[Ownership statement: a system or feature you led or designed.]",
      "[Collaboration / mentoring / quality statement.]",
    ],
    stack: ["React", "Node.js", "MongoDB"],
  },
];

// Add your flagship projects here. Each entry becomes a card.
// While this array is empty the section shows a "coming soon" panel.
// Example entry:
// {
//   name: "Project name",
//   tagline: "One line on what it does and why it matters.",
//   problem: "The problem and who it's for.",
//   highlights: ["Key technical decision or result", "Scale / performance numbers"],
//   stack: ["TypeScript", "PostgreSQL"],
//   github: "https://github.com/...",
//   live: "https://...",
// }
export const projects = [];

export const skills = [
  {
    group: "Frontend",
    items: ["React", "Redux Toolkit", "JavaScript (ES6+)", "HTML5 / CSS3", "Tailwind CSS", "Responsive design"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "REST APIs", "Authentication (JWT)", "MongoDB", "MySQL"],
  },
  {
    group: "Tooling",
    items: ["Git & GitHub", "Postman", "Vercel", "Data structures & algorithms"],
  },
];

export const certifications = [
  {
    name: "Full Stack Web Development",
    issuer: "AlmaBetter",
    date: "Aug 2023",
    link: "https://certificates.almabetter.com/en/verify/00548941843694",
  },
  {
    name: "Data Structures & Algorithms",
    issuer: "AlmaBetter",
    date: "Aug 2023",
    link: "https://certificates.almabetter.com/en/verify/45950097674856",
  },
];
