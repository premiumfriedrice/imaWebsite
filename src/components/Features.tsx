import RevealOnScroll from "./RevealOnScroll";

const features = [
  {
    icon: "🔄",
    title: "Perpetual Habits",
    desc: "Ongoing habits with target completion rates. Build consistency over time and watch your streaks grow.",
  },
  {
    icon: "🏔",
    title: "Challenge Habits",
    desc: "Goal-based habits that require a set number of perfect cycles. Conquer challenges and level up.",
  },
  {
    icon: "✓",
    title: "Smart Tasks",
    desc: 'Prioritized tasks with due dates, subtasks, and intelligent sorting into "Must Do" and "Can Do" sections.',
  },
  {
    icon: "📊",
    title: "Rich Statistics",
    desc: "Comprehensive dashboard with completion rates, streaks, personality titles, and detailed breakdowns.",
  },
  {
    icon: "📅",
    title: "Week View",
    desc: "Swipeable weekly calendar to see your progress across days. Past, present, and future at a glance.",
  },
  {
    icon: "🎨",
    title: "Your Look",
    desc: "Custom emoji avatar, editable name and tagline, multiple dark themes. Make it yours.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative z-10" style={{ padding: "6rem 0" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 20px" }}>
        <RevealOnScroll className="text-center" style={{ marginBottom: "4rem" }}>
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
            Features
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
            Everything you need.
            <br />
            Nothing you don&apos;t.
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.5)",
              maxWidth: 460,
              margin: "0 auto",
              lineHeight: 1.75,
              fontWeight: 300,
            }}
          >
            A focused toolkit for building better days, one habit and one task at
            a time.
          </p>
        </RevealOnScroll>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
          }}
        >
          {features.map((f, i) => (
            <RevealOnScroll key={f.title} delay={(i % 3) * 0.1 + 0.1}>
              <div
                className="feature-card"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: 24,
                  padding: 20,
                  height: "100%",
                  border: "1px solid rgba(255,255,255,0.15)",
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  boxShadow: "0 0 5px rgba(255,255,255,0.1)",
                  transition: "background 0.3s, border-color 0.3s",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 14,
                    marginBottom: 16,
                    fontSize: "1.25rem",
                    background: "rgba(48, 209, 88, 0.06)",
                    border: "1px solid rgba(48, 209, 88, 0.1)",
                  }}
                >
                  {f.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.1rem",
                    fontWeight: 500,
                    letterSpacing: "-0.01em",
                    marginBottom: "0.5rem",
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "1rem",
                    lineHeight: 1.7,
                    fontWeight: 300,
                  }}
                >
                  {f.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
