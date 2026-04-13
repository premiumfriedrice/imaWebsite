import RevealOnScroll from "./RevealOnScroll";

const habitTags = ["Daily / Weekly / Monthly", "Streaks", "Completion Heatmap"];
const taskTags = ["High / Medium / Low", "Subtasks", "Due Dates", "Auto-Prioritize"];

export default function DualSystem() {
  return (
    <section id="system" className="relative z-10" style={{ padding: "6rem 0" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 20px" }}>
        <RevealOnScroll className="text-center" style={{ marginBottom: "3.5rem" }}>
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
            The System
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
            Two engines.
            <br />
            One daily answer.
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
            ima asks &ldquo;What can I do today?&rdquo; and fills your day with
            exactly what matters.
          </p>
        </RevealOnScroll>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1rem",
          }}
        >
          {/* Habits card */}
          <RevealOnScroll>
            <div
              style={{
                borderRadius: 24,
                padding: 24,
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                boxShadow: "0 0 5px rgba(255,255,255,0.1)",
                height: "100%",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(48, 209, 88, 0.7)",
                  marginBottom: "1.25rem",
                }}
              >
                Habits
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.3,
                  marginBottom: "0.75rem",
                }}
              >
                Build momentum
                <br />
                that compounds
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  fontWeight: 300,
                  maxWidth: 400,
                  marginBottom: "1.75rem",
                }}
              >
                Track daily, weekly, and monthly habits. Perpetual habits build
                streaks. Challenges push you toward concrete goals.
              </p>
              <div className="flex flex-wrap" style={{ gap: "0.5rem" }}>
                {habitTags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "5px 14px",
                      borderRadius: 100,
                      fontSize: "0.8rem",
                      fontWeight: 300,
                      letterSpacing: "0.02em",
                      color: "rgba(48, 209, 88, 0.7)",
                      background: "rgba(48, 209, 88, 0.06)",
                      border: "1px solid rgba(48, 209, 88, 0.15)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Tasks card */}
          <RevealOnScroll delay={0.1}>
            <div
              style={{
                borderRadius: 24,
                padding: 24,
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                boxShadow: "0 0 5px rgba(255,255,255,0.1)",
                height: "100%",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(10, 132, 255, 0.7)",
                  marginBottom: "1.25rem",
                }}
              >
                Tasks
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.3,
                  marginBottom: "0.75rem",
                }}
              >
                Crush what&apos;s
                <br />
                in front of you
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  fontWeight: 300,
                  maxWidth: 400,
                  marginBottom: "1.75rem",
                }}
              >
                Prioritize by urgency. Break big work into subtasks. Overdue
                items surface automatically so nothing slips.
              </p>
              <div className="flex flex-wrap" style={{ gap: "0.5rem" }}>
                {taskTags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "5px 14px",
                      borderRadius: 100,
                      fontSize: "0.8rem",
                      fontWeight: 300,
                      letterSpacing: "0.02em",
                      color: "rgba(10, 132, 255, 0.7)",
                      background: "rgba(10, 132, 255, 0.06)",
                      border: "1px solid rgba(10, 132, 255, 0.15)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
