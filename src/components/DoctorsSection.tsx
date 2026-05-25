import doctor1 from "@/assets/doctor-1.webp";
import doctor2 from "@/assets/doctor-2.webp";
import doctor3 from "@/assets/doctor-3.webp";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const doctors = [
  {
    name: "Dr. Viraj Gite",
    role: "Director & Senior Health Consultant, Anandlok Health Foundation",
    qualification: "BAMS, PGDMCR",
    specialization: "",
    image: doctor1,
  },
  {
    name: "Dr. Namrata Kapure",
    role: "Director, CEO of Anandlok Health Foundation",
    qualification: "BAMS, PGDCRDM",
    specialization: "",
    image: doctor2,
  },
  {
    name: "Dr. Prashant Kuchankar",
    role: "Founder and Director of Anandlok Health Foundation",
    qualification: "BAMS, PGDCRBM",
    specialization: "",
    image: doctor3,
  },
];

const DoctorsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="doctors" className="section-padding pt-10 md:pt-14 bg-background">
      <div className="container mx-auto" ref={ref}>
        <div
          className={`text-center mb-10 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-3">Our Experts</p>
          <h2 className="section-heading mb-2">Meet Our Physicians</h2>
          <div className="gold-divider" />
          <p className="section-subheading">
            Experienced Ayurvedic doctors dedicated to your healing journey.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {doctors.map((d, i) => (
            <div
              key={d.name}
              className={`group text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
            >
              <div className="relative mb-5 mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-secondary group-hover:border-gold/40 transition-colors duration-500 shadow-lg">
                <img
                  src={d.image}
                  alt={d.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={512}
                  height={640}
                />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-1">{d.name}</h3>
              <p className="text-sm font-medium text-accent mb-2">{d.role}</p>
              <p className="text-xs text-muted-foreground mb-1">{d.qualification}</p>
              {d.specialization && <p className="text-xs text-muted-foreground italic">{d.specialization}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
