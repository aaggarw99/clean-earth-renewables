"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  items?: FAQItem[];
}

export function FAQ({ 
  title = "Frequently Asked Questions", 
  subtitle = "Everything you need to know about business community solar",
  items = [
    {
      question: "How much can my business save with community solar?",
      answer: "Businesses typically save 10-15% on their annual electricity costs through community solar subscriptions. Savings vary based on your current energy usage and local utility rates."
    },
    {
      question: "Do I need to install anything on my business property?",
      answer: "No installation required! Community solar works by subscribing to a local solar farm. Your business receives credits on your utility bill without any on-site equipment."
    },
    {
      question: "What happens if my business moves or closes?",
      answer: "Community solar subscriptions are flexible. You can transfer your subscription to a new location within the same utility service area, or cancel without penalties."
    },
    {
      question: "How long does it take to start receiving solar credits?",
      answer: "Once you enroll and the solar farm is operational, you'll begin receiving credits on your next utility bill. The process typically takes 1-2 billing cycles."
    },
    {
      question: "Can I use community solar for multiple business locations?",
      answer: "Yes! You can enroll multiple business locations in community solar programs, as long as they're within the same utility service area."
    },
    {
      question: "What if the solar farm doesn't produce enough energy?",
      answer: "Your subscription is guaranteed to provide the promised energy credits. If the solar farm underperforms, the developer covers the difference to ensure you receive your expected savings."
    },
    {
      question: "How do I track my solar energy production and savings?",
      answer: "You'll receive monthly reports showing your solar energy production and the corresponding credits applied to your utility bill. Many programs also offer online dashboards for real-time tracking."
    },
    {
      question: "Are there any tax benefits for businesses using community solar?",
      answer: "While community solar subscriptions don't qualify for solar tax credits (since you don't own the equipment), the energy cost savings can improve your business's bottom line and support sustainability goals."
    }
  ]
}: FAQProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>
        {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="bg-card border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-foreground pr-4">
                {item.question}
              </h3>
              <ChevronDownIcon 
                className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                  openItems.has(index) ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openItems.has(index) && (
              <div className="px-6 pb-4">
                <p className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 