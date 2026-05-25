import { UserCheck, Leaf, HeartHandshake, TreePine } from "lucide-react";

const reasons = [
  {
    icon: UserCheck,
    title: "Experienced Vaidyas",
    desc: "Our team of qualified Ayurvedic physicians brings decades of clinical expertise and compassionate care.",
  },
  {
    icon: Leaf,
    title: "Authentic Ayurveda",
    desc: "We follow classical Ayurvedic texts and use only pure, ethically sourced herbal formulations.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Care",
    desc: "Every treatment plan is uniquely crafted based on your Prakriti, condition, and wellness goals.",
  },
  {
    icon: TreePine,
    title: "Peaceful Environment",
    desc: "Our hospital is designed as a healing sanctuary — calm, clean, and infused with positive energy.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-gold-light font-medium tracking-[0.2em] uppercase text-sm mb-3">Why Choose Us</p>
          <h2 className="section-heading mb-2">The Anandlok Difference</h2>
          <div className="w-16 h-0.5 mx-auto my-6 bg-gold" />
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-primary-foreground/70">
            What sets us apart is our unwavering commitment to authentic healing and patient well-being.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r) => (
            <div key={r.title} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors duration-300">
                <r.icon className="h-7 w-7 text-gold-light" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">{r.title}</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
