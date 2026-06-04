"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Mouse coordinates motion values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring physics setup for lagging smooth outer ring follower
  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Completely disable on touch screens to prevent jank, but allow on small non-touch screens
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isTouchDevice) {
      setEnabled(false);
      return;
    }
    
    setEnabled(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Expand custom follower if hovering links, buttons, form fields, or cards
      const isInteractive = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.tagName === "INPUT" || 
        target.tagName === "TEXTAREA" || 
        target.tagName === "SELECT" || 
        target.closest("a") || 
        target.closest("button") || 
        target.closest(".group") || 
        target.classList.contains("cursor-pointer");

      setHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Lagging outer golden ring */}
      <motion.div
        className="absolute w-7 h-7 border border-primary/45 rounded-full flex items-center justify-center"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovered ? 46 : 28,
          height: hovered ? 46 : 28,
          backgroundColor: hovered ? "rgba(201, 169, 110, 0.08)" : "rgba(201, 169, 110, 0)",
          borderColor: hovered ? "rgba(201, 169, 110, 0.85)" : "rgba(201, 169, 110, 0.4)",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
      />

      {/* Instant center core dot */}
      <motion.div
        className="absolute w-1.5 h-1.5 bg-primary rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: hovered ? 1.6 : 1,
        }}
        transition={{ type: "tween", duration: 0.15 }}
      />
    </div>
  );
};
