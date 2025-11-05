"use client";

import { useState, useEffect } from "react";

interface RotatingTextProps {
  texts: string[];
  interval?: number;
  className?: string;
}

export function RotatingText({ 
  texts, 
  interval = 3000,
  className = "" 
}: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const fadeDuration = 700; // Duration for fade out and fade in
    const timer = setInterval(() => {
      // Fade out
      setOpacity(0);
      
      // After fade out completes, change text
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        // Use requestAnimationFrame to ensure DOM updates before fade in
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setOpacity(1);
          });
        });
      }, fadeDuration);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <div className={`relative min-h-[4rem] flex items-center justify-center px-4 ${className}`}>
      <div
        className="text-base md:text-lg text-muted-foreground transition-opacity duration-700 ease-in-out text-center leading-relaxed"
        style={{ opacity }}
      >
        {texts[currentIndex]}
      </div>
    </div>
  );
}
