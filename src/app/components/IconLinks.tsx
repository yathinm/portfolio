"use client";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function IconLinks() {
  return (
    <div className="flex justify-start items-center gap-6 mt-5">
      <a
        target="_blank"
        href="https://www.linkedin.com/in/yathinmrudul"
        className="hover:scale-115 transition-all duration-250 ease-out"
        style={{ color: '#3f5a36' }}
      >
        <FaLinkedin className="text-4xl" />
      </a>
      <a
        target="_blank"
        href="https://github.com/yathinm"
        className="hover:scale-115 transition-all duration-250 ease-out"
        style={{ color: '#3f5a36' }}
      >
        <FaGithub className="text-4xl" />
      </a>
      <a
        href="mailto:yathinm@gmail.com"
        aria-label="Email"
        className="hover:scale-115 transition-all duration-250 ease-out"
        style={{ color: '#3f5a36' }}
      >
        <MdEmail className="text-4xl" />
      </a>
    </div>
  );
}


