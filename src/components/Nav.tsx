"use client";

import { useEffect, useState } from "react";
import AppleIcon from "./AppleIcon";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-8 py-5 backdrop-blur-[20px] border-b border-border-subtle transition-colors duration-300"
      style={{
        background: scrolled
          ? "rgba(10, 12, 20, 0.9)"
          : "rgba(10, 12, 20, 0.7)",
      }}
    >
      <span className="font-[var(--font-display)] text-2xl font-extrabold tracking-tight bg-gradient-to-br from-accent-green to-accent-mint bg-clip-text text-transparent">
        ima
      </span>

      <ul className="hidden md:flex items-center gap-8 list-none">
        <li>
          <a
            href="#features"
            className="text-text-secondary text-sm tracking-wide hover:text-text-primary transition-colors duration-250"
          >
            Features
          </a>
        </li>
        <li>
          <a
            href="#system"
            className="text-text-secondary text-sm tracking-wide hover:text-text-primary transition-colors duration-250"
          >
            How It Works
          </a>
        </li>
        <li>
          <a
            href="#privacy"
            className="text-text-secondary text-sm tracking-wide hover:text-text-primary transition-colors duration-250"
          >
            Privacy
          </a>
        </li>
      </ul>

      <a
        href="#download"
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-br from-accent-green to-accent-mint text-deep font-[var(--font-display)] text-xs font-bold tracking-widest uppercase rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(52,211,153,0.25)] transition-all duration-250"
      >
        <AppleIcon />
        App Store
      </a>
    </nav>
  );
}
