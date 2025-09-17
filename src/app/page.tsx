"use client";

import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { FeaturedProject } from "@/components/FeaturedProject";
import { StatsSection } from "@/components/StatsSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactForm, FieldConfig } from "@/components/ContactForm";
import { TestimonialsExample } from "@/components/TestimonialsExample";
import { Footer } from "@/components/Footer";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export default function Home() {
  // Define which fields to show and which are required
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
    console.log("Form submitted:", data);
    // Here you would typically send the data to your backend
  };

  return (
    <main className="min-h-screen bg-background">
      <NavBar />
      <Hero />
      <BenefitsSection />
      <ServicesSection />
      <FeaturedProject 
        backgroundImage="/assets/images/backgrounds/panels-grass-overview.png"
        title="Solar for All Subscriber in Skokie"
        description="Projected to save $480 per year when their community solar project goes live"
        readStoryLink="/contact"
        metrics={[
          { value: "$200", label: "Monthly Electric Bill" },
          { value: "$40", label: "Monthly Credits (20%)" },
          { value: "$480", label: "Annual Savings" }
        ]}
      />
      <StatsSection />
      <AboutSection />
      <section id="contact-form" className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            fields={fields}
            title="Ready to go clean?"
            subtitle="Get a Free Energy Audit Today. Our experts will analyze your energy usage and provide a customized renewable energy solution that saves you money while helping the planet."
            submitText="Request My Audit"
            onSubmit={handleSubmit}
          />
        </div>
      </section>
      <TestimonialsExample />
      <Footer />
      <ThemeSwitcher />
    </main>
  );
}
