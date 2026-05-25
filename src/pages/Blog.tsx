import React from "react";
import PageHero from "@/components/PageHero";
import BlogSection from "@/components/BlogSection";
import blogHero from "@/assets/Blog hero section.webp";
import { blogsData } from "@/lib/placeholders";
import Seo from "@/components/Seo";

const BlogPage = () => {
  return (
    <>
      <Seo
        title="Blog"
        description="Read Ayurveda articles, child wellness guidance, and practical health insights from the Anandlok Ayurveda journal."
        canonicalPath="/blog"
      />
      <PageHero
        image={blogHero}
        eyebrow="Anandlok Journal"
        title="Insights and Ayurvedic Guidance"
        subtitle="Thoughtful articles, wellness practices, and pediatric Ayurveda care."
      />
      <BlogSection posts={blogsData} />
    </>
  );
};

export default BlogPage;
