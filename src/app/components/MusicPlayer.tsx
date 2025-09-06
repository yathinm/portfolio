"use client";

import { useEffect, useRef, useState } from "react";
import type WaveSurfer from "wavesurfer.js";
import WaveSurferPlayer from "@wavesurfer/react";
import { CiPlay1, CiPause1 } from "react-icons/ci";

interface MusicPlayerProps {
  src: string;
  title?: string;
}

export default function MusicPlayer({ src, title }: MusicPlayerProps) {
  const wavesurferRef = useRef<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const playerIdRef = useRef<string>(Math.random().toString(36).slice(2));

  const onReady = (ws: WaveSurfer) => {
    wavesurferRef.current = ws;
    ws.on("play", () => setIsPlaying(true));
    ws.on("pause", () => setIsPlaying(false));
    ws.on("finish", () => setIsPlaying(false));
    ws.on("timeupdate", (t: number) => setCurrentTime(t ?? 0));
    setDuration(ws.getDuration?.() ?? 0);
  };

  const togglePlay = () => {
    const ws = wavesurferRef.current;
    if (!ws) return;
    if (ws.isPlaying()) {
      ws.pause();
    } else {
      // Notify other players to pause before starting this one
      try {
        window.dispatchEvent(new CustomEvent("music-player:request-play", { detail: { id: playerIdRef.current } }));
      } catch {}
      ws.play();
    }
    setIsPlaying(ws.isPlaying());
  };

  // Listen for global play requests from other players and pause this one if necessary
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as { id?: string } | undefined;
      if (!detail || detail.id === playerIdRef.current) return;
      const ws = wavesurferRef.current;
      if (ws && ws.isPlaying()) {
        ws.pause();
        setIsPlaying(false);
      }
    };
    window.addEventListener("music-player:request-play", handler);
    return () => window.removeEventListener("music-player:request-play", handler);
  }, []);

  const formatTime = (t: number) => {
    const sec = Math.max(0, Math.floor(t || 0));
    const m = Math.floor(sec / 60)
      .toString()
      .padStart(1, "0");
    const s = (sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div
      style={{
        width: "min(1100px, 96vw)",
        margin: "28px auto 0",
        padding: "18px 20px",
        borderRadius: 12,
        border: "1px solid #e6e6e6",
        background: "#fafafa",
      }}
    >
      {title ? (
        <div
          className="title-strong"
          style={{
            color: "#3f5a36",
            fontSize: "clamp(1rem, 2vw, 1.4rem)",
            marginBottom: 8,
            whiteSpace: "normal",
            wordBreak: "break-word",
            lineHeight: 1.15,
          }}
        >
          {title}
        </div>
      ) : null}

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause" : "Play"}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 36,
            height: 36,
            border: "none",
            background: "transparent",
            color: "#3f5a36",
            cursor: "pointer",
            flex: "0 0 auto",
            transition: "transform 120ms ease",
          }}
          onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.96)")}
          onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          {isPlaying ? (
            <CiPause1 size={26} />
          ) : (
            <CiPlay1 size={26} />
          )}
        </button>

        <div style={{ flex: 1, overflow: "hidden", maxWidth: "100%" }}>
          <WaveSurferPlayer
            key={src}
            height={64}
            barWidth={2}
            barGap={2}
            barRadius={2}
            waveColor="#cfe0c8"
            progressColor="#3f5a36"
            url={src}
            backend="MediaElement"
            cursorColor="#3f5a36"
            interact={true}
            fillParent={true}
            autoScroll={false}
            autoCenter={false}
            onReady={onReady}
          />
        </div>

        <div
          style={{
            minWidth: 64,
            textAlign: "right",
            color: "#3f5a36",
            fontFamily: "var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, monospace",
          }}
        >
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </div>
    </div>
  );
}


