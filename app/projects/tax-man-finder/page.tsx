import CaseShell from "@/app/components/CaseShell";

export default function TaxManFinderPage() {
  return (
    <CaseShell>
      <section className="case-hero">
        <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
          Full-Stack Web Application
        </p>

        <h1 className="text-4xl font-bold mb-4">Tax-Man Finder</h1>

        <p className="text-lg">
          A full-stack web application that connects users with tax
          professionals through service listings, direct messaging, inquiry
          management, and appointment booking workflows.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Problem</h2>
        <p>
          Finding and communicating with tax professionals can be fragmented,
          requiring users to search independently, exchange emails, and
          coordinate appointments across multiple platforms.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Solution</h2>
        <p>
          Built a full-stack web application that connects users with tax
          professionals through service listings, direct messaging, inquiry
          management, and appointment booking workflows. The platform supports
          account creation, authentication, real-time communication, and
          booking management within a single application.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Impact / Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Implemented user authentication and authorization</li>
          <li>Built real-time messaging using WebSockets</li>
          <li>
            Created inquiry workflows connecting clients and tax professionals
          </li>
          <li>Developed appointment booking and status tracking features</li>
          <li>
            Designed REST APIs and database models supporting end-to-end user
            interactions
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Technologies</h2>
        <p>
          Django, Django REST Framework, React, PostgreSQL, WebSockets, JWT
          Authentication, Docker
        </p>
      </section>
    </CaseShell>
  );
}
