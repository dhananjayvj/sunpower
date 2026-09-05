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
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white p-2 text-slate-950 shadow-sm hover:border-accent-blue/30 hover:shadow-md touch-manipulation"
      >
        {open ? <X className="h-5 w-5 stroke-[2.4]" /> : <Menu className="h-5 w-5 stroke-[2.4]" />}
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
