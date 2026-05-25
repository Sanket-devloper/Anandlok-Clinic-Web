import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

type Treatment = { title: string; desc: string; tag?: string };

const defaultTreatments: Treatment[] = [
  {
    title: "Abhyanga - Ayurvedic Full Body Oil Massage",
    desc: "Traditional herbal oil massage that improves circulation, relieves stiffness, and promotes deep relaxation.",
    tag: "Popular",
  },
  {
    title: "Shirodhara Therapy",
    desc: "Warm herbal oil is gently poured over the forehead to reduce stress, anxiety, insomnia, and mental fatigue.",
    tag: "Signature",
  },
  {
    title: "Panchakarma Detox & Rejuvenation",
    desc: "Complete body detox therapy to eliminate toxins (Ama), improve metabolism, and rejuvenate naturally.",
    tag: "Detox",
  },
  {
    title: "Herbal Steam Therapy (Swedana)",
    desc: "Ayurvedic steam therapy that relaxes muscles, improves circulation, and supports detoxification.",
    tag: "Rejuvenation",
  },
];

const TreatmentsSection = ({ treatments }: { treatments?: Treatment[] }) => {
  return (
    <section id="treatments" className="section-padding pb-10 md:pb-14 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-3">Special Programs</p>
          <h2 className="section-heading mb-2">Signature Treatments</h2>
          <div className="gold-divider" />
          <p className="section-subheading">
            Time-tested Ayurvedic therapies performed by skilled practitioners in a serene healing environment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(treatments ?? defaultTreatments).map((t) => (
            <div key={t.title} className="premium-card group cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-primary/10 text-primary">
                  {t.tag}
                </span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">{t.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild size="lg" className="rounded-full px-8">
            <Link to="/programs">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
