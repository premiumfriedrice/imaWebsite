export default function Ambient() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div
        className="absolute rounded-full opacity-30"
        style={{
          width: 600,
          height: 600,
          background:
            "radial-gradient(circle, rgba(48, 209, 88, 0.1), transparent 70%)",
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
            "radial-gradient(circle, rgba(99, 230, 226, 0.06), transparent 70%)",
          bottom: "10%",
          left: -150,
          filter: "blur(120px)",
          animation: "drift2 25s ease-in-out infinite",
        }}
      />
    </div>
  );
}
