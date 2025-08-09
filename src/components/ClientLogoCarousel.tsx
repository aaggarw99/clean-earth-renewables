"use client";

import Image from "next/image";

interface ClientLogo {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface ClientLogoCarouselProps {
  logos: ClientLogo[];
  title?: string;
  subtitle?: string;
  speed?: number; // animation duration in seconds
  gap?: number; // gap between logos in pixels
}

export function ClientLogoCarousel({
  logos,
  title = "Trusted By",
  subtitle = "Leading organizations choose Clean Earth Renewables",
  speed = 20,
  gap = 128
}: ClientLogoCarouselProps) {
  // Duplicate logos to create seamless loop
  const duplicatedLogos = [...logos, ...logos];
  
  // Calculate the total width of one set of logos for precise animation
  const logoWidth = 120; // Default logo width
  const totalLogoWidth = logos.length * logoWidth + (logos.length - 1) * gap;

  return (
    <section className="py-20 bg-gradient-to-r from-background via-primary/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Logo Carousel */}
        <div className="relative overflow-hidden py-8">
          <div 
            className="flex items-center"
            style={{ 
              gap: `${gap}px`,
              animation: `scroll ${speed}s linear infinite`,
              '--scroll-distance': `-${totalLogoWidth}px`
            } as React.CSSProperties}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.src}-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
                style={{
                  width: logo.width || 120,
                  height: logo.height || 60
                }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width || 120}
                  height={logo.height || 60}
                  className="object-contain transition-all duration-300 opacity-80 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 