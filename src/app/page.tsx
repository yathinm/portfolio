"use client";
import Blob from "./components/Blob";
import AnimatedTitle from "./components/AnimatedTitle";
import IconLinks from "./components/IconLinks";
import FaviconResumeHint from "./components/FaviconResumeHint";

export default function Home() {
  return (
    <main style={{ width: "100vw", height: "100vh", margin: 0, padding: 0, backgroundColor: "#ffffff", position: "relative" }}>   
      <div style={{ position: "absolute", top: "50%", left: "6%", transform: "translateY(-50%)", color: "#000", zIndex: 10 }}>
        <div className="flex flex-col items-start gap-4">
          <div className="title-strong leading-none">
            <AnimatedTitle className="animated-title" />
          </div>
          <IconLinks />
        </div>
      </div>
      <Blob />
      <FaviconResumeHint />
    </main>
  );
}