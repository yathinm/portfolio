"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { FaLink, FaGithub } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Image, { StaticImageData } from "next/image";

import GrooveLabPreview from "./ProjectPreviews/GrooveLabPreview.png";
import NBADraftHubPreview from "./ProjectPreviews/NBADraftHubPreview.png";
import NBAMVPRankerPreview from "./ProjectPreviews/NBAMVPRankerPreview.png";
import PantryPilotPreview from "./ProjectPreviews/PantryPilotPreview.png";
import PortfolioPreview from "./ProjectPreviews/PortfolioPreview.png";
import UCSDAkpsiPreview from "./ProjectPreviews/UCSDAkpsiPreview.png";

type CarouselItem = {
  src: StaticImageData;
  alt: string;
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
};

export default function ProjectCarousel() {
  const items: CarouselItem[] = useMemo(
    () => [
      {
        src: PantryPilotPreview,
        alt: "PantryPilot",
        title: "Pantry Pilot",
        description:
          "An AI recipe generator that transforms your ingredients into complete recipes with step-by-step instructions, all powered by a modern React and Firebase stack.",
        tags: ["React", "TypeScript", "Firebase", "OpenAI", "REST APIs", "Google Cloud Platform", "Serverless Functions", "CI/CD"],
        codeUrl: "https://github.com/yathinm/pantry-pilot",
        demoUrl: "https://pantry-pilot8.web.app/",
      },
      {
        src: GrooveLabPreview,
        alt: "GrooveLab",
        title: "Groove-Lab",
        description:
          "A browser-based music workstation for real-time audio production, leveraging a modern stack of React, TypeScript, and Supabase, with the Web Audio API enabling advanced Digital Signal Processing.",
        tags: [
          "React.js",
          "Redux.js",
          "TypeScript",
          "Web Audio API",
          "MediaStream API",
          "PostgreSQL",
          "Supabase",
          "Digital Signal Processing",
        ],
        codeUrl: "https://github.com/yathinm/groove-lab",
        demoUrl: "https://groove-lab.vercel.app/",
      },
      {
        src: UCSDAkpsiPreview,
        alt: "UCSD AKPsi",
        title: "UCSD AKPSI Website",
        description:
          "Official website for Alpha Kappa Psi at UCSD powered by a modern React and Supabase stack.",
        tags: [
          "TypeScript",
          "React",
          "Tailwind CSS",
          "Next.js",
          "Node.js",
          "Supabase",
          "PostgreSQL",
        ],
        codeUrl: "https://github.com/itsgeorgema/ucsd-akpsi-website",
        demoUrl: "https://www.akpsiatucsd.com/",
      },
      {
        src: PortfolioPreview,
        alt: "Portfolio",
        title: "Portfolio",
        description:
          "My personal portfolio website showcasing my projects, favorite music, about me, and resume utilizing a modern stack of React, Next.js, and Tailwind CSS.",
        tags: [
          "TypeScript",
          "React",
          "Next.js",
          "Tailwind CSS",
          "Three.js",
          "React Three Fiber",
          "Wavesurfer.js",
        ],
        codeUrl: "https://github.com/yathinm/portfolio",
        demoUrl: "https://yathinmrudul.vercel.app/",
      },
      {
        src: NBADraftHubPreview,
        alt: "NBA Draft Hub",
        title: "NBA Draft Hub",
        description:
          "Interactive hub for the 2025 NBA Draft prospects, stats, and visualizations leveraging React and JSON data.",
        tags: ["Next.js", "TypeScript", "Json"],
        codeUrl: "https://github.com/yathinm/nba-draft-hub",
        demoUrl: "https://nba-draft-hub.vercel.app/",
      },
      {
        src: NBAMVPRankerPreview,
        alt: "NBA MVP Ranker",
        title: "NBA MVP Ranker",
        description:
          "Tool to rank NBA MVP candidates using season metrics utilizing Python Libraries and Java.",
        tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Java Swing UI"],
        codeUrl: "https://github.com/yathinm/NBA-MVP-RANKER",
      },
    ],
    []
  );

  const [index, setIndex] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isNarrow, setIsNarrow] = useState<boolean>(false);

  const goPrev = useCallback(() => {
    setIndex((currentIndex) =>
      currentIndex === 0 ? items.length - 1 : currentIndex - 1
    );
  }, [items.length]);

  const goNext = useCallback(() => {
    setIndex((currentIndex) =>
      currentIndex === items.length - 1 ? 0 : currentIndex + 1
    );
  }, [items.length]);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    const evaluate = () => setIsNarrow(window.innerWidth < 900);
    evaluate();
    window.addEventListener("resize", evaluate);
    return () => window.removeEventListener("resize", evaluate);
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "min(92vw, 640px)",
          height: "min(70vh, 400px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          border: "4px solid #3f5a36",
          borderRadius: 14,
          overflow: "hidden",
        }}
        onClick={openModal}
        role="button"
        aria-label="Open project details"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") openModal();
        }}
      >
        <Image
          src={items[index].src}
          alt={items[index].alt}
          placeholder="blur"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            display: "block",
          }}
        />
        {null}
      </div>

      <div
        style={{
          marginTop: 20,
          color: "#3f5a36",
          fontWeight: 700,
          textAlign: "center",
          fontSize: 22,
          lineHeight: 1.1,
          padding: "0 12px",
          maxWidth: "min(92vw, 640px)",
        }}
      >
        {items[index].title}
      </div>

      <button
        aria-label="Previous project"
        onClick={goPrev}
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          left: "calc(50% - min(46vw, 320px) - 56px)",
          background: "transparent",
          color: "#3f5a36",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <button
        aria-label="Next project"
        onClick={goNext}
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          right: "calc(50% - min(46vw, 320px) - 56px)",
          background: "transparent",
          color: "#3f5a36",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {isOpen && (
        <div
          onClick={closeModal}
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
              onClick={closeModal}
              aria-label="Close"
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                width: "auto",
                height: "auto",
                background: "transparent",
                color: "#3f5a36",
                border: "none",
                cursor: "pointer",
                zIndex: 5,
              }}
            >
              <IoClose size={20} />
            </button>
            <div
              style={{
                display: "flex",
                flexDirection: isNarrow ? "column" : "row",
                alignItems: "stretch",
                width: "100%",
              }}
            >
              <div
                style={{
                  width: isNarrow ? "100%" : "50%",
                  minWidth: 0,
                  borderRight: isNarrow ? "none" : "1px solid rgba(63,90,54,0.12)",
                  background: "#f8faf9",
                }}
              >
                <div style={{ position: "relative", width: "100%", height: isNarrow ? 240 : 420, overflow: "hidden" }}>
                  <Image
                    src={items[index].src}
                    alt={items[index].alt}
                    placeholder="blur"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              </div>
              <div style={{ flex: 1, padding: 24 }}>
                <h2 id="project-title" style={{ margin: 0, fontSize: 28, fontWeight: 800, color: "#3f5a36" }}>
                  {items[index].title}
                </h2>
                <p style={{
                  marginTop: 12,
                  marginBottom: 16,
                  color: "#374151",
                  lineHeight: 1.6,
                  fontSize: 16,
                  fontFamily: "Arial, Helvetica, sans-serif",
                }}>
                  {items[index].description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 22 }}>
                  {items[index].tags.map((tag) => (
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

                <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                  {items[index].demoUrl && (
                    <a
                      href={items[index].demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: "12px 18px",
                        borderRadius: 14,
                        background: "#3f5a36",
                        color: "#ffffff",
                        fontWeight: 800,
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 10,
                        boxShadow: "0 6px 24px rgba(63,90,54,0.35)",
                        transition: "transform .15s ease, box-shadow .15s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
                        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 10px 30px rgba(63,90,54,0.45)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 6px 24px rgba(63,90,54,0.35)";
                      }}
                    >
                      <FaLink />
                      Live Demo
                    </a>
                  )}
                  {items[index].codeUrl && (
                    <a
                      href={items[index].codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: "12px 18px",
                        borderRadius: 14,
                        background: "transparent",
                        color: "#3f5a36",
                        border: "2px solid #3f5a36",
                        textDecoration: "none",
                        fontWeight: 800,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 10,
                        backdropFilter: "blur(2px)",
                        boxShadow: "inset 0 0 0 1px rgba(63,90,54,0.08)",
                        transition: "background .15s ease, transform .15s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.background = "rgba(63,90,54,0.06)";
                        (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                        (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                      }}
                    >
                      <FaGithub />
                      Code
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


