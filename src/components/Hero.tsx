import AppleIcon from "./AppleIcon";
import Atom from "./Atom";

export default function Hero() {
  return (
    <section className="relative z-1 min-h-screen flex items-center justify-center pt-32 pb-24 px-8 text-center">
      <div className="max-w-[800px]">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 pl-2 pr-4 py-1.5 rounded-full text-xs text-text-secondary tracking-wide mb-10"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <span
            className="w-2 h-2 rounded-full bg-accent-green"
            style={{
              boxShadow: "0 0 8px #34d399",
              animation: "pulse-dot 2s ease-in-out infinite",
            }}
          />
          Available on iOS
        </div>

        {/* Question */}
        <p
          className="font-[var(--font-accent)] text-base md:text-lg italic text-accent-mint tracking-wide mb-5"
          style={{ opacity: 0, animation: "fadeUp 0.8s ease forwards 0.2s" }}
        >
          What can I do today?
        </p>

        {/* Headline */}
        <h1
          className="font-[var(--font-display)] text-[clamp(3rem,7vw,5.5rem)] font-extrabold leading-none tracking-tighter mb-7"
          style={{ opacity: 0, animation: "fadeUp 0.8s ease forwards 0.4s" }}
        >
          Habits &amp; tasks.
          <br />
          <span className="bg-gradient-to-br from-accent-green to-accent-mint bg-clip-text text-transparent">
            One clear answer.
          </span>
        </h1>

        {/* Description */}
        <p
          className="text-base md:text-lg text-text-secondary max-w-[520px] mx-auto mb-12 leading-relaxed font-light"
          style={{ opacity: 0, animation: "fadeUp 0.8s ease forwards 0.6s" }}
        >
          ima unifies habit tracking and task management into one focused,
          beautifully simple system. No accounts. No cloud. Just you and your
          progress.
        </p>

        {/* Actions */}
        <div
          className="flex items-center justify-center gap-6"
          style={{ opacity: 0, animation: "fadeUp 0.8s ease forwards 0.8s" }}
        >
          <a
            href="#download"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-br from-accent-green to-accent-mint text-deep font-[var(--font-display)] text-xs font-bold tracking-widest uppercase rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(52,211,153,0.25)] transition-all duration-250"
          >
            <AppleIcon />
            Download Free
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-text-secondary text-sm rounded-full border border-border-light hover:text-text-primary hover:border-white/25 transition-all duration-250"
          >
            Learn more &darr;
          </a>
        </div>

        {/* Atom visual */}
        <div
          className="mt-20 flex justify-center"
          style={{ opacity: 0, animation: "fadeUp 1s ease forwards 1s" }}
        >
          <Atom />
        </div>
      </div>
    </section>
  );
}
