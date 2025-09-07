import AnimatedTitle from "../components/AnimatedTitle";
import IconLinks from "../components/IconLinks";

export default function AboutPage() {
  const toolkit = {
    backend: ["Node.js", "Flask", "Python", "Java", "SQL", "Django"],
    frontend: [
      "JavaScript",
      "TypeScript",
      "React",
      "React Native",
      "Next.js",
      "Tailwind",
      "HTML",
      "CSS",
    ],
    databases: ["PostgreSQL", "Firebase", "Supabase"],
    tools: [
      "Git & GitHub",
      "Figma",
      "Google Cloud Platform",
      "OpenAI",
      "Docker",
      "Gradle",
      "CI/CD",
      "Agile",
    ],
  } as const;
  return (
    <main style={{ width: "100%", minHeight: "100vh", backgroundColor: "#ffffff" }}>
      {/* Hero Section */}
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "48px 16px 24px",
          display: "grid",
          gridTemplateColumns: "1fr",
          rowGap: 24,
        }}
      >

      </section>

      {/* Intro/Bio Section */}
      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "8px 16px 24px",
        }}
      >
      </section>

      
      {/* Education Section */}
      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "12px 16px 24px",
        }}
      >
        <h2 className="title-strong" style={{ fontSize: "clamp(1.3rem, 2.6vw, 2rem)", color: "#3f5a36", margin: 0 }}>
          Education
        </h2>
      </section>


      {/* Skills Section */}
      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "12px 16px 24px",
        }}
      >
        <h2 className="title-strong" style={{ fontSize: "clamp(1.3rem, 2.6vw, 2rem)", color: "#3f5a36", margin: 0 }}>
          My Toolkit
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12" style={{ marginTop: 18 }}>
          <div>
            <h3 style={{ fontSize: 20, fontWeight: 800, margin: 0, color: "#3f5a36" }}>Backend</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 12 }}>
              {toolkit.backend.map((item) => (
                <span
                  key={item}
                  style={{
                    padding: "8px 12px",
                    borderRadius: 999,
                    background: "#f5f7f4",
                    color: "#3f5a36",
                    border: "1px solid #dfe7db",
                    fontWeight: 600,
                    fontSize: 14,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>

            <h3 style={{ fontSize: 20, fontWeight: 800, margin: "26px 0 0", color: "#3f5a36" }}>Databases</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 12 }}>
              {toolkit.databases.map((item) => (
                <span
                  key={item}
                  style={{
                    padding: "8px 12px",
                    borderRadius: 999,
                    background: "#f5f7f4",
                    color: "#3f5a36",
                    border: "1px solid #dfe7db",
                    fontWeight: 600,
                    fontSize: 14,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: 20, fontWeight: 800, margin: 0, color: "#3f5a36" }}>Frontend</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 12 }}>
              {toolkit.frontend.map((item) => (
                <span
                  key={item}
                  style={{
                    padding: "8px 12px",
                    borderRadius: 999,
                    background: "#f5f7f4",
                    color: "#3f5a36",
                    border: "1px solid #dfe7db",
                    fontWeight: 600,
                    fontSize: 14,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>

            <h3 style={{ fontSize: 20, fontWeight: 800, margin: "26px 0 0", color: "#3f5a36" }}>Tools & Platforms</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 12 }}>
              {toolkit.tools.map((item) => (
                <span
                  key={item}
                  style={{
                    padding: "8px 12px",
                    borderRadius: 999,
                    background: "#f5f7f4",
                    color: "#3f5a36",
                    border: "1px solid #dfe7db",
                    fontWeight: 600,
                    fontSize: 14,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}


