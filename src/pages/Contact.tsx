import React from "react";
import ContactSection from "@/components/ContactSection";
import Seo from "@/components/Seo";

const ContactPage = () => {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Contact Anandlok Ayurveda in Nagpur by phone, email, WhatsApp, or visit our clinic for Ayurvedic consultation and Panchakarma."
        canonicalPath="/contact"
      />
      <ContactSection variant="contact" />
    </>
  );
};

export default ContactPage;
