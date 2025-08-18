import { ContactForm, FieldConfig } from "./ContactForm";

// Example usage of the ContactForm component
export function ContactFormExample() {
  // Define which fields to show and which are required
  const fields: FieldConfig[] = [
    { type: "customerType", required: true },
    { type: "utility", required: true },
    { type: "name", required: true },
    { type: "email", required: true },
    { type: "phone", required: false },
    { type: "state", required: true },
    { type: "address", required: true },
    { type: "city", required: true },
    { type: "companyName", required: false },
    { type: "zipCode", required: true },
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
    // For now, we'll just log it
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <ContactForm
          fields={fields}
          title="Get Your Free Energy Audit"
          subtitle="Tell us about your project and we'll get back to you within 24 hours."
          submitText="Request Energy Audit"
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

// Example of a minimal form with just essential fields
export function MinimalContactForm() {
  const minimalFields: FieldConfig[] = [
    { type: "name", required: true },
    { type: "email", required: true },
    { type: "message", required: true }
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
    console.log("Minimal form submitted:", data);
  };

  return (
    <div className="py-8">
      <ContactForm
        fields={minimalFields}
        title="Contact Us"
        subtitle="Send us a message and we'll respond quickly."
        submitText="Send Message"
        onSubmit={handleSubmit}
      />
    </div>
  );
} 