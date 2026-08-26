"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { transitions } from "@/lib/motion";

export default function Template({ children }: { children: ReactNode }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      transition={shouldReduceMotion ? { duration: 0 } : transitions.smooth}
    >
      {children}
    </motion.div>
  );
}
