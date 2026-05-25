import PageHero from "@/components/PageHero";
import ServicesTreatmentLayout from "@/components/ServicesTreatmentLayout";
import aboutHero from "@/assets/About us hero section.webp";
import Seo from "@/components/Seo";

const ServicesPage = () => {
  return (
    <>
      <Seo
        title="Services"
        description="Explore Ayurvedic consultation, Panchakarma therapy, diet guidance, and holistic treatment services from Anandlok Ayurveda."
        canonicalPath="/services"
      />
      <PageHero
        image={aboutHero}
        eyebrow="Our Services"
        title="Holistic Healing Solutions"
        subtitle="Comprehensive Ayurvedic care designed to heal, rejuvenate, and transform your life naturally."
      />
      <ServicesTreatmentLayout />
    </>
  );
};

export default ServicesPage;
