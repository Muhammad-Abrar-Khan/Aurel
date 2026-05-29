"use client";

interface LuxuryDividerProps {
  label?: string;
  className?: string;
  gold?: boolean;
}

export const LuxuryDivider = ({ label, className = "", gold = true }: LuxuryDividerProps) => {
  if (label) {
    return (
      <div className={`flex items-center gap-6 ${className}`}>
        <div className={`flex-1 h-px ${gold ? "gold-thread" : "bg-outline-variant/30"}`} />
        <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-outline whitespace-nowrap">
          {label}
        </span>
        <div className={`flex-1 h-px ${gold ? "gold-thread" : "bg-outline-variant/30"}`} />
      </div>
    );
  }

  return (
    <div
      className={`w-full h-px ${gold ? "gold-thread" : "bg-outline-variant/20"} ${className}`}
    />
  );
};
