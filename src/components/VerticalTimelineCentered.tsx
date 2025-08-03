import { ReactNode } from "react";

interface Step {
  title: string;
  description: string;
  icon: ReactNode;
}

interface VerticalTimelineCenteredProps {
  steps: Step[];
}

export function VerticalTimelineCentered({ steps }: VerticalTimelineCenteredProps) {
  return (
    <div className="relative w-full">
      <ul className="w-full space-y-8">
        {steps.map((step, idx) => (
          <li key={idx} className="grid grid-cols-12 items-center min-h-[8rem] relative py-8">
            {/* Timeline column */}
            <div className="col-span-2 flex flex-col items-center relative z-10">
              {/* Bubble */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground font-bold text-3xl shadow-md relative">
                {idx + 1}
                {/* Absolutely positioned dashed line */}
                {idx < steps.length - 1 && (
                  <div
                    className="absolute left-1/2 top-full w-0.5 border-l-2 border-dashed border-primary/40"
                    style={{
                      height: 'calc(100% + 5rem)', // 2rem gap between bubbles
                      transform: 'translateX(-50%)',
                    }}
                  />
                )}
              </div>
            </div>
            {/* Center text column */}
            <div className="col-span-6 text-center px-2">
              <h4 className="text-xl font-semibold text-foreground mb-1">{step.title}</h4>
              <p className="text-muted-foreground text-base">{step.description}</p>
            </div>
            {/* Right icon/image column */}
            <div className="col-span-4 flex justify-center items-center">
              {step.icon}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
} 