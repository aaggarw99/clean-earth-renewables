"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeftIcon, ChevronRightIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  company: string;
  image: string;
  text: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
}

export function TestimonialsCarousel({
  testimonials,
  title = "What Our Clients Say",
  subtitle = "Hear from the people who trust Clean Earth Renewables"
}: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextTestimonial = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevTestimonial = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Create a rotated array of testimonials (only 3 at a time)
  const getRotatedTestimonials = () => {
    const rotated = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex - i + testimonials.length) % testimonials.length;
      rotated.push(testimonials[index]);
    }
    return rotated;
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Testimonials */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {getRotatedTestimonials().map((testimonial, index) => (
              <Card 
                key={`${testimonial.id}-${currentIndex}`} 
                className={`bg-card/80 backdrop-blur-sm border-border/50 shadow-xl h-96 transition-all duration-500 ease-in-out ${
                  index === 1 ? 'transform scale-100 opacity-100' : 'transform scale-90 opacity-70'
                } ${index === 1 ? 'border-t-4 border-t-primary' : ''}`}
              >
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <ChatBubbleLeftRightIcon className="w-5 h-5 text-primary" />
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-base text-muted-foreground leading-relaxed mb-6 text-center italic flex-1 overflow-y-auto">
                    {testimonial.text.split('**').map((part, index) => 
                      index % 2 === 0 ? (
                        <span key={index}>{part}</span>
                      ) : (
                        <span key={index} className="text-primary font-semibold">{part}</span>
                      )
                    )}
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center justify-center space-x-3 mt-auto">
                    <div className="relative">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                      />
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-foreground text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

                  {/* Navigation Buttons */}
          <div className="flex justify-center items-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background hover:border-primary/50 transition-all duration-200 shadow-lg"
              onClick={prevTestimonial}
              disabled={isTransitioning}
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background hover:border-primary/50 transition-all duration-200 shadow-lg"
              onClick={nextTestimonial}
              disabled={isTransitioning}
            >
              <ChevronRightIcon className="w-5 h-5" />
            </Button>
          </div>
      </div>
    </section>
  );
} 