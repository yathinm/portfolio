"use client";

import React from "react";
import dynamic from "next/dynamic";

const MusicPlayer = dynamic(() => import("../components/MusicPlayer"), { ssr: false });

async function fetchSongs(): Promise<{ title: string; url: string }[]> {
  const res = await fetch("/api/music/songs", { cache: "no-store" });
  if (!res.ok) return [];
  const data = await res.json();
  return data.songs ?? [];
}

function shuffleArray<T>(items: T[]): T[] {
  const array = items.slice();
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

export default function MusicPage() {
  return (
    <main
      style={{
        width: "100vw",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        backgroundColor: "#ffffff",
        color: "#000",
      }}
    >
      <div style={{ paddingTop: 96 }}>
        <h1
          className="title-strong"
          style={{
            textAlign: "center",
            margin: 0,
            color: "#3f5a36",
            fontSize: "clamp(1.1rem, 2.2vw, 2rem)",
          }}
        >
          My Favorite Songs Right Now
        </h1>
      </div>

      <SongsList />

      <div style={{ height: 80 }} />
    </main>
  );
}

function SongsList() {
  const [songs, setSongs] = React.useState<{ title: string; url: string }[]>([]);

  const load = React.useCallback(() => {
    fetchSongs()
      .then((list) => setSongs(shuffleArray(list)))
      .catch(() => setSongs([]));
  }, []);

  React.useEffect(() => {
    load();
    const handleFocus = () => load();
    const handleShow = () => load();
    window.addEventListener('focus', handleFocus);
    window.addEventListener('pageshow', handleShow);
    document.addEventListener('visibilitychange', handleShow);
    return () => {
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('pageshow', handleShow);
      document.removeEventListener('visibilitychange', handleShow);
    };
  }, [load]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32, marginTop: 24 }}>
      {songs.map((song) => (
        <MusicPlayer key={song.url} src={song.url} title={song.title} />
      ))}
    </div>
  );
}


