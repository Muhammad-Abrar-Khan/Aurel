"use client";

import { motion, useInView, Transition, TargetAndTransition } from "motion/react";
import { useRef, ReactNode, Children } from "react";

type RevealVariant = "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scale";

interface AnimatedRevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  stagger?: boolean;
  staggerDelay?: number;
  className?: string;
  once?: boolean;
}

const variantMap: Record<RevealVariant, { hidden: TargetAndTransition; visible: TargetAndTransition }> = {
  fadeUp:    { hidden: { opacity: 0, y: 40 },  visible: { opacity: 1, y: 0 } },
  fadeIn:    { hidden: { opacity: 0 },          visible: { opacity: 1 } },
  slideLeft: { hidden: { opacity: 0, x: 50 },  visible: { opacity: 1, x: 0 } },
  slideRight:{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
  scale:     { hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1 } },
};

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export const AnimatedReveal = ({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.75,
  stagger = false,
  staggerDelay = 0.1,
  className = "",
  once = true,
}: AnimatedRevealProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-60px" });
  const { hidden, visible } = variantMap[variant];

  const transition: Transition = { duration, ease: EASE, delay };

  if (stagger) {
    const items = Children.toArray(children);
    return (
      <div ref={ref} className={className}>
        {items.map((child, i) => (
          <motion.div
            key={i}
            initial={hidden}
            animate={inView ? visible : hidden}
            transition={{ ...transition, delay: delay + i * staggerDelay }}
          >
            {child}
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={hidden}
      animate={inView ? visible : hidden}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};
