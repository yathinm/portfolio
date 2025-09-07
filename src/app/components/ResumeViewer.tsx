"use client";

import { useMemo, useState } from "react";

export default function ResumeViewer() {
  const [zoom, setZoom] = useState(1);

  const iframeSrc = useMemo(() => {
    // Use built-in PDF viewer params to hide toolbar and fit page
    const base = "/api/resume";
    // Fallback to built-in viewer features (may vary by browser)
    // Using #page=1&zoom=auto helps initial fit
    return `${base}#page=1&zoom=${Math.round(zoom * 100)}%`;
  }, [zoom]);

  const handleZoomIn = () => setZoom((z) => Math.min(2, parseFloat((z + 0.1).toFixed(2))));
  const handleZoomOut = () => setZoom((z) => Math.max(0.5, parseFloat((z - 0.1).toFixed(2))));
  const handleReset = () => setZoom(1);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "auto 1fr",
        height: "100%",
        maxWidth: 1200,
        margin: "0 auto",
        gap: 8,
        padding: "16px 12px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button
            onClick={handleZoomOut}
            style={{
              border: "1px solid #d0d0d0",
              background: "#f8f8f8",
              padding: "6px 10px",
              borderRadius: 8,
              cursor: "pointer",
            }}
            aria-label="Zoom out"
          >
            −
          </button>
          <div style={{ minWidth: 60, textAlign: "center", fontWeight: 600 }}>{Math.round(zoom * 100)}%</div>
          <button
            onClick={handleZoomIn}
            style={{
              border: "1px solid #d0d0d0",
              background: "#f8f8f8",
              padding: "6px 10px",
              borderRadius: 8,
              cursor: "pointer",
            }}
            aria-label="Zoom in"
          >
            +
          </button>
          <button
            onClick={handleReset}
            style={{
              border: "1px solid #d0d0d0",
              background: "#ffffff",
              padding: "6px 10px",
              borderRadius: 8,
              cursor: "pointer",
              marginLeft: 6,
            }}
          >
            Reset
          </button>
        </div>
        <a
          href="/api/resume?download=1"
          style={{
            color: "#3f5a36",
            textDecoration: "underline",
            fontWeight: 600,
          }}
        >
          Download PDF
        </a>
      </div>

      <div
        style={{
          position: "relative",
          display: "grid",
          placeItems: "center",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          borderRadius: 12,
          background: "#f3f4f6",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "grid",
            placeItems: "center",
            overflow: "auto",
          }}
        >
          <iframe
            title="Resume PDF"
            src={iframeSrc}
            style={{
              width: "85%",
              height: "95%",
              border: 0,
              background: "white",
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            }}
          />
        </div>
      </div>
    </div>
  );
}


