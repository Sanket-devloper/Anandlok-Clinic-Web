import { awardsData } from "@/lib/placeholders";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import ProgressiveImage from "@/components/ProgressiveImage";

const achievementImageSources = import.meta.glob("../assets/achievements/*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const achievementSubtitles: Record<string, string> = {
  "award-2024(2)": "Ba and bapu Award 2024",
  "award-2024(1)": "Ayurveda Rathyatra Award 2024",
  "award-2022(2)": "Ayurveda Parwa Award 2022",
  "award-2022(3)": "Dhanwantari Award by Arogya Bharti 2022",
  "award-2022(1)": "Gramrogya swarajya corona warrior Award 2022",
  "award-2026": "Narishakti Sanman Award 2026",
  "award-2025": "Sakal Prabahvshali Ayurvedacharya Award 2025",
  "award-2024": "VD P.T Joshi Ayurveda Ratna Award 2024",
  "award-2021": "Ayurmani Rural Health Award 2021",
  "award-2020": "Sansthamitra Award 2020",
  "award-2017": "Ayurved Pariwar Dhanwantari Award 2017",
  "award-2014": "VD.Khadiwale Award 2014",
  "award-2024(3)": "Gurusmaran Award 2024",
};

const achievementCards = Object.entries(achievementImageSources)
  .map(([path, imageUrl]) => {
    const fileName = path.split("/").pop() ?? "";
    const imageBaseName = fileName.replace(/\.webp$/i, "");
    const titleMatch = imageBaseName.match(/^award-(\d{4})(?:\((\d+)\))?$/i);
    const yearMatch = fileName.match(/award-(\d{4})/i);
    // Use only the year for the displayed title (e.g., "Award 2024")
    const title = titleMatch ? `Award ${titleMatch[1]}` : imageBaseName.replace(/^award-/i, "Award ");

    return {
      title: title || "Award Placeholder",
      subtitle: achievementSubtitles[imageBaseName] ?? "",
      year: yearMatch?.[1] ?? "",
      imageUrl,
      fileName,
    };
  })
  .filter((award) => award.year !== "2023")
  .sort((left, right) => Number(right.year) - Number(left.year) || left.fileName.localeCompare(right.fileName, undefined, { numeric: true }));

type AchievementsSectionProps = {
  limit?: number;
  showViewAll?: boolean;
};

const AchievementsSection = ({ limit, showViewAll = false }: AchievementsSectionProps) => {
  const { ref, isVisible } = useScrollAnimation();
  const visibleAwards = typeof limit === "number" ? achievementCards.slice(0, limit) : achievementCards;

  const renderAwardImage = (awardTitle: string, imageUrl: string) => {
    if (!imageUrl) {
      return (
        <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 via-secondary to-gold/10 flex items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,169,107,0.15),transparent_60%)]" />
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium relative z-10">Award Image</span>
        </div>
      );
    }

    return (
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <ProgressiveImage
          src={imageUrl}
          alt={awardTitle}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          wrapperClassName="h-full w-full"
          placeholderLabel="Loading award image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
      </div>
    );
  };

  return (
    <section id="achievements" className="section-padding bg-secondary/30">
      <div className="container mx-auto" ref={ref}>
        <div
          className={`text-center mb-10 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-100 translate-y-0 md:opacity-0 md:translate-y-8"
          }`}
        >
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-3">Achievements</p>
          <h2 className="section-heading mb-2">Awards and Achievements</h2>
          <div className="gold-divider" />
        </div>

        {showViewAll ? (
          <>
            <div
              className={`relative achievements-marquee transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-100 translate-y-0 md:opacity-0 md:translate-y-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="achievements-track">
                {[0, 1].map((copyIdx) => (
                  <div key={copyIdx} className="flex gap-6 pr-6 shrink-0" aria-hidden={copyIdx === 1}>
                    {visibleAwards.map((award) => (
                      <article key={`${copyIdx}-${award.fileName}`} className="premium-card !p-0 overflow-hidden w-[300px] md:w-[340px] flex flex-col shrink-0 group">
                        {renderAwardImage(award.title, award.imageUrl)}
                        <div className="p-6 flex-1 flex flex-col justify-between">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">{award.year}</p>
                            <h3 className="font-serif text-base md:text-lg font-semibold text-foreground mb-3 leading-snug">
                              {award.title}
                            </h3>
                            {award.subtitle ? (
                              <p className="text-sm leading-6 text-muted-foreground">
                                {award.subtitle}
                              </p>
                            ) : null}
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                ))}
              </div>

              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-secondary/30 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-secondary/30 to-transparent" />
            </div>

            <div className="mt-10 text-center">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/about#achievements">View All Achievements</Link>
              </Button>
            </div>
          </>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleAwards.map((award) => (
              <article key={award.fileName} className="premium-card !p-0 overflow-hidden group">
                {renderAwardImage(award.title, award.imageUrl)}
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">{award.year}</p>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2 leading-snug">{award.title}</h3>
                  {award.subtitle ? <p className="text-sm leading-6 text-muted-foreground">{award.subtitle}</p> : null}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AchievementsSection;
