import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ScrollReveal = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
