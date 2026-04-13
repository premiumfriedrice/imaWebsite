import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — ima",
  description: "ima privacy policy. Your data stays on your device.",
};

export default function PrivacyPolicy() {
  return (
    <div
      className="relative z-10"
      style={{ minHeight: "100vh", padding: "7rem 2rem 5rem" }}
    >
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center text-text-secondary hover:text-text-primary transition-colors"
          style={{
            fontSize: "0.85rem",
            fontWeight: 300,
            marginBottom: "3rem",
            display: "inline-flex",
            gap: "0.5rem",
            textDecoration: "none",
          }}
        >
          &larr; Back
        </Link>

        {/* Header */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "2rem",
            fontWeight: 500,
            letterSpacing: "-0.02em",
            marginBottom: "0.5rem",
          }}
        >
          Privacy Policy
        </h1>
        <p
          style={{
            fontSize: "0.85rem",
            color: "rgba(240, 240, 242, 0.35)",
            fontWeight: 300,
            marginBottom: "3rem",
          }}
        >
          Last updated: April 2026
        </p>

        {/* Body */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2.5rem",
          }}
        >
          <p style={bodyStyle}>
            ima is designed with your privacy in mind. Here&apos;s what you need
            to know:
          </p>

          <section>
            <h2 style={headingStyle}>Data Collection</h2>
            <p style={bodyStyle}>
              ima does not collect, transmit, or share any personal data. All
              information you enter — including habits, tasks, subtasks, profile
              name, tagline, and preferences — is stored entirely on your device.
            </p>
          </section>

          <section>
            <h2 style={headingStyle}>Data Storage</h2>
            <p style={bodyStyle}>
              All data is stored locally using Apple&apos;s SwiftData framework
              and UserDefaults. Your data never leaves your device. There are no
              servers, no cloud sync, and no accounts.
            </p>
          </section>

          <section>
            <h2 style={headingStyle}>Third-Party Services</h2>
            <p style={bodyStyle}>
              ima does not use any third-party analytics, advertising, or
              tracking services. There are no SDKs that collect data about your
              usage.
            </p>
          </section>

          <section>
            <h2 style={headingStyle}>Contact Information</h2>
            <p style={bodyStyle}>
              The optional profile name and tagline you enter are stored locally
              on your device and are never transmitted anywhere.
            </p>
          </section>

          <section>
            <h2 style={headingStyle}>Data Deletion</h2>
            <p style={bodyStyle}>
              You can delete all app data at any time by deleting the app from
              your device. Individual habits and tasks can be deleted from within
              the app.
            </p>
          </section>

          <section>
            <h2 style={headingStyle}>Changes to This Policy</h2>
            <p style={bodyStyle}>
              If this policy changes in a future update, you will be notified
              through the App Store update notes.
            </p>
          </section>

          <section>
            <h2 style={headingStyle}>Contact</h2>
            <p style={bodyStyle}>
              If you have questions about this privacy policy, contact us at{" "}
              <a
                href="mailto:sudofriedrice@gmail.com"
                style={{ color: "#34d399", textDecoration: "none" }}
              >
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
  fontSize: "0.75rem",
  fontWeight: 500,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "rgba(240, 240, 242, 0.4)",
  marginBottom: "0.75rem",
};

const bodyStyle: React.CSSProperties = {
  fontSize: "0.925rem",
  lineHeight: 1.8,
  fontWeight: 300,
  color: "rgba(240, 240, 242, 0.6)",
};
