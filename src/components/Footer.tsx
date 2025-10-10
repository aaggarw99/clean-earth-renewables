"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LinkedinIcon, InstagramIcon, PhoneIcon, MailIcon, ClockIcon, MapPinIcon } from "lucide-react";
import Image from "next/image";
import { useToast } from "@/components/ui/toast";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addToast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      addToast({
        type: 'error',
        title: 'Email required',
        message: 'Please enter your email address.',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email: email.trim(), 
          source: 'footer' 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        addToast({
          type: 'success',
          title: 'Subscribed successfully!',
          message: data.message || 'Thank you for subscribing to our newsletter.',
        });
        setEmail("");
      } else {
        addToast({
          type: 'error',
          title: 'Subscription failed',
          message: data.error || 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      console.error('Subscription error:', error);
      addToast({
        type: 'error',
        title: 'Subscription failed',
        message: 'Unable to subscribe. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Company Info */}
          <div className="space-y-4 md:col-span-3">
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
            <p className="text-muted-foreground text-sm leading-relaxed">
              Making clean energy accessible, low-risk, and financially beneficial 
              for businesses, landowners, and individuals.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/clean-earth-renewables" target="_blank"className="text-muted-foreground hover:text-primary transition-colors">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/cleanearthrenewables" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4 md:col-span-3">
            <h3 className="text-lg font-semibold text-foreground">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/residential" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Residential
                </Link>
              </li>
              <li>
                <Link href="/services/businesses-offsite" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Businesses (Off Site)
                </Link>
              </li>
              <li>
                <Link href="/services/businesses-onsite" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Businesses (On Site)
                </Link>
              </li>
              <li>
                <Link href="/services/landowners" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Landowners
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 md:col-span-3">
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start space-x-2">
                <MapPinIcon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <div>77 W Wacker Dr #4500</div>
                  <div>Chicago, IL 60601</div>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPinIcon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <div>1 Marina Park Drive, Suite 1410</div>
                  <div>Boston, MA 02210</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <PhoneIcon className="w-4 h-4" />
                <a href="tel:+16308853500" className="hover:text-primary transition-colors">(630) 885-3500</a>
              </div>
              <div className="flex items-center space-x-2">
                <MailIcon className="w-4 h-4" />
                <a href="mailto:devteam@clean-earth.org" className="hover:text-primary transition-colors">devteam@clean-earth.org</a>
              </div>
              <div className="flex items-center space-x-2">
                <ClockIcon className="w-4 h-4" />
                <span>Mon - Fri, 9 AM - 5 PM</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4 md:col-span-3">
            <h3 className="text-lg font-semibold text-foreground">Stay Informed</h3>
            <p className="text-muted-foreground text-sm">
              Get the latest updates on energy trends and renewable solutions.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                required
              />
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2025 Clean Earth Renewables. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a 
                href="https://www.bbb.org/us/il/chicago/profile/renewable-energy/clean-earth-renewables-0654-1000114301" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/assets/logos/bbb-logo-text.svg"
                  alt="Better Business Bureau Accredited Business"
                  width={80}
                  height={20}
                  className="h-5 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 