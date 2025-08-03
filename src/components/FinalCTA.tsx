"use client";

import { ContactForm, FieldConfig } from "./ContactForm";

export function FinalCTA() {
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
    { type: "companyName", required: false },
    { type: "message", required: false },
    { type: "fileUpload", required: false }
  ];

  const handleSubmit = async (data: any) => {
    console.log("Form submitted:", data);
    // Here you would typically send the data to your backend
    // For now, we'll just log it
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
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
  );
} 