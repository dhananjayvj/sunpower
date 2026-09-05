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
      className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-[linear-gradient(90deg,_#0b192c_0%,_#0284c7_55%,_#22c55e_100%)]"
    />
  );
}
