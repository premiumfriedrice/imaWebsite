import RevealOnScroll from "./RevealOnScroll";
import AppleIcon from "./AppleIcon";

export default function CTA() {
  return (
    <section id="download" className="relative z-1 pt-32 pb-24 text-center">
      <div className="max-w-[1200px] mx-auto px-8">
        <RevealOnScroll className="max-w-[600px] mx-auto">
          <p className="font-[var(--font-accent)] text-[clamp(2.5rem,5vw,4rem)] italic leading-tight mb-6 bg-gradient-to-br from-accent-green to-accent-mint bg-clip-text text-transparent">
            What can I do today?
          </p>
          <p className="text-text-secondary text-base leading-relaxed font-light mb-10">
            Download ima and start answering that question every morning. Free,
            private, and built to last.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-accent-green to-accent-mint text-deep font-[var(--font-display)] text-xs font-bold tracking-widest uppercase rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(52,211,153,0.25)] transition-all duration-250"
          >
            <AppleIcon />
            Download on the App Store
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
}
