import Image from "next/image";
import Link from "next/link";

function stripTrailingPeriod(text: string) {
  return text.replace(/\.\s*$/, "");
}

function statusClass(status: string) {
  if (status === "Deployed") return "status-badge status-deployed";
  if (status === "Completed") return "status-badge status-completed";
  return "status-badge status-progress";
}

export default function Home() {
  const interests = [
    {
      title: "Training for My First Half Marathon",
      image: "/interests/Fleet_feet.JPG",
      description:
        "I'm currently training for the Toronto Waterfront Half Marathon in October 2026. Along the way I've joined Fleet Feet Princeton's running community, signed up for their upcoming mile race, and started exploring local group runs around Princeton and Philadelphia. Running has become one of my favorite ways to clear my head. It's one of the few times during the day where I don't feel like I have to solve a problem - I just have to keep moving. It's also introduced me to an incredibly welcoming community. I've met runners of all experience levels simply by showing up to local group runs, from people training for their first 5K to someone who had completed 27 marathons. One runner told me, \"You just have to show up,\" and that has been my experience too. I enjoy hearing how different people train, what they've learned over the years, and the pieces of advice they pick up along the way",
    },
    {
      title: "Auditing Classes at Princeton",
      image: "/interests/princeton.png",
      description:
        "While working full-time at NEC, I audited Princeton's Stochastic Systems and Probability course. More recently, I was invited to sit in on EGR 395: Venture Capital and Finance of Innovation, a course that explores how investors evaluate startups, manage risk, and fund innovation.",
    },
    {
      title: "Learning Blender",
      image: "/interests/blender-room.gif",
      description:
        "Recently I’ve been teaching myself Blender through small projects, including an animated room environment and a 3D recreation of NEC’s fiber sensing hardware.",
    },
  ];

  const projects = [
    {
      title: "Weekly Reporting Platform",
      status: "Deployed",
      href: "/projects/weekly-reporting",
      problem:
        "NEC Laboratories America’s weekly department reporting process was previously manual and spreadsheet/email-based. Department heads submitted updates in inconsistent formats, operations staff had to track missing submissions manually, and leadership needed a repeatable way to review and select topics for Japan-facing executive reporting.",
      solution:
        "Built and deployed a Power Apps and Power Automate platform that standardizes department-head submissions, stores reporting data in SharePoint Lists, sends automated reminders, tracks submission status, supports executive review, and generates report-ready topic summaries. The system also includes an email-based topic selection workflow where the laboratory president can select topics by replying with numbered choices.",
      impact: [
        "Standardized weekly reporting across 5 NLA departments",
        "Supported 17+ production submissions through structured SharePoint inputs",
        "Replaced a fully manual spreadsheet/email workflow with automated submission tracking, reminders, review queues, and report-generation flows",
        "Supported president-selected weekly topics for Japan-facing executive reporting",
        "Automated Monday/Wednesday reminders, missing-submission tracking, topic selection, backlog handling, and report distribution",
        "Preserved edit history and reporting metadata through review queues, editable reporting copies, and version-history design",
        "Packaged SharePoint lists, Power Automate flows, and Power Apps components for NEC Europe and Japan teams adapting the workflow in their own tenants",
        "Created a reusable reporting architecture that could extend from weekly updates into monthly reviews and quarterly KPI collection",
      ],
      technologies: [
        "Power Apps",
        "Power Automate",
        "SharePoint Lists",
        "Office 365 Users",
        "Outlook",
        "ExcelScript",
      ],
    },
    {
      title: "Fiber Sensing Visualization Platform",
      status: "Completed",
      href: "/projects/fiber-sensing-visualization",
      problem:
        "NEC's LS3300 distributed fiber-optic sensing system could detect disturbances along a fiber cable embedded beneath a room floor, but demonstrations were primarily conducted through LabVIEW-based tools. The lab president wanted a browser-based platform that could support synchronized multi-user demonstrations while making it easier to visualize movement, vibration, frequency behavior, and spatial localization from live sensing data.",
      solution:
        "Built and extended a browser-based visualization platform using Python, RabbitMQ/STOMP, UDP data streams, JavaScript, and Three.js. Leveraging existing sensing and streaming infrastructure, I developed interactive visualizations that transformed live and replayed LS3300 data into floor maps, heatmaps, waterfall plots, activity histograms, and frequency-analysis views. I also implemented localization workflows that mapped fiber measurements to physical room coordinates and refactored backend processing logic into reusable Python pipelines.",
      impact: [
        "Built 15+ interactive visualization modes spanning signal, frequency, and spatial analysis",
        "Mapped one-dimensional fiber measurements to 2-D floor coordinates using segment geometry and fiber-index lookup logic",
        "Created real-time floor-layout visualizations that displayed footsteps and vibration activity as spatial heatmaps, histograms, and activity maps",
        "Implemented signal-processing visualizations including FFT frequency-location views, z-score calibration, and baseline-tracking workflows",
        "Experimented with localization and activity-detection methods using rolling, EWMA, and median/MAD baselines, persistent histograms, and decay-based activity maps",
        "Refactored backend FloorWriter pipelines to move localization and histogram generation into reusable Python processing components",
        "Added simulated and playback data support, allowing demonstrations and development without requiring live sensing hardware",
        "Automated multi-process startup and testing workflows for faster development and demonstrations",
        "Helped researchers explain fiber-sensing behavior by directly connecting raw signal changes to physical movement within a room",
      ],
      technologies: [
        "Python",
        "JavaScript",
        "Three.js",
        "RabbitMQ",
        "STOMP",
        "UDP",
        "Signal Processing",
        "FFT",
        "Data Visualization",
      ],
    },
    {
      title: "OCR Statement Extraction",
      status: "In Progress",
      problem:
        "Bank and credit card statements often store transaction data in visually structured PDF layouts rather than clean tables. Standard text extraction loses row and column positioning, making it difficult to reliably identify transaction dates, descriptions, amounts, and balances.",
      solution:
        "Building a Python OCR pipeline that extracts word-level text and coordinates from PDF statements, groups words into visual lines, scores candidate transaction rows using regex and layout heuristics, and prepares structured transaction data for manual review and correction.",
      impact: [
        "Processes sample bank and credit card statements using OCR",
        "Groups OCR words into transaction-like rows using y-coordinate proximity",
        "Uses regex patterns to identify dates, amounts, and merchant text",
        "Applies transaction scoring logic to distinguish statement metadata from likely transaction rows",
        "Designs column-bound inference to parse dates, descriptions, debit/credit amounts, and balances",
        "Develops an editable review workflow where user corrections improve future parsing and categorization",
      ],
      technologies: [
        "Python",
        "Pandas",
        "pytesseract",
        "pdf2image",
        "Regex",
        "OCR",
        "Layout Parsing",
      ],
    },
    {
      title: "NECLA Externally Funded Project Tracking Platform",
      status: "In Progress",
      href: "/projects/necla-project-tracking",
      problem:
        "Externally funded research project planning at NEC Laboratories America was spread across proposal folders, pricing files, bills of materials, invoice reports, and tracking spreadsheets. This made it difficult to understand funding availability, plan labor, track incremental spend, and answer project-level or portfolio-level financial questions without manually reconciling several files.",
      solution:
        "Worked with Rob from Operations to design and build a full-stack MVP for externally funded project planning using React, TypeScript, FastAPI, PostgreSQL, SQLAlchemy, and TanStack Table. The platform centralizes project setup, funding details, labor planning, equipment, travel, shipping, and the foundation for planned-vs-actual tracking. I also used an initial MVP and later Replit prototyping to validate the workflow and iterate quickly as requirements became clearer.",
      impact: [
        "Mapped the externally funded project lifecycle from proposal development through planning, labor allocation, invoicing, and reporting",
        "Designed an initial PostgreSQL schema separating planned and actual labor and incremental costs to support future variance analysis",
        "Built project creation and portfolio views for managing externally funded projects in one place",
        "Developed editable monthly planning tables for researcher labor, equipment, travel, shipping, and cost-share inputs",
        "Created funding-based labor planning logic where incremental spend reduces the remaining budget available for researcher hours",
        "Persisted project and planning data through FastAPI, SQLAlchemy, and PostgreSQL backend endpoints",
        "Used stakeholder feedback to evolve the MVP from a basic dashboard into a more structured planning platform",
        "Laid the foundation for planned-vs-actual tracking, invoice forecasting, and portfolio-level reporting",
      ],
      technologies: [
        "React",
        "TypeScript",
        "FastAPI",
        "PostgreSQL",
        "SQLAlchemy",
        "TanStack Table",
        "Replit",
      ],
    },
    {
      title: "Tax-Man Finder",
      status: "In Progress",
      problem:
        "Finding and communicating with tax professionals can be fragmented, requiring users to search independently, exchange emails, and coordinate appointments across multiple platforms.",
      solution:
        "Built a full-stack web application that connects users with tax professionals through service listings, direct messaging, inquiry management, and appointment booking workflows. The platform supports account creation, authentication, real-time communication, and booking management within a single application.",
      impact: [
        "Implemented user authentication and authorization",
        "Built real-time messaging using WebSockets",
        "Created inquiry workflows connecting clients and tax professionals",
        "Developed appointment booking and status tracking features",
        "Designed REST APIs and database models supporting end-to-end user interactions",
      ],
      technologies: [
        "Django",
        "Django REST Framework",
        "React",
        "PostgreSQL",
        "WebSockets",
        "JWT Authentication",
        "Docker",
      ],
    },
    {
      title: "NurSync",
      status: "Completed",
      problem:
        "Nursing students lacked a dedicated space to anonymously ask questions, share experiences, and connect with peers without relying on fragmented messaging platforms or revealing their identities.",
      solution:
        "Built a full-stack peer-support platform featuring anonymous discussion, authentication, moderation workflows, search, and threaded conversations. Worked closely with a multidisciplinary team to iteratively refine requirements before delivering a live demonstration.",
      impact: [
        "Ranked 1st out of 15 software engineering teams, earning a summer research opportunity with Prof. Mohamad Kassab",
        "Implemented secure authentication, anonymous posting, comments, search/filtering, and administrator approval workflows",
        "Led development of the discussion and authentication systems while collaborating on feature design and implementation",
        "Delivered a live demonstration selected for the course showcase",
      ],
      technologies: [
        "JavaScript",
        "Node.js",
        "Express",
        "MongoDB",
        "HTML",
        "CSS",
      ],
      lessons: [
        "My first experience building a full-stack web application from scratch",
        "Learned how authentication, authorization, and database-backed web applications fit together",
        "Gained experience translating user requirements into iterative software features while working on a collaborative development team",
        "Reinforced the importance of designing software around user needs rather than just implementing technical functionality",
      ],
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
          <h1 id="hero-heading" className="hero-title">
            Bailey Yi
          </h1>
          <p className="hero-subtitle">
            Incoming MSE Data Science Student at UPenn
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View projects
            </a>
            <a href="#about" className="btn btn-secondary">
              About me
            </a>
          </div>
        </section>

        <hr className="section-divider" style={{ marginTop: 64 }} />

        <section id="about" className="page-section" aria-labelledby="about-heading">
          <h2 id="about-heading" className="section-title">
            About
          </h2>

          <div className="about-grid">
            <div>
              <Image
                src="/bailey-headshot.jpg"
                alt="Bailey Yi"
                width={400}
                height={400}
                className="about-photo"
                priority
              />
            </div>

            <div className="about-copy">
              <p>Hi there, I&apos;m Bailey!</p>

              <p>
                I&apos;m an incoming Master&apos;s student in Data Science at
                UPenn and recently graduated from NYU, where I studied Computer
                Science and Economics.
              </p>

              <p>
                Right now, I work at NEC Laboratories America. I originally
                started out helping build visualizations for a fiber-optic
                sensing system, but over time my work shifted toward building
                internal applications and automating processes for our research
                and operations teams.
              </p>

              <p>
                One thing I&apos;ve noticed across most of my projects is that I
                keep getting pulled toward data. Not necessarily collecting it,
                but figuring out what it&apos;s actually telling us and how much
                confidence we should have in the conclusions we draw from it.
                That&apos;s a big part of what pushed me toward data science.
              </p>

              <p>
                This website is mostly a collection of projects I&apos;ve worked
                on, things I&apos;m currently learning, and a few rabbit holes
                I&apos;ve gone down along the way.
              </p>

              <p>
                Outside of work, you&apos;ll usually find me running, auditing
                classes, or trying something new. Recently that&apos;s included
                learning Blender, rock climbing, Pilates, visiting local farmers
                markets, and even taking a mozzarella cheese-making class.
              </p>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="page-section"
          aria-labelledby="projects-heading"
        >
          <h2 id="projects-heading" className="section-title">
            Projects
          </h2>

          <div className="project-list">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-header">
                  <h3 className="project-title">
                    {project.href ? (
                      <Link href={project.href}>{project.title}</Link>
                    ) : (
                      project.title
                    )}
                  </h3>
                  {project.status && (
                    <span className={statusClass(project.status)}>
                      {project.status}
                    </span>
                  )}
                </div>

                <div className="project-block">
                  <h4 className="project-block-label">Problem</h4>
                  <p>{project.problem}</p>
                </div>

                <div className="project-block">
                  <h4 className="project-block-label">Solution</h4>
                  <p>{project.solution}</p>
                </div>

                <div className="project-block">
                  <h4 className="project-block-label">Impact / Features</h4>
                  <ul className="project-impact">
                    {project.impact.map((item) => (
                      <li key={item}>{stripTrailingPeriod(item)}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-block">
                  <h4 className="project-block-label">Technologies</h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {"lessons" in project && project.lessons && (
                  <div className="project-block">
                    <h4 className="project-block-label">Lessons</h4>
                    <ul className="project-impact">
                      {project.lessons.map((item) => (
                        <li key={item}>{stripTrailingPeriod(item)}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.href && (
                  <div className="project-footer">
                    <Link href={project.href} className="text-link">
                      Read full case study
                      <span className="text-link-arrow" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="page-section" aria-labelledby="fun-fact-heading">
          <div className="callout">
            <h2 id="fun-fact-heading" className="callout-title">
              Fun Fact
            </h2>
            <p>
              The first thing I ever built after taking my first computer science
              course was a maze game in Processing (PDE). Looking back, the code
              is pretty rough, but it introduced me to object-oriented
              programming, inheritance, game design, and the satisfaction of
              turning an idea into something people could actually interact with.
            </p>
            <Link href="/projects/nyu-maze-game" className="text-link">
              Curious? Check it out
              <span className="text-link-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </section>

        <section
          id="outside"
          className="page-section"
          aria-labelledby="outside-heading"
        >
          <h2 id="outside-heading" className="section-title">
            Outside the Office
          </h2>

          <div className="interest-list">
            {interests.map((interest) => (
              <article key={interest.title} className="interest-card">
                <div className="interest-body">
                  <h3 className="interest-title">{interest.title}</h3>
                  <p>{interest.description}</p>
                  <Image
                    src={interest.image}
                    alt={interest.title}
                    width={1200}
                    height={800}
                    className="interest-image"
                    unoptimized={interest.image.endsWith(".gif")}
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="page-section" aria-labelledby="faq-heading">
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
        <p>© {new Date().getFullYear()} Bailey Yi</p>
      </footer>
    </>
  );
}
