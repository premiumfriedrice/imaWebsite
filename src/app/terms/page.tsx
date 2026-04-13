import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions — ima",
  description: "ima terms and conditions.",
};

export default function Terms() {
  return (
    <div
      className="relative z-10"
      style={{ minHeight: "100vh", padding: "7rem 2rem 5rem" }}
    >
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <Link
          href="/support"
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
          &larr; Support
        </Link>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "2rem",
            fontWeight: 500,
            letterSpacing: "-0.02em",
            marginBottom: "0.5rem",
          }}
        >
          Terms &amp; Conditions
        </h1>
        <p
          style={{
            fontSize: "0.95rem",
            color: "rgba(255,255,255,0.35)",
            fontWeight: 300,
            marginBottom: "3rem",
          }}
        >
          Last updated: April 2026
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          <p style={bodyStyle}>
            By using ima, you agree to the following terms:
          </p>

          <section>
            <h2 style={headingStyle}>Use of the App</h2>
            <p style={bodyStyle}>
              ima is a personal productivity app for tracking habits and tasks.
              You may use it for personal, non-commercial purposes.
            </p>
          </section>

          <section>
            <h2 style={headingStyle}>Your Data</h2>
            <p style={bodyStyle}>
              All data you create in ima is yours. It is stored locally on your
              device. We do not have access to your data and cannot recover it if
              lost.
            </p>
          </section>

          <section>
            <h2 style={headingStyle}>Disclaimer</h2>
            <p style={bodyStyle}>
              ima is provided &ldquo;as is&rdquo; without warranties of any
              kind. We are not responsible for any loss of data, missed habits,
              or incomplete tasks.
            </p>
          </section>

          <section>
            <h2 style={headingStyle}>Limitation of Liability</h2>
            <p style={bodyStyle}>
              To the maximum extent permitted by law, the developers of ima
              shall not be liable for any damages arising from the use or
              inability to use the app.
            </p>
          </section>

          <section>
            <h2 style={headingStyle}>App Store</h2>
            <p style={bodyStyle}>
              Your use of ima is also subject to Apple&apos;s Terms of Service
              and App Store guidelines.
            </p>
          </section>

          <section>
            <h2 style={headingStyle}>Changes</h2>
            <p style={bodyStyle}>
              We may update these terms from time to time. Continued use of the
              app after changes constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 style={headingStyle}>Contact</h2>
            <p style={bodyStyle}>
              Questions about these terms can be directed to{" "}
              <a href="mailto:sudofriedrice@gmail.com" style={{ color: "#30D158", textDecoration: "none" }}>
                sudofriedrice@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

const headingStyle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "0.8rem",
  fontWeight: 500,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.4)",
  marginBottom: "0.75rem",
};

const bodyStyle: React.CSSProperties = {
  fontSize: "1rem",
  lineHeight: 1.8,
  fontWeight: 300,
  color: "rgba(255,255,255,0.6)",
};
