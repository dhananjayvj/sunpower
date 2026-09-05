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
  by?: "character";
  once?: boolean;
}) {
  const shouldReduceMotion = useReducedMotion();
  const characters = by === "character" ? Array.from(children) : [children];

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      aria-label={children}
      className="inline"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: shouldReduceMotion ? 0 : 0.018,
          },
        },
      }}
    >
      {characters.map((character, index) => (
        <motion.span
          key={`${character}-${index}`}
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
          {character === " " ? "\u00a0" : character}
        </motion.span>
      ))}
    </motion.span>
  );
}
