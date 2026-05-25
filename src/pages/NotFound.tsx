import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Seo from "@/components/Seo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you are looking for does not exist or may have been moved."
        noIndex
      />
      <ErrorPage
        title="Page not found"
        message="The page you are looking for does not exist or may have been moved."
        detail={`We could not find ${location.pathname}. Check the address or return to the home page.`}
      />
    </>
  );
};

export default NotFound;
