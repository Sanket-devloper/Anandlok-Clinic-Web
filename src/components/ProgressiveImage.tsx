import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

type ProgressiveImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  wrapperClassName?: string;
  placeholderLabel?: string;
  fallbackLabel?: string;
  priority?: boolean;
};

const ProgressiveImage = ({
  className,
  wrapperClassName,
  placeholderLabel = "Loading image",
  fallbackLabel = "Image unavailable",
  priority = false,
  loading,
  src,
  alt,
  onLoad,
  onError,
  ...props
}: ProgressiveImageProps) => {
  const [status, setStatus] = useState(src ? "loading" : "error");

  useEffect(() => {
    setStatus(src ? "loading" : "error");
  }, [src]);

  return (
    <div className={cn("relative overflow-hidden", wrapperClassName)}>
      {status !== "loaded" ? (
        <div className="absolute inset-0">
          <Skeleton className="h-full w-full rounded-none" />
          <div className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.34))] px-4 text-center">
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-foreground/55">
              {status === "error" ? fallbackLabel : placeholderLabel}
            </span>
          </div>
        </div>
      ) : null}

      <img
        {...props}
        src={src}
        alt={alt}
        loading={loading ?? (priority ? "eager" : "lazy")}
        decoding="async"
        onLoad={(event) => {
          setStatus("loaded");
          onLoad?.(event);
        }}
        onError={(event) => {
          setStatus("error");
          onError?.(event);
        }}
        className={cn("block h-full w-full transition-opacity duration-500", status === "loaded" ? "opacity-100" : "opacity-0", className)}
      />
    </div>
  );
};

export default ProgressiveImage;