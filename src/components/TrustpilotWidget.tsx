"use client";

import { useEffect, useState } from 'react';

interface TrustpilotWidgetProps {
  className?: string;
  title?: string;
  subtitle?: string;
}

export function TrustpilotWidget({ 
  className = "", 
  title = "What Our Clients Say",
  subtitle = "Join thousands of satisfied customers who trust Clean Earth Renewables"
}: TrustpilotWidgetProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Debug Trustpilot widget loading
    const debugTrustpilot = () => {
      console.log('🔍 Debugging Trustpilot widget...');
      
      if (typeof window !== 'undefined') {
        console.log('✅ Window is available');
        console.log('🌐 Trustpilot object:', (window as any).Trustpilot);
        
        if ((window as any).Trustpilot) {
          console.log('✅ Trustpilot script loaded');
          console.log('📋 Trustpilot methods:', Object.keys((window as any).Trustpilot));
          
          // Try to use loadFromElement method instead of collect
          if ((window as any).Trustpilot.loadFromElement) {
            console.log('✅ Trustpilot.loadFromElement is available');
            
            // Find widget elements and try to load them
            const widgets = document.querySelectorAll('.trustpilot-widget');
            console.log('🎯 Found widget elements:', widgets.length);
            
            widgets.forEach((widget, index) => {
              console.log(`📦 Widget ${index}:`, widget);
              console.log(`📊 Widget data attributes:`, {
                locale: widget.getAttribute('data-locale'),
                templateId: widget.getAttribute('data-template-id'),
                businessUnitId: widget.getAttribute('data-businessunit-id'),
                height: widget.getAttribute('data-style-height'),
                width: widget.getAttribute('data-style-width')
              });
              
              // Try to load the widget using loadFromElement
              try {
                (window as any).Trustpilot.loadFromElement(widget);
                console.log(`✅ Widget ${index} loaded successfully`);
              } catch (error) {
                console.log(`❌ Failed to load widget ${index}:`, error);
              }
            });
          } else {
            console.log('❌ Trustpilot.loadFromElement is not available');
          }
          
          // Check for collect method as fallback
          if ((window as any).Trustpilot.collect) {
            console.log('✅ Trustpilot.collect is available');
            console.log('🔧 Collect methods:', Object.keys((window as any).Trustpilot.collect));
          } else {
            console.log('❌ Trustpilot.collect is not available');
          }
        } else {
          console.log('❌ Trustpilot script not loaded yet');
        }
      }
    };

    // Run debug immediately
    debugTrustpilot();
    
    // Run debug after delays to catch timing issues
    setTimeout(debugTrustpilot, 1000);
    setTimeout(debugTrustpilot, 3000);
    setTimeout(debugTrustpilot, 5000);
  }, []);

  // Don't render the widget on the server to avoid hydration issues
  if (!isClient) {
    return (
      <section className={`py-16 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 ${className}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="h-[52px] bg-muted/20 rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Loading reviews...</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Trusted by businesses across the country
            </p>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className={`py-16 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* TrustBox widget - Micro Review Count (most accessible) */}
          <div 
            className="trustpilot-widget" 
            data-locale="en-US" 
            data-template-id="5419b6ffb0d04a076446a9af" 
            data-businessunit-id="67a3b23721d7cd3d58c96085" 
            data-style-height="52px" 
            data-style-width="100%"
          >
            <a 
              href="https://www.trustpilot.com/review/clean-earth.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Trustpilot
            </a>
          </div>
          
          {/* Test widget with a known working business (Netflix) */}
          <div className="mt-8 p-4 bg-muted/20 rounded-lg">
            <p className="text-sm text-muted-foreground mb-2">Test widget (Netflix - should show data):</p>
            <div 
              className="trustpilot-widget" 
              data-locale="en-US" 
              data-template-id="5419b6ffb0d04a076446a9af" 
              data-businessunit-id="4e1c5c4570006400010000a8" 
              data-style-height="52px" 
              data-style-width="100%"
            >
              <a 
                href="https://www.trustpilot.com/review/netflix.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Trustpilot
              </a>
            </div>
          </div>
          {/* End TrustBox widget */}
          
          {/* Debug info */}
          <div className="mt-4 text-center text-sm text-muted-foreground">
            <p>Business Unit ID: 67a3b23721d7cd3d58c96085</p>
            <p>Template ID: 5419b6ffb0d04a076446a9af (Micro Review Count)</p>
            <p>Domain: clean-earth.org</p>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Trusted by businesses across the country
          </p>
        </div>
      </div>
    </section>
  );
} 