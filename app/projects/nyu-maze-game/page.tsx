import Image from "next/image";
import CaseShell from "@/app/components/CaseShell";

export default function NYUMazeGamePage() {
  return (
    <CaseShell>
      <section className="case-hero">
        <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
          First CS Project · Processing PDE
        </p>

        <h1 className="text-4xl font-bold mb-4">
          NYU Freshman Survival Maze Game
        </h1>

        <p className="text-lg">
          A small educational maze game I built in Processing after taking my
          first computer science course.
        </p>
      </section>

      <section className="mb-12">
        <Image
          src="/nyu-maze-game/welcome-screen-full.jpg"
          alt="NYU maze game welcome screen with flashlight preview"
          width={1226}
          height={1280}
          className="w-full rounded-lg border bg-black"
        />
        <p className="text-sm text-gray-600 mt-2">
          Welcome screen from the Processing maze game, including the flashlight
          preview of the library floor
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Overview</h2>

        <p>
          This game was designed as a playful way to help incoming NYU students
          learn about campus resources. The player navigates through a library
          maze while avoiding monsters that represent common freshman-year
          challenges like homesickness, academic stress, mental health struggles,
          and time management.
        </p>

        <p className="mt-4">
          It was written in Processing (PDE), and it was my first real
          experience building something interactive from scratch.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Gameplay</h2>

        <p className="mb-4">
          The player uses arrow keys to navigate the floor, avoid enemies, and
          find the exit. If the player gets too close to a monster, the monster
          begins chasing them. If the player is caught, a message appears with
          information about a relevant NYU support resource.
        </p>

        <video
          src="/nyu-maze-game/gameplay.mp4"
          controls
          className="w-full rounded-lg border"
        >
          Your browser does not support the video tag.
        </video>

        <p className="text-sm text-gray-600 mt-2">
          Gameplay demo from my first computer science project
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Design Choices</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Flashlight Effect
            </h3>

            <p>
              One of the main mechanics was a flashlight effect where the player
              could only see a small area around them. It made the maze feel
              more unpredictable, but it also reflected the idea that challenges
              during freshman year can feel like they appear out of nowhere.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Randomized Layouts
            </h3>

            <p>
              Instead of manually designing one fixed maze, I randomized the
              positions of blocks and enemies after each restart. That way, the
              player would face a slightly different floor each time they played.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Educational Monsters
            </h3>

            <p>
              Each monster represented a different challenge students might face
              during their transition to college. The monsters were implemented
              as subclasses of a parent Enemy class, making it possible to add
              new types of challenges later.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">UML Diagrams</h2>

        <p className="mb-4">
          The project introduced me to object-oriented design. I used inheritance
          to structure the different monsters, with each challenge extending a
          shared Enemy class.
        </p>

        <Image
          src="/nyu-maze-game/enemy-uml.png"
          alt="UML diagram showing Enemy class and monster subclasses"
          width={1400}
          height={900}
          className="w-full rounded-lg border mb-4"
        />

        <Image
          src="/nyu-maze-game/game-uml.png"
          alt="UML diagram showing game classes including player, block, button, and message box"
          width={1400}
          height={900}
          className="w-full rounded-lg border"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Looking Back</h2>

        <p>
          Fun fact: this was the first substantial project I built after taking
          my first computer science course.
        </p>

        <p className="mt-4">
          Looking back, the code is far from perfect, but this was the project
          that convinced me I wanted to keep studying computer science. It
          introduced me to object-oriented programming, inheritance, game loops,
          collision detection, and event-driven design.
        </p>

        <p className="mt-4">
          More importantly, it was the first time I experienced the satisfaction
          of turning an idea into something interactive. In many ways, this
          project was the starting point for everything else on this website.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">
          Original Course Materials
        </h2>

        <p className="mb-4">
          If you&apos;re interested, I included the original write-up I submitted
          with the project.
        </p>

        <a
          href="/nyu-maze-game/game-report-bailey-yi.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View Original Game Report →
        </a>
      </section>
    </CaseShell>
  );
}