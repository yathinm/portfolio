"use client";

import Image from "next/image";
import { FaLink, FaGithub } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { projects } from "./projectsData";
import { useEffect, useMemo, useState } from "react";

export default function ProjectGrid() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isNarrow, setIsNarrow] = useState<boolean>(false);

  useEffect(() => {
    const evaluate = () => setIsNarrow(window.innerWidth < 900);
    evaluate();
    window.addEventListener("resize", evaluate);
    return () => window.removeEventListener("resize", evaluate);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
    };
    if (selectedIndex !== null) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedIndex]);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 1200,
        margin: "0 auto",
        padding: "16px 16px 80px",
      }}
   >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
        }}
      >
        {projects.map((project, idx) => (
          <div
            key={project.title}
            style={{
              border: "2px solid #3f5a36",
              borderRadius: 14,
              background: "#ffffff",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              transition: "transform 160ms ease, box-shadow 160ms ease",
              cursor: "pointer",
            }}
            onClick={() => setSelectedIndex(idx)}
          >
            <div style={{ position: "relative", width: "100%", paddingTop: "58%" }}>
              <Image
                src={project.src}
                alt={project.alt}
                placeholder="blur"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>

            <div style={{ padding: 14 }}>
              <div
                style={{
                  color: "#3f5a36",
                  fontWeight: 800,
                  fontSize: 19,
                  lineHeight: 1.2,
                  marginBottom: 10,
                }}
              >
                {project.title}
              </div>

              <div style={{ display: "flex", gap: 10 }}>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open live demo"
                    style={{ color: "#3f5a36" }}
                  >
                    <FaLink size={22} />
                  </a>
                )}
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View code on GitHub"
                    style={{ color: "#3f5a36" }}
                  >
                    <FaGithub size={22} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          onClick={() => setSelectedIndex(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.65)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
            zIndex: 1000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
            style={{
              width: "min(92vw, 880px)",
              maxHeight: "90vh",
              background: "#ffffff",
              color: "#1f2937",
              borderRadius: 24,
              boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
              overflow: "hidden",
              border: "1px solid rgba(63,90,54,0.18)",
              position: "relative",
            }}
          >
            <button
              onClick={() => setSelectedIndex(null)}
              aria-label="Close"
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                width: "auto",
                height: "auto",
                background: "transparent",
                color: "#3f5a36",
                border: "none",
                cursor: "pointer",
                zIndex: 5,
                padding: 8,
                lineHeight: 0,
              }}
            >
              <IoClose size={28} />
            </button>

            <div
              style={{
                display: "flex",
                flexDirection: isNarrow ? "column" : "row",
                alignItems: "stretch",
                width: "100%",
                height: "100%",
                maxHeight: "90vh",
                gap: isNarrow ? 12 : 18,
                padding: 16,
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  width: isNarrow ? "100%" : "62%",
                  minWidth: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    background: "#ffffff",
                    border: "2px solid #3f5a36",
                    borderRadius: 16,
                    height: isNarrow ? 280 : "calc(100% - 192px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
                  }}
                >
                  <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Image
                      src={projects[selectedIndex].src}
                      alt={projects[selectedIndex].alt}
                      placeholder="blur"
                      style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center", backgroundColor: "#ffffff" }}
                    />
                  </div>
                </div>

                {projects[selectedIndex].why && (
                  <div
                    style={{
                      background: "#ffffff",
                      border: "2px solid #3f5a36",
                      borderRadius: 16,
                      padding: 16,
                      boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
                      height: isNarrow ? "auto" : 180,
                      overflow: "auto",
                    }}
                  >
                    <div style={{ fontSize: 14, fontWeight: 800, color: "#3f5a36", letterSpacing: 0.3, textTransform: "uppercase" }}>Why</div>
                    <p
                      style={{
                        marginTop: 8,
                        marginBottom: 0,
                        color: "#374151",
                        lineHeight: 1.6,
                        fontSize: 16,
                        fontFamily: "Arial, Helvetica, sans-serif",
                      }}
                    >
                      {projects[selectedIndex].why}
                    </p>
                  </div>
                )}
              </div>
              <div
                style={{
                  flex: 1,
                  padding: 24,
                  background: "#ffffff",
                  border: "2px solid #3f5a36",
                  borderRadius: 16,
                  boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
                }}
              >
                <h2 id="project-title" style={{ margin: 0, fontSize: 28, fontWeight: 800, color: "#3f5a36" }}>
                  {projects[selectedIndex].title}
                </h2>
                <p style={{
                  marginTop: 12,
                  marginBottom: 16,
                  color: "#374151",
                  lineHeight: 1.6,
                  fontSize: 16,
                  fontFamily: "Arial, Helvetica, sans-serif",
                }}>
                  {projects[selectedIndex].description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 22 }}>
                  {projects[selectedIndex].tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "6px 12px",
                        borderRadius: 999,
                        border: "1px solid #3f5a36",
                        color: "#3f5a36",
                        fontSize: 12,
                        fontWeight: 700,
                        background: "rgba(63, 90, 54, 0.08)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  {projects[selectedIndex].demoUrl && (
                    <a
                      href={projects[selectedIndex].demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open live demo"
                      style={{
                        padding: 6,
                        background: "transparent",
                        color: "#3f5a36",
                        border: "none",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "transform .15s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.08)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
                      }}
                    >
                      <FaLink size={32} />
                    </a>
                  )}
                  {projects[selectedIndex].codeUrl && (
                    <a
                      href={projects[selectedIndex].codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View code on GitHub"
                      style={{
                        padding: 6,
                        background: "transparent",
                        color: "#3f5a36",
                        border: "none",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "transform .15s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.08)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
                      }}
                    >
                      <FaGithub size={32} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


