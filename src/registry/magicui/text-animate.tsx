"use client";

import { motion, useReducedMotion } from "framer-motion";

export function TextAnimate({
  children,
  animation = "blurInUp",
  by = "character",
  once = true,
}: {
  children: string;
  animation?: "blurInUp";
  by?: "character" | "word";
  once?: boolean;
}) {
  const shouldReduceMotion = useReducedMotion();
  const segments = by === "character" ? Array.from(children) : children.split(/(\s+)/);

  return (
    <motion.span
      initial={false}
      whileInView="visible"
      viewport={{ once }}
      aria-label={children}
      className="inline-block min-h-[1.15em]"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: shouldReduceMotion ? 0 : 0.018,
          },
        },
      }}
    >
      {segments.map((segment, index) => (
        <motion.span
          key={`${segment}-${index}`}
          aria-hidden="true"
          className="inline-block"
          variants={
            shouldReduceMotion
              ? { hidden: {}, visible: {} }
              : {
                  hidden: animation === "blurInUp" ? { opacity: 0, y: 12, filter: "blur(8px)" } : {},
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.45, ease: [0.23, 1, 0.32, 1] },
                  },
                }
          }
        >
          {segment.trim() === "" ? segment.replace(/\s/g, "\u00a0") : segment}
        </motion.span>
      ))}
    </motion.span>
  );
}
