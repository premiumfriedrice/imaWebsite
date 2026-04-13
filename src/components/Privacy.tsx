import RevealOnScroll from "./RevealOnScroll";

const points = [
  "No servers, no cloud sync, no accounts. Everything lives on your device.",
  "Zero third-party analytics or tracking services.",
  "No data ever collected, transmitted, or shared with anyone.",
  "Your habits, tasks, and progress are yours alone.",
];

export default function Privacy() {
  return (
    <section id="privacy" className="relative z-10" style={{ padding: "6rem 0" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 20px" }}>
        <RevealOnScroll className="text-center">
          <span
            style={{
              display: "block",
              fontSize: "0.8rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
              marginBottom: "0.75rem",
            }}
          >
            Privacy First
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              fontWeight: 500,
              lineHeight: 1.15,
              letterSpacing: "-0.015em",
              marginBottom: "1rem",
            }}
          >
            Your data stays
            <br />
            with you. Period.
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.5)",
              maxWidth: 480,
              margin: "0 auto",
              lineHeight: 1.75,
              fontWeight: 300,
              marginBottom: "2.5rem",
            }}
          >
            ima was built with a simple principle: your personal growth data
            belongs to no one but you.
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              maxWidth: 520,
              margin: "0 auto",
            }}
          >
            {points.map((point) => (
              <li
                key={point}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "1rem",
                  fontWeight: 300,
                  lineHeight: 1.6,
                }}
              >
                <span
                  className="shrink-0 flex items-center justify-center"
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    fontSize: "0.85rem",
                    color: "rgba(48, 209, 88, 0.8)",
                    background: "rgba(48, 209, 88, 0.08)",
                    border: "1px solid rgba(48, 209, 88, 0.15)",
                    marginTop: 1,
                  }}
                >
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </div>
    </section>
  );
}
