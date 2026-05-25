import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BookAppointmentDialog from "@/components/BookAppointmentDialog";
import logo from "@/assets/logo.webp";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Treatments", to: "/programs" },
  { label: "Gallery", to: "/gallery" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <Link to="/" className="flex items-center min-w-0 shrink-0">
          <img
            src={logo}
            alt="Anandlok Ayurveda"
            className="h-32 w-auto max-w-[360px] object-contain md:h-[6rem] lg:h-[7rem]"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+917420026989" className="flex items-center gap-2 text-sm text-primary font-medium">
            <Phone className="h-4 w-4" /> +91 7420026989
          </a>
          <Button size="lg" onClick={() => setAppointmentOpen(true)}>
            Book Appointment
          </Button>
        </div>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-primary py-2 transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Button
              className="mt-2 w-full"
              onClick={() => {
                setOpen(false);
                setAppointmentOpen(true);
              }}
            >
              Book Appointment
            </Button>
          </div>
        </div>
      )}

      <BookAppointmentDialog open={appointmentOpen} onOpenChange={setAppointmentOpen} />
    </nav>
  );
};

export default Navbar;
