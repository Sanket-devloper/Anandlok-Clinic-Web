import { useEffect, useRef, useState } from "react";

export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const markVisible = () => {
      setIsVisible(true);
      observer.unobserve(el);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          markVisible();
        }
      },
      {
        threshold,
        // Slightly earlier trigger improves consistency on mobile browsers.
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(el);

    const rect = el.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const isAlreadyInView = rect.top < viewportHeight * 0.92 && rect.bottom > 0;
    if (isAlreadyInView) {
      markVisible();
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
