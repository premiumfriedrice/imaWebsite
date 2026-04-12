export default function Atom() {
  const orbits = [
    { size: 120, duration: 8 },
    { size: 180, duration: 12, reverse: true },
    { size: 240, duration: 16 },
  ];

  return (
    <div className="relative w-[280px] h-[280px] md:w-[280px] md:h-[280px] max-md:w-[200px] max-md:h-[200px]">
      {/* Nucleus */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-accent-green to-accent-mint"
        style={{
          boxShadow:
            "0 0 40px rgba(52, 211, 153, 0.4), 0 0 80px rgba(52, 211, 153, 0.15)",
        }}
      />

      {/* Orbits */}
      {orbits.map((orbit, i) => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2 rounded-full border border-border-subtle"
          style={{
            width: orbit.size,
            height: orbit.size,
            animation: `spin-orbit ${orbit.duration}s linear infinite ${orbit.reverse ? "reverse" : ""}`,
          }}
        >
          <span
            className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent-mint"
            style={{ boxShadow: "0 0 12px rgba(110, 231, 183, 0.5)" }}
          />
        </div>
      ))}
    </div>
  );
}
