"use client";

import { useEffect, useState } from "react";
import AppleIcon from "./AppleIcon";
import Atom from "./Atom";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl border-b transition-colors duration-300"
      style={{
        padding: "16px 2rem",
        borderColor: "rgba(255,255,255,0.15)",
        background: scrolled
          ? "rgba(20, 20, 23, 0.9)"
          : "rgba(20, 20, 23, 0.6)",
      }}
    >
      <div
        className="flex items-center justify-between"
        style={{ maxWidth: 1080, margin: "0 auto", position: "relative" }}
      >
        <a href="#" className="flex items-center" style={{ gap: 10, textDecoration: "none" }}>
          <Atom size={28} />
          <span
            className="bg-clip-text text-transparent"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.15rem",
              fontWeight: 600,
              backgroundImage: "linear-gradient(135deg, #30D158, #63E6E2)",
            }}
          >
            ima
          </span>
        </a>

        <ul
          className="hidden md:flex items-center list-none"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            gap: "2rem",
          }}
        >
          {[
            { label: "Features", href: "#features" },
            { label: "How It Works", href: "#system" },
            { label: "Privacy", href: "#privacy" },
          ].map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="transition-colors"
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 300,
                  letterSpacing: "0.03em",
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://apps.apple.com/us/app/ima-habit-and-task-tracker/id6762107334"
          className="inline-flex items-center rounded-full hover:-translate-y-px transition-all"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "8px 16px",
            gap: "6px",
            textDecoration: "none",
            color: "#000",
            backgroundImage: "linear-gradient(135deg, #30D158, #63E6E2)",
          }}
        >
          <AppleIcon />
          App Store
        </a>
      </div>
    </nav>
  );
}
