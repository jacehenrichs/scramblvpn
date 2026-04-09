const skills = [
  {
    title: "Networking Fundamentals",
    items: [
      "IP addressing",
      "client and server communication",
      "secure tunneling concepts",
      "routing and connection flow awareness",
      "understanding VPN-related traffic paths",
    ],
  },
  {
    title: "Linux and System Administration",
    items: [
      "working in Kali Linux",
      "terminal navigation",
      "environment setup",
      "package installation",
      "service management",
      "troubleshooting permissions and configuration issues",
    ],
  },
  {
    title: "Secure Remote Access",
    items: [
      "SSH usage",
      "public and private key handling",
      "remote instance access",
      "credential protection awareness",
      "connection troubleshooting",
    ],
  },
  {
    title: "Python and App Logic",
    items: [
      "Python-based project structure",
      "running services",
      "virtual environments",
      "debugging application issues",
      "understanding backend project flow",
    ],
  },
  {
    title: "Web Development",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "responsive layouts",
      "creating a cleaner and more professional UI",
    ],
  },
  {
    title: "Deployment and Hosting",
    items: [
      "preparing a project for deployment",
      "using Vercel for hosting",
      "organizing a portfolio-style web presence",
      "structuring pages for presentation",
    ],
  },
];

export default function SkillsPage() {
  return (
    <div className="page-wrap">
      <section className="container section">
        <div className="card">
          <h1>Skills Obtained</h1>
          <p>
            Building ScramblVPN required learning across cybersecurity,
            networking, development, deployment, and troubleshooting. This
            project helped strengthen both technical ability and problem-solving
            skills through hands-on work.
          </p>
        </div>
      </section>

      <section className="container section">
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="card" key={skill.title}>
              <h3>{skill.title}</h3>
              <ul className="skill-list">
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
