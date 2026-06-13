import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { buildCanonicalUrl, siteConfig } from "@/lib/site";

type SeoProps = {
  title?: string;
  fullTitle?: string;
  description?: string;
  noIndex?: boolean;
  canonicalPath?: string;
};

const Seo = ({ title, fullTitle, description, noIndex = false, canonicalPath }: SeoProps) => {
  const location = useLocation();
  const pageTitle = fullTitle ?? (title ? `${title} | ${siteConfig.name}` : siteConfig.defaultTitle);
  const pageDescription = description ?? siteConfig.defaultDescription;
  const canonicalUrl = buildCanonicalUrl(canonicalPath ?? location.pathname);

  useEffect(() => {
    document.title = pageTitle;

    const ensureMetaTag = (selector: string, attributes: Record<string, string>) => {
      let element = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector);
      if (!element) {
        element = document.createElement(selector.startsWith("link") ? "link" : "meta");
        document.head.appendChild(element);
      }

      Object.entries(attributes).forEach(([key, value]) => {
        element?.setAttribute(key, value);
      });
    };

    ensureMetaTag('meta[name="description"]', { name: "description", content: pageDescription });
    ensureMetaTag('meta[name="robots"]', { name: "robots", content: noIndex ? "noindex,nofollow" : "index,follow" });
    ensureMetaTag('meta[property="og:title"]', { property: "og:title", content: pageTitle });
    ensureMetaTag('meta[property="og:description"]', { property: "og:description", content: pageDescription });
    ensureMetaTag('meta[property="og:type"]', { property: "og:type", content: "website" });
    ensureMetaTag('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
    ensureMetaTag('meta[property="og:image"]', { property: "og:image", content: siteConfig.shareImage });
    ensureMetaTag('meta[name="twitter:title"]', { name: "twitter:title", content: pageTitle });
    ensureMetaTag('meta[name="twitter:description"]', { name: "twitter:description", content: pageDescription });
    ensureMetaTag('meta[name="twitter:url"]', { name: "twitter:url", content: canonicalUrl });
    ensureMetaTag('meta[name="twitter:image"]', { name: "twitter:image", content: siteConfig.shareImage });
    ensureMetaTag('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);
  }, [canonicalUrl, noIndex, pageDescription, pageTitle]);

  return null;
};

export default Seo;
