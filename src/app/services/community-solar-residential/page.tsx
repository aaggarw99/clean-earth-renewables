"use client";

import { NavBar } from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { HorizontalTimeline } from "@/components/HorizontalTimeline";
import { TabSwitcher } from "@/components/TabSwitcher";
import { FeaturedProject } from "@/components/FeaturedProject";
import { Footer } from "@/components/Footer";
import { SavingsCalculator } from "@/components/SavingsCalculator";
import { scrollToSectionWithNavbar } from "@/utils/navigation";
import { 
  CurrencyDollarIcon, 
  NoSymbolIcon, 
  BoltIcon, 
  CheckCircleIcon,
  MagnifyingGlassIcon, 
  UserGroupIcon, 
  ClipboardDocumentCheckIcon, 
  BanknotesIcon 
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function CommunitySolarResidentialPage() {
  // Timeline steps data
  const timelineSteps = [
    {
      title: "Check Eligibility",
      description: "Verify your utility provider and address qualify for community solar programs.",
      icon: <MagnifyingGlassIcon className="w-8 h-8" />,
      timeframe: "2-3 minutes",
      requirements: ["Utility account number", "Service address"]
    },
    {
      title: "Choose Your Program",
      description: "Select between standard community solar or enhanced LMI programs based on your needs.",
      icon: <UserGroupIcon className="w-8 h-8" />,
      timeframe: "5-10 minutes",
      requirements: ["Income information (for LMI)", "Energy usage preferences"]
    },
    {
      title: "Simple Enrollment",
      description: "Complete your application online with no credit check or upfront fees required.",
      icon: <ClipboardDocumentCheckIcon className="w-8 h-8" />,
      timeframe: "10-15 minutes",
      requirements: ["Basic contact info", "Utility account details", "Electronic signature"]
    },
    {
      title: "Start Saving",
      description: "Begin receiving solar credits on your monthly utility bill within 1-2 billing cycles.",
      icon: <BanknotesIcon className="w-8 h-8" />,
      timeframe: "1-2 billing cycles",
      requirements: ["No additional action needed", "Credits appear automatically"]
    }
  ];

  // Tab content data
  const tabs = [
    {
      id: "lmi",
      label: "Low-to-Moderate Income",
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Special Programs for LMI Residents</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Enhanced savings and support designed specifically for low-to-moderate income households.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left side - LMI content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground">What is Low-to-Moderate Income (LMI)?</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Low-to-Moderate Income households (80-120% of AMI) typically spend a higher percentage of their income on energy, making solar savings especially valuable.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-6 space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Enhanced LMI Benefits</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CurrencyDollarIcon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">Up to 20% savings on your entire electricity bill</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <NoSymbolIcon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">No sign-up fees</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <BoltIcon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">Tenant friendly</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircleIcon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">Dedicated support team for LMI participants</span>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 text-center">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold"
                  onClick={() => window.open('https://app.solstice.us/ref/cleanearth/humansathelp', '_blank')}
                >
                  Enroll Now
                </Button>
                <p className="text-sm text-muted-foreground mt-2">
                  We partner with Solstice to provide enhanced LMI programs and support.
                </p>
              </div>
            </div>
            
            {/* Right side - Video animation */}
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/assets/videos/animations/solar-city.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg pointer-events-none"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "standard",
      label: "Standard Program",
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Standard Community Solar Program</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join our standard community solar program and start saving on your electricity bills while supporting renewable energy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left side - Calculator */}
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-center mb-6">
                  <h4 className="text-xl font-semibold text-foreground mb-2">Calculate Your Potential Savings</h4>
                  <p className="text-muted-foreground">
                    Enter your information below to see how much you could save with community solar
                  </p>
                </div>
                
                <SavingsCalculator
                  onCalculate={(values) => {
                    console.log("Calculator values:", values);
                    // Here you could send the data to your backend or analytics
                  }}
                />
              </div>
            </div>
            
            {/* Right side - Benefits */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Why Choose Community Solar?</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CurrencyDollarIcon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground">Save 10% Annually</h5>
                      <p className="text-sm text-muted-foreground">Reduce your electricity costs with guaranteed savings on every bill</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <NoSymbolIcon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground">Zero Upfront Costs</h5>
                      <p className="text-sm text-muted-foreground">No installation fees, no equipment costs, no hidden charges</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <BoltIcon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground">Clean Energy 24/7</h5>
                      <p className="text-sm text-muted-foreground">Support renewable energy production while reducing your carbon footprint</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircleIcon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground">Simple & Flexible</h5>
                      <p className="text-sm text-muted-foreground">Easy enrollment, flexible terms, move or cancel anytime</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold"
              onClick={() => window.open('https://app.solstice.us/ref/cleanearth/humansathelp', '_blank')}
            >
              Enroll in Community Solar
            </Button>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/backgrounds/chicago-river.png"
            alt="Community Solar Residential Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Community Solar for Residents
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Enjoy clean energy savings without installing rooftop panels. Join a local solar project and start saving today!
          </p>
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold"
            onClick={() => scrollToSectionWithNavbar('choose-your-program')}
          >
            Get Started
          </Button>
        </div>
      </section>

      {/* How It Works Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <HorizontalTimeline
            steps={timelineSteps}
            title="How Community Solar Works"
            subtitle="Simple steps to start saving with either program"
          />
        </div>
      </section>

      {/* Program Options Tab Switcher */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <TabSwitcher
            tabs={tabs}
            title="Choose Your Program"
            subtitle="Select the option that best fits your needs"
            id="choose-your-program"
          />
        </div>
      </section>

      {/* Featured Project */}
      {/* TODO: Add residential statistics here! */}
      <FeaturedProject />

      {/* Footer */}
      <Footer />
    </div>
  );
} 