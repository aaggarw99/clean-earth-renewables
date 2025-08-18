'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  UserGroupIcon, 
  ShieldCheckIcon, 
  LightBulbIcon 
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { ContactForm, FieldConfig } from "@/components/ContactForm";

export default function AboutPage() {

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

  return (
    <div className="min-h-screen">
      <NavBar />
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/backgrounds/chicago-overview.png"
            alt="Solar panels with city background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Empowering Communities Through Clean Energy
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            10,000+ customers served across residential, commercial, and community solar.
          </p>
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold"
          >
            Connect with Us
          </Button>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Founders
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              With over a decade of experience, our founders lead Clean Earth Renewables with a shared belief: that clean energy should benefit everyone.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Diana */}
            <div className="text-center">
              <div className="relative mb-6">
                <Image
                  src="/assets/images/team/DianaKrytsak.jpg"
                  alt="Diana Krytsak, Co-founder of Clean Earth Renewables"
                  width={600}
                  height={600}
                  className="rounded-lg object-cover w-80 h-80 mx-auto"
                />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Diana Krytsak
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Diana brings over 15 years of experience in renewable energy development and community engagement. Her passion for creating sustainable solutions that benefit local communities drives our mission to make clean energy accessible to everyone.
              </p>
            </div>

            {/* David */}
            <div className="text-center">
              <div className="relative mb-6">
                <Image
                  src="/assets/images/team/DavidEmsheimer.jpg"
                  alt="David Emsheimer, Co-founder of Clean Earth Renewables"
                  width={600}
                  height={600}
                  className="rounded-lg object-cover w-80 h-80 mx-auto"
                />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                David Emsheimer
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                David specializes in renewable energy financing and project development. With expertise in structuring innovative financial solutions, he ensures that our projects deliver both environmental impact and strong returns for our partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-border bg-background hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  <UserGroupIcon className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  Who We Are
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We believe the humility and integrity of our people contribute to the firm&apos;s stability and support our long-standing client relationships. Accountability and transparency are central to our values.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border bg-background hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  <ShieldCheckIcon className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  What We Do
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We prioritize teamwork and believe in the power of sharing ideas freely across our organization. By building a close-knit organization, we uncover new investment opportunities and foster innovation.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border bg-background hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  <LightBulbIcon className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  Why We Do It
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We take enormous pride in helping our clients achieve their goals. The importance of making a positive impact for our investors and their constituents is at the heart of Clean Earth Renewables.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Driven by Purpose. Grounded in Community.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              At Clean Earth, we believe clean energy should uplift every community. Our mission goes beyond delivering solar—we build lasting value through inclusion, equity, and long-term partnerships with the people and places we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            title="Let's Build a Cleaner Future Together"
            subtitle="We're here to help you achieve your clean energy goals. Fill out the form below and we'll get back to you as soon as possible."
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