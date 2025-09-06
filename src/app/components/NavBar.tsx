"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
  { name: "Music", href: "/music" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-6 right-8 z-50">
      <ul className="flex items-center gap-8">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className="animated-title title-strong transition-colors duration-200"
                style={{
                  opacity: isActive ? 1 : 0.85,
                  fontSize: "clamp(.5rem, 1.5vw, 1.8rem)",
                }}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}


