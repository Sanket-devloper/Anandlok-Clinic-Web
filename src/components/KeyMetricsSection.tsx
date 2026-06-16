import { Users, Clock, Leaf } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useCounter } from "@/hooks/use-counter";

type Metric = {
  icon: typeof Users;
  numericValue: number;
  suffix: string;
  label: string;
  description: string;
  display?: string;
};

const MetricCard = ({ metric, shouldStart }: { metric: Metric; shouldStart: boolean }) => {
  const Icon = metric.icon;
  const count = useCounter(metric.numericValue, 2000, shouldStart);

  return (
    <div className="group relative p-8 rounded-xl border border-border bg-card hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 mb-4 group-hover:bg-accent/20 transition-colors">
          <Icon className="w-6 h-6 text-accent" />
        </div>

        <div className="mb-2">
          <p className="text-3xl sm:text-4xl font-bold text-foreground">
            {metric.display ? (
              metric.display
            ) : (
              <>
                {count}
                {metric.suffix}
              </>
            )}
          </p>
        </div>

        <h3 className="text-lg font-semibold text-foreground mb-2">
          {metric.label}
        </h3>

        <p className="text-sm text-muted-foreground">
          {metric.description}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
    </div>
  );
};

const KeyMetricsSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    const sectionElement = sectionRef.current;

    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  const metrics: Metric[] = [
    {
      icon: Users,
      numericValue: 80000,
      suffix: "+",
      label: "Patients Consulted",
      description: "Under the UTURN Lifestyle Disease Reversal Program",
    },
    {
      icon: Clock,
      numericValue: 350000,
      suffix: "+",
      label: "Consultations",
      description: "Personalized Ayurvedic consultations and treatment sessions",
      display: "3.5+ lakhs",
    },
    {
      icon: Leaf,
      numericValue: 15,
      suffix: "+",
      label: "Years of Excellence",
      description: "Trusted expertise in authentic Ayurvedic wellness care",
    },
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-b from-secondary/30 to-background border-t border-border">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Our Impact
          </p>
          <h2 className="section-heading">Trusted by Thousands for Wellness</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Our commitment to authentic Ayurveda and personalized care has transformed the lives of thousands
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {metrics.map((metric, index) => (
            <MetricCard key={index} metric={metric} shouldStart={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyMetricsSection;
