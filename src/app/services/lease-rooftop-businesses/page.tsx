'use client'

import { Button } from "@/components/ui/button";
import { NavBar } from "@/components/NavBar";
import Image from "next/image";
import { AlternatingCardRow } from "@/components/AlternatingCardRow";
import { VerticalTimeline } from "@/components/VerticalTimeline";
import { VerticalTimelineCentered } from "@/components/VerticalTimelineCentered";
import { SunIcon, BuildingOfficeIcon } from "@heroicons/react/24/outline";
import { ContactForm, FieldConfig } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function LeaseRooftopBusinessesPage() {

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

  const handleSubmit = async (data: any) => {
    console.log("Contact form submitted:", data);
    // Here you would typically send the data to your backend
    // For now, we'll just log it
  };

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
      {/* Section 1: Why Lease Your Roof? */}
      <AlternatingCardRow
        title="Why Lease Your Roof?"
        subtitle={
          "Join Rooftop Community Solar — Save Up to 20%"
        }
        bullets={[
          "Host a solar farm with zero upfront investment",
          "Become a local clean energy producer",
          "Offer renewable energy as an amenity to tenants",
          "Generate passive income through lease payments"
        ]}
        imageSrc="/assets/images/services/business-onsite-panels.png"
        cta={
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold">
            See if My Roof is Eligible
          </Button>
        }
        background="white"
      />
      {/* Section 2: Featured Case Study */}
      <AlternatingCardRow
        title="Featured Case Study"
        subtitle={
          "How a Chicago Business Turned Its Rooftop Into a Profit Center\nLearn how a mid-size commercial building in Chicago saved money, supported sustainability goals, and increased tenant retention through rooftop solar."
        }
        imageSrc="/assets/images/services/trucks-onsite.png"
        reverse
        cta={
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold">
            Read Full Case Study
          </Button>
        }
        background="gray"
      />
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
          How the Process Works
        </h2>
        <VerticalTimelineCentered
          steps={[
            {
              title: "Utility Interconnection Analysis",
              description:
                "We evaluate feasibility and secure capacity rights to interconnect a community solar project on your property.",
              icon: <BuildingOfficeIcon className="w-8 h-8" />
            },
            {
              title: "Project Design & Engineering",
              description:
                "Our team ensures the roof layout, structure, and size meet technical requirements for optimal solar output.",
              icon: <BuildingOfficeIcon className="w-8 h-8" />
            },
            {
              title: "Project Finance & Lease Terms",
              description:
                "Once approved by our underwriting team, we'll present your custom lease agreement with terms & payout schedule for execution.",
              icon: <BuildingOfficeIcon className="w-8 h-8" />
            },
          ]}
        />
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            fields={fields}
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