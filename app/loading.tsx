"use client";

import { motion } from "motion/react";

export default function Loading() {
  const letters = Array.from("Aurel Leather");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background text-on-surface relative overflow-hidden">
      {/* Subtle luxury ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_50%,_rgba(201,169,110,0.04),_transparent)] pointer-events-none" />

      {/* Gold brand Monogram Seal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-16 h-16 border border-primary/45 rounded flex items-center justify-center bg-surface relative shadow-[0_12px_40px_rgba(38,33,26,0.06)] mb-8"
      >
        <span className="font-display italic text-2xl text-primary leading-none">A</span>
        <div className="absolute inset-[3px] border border-primary/10 rounded-sm pointer-events-none" />
      </motion.div>

      {/* Letter by letter serif title */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex items-center gap-1.5 select-none"
      >
        {letters.map((char, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className={`font-display italic text-3xl md:text-4xl text-primary tracking-[0.08em] ${
              char === " " ? "w-4" : ""
            }`}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>

      {/* Sub-tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.2, duration: 1.0 }}
        className="font-mono text-[9px] tracking-[0.35em] uppercase text-outline mt-3"
      >
        Karachi &bull; Pakistan
      </motion.p>

      {/* Tiny gold progress line */}
      <div className="w-48 h-0.5 bg-primary/15 mt-10 relative overflow-hidden rounded-full">
        <motion.div
          initial={{ left: "-100%" }}
          animate={{ left: "100%" }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent"
        />
      </div>
    </div>
  );
}
