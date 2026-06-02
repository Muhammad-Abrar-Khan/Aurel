"use client";

import { motion, Transition } from "motion/react";
import { ReactNode } from "react";

interface PremiumButtonProps {
  children: ReactNode;
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  icon?: ReactNode;
  className?: string;
  disabled?: boolean;
}

const sizeClasses: Record<string, string> = {
  sm: "px-7 py-3 text-[10px]",
  md: "px-10 py-4 text-[10px]",
  lg: "px-12 py-5 text-[11px]",
};

const variantClasses: Record<string, string> = {
  primary: "bg-primary text-on-primary border border-primary hover:bg-primary-light hover:shadow-[0_0_30px_rgba(201,169,110,0.25)] active:bg-primary-dark",
  ghost:   "bg-transparent text-primary border border-primary/40 hover:border-primary hover:bg-primary/5 hover:shadow-[0_0_20px_rgba(201,169,110,0.1)]",
  outline: "bg-transparent text-on-surface border border-white/10 hover:border-primary/40 hover:text-primary",
};

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const baseTransition: Transition = { duration: 0.2, ease: EASE };

export const PremiumButton = ({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  icon,
  className = "",
  disabled,
}: PremiumButtonProps) => {
  const base =
    "shimmer-btn relative inline-flex items-center justify-center gap-3 font-sans font-bold tracking-[0.2em] uppercase transition-all duration-300 rounded-none cursor-pointer select-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const classes = `${base} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        transition={baseTransition}
        className={classes}
      >
        {children}
        {icon && <span className="flex-shrink-0">{icon}</span>}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={baseTransition}
      className={classes}
    >
      {children}
      {icon && <span className="flex-shrink-0">{icon}</span>}
    </motion.button>
  );
};
