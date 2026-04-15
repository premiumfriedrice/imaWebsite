import RevealOnScroll from "./RevealOnScroll";
import AppleIcon from "./AppleIcon";

export default function CTA() {
  return (
    <section id="download" className="relative z-10 text-center" style={{ padding: "6rem 0 5rem" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 20px" }}>
        <RevealOnScroll>
          <div style={{ maxWidth: 540, margin: "0 auto" }}>
            <p
              className="bg-clip-text text-transparent"
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "clamp(2.25rem, 4.5vw, 3.25rem)",
                fontStyle: "italic",
                lineHeight: 1.15,
                marginBottom: "1.25rem",
                backgroundImage: "linear-gradient(135deg, #30D158, #63E6E2)",
              }}
            >
              What can I do today?
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "1.1rem",
                lineHeight: 1.75,
                fontWeight: 300,
                marginBottom: "2rem",
              }}
            >
              Download ima and start answering that question every morning. Free,
              private, and built to last.
            </p>
            <a
              href="https://apps.apple.com/us/app/ima-habit-and-task-tracker/id6762107334"
              className="inline-flex items-center rounded-full hover:-translate-y-px transition-all"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "14px 28px",
                gap: "8px",
                textDecoration: "none",
                color: "#000",
                backgroundImage: "linear-gradient(135deg, #30D158, #63E6E2)",
                boxShadow: "0 0 30px rgba(48, 209, 88, 0.15)",
              }}
            >
              <AppleIcon />
              Download on the App Store
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
