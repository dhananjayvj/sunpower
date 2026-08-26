"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { transitions } from "@/lib/motion";

type NavItem = {
  href: string;
  label: string;
};

export function MobileNav({
  open,
  onToggle,
  items,
}: {
  open: boolean;
  onToggle: () => void;
  items: NavItem[];
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={onToggle}
        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white text-foreground shadow-[0_10px_24px_rgba(15,23,42,0.08)] touch-manipulation"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <AnimatePresence>
        {open ? (
          <>
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={shouldReduceMotion ? {} : { opacity: 1 }}
              exit={shouldReduceMotion ? {} : { opacity: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : transitions.fast}
              className="fixed inset-0 z-40 bg-slate-950/30 backdrop-blur-sm"
              onClick={onToggle}
            />
            <motion.nav
              initial={shouldReduceMotion ? false : { opacity: 0, y: -16, scale: 0.98 }}
              animate={shouldReduceMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
              exit={shouldReduceMotion ? {} : { opacity: 0, y: -16, scale: 0.98 }}
              transition={shouldReduceMotion ? { duration: 0 } : transitions.springSoft}
              className="fixed inset-x-4 top-22 z-50 rounded-[2rem] border border-border bg-white/96 p-4 shadow-[0_24px_60px_rgba(15,23,42,0.16)]"
            >
              <div className="grid gap-2">
                {items.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={onToggle}
                    className="rounded-[1.4rem] px-4 py-4 text-base font-semibold text-foreground hover:bg-slate-100"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.nav>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
