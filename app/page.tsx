import Link from "next/link";

export default function HomePage() {
  return (
    <div className="page-wrap">
      <section className="hero container">
        <div className="hero-badge">Cybersecurity Portfolio Project</div>
        <h1>ScramblVPN</h1>

        <p className="hero-text hero-subtext">
          A custom-built VPN project demonstrating secure networking, traffic
          routing, Linux administration, cloud deployment, and hands-on problem
          solving through practical implementation.
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

      <section className="container section">
        <div className="card">
          <h2>Project Overview</h2>
          <p>
            ScramblVPN is a personal project I built as part of my journey into
            cybersecurity. The goal was to move beyond theory and create
            something that required real work with networking, remote access,
            system configuration, deployment, and troubleshooting in a live
            environment.
          </p>
          <p>
            This project helped me better understand how secure connections,
            cloud hosting, Linux-based administration, and user-facing design
            come together in a practical build.
          </p>
        </div>
      </section>

      <section className="container section">
        <div className="card">
          <h2>Project Demo</h2>
          <p>
            This demo highlights the ScramblVPN interface and overall build
            direction. It represents both the technical side of the project and
            the effort to create a polished, usable presentation.
          </p>

          <div className="demo-shell">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="demo-video"
              preload="metadata"
            >
              <source src="/scrambl-demo.webm" type="video/webm" />
              <source src="/scrambl-demo-web.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="grid-two">
          <div className="card">
            <h3>Why I Built It</h3>
            <p>
              I built ScramblVPN to gain hands-on experience with secure
              networking concepts, Linux systems, deployment workflows, and
              debugging real issues. This project gave me a way to learn by
              building instead of only studying theory.
            </p>
          </div>

          <div className="card">
            <h3>What This Project Represents</h3>
            <p>
              This project reflects initiative, technical curiosity, and the
              ability to create something functional while strengthening skills
              in cybersecurity, networking, development, and deployment.
            </p>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="grid-two">
          <div className="card">
            <h2>Tech Stack</h2>
            <ul className="skill-list">
              <li>Kali Linux</li>
              <li>Python and Flask</li>
              <li>SSH and key-based remote access</li>
              <li>Networking and routing concepts</li>
              <li>Cloud hosting setup</li>
              <li>Next.js and Vercel deployment</li>
            </ul>
          </div>

          <div className="card">
            <h2>Security Concepts Used</h2>
            <ul className="skill-list">
              <li>Secure tunneling concepts</li>
              <li>Traffic routing awareness</li>
              <li>Remote server access and key handling</li>
              <li>Firewall and network flow considerations</li>
              <li>Port forwarding and NAT awareness</li>
              <li>Deployment and environment troubleshooting</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
