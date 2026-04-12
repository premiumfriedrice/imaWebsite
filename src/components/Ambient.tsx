export default function Ambient() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div
        className="absolute rounded-full opacity-30"
        style={{
          width: 600,
          height: 600,
          background:
            "radial-gradient(circle, rgba(52, 211, 153, 0.12), transparent 70%)",
          top: -200,
          right: -100,
          filter: "blur(120px)",
          animation: "drift1 20s ease-in-out infinite",
        }}
      />
      <div
        className="absolute rounded-full opacity-30"
        style={{
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(110, 231, 183, 0.08), transparent 70%)",
          bottom: "10%",
          left: -150,
          filter: "blur(120px)",
          animation: "drift2 25s ease-in-out infinite",
        }}
      />
      <div
        className="absolute rounded-full opacity-30"
        style={{
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(52, 211, 153, 0.06), transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          filter: "blur(120px)",
          animation: "drift3 30s ease-in-out infinite",
        }}
      />
    </div>
  );
}
