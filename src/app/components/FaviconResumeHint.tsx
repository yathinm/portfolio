"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { LiaLongArrowAltUpSolid } from "react-icons/lia";
import Image from "next/image";

export default function FaviconResumeHint() {
  const [resumeRect, setResumeRect] = useState<DOMRect | null>(null);
  const anchorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const resumeEl = document.getElementById("resume-icon");
    const updateRects = () => {
      if (resumeEl) setResumeRect(resumeEl.getBoundingClientRect());
    };
    updateRects();
    window.addEventListener("resize", updateRects);
    window.addEventListener("scroll", updateRects, true);
    return () => {
      window.removeEventListener("resize", updateRects);
      window.removeEventListener("scroll", updateRects, true);
    };
  }, []);

  // Position the label directly below and centered under the resume icon
  const anchorPos = useMemo(() => {
    if (!resumeRect) return { left: 12, bottom: 12, useBottom: true } as const;
    const gapBelow = 20; // increased vertical gap below the icon
    const centerX = resumeRect.left + resumeRect.width / 2;
    const top = Math.min(window.innerHeight - 56, resumeRect.bottom + gapBelow);
    return { left: centerX, top, useBottom: false } as const;
  }, [resumeRect]);

  return (
    <div
      style={
        anchorPos.useBottom
          ? { position: "fixed", left: 12, bottom: 12, zIndex: 6, color: "#3f5a36" }
          : { position: "fixed", left: anchorPos.left, top: anchorPos.top, transform: "translateX(-50%)", zIndex: 6, color: "#3f5a36" }
      }
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
        <LiaLongArrowAltUpSolid size={28} style={{ color: "#3f5a36" }} />
        <div ref={anchorRef} style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Image src="/favicon.ico" alt="favicon" width={28} height={28} style={{ borderRadius: 6, marginTop: 2, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }} />
          <span style={{ fontWeight: 700, fontSize: 14, textTransform: "uppercase", letterSpacing: 0.6 }}>my resume</span>
        </div>
      </div>
    </div>
  );
}


