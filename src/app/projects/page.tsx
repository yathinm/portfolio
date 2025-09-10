import ProjectGrid from "../components/ProjectGrid";

export default function ProjectsPage() {
  return (
    <main
      style={{
        width: "100vw",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        backgroundColor: "#ffffff",
        color: "#000",
        position: "relative",
        overflowY: "auto",
        paddingTop: 120,
      }}
    >
      <ProjectGrid />
    </main>
  );
}


