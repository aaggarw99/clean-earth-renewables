interface Step {
  title: string;
  description: string;
}

interface VerticalTimelineProps {
  steps: Step[];
}

export function VerticalTimeline({ steps }: VerticalTimelineProps) {
  return (
    <div className="relative">
      <ul className="space-y-0">
        {steps.map((step, idx) => (
          <li key={idx} className="flex items-start relative min-h-[6rem]">
            {/* Timeline column */}
            <div className="flex flex-col items-center w-16 relative z-10">
              {/* Bubble */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-2xl shadow-md">
                {idx + 1}
              </div>
              {/* Dashed line (except after last step) */}
              {idx < steps.length - 1 && (
                <div className="flex-1 w-px border-l-2 border-dashed border-primary/40 my-1" style={{ minHeight: '2.5rem' }} />
              )}
            </div>
            {/* Content column */}
            <div className="ml-4 flex-1 pt-1">
              <h4 className="text-xl font-semibold text-foreground mb-1">{step.title}</h4>
              <p className="text-muted-foreground text-base">{step.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
} 