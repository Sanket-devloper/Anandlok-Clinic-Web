import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import BookAppointmentDialog from "@/components/BookAppointmentDialog";
import ProgressiveImage from "@/components/ProgressiveImage";
import heroBg from "@/assets/hero-bg.webp";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[80vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <ProgressiveImage
          src={heroBg}
          alt="Ayurvedic healing environment"
          className="object-cover"
          wrapperClassName="absolute inset-0"
          width={1920}
          height={1080}
          priority
          placeholderLabel="Loading hero image"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <p className="text-gold-light font-medium tracking-[0.25em] uppercase text-xs sm:text-sm mb-6">
            ✦ Authentic Ayurveda ✦
          </p>
        </div>

        <h1
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Anandlok Ayurveda <span className="text-gold-light">&</span> Panchakarma
        </h1>

        <p
          className="text-primary-foreground/80 text-base sm:text-lg md:text-xl mb-4 font-light animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          Wellness Hospital
        </p>

        <p
          className="text-gold-light/90 text-xs sm:text-sm md:text-base tracking-[0.18em] uppercase mb-10 animate-fade-up"
          style={{ animationDelay: "0.7s" }}
        >
          Natural Healing &nbsp;|&nbsp; Holistic Wellness &nbsp;|&nbsp; Panchakarma Experts
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.9s" }}
        >
          <BookAppointmentDialog>
            <Button variant="hero" size="lg" className="text-base px-8 py-6 rounded-full">
              Book Appointment
            </Button>
          </BookAppointmentDialog>
          <Link to="/services">
            <Button variant="heroOutline" size="lg" className="text-base px-8 py-6 rounded-full">
              Explore Treatments
            </Button>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
