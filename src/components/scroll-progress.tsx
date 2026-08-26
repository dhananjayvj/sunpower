"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, shouldReduceMotion ? { damping: 100 } : { stiffness: 180, damping: 24, mass: 0.2 });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-[linear-gradient(90deg,_#ffd60a_0%,_#54b25e_45%,_#1c68f2_100%)]"
    />
  );
}
