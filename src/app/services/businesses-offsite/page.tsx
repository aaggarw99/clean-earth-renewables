"use client";

import { NavBar } from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { AlternatingTimeline } from "@/components/AlternatingTimeline";
import { FeaturedProject } from "@/components/FeaturedProject";
import { ClientLogoCarousel } from "@/components/ClientLogoCarousel";
import { ContactForm, FieldConfig } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { scrollToSectionWithNavbar } from "@/utils/navigation";

export default function CommunitySolarBusinessesPage() {
  // Timeline steps data
  const timelineSteps = [
    {
      number: 1,
      title: "Solar Farm Goes Live",
      description: "A local solar farm becomes operational and begins delivering clean energy to your utility's power grid.",
      imageSrc: "/assets/images/services/solar-farm-person.png",
      imageAlt: "Solar farm person",
      timeframe: "Immediate",
      requirements: ["No action required", "Automatic enrollment available"]
    },
    {
      number: 2,
      title: "Connect your utility account",
      description: "Join the community solar program by connecting your utility account. In some service areas, there's no change to your utility bill or payment method.",
      imageSrc: "/assets/images/backgrounds/plant.png",
      imageAlt: "Plant background",
      timeframe: "5-10 minutes",
      requirements: ["Utility account number", "Business information"]
    },
    {
      number: 3,
      title: "Start Saving Monthly",
      description: "Receive credits on your utility bill and track your clean energy savings.",
      imageSrc: "/assets/images/services/cost-reduction.png",
      imageAlt: "Cost reduction illustration",
      timeframe: "1-2 billing cycles",
      requirements: ["No additional action needed", "Credits appear automatically"]
    },
    {
      number: 4,
      title: "Move or Cancel Anytime",
      description: "Flexible subscription that adapts to your business needs - relocate or cancel without penalties.",
      imageSrc: "/assets/images/services/trucks-onsite.png",
      imageAlt: "Trucks onsite",
      timeframe: "Flexible",
      requirements: ["No penalties", "Easy cancellation process"]
    }
  ];

  // Contact form fields for businesses
  const contactFields: FieldConfig[] = [
    { type: "customerType", required: true },
    { type: "utility", required: false },
    { type: "name", required: true },
    { type: "email", required: true },
    { type: "phone", required: false },
    { type: "state", required: false },
    { type: "stateText", required: false },
    { type: "address", required: false },
    { type: "city", required: false },
    { type: "companyName", required: false, label: "Company Name" },
    { type: "zipCode", required: false, label: "Zip Code" },
    { type: "message", required: false },
    { type: "fileUpload", required: false }
  ];

  const handleSubmit = async (data: {
    customerType: string;
    utility: string;
    name: string;
    email: string;
    phone: string;
    state: string;
    stateText: string;
    address: string;
    city: string;
    companyName: string;
    zipCode: string;
    message: string;
    fileUpload?: File;
  }) => {
    console.log("Business contact form submitted:", data);
    // Here you would typically send the data to your backend
  };

  // Client logos data
  const clientLogos = [
    {
      src: "/assets/images/clients/dq.png",
      alt: "Dairy Queen",
      width: 120,
      height: 60
    },
    {
      src: "/assets/images/clients/wyndham.png",
      alt: "Wyndham",
      width: 120,
      height: 60
    },
    {
      src: "/assets/images/clients/dunkindonuts.png",
      alt: "Dunkin' Donuts",
      width: 120,
      height: 60
    },
    {
      src: "/assets/images/clients/mapleandash.png",
      alt: "Dunkin' Donuts",
      width: 100,
      height: 50
    },
    {
      src: "/assets/images/clients/choice-hotels.png",
      alt: "Choice Hotels",
      width: 100,
      height: 50
    },
    {
      src: "/assets/images/clients/hilton.png",
      alt: "Hampton Inn",
      width: 100,
      height: 50
    },
    {
      src: "/assets/images/clients/subway.png",
      alt: "Subway",
      width: 120,
      height: 60
    },
    {
      src: "/assets/images/clients/bp.png",
      alt: "BP",
      width: 120,
      height: 60
    }
  ];

  return (
    <div className="min-h-screen">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/backgrounds/solar-farm-bg.png"
            alt="Community Solar Businesses Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Community Solar for Businesses (Off Site)
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Lower your business&apos;s energy costs and carbon footprint by subscribing to a local solar project—no on-site installation required.
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold"
            onClick={() => scrollToSectionWithNavbar('how-it-works')}
          >
            Learn More
          </Button>
        </div>
      </section>

      {/* How It Works Timeline */}
      <section id="how-it-works" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How to Participate in Community Solar as a Business
            </h2>
            <p className="text-lg text-muted-foreground">
              Lower your business&apos;s Scope 2 emissions and electricity costs with no on-site changes or investment required.
            </p>
          </div>
          <AlternatingTimeline steps={timelineSteps} />
        </div>
      </section>

      {/* Featured Project */}
      <FeaturedProject
        sectionTitle="Featured Subscriber"
        sectionSubtitle="See how America&apos;s leading Hospitality company is transforming their energy consumption habits with Clean Earth Renewables"
        backgroundImage="/assets/images/backgrounds/hamptoninn.png"
        title="Hilton Hotel Subscriber in Colombia, IL"
        description="Projected to save $6,840+ per year from local community solar farm in Ameren Illinois utility service area"
        readStoryLink="/contact"
        metrics={[
          { value: "$11,400", label: "Monthly Electric Bill" },
          { value: "$570", label: "Monthly Credits (10%)" },
          { value: "$6,840", label: "Annual Savings" }
        ]}
      />

      {/* Client Logo Carousel */}
      <ClientLogoCarousel 
        logos={clientLogos}
        title="Trusted by Leading Businesses"
        subtitle="Join hundreds of businesses already saving with community solar"
        speed={15}
        gap={64}
      />

      {/* Contact Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            fields={contactFields}
            title="Get Started with Community Solar for Your Business"
            subtitle="Tell us about your business and we'll customize a community solar solution to your specific energy needs."
            submitText="Request Business Consultation"
            onSubmit={handleSubmit}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FAQ />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
} 