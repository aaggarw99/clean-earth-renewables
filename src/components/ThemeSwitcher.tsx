"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  // Only show in development
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed top-20 right-4 z-50 bg-background/95 backdrop-blur border border-border rounded-lg p-2 shadow-lg">
      <div className="flex items-center space-x-2">
        <span className="text-xs font-medium text-foreground">Theme:</span>
        <Button
          size="sm"
          variant="outline"
          onClick={toggleTheme}
          className="text-xs"
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </Button>
      </div>
    </div>
  );
} 