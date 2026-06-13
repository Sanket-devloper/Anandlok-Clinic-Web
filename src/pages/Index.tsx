import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import KeyMetricsSection from "@/components/KeyMetricsSection";
import ServicesSection from "@/components/ServicesSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import AchievementsSection from "@/components/AchievementsSection";
import DoctorsSection from "@/components/DoctorsSection";
import BlogSection from "@/components/BlogSection";
import VideoSection from "@/components/VideoSection";
import ContactSection from "@/components/ContactSection";
import ScrollReveal from "@/components/ScrollReveal";
import Seo from "@/components/Seo";

const Index = () => {
  return (
    <div className="min-h-screen scroll-smooth">
      <Seo
        fullTitle="Anandlok Ayurveda | Best Ayurveda & Panchakarma Wellness Hospital in Nagpur"
        description="Authentic Panchakarma, Ayurvedic treatments, yoga, meditation, wellness care, and experienced doctors in Nagpur."
        canonicalPath="/"
      />
      <HeroSection />
      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>
      <ScrollReveal>
        <KeyMetricsSection />
      </ScrollReveal>
      <ScrollReveal>
        <ServicesSection />
      </ScrollReveal>
      <ScrollReveal>
        <TreatmentsSection />
      </ScrollReveal>
      <ScrollReveal>
        <DoctorsSection />
      </ScrollReveal>
      <ScrollReveal>
        <WhyChooseUs />
      </ScrollReveal>
      <TestimonialsSection />
      <ScrollReveal>
        <AchievementsSection limit={6} showViewAll />
      </ScrollReveal>
      <ScrollReveal>
        <BlogSection />
      </ScrollReveal>
      <ScrollReveal>
        <VideoSection />
      </ScrollReveal>
      <ScrollReveal>
        <ContactSection />
      </ScrollReveal>
    </div>
  );
};

export default Index;
