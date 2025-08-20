import Image from "next/image";
import { ReactNode } from "react";

interface TimelineStep {
  number: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  icon?: ReactNode;
  timeframe?: string;
  requirements?: string[];
}

interface AlternatingTimelineProps {
  steps: TimelineStep[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function AlternatingTimeline({ 
  steps, 
  title, 
  subtitle, 
  className = "" 
}: AlternatingTimelineProps) {
  return (
    <div className={`w-full ${className}`}>
      {(title || subtitle) && (
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>}
          {subtitle && <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>}
        </div>
      )}
      
      <div className="space-y-16">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {/* Content Container */}
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
              index % 2 === 0 ? 'lg:grid-flow-col' : 'lg:grid-flow-col-dense'
            }`}>
              
              {/* Image Section */}
              <div className={`relative ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={step.imageSrc}
                    alt={step.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
              
              {/* Content Section */}
              <div className={`relative space-y-4 p-6 bg-muted/30 rounded-xl border border-border/50 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
                
                {/* Timeframe */}
                {step.timeframe && (
                  <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                    {step.timeframe}
                  </div>
                )}
                
                {/* Requirements */}
                {step.requirements && step.requirements.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">What you&apos;ll need:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {step.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary/60 rounded-full mr-2"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Step Number Bubble */}
                <div className="absolute bottom-4 right-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg shadow-xl border-2 border-white/20 backdrop-blur-sm">
                    {step.number}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 