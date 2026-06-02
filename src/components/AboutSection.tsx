import aboutImg from "@/assets/New about us.webp";
import { Leaf } from "lucide-react";
import ProgressiveImage from "@/components/ProgressiveImage";

type Props = {
  eyebrow?: string;
  heading?: string;
  paragraphs?: string[];
  features?: string[];
  variant?: "compact" | "full";
};

const AboutSection = ({ eyebrow, heading, paragraphs, features, variant = "compact" }: Props) => {
  const isCompact = variant === "compact";

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-stretch">
          <div className="relative h-full">
            <div
              className={`rounded-2xl overflow-hidden shadow-2xl h-full ${
                isCompact
                  ? "min-h-[280px] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[420px] lg:max-h-[520px]"
                  : "min-h-[320px] md:min-h-[480px] lg:min-h-[520px]"
              }`}
            >
              <ProgressiveImage
                src={aboutImg}
                alt="Anandlok Ayurveda treatment room"
                className="object-cover"
                wrapperClassName="h-full w-full"
                width={800}
                height={600}
                placeholderLabel="Loading about image"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-primary/10 -z-10 hidden md:block" />
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-gold/10 -z-10 hidden md:block" />
          </div>

          <div>
            <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-3">{eyebrow ?? "About Us"}</p>
            <h2 className="section-heading mb-2">{heading ?? (<>Rooted in Tradition,<br />Refined by Care</>)}</h2>
            <div className="gold-divider !mx-0 !ml-0" />
            <div className={isCompact ? "space-y-4" : "space-y-5"}>
              {(paragraphs ?? [
              "At Anandlok Ayurveda & Panchakarma, we bring the timeless wisdom of Ayurveda together with modern diagnostic care.",
              "Founded with a vision to make classical Ayurveda accessible and effective, we combine experienced Vaidyas and pure herbal formulations.",
            ]).map((p, idx) => (
                <p key={idx} className="text-muted-foreground leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {(features ?? ["100% Authentic Ayurveda", "Personalized Healing", "Trusted by 10,000+ Patients", "Experienced Ayurvedic Doctors and Therapists"]).map((label) => (
                <div key={label} className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50">
                  <Leaf className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-foreground leading-snug">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
