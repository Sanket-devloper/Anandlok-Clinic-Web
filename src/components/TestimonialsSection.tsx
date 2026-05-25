import { Star, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const testimonials = [
  {
    name: "Harshad Gujar",
    location: "Nagpur",
    rating: 5,
    text: "After years of suffering from chronic back pain, the Panchakarma treatment at Anandlok gave me incredible relief. The doctors are truly knowledgeable and caring.",
    treatment: "Panchakarma & Kati Basti",
  },
  {
    name: "Nirmala Vidya",
    location: "Mumbai",
    rating: 5,
    text: "The Uturn program reversed my pre-diabetic condition in just 3 months. I feel 10 years younger! The entire team is so supportive and professional.",
    treatment: "Lifestyle Disease Reversal",
  },
  {
    name: "Neha Choudhury",
    location: "Pune",
    rating: 5,
    text: "Dr. Ananya's Garbhasanskar program was a beautiful journey. Her guidance during my pregnancy was invaluable, and my baby is healthy and thriving.",
    treatment: "Aakar Garbhasanskar",
  },
  {
    name: "Abhishek Patil",
    location: "Nagpur",
    rating: 5,
    text: "Shirodhara sessions here are deeply transformative. My anxiety and insomnia improved dramatically after just a few sessions. Highly recommended!",
    treatment: "Shirodhara Therapy",
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto" ref={ref}>
        <div
          className={`text-center mb-10 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-3">Testimonials</p>
          <h2 className="section-heading mb-2">What Our Patients Say</h2>
          <div className="gold-divider" />
        </div>

        <div
          className={`relative testimonials-marquee transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="testimonials-track">
            {[0, 1].map((copyIdx) => (
              <div key={copyIdx} className="flex gap-6 pr-6 shrink-0" aria-hidden={copyIdx === 1}>
                {testimonials.map((t) => (
                  <article key={`${copyIdx}-${t.name}`} className="premium-card relative w-[320px] md:w-[360px]">
                    <Quote className="absolute top-5 right-5 h-8 w-8 text-primary/10" />
                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: t.rating }).map((_, idx) => (
                        <Star key={idx} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-5 italic">"{t.text}"</p>
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-semibold text-foreground">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.location}</p>
                      </div>
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary whitespace-nowrap">
                        {t.treatment}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-secondary/30 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-secondary/30 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
