"use client";

import React, { useCallback, useMemo, useState } from "react";
import Image from "next/image";

import GrooveLabPreview from "./ProjectPreviews/GrooveLabPreview.png";
import NBADraftHubPreview from "./ProjectPreviews/NBADraftHubPreview.png";
import NBAMVPRankerPreview from "./ProjectPreviews/NBAMVPRankerPreview.png";
import PantryPilotPreview from "./ProjectPreviews/PantryPilotPreview.png";
import PortfolioPreview from "./ProjectPreviews/PortfolioPreview.png";
import UCSDAkpsiPreview from "./ProjectPreviews/UCSDAkpsiPreview.png";

type CarouselItem = {
  src: any;
  alt: string;
};

export default function ProjectCarousel() {
  const items: CarouselItem[] = useMemo(
    () => [
      { src: PortfolioPreview, alt: "Portfolio" },
      { src: GrooveLabPreview, alt: "GrooveLab" },
      { src: NBADraftHubPreview, alt: "NBA Draft Hub" },
      { src: NBAMVPRankerPreview, alt: "NBA MVP Ranker" },
      { src: PantryPilotPreview, alt: "PantryPilot" },
      { src: UCSDAkpsiPreview, alt: "UCSD AKPsi" },
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


