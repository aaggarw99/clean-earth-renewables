'use client'

import { NavBar } from "@/components/NavBar";
import Image from "next/image";
import { AlternatingTimeline } from "@/components/AlternatingTimeline";
import { ContactForm, FieldConfig } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function BusinessesOnsitePage() {

  const fields: FieldConfig[] = [
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
    console.log("Contact form submitted:", data);
    // Here you would typically send the data to your backend
    // For now, we'll just log it
  };

  // Timeline steps data
  const timelineSteps = [
    {
      number: 1,
      title: "Utility Interconnection Analysis",
      description: "We evaluate feasibility and secure capacity rights to interconnect a community solar project on your property.",
      imageSrc: "/assets/images/services/energy-lines.png",
      imageAlt: "Business onsite panels",
      timeframe: "2-4 weeks",
      requirements: ["Roof access", "Utility account information"]
    },
    {
      number: 2,
      title: "Project Design & Engineering",
      description: "Our team ensures the roof layout, structure, and size meet technical requirements for optimal solar output.",
      imageSrc: "/assets/images/services/project-design.png",
      imageAlt: "Trucks onsite",
      timeframe: "4-6 weeks",
      requirements: ["Structural assessment", "Roof specifications"]
    },
    {
      number: 3,
      title: "Project Finance & Lease Terms",
      description: "Once approved by our underwriting team, we'll present your custom lease agreement with terms & payout schedule for execution.",
      imageSrc: "/assets/images/services/project-finance-analysis.png",
      imageAlt: "Cost reduction illustration",
      timeframe: "1-2 weeks",
      requirements: ["Business documentation", "Lease agreement review"]
    }
  ];

  return (
    <div className="min-h-screen">
      <NavBar />
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/backgrounds/rooftop-solar-background.png"
            alt="Lease Rooftop Businesses Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Lease Your Rooftop and Generate Revenue
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Convert unused commercial rooftop space into profit while supporting clean energy.
          </p>
        </div>
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
          How the Process Works
        </h2>
        <AlternatingTimeline
          steps={timelineSteps}
        />
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            fields={fields}
            title="Get Started with Leasing Your Rooftop"
            subtitle="We'll help you evaluate your roof's potential and get you started on the path to passive income."
            submitText="Send Message"
            onSubmit={handleSubmit}
          />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
} 