export function BorderBeam({ duration = 8, size = 100 }: { duration?: number; size?: number }) {
  return (
    <span className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit]" aria-hidden="true">
      <span
        className="absolute animate-border-beam bg-[conic-gradient(from_0deg,transparent_0deg,rgba(2,132,199,0.9)_55deg,rgba(34,197,94,0.9)_110deg,transparent_160deg)]"
        style={{
          inset: `-${Math.max(1, Math.round(size / 100))}px`,
          animationDuration: `${duration}s`,
        }}
      />
      <span className="absolute inset-px rounded-[inherit] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,251,255,0.94))]" />
    </span>
  );
}
