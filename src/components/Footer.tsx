import { Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import ProgressiveImage from "@/components/ProgressiveImage";
import footerLogo from "@/assets/logo.png";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Treatments", to: "/treatments" },
  { label: "Blog", to: "/blog" },
  { label: "Videos", to: "/gallery" },
  { label: "Achievements", to: "/about#achievements" },
  { label: "Contact Us", to: "/contact" },
  { label: "Terms of Use", to: "/terms-of-use" },
  { label: "Privacy Policy", to: "/privacy-policy" },
];

const socials = [
  { icon: Facebook, href: "https://www.facebook.com/ahhcnagpur", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/anandlokayurved/", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@AnandlokAyurveda", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Brand */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <ProgressiveImage
                src={footerLogo}
                alt="Anandlok Footer Logo"
                className="h-12 w-12 rounded-2xl object-cover shadow-md ring-1 ring-primary-foreground/10 brightness-200"
                wrapperClassName="h-12 w-12 shrink-0"
                placeholderLabel="Loading footer logo"
                priority
              />
              <span className="font-serif text-xl font-semibold">Anandlok Ayurveda</span>
            </div>
            <p className="text-sm text-primary-foreground/60 leading-relaxed mb-6">
              Restoring health through the timeless wisdom of Ayurveda. Experience authentic Panchakarma
              and holistic wellness at Nagpur's premier Ayurvedic hospital.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-300"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {footerLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm text-primary-foreground/60 hover:text-gold-light transition-colors duration-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-5">Contact Info</h4>
            <div className="space-y-3 text-sm text-primary-foreground/60">
              <p>5 Lanjewar Layout, Tatya Tope Nagar<br />Nagpur - 440015, India</p>
              <p>
                <a href="tel:+917420026989" className="hover:text-gold-light transition-colors">+91 7420026989</a>
              </p>
              <p>
                <a href="mailto:Contactanandlok@gmail.com" className="hover:text-gold-light transition-colors break-all">
                  Contactanandlok@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-sm text-primary-foreground/40 flex flex-col items-center justify-center gap-2 md:flex-row md:flex-wrap md:gap-2">
            <span>© {new Date().getFullYear()} Anandlok Ayurveda & Panchakarma. All rights reserved.</span>
            <span className="hidden md:inline">|</span>
            <span className="flex flex-wrap items-center justify-center gap-1">
              designed by
              <a
                href="https://algokami.tech/"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-primary-foreground/70 hover:text-gold-light transition-colors duration-300"
              >
                AlgoKami Tech Solutions
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
