"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, transitions } from "@/lib/motion";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={shouldReduceMotion ? undefined : fadeUp}
      transition={shouldReduceMotion ? { duration: 0 } : { ...transitions.smooth, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
