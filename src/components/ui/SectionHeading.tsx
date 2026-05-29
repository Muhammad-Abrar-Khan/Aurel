"use client";

import { motion, useInView } from "motion/react";
import { useRef, ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  titleSize?: "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
  showDivider?: boolean;
  className?: string;
  titleItalic?: boolean;
  light?: boolean;
}

const alignClasses = {
  left: "text-left items-start",
  center: "text-center items-center",
  right: "text-right items-end",
};

const titleSizeClasses = {
  xl:  "text-3xl md:text-4xl",
  "2xl": "text-4xl md:text-5xl",
  "3xl": "text-4xl md:text-5xl lg:text-6xl",
  "4xl": "text-5xl md:text-6xl lg:text-7xl",
  "5xl": "text-5xl md:text-7xl lg:text-8xl",
  "6xl": "text-6xl md:text-8xl lg:text-9xl",
};

export const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  titleSize = "2xl",
  showDivider = true,
  className = "",
  titleItalic = true,
  light = false,
}: SectionHeadingProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-5 ${alignClasses[align]} ${className}`}
    >
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-[10px] font-bold tracking-[0.4em] uppercase text-primary"
        >
          {eyebrow}
        </motion.p>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: eyebrow ? 0.08 : 0 }}
        className={`font-display leading-[1.08] tracking-tight whitespace-pre-line ${titleSizeClasses[titleSize]} ${titleItalic ? "italic" : ""} ${light ? "text-on-surface" : "text-on-surface"}`}
      >
        {title}
      </motion.h2>

      {showDivider && (
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={inView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          style={{ originX: align === "center" ? 0.5 : align === "left" ? 0 : 1 }}
          className="w-16 h-px gold-thread"
        />
      )}

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
          className="font-sans text-on-surface-variant text-base md:text-lg leading-relaxed max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
