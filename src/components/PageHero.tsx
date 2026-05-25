import { useScrollAnimation } from "@/hooks/use-scroll-animation";

type PageHeroProps = {
  image: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

const PageHero = ({ image, eyebrow, title, subtitle }: PageHeroProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden min-h-[45vh] md:min-h-[55vh] pt-24 md:pt-32 pb-16 md:pb-20 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className={`h-full w-full object-cover transition-transform ease-out will-change-transform motion-reduce:transform-none ${
            isVisible ? "scale-100" : "scale-110"
          }`}
          style={{ transitionDuration: "1800ms" }}
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        {eyebrow && (
          <p className="text-gold-light font-medium tracking-[0.25em] uppercase text-xs md:text-sm mb-5">
            {eyebrow}
          </p>
        )}
        <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-5">
          {title}
        </h1>
        {subtitle && (
          <p className="text-primary-foreground/80 text-sm sm:text-base md:text-lg font-light">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
