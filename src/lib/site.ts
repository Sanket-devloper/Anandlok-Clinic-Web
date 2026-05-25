export const siteConfig = {
  name: "Anandlok Ayurveda & Panchakarma",
  defaultTitle: "Anandlok Ayurveda & Panchakarma | Multi Specialty Hospital Nagpur",
  defaultDescription:
    "Anandlok Ayurveda & Panchakarma in Nagpur offers authentic Panchakarma, Ayurvedic treatments, yoga, meditation, and holistic wellness care.",
  siteUrl: import.meta.env.VITE_SITE_URL ?? "https://anandlokayurveda.com",
};

export const buildCanonicalUrl = (pathname: string) => {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${siteConfig.siteUrl.replace(/\/$/, "")}${normalizedPath}`;
};
