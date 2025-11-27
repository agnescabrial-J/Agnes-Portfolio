//src\hooks\ui-hooks.ts
import { useEffect, useState } from "react";

/** Hook - prefers-reduced-motion */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    try {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      const onChange = () => setReduced(mq.matches);
      setReduced(mq.matches);
      mq.addEventListener?.("change", onChange);
      return () => mq.removeEventListener?.("change", onChange);
    } catch {
      return;
    }
  }, []);
  return reduced;
}

/** Small function to clamp long strings safely for aria labels */
export const truncate = (s: string, n = 120) => (s.length > n ? `${s.slice(0, n - 1)}…` : s);
