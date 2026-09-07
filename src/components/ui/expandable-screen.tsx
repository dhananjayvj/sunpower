"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type ExpandableScreenContextValue = {
  isExpanded: boolean;
  expand: () => void;
  collapse: () => void;
  layoutId: string;
  triggerRadius: string;
  contentRadius: string;
  animationDuration: number;
};

const ExpandableScreenContext = createContext<ExpandableScreenContextValue | null>(null);

function useExpandableScreen() {
  const context = useContext(ExpandableScreenContext);

  if (!context) {
    throw new Error("useExpandableScreen must be used within an ExpandableScreen");
  }

  return context;
}

type ExpandableScreenProps = {
  children: ReactNode;
  defaultExpanded?: boolean;
  onExpandChange?: (expanded: boolean) => void;
  layoutId?: string;
  triggerRadius?: string;
  contentRadius?: string;
  animationDuration?: number;
  lockScroll?: boolean;
};

export function ExpandableScreen({
  children,
  defaultExpanded = false,
  onExpandChange,
  layoutId = "expandable-card",
  triggerRadius = "28px",
  contentRadius = "24px",
  animationDuration = 0.35,
  lockScroll = true,
}: ExpandableScreenProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const expand = () => {
    setIsExpanded(true);
    onExpandChange?.(true);
  };

  const collapse = () => {
    setIsExpanded(false);
    onExpandChange?.(false);
  };

  useEffect(() => {
    if (!lockScroll) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = isExpanded ? "hidden" : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isExpanded, lockScroll]);

  useEffect(() => {
    if (!isExpanded) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") collapse();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isExpanded]);

  return (
    <ExpandableScreenContext.Provider
      value={{
        isExpanded,
        expand,
        collapse,
        layoutId,
        triggerRadius,
        contentRadius,
        animationDuration,
      }}
    >
      {children}
    </ExpandableScreenContext.Provider>
  );
}

type ExpandableScreenTriggerProps = {
  children: ReactNode;
  className?: string;
};

export function ExpandableScreenTrigger({ children, className = "" }: ExpandableScreenTriggerProps) {
  const { isExpanded, expand, layoutId, triggerRadius } = useExpandableScreen();

  return (
    <AnimatePresence initial={false}>
      {!isExpanded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`relative block h-full w-full ${className}`}
        >
          <motion.div
            layout
            layoutId={layoutId}
            style={{ borderRadius: triggerRadius }}
            className="absolute inset-0 border border-slate-200/80 bg-white/95 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
          />
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.08 }}
            onClick={expand}
            className="relative block h-full w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40 focus-visible:ring-offset-2"
          >
            {children}
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

type ExpandableScreenContentProps = {
  children: ReactNode;
  className?: string;
  showCloseButton?: boolean;
  closeButtonClassName?: string;
};

export function ExpandableScreenContent({
  children,
  className = "",
  showCloseButton = true,
  closeButtonClassName = "",
}: ExpandableScreenContentProps) {
  const { isExpanded, collapse, layoutId, contentRadius, animationDuration } = useExpandableScreen();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isExpanded) closeButtonRef.current?.focus();
  }, [isExpanded]);

  return (
    <AnimatePresence initial={false}>
      {isExpanded && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-5">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={collapse}
            aria-hidden="true"
            className="absolute inset-0 bg-slate-950/35 backdrop-blur-sm"
          />
          <motion.div
            layout
            layoutId={layoutId}
            transition={{
              layout: {
                type: "spring",
                stiffness: 260,
                damping: 30,
                mass: 0.85,
              },
              borderRadius: { duration: animationDuration, ease: [0.23, 1, 0.32, 1] },
            }}
            style={{ borderRadius: contentRadius }}
            className={`relative z-10 w-full max-w-4xl overflow-hidden bg-white ${className}`}
          >
            <div className="max-h-[calc(100dvh-1.5rem)] overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
                className="relative z-10 w-full"
              >
                {children}
              </motion.div>
            </div>

            {showCloseButton && (
              <motion.button
                ref={closeButtonRef}
                type="button"
                onClick={collapse}
                aria-label="Close resource details"
                className={`absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40 focus-visible:ring-offset-2 sm:right-6 sm:top-6 ${
                  closeButtonClassName || "bg-slate-100 text-slate-900 hover:bg-slate-200"
                }`}
              >
                <X className="h-5 w-5" />
              </motion.button>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export { useExpandableScreen };
