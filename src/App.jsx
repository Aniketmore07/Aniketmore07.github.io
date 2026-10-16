import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Send,
  Server,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

const profile = {
  name: "Aniket More",
  role: "Java Full Stack Developer",
  location: "Pune, Maharashtra, India",
  email: "aniketmore9941@gmail.com",
  phone: "+91-8605089632",
  linkedin: "https://www.linkedin.com/in/aniket-more-b2576919b",
  github: "https://github.com/Aniketmore07",
};

const skillGroups = [
  {
    title: "Backend",
    icon: Server,
    skills: [
      "Java 8+",
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "REST APIs",
      "Microservices",
      "JPA / Hibernate",
      "JWT / OAuth2",
      "Maven",
      "Java Stream API",
    ],
  },
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      "React.js",
      "Angular",
      "JavaScript ES6+",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Zap,
    skills: [
      "AWS EC2",
      "AWS ECS",
      "AWS S3",
      "AWS Lambda",
      "AWS RDS",
      "CloudWatch",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "CI/CD",
      "Git",
    ],
  },
  {
    title: "Data & Messaging",
    icon: BriefcaseBusiness,
    skills: [
      "PostgreSQL",
      "MySQL",
      "Oracle",
      "MongoDB",
      "Redis",
      "Apache Kafka",
      "ActiveMQ",
      "Event-driven architecture",
    ],
  },
];

const experience = [
  {
    company: "SCAN-IT SOLUTION (INDIA) Pvt. Ltd.",
    role: "Associate Software Engineer",
    period: "Mar 2026 – Aug 2026",
    location: "Pune, India",
    points: [
      "Developed and maintained backend services using Java, Spring Boot, microservices and REST APIs.",
      "Integrated frontend applications built with React and Angular with backend APIs.",
      "Worked on Redis caching and SQL query optimization across relational databases.",
      "Supported containerized services and cloud operations using Docker and AWS EC2, S3 and CloudWatch.",
      "Used Maven, Bitbucket, Jira and Postman in day-to-day development and delivery.",
    ],
  },
  {
    company: "CODENEON SOLUTIONS PRIVATE LIMITED",
    role: "Java Full Stack Developer",
    period: "Mar 2023 – Mar 2026",
    location: "Pune, India",
    points: [
      "Built application features using Java, Spring Boot, Angular and REST APIs.",
      "Implemented frontend forms, validations and API integration; resolved defects and improved user flows.",
      "Worked with containerized Spring Boot microservices and AWS EC2, S3 and CloudWatch.",
      "Collaborated with the team through Jira and Agile practices, code reviews and iterative delivery.",
    ],
  },
  {
    company: "Decrypt0",
    role: "Full Stack Web Developer",
    period: "Jun 2022 – Mar 2023",
    location: "Pune, India",
    points: [
      "Developed responsive web interfaces using React.js, JavaScript, HTML and CSS/Tailwind.",
      "Integrated REST APIs and built reusable UI components.",
      "Worked across frontend and Java-based application tasks in an Agile environment.",
    ],
  },
];

const projects = [
  {
    number: "01",
    title: "Banking Transaction Processing System",
    category: "Full Stack",
    summary:
      "A full-stack banking application built with Angular 19 and Spring Boot, featuring secure transactions, role-based access, and asynchronous processing.",
    stack: [
      "Java",
      "Spring Boot",
      "Angular 19",
      "REST APIs",
      "JWT",
      "Kafka",
      "Redis",
      "AWS",
    ],
    highlights: [
      "Implemented authentication and role-based access using JWT.",
      "Used Spring transaction management and rollback handling for data consistency.",
      "Used Kafka for asynchronous events and notifications, with Redis for caching.",
      "Worked on SQL query optimization and indexing.",
    ],
    metric:
      "25% fewer transaction failures · 40% higher throughput · 35% lower API latency",
  },
  {
    number: "02",
    title: "Phoenix FCL & Trucking",
    category: "Full Stack",
    summary:
      "A logistics management application for carrier, trade, commodity and trade-lane maintenance.",
    stack: ["Java", "Spring Boot", "React", "MySQL", "Redis", "Docker"],
    highlights: [
      "Built carrier CRUD, search and filter functionality.",
      "Added validation, centralized exception handling and standardized API responses.",
      "Used Redis caching and optimized MySQL queries and indexes.",
      "Worked on role-based access and containerized deployment workflows.",
    ],
    metric: "Carrier and trade data management",
  },
  {
    number: "03",
    title: "ESG Data Analytics Platform",
    category: "Backend",
    summary:
      "A data-oriented platform using REST services and event streaming to support ESG analytics workflows.",
    stack: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Kafka",
      "Docker",
      "Azure DevOps",
    ],
    highlights: [
      "Developed REST services using Java and Spring Boot.",
      "Used PostgreSQL for structured data persistence and Kafka for event-driven communication.",
      "Worked with CI pipelines, automated testing and deployment validation.",
    ],
    metric: "Automated CI and deployment validation",
  },
];

const filters = ["All", "Backend", "Full Stack"];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);
  const filteredProjects = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="site-header">
        <a
          className="brand"
          href="#home"
          onClick={closeMenu}
          aria-label="Aniket More home"
        >
          <span className="brand-mark">AM</span>
          <span>
            Aniket More<span className="brand-dot">.</span>
          </span>
        </a>
        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav
          className={`nav-links ${menuOpen ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          {["About", "Skills", "Experience", "Projects", "Contact"].map(
            (item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
                {item}
              </a>
            ),
          )}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let's talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="availability">
              <span className="status-dot" /> Java • Spring Boot • React
            </div>
            <p className="hero-kicker">Hello, I'm</p>
            <h1>
              Aniket <span>More</span>
            </h1>
            <h2>
              Building reliable software,
              <br />
              <span className="gradient-text">from API to interface.</span>
            </h2>
            <p className="hero-description">
              Java Full Stack Developer focused on building maintainable backend
              services, REST APIs and practical user experiences with modern web
              technologies.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowRight size={17} />
              </a>
              <a
                className="button button-secondary"
                href="/Aniket_More_Java_fullstack_Developer.pdf"
                download="Aniket_More_Java_fullstack_Developer.pdf"
              >
                <Download size={17} />
                Download Resume
              </a>
            </div>
            <div className="hero-meta">
              <span>
                <MapPin size={15} /> Pune, India
              </span>
              <span>
                <BriefcaseBusiness size={15} /> Java Full Stack Developer
              </span>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="profile-card">
              <div className="profile-card-top">
                <span className="window-dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="card-label">DEV_PROFILE</span>
                <Sparkles size={16} />
              </div>
              <div className="code-avatar">
                <span>{"{ "}</span>
                <Code2 size={54} strokeWidth={1.25} />
                <span>{" }"}</span>
              </div>
              <h3>{profile.name}</h3>
              <p>{profile.role}</p>
              <div className="profile-divider" />
              <div className="profile-stat">
                <span>Primary language</span>
                <strong>Java</strong>
              </div>
              <div className="profile-stat">
                <span>Architecture</span>
                <strong>Microservices</strong>
              </div>
              <div className="profile-stat">
                <span>Mindset</span>
                <strong>Build · Learn · Improve</strong>
              </div>
              <div className="profile-card-bottom">
                <span className="status-dot" /> Available to connect
              </div>
            </div>
            <div className="floating-chip chip-java">
              <span className="chip-icon">☕</span> Java
            </div>
            <div className="floating-chip chip-spring">
              <span className="chip-icon">✳</span> Spring Boot
            </div>
            <div className="floating-chip chip-react">
              <Code2 size={15} /> React
            </div>
          </motion.div>
          <a className="scroll-cue" href="#about">
            <ArrowDown size={15} /> Scroll to explore
          </a>
        </section>

        <section className="section-wrap section-block" id="about">
          <SectionHeading
            eyebrow="01 / ABOUT ME"
            title="Engineering with purpose."
            description="A little about how I approach software development."
          />
          <div className="about-grid">
            <motion.div
              className="about-copy panel"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="large-copy">
                I enjoy turning complex requirements into{" "}
                <span>clear, dependable software.</span>
              </p>
              <p>
                My work spans Java and Spring Boot services, REST API design,
                database performance and frontend integration. I value readable
                code, useful tests, thoughtful error handling and collaboration
                that keeps delivery moving.
              </p>
              <p>
                I'm continuously improving my skills across backend engineering,
                cloud deployment and modern frontend development.
              </p>
              <div className="about-tags">
                <span>Problem solving</span>
                <span>Team collaboration</span>
                <span>Continuous learning</span>
              </div>
            </motion.div>
            <div className="about-side">
              <div className="mini-card">
                <div className="mini-icon">
                  <Server size={19} />
                </div>
                <div>
                  <h3>Backend-first thinking</h3>
                  <p>APIs, service logic, transactions and data.</p>
                </div>
              </div>
              <div className="mini-card">
                <div className="mini-icon">
                  <Code2 size={19} />
                </div>
                <div>
                  <h3>Full stack perspective</h3>
                  <p>Connecting frontend workflows to dependable services.</p>
                </div>
              </div>
              <div className="mini-card">
                <div className="mini-icon">
                  <Zap size={19} />
                </div>
                <div>
                  <h3>Delivery mindset</h3>
                  <p>Version control, CI/CD and cloud fundamentals.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap section-block" id="skills">
          <SectionHeading
            eyebrow="02 / TOOLKIT"
            title="Tools I work with."
            description="A practical toolkit across backend, frontend, cloud and data."
          />
          <div className="skills-grid">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <motion.article
                  className="skill-card panel"
                  key={group.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ delay: index * 0.06 }}
                >
                  <div className="skill-card-heading">
                    <span className="skill-icon">
                      <Icon size={19} />
                    </span>
                    <h3>{group.title}</h3>
                  </div>
                  <div className="skill-pills">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="section-wrap section-block" id="experience">
          <SectionHeading
            eyebrow="03 / EXPERIENCE"
            title="Where I've contributed."
            description="Roles and responsibilities from my professional journey."
          />
          <div className="timeline">
            {experience.map((job, index) => (
              <motion.article
                className="timeline-item"
                key={job.company}
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="timeline-marker">
                  <span />
                </div>
                <div className="timeline-content panel">
                  <div className="experience-top">
                    <div>
                      <span className="eyebrow">{job.period}</span>
                      <h3>{job.role}</h3>
                      <h4>{job.company}</h4>
                    </div>
                    <span className="location-tag">
                      <MapPin size={13} /> {job.location}
                    </span>
                  </div>
                  <ul className="check-list">
                    {job.points.map((point) => (
                      <li key={point}>
                        <Check size={15} /> <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section-wrap section-block" id="projects">
          <SectionHeading
            eyebrow="04 / SELECTED WORK"
            title="Projects, in practice."
            description="A closer look at systems and features I've worked on."
          />
          <div className="project-controls">
            <div
              className="filter-group"
              role="group"
              aria-label="Filter projects"
            >
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={
                    activeFilter === filter
                      ? "filter-button active"
                      : "filter-button"
                  }
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
            <span className="project-count">
              {filteredProjects.length} projects
            </span>
          </div>
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <motion.article
                layout
                className="project-card panel"
                key={project.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.06 }}
              >
                <div className="project-card-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-category">{project.category}</span>
                  <span className="project-symbol">
                    <Code2 size={20} />
                  </span>
                </div>
                <h3>{project.title}</h3>
                <p className="project-summary">{project.summary}</p>
                <div className="project-stack">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="project-bottom">
                  <button
                    className="text-button"
                    onClick={() =>
                      setExpandedProject(
                        expandedProject === project.title
                          ? null
                          : project.title,
                      )
                    }
                    aria-expanded={expandedProject === project.title}
                  >
                    {expandedProject === project.title
                      ? "Hide details"
                      : "View contributions"}{" "}
                    <ArrowRight size={15} />
                  </button>
                </div>
                {expandedProject === project.title && (
                  <motion.div
                    className="project-details"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                  >
                    <ul>
                      {project.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                    <p className="project-metric">{project.metric}</p>
                  </motion.div>
                )}
              </motion.article>
            ))}
          </div>
          <p className="metrics-note">
            Performance figures are as stated in my resume; details can be
            discussed in an interview.
          </p>
        </section>

        <section
          className="section-wrap section-block education-section"
          id="education"
        >
          <SectionHeading eyebrow="05 / EDUCATION" title="The foundation." />
          <div className="education-card panel">
            <div className="education-icon">
              <Code2 size={23} />
            </div>
            <div>
              <h3>Bachelor of Engineering (BE)</h3>
              <p>Sinhgad Institute of Technology, Lonavala</p>
            </div>
            <span className="education-year">May 2022</span>
          </div>
        </section>

        <section
          className="section-wrap section-block contact-section"
          id="contact"
        >
          <div className="contact-card">
            <div className="contact-glow" />
            <span className="eyebrow">06 / CONTACT</span>
            <h2>
              Have a good opportunity
              <br />
              or an interesting problem?
            </h2>
            <p>
              I'm happy to connect, discuss software engineering and explore
              relevant opportunities.
            </p>
            <a
              className="button button-primary"
              href={`mailto:${profile.email}?subject=${encodeURIComponent("Opportunity for Aniket More")}`}
            >
              <Mail size={17} /> Email me <ArrowUpRight size={16} />
            </a>
            <div className="contact-details">
              <a href={`mailto:${profile.email}`}>
                <Mail size={16} /> {profile.email}
              </a>
              <span>
                <MapPin size={16} /> {profile.location}
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">AM</span>
          <span>
            Aniket More<span className="brand-dot">.</span>
          </span>
        </a>
        <p>
          Designed & built with React. © {new Date().getFullYear()} Aniket More.
        </p>
        <div className="social-links">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={17} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={17} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Send size={16} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
