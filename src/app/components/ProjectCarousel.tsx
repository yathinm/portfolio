"use client";

import React, { useCallback, useMemo, useState } from "react";
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
};

export default function ProjectCarousel() {
  const items: CarouselItem[] = useMemo(
    () => [
      { src: PortfolioPreview, alt: "Portfolio", title: "Portfolio" },
      { src: GrooveLabPreview, alt: "GrooveLab", title: "Groove Lab" },
      { src: NBADraftHubPreview, alt: "NBA Draft Hub", title: "2025 NBA Draft Hub" },
      { src: NBAMVPRankerPreview, alt: "NBA MVP Ranker", title: "2025 NBA MVP Ranker" },
      { src: PantryPilotPreview, alt: "PantryPilot", title: "Pantry Pilot" },
      { src: UCSDAkpsiPreview, alt: "UCSD AKPsi", title: "UCSD Alpha Kappa Psi Official Website" },
    ],
    []
  );

  const [index, setIndex] = useState<number>(0);

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
    </div>
  );
}


