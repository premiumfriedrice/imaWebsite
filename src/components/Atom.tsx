export default function Atom({ size = 200 }: { size?: number }) {
  const nucleusSize = size * 0.35;
  const electronSize = size * 0.055;
  const orbitRadius = size * 0.32;
  const electronCount = 7;

  const electrons = Array.from({ length: electronCount }, (_, i) => {
    const angle = (i * 360) / electronCount - 90;
    const rad = (angle * Math.PI) / 180;
    const x = size / 2 + orbitRadius * Math.cos(rad);
    const y = size / 2 + orbitRadius * Math.sin(rad);
    return { x, y };
  });

  return (
    <div style={{ position: "relative", width: size, height: size }}>
      {/* Nucleus glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: nucleusSize * 1.8,
          height: nucleusSize * 1.8,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(48, 209, 88, 0.2), transparent 70%)",
        }}
      />

      {/* Nucleus */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: nucleusSize,
          height: nucleusSize,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #30D158, #63E6E2)",
          boxShadow: "0 0 40px rgba(48, 209, 88, 0.3), 0 0 80px rgba(48, 209, 88, 0.1)",
        }}
      />

      {/* Electrons */}
      {electrons.map((pos, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: pos.x - electronSize / 2,
            top: pos.y - electronSize / 2,
            width: electronSize,
            height: electronSize,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #30D158, #63E6E2)",
            boxShadow: "0 0 8px rgba(48, 209, 88, 0.4)",
          }}
        />
      ))}
    </div>
  );
}
