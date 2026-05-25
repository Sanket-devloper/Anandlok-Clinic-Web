import React from "react";
import { useParams } from "react-router-dom";
import Seo from "@/components/Seo";

const ProgramDetail = () => {
  const { slug } = useParams();
  const title = slug ? slug.replace(/-/g, " ") : "Program Detail";

  return (
    <>
      <Seo
        title={title}
        description="Detailed information about an Ayurvedic and Panchakarma program at Anandlok Ayurveda."
        canonicalPath={slug ? `/programs/${slug}` : "/programs"}
      />
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-4">Program: {slug}</h1>
        <p className="text-muted-foreground">Program details will be added here.</p>
      </div>
    </>
  );
};

export default ProgramDetail;
