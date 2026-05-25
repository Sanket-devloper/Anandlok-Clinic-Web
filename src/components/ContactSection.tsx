import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BookAppointmentDialog from "@/components/BookAppointmentDialog";

type ContactInfo = {
  address?: string;
  phone?: string;
  hours?: string;
  socials?: {
    label: string;
    href: string;
  }[];
};

type ContactSectionProps = {
  info?: ContactInfo;
  variant?: "home" | "contact";
};

const defaultSocials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/anandlokayurved/",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@AnandlokAyurveda",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/ahhcnagpur",
  },
] as const;

const iconClass = "h-6 w-6 text-white";
const socialButtonClass =
  "group flex items-center gap-4 rounded-2xl border border-border bg-background/80 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const InstagramLogo = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
    <defs>
      <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f58529" />
        <stop offset="40%" stopColor="#dd2a7b" />
        <stop offset="70%" stopColor="#8134af" />
        <stop offset="100%" stopColor="#515bd4" />
      </linearGradient>
    </defs>
    <rect x="2.5" y="2.5" width="19" height="19" rx="5" fill="url(#instagram-gradient)" />
    <rect x="5.5" y="5.5" width="13" height="13" rx="4" fill="none" stroke="white" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="3.2" fill="none" stroke="white" strokeWidth="1.8" />
    <circle cx="16.4" cy="7.6" r="1.1" fill="white" />
  </svg>
);

const YoutubeLogo = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
    <rect x="2" y="5" width="20" height="14" rx="4" fill="#FF0000" />
    <path d="M10 9.2v5.6l4.8-2.8L10 9.2z" fill="white" />
  </svg>
);

const FacebookLogo = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
    <circle cx="12" cy="12" r="10" fill="#1877F2" />
    <path
      d="M13.2 19v-5.2h1.8l0.3-2.1h-2.1V10c0-.6.2-1 1-1h1.1V6.2c-.2 0-1-.1-1.9-.1-1.8 0-3.1 1.1-3.1 3.1v1.5H8.4v2.1h1.9V19h2.9z"
      fill="white"
    />
  </svg>
);

const ContactSection = ({ info, variant = "home" }: ContactSectionProps) => {
  const { address, phone, hours, socials } = info ?? {};
  const isHomepageVariant = variant === "home";
  const socialLinks = socials ?? defaultSocials;

  const socialLogoByLabel = {
    Instagram: InstagramLogo,
    YouTube: YoutubeLogo,
    Facebook: FacebookLogo,
  } as const;

  const socialCards = socialLinks.map((social) => {
    const SocialLogo = socialLogoByLabel[social.label as keyof typeof socialLogoByLabel];

    return (
      <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className={socialButtonClass}>
        <div className="h-12 w-12 shrink-0 rounded-xl bg-background flex items-center justify-center shadow-sm ring-1 ring-border">
          <SocialLogo />
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-foreground">{social.label}</p>
          <p className="text-sm text-muted-foreground">Open our {social.label.toLowerCase()} page</p>
        </div>
        <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0 ml-auto" />
      </a>
    );
  });
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-3">Get In Touch</p>
          <h2 className="section-heading mb-2">Visit Us On</h2>
          <div className="gold-divider" />
        </div>

        {isHomepageVariant ? (
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            <div className="premium-card space-y-6">
              <div>
                <h3 className="font-serif text-2xl font-semibold mb-2 text-foreground">Find Us</h3>
                <p className="text-sm text-muted-foreground">Reach the clinic, call us, or follow our updates online.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Address</p>
                  <p className="text-sm text-muted-foreground">{address ?? "5 Lanjewar Layout, Tatya Tope Nagar - 440015, Nagpur, India"}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Phone</p>
                  <a href={"tel:" + (phone ?? "+917420026989")} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {phone ?? "+91 7420026989"}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Hours</p>
                  <p className="text-sm text-muted-foreground">{hours ?? "Mon – Sat: 9:00 AM – 7:00 PM"}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button asChild className="rounded-full sm:flex-1">
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <BookAppointmentDialog>
                  <Button variant="outline" className="rounded-full sm:flex-1">Book Appointment</Button>
                </BookAppointmentDialog>
              </div>
            </div>

            <div className="premium-card !p-0 overflow-hidden min-h-[320px] md:min-h-[380px]">
              <iframe
                title="Anandlok Ayurveda Location"
                  src="https://www.google.com/maps?output=embed&q=Anandlok%20Ayurveda%2C%205%20Lanjewar%20Layout%2C%20Tatya%20Tope%20Nagar%2C%20Nagpur%2C%20Maharashtra%20440015"
                className="h-full w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        ) : (
          <div className="space-y-8 md:space-y-10">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
              <div className="premium-card space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-2 text-foreground">Connect With Us</h3>
                  <p className="text-sm text-muted-foreground">Follow the clinic online for updates, videos, and wellness content.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Address</p>
                    <p className="text-sm text-muted-foreground">{address ?? "5 Lanjewar Layout, Tatya Tope Nagar - 440015, Nagpur, India"}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Phone</p>
                    <a href={"tel:" + (phone ?? "+917420026989")} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {phone ?? "+91 7420026989"}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Hours</p>
                    <p className="text-sm text-muted-foreground">{hours ?? "Mon – Sat: 9:00 AM – 7:00 PM"}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button asChild className="rounded-full sm:flex-1">
                    <a href="https://wa.me/917420026989" target="_blank" rel="noreferrer">
                      Chat With Us
                    </a>
                  </Button>
                  <BookAppointmentDialog>
                    <Button variant="outline" className="rounded-full sm:flex-1">Book Appointment</Button>
                  </BookAppointmentDialog>
                </div>
              </div>

              <div className="premium-card !p-0 overflow-hidden min-h-[320px] md:min-h-[380px]">
                <iframe
                  title="Anandlok Ayurveda Location"
                  src="https://www.google.com/maps?output=embed&q=Anandlok%20Ayurveda%2C%205%20Lanjewar%20Layout%2C%20Tatya%20Tope%20Nagar%2C%20Nagpur%2C%20Maharashtra%20440015"
                  className="h-full w-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <div className="premium-card w-full max-w-3xl space-y-6">
                <div className="text-center">
                  <h3 className="font-serif text-2xl font-semibold mb-2 text-foreground">Social Media</h3>
                  <p className="text-sm text-muted-foreground">Tap a platform to open our official page.</p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">{socialCards}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
