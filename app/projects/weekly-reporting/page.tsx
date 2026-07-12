import Image from "next/image";
import CaseShell from "@/app/components/CaseShell";

function Figure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="figure">
      <Image
        src={src}
        alt={alt}
        width={1800}
        height={1000}
        className="figure-img"
      />
      <figcaption className="figure-caption">{caption}</figcaption>
    </figure>
  );
}

export default function WeeklyReportingPage() {
  return (
    <CaseShell>
      <section className="case-hero">
        <p className="text-sm uppercase tracking-wide text-gray-500 mb-2"></p>

        <h1 className="text-4xl font-bold mb-4">Weekly Reporting Platform</h1>

        <p className="text-lg">
          A Power Apps and Power Automate reporting system used by five
          departments at NEC Laboratories America to standardize weekly updates,
          track submissions, support leadership review, and automate report
          distribution.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Overview</h2>

        <p>
          NEC Laboratories America collected weekly updates from department
          heads for leadership review and international reporting. Before this
          system, the process relied on multiple spreadsheets, email
          coordination, and manual tracking. Reporting formats varied across
          departments, which made it difficult to standardize submissions,
          identify missing updates, and prepare topics for executive review.
        </p>

        <p className="mt-4">
          I designed and deployed a centralized reporting platform using Power
          Apps, SharePoint Lists, Office 365 user data, Outlook, and Power
          Automate. The system is currently used by five departments and has
          collected 17+ production submissions.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Problem</h2>

        <p className="mb-4">
          The previous reporting process had several issues:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            Reporting information was spread across multiple spreadsheets
          </li>
          <li>Departments submitted updates in inconsistent formats</li>
          <li>Submission tracking was handled manually</li>
          <li>Reminder emails required manual coordination</li>
          <li>
            Topic selection for leadership review involved back-and-forth email
            communication
          </li>
          <li>
            There was no centralized review queue for editing, tracking, or
            preserving report history
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Solution</h2>

        <p className="mb-4">
          I built the system around three main components: a weekly reporting
          application, a leadership review and topic selection workflow, and a
          suite of Power Automate flows that handled reminders, tracking, report
          generation, and distribution.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">
          1. Weekly Reporting Application
        </h2>

        <p className="mb-4">
          Department heads submit weekly updates through a centralized Power
          Apps interface. The app standardizes the reporting format and stores
          submissions in SharePoint Lists.
        </p>

        <Figure
          src="/weekly-reporting/weekly-submission-app.png"
          alt="Weekly submission Power Apps interface"
          caption="Standardized Power Apps submission interface used by department heads to enter weekly reporting updates"
        />

        <h3 className="text-xl font-semibold mb-3">
          Weekly Reporting Workflow
        </h3>

        <p className="mb-4">
          The workflow moves department updates from structured app submissions
          into SharePoint records, review queues, topic selection, and automated
          report distribution.
        </p>

        <Figure
          src="/weekly-reporting/weekly-reporting-flow.png"
          alt="Weekly reporting workflow diagram"
          caption="End-to-end weekly reporting workflow from department-head submission to SharePoint storage, review, topic selection, and final report distribution"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">
          1B. Version History Design
        </h2>

        <p className="mb-4">
          Leadership needed the ability to edit report content before
          distribution, but original department submissions still needed to be
          preserved. To support this, the system separates original submissions
          from editable reporting copies and stores historical versions for
          auditability.
        </p>

        <Figure
          src="/weekly-reporting/version-history-flow.png"
          alt="Version history workflow diagram"
          caption="Version history design separating editable reporting copies from preserved original submissions"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">
          2. Leadership Review & Topic Selection
        </h2>

        <p className="mb-4">
          Leadership can review submitted topics through two complementary
          paths: a manager-facing Power Apps review queue and an email-based
          topic selection workflow. The review queue supports detailed review,
          editing, metadata tracking, and version history, while the email
          workflow allows lightweight topic selection directly from an inbox.
        </p>

        <div className="space-y-10">
          <div>
            <h3 className="text-xl font-semibold mb-3">2A. Review Queue</h3>

            <p className="mb-4">
              The review queue gives leadership a centralized place to review
              submitted topics, edit reporting copies, track metadata, and
              preserve version history without overwriting original department
              submissions.
            </p>

            <Figure
              src="/weekly-reporting/review-queue.png"
              alt="Leadership review queue interface"
              caption="Prototype review queue showing how managers can review, edit, return, approve, and track submitted reporting items"
            />
          </div>
          <h3 className="text-xl font-semibold mb-3">
            2B. Topic Selection Email Workflow
          </h3>

          <p className="mb-4">
            To keep executive review simple, I designed an email-based topic
            selection flow. The president receives a numbered list of candidate
            topics and can select items by replying with topic numbers. Power
            Automate parses the response, maps the selected numbers back to
            SharePoint records, and generates the final report automatically.
          </p>

          <h4 className="font-semibold mb-2">Weekly Topic Selection Email</h4>

          <p className="mb-4">
            Every week, Power Automate generates a structured topic selection
            email for leadership. Topics are grouped by category and assigned
            display numbers that can be referenced directly in a reply.
          </p>

          <Figure
            src="/weekly-reporting/topic-selection-email-A.png"
            alt="Weekly topic selection email"
            caption="Weekly topic selection email showing submission status, categorized topics, and numbered selections for leadership review"
          />

          <p className="text-sm text-gray-600 mb-8">
            Weekly topic selection email showing submission status, categorized
            topics, and numbered selections
          </p>

          <h4 className="font-semibold mb-2">Backlog Management</h4>

          <p className="mb-4">
            Topics that are not selected are retained and surfaced in future
            reporting cycles. This prevents important updates from being lost
            while still allowing leadership to prioritize the most relevant
            items each week.
          </p>

          <Figure
            src="/weekly-reporting/topic-selection-email-B.png"
            alt="Backlogged items in topic selection email"
            caption="Backlogged topics remain available for future selection so unselected updates are not lost between reporting cycles"
          />

          <p className="text-sm text-gray-600 mb-8">
            Backlogged topics remain available for future selection and
            reporting
          </p>

          <h4 className="font-semibold mb-2">
            Selection Parsing and Final Report Generation
          </h4>

          <p className="mb-4">
            The selected numbers are parsed by Power Automate, matched back to
            SharePoint records, and used to generate the final report email.
          </p>

          <Figure
            src="/weekly-reporting/num-selection.png"
            alt="Topic selection and final report workflow diagram"
            caption="Topic selection workflow showing how numbered email replies are parsed, mapped back to SharePoint records, and used to generate the final report"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">
          3. Power Automate Workflow Suite
        </h2>

        <p className="mb-4">
          Power Automate flows track who has submitted, send reminder emails,
          generate weekly reports, process topic selections, and route selected
          topics for international reporting.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Monday submission request emails</li>
          <li>Wednesday reminder emails for non-submitters</li>
          <li>Submission tracking based on SharePoint records</li>
          <li>Topic selection email generation</li>
          <li>Reply parsing and selected-topic mapping</li>
          <li>Backlog handling for unselected topics</li>
          <li>Final report formatting and distribution</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Results</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Deployed and actively used by 5 departments</li>
          <li>Collected 17+ production submissions</li>
          <li>
            Replaced spreadsheet-based weekly reporting with a centralized
            application
          </li>
          <li>Standardized reporting formats across departments</li>
          <li>
            Automated reminder emails, submission tracking, topic selection, and
            report generation
          </li>
          <li>
            Supported executive topic selection by the laboratory president
          </li>
          <li>Demoed and shared with NEC stakeholders in Japan and Europe</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Design Decisions</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Standardizing Reporting
            </h3>
            <p>
              A major goal was to replace inconsistent spreadsheet-based
              reporting with a shared structure. The Power Apps interface gave
              departments a consistent way to submit updates, which made reports
              easier to review, compare, and distribute.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Supporting Multiple Review Paths
            </h3>
            <p>
              The system supports both a Power Apps review queue and an
              email-based topic selection workflow. This allowed different users
              to interact with the same underlying reporting data in the way
              that best matched their workflow: detailed review inside the app,
              or quick topic selection directly through email.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Separating Original Submissions from Reporting Copies
            </h3>
            <p>
              Leadership needed the ability to edit report content before
              distribution, but the original submission still needed to be
              preserved. To support this, the review queue uses editable
              reporting copies while maintaining metadata and version history.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Tracking Topic Status
            </h3>
            <p>
              Topics move through clear workflow states such as current,
              backlogged, and sent. This helps leadership distinguish new
              topics, previously unselected topics, and topics that have already
              been distributed.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Automating Reminders and Follow-Up
            </h3>
            <p>
              Instead of manually checking spreadsheets and sending follow-up
              emails, Power Automate tracks submission status and sends
              reminders based on who has not submitted.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">
          Global Rollout Architecture
        </h2>

        <p className="mb-4">
          I also packaged the SharePoint lists, Power Automate flows, and Power
          Apps components so NEC Europe and Japan teams could adapt the workflow
          in their own environments. This extended the project from a local
          reporting tool into a reusable architecture for regional reporting
          workflows.
        </p>

        <Figure
          src="/weekly-reporting/global-rollout-flow.png"
          alt="Global rollout architecture"
          caption="Proposed global rollout architecture where regional labs maintain local SharePoint and Power Automate workflows while routing reports into a centralized process"
        />
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">
          Current Expansion: Hierarchical Review Workflow
        </h2>

        <p className="mb-4">
          Following deployment of the weekly reporting platform, leadership
          requested a more structured approval process that mirrors the
          organization&apos;s management hierarchy.
        </p>

        <p className="mb-4">
          The next iteration of the system introduces a cascading review
          workflow where updates move through multiple levels of management
          before reaching executive review. Managers can approve submissions,
          request revisions, return items for correction, or designate entries
          as executive topics.
        </p>

        <p className="mb-4">
          The prototype below explores how events can move both upward through
          approval chains and downward through feedback loops while preserving
          review history and auditability.
        </p>

        <Figure
          src="/weekly-reporting/hierarchical-review-prototype.png"
          alt="Hierarchical review workflow prototype"
          caption="Prototype for a cascading review workflow with approval, return-for-correction, executive-topic designation, and version history"
        />
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-3">Technologies</h2>

        <p>
          Power Apps, Power Automate, SharePoint Lists, Office 365 Users,
          Outlook, ExcelScript
        </p>
      </section>
    </CaseShell>
  );
}
