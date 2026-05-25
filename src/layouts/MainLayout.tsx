import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import CookieNotice from "@/components/CookieNotice";

const MainLayout: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = decodeURIComponent(location.hash.replace("#", ""));
      const target = document.getElementById(sectionId);

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.hash, location.key]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16 md:pt-20">
        <Outlet />
      </main>
      <Footer />
      <CookieNotice />
      <WhatsAppButton />
      <ScrollToTopButton />
    </div>
  );
};

export default MainLayout;
