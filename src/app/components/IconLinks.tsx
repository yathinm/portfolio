"use client";

import { FaLinkedin, FaGithub, FaSpotify } from "react-icons/fa";
import { MdEmail, MdDescription } from "react-icons/md";

export default function IconLinks() {
  return (
    <div className="flex justify-start items-center gap-8 sm:gap-6 mt-5">
      <a
        target="_blank"
        href="https://www.linkedin.com/in/yathinmrudul"
        className="hover:scale-115 transition-all duration-250 ease-out"
        style={{ color: "#3f5a36" }}
      >
        <FaLinkedin className="text-5xl sm:text-4xl" />
      </a>
      <a
        target="_blank"
        href="https://github.com/yathinm"
        className="hover:scale-115 transition-all duration-250 ease-out"
        style={{ color: "#3f5a36" }}
      >
        <FaGithub className="text-5xl sm:text-4xl" />
      </a>
      <a
        href="mailto:yathinm@gmail.com"
        aria-label="Email"
        className="hover:scale-115 transition-all duration-250 ease-out"
        style={{ color: "#3f5a36" }}
      >
        <MdEmail className="text-5xl sm:text-4xl" />
      </a>
      <a
        href="/Yathin_Mrudul_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-115 transition-all duration-250 ease-out"
        style={{ color: "#3f5a36" }}
        aria-label="Resume"
        id="resume-icon"
        title="Open resume"
      >
        <MdDescription className="text-5xl sm:text-4xl" />
      </a>
      <a
        target="_blank"
        href="https://open.spotify.com/user/12ezk5ctw9w1nrb123un4lci3?si=367ed5647b54417c"
        className="hover:scale-115 transition-all duration-250 ease-out"
        style={{ color: "#3f5a36" }}
        aria-label="Spotify"
      >
        <FaSpotify className="text-5xl sm:text-4xl" />
      </a>
    </div>
  );
}
