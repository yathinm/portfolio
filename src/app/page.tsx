"use client";
import Blob from "./components/Blob";
import AnimatedTitle from "./components/AnimatedTitle";

export default function Home() {
  return (
    <main style={{ width: "100vw", height: "100vh", margin: 0, padding: 0, backgroundColor: "#ffffff", position: "relative" }}>   
      <div style={{ position: "absolute", top: "50%", left: "6%", transform: "translateY(-50%)", color: "#000", lineHeight: 1.05, fontSize: "4rem", fontWeight: 800 }}>
        <AnimatedTitle />
      </div>
      <Blob />
    </main>
  );
}