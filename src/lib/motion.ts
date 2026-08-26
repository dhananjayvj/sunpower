import type { Variants } from "framer-motion";

export const motionEase = [0.23, 1, 0.32, 1] as const;

export const transitions = {
  smooth: { duration: 0.45, ease: motionEase },
  fast: { duration: 0.2, ease: motionEase },
  spring: { type: "spring", stiffness: 260, damping: 24, mass: 0.9 },
  springSoft: { type: "spring", stiffness: 180, damping: 20, mass: 1 },
} as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export function revealViewport(margin = "-120px") {
  return { once: true, margin };
}
