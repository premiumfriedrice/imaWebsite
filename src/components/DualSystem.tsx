import RevealOnScroll from "./RevealOnScroll";

const habitTags = ["Daily / Weekly / Monthly", "Streaks", "Completion Heatmap", "80% Target Rate"];
const taskTags = ["High / Medium / Low", "Subtasks", "Due Dates", "Auto-Prioritize"];

export default function DualSystem() {
  return (
    <section id="system" className="relative z-1 pb-32 pt-8">
      <div className="max-w-[1200px] mx-auto px-8">
        <RevealOnScroll className="text-center mb-16">
          <span className="font-[var(--font-display)] text-[0.7rem] font-bold tracking-[0.15em] uppercase text-accent-green mb-4 block">
            The System
          </span>
          <h2 className="font-[var(--font-display)] text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-tight tracking-tight mb-5">
            Two engines.
            <br />
            One daily answer.
          </h2>
          <p className="text-base text-text-secondary max-w-[500px] mx-auto leading-relaxed font-light">
            ima asks &ldquo;What can I do today?&rdquo; and fills your day with
            exactly what matters.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Habits card */}
          <RevealOnScroll>
            <div
              className="rounded-3xl p-12 border border-border-subtle"
              style={{
                background:
                  "linear-gradient(160deg, rgba(52, 211, 153, 0.06), rgba(10, 12, 20, 0.9))",
              }}
            >
              <span className="font-[var(--font-display)] text-[0.65rem] font-bold tracking-[0.15em] uppercase text-accent-green block mb-4">
                Habits
              </span>
              <h3 className="font-[var(--font-display)] text-[1.75rem] font-extrabold tracking-tight mb-4">
                Build momentum
                <br />
                that compounds
              </h3>
              <p className="text-text-secondary text-[0.95rem] leading-relaxed font-light max-w-[380px] mb-8">
                Track daily, weekly, and monthly habits. Perpetual habits build
                streaks. Challenges push you toward concrete goals. The atom
                tracks your orbit.
              </p>
              <div className="flex flex-wrap gap-2">
                {habitTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide text-accent-mint"
                    style={{
                      background: "rgba(52, 211, 153, 0.1)",
                      border: "1px solid rgba(52, 211, 153, 0.2)",
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
              className="rounded-3xl p-12 border border-border-subtle"
              style={{
                background:
                  "linear-gradient(160deg, rgba(96, 165, 250, 0.06), rgba(10, 12, 20, 0.9))",
              }}
            >
              <span className="font-[var(--font-display)] text-[0.65rem] font-bold tracking-[0.15em] uppercase text-accent-blue block mb-4">
                Tasks
              </span>
              <h3 className="font-[var(--font-display)] text-[1.75rem] font-extrabold tracking-tight mb-4">
                Crush what&apos;s
                <br />
                in front of you
              </h3>
              <p className="text-text-secondary text-[0.95rem] leading-relaxed font-light max-w-[380px] mb-8">
                Prioritize by urgency. Break big work into subtasks. Overdue
                items surface automatically into your &ldquo;Must Do&rdquo; view
                so nothing slips.
              </p>
              <div className="flex flex-wrap gap-2">
                {taskTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide text-accent-blue-light"
                    style={{
                      background: "rgba(96, 165, 250, 0.1)",
                      border: "1px solid rgba(96, 165, 250, 0.2)",
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
