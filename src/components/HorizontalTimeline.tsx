import { ReactNode } from "react";

interface TimelineStep {
  title: string;
  description: string;
  icon?: ReactNode;
  timeframe?: string;
  requirements?: string[];
}

interface HorizontalTimelineProps {
  steps: TimelineStep[];
  title?: string;
  subtitle?: string;
}

export function HorizontalTimeline({ steps, title, subtitle }: HorizontalTimelineProps) {
  return (
    <div className="w-full">
      {(title || subtitle) && (
        <div className="text-center mb-12">
          {title && <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>}
          {subtitle && <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>}
        </div>
      )}
      
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 hidden md:block" />
        
        {/* Timeline Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Timeline Point */}
              <div className="flex flex-col items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-xl">
                  {step.icon || (index + 1)}
                </div>
                {/* Connecting Line (mobile) */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute top-8 left-1/2 w-px h-8 bg-gradient-to-b from-primary/40 to-primary/20" />
                )}
              </div>
              
              {/* Content Card */}
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:border-primary/30 group-hover:bg-gradient-to-br from-card to-card/80">
                <h3 className="text-xl font-semibold text-foreground mb-3 text-center group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed mb-4">
                  {step.description}
                </p>
                
                {/* Timeframe */}
                {step.timeframe && (
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                      {step.timeframe}
                    </div>
                  </div>
                )}
                
                {/* Requirements */}
                {step.requirements && step.requirements.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground text-center">What you'll need:</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {step.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center justify-center">
                          <span className="w-1 h-1 bg-primary/60 rounded-full mr-2"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 