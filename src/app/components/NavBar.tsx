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
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav
      className="pointer-events-auto"
      style={{ position: "absolute", top: 24, right: "clamp(12px, 4vw, 32px)", zIndex: 10 }}
    >
      <ul className="flex items-center gap-4 sm:gap-8">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className="animated-title title-strong transition-colors duration-200"
                style={{
                  opacity: isActive ? 1 : 0.85,
                  fontSize: "clamp(1rem, 3vw, 1.8rem)",
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
