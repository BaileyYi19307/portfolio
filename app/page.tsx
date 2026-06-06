export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">
        Bailey Yi
      </h1>

      <p className="mb-8">
        Incoming MSE Data Science student at UPenn.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Projects
      </h2>

      <ul className="space-y-4">
        <li>
          <strong>Weekly Reporting System</strong>
          <p>
            Automated NEC Labs' weekly reporting workflow using Power Apps and Power Automate.
          </p>
        </li>

        <li>
          <strong>Labor Planning Dashboard</strong>
          <p>
            React and FastAPI dashboard for project labor forecasting.
          </p>
        </li>

        <li>
          <strong>Fiber Sensing Visualization Platform</strong>
          <p>
            Real-time visualization system built with Python, RabbitMQ, and Three.js.
          </p>
        </li>

        <li>
          <strong>Tax-Man Finder</strong>
          <p>
            Django and React platform connecting users with tax professionals.
          </p>
        </li>
      </ul>
    </main>
  );
}