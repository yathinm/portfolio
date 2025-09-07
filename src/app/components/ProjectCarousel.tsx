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
  why?: string;
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
        why:
          "I grew up with a pantry full of ingredients, but I always struggled to figure out what quick snacks I could make. I created Pantry Pilot to show you easy recipes using only the ingredients you already have at home.",
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
        why:
          "As a musician, I wanted a better way to practice the drums and bass. I created Groove Lab so I could listen to a song, play along with a metronome, and record myself and  to it all in the same platform.",
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
        why:
          "The previous chapter website, built on Wix, was too slow, which led to high user drop-off and a lack of engagement. Other webmasters and I rebuilt the site to significantly reduce latency and enhance the overall user experience.",
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
        why:
          "My resume can list my skills, but it can't tell the full story behind my work. I built this portfolio to give my projects context, offering a deeper look into the problems I solved, and my personal life as well.",
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
        why:
          "I created the NBA Draft Hub for one simple reason: I wanted a better way to scout the next generation of NBA talent. As a passionate basketball fan, I built this site to be a clean, fast, and user-friendly resource for anyone looking to get a detailed look at the upcoming draft class.",
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
        why:
          "The NBA MVP conversation is often dominated by media narratives and subjective debates. I created this project to cut through the noise and develop an objective, data-driven ranking model that uses advanced player statistics to determine who is truly the MVP in the league.",
        tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Java Swing UI"],
        codeUrl: "https://github.com/yathinm/NBA-MVP-RANKER",
      },
    ],
    []
  );

  const [index, setIndex] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isNarrow, setIsNarrow] = useState<boolean>(false);
  const [isPreviewHover, setIsPreviewHover] = useState<boolean>(false);

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
          cursor: "pointer",
          transform: isPreviewHover ? "translateY(-4px) scale(1.01)" : "none",
          boxShadow: isPreviewHover
            ? "0 22px 40px rgba(63,90,54,0.25)"
            : "0 10px 30px rgba(0,0,0,0.12)",
          transition: "transform 180ms ease, box-shadow 180ms ease",
        }}
        onClick={openModal}
        role="button"
        aria-label="Open project details"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") openModal();
        }}
        onMouseEnter={() => setIsPreviewHover(true)}
        onMouseLeave={() => setIsPreviewHover(false)}
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
            display: "block",
            transform: isPreviewHover ? "scale(1.025)" : "scale(1)",
            transition: "transform 220ms ease",
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
                      src={items[index].src}
                      alt={items[index].alt}
                      placeholder="blur"
                      style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center", backgroundColor: "#ffffff" }}
                    />
                  </div>
                </div>

                {items[index].why && (
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
                      {items[index].why}
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

                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  {items[index].demoUrl && (
                    <a
                      href={items[index].demoUrl}
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
                  {items[index].codeUrl && (
                    <a
                      href={items[index].codeUrl}
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


