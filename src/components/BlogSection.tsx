import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import blogThumbnail from "@/assets/blog-thumbnail.webp";
import ProgressiveImage from "@/components/ProgressiveImage";

type Blog = { slug: string; title: string; excerpt: string; date?: string; tag?: string; thumbnail?: string };

const defaultBlogs: Blog[] = [
  {
    slug: "swarnaprashana-sanskar",
    title: "Swarnaprashana Sanskar in Ayurveda",
    excerpt: "A traditional immunity ritual that supports memory, digestion, and overall growth.",
    date: "May 18, 2026",
    tag: "Child Wellness",
  },
];

const BlogSection = ({ posts }: { posts?: Blog[] }) => {
  return (
    <section id="blog" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-3">Insights</p>
          <h2 className="section-heading mb-2">From Our Journal</h2>
          <div className="gold-divider" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {(posts ?? defaultBlogs).map((b) => (
            <Link key={b.slug} to={`/blog/${b.slug}`} className="premium-card group !p-0 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-primary/10 via-secondary to-gold/10 flex items-center justify-center relative overflow-hidden">
                <ProgressiveImage
                  src={b.thumbnail ?? blogThumbnail}
                  alt={b.title}
                  className="object-cover"
                  wrapperClassName="absolute inset-0"
                  placeholderLabel="Loading blog image"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  {b.tag && <span className="text-xs font-semibold uppercase tracking-wider text-accent">{b.tag}</span>}
                  {b.date && (
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {b.date}
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300 leading-snug">
                  {b.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{b.excerpt}</p>
                <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                  Read More <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
