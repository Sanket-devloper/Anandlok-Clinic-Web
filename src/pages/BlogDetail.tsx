import React from "react";
import { Link, useParams } from "react-router-dom";
import PageHero from "@/components/PageHero";
import blogHero from "@/assets/Blog hero section.webp";
import { blogPosts } from "@/lib/placeholders";
import Seo from "@/components/Seo";

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <>
        <Seo
          title="Blog Article Not Found"
          description="The requested Ayurveda blog article could not be found. Return to the main blog listing."
          noIndex
        />
        <section className="section-padding bg-background">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-3">Blog</p>
          <h1 className="section-heading mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The article you are looking for is not available. Please return to the blog list.
          </p>
          <Link className="text-primary font-medium" to="/blog">
            Back to Blog
          </Link>
        </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Seo
        title={post.title}
        description={post.excerpt}
        canonicalPath={`/blog/${post.slug}`}
      />
      <PageHero
        image={blogHero}
        eyebrow={post.tag}
        title={post.title}
        subtitle="Authentic Ayurvedic guidance for families and wellness seekers."
      />

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-2">{post.tag}</p>
              <p className="text-sm text-muted-foreground">{post.date}</p>
            </div>
            <Link className="text-sm font-medium text-primary" to="/blog">
              Back to all posts
            </Link>
          </div>

          <div className="space-y-6 mb-10">
            {post.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {post.sections.map((section) => (
            <div key={section.heading} className="mb-12">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-muted-foreground leading-relaxed mb-5">
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="space-y-3 text-muted-foreground list-disc pl-6">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="mb-10">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">{post.closing.heading}</h2>
            {post.closing.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-muted-foreground leading-relaxed mb-5">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="rounded-2xl border border-border bg-secondary/40 p-6 md:p-8">
            <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">{post.cta.heading}</h3>
            <p className="text-muted-foreground leading-relaxed">{post.cta.paragraph}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetail;
