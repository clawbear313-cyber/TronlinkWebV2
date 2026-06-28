// Ambient decorative orb — subtle animated glow circle
export default function Orb({
  size = 400,
  color = '#2e8fae',
  opacity = 0.06,
  className = '',
}: {
  size?: number;
  color?: string;
  opacity?: number;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        opacity,
        pointerEvents: 'none',
        userSelect: 'none',
      }}
    />
  );
}
