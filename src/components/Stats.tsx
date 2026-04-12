import RevealOnScroll from "./RevealOnScroll";

const stats = [
  { number: "100%", label: "Private — all data on-device" },
  { number: "0", label: "Accounts needed" },
  { number: "2", label: "Habit types to master" },
  { number: "∞", label: "Days to improve" },
];

export default function Stats() {
  return (
    <section className="relative z-1 py-16 border-t border-b border-border-subtle">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <RevealOnScroll key={s.label} delay={i * 0.1}>
              <div className="font-[var(--font-display)] text-[clamp(2.5rem,4vw,3.5rem)] font-extrabold tracking-tighter leading-none mb-2 bg-gradient-to-br from-accent-green to-accent-mint bg-clip-text text-transparent">
                {s.number}
              </div>
              <div className="text-text-secondary text-sm tracking-wide">
                {s.label}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
