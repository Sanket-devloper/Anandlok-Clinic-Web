export const siteConfig = {
  name: "Anandlok Ayurveda",
  defaultTitle: "Anandlok Ayurveda | Best Ayurveda & Panchakarma Wellness Hospital in Nagpur",
  defaultDescription:
    "Anandlok Ayurveda & Panchakarma in Nagpur offers authentic Panchakarma, Ayurvedic treatments, yoga, meditation, and holistic wellness care.",
  siteUrl: import.meta.env.VITE_SITE_URL ?? "https://anandlokayurveda.com",
  shareImage:
    "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/627f4dc9-3562-437c-b398-89b5549fafd5/id-preview-6bafbbe6--1e223890-e794-4638-a21e-97ec27605337.lovable.app-1775553939649.png",
};

export const buildCanonicalUrl = (pathname: string) => {
  const normalizedPath = pathname === "/" ? "/" : pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${siteConfig.siteUrl.replace(/\/$/, "")}${normalizedPath}`;
};
