import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support — ima",
  description: "Get help with ima. Contact us, read our privacy policy, or review the terms and conditions.",
};

export default function Support() {
  return (
    <div
      className="relative z-10"
      style={{ minHeight: "100vh", padding: "7rem 2rem 5rem" }}
    >
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center transition-colors"
          style={{
            fontSize: "1rem",
            fontWeight: 300,
            marginBottom: "3rem",
            display: "inline-flex",
            gap: "0.5rem",
            textDecoration: "none",
            color: "rgba(255,255,255,0.5)",
          }}
        >
          &larr; Back
        </Link>

        {/* Header */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "2.5rem",
            fontWeight: 500,
            letterSpacing: "-0.02em",
            marginBottom: "1rem",
          }}
        >
          Support
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.5)",
            fontWeight: 300,
            lineHeight: 1.7,
            marginBottom: "3rem",
          }}
        >
          Need help with ima? Find what you need below.
        </p>

        {/* Contact */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <a
            href="mailto:sudofriedrice@gmail.com"
            style={{
              display: "block",
              borderRadius: 24,
              padding: "24px",
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(20px)",
              textDecoration: "none",
              transition: "background 0.3s, border-color 0.3s",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.2rem",
                fontWeight: 500,
                marginBottom: "0.5rem",
                color: "#fff",
              }}
            >
              Contact Us
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", fontWeight: 300 }}>
              sudofriedrice@gmail.com
            </p>
          </a>

          <Link
            href="/privacy-policy"
            style={{
              display: "block",
              borderRadius: 24,
              padding: "24px",
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(20px)",
              textDecoration: "none",
              transition: "background 0.3s, border-color 0.3s",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.2rem",
                fontWeight: 500,
                marginBottom: "0.5rem",
                color: "#fff",
              }}
            >
              Privacy Policy
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", fontWeight: 300 }}>
              How ima handles your data.
            </p>
          </Link>

          <Link
            href="/terms"
            style={{
              display: "block",
              borderRadius: 24,
              padding: "24px",
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(20px)",
              textDecoration: "none",
              transition: "background 0.3s, border-color 0.3s",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.2rem",
                fontWeight: 500,
                marginBottom: "0.5rem",
                color: "#fff",
              }}
            >
              Terms &amp; Conditions
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", fontWeight: 300 }}>
              Terms of use for ima.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
