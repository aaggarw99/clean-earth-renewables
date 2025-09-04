import Image from "next/image";
import { cn } from "@/lib/utils";

interface BlogImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  variant?: "full" | "left" | "right" | "center";
}

export function BlogImage({
  src,
  alt,
  caption,
  className,
  width = 800,
  height = 600,
  priority = false,
  variant = "full"
}: BlogImageProps) {
  const containerClasses = cn(
    "my-8",
    {
      "w-full": variant === "full",
      "float-left mr-6 mb-4 w-1/2": variant === "left",
      "float-right ml-6 mb-4 w-1/2": variant === "right",
      "mx-auto w-3/4": variant === "center"
    },
    className
  );

  return (
    <figure className={containerClasses}>
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto object-cover"
          priority={priority}
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-muted-foreground text-center italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// Convenience components for common image layouts
export function BlogImageFull({ src, alt, caption, priority }: Omit<BlogImageProps, "variant">) {
  return (
    <BlogImage
      src={src}
      alt={alt}
      caption={caption}
      variant="full"
      priority={priority}
    />
  );
}

export function BlogImageLeft({ src, alt, caption, priority }: Omit<BlogImageProps, "variant">) {
  return (
    <BlogImage
      src={src}
      alt={alt}
      caption={caption}
      variant="left"
      priority={priority}
    />
  );
}

export function BlogImageRight({ src, alt, caption, priority }: Omit<BlogImageProps, "variant">) {
  return (
    <BlogImage
      src={src}
      alt={alt}
      caption={caption}
      variant="right"
      priority={priority}
    />
  );
}

export function BlogImageCenter({ src, alt, caption, priority }: Omit<BlogImageProps, "variant">) {
  return (
    <BlogImage
      src={src}
      alt={alt}
      caption={caption}
      variant="center"
      priority={priority}
    />
  );
} 