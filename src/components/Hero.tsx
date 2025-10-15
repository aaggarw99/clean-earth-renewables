"use client";

import { Button } from "@/components/ui/button";
import { VideoBackground } from "./VideoBackground";
import { scrollToSectionWithNavbar } from "@/utils/navigation";
import Image from "next/image";

export function Hero() {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Video Background - positioned to cover hero section */}
      <div className="absolute inset-0 w-full h-full">
        <VideoBackground 
          src="/assets/videos/hero/main.mp4"
          poster="/assets/images/backgrounds/hero-poster.png"
          className="w-full h-full"
          overlayOpacity={0.4}
        >
          <div className="w-full h-full" />
        </VideoBackground>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Powering Your Future with{" "}
            <span className="text-primary">Clean Energy</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Save up to 20% on electricity costs. Clean Earth Renewables brings environmental and economic benefits to your neighborhood.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold"
              onClick={() => scrollToSectionWithNavbar('contact-form')}
            >
              Get Energy Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-background px-8 py-4 text-lg font-semibold bg-white/10 backdrop-blur-sm"
              onClick={() => scrollToSectionWithNavbar('services-section')}
            >
              Learn More
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-sm text-white/70 mb-4">Trusted by America&apos;s leading companies</p>
            <div className="flex justify-center items-center space-x-12 opacity-80">
            <Image src="/assets/images/clients/hilton.png" alt="Hampton Inn" width={100} height={100} />
            <Image src="/assets/images/clients/dq.png" alt="Dairy Queen" width={100} height={100} />
            <Image src="/assets/images/clients/subway.png" alt="Subway" width={100} height={100} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center bg-white/10 backdrop-blur-sm">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
} 