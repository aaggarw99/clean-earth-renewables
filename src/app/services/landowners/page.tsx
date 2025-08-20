"use client";

import { NavBar } from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { AlternatingTimeline } from "@/components/AlternatingTimeline";
import { ContactForm, FieldConfig } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import Image from "next/image";

export default function LandownersPage() {
  // Timeline steps data
  const timelineSteps = [
    {
      number: 1,
      title: "Utility Infrastructure Identification",
      description: "The first and most important factor to qualifying your land is being located near existing utility infrastructure with potential interconnection capacity. Our team will assess this for you within the same day from you submitting your land to us. We will revert back to you with an initial thumbs up to proceed with the review of your land.",
      imageSrc: "/assets/images/backgrounds/plant.png",
      imageAlt: "Solar farm person",
      timeframe: "Same day assessment",
      requirements: ["Land submission", "Utility infrastructure nearby"]
    },
    {
      number: 2,
      title: "Topography and Zoning Analysis",
      description: "Once we've identified your land is nearby existing energy infrastructure, the next step is to analyze the topography and zoning of your land and determine buildable acreage for the community solar project while adhering to local zoning ordinances.",
      imageSrc: "/assets/images/services/topology.png",
      imageAlt: "Plant background",
      timeframe: "1-2 weeks",
      requirements: ["6+ acres of land", "Zoning compliance"]
    },
    {
      number: 3,
      title: "Interconnection Analysis",
      description: "Lastly, once we've completed the first two steps, we must work closely with your utility and determine interconnection feasibility. This study can take anywhere from three months to two years — and unfortunately we have no control of this timeline as this is due to the utility company managing the interconnection study process. To ensure the fastest timeline, work with us to promptly submit your land for an initial review, at no risk to you or your land.",
      imageSrc: "/assets/images/services/energy-lines.png",
      imageAlt: "Cost reduction illustration",
      timeframe: "3 months - 2 years",
      requirements: ["Utility cooperation", "Patience during study period"]
    }
  ];

  // Contact form fields for landowners
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
    console.log("Landowner contact form submitted:", data);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="min-h-screen">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/backgrounds/panels-bg.png"
            alt="Host a Solar Farm Hero"
            fill
            className="object-cover object-bottom"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Convert Unused Land into Profit with Community Solar!
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Got 6+ acres of land? Lease it to us for solar and kick back and enjoy 20-40 years of above-market rental income.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold">
            See if My Land is Eligible
          </Button>
        </div>
      </section>

      {/* How It Works Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How Land Qualification Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Our comprehensive process ensures your land is suitable for community solar development
            </p>
          </div>
          <AlternatingTimeline steps={timelineSteps} />
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            fields={contactFields}
            title="Ready to Turn Your Land into Income?"
            subtitle="Submit your land for a free qualification review. Our team will assess your property and get back to you within 24 hours."
            submitText="Submit My Land for Review"
            onSubmit={handleSubmit}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FAQ 
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about hosting a solar farm on your land"
            items={[
              {
                question: "What service does Clean Earth Renewables provide to Landowners seeking to host a community solar farm?",
                answer: "We provide no-cost land feasibility analysis, lease term and condition negotiations and onboarding to leading community solar developers and operators across major community solar markets."
              },
              {
                question: "What are the major risks of leasing land to a community solar developer?",
                answer: "Working with a developer that doesn't have a portfolio of projects in your service area in a can pose as a major red flag to project success, and working with an experienced developer and operator who's successfully zoned, permitted, constructed, interconnected and operated community solar projects in your service area is a major key to having project success on your land. Ask your developer if they can offer a site tour or a reference to another landowner or a solar farm in your service area!"
              },
              {
                question: "How long can a community solar project last?",
                answer: "Community Solar land leases are set for an initial 20 year term, with multiple extension options that can extend the operational life and contract term of the community solar farm for up to 40 years."
              },
              {
                question: "How much land or roof space is required to host a solar farm?",
                answer: "Exact size requirements vary by interconnection capacity, but we generally require 6+ acres of land or 150,000 of buildable square footage of roof or parking lot area. When you work with Clean Earth, we ensure that every acre or square foot is used effectively. Our local team of community solar experts will give you peace of mind throughout the process."
              },
              {
                question: "If I host a community solar farm, can the solar panels power my farm, home or business operations?",
                answer: "Absolutely! However, since your project can take up to 18 months, if you prefer to start saving immediately on your electricity costs, you can also subscribe to one of our existing community solar projects rather than waiting for your solar farm to become operational. Visit our community solar page to learn how to subscribe to an active solar farm in your service area."
              }
            ]}
          />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
} 