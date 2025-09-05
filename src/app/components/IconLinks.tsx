"use client";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function IconLinks() {
  return (
    <div className="flex justify-start items-center gap-6 mt-5">
      <a
        target="_blank"
        href="https://www.linkedin.com/in/yathinmrudul"
        className="text-accent-charcoal hover:text-accent-greyDark hover:scale-115 transition-all duration-250 ease-out"
      >
        <FaLinkedin className="text-4xl" />
      </a>
      <a
        target="_blank"
        href="https://github.com/yathinm"
        className="text-accent-charcoal hover:text-accent-greyDark hover:scale-115 transition-all duration-250 ease-out"
      >
        <FaGithub className="text-4xl" />
      </a>
      <a
        href="mailto:yathinm@gmail.com"
        aria-label="Email"
        className="text-accent-charcoal hover:text-accent-greyDark hover:scale-115 transition-all duration-250 ease-out"
      >
        <MdEmail className="text-4xl" />
      </a>
    </div>
  );
}


