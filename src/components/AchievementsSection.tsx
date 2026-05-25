import { awardsData } from "@/lib/placeholders";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const achievementImageSources = import.meta.glob("../assets/achievements/*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const achievementImageUrlsByYear = Object.entries(achievementImageSources).reduce<Record<string, string>>((accumulator, [path, imageUrl]) => {
  const fileName = path.split("/").pop() ?? "";
  const yearKey = fileName.replace(/^award-/, "").replace(/\.webp$/i, "");

  if (yearKey) {
    accumulator[yearKey] = imageUrl;
  }

  return accumulator;
}, {});

type AchievementsSectionProps = {
  limit?: number;
  showViewAll?: boolean;
};

const AchievementsSection = ({ limit, showViewAll = false }: AchievementsSectionProps) => {
  const { ref, isVisible } = useScrollAnimation();
  const sortedAwards = [...awardsData].sort((left, right) => Number(right.year) - Number(left.year));
  const visibleAwards = typeof limit === "number" ? sortedAwards.slice(0, limit) : sortedAwards;

  const getAchievementImage = (awardYear: string) => {
    return achievementImageUrlsByYear[awardYear] ?? null;
  };

  const renderAwardImage = (awardTitle: string, imageUrl: string | null) => {
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
        <img src={imageUrl} alt={awardTitle} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
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
                      <article key={`${copyIdx}-${award.title}-${award.year}`} className="premium-card !p-0 overflow-hidden w-[300px] md:w-[340px] flex flex-col shrink-0 group">
                        {renderAwardImage(award.title, getAchievementImage(award.year))}
                        <div className="p-6 flex-1 flex flex-col justify-between">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">{award.year}</p>
                            <h3 className="font-serif text-base md:text-lg font-semibold text-foreground mb-3 leading-snug">
                              {award.title}
                            </h3>
                          </div>
                          {award.note && <p className="text-sm text-muted-foreground leading-relaxed">{award.note}</p>}
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
              <article key={`${award.title}-${award.year}`} className="premium-card !p-0 overflow-hidden group">
                {renderAwardImage(award.title, getAchievementImage(award.year))}
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">{award.year}</p>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2 leading-snug">
                    {award.title}
                  </h3>
                  {award.note && <p className="text-sm text-muted-foreground">{award.note}</p>}
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
