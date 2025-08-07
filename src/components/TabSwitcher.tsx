"use client";

import { useState, ReactNode } from "react";

interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabSwitcherProps {
  tabs: Tab[];
  title?: string;
  subtitle?: string;
}

export function TabSwitcher({ tabs, title, subtitle }: TabSwitcherProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");

  return (
    <div className="w-full">
      {(title || subtitle) && (
        <div className="text-center mb-8">
          {title && <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>}
          {subtitle && <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>}
        </div>
      )}
      
      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-muted rounded-lg p-1 flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Tab Content */}
      <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
        {tabs.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
  );
} 