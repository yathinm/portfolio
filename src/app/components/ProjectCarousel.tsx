"use client";

import React, { useCallback, useEffect, useState } from "react";
import { FaLink, FaGithub } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Image, { StaticImageData } from "next/image";
import { projects as items } from "./projectsData";

export default function ProjectCarousel() {
  const [index, setIndex] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isNarrow, setIsNarrow] = useState<boolean>(false);
  const [isPreviewHover, setIsPreviewHover] = useState<boolean>(false);

  const goPrev = useCallback(() => {
    setIndex((currentIndex) =>
      currentIndex === 0 ? items.length - 1 : currentIndex - 1,
    );
  }, [items.length]);

  const goNext = useCallback(() => {
    setIndex((currentIndex) =>
      currentIndex === items.length - 1 ? 0 : currentIndex + 1,
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
          <path
            d="M15 18l-6-6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
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
          <path
            d="M9 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
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
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src={items[index].src}
                      alt={items[index].alt}
                      placeholder="blur"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        objectPosition: "center",
                        backgroundColor: "#ffffff",
                      }}
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
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 800,
                        color: "#3f5a36",
                        letterSpacing: 0.3,
                        textTransform: "uppercase",
                      }}
                    >
                      Why
                    </div>
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
                <h2
                  id="project-title"
                  style={{
                    margin: 0,
                    fontSize: 28,
                    fontWeight: 800,
                    color: "#3f5a36",
                  }}
                >
                  {items[index].title}
                </h2>
                <p
                  style={{
                    marginTop: 12,
                    marginBottom: 16,
                    color: "#374151",
                    lineHeight: 1.6,
                    fontSize: 16,
                    fontFamily: "Arial, Helvetica, sans-serif",
                  }}
                >
                  {items[index].description}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 10,
                    marginBottom: 22,
                  }}
                >
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
                        (e.currentTarget as HTMLAnchorElement).style.transform =
                          "scale(1.08)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.transform =
                          "scale(1)";
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
                        (e.currentTarget as HTMLAnchorElement).style.transform =
                          "scale(1.08)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.transform =
                          "scale(1)";
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
