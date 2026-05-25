import {
  Droplets,
  Stethoscope,
  HeartPulse,
  Salad,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

type Service = { icon?: LucideIcon; title: string; desc: string };

const defaultServices: Service[] = [
  { icon: Droplets, title: "Panchakarma Therapy", desc: "Five-fold classical detox therapies to purify body and mind." },
  {
    icon: Stethoscope,
    title: "Authentic Ayurvedic Diagnosis, Consultation & Treatment",
    desc: "Root-cause based consultation with personalized treatment plans available offline and online.",
  },
  {
    icon: Salad,
    title: "Ayurvedic Diet & Lifestyle Guidance",
    desc: "Prakriti-wise diet, routine, sleep, and seasonal wellness guidance for long-term balance.",
  },
  {
    icon: HeartPulse,
    title: "Complete Heart Care Detox Program",
    desc: "Classical Ayurveda detox and lifestyle support to improve circulation and heart wellness naturally.",
  },
];

const ServicesSection = ({ services }: { services?: Service[] }) => {
  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-3">Our Services</p>
          <h2 className="section-heading mb-2">Holistic Healing Solutions</h2>
          <div className="gold-divider" />
          <p className="section-subheading">
            Comprehensive Ayurvedic care designed to heal, rejuvenate, and transform your life naturally.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(services ?? defaultServices).map((s, i) => (
            <div
              key={s.title}
              className="premium-card text-center group cursor-default"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                {s.icon ? <s.icon className="h-6 w-6 text-primary" /> : <Droplets className="h-6 w-6 text-primary" />}
              </div>
              <h3 className="font-serif text-lg font-semibold mb-3 text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild size="lg" className="rounded-full px-8">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
