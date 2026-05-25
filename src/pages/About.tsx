import React from "react";
import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import AboutDoctorsSection from "@/components/AboutDoctorsSection";
import PageHero from "@/components/PageHero";
import aboutHero from "@/assets/About us hero section.webp";
import { aboutData } from "@/lib/placeholders";
import Seo from "@/components/Seo";

const AboutPage = () => {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about Anandlok Ayurveda Panchakarma and Wellness Center in Nagpur, our doctors, and our authentic Ayurveda approach."
        canonicalPath="/about"
      />
      <PageHero
        image={aboutHero}
        eyebrow="About Anandlok"
        title="Rooted in Authentic Ayurveda"
        subtitle="Personalized Panchakarma therapies and holistic wellness care in Nagpur."
      />
      <AboutSection
        eyebrow={aboutData.eyebrow}
        heading={aboutData.heading}
        paragraphs={aboutData.paragraphs}
        features={aboutData.features}
        variant="full"
      />
      <AboutDoctorsSection />
      <AchievementsSection />
    </>
  );
};

export default AboutPage;
