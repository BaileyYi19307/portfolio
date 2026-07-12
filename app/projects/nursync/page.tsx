import CaseShell from "@/app/components/CaseShell";

export default function NurSyncPage() {
  return (
    <CaseShell>
      <section className="case-hero">
        <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
          Full-Stack Peer-Support Platform
        </p>

        <h1 className="text-4xl font-bold mb-4">NurSync</h1>

        <p className="text-lg">
          A full-stack peer-support platform featuring anonymous discussion,
          authentication, moderation workflows, search, and threaded
          conversations for nursing students.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Problem</h2>
        <p>
          Nursing students lacked a dedicated space to anonymously ask
          questions, share experiences, and connect with peers without relying
          on fragmented messaging platforms or revealing their identities.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Solution</h2>
        <p>
          Built a full-stack peer-support platform featuring anonymous
          discussion, authentication, moderation workflows, search, and
          threaded conversations. Worked closely with a multidisciplinary team
          to iteratively refine requirements before delivering a live
          demonstration.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Impact / Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Ranked 1st out of 15 software engineering teams, earning a summer
            research opportunity with Prof. Mohamad Kassab
          </li>
          <li>
            Implemented secure authentication, anonymous posting, comments,
            search/filtering, and administrator approval workflows
          </li>
          <li>
            Led development of the discussion and authentication systems while
            collaborating on feature design and implementation
          </li>
          <li>
            Delivered a live demonstration selected for the course showcase
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Lessons</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            My first experience building a full-stack web application from
            scratch
          </li>
          <li>
            Learned how authentication, authorization, and database-backed web
            applications fit together
          </li>
          <li>
            Gained experience translating user requirements into iterative
            software features while working on a collaborative development team
          </li>
          <li>
            Reinforced the importance of designing software around user needs
            rather than just implementing technical functionality
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Technologies</h2>
        <p>JavaScript, Node.js, Express, MongoDB, HTML, CSS</p>
      </section>
    </CaseShell>
  );
}
