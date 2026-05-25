import PageHero from "@/components/PageHero";
import aboutHero from "@/assets/About us hero section.webp";
import Seo from "@/components/Seo";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="Read how Anandlok Ayurveda collects, uses, and protects the information shared through our website and services."
        canonicalPath="/privacy-policy"
      />
      <PageHero
        image={aboutHero}
        eyebrow="Legal & Privacy"
        title="Privacy Policy"
        subtitle="How Anandlok Ayurveda collects, uses, and protects information shared through our website and services."
      />

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl space-y-8">
          <div className="premium-card space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">Introduction</h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Anandlok Ayurveda Panchakarma and Wellness Center respects your privacy. This Privacy Policy explains how we
                collect, use, store, and protect information when you visit our website, contact us, book appointments, or
                interact with embedded services such as maps, videos, and social media links.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Information We Collect</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                <li>Contact details you submit through forms, calls, email, WhatsApp, or direct messages.</li>
                <li>Appointment and consultation details that help us respond to your request.</li>
                <li>Basic technical data such as browser type, device, pages visited, and time spent on the site.</li>
                <li>Information provided through embedded services like Google Maps or YouTube when you interact with them.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">How We Use Your Information</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                <li>To respond to your inquiries and appointment requests.</li>
                <li>To provide consultation, treatment, and follow-up communication.</li>
                <li>To improve the website, services, and user experience.</li>
                <li>To share important updates related to appointments, clinic operations, or services.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Cookies and Analytics</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Our website may use cookies or similar technologies to improve performance, remember preferences, and analyze
                traffic. Third-party services embedded on the site, such as Google Maps and YouTube, may also use cookies or
                collect usage data according to their own policies.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Third-Party Services</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                When you click social media buttons, open WhatsApp, or view embedded content, you may be directed to third-party
                platforms such as Google, YouTube, Facebook, Instagram, or WhatsApp. Their privacy practices are governed by
                their own policies, and we encourage you to review them separately.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Data Security</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                We take reasonable technical and organizational measures to protect information from unauthorized access,
                loss, misuse, or disclosure. However, no online transmission or storage method can be guaranteed to be 100%
                secure.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Your Rights</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                You may contact us to ask about the information we hold about you, request corrections, or request that we
                stop using your details for certain communications where applicable.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Children's Privacy</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Our website is intended for general informational use. If we collect information related to a child for
                consultation or treatment, it should be shared by a parent or guardian.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Policy Updates</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated
                revision date.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Contact Us</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy, you can contact us at Contactanandlok@gmail.com or call
                +91 7420026989.
              </p>
            </div>

            <p className="text-xs text-muted-foreground pt-2">Last updated: May 22, 2026</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;