import { ReactNode } from "react";
import Image from "next/image";

interface Step {
  title: string;
  description: string;
  icon?: ReactNode;
  image?: string;
}

interface VerticalTimelineCenteredProps {
  steps: Step[];
}

export function VerticalTimelineCentered({ steps }: VerticalTimelineCenteredProps) {
  return (
    <div className="relative w-full">
      <ul className="w-full space-y-12">
        {steps.map((step, idx) => (
          <li key={idx} className="grid grid-cols-12 items-center min-h-[10rem] relative py-8">
            {/* Left timeline column */}
            <div className="col-span-3 flex flex-col items-center relative z-10">
              {/* Bubble */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground font-bold text-3xl shadow-md relative">
                {idx + 1}
                {/* Absolutely positioned dashed line */}
                {idx < steps.length - 1 && (
                  <div
                    className="absolute left-1/2 top-full w-0.5 border-l-2 border-dashed border-primary/40"
                    style={{
                      height: 'calc(100% + 6rem)', // Increased gap between bubbles
                      transform: 'translateX(-50%)',
                    }}
                  />
                )}
              </div>
            </div>
            
            {/* Center text column - widest with centered text */}
            <div className="col-span-6 text-center px-6">
              <h4 className="text-xl font-semibold text-foreground mb-3">{step.title}</h4>
              <p className="text-muted-foreground text-base leading-relaxed max-w-md mx-auto">{step.description}</p>
            </div>
            
            {/* Right icon/image column */}
            <div className="col-span-3 flex justify-center items-center">
              {step.image ? (
                <div className="w-32 h-32 relative rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="w-32 h-32 flex items-center justify-center">
                  {step.icon}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
} 