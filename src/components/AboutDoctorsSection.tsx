import { aboutDoctorsData } from "@/lib/placeholders";
import ProgressiveImage from "@/components/ProgressiveImage";
import doctor1 from "@/assets/doctor-1.webp";
import doctor2 from "@/assets/doctor-2.webp";
import doctor3 from "@/assets/doctor-3.webp";

const AboutDoctorsSection = () => {
  const doctorImagesByName: Record<string, string> = {
    "Dr. Viraj Gite": doctor1,
    "Dr. Namrata Kapure": doctor2,
    "Dr. Prashant Kuchankar": doctor3,
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  };

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-3">Our Doctors</p>
          <h2 className="section-heading mb-2">Meet Our Ayurveda Experts</h2>
          <div className="gold-divider" />
          <p className="section-subheading">Experienced physicians leading personalized healing at Anandlok.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutDoctorsData.map((doctor) => {
            const doctorImage = doctorImagesByName[doctor.name];

            return (
            <article key={doctor.name} className="premium-card text-left">
              <div className="mb-5 overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-secondary to-gold/10">
                <div className="aspect-square flex items-center justify-center">
                  {doctorImage ? (
                    <ProgressiveImage
                      src={doctorImage}
                      alt={doctor.name}
                      className="object-cover object-top"
                      wrapperClassName="h-full w-full"
                      width={512}
                      height={640}
                      placeholderLabel="Loading doctor photo"
                    />
                  ) : (
                    <div className="text-center">
                      <div className="mx-auto mb-3 h-14 w-14 rounded-full bg-background/70 flex items-center justify-center text-sm font-semibold text-accent">
                        {getInitials(doctor.name)}
                      </div>
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Doctor Image</p>
                    </div>
                  )}
                </div>
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{doctor.name}</h3>
              <p className="text-sm font-medium text-accent mb-2">{doctor.role}</p>
              <p className="text-sm text-muted-foreground mb-1">{doctor.qualification}</p>
              <p className="text-sm text-muted-foreground mb-3">{doctor.specialization}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{doctor.experience}</p>
            </article>
          )})}
        </div>
      </div>
    </section>
  );
};

export default AboutDoctorsSection;
