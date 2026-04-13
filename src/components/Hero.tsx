import AppleIcon from "./AppleIcon";
import Atom from "./Atom";

export default function Hero() {
  return (
    <section
      className="relative z-10 flex items-center justify-center text-center"
      style={{ minHeight: "100vh", padding: "6rem 2rem 4rem" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Logo + Name */}
        <div
          className="flex items-center"
          style={{
            gap: 10,
            opacity: 0,
            animation: "fadeUp 0.8s ease forwards 0.1s",
          }}
        >
          <Atom size={72} />
          <span
            className="bg-clip-text text-transparent"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "3.5rem",
              fontWeight: 600,
              backgroundImage: "linear-gradient(135deg, #30D158, #63E6E2)",
            }}
          >
            ima
          </span>
        </div>

        {/* Question */}
        <h1
          style={{
            fontFamily: "var(--font-accent)",
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            fontStyle: "italic",
            fontWeight: 400,
            color: "rgba(255,255,255,0.85)",
            marginTop: "3rem",
            opacity: 0,
            animation: "fadeUp 0.8s ease forwards 0.3s",
          }}
        >
          What can I do today?
        </h1>

        {/* CTA */}
        <div style={{ marginTop: "2rem", opacity: 0, animation: "fadeUp 0.8s ease forwards 0.5s" }}>
          <a
            href="#download"
            className="inline-flex items-center rounded-full hover:-translate-y-px transition-all"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "14px 28px",
              gap: "8px",
              textDecoration: "none",
              color: "#000",
              backgroundImage: "linear-gradient(135deg, #30D158, #63E6E2)",
              boxShadow: "0 0 30px rgba(48, 209, 88, 0.15)",
            }}
          >
            <AppleIcon />
            Download on the App Store
          </a>
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: "1.25rem",
            color: "rgba(255,255,255,0.4)",
            fontWeight: 300,
            maxWidth: 480,
            lineHeight: 1.7,
            marginTop: "2rem",
            opacity: 0,
            animation: "fadeUp 0.8s ease forwards 0.7s",
          }}
        >
          Track your habits and tasks in one app. No accounts, no cloud, no subscriptions — everything stays on your device.
        </p>
      </div>
    </section>
  );
}
