import RevealOnScroll from "./RevealOnScroll";

const stats = [
  { number: "100%", label: "Private — all data on-device" },
  { number: "0", label: "Accounts needed" },
  { number: "2", label: "Habit types to master" },
  { number: "∞", label: "Days to improve" },
];

export default function Stats() {
  return (
    <section
      className="relative z-10"
      style={{
        padding: "3.5rem 0",
        borderTop: "1px solid rgba(255,255,255,0.15)",
        borderBottom: "1px solid rgba(255,255,255,0.15)",
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 20px" }}>
        <div
          className="text-center"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2rem",
          }}
        >
          {stats.map((s, i) => (
            <RevealOnScroll key={s.label} delay={i * 0.1}>
              <div
                className="bg-clip-text text-transparent"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.25rem, 4vw, 3rem)",
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                  backgroundImage: "linear-gradient(135deg, #30D158, #63E6E2)",
                }}
              >
                {s.number}
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: "0.95rem",
                  fontWeight: 300,
                  letterSpacing: "0.02em",
                }}
              >
                {s.label}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
