"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const services = [
    {
      title: "Community Solar - Residential",
      description: "Save on your home energy bills",
      href: "/services/community-solar-residential"
    },
    {
      title: "Community Solar - Businesses",
      description: "Off-site solar for your business",
      href: "/services/community-solar-businesses"
    },
    {
      title: "Lease Your Rooftop",
      description: "Earn money from your business roof",
      href: "/services/lease-rooftop-businesses"
    },
    {
      title: "Host a Solar Farm",
      description: "Landowner opportunities",
      href: "/services/host-solar-farm"
    }
  ];

  // Handle hover with delay
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsServicesHovered(true);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    setIsServicesHovered(false);
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150); // 150ms delay
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/assets/logos/Symbol - Primary.svg"
              alt="Clean Earth Renewables Symbol"
              width={32}
              height={32}
              className="h-8 w-8"
              priority
            />
            <span className="text-xl font-bold text-foreground">CER</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
                <span>Services</span>
                <ChevronDownIcon className="w-4 h-4" />
              </button>
              
              {/* Dropdown Menu */}
              {isServicesOpen && (
                <>
                  {/* Invisible bridge to prevent gap */}
                  <div className="absolute top-full left-0 w-full h-2 bg-transparent" />
                  
                  <div className="absolute top-full left-0 mt-2 w-80 bg-card border border-border rounded-lg shadow-lg overflow-hidden">
                    <div className="p-2">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          href={service.href}
                          className="block p-3 rounded-md hover:bg-muted/50 transition-colors group"
                        >
                          <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {service.title}
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">
                            {service.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Get Energy Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6 text-foreground" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/20 bg-background/95 backdrop-blur">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 text-foreground hover:text-primary transition-colors"
                >
                  <span>Services</span>
                  <ChevronDownIcon className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Get Energy Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 