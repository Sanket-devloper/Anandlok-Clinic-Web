import PageHero from "@/components/PageHero";
import aboutHero from "@/assets/About us hero section.webp";
import Seo from "@/components/Seo";

const TermsOfUsePage = () => {
  return (
    <>
      <Seo
        title="Terms of Use"
        description="Review the terms and conditions for using the Anandlok Ayurveda website and its online services."
        canonicalPath="/terms-of-use"
      />
      <PageHero
        image={aboutHero}
        eyebrow="Legal & Terms"
        title="Terms of Use"
        subtitle="The rules and conditions for using the Anandlok Ayurveda website and its online services."
      />

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl space-y-8">
          <div className="premium-card space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">Acceptance of Terms</h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                By accessing or using this website, you agree to these Terms of Use. If you do not agree with any part of
                these terms, please do not use the site.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Use of the Website</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                <li>The content on this website is for general informational purposes only.</li>
                <li>You may use the site to learn about our services, contact us, and request appointments.</li>
                <li>You agree not to misuse the website, attempt unauthorized access, or interfere with its operation.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Medical Information Disclaimer</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                The information provided on this website is not a substitute for professional medical advice, diagnosis, or
                treatment. Any wellness or Ayurveda-related content should be considered informational and should be reviewed
                with a qualified practitioner before making health decisions.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Appointments and Communication</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Appointment requests or messages sent through the website, WhatsApp, email, or social media do not guarantee
                confirmation until we respond. We may contact you using the details you provide to respond to your request or
                coordinate treatment.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Third-Party Links</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                This website may contain links to third-party websites or platforms, including Google, YouTube, Instagram,
                Facebook, and WhatsApp. We are not responsible for the content, policies, or practices of those external
                services.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Intellectual Property</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Unless otherwise stated, the text, images, branding, and design elements on this website belong to Anandlok
                Ayurveda or are used with permission. You may not copy, reproduce, or distribute them without authorization.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Limitation of Liability</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                We make reasonable efforts to keep the website accurate and available, but we do not guarantee uninterrupted
                access or error-free content. To the fullest extent permitted by law, we are not liable for losses arising from
                use of the website or reliance on its content.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Changes to These Terms</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                We may update these Terms of Use from time to time. Changes will take effect when posted on this page.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Contact</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Questions about these terms can be sent to Contactanandlok@gmail.com or by calling +91 7420026989.
              </p>
            </div>

            <p className="text-xs text-muted-foreground pt-2">Last updated: May 22, 2026</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfUsePage;