export default function Footer() {
  return (
    <footer
      className="relative z-10"
      style={{
        padding: "2.5rem 20px",
        borderTop: "1px solid rgba(255,255,255,0.15)",
      }}
    >
      <div
        className="flex flex-col md:flex-row items-center justify-between text-center md:text-left"
        style={{ maxWidth: 1080, margin: "0 auto", gap: "1.25rem" }}
      >
        <span
          className="bg-clip-text text-transparent"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.1rem",
            fontWeight: 600,
            backgroundImage: "linear-gradient(135deg, #30D158, #63E6E2)",
          }}
        >
          ima
        </span>
        <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.9rem", fontWeight: 300 }}>
          &copy; 2026 ima. All rights reserved.
        </span>
        <ul className="flex list-none" style={{ gap: "1.5rem" }}>
          {[
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms", href: "#" },
            { label: "Contact", href: "mailto:sudofriedrice@gmail.com" },
          ].map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                style={{
                  color: "rgba(255,255,255,0.25)",
                  fontSize: "0.9rem",
                  fontWeight: 300,
                  textDecoration: "none",
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
