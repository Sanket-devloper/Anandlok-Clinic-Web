import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      type="button"
      aria-label="Scroll back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 left-5 z-50 flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/10 bg-primary text-primary-foreground shadow-[0_18px_40px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:scale-110 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light focus-visible:ring-offset-2 focus-visible:ring-offset-background md:bottom-6 md:left-6 md:h-10 md:w-10"
    >
      <ChevronUp className="h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
    </button>
  );
};

export default ScrollToTopButton;
