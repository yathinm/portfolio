"use client";

import { StaticImageData } from "next/image";

import GrooveLabPreview from "./ProjectPreviews/GrooveLabPreview.png";
import NBADraftHubPreview from "./ProjectPreviews/NBADraftHubPreview.png";
import NBAMVPRankerPreview from "./ProjectPreviews/NBAMVPRankerPreview.png";
import PantryPilotPreview from "./ProjectPreviews/PantryPilotPreview.png";
import PortfolioPreview from "./ProjectPreviews/PortfolioPreview.png";
import UCSDAkpsiPreview from "./ProjectPreviews/UCSDAkpsiPreview.png";

export type ProjectItem = {
  src: StaticImageData;
  alt: string;
  title: string;
  description: string;
  why?: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
};

export const projects: ProjectItem[] = [
  {
    src: PantryPilotPreview,
    alt: "PantryPilot",
    title: "Pantry Pilot",
    description:
      "An AI recipe generator that transforms your ingredients into complete recipes with step-by-step instructions, all powered by a modern React and Firebase stack.",
    why:
      "I grew up with a pantry full of ingredients, but I always struggled to figure out what quick snacks I could make. I created Pantry Pilot to show you easy recipes using only the ingredients you already have at home.",
    tags: [
      "React",
      "TypeScript",
      "Firebase",
      "OpenAI",
      "REST APIs",
      "Google Cloud Platform",
      "Serverless Functions",
      "CI/CD",
    ],
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
];


