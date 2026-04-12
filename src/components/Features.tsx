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
    <section id="features" className="relative z-1 py-32">
      <div className="max-w-[1200px] mx-auto px-8">
        <RevealOnScroll className="text-center mb-20">
          <span className="font-[var(--font-display)] text-[0.7rem] font-bold tracking-[0.15em] uppercase text-accent-green mb-4 block">
            Features
          </span>
          <h2 className="font-[var(--font-display)] text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-tight tracking-tight mb-5">
            Everything you need.
            <br />
            Nothing you don&apos;t.
          </h2>
          <p className="text-base text-text-secondary max-w-[500px] mx-auto leading-relaxed font-light">
            A focused toolkit for building better days, one habit and one task at
            a time.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <RevealOnScroll key={f.title} delay={(i % 3) * 0.1 + 0.1}>
              <div className="group relative overflow-hidden rounded-[20px] p-9 border border-border-subtle bg-card hover:bg-card-hover hover:border-border-light hover:-translate-y-0.5 transition-all duration-300">
                {/* Hover glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(52,211,153,0.15),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                <div
                  className="relative w-12 h-12 flex items-center justify-center rounded-[14px] mb-6 text-xl"
                  style={{
                    background: "rgba(52, 211, 153, 0.08)",
                    border: "1px solid rgba(52, 211, 153, 0.15)",
                  }}
                >
                  {f.icon}
                </div>
                <h3 className="relative font-[var(--font-display)] text-lg font-bold mb-3 tracking-tight">
                  {f.title}
                </h3>
                <p className="relative text-text-secondary text-sm leading-relaxed font-light">
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
