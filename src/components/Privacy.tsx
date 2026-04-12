import RevealOnScroll from "./RevealOnScroll";

const points = [
  "No servers, no cloud sync, no accounts. Everything lives on your device.",
  "Zero third-party analytics or tracking services.",
  "No data ever collected, transmitted, or shared with anyone.",
  "Your habits, tasks, and progress are yours alone.",
];

export default function Privacy() {
  return (
    <section id="privacy" className="relative z-1 py-32">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* Text */}
          <RevealOnScroll>
            <span className="font-[var(--font-display)] text-[0.7rem] font-bold tracking-[0.15em] uppercase text-accent-green mb-4 block">
              Privacy First
            </span>
            <h2 className="font-[var(--font-display)] text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-tight tracking-tight mb-5">
              Your data stays
              <br />
              with you. Period.
            </h2>
            <p className="text-base text-text-secondary max-w-[500px] leading-relaxed font-light mb-8">
              ima was built with a simple principle: your personal growth data
              belongs to no one but you.
            </p>

            <ul className="flex flex-col gap-5">
              {points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-4 text-text-secondary text-[0.95rem] font-light leading-relaxed"
                >
                  <span
                    className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[0.7rem] text-accent-green mt-0.5"
                    style={{
                      background: "rgba(52, 211, 153, 0.1)",
                      border: "1px solid rgba(52, 211, 153, 0.2)",
                    }}
                  >
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </RevealOnScroll>

          {/* Shield visual */}
          <RevealOnScroll delay={0.2} className="flex justify-center md:order-last max-md:-order-1">
            <div className="relative w-[220px] h-[260px]">
              <div
                className="w-full h-full flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(52, 211, 153, 0.08), rgba(52, 211, 153, 0.02))",
                  border: "1px solid rgba(52, 211, 153, 0.15)",
                  borderRadius: "50% 50% 50% 50% / 30% 30% 70% 70%",
                }}
              >
                <span className="text-6xl opacity-80">🛡</span>
              </div>
              <div
                className="absolute"
                style={{
                  inset: -20,
                  border: "1px solid rgba(52, 211, 153, 0.08)",
                  borderRadius: "50% 50% 50% 50% / 30% 30% 70% 70%",
                  animation: "shield-pulse 3s ease-in-out infinite",
                }}
              />
              <div
                className="absolute"
                style={{
                  inset: -40,
                  border: "1px solid rgba(52, 211, 153, 0.08)",
                  borderRadius: "50% 50% 50% 50% / 30% 30% 70% 70%",
                  animation: "shield-pulse 3s ease-in-out infinite 1s",
                }}
              />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
