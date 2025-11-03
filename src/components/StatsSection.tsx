"use client";

import { useState, useEffect, useCallback } from "react";
import { 
  UserGroupIcon,
  BoltIcon,
  CurrencyDollarIcon, 
} from "@heroicons/react/24/outline";

const stats = [
  {
    icon: <BoltIcon className="w-10 h-10" />,
    value: 500,
    prefix: "",
    suffix: "+",
    label: "local community solar projects in the marketplace"
  },
  {
    icon: <CurrencyDollarIcon className="w-8 h-8" />,
    value: 3,
    prefix: "$",
    suffix: "M+",
    label: "subscribers' estimated annual savings"
  },
  {
    icon: <UserGroupIcon className="w-8 h-8" />,
    value: 250,
    prefix: "",
    suffix: "+",
    label: "active subscribers and growing"
  }
];

interface StatsSectionProps {
  title?: string;
  subtitle?: string;
  stats?: Array<{
    icon: React.ReactNode;
    value: number;
    prefix: string;
    suffix: string;
    label: string;
  }>;
}

export function StatsSection({ 
  title = "Our Impact",
  subtitle = "Clean Earth Renewables is making a difference across the country",
  stats: customStats
}: StatsSectionProps) {
  const displayStats = customStats || stats;
  const [counts, setCounts] = useState(displayStats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  const animateCounters = useCallback(() => {
    displayStats.forEach((stat, index) => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = stat.value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timer);
        }
        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(current);
          return newCounts;
        });
      }, duration / steps);
    });
  }, [displayStats]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById("stats-section");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [hasAnimated, animateCounters]);

  return (
    <section id="stats-section" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.prefix}{counts[index].toLocaleString()}{stat.suffix}
              </div>
              <div className="text-lg text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 