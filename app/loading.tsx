export default function Loading() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background text-on-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_50%,_rgba(201,169,110,0.04),_transparent)] pointer-events-none" />
      <span className="font-display text-4xl tracking-[0.4em] text-primary animate-pulse">AUREL LEATHER</span>
      <div className="w-20 h-[1px] bg-primary mt-8" />
      <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-outline/50 mt-8">
        Premium Leather Manufacturing
      </p>
    </div>
  );
}
