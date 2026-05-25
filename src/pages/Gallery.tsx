import React, { useState, useMemo, useEffect } from "react";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Camera, Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import galleryHero from "@/assets/Gallery hero section.webp";
import Seo from "@/components/Seo";

type GalleryPhotoItem = {
  id: string;
  type: "photos";
  title: string;
  src: string;
};

type GalleryNewsItem = {
  id: string;
  type: "news";
  title: string;
  src: string;
};

type GalleryVideoItem = {
  id: string;
  type: "videos";
  title: string;
  embedUrl: string;
};

type GalleryItem = GalleryPhotoItem | GalleryNewsItem | GalleryVideoItem;

const videoItems: GalleryVideoItem[] = [
  {
    id: "video-1",
    type: "videos",
    title: "Anandlok Ayurveda Video 1",
    embedUrl: "https://www.youtube.com/embed/jRp5HbSelqY",
  },
  {
    id: "video-2",
    type: "videos",
    title: "Anandlok Ayurveda Video 2",
    embedUrl: "https://www.youtube.com/embed/qH3Chp_FJQc",
  },
  {
    id: "video-3",
    type: "videos",
    title: "Anandlok Ayurveda Video 3",
    embedUrl: "https://www.youtube.com/embed/WQGMmYoilqQ",
  },
  {
    id: "video-4",
    type: "videos",
    title: "Anandlok Ayurveda Video 4",
    embedUrl: "https://www.youtube.com/embed/SoeYTUDZCqM",
  },
  {
    id: "video-5",
    type: "videos",
    title: "Anandlok Ayurveda Video 5",
    embedUrl: "https://www.youtube.com/embed/QVkJSJqdYa8",
  },
  {
    id: "video-6",
    type: "videos",
    title: "Anandlok Ayurveda Video 6",
    embedUrl: "https://www.youtube.com/embed/EjDu2D2ntKE",
  },
];

const galleryImageSources = import.meta.glob("../assets/gallery/*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const galleryNewsSources = import.meta.glob("../assets/gallery/news/*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const GalleryPage = () => {
  const [filter, setFilter] = useState<"photos" | "videos" | "news">("photos");

  // Build photo items from files in src/assets/gallery
  const photoItems = useMemo(() => {
    const keys = Object.keys(galleryImageSources || {});

    // Sort keys by numeric suffix when filenames are like image-<n>.webp
    keys.sort((a, b) => {
      const fa = (a.split("/").pop() || "").replace(/\.webp$/i, "");
      const fb = (b.split("/").pop() || "").replace(/\.webp$/i, "");

      const naMatch = fa.match(/image-(\d+)/i);
      const nbMatch = fb.match(/image-(\d+)/i);

      const na = naMatch ? parseInt(naMatch[1], 10) : NaN;
      const nb = nbMatch ? parseInt(nbMatch[1], 10) : NaN;

      if (!isNaN(na) && !isNaN(nb)) return na - nb;
      if (!isNaN(na)) return -1;
      if (!isNaN(nb)) return 1;
      return fa.localeCompare(fb);
    });

    return keys.map((k, i): GalleryPhotoItem => {
      const path = galleryImageSources[k];
      const file = (k.split("/").pop() || "").replace(/\.webp$/i, "");
      const numMatch = file.match(/image-(\d+)/i);
      const num = numMatch ? parseInt(numMatch[1], 10) : i + 1;
      const title = `Image ${num}`;

      return { id: `image-${num}`, type: "photos", title, src: path };
    });
  }, []);

  // Build news/press items from src/assets/gallery/news
  // Sort by numeric suffix when filenames contain numbers (e.g. press-1.webp)
  const newsItems = useMemo(() => {
    const keys = Object.keys(galleryNewsSources || {});

    keys.sort((a, b) => {
      const fa = (a.split("/").pop() || "").replace(/\.webp$/i, "");
      const fb = (b.split("/").pop() || "").replace(/\.webp$/i, "");

      const naMatch = fa.match(/(\d+)(?!.*\d)/);
      const nbMatch = fb.match(/(\d+)(?!.*\d)/);

      const na = naMatch ? parseInt(naMatch[1], 10) : NaN;
      const nb = nbMatch ? parseInt(nbMatch[1], 10) : NaN;

      if (!isNaN(na) && !isNaN(nb)) return na - nb;
      if (!isNaN(na)) return -1;
      if (!isNaN(nb)) return 1;
      return fa.localeCompare(fb);
    });

    return keys.map((k, i): GalleryNewsItem => {
      const path = galleryNewsSources[k];
      const file = (k.split("/").pop() || "").replace(/\.webp$/i, "");
      const numMatch = file.match(/(\d+)(?!.*\d)/);
      const num = numMatch ? parseInt(numMatch[1], 10) : i + 1;
      const title = `News ${num}`;

      return { id: `news-${num}`, type: "news", title, src: path };
    });
  }, []);

  // Combined image items used for the lightbox (photos + news)
  const imageItems = useMemo(() => [...photoItems, ...newsItems], [photoItems, newsItems]);

  const galleryItems = useMemo(() => [...imageItems, ...videoItems], [imageItems]);
  const filteredItems = galleryItems.filter((item) => item.type === filter);

  // Lightbox scoped to the active filter group (photos or news)
  const [lightboxGroup, setLightboxGroup] = useState<"photos" | "news" | null>(null);
  const [lightboxGroupIndex, setLightboxGroupIndex] = useState<number | null>(null);

  // Keyboard navigation and escape to close — scoped to the active group
  useEffect(() => {
    if (lightboxGroupIndex === null || lightboxGroup === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxGroup(null);
        setLightboxGroupIndex(null);
        return;
      }

      if (e.key === "ArrowLeft") {
        setLightboxGroupIndex((i) => {
          if (i === null) return null;
          const len = lightboxGroup === "news" ? newsItems.length : photoItems.length;
          return i <= 0 ? len - 1 : i - 1;
        });
      }

      if (e.key === "ArrowRight") {
        setLightboxGroupIndex((i) => {
          if (i === null) return null;
          const len = lightboxGroup === "news" ? newsItems.length : photoItems.length;
          return i >= len - 1 ? 0 : i + 1;
        });
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxGroupIndex, lightboxGroup, photoItems.length, newsItems.length]);

  return (
    <>
      <Seo
        title="Gallery"
        description="View photos, videos, and news highlights from Anandlok Ayurveda's therapies, wellness programs, and patient care spaces."
        canonicalPath="/gallery"
      />
      <PageHero
        image={galleryHero}
        eyebrow="Anandlok Gallery"
        title="Healing Spaces and Moments"
        subtitle="A glimpse into our therapies, wellness programs, and patient care environment."
      />

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-3">Gallery</p>
            <h2 className="section-heading mb-2">Visual Stories of Care</h2>
            <div className="gold-divider" />
            <p className="section-subheading mb-8">Explore our gallery of healing moments and wellness spaces.</p>

            {/* Filter Buttons */}
            <div className="flex justify-center gap-4 mb-12">
              <Button
                onClick={() => setFilter("photos")}
                variant={filter === "photos" ? "default" : "outline"}
                className={cn(
                  "gap-2 px-6 py-2 rounded-full font-medium transition-all",
                  filter === "photos"
                    ? "bg-primary text-primary-foreground"
                    : "border-2 border-primary/30 text-primary hover:bg-primary/5"
                )}
              >
                <Camera size={18} />
                Photos
              </Button>
                <Button
                  onClick={() => setFilter("news")}
                  variant={filter === "news" ? "default" : "outline"}
                  className={cn(
                    "gap-2 px-6 py-2 rounded-full font-medium transition-all",
                    filter === "news"
                      ? "bg-primary text-primary-foreground"
                      : "border-2 border-primary/30 text-primary hover:bg-primary/5"
                  )}
                >
                  <Camera size={18} />
                  News
                </Button>

                <Button
                  onClick={() => setFilter("videos")}
                  variant={filter === "videos" ? "default" : "outline"}
                  className={cn(
                    "gap-2 px-6 py-2 rounded-full font-medium transition-all",
                    filter === "videos"
                      ? "bg-primary text-primary-foreground"
                      : "border-2 border-primary/30 text-primary hover:bg-primary/5"
                  )}
                >
                  <Play size={18} />
                  Videos
                </Button>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => {
              const isPhoto = item.type === "photos";
              const isNews = item.type === "news";
              const isVideo = item.type === "videos";
              // find index in combined imageItems for lightbox navigation
              const imageIndex = isPhoto || isNews ? imageItems.findIndex((p) => p.id === item.id) : -1;

              return (
                <div key={item.id} className="premium-card !p-0 overflow-hidden group">
                  <div
                    className="aspect-[4/3] bg-gradient-to-br from-primary/10 via-secondary to-gold/10 flex items-center justify-center relative"
                    onClick={() => {
                      if (isPhoto || isNews) {
                        const group = isPhoto ? photoItems : newsItems;
                        const idx = group.findIndex((p) => p.id === item.id);
                        if (idx >= 0) {
                          setLightboxGroup(isPhoto ? "photos" : "news");
                          setLightboxGroupIndex(idx);
                        }
                      }
                    }}
                  >
                    {/* Photo */}
                    {isPhoto ? (
                      <img src={item.src} alt={item.title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                    ) : null}

                    {isNews ? (
                      <img src={item.src} alt={item.title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                    ) : null}

                    {/* Inline YouTube embed for videos */}
                    {isVideo ? (
                      <iframe
                        src={item.embedUrl}
                        title={item.title}
                        className="absolute inset-0 h-full w-full"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    ) : null}

                    {item.type === "videos" ? (
                      <div className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-[11px] font-medium tracking-[0.2em] text-white uppercase">
                        Watch on site
                      </div>
                    ) : null}
                  </div>
                  {item.type === "videos" ? (
                    <div className="p-4">
                      <h3 className="font-serif text-base font-semibold text-foreground">{item.title}</h3>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>

          {/* Lightbox modal (scoped to current filter group) */}
          {lightboxGroupIndex !== null && lightboxGroup !== null && (() => {
            const group = lightboxGroup === "news" ? newsItems : photoItems;
            const current = group[lightboxGroupIndex];
            if (!current) return null;

            return (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
                <button
                  className="absolute top-6 right-6 z-60 rounded-full bg-black/50 p-2 text-white"
                  onClick={() => {
                    setLightboxGroup(null);
                    setLightboxGroupIndex(null);
                  }}
                  aria-label="Close"
                >
                  <X className="h-6 w-6" />
                </button>

                <button
                  className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white"
                  onClick={() => setLightboxGroupIndex((i) => (i === null ? null : (i <= 0 ? group.length - 1 : i - 1)))}
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <div className="max-h-full max-w-full mx-auto">
                  <img src={current.src} alt={current.title} className="max-h-[90vh] max-w-[90vw] object-contain" />
                </div>

                <button
                  className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white"
                  onClick={() => setLightboxGroupIndex((i) => (i === null ? null : (i >= group.length - 1 ? 0 : i + 1)))}
                  aria-label="Next"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            );
          })()}

          {/* Empty state */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Coming soon...</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

// Helper function for conditional classes
function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default GalleryPage;
