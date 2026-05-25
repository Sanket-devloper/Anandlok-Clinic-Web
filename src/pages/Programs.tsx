import PageHero from "@/components/PageHero";
import ProgramsTreatmentLayout from "@/components/ProgramsTreatmentLayout";
import aboutHero from "@/assets/About us hero section.webp";
import Seo from "@/components/Seo";

const ProgramsPage = () => {
  return (
    <>
      <Seo
        title="Panchakarma Treatments"
        description="Discover traditional Panchakarma programs and Ayurvedic treatments designed for detox, rejuvenation, and natural healing."
        canonicalPath="/treatments"
      />
      <PageHero
        image={aboutHero}
        eyebrow="Special Programs"
        title="Authentic Panchakarma Therapies"
        subtitle="Experience the healing power of traditional Ayurveda Panchakarma therapies designed to detoxify the body, rejuvenate the mind, restore balance, and promote holistic wellness naturally."
      />
      <ProgramsTreatmentLayout />
    </>
  );
};

export default ProgramsPage;
