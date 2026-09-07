"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type MutableRefObject,
  type ReactNode,
} from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";

type ExpandableScreenContextValue = {
  isExpanded: boolean;
  expand: () => void;
  collapse: () => void;
  triggerRadius: string;
  contentRadius: string;
  animationDuration: number;
  triggerRef: MutableRefObject<HTMLButtonElement | null>;
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
  triggerRadius = "28px",
  contentRadius = "24px",
  animationDuration = 0.35,
  lockScroll = true,
}: ExpandableScreenProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const expand = useCallback(() => {
    setIsExpanded(true);
    onExpandChange?.(true);
  }, [onExpandChange]);

  const collapse = useCallback(() => {
    setIsExpanded(false);
    onExpandChange?.(false);
  }, [onExpandChange]);

  useEffect(() => {
    if (!lockScroll) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = isExpanded ? "hidden" : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isExpanded, lockScroll]);

  return (
    <ExpandableScreenContext.Provider
      value={{
        isExpanded,
        expand,
        collapse,
        triggerRadius,
        contentRadius,
        animationDuration,
        triggerRef,
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
  const { isExpanded, expand, triggerRadius, triggerRef } = useExpandableScreen();

  return (
    <AnimatePresence initial={false}>
      {!isExpanded && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className={`relative block h-full w-full ${className}`}
        >
          <motion.button
            ref={triggerRef}
            type="button"
            onClick={expand}
            style={{ borderRadius: triggerRadius }}
            whileTap={{ scale: 0.985 }}
            className="relative block h-full w-full overflow-hidden rounded-[inherit] border border-slate-200/80 bg-white/95 text-left shadow-[0_10px_30px_rgba(15,23,42,0.04)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40 focus-visible:ring-offset-2"
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
  ariaLabelledBy?: string;
  ariaLabel?: string;
};

export function ExpandableScreenContent({
  children,
  className = "",
  showCloseButton = true,
  closeButtonClassName = "",
  ariaLabelledBy,
  ariaLabel = "Expanded resource details",
}: ExpandableScreenContentProps) {
  const { isExpanded, collapse, triggerRef, contentRadius, animationDuration } = useExpandableScreen();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (isExpanded) closeButtonRef.current?.focus();
  }, [isExpanded]);

  useEffect(() => {
    if (!isExpanded) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        collapse();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          "button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex=\"-1\"])",
        ),
      );

      if (focusableElements.length === 0) {
        event.preventDefault();
        dialogRef.current.focus();
        return;
      }

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [collapse, isExpanded]);

  const transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: animationDuration, ease: [0.23, 1, 0.32, 1] as const };

  return (
    <AnimatePresence initial={false} onExitComplete={() => triggerRef.current?.focus()}>
      {isExpanded && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-5">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            onClick={collapse}
            aria-hidden="true"
            className="absolute inset-0 bg-slate-950/35 backdrop-blur-sm"
          />
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={ariaLabelledBy}
            aria-label={ariaLabelledBy ? undefined : ariaLabel}
            tabIndex={-1}
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.985, y: 8 }}
            transition={transition}
            style={{ borderRadius: contentRadius }}
            className={`relative z-10 w-full max-w-4xl overflow-hidden bg-white ${className}`}
          >
            <div className="max-h-[calc(100dvh-1.5rem)] overflow-y-auto">{children}</div>

            {showCloseButton && (
              <button
                ref={closeButtonRef}
                type="button"
                onClick={collapse}
                aria-label="Close resource details"
                className={`absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40 focus-visible:ring-offset-2 sm:right-6 sm:top-6 ${
                  closeButtonClassName || "bg-slate-100 text-slate-900 hover:bg-slate-200"
                }`}
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export { useExpandableScreen };
