const videos = [
  {
    title: "Anandlok Ayurveda Video 1",
    url: "https://www.youtube.com/embed/jRp5HbSelqY",
  },
  {
    title: "Anandlok Ayurveda Video 2",
    url: "https://www.youtube.com/embed/qH3Chp_FJQc",
  },
  {
    title: "Anandlok Ayurveda Video 3",
    url: "https://www.youtube.com/embed/WQGMmYoilqQ",
  },
];

const VideoSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-3">Watch</p>
          <h2 className="section-heading mb-2">Experience Our Healing</h2>
          <div className="gold-divider" />
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory md:grid md:gap-8 md:grid-cols-2 xl:grid-cols-3 md:max-w-7xl md:mx-auto md:overflow-visible md:px-0 md:pb-0">
          {videos.map((v) => (
            <div
              key={v.title}
              className="premium-card !p-0 overflow-hidden snap-center min-w-[86%] sm:min-w-[72%] md:min-w-0 md:w-auto shrink-0 md:shrink"
            >
              <div className="relative aspect-video bg-black">
                <iframe
                  src={v.url}
                  title={v.title}
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-semibold text-foreground">{v.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
