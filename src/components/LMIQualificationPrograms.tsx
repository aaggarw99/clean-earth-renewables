"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";

interface Program {
  name: string;
  logo: string;
  logoType: "png" | "svg";
}

const programs: Program[] = [
  { name: "SNAP", logo: "SNAP", logoType: "png" },
  { name: "Medicaid", logo: "MEDICAID", logoType: "svg" },
  { name: "WIC", logo: "WIC", logoType: "png" },
  { name: "Lifeline", logo: "LIFELINE", logoType: "png" },
  { name: "LIHEAP", logo: "LIHEAP", logoType: "png" },
  { name: "SSI", logo: "SSI", logoType: "png" },
  { name: "Section 8 Housing Choice Voucher", logo: "SECTION 8 HOUSING CHOICE VOUCHER", logoType: "png" },
  { name: "National School Lunch Program", logo: "NATIONAL SCHOOL LUNCH PROGRAM", logoType: "png" },
];

interface LMIQualificationProgramsProps {
  className?: string;
}

export function LMIQualificationPrograms({ className = "" }: LMIQualificationProgramsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  return (
    <span className={`relative inline-block ${className}`}>
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
        className="text-primary hover:text-primary/80 font-semibold underline decoration-2 underline-offset-2 transition-colors text-base"
      >
        Are you a ComEd customer?
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden transition-opacity duration-200"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Popover */}
          <div
            ref={popoverRef}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[calc(100vw-2rem)] max-w-4xl bg-card border-2 border-primary/30 rounded-xl p-6 md:p-8 shadow-2xl z-50 md:shadow-xl"
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2 mb-3">
                <CheckCircleIcon className="w-8 h-8 text-primary" />
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Automatic Qualification for ComEd Customers
                </h3>
              </div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                If you&apos;re a ComEd customer and actively participate in any of these programs, 
                you&apos;re automatically qualified to start saving with our enhanced LMI community solar program.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-4 bg-background/80 rounded-lg border border-border/50 hover:border-primary/50 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 flex items-center justify-center">
                    <Image
                      src={`/assets/images/lmi/${program.logo}.${program.logoType}`}
                      alt={program.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 80px, 96px"
                    />
                  </div>
                  <p className="text-xs md:text-sm text-center text-muted-foreground font-medium leading-tight">
                    {program.name}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Don&apos;t see your program? You may still qualify through income-based eligibility. 
                <span className="text-primary font-semibold"> Contact us to learn more.</span>
              </p>
            </div>
          </div>
        </>
      )}
    </span>
  );
}
