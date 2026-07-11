import Image from "next/image";
import Link from "next/link";

function statusClass(status: string) {
  if (status === "Deployed") return "status-badge status-deployed";
  if (status === "Completed") return "status-badge status-completed";
  return "status-badge status-progress";
}

type Project = {
  title: string;
  status: string;
  href: string;
  image?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  placeholderTone?: "ocean" | "slate" | "amber" | "default";
  placeholderCode?: string;
  summary: string;
  highlight: string;
  technologies: string[];
};

export default function Home() {
  const interests = [
    {
      title: "Training for My First Half Marathon",
      image: "/interests/Fleet_feet.JPG",
      layout: "split" as const,
      description:
        "I'm currently training for the Toronto Waterfront Half Marathon in October 2026. Along the way I've joined Fleet Feet Princeton's running community, signed up for their upcoming mile race, and started exploring local group runs around Princeton and Philadelphia. Running has become one of my favorite ways to clear my head. It's one of the few times during the day where I don't feel like I have to solve a problem - I just have to keep moving. It's also introduced me to an incredibly welcoming community. I've met runners of all experience levels simply by showing up to local group runs, from people training for their first 5K to someone who had completed 27 marathons. One runner told me, \"You just have to show up,\" and that has been my experience too. I enjoy hearing how different people train, what they've learned over the years, and the pieces of advice they pick up along the way",
    },
    {
      title: "Auditing Classes at Princeton",
      image: "/interests/princeton.png",
      layout: "stack" as const,
      description:
        "While working full-time at NEC, I audited Princeton's Stochastic Systems and Probability course. More recently, I was invited to sit in on EGR 395: Venture Capital and Finance of Innovation, a course that explores how investors evaluate startups, manage risk, and fund innovation.",
    },
    {
      title: "Learning Blender",
      image: "/interests/blender-room.gif",
      layout: "stack" as const,
      description:
        "Recently I’ve been teaching myself Blender through small projects, including an animated room environment and a 3D recreation of NEC’s fiber sensing hardware.",
    },
  ];

  // Interactive / demo-backed work first; non-interactive (OCR) later.
  const projects: Project[] = [
    {
      title: "Fiber Sensing Visualization Platform",
      status: "Completed",
      href: "/projects/fiber-sensing-visualization",
      image: "/fiber-sensing/fiber-to-room-card.jpg",
      imageAlt:
        "Left: simplified fiber routing beneath the demo room. Right: early movement-tracking visualization projecting sensing activity onto the room layout.",
      imageFit: "contain",
      summary:
        "Replaced NEC's LabVIEW demos with a real-time web platform that turns high-volume distributed fiber sensing into room-scale visualizations for researchers and executives",
      highlight: "Processed 10–20M sensing data points/sec across 230m of fiber",
      technologies: ["Python", "JavaScript", "Three.js", "RabbitMQ"],
    },
    {
      title: "Weekly Reporting Platform",
      status: "Deployed",
      href: "/projects/weekly-reporting",
      image: "/weekly-reporting/weekly-submission-card.jpg",
      imageAlt: "Weekly reporting submission application screenshot",
      imageFit: "contain",
      summary:
        "Power Apps and Power Automate system that standardizes weekly department reporting for NEC Laboratories America",
      highlight: "Standardized reporting across 5 NLA departments",
      technologies: ["Power Apps", "Power Automate", "SharePoint Lists"],
    },
    {
      title: "NECLA Externally Funded Project Tracking Platform",
      status: "In Progress",
      href: "/projects/necla-project-tracking",
      image: "/necla-project-tracking/dashboard-card.jpg",
      imageAlt: "NECLA project tracking dashboard screenshot",
      imageFit: "contain",
      summary:
        "Full-stack MVP for planning externally funded research projects, labor, and incremental spend in one place",
      highlight: "Centralized project, funding, and labor planning",
      technologies: ["React", "TypeScript", "FastAPI", "PostgreSQL"],
    },
    {
      title: "Bargaining Experiment",
      status: "Completed",
      href: "/projects/bargaining-experiment",
      image: "/bargaining-experiment/interface-card.jpg",
      imageAlt: "Bargaining experiment triangle interface concept",
      imageFit: "contain",
      summary:
        "Interactive oTree experiment studying gender-based negotiation strategies with dynamic offers and real-time currency decay",
      highlight: "Built under supervision of Prof. Andrzej Baranski",
      technologies: ["Python", "JavaScript", "oTree", "Behavioral Economics"],
    },
    {
      title: "NurSync",
      status: "Completed",
      href: "/projects/nursync",
      placeholderTone: "slate",
      placeholderCode: "demo · ranked 1st / 15",
      summary:
        "Full-stack peer-support platform for nursing students with anonymous discussion, authentication, and moderation",
      highlight: "Ranked 1st out of 15 software engineering teams",
      technologies: ["JavaScript", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "Tax-Man Finder",
      status: "In Progress",
      href: "/projects/tax-man-finder",
      placeholderTone: "ocean",
      placeholderCode: "full-stack · websockets",
      summary:
        "Full-stack web app connecting users with tax professionals through messaging, inquiries, and appointment booking",
      highlight: "Built real-time messaging using WebSockets",
      technologies: ["Django", "React", "PostgreSQL", "WebSockets"],
    },
    {
      title: "OCR Statement Extraction",
      status: "In Progress",
      href: "/projects/ocr-statement-extraction",
      placeholderTone: "amber",
      placeholderCode: "pipeline · in progress",
      summary:
        "Python OCR pipeline that extracts structured transaction data from visually laid-out bank and credit card PDFs",
      highlight: "Parses statement transactions with layout-aware OCR",
      technologies: ["Python", "Pandas", "pytesseract", "OCR"],
    },
  ];

  return (
    <>
      <header className="site-header">
        <div className="site-header-inner">
          <Link href="/" className="site-logo">
            Bailey Yi
          </Link>
          <nav className="site-nav" aria-label="Primary">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#outside">Outside</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>

      <main className="page-shell">
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-grid">
            <div className="hero-photo-wrap">
              <Image
                src="/bailey-headshot.jpg"
                alt="Bailey Yi"
                width={760}
                height={760}
                className="hero-photo"
                priority
              />
            </div>

            <div className="hero-content">
              <p className="hero-kicker">Portfolio</p>
              <h1 id="hero-heading" className="hero-title">
                Bailey Yi
              </h1>
              <p className="hero-subtitle">
                Incoming MSE Data Science Student at UPenn
              </p>
              <div className="hero-highlights">
                <span className="hero-chip">NYU Computer Science and Economics</span>
                <span className="hero-chip">NEC Laboratories America</span>
              </div>
              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary">
                  View projects
                </a>
                <a href="#about" className="btn btn-secondary">
                  About me
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="page-section page-section-tight" aria-labelledby="about-heading">
          <p className="section-eyebrow">About</p>
          <h2 id="about-heading" className="section-title">
            About Me
          </h2>

          <div className="about-panel about-panel-compact">
            <div className="about-copy">
              <p>Hi there, I&apos;m Bailey!</p>
              <p>
                I&apos;m an incoming Master&apos;s student in Data Science at
                UPenn and recently graduated from NYU, where I studied Computer
                Science and Economics. Right now, I work at NEC Laboratories
                America building internal applications and automating processes
                for research and operations teams. This website is a collection
                of projects I&apos;ve worked on, things I&apos;m currently
                learning, and a few rabbit holes I&apos;ve gone down along the
                way.
              </p>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="page-section"
          aria-labelledby="projects-heading"
        >
          <p className="section-eyebrow">Work</p>
          <h2 id="projects-heading" className="section-title">
            Projects
          </h2>

          <div className="project-gallery">
            {projects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="project-card project-card-link"
              >
                <div
                  className={`project-media${
                    project.imageFit === "contain" ? " project-media-contain" : ""
                  }`}
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.imageAlt ?? project.title}
                      fill
                      sizes="(max-width: 760px) 100vw, 50vw"
                      className={`project-media-img${
                        project.imageFit === "contain"
                          ? " project-media-img-contain"
                          : ""
                      }`}
                    />
                  ) : (
                    <div
                      className="project-media-placeholder"
                      data-tone={project.placeholderTone ?? "default"}
                    >
                      <span className="project-media-code">
                        {project.placeholderCode ?? "project preview"}
                      </span>
                      <span className="project-media-label">
                        {project.title}
                      </span>
                    </div>
                  )}
                </div>

                <div className="project-body">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <span className={statusClass(project.status)}>
                      {project.status}
                    </span>
                  </div>

                  <p className="project-summary">{project.summary}</p>

                  <p className="project-highlight">{project.highlight}</p>

                  <div className="tech-tags">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-footer">
                    <span className="text-link">
                      Learn more
                      <span className="text-link-arrow" aria-hidden="true">
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="page-section" aria-labelledby="fun-fact-heading">
          <div className="callout">
            <div className="callout-copy">
              <h2 id="fun-fact-heading" className="callout-title">
                Fun Fact
              </h2>
              <p>
                The first thing I ever built after taking my first computer
                science course was a maze game in Processing (PDE). Looking back,
                the code is pretty rough, but it introduced me to object-oriented
                programming, inheritance, game design, and the satisfaction of
                turning an idea into something people could actually interact
                with.
              </p>
              <Link href="/projects/nyu-maze-game" className="text-link">
                Curious? Check it out
                <span className="text-link-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
            <div className="callout-visual">
              <span>first build · Processing PDE maze game</span>
            </div>
          </div>
        </section>

        <section
          id="outside"
          className="page-section"
          aria-labelledby="outside-heading"
        >
          <p className="section-eyebrow">Personal</p>
          <h2 id="outside-heading" className="section-title">
            Outside the Office
          </h2>

          <div className="interest-list">
            {interests.map((interest) => (
              <article
                key={interest.title}
                className={`interest-card${
                  interest.layout === "split" ? " interest-card-split" : ""
                }`}
              >
                <div className="interest-body">
                  <div className="interest-copy">
                    <h3 className="interest-title">{interest.title}</h3>
                    <p>{interest.description}</p>
                  </div>
                  <div className="interest-media">
                    <Image
                      src={interest.image}
                      alt={interest.title}
                      width={interest.layout === "split" ? 720 : 1200}
                      height={interest.layout === "split" ? 1280 : 800}
                      className="interest-image"
                      unoptimized={interest.image.endsWith(".gif")}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="page-section" aria-labelledby="faq-heading">
          <p className="section-eyebrow">FAQ</p>
          <h2 id="faq-heading" className="section-title">
            FAQ
          </h2>

          <div className="faq-list">
            <details className="faq-item">
              <summary>Why Computer Science and Economics?</summary>
              <p>
                I actually started college as an Economics and Philosophy major.
                Then I took my first programming class and got completely hooked.
                I loved how immediate programming felt: you build something, and
                you can see the result right away. At the same time, I enjoyed
                economics because it forces you to think about incentives,
                tradeoffs, and decision-making. I ended up sticking with both
                because they complement each other surprisingly well.
              </p>
            </details>

            <details className="faq-item">
              <summary>Why Data Science?</summary>
              <p>
                The more I worked with real-world data, the more I realized that
                collecting data is often the easy part. Understanding what
                it&apos;s actually telling you is much harder. Working with
                sensor data, operational data, and research data made me want a
                stronger foundation in statistics, machine learning, and
                modeling, which ultimately led me to pursue a master&apos;s in
                Data Science.
              </p>
            </details>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <p>© {new Date().getFullYear()} Bailey Yi</p>
          <p>Built with Next.js</p>
        </div>
      </footer>
    </>
  );
}
