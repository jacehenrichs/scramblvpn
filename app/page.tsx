import Link from "next/link";

export default function HomePage() {
  return (
    <div className="page-wrap">
      {/* HERO */}
      <section className="hero container">
        <div className="hero-badge">Cybersecurity Portfolio Project</div>
        <h1>ScramblVPN</h1>

        <p className="hero-text">
          A hands-on cybersecurity project built to explore VPN concepts,
          secure connectivity, Linux environments, deployment, and real-world
          problem solving through practical implementation.
        </p>

        <div className="hero-buttons">
          <Link href="/about" className="btn btn-primary">
            About Me
          </Link>
          <Link href="/skills" className="btn btn-secondary">
            Skills Obtained
          </Link>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="container section">
        <div className="card">
          <h2>Project Overview</h2>
          <p>
            ScramblVPN is a personal project created as part of my journey into
            cybersecurity. The goal was to move beyond theory and build something
            that required understanding networking, remote access, system
            configuration, deployment, and troubleshooting in a real environment.
          </p>
        </div>
      </section>

      {/* DEMO */}
      <section className="container section">
        <div className="card">
          <h2>Project Demo</h2>
          <p>
            This demo shows the ScramblVPN interface and functionality. It
            highlights both the technical build and the user-facing design.
          </p>

          <div className="demo-shell">
            <video controls className="demo-video" preload="metadata">
              <source src="/scrambl-demo-web.mp4" type="video/mp4" />
              <source src="/scrambl-demo.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* BOTTOM CARDS */}
      <section className="container section">
        <div className="grid-two">
          <div className="card">
            <h3>Why I Built It</h3>
            <p>
              I built ScramblVPN to gain hands-on experience with secure
              networking concepts, Linux systems, deployment workflows, and
              debugging real issues. This project allowed me to learn by building
              instead of only studying theory.
            </p>
          </div>

          <div className="card">
            <h3>What This Project Represents</h3>
            <p>
              This project reflects initiative, technical curiosity, and the
              ability to create something functional while improving skills in
              cybersecurity, networking, development, and deployment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
