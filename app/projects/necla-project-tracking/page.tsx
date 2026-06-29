export default function NECLAProjectTrackingPage() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <a href="/" className="text-sm underline">
        ← Back to Projects
      </a>

      <section className="mt-8 mb-12">
        <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
          Full-Stack Internal Operations Platform
        </p>

        <h1 className="text-4xl font-bold mb-4">
          NECLA Externally Funded Project Tracking Platform
        </h1>

        <p className="text-lg">
          A project planning platform for externally funded research projects,
          built with React, TypeScript, FastAPI, and PostgreSQL.
        </p>
      </section>

      <section className="mb-12">
        <img
          src="/necla-project-tracking/replit-project-dashboard.png"
          alt="Externally funded project planning dashboard"
          className="w-full max-h-[520px] object-contain rounded-lg border bg-white"
        />

        <p className="text-sm text-gray-600 mt-2">
          Current planning dashboard prototype used for stakeholder feedback.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Overview</h2>

        <p>
          This project focuses on centralizing the planning process for
          externally funded research projects at NEC Laboratories America. These
          projects involve proposal pricing, funding allocation, labor planning,
          incremental spend, invoicing, and reporting.
        </p>

        <p className="mt-4">
          I worked with Rob from Operations to understand how project information
          currently moves across pricing files, bills of materials, project
          tracking spreadsheets, invoice reports, and proposal-related
          documents. From there, I designed and built a full-stack MVP that
          turns the existing spreadsheet-based workflow into a more structured
          planning system.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Problem</h2>

        <p className="mb-4">
          Externally funded project tracking was spread across multiple Excel
          workbooks and proposal folders. Rob had to manually pull information
          from different files to answer project-level and portfolio-level
          questions.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            Project summary, pricing, labor, invoice, and actual cost data lived
            in separate files.
          </li>
          <li>
            Reporting often required manually copying and reconciling values
            across spreadsheets.
          </li>
          <li>
            Labor planning depended on upstream calculations like total funding,
            incremental spend, and remaining net funding.
          </li>
          <li>
            Planned costs and actual costs were tracked separately, making it
            harder to compare them side by side.
          </li>
          <li>
            Ad hoc leadership questions required rebuilding custom views from
            manually maintained tracking sheets.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">
          Understanding the Workflow
        </h2>

        <p className="mb-4">
          Before designing the application, I spent time mapping how Rob thinks
          through externally funded projects. The workflow begins before a
          project is awarded and continues through proposal development,
          contract negotiation, project deployment, invoicing, and reporting.
        </p>

        <p className="mb-4">
          One important insight was that labor planning does not start with
          labor. It starts with total funding. Rob first estimates incremental
          spend, including equipment, travel, and shipping. The remaining
          funding determines how much is available for researcher labor.
        </p>

        <div className="rounded-lg border p-4 font-mono text-sm whitespace-pre-wrap">
{`Proposal Development
    ↓
Project Planning
    ↓
Equipment + Travel + Shipping
    ↓
Remaining Labor Budget
    ↓
Monthly Researcher Hour Allocation
    ↓
Invoice Forecasting and Reporting`}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">
          Initial MVP and Rapid Iteration
        </h2>

        <p className="mb-4">
          I first built an initial MVP to validate the project structure, data
          model, and planning workflow. This made the operations problem more
          concrete and gave Rob something to react to during planning sessions.
        </p>

        <p>
          As the requirements became clearer, I used Replit to accelerate
          prototyping and iterate more quickly on new workflows. This helped
          shorten the feedback loop while the project scope was still changing.
        </p>
      </section>

      <section className="mb-12 grid md:grid-cols-2 gap-6">
        <div>
          <img
            src="/necla-project-tracking/my-project-dashboard (pre-replit).png"
            alt="Initial MVP dashboard"
            className="w-full h-[260px] object-contain rounded-lg border bg-white"
          />

          <p className="text-sm text-gray-600 mt-2">
            Initial MVP used to validate the planning workflow.
          </p>
        </div>

        <div>
          <img
            src="/necla-project-tracking/replit-project-dashboard.png"
            alt="Replit prototype dashboard"
            className="w-full h-[260px] object-contain rounded-lg border bg-white"
          />

          <p className="text-sm text-gray-600 mt-2">
            Later prototype used for faster iteration and feedback.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">
          Building the Planning Platform
        </h2>

        <p className="mb-4">
          The project creation flow captures the fields Rob actually uses when
          tracking externally funded projects, including project status,
          contracted customer, end customer, total funding, cost share,
          department, lead researcher, duration, and notes.
        </p>

        <p>
          This creates a structured starting point for each project instead of
          requiring project information to be maintained across separate
          tracking files.
        </p>
      </section>

      <section className="mb-12">
        <img
          src="/necla-project-tracking/replit-create-project.png"
          alt="Create project form"
          className="w-full max-h-[520px] object-contain rounded-lg border bg-white"
        />

        <p className="text-sm text-gray-600 mt-2">
          Create project workflow for entering project details, funding,
          duration, department, lead researcher, and notes.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Labor Planning</h2>

        <p className="mb-4">
          Labor planning became the central workflow of the MVP. Rob needs to
          know how many researcher hours can be allocated without exceeding the
          available labor budget.
        </p>

        <p className="mb-4">
          The platform uses total funding, project duration, researcher rates,
          and incremental spend to calculate remaining labor budget and monthly
          researcher-hour allocations.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Calculate total incremental spend.</li>
          <li>Derive remaining funding available for labor.</li>
          <li>Convert labor budget into available researcher hours.</li>
          <li>Distribute planned hours across researchers and project months.</li>
          <li>
            Show whether the current plan is under or over the available labor
            budget.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <img
          src="/necla-project-tracking/replit-labour-planning.png"
          alt="Labor planning table"
          className="w-full max-h-[560px] object-contain rounded-lg border bg-white"
        />

        <p className="text-sm text-gray-600 mt-2">
          Labor planning table with researchers as rows and project months as
          columns.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">
          Incremental Spend Planning
        </h2>

        <p className="mb-4">
          Equipment, travel, and shipping are treated as incremental spend.
          These categories matter because they reduce the amount of funding
          available for labor.
        </p>

        <p>
          The planning views make that relationship visible in one place, so Rob
          can see how non-labor costs affect the remaining labor budget without
          moving between separate worksheets.
        </p>
      </section>

      <section className="mb-12">
        <img
          src="/necla-project-tracking/replit-equipment-planning.png"
          alt="Equipment planning table"
          className="w-full max-h-[520px] object-contain rounded-lg border bg-white"
        />

        <p className="text-sm text-gray-600 mt-2">
          Equipment planning view, representing one incremental spend category
          that feeds into labor budget calculations.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">
          Portfolio-Level View
        </h2>

        <p className="mb-4">
          The portfolio view gives Rob a way to see externally funded projects
          together instead of opening individual proposal folders and tracking
          files.
        </p>

        <p>
          The long-term goal is to use centralized project data to support
          cumulative reports across projects, including funding, incremental
          spend, cost share, invoice forecasts, and planned vs. actual project
          financials.
        </p>
      </section>

      <section className="mb-12">
        <img
          src="/necla-project-tracking/replit-project-portfolio-overview.png"
          alt="Project portfolio overview"
          className="w-full max-h-[520px] object-contain rounded-lg border bg-white"
        />

        <p className="text-sm text-gray-600 mt-2">
          Portfolio overview for managing externally funded projects across the
          organization.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">
          Initial MVP Data Model
        </h2>

        <p className="mb-4">
          One of the first design decisions was creating a data model that
          captured the core planning workflow without recreating every
          spreadsheet Rob used. The initial MVP focused on validating the
          planning process rather than modeling every aspect of the project
          lifecycle.
        </p>

        <p className="mb-4">
          The schema separates planned and actual labor and incremental costs,
          providing a foundation for comparing forecasts against project
          execution while keeping the planning workflow simple enough to iterate
          on with stakeholders.
        </p>

        <img
          src="/necla-project-tracking/mvp-db.png"
          alt="Initial MVP database schema"
          className="w-full max-h-[620px] object-contain rounded-lg border bg-white"
        />

        <p className="text-sm text-gray-600 mt-2">
          Initial PostgreSQL schema used to validate the planning workflow. As
          the platform evolved through stakeholder feedback, the data model
          expanded to support additional planning stages, reporting, and
          portfolio-level functionality.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">
          Backend Implementation
        </h2>

        <p className="mb-4">
          The backend was built with FastAPI, SQLAlchemy, and PostgreSQL. One
          challenge was persisting editable planning tables while allowing users
          to revisit and continue planning over multiple sessions.
        </p>

        <p>
          This required update logic that checks whether a row already exists
          for a given project, researcher, and month, updating existing records
          or inserting new ones as needed.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Current Progress</h2>

        <p className="mb-4">
          The current MVP focuses on project planning and funding allocation.
          Future work will extend the platform to support planned vs. actual
          tracking, invoice forecasting, and portfolio-level reporting using the
          same underlying project data model.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Project creation and portfolio view.</li>
          <li>Project summary management.</li>
          <li>Researcher assignment to projects.</li>
          <li>Editable monthly labor planning tables.</li>
          <li>Persistent researcher-hour planning data.</li>
          <li>Funding-based labor budget calculations.</li>
          <li>Equipment, travel, and shipping planning sections.</li>
          <li>Foundation for planned vs. actual tracking.</li>
          <li>Foundation for invoice forecasting and project reporting.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">What I Learned</h2>

        <p>
          This project helped me understand how much software design depends on
          understanding the underlying workflow. The hard part was not just
          building a form or table. It was figuring out what information Rob
          actually needed, how the calculations depended on each other, and
          which parts of the spreadsheet workflow were still useful.
        </p>

        <p className="mt-4">
          I also learned how useful rapid prototyping can be when requirements
          are still changing. Early versions of the platform made it easier to
          discuss the workflow, identify missing fields, and decide which parts
          of the planning process should be modeled first.
        </p>

        <p className="mt-4">
          The project gave me more experience translating an ambiguous
          operations process into a structured full-stack application with a
          real backend, persistent data, and stakeholder-driven design.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Technologies</h2>

        <p>
          React, TypeScript, FastAPI, PostgreSQL, SQLAlchemy, TanStack Table,
          Replit
        </p>
      </section>
    </main>
  );
}