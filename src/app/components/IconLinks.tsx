"use client";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail, MdDescription } from "react-icons/md";

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
      <a
        href="/api/resume"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-115 transition-all duration-250 ease-out"
        style={{ color: '#3f5a36' }}
        aria-label="Resume"
        id="resume-icon"
        title="Open resume"
        onClick={() => {
          try {
            const temp = document.createElement('a');
            temp.href = '/api/resume?download=1';
            temp.setAttribute('download', 'Yathin_Mrudul_Resume.pdf');
            temp.style.display = 'none';
            document.body.appendChild(temp);
            temp.click();
            document.body.removeChild(temp);
          } catch (err) {
            // best-effort download; ignore errors to still open in new tab
          }
        }}
      >
        <MdDescription className="text-4xl" />
      </a>
    </div>
  );
}


