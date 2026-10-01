import { useEffect, useState } from "react";
import {
  profile,
  stats,
  about,
  experience,
  projects,
  skills,
  certifications,
} from "./content.js";

const NAV = [
  ["about", "About"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["skills", "Skills"],
  ["contact", "Contact"],
];

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

function useTheme() {
  const [theme, setTheme] = useState(
    () =>
      document.documentElement.dataset.theme ||
      (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark")
  );
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* storage unavailable */
    }
  }, [theme]);
  return [theme, () => setTheme((t) => (t === "dark" ? "light" : "dark"))];
}

function useActiveSection(ids) {
  const [active, setActive] = useState("");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids]);
  return active;
}

function Header({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(NAV.map(([id]) => id));
  return (
    <header className="header">
      <div className="wrap header-inner">
        <a href="#top" className="brand" aria-label="Home">
          manoj<span>.dev</span>
        </a>
        <nav className={`nav ${open ? "open" : ""}`} aria-label="Primary">
          {NAV.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>
          <button
            className="icon-btn menu-btn"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero wrap" id="top">
      <p className="status">
        <span className="dot" /> {profile.status}
      </p>
      <h1>
        {profile.name}
        <span className="role">{profile.role}</span>
      </h1>
      <p className="headline">{profile.headline}</p>
      <p className="intro">{profile.intro}</p>
      <div className="cta">
        <a className="btn primary" href="#contact">Get in touch</a>
        <a className="btn" href={profile.resume} target="_blank" rel="noreferrer">
          Resume <Arrow />
        </a>
        <a className="btn ghost" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        <a className="btn ghost" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
      <dl className="stats">
        {stats.map((s) => (
          <div key={s.label}>
            <dt>{s.value}</dt>
            <dd>{s.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

const Section = ({ id, title, kicker, children }) => (
  <section id={id} className="section wrap">
    <div className="section-head">
      <span className="kicker">{kicker}</span>
      <h2>{title}</h2>
    </div>
    {children}
  </section>
);

function About() {
  return (
    <Section id="about" kicker="01" title="About">
      <div className="about-grid">
        <div className="prose">
          {about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div>
          <h3 className="mini">Certifications</h3>
          <ul className="certs">
            {certifications.map((c) => (
              <li key={c.name}>
                <a href={c.link} target="_blank" rel="noreferrer">
                  {c.name} <Arrow />
                </a>
                <span>{c.issuer} · {c.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" kicker="02" title="Experience">
      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.company + job.period}>
            <div className="job-head">
              <h3>
                {job.role} <span className="at">· {job.company}</span>
              </h3>
              <span className="period">{job.period}</span>
            </div>
            <ul className="bullets">
              {job.summary.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <ul className="tags">
              {job.stack.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" kicker="03" title="Projects">
      {projects.length === 0 ? (
        <div className="empty">
          <h3>Flagship projects are in the works</h3>
          <p>
            I&apos;m building a new set of production-grade projects and will publish each with
            a full write-up. In the meantime, my code is on{" "}
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>.
          </p>
        </div>
      ) : (
        <div className="cards">
          {projects.map((p) => (
            <article className="card" key={p.name}>
              <h3>{p.name}</h3>
              <p className="tagline">{p.tagline}</p>
              {p.problem && <p className="muted">{p.problem}</p>}
              {p.highlights && (
                <ul className="bullets">
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}
              <ul className="tags">
                {p.stack.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <div className="card-links">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer">Live <Arrow /></a>
                )}
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer">Source <Arrow /></a>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" kicker="04" title="Skills">
      <div className="skill-groups">
        {skills.map((g) => (
          <div key={g.group}>
            <h3 className="mini">{g.group}</h3>
            <ul className="tags">
              {g.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" kicker="05" title="Let&apos;s talk">
      <p className="contact-lead">
        I&apos;m interested in senior-track engineering roles and well-scoped, interesting
        problems. The fastest way to reach me is email.
      </p>
      <a className="btn primary big" href={`mailto:${profile.email}`}>{profile.email}</a>
    </Section>
  );
}

export default function App() {
  const [theme, toggleTheme] = useTheme();
  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer wrap">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built with React &amp; Vite</span>
      </footer>
    </>
  );
}
