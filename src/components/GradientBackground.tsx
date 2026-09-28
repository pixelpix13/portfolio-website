/** Minimal dark background with a single warm radial glow.
 *  Replaces the old blob-animation approach — award-site style. */
export function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-20 bg-[#0a0a0a]">
      {/* Soft warm radial at the very top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 90% 55% at 50% -5%, rgba(249,115,22,0.07) 0%, transparent 70%)',
        }}
      />
      {/* Subtle bottom edge accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(249,115,22,0.15) 50%, transparent 100%)',
        }}
      />
    </div>
  );
}
