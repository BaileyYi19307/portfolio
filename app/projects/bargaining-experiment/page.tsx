import Image from "next/image";
import CaseShell from "@/app/components/CaseShell";

export default function BargainingExperimentPage() {
  return (
    <CaseShell>
      <section className="case-hero">
        <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
          Behavioral Economics · Interactive Experiment
        </p>

        <h1 className="text-4xl font-bold mb-4">Bargaining Experiment</h1>

        <p className="text-lg">
          Implemented a Python/JavaScript behavioral economics experiment to
          analyze gender-based negotiation strategies, integrating real-time
          currency decay and dynamic offer systems. Developed under the
          supervision of Professor Andrzej Baranski at NYU Abu Dhabi.
        </p>

        <p className="mt-4">
          <a
            href="https://github.com/BaileyYi19307/BargainingExperiment"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            View repository on GitHub →
          </a>
        </p>
      </section>

      <section className="mb-12">
        <Image
          src="/bargaining-experiment/interface-card.jpg"
          alt="Bargaining experiment triangle interface"
          width={1600}
          height={1000}
          className="w-full rounded-lg border bg-white"
        />
        <p className="text-sm text-gray-600 mt-2">
          Main bargaining interface with countdown timer, first-offer controls,
          participant values, and the shared allocation triangle
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Project Overview</h2>

        <p>
          This project is an interactive bargaining experiment built with the
          oTree framework to study negotiation behavior, offer strategies, and
          decision-making in three-player groups. Participants repeatedly
          negotiate how to divide a fixed monetary surplus using a shared
          triangle interface where every selectable node corresponds to a
          payoff allocation.
        </p>

        <p className="mt-4">
          The software supports both a guided tutorial and a full experimental
          session, including pre-experiment tasks, multi-round bargaining,
          optional compulsory-offer treatments, payoff tracking, and a
          post-round questionnaire.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">
          Motivation and Research Objective
        </h2>

        <p>
          Experimental economics needs interfaces that are precise enough for
          research protocols and intuitive enough for participants to use under
          time pressure. This study focuses on how visible gender cues and
          negotiation mechanics affect bargaining behavior.
        </p>

        <p className="mt-4">
          The research objective was to build a production-ready experiment
          platform where three participants can propose and ratify surplus
          divisions in real time, while the system records offers, agreement
          state, timing, and payoffs for later analysis. Features such as
          gender-visible participant icons, dynamic offer selection, and
          real-time currency decay were designed to support that research
          question rather than exist as decorative UI.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">My Contributions</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            Designed and implemented the interactive bargaining interface where
            participants select allocations on a triangular payoff lattice.
          </li>
          <li>
            Built real-time synchronization for offers, agreement state, timers,
            and payoff updates across three concurrent participants using
            oTree&apos;s live methods.
          </li>
          <li>
            Integrated gender-based participant icons so group composition was
            visible during negotiation rounds.
          </li>
          <li>
            Implemented real-time currency decay and dynamic offer mechanics so
            delayed agreements reduced the value of the surplus.
          </li>
          <li>
            Developed the compulsory-offer treatment flow, tutorial sequence,
            pre-experiment modules, and end-of-round questionnaire.
          </li>
          <li>
            Logged structured experimental events—including offers, agreement
            membership, timestamps, and payoffs—for research analysis.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">
          Technical Implementation
        </h2>

        <p className="mb-4">
          The experiment is organized as an oTree application sequence:
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>
            <strong>Tutorial:</strong> Walks participants through the interface
            before any money is at stake.
          </li>
          <li>
            <strong>PreExperiment:</strong> Captures gender selection and
            related pre-tasks such as multiple price list choices.
          </li>
          <li>
            <strong>Main_Experiment:</strong> Runs the multi-round bargaining
            game with optional compulsory-offer treatment, live offer
            synchronization, agreement ratification timers, and payoff
            calculation.
          </li>
          <li>
            <strong>ExperimentEnd / Questionnaire:</strong> Closes the session
            and collects post-experiment responses.
          </li>
        </ul>

        <p className="mb-4">
          On the client, JavaScript generates the triangle of allocation nodes
          from configurable parameters such as total nodes and total money,
          then tracks which participant clicked which proposal. On the server,
          Python live methods maintain shared session state—who is in
          agreement, what was clicked, when the round started—and write report
          records for analysis.
        </p>

        <p>
          Configurable session settings control timing, ratification windows,
          treatment flags, and surplus parameters so the same codebase can
          support tutorial demos and full experimental sessions.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Interface Details</h2>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div>
            <Image
              src="/bargaining-experiment/maleicon.png"
              alt="Male participant icon used in the experiment UI"
              width={120}
              height={120}
              className="rounded-lg border bg-white p-4"
            />
            <p className="text-sm text-gray-600 mt-2">
              Participant icons used to make gender composition visible during
              bargaining rounds
            </p>
          </div>
          <div>
            <Image
              src="/bargaining-experiment/femaleicon.png"
              alt="Female participant icon used in the experiment UI"
              width={120}
              height={120}
              className="rounded-lg border bg-white p-4"
            />
            <p className="text-sm text-gray-600 mt-2">
              Matching icon set for female participants, loaded dynamically
              based on group assignment
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Technologies Used</h2>
        <p>
          Python, JavaScript, oTree, HTML/CSS, SQLite (session storage),
          real-time live messaging for multi-participant synchronization
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">
          Challenges and What I Learned
        </h2>

        <p>
          The hardest part was making a research interface feel simple while
          remaining experimentally rigorous. Every click, timer event, and
          agreement transition needed deterministic shared state across three
          browsers. Small synchronization bugs could invalidate a round, so the
          live protocol had to be explicit about who proposed what, who was in
          agreement, and when payoffs should lock.
        </p>

        <p className="mt-4">
          I also learned how important configurable treatments are in
          experimental software. Features like compulsory offers, tutorial
          scaffolding, and currency decay were not optional extras—they were
          part of the research design. Building them as first-class session
          configuration made the platform reusable for demos and formal
          sessions.
        </p>

        <p className="mt-4">
          More broadly, the project reinforced how software engineering and
          behavioral research intersect: good systems design is what makes
          clean experimental data possible.
        </p>
      </section>
    </CaseShell>
  );
}
