"use client";

import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  DocumentTextIcon, 
  CalculatorIcon, 
  ArrowRightIcon,
  BuildingOfficeIcon,
  BanknotesIcon,
  WrenchScrewdriverIcon,
  QuestionMarkCircleIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function PPAClient() {
  const keyFeatures = [
    {
      icon: <BanknotesIcon className="w-6 h-6" />,
      title: "No Upfront Investment",
      description: "Zero capital expenditure required - perfect for homeowners and commercial real estate owners seeking to decarbonize."
    },
    {
      icon: <CalculatorIcon className="w-6 h-6" />,
      title: "Immediate 20%+ Savings",
      description: "Reduce energy expenses by 20% or more from day one with rates typically below market price."
    },
    {
      icon: <WrenchScrewdriverIcon className="w-6 h-6" />,
      title: "Full O&M Coverage",
      description: "24/7/365 monitoring, damage claims, and emergency shutdown requirements included in your PPA rate."
    },
    {
      icon: <BuildingOfficeIcon className="w-6 h-6" />,
      title: "Building Performance Upgrade",
      description: "Results in an immediate building performance upgrade with seamless solar integration."
    }
  ];



  const faqs = [
    {
      question: "What are the risks associated with signing a Power Purchase Agreement?",
      answer: "The biggest risk is signing with a provider that is not well-financed. Clean Earth Renewables only works with leading PPA financiers across the country with $2B+ in project financing, ensuring the lowest cost of capital for energy customers."
    },
    {
      question: "How can I qualify for a Power Purchase Agreement?",
      answer: "PPA customers are typically property owners with 25,000+ sq. ft. of available roof/land space and $5,000+ per month in electricity costs. Clean Earth helps weigh whether investment or a PPA is the best route."
    },
    {
      question: "Are there any costs associated with a Power Purchase Agreement?",
      answer: "A PPA allows organizations to secure a long-term fixed kWh rate, usually below market price. Engineering, procurement, construction, and maintenance are all included in the PPA rate."
    },
    {
      question: "Why might my price change between LOI and contract signing?",
      answer: "LOI pricing is subject to final engineering, equipment, labor, and construction costs. Customers should provide energy usage, financials, and property credentials quickly to keep estimates accurate."
    },
    {
      question: "Is maintenance included?",
      answer: "Yes. Maintenance is provided under the PPA contract, typically performed by the EPC during the full contract term."
    },
    {
      question: "Is there an option to buyout the contract and own the system?",
      answer: "Yes, usually after 5–7 years, through a lump sum payment of remaining contract value."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
              <DocumentTextIcon className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Power Purchase Agreements
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A No-CapEx On-Site Decarbonization Solution
            </p>
          </div>
        </div>
      </section>

      {/* What is a PPA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                What is a Power Purchase Agreement and what does it include?
              </h2>
            </div>
            <Card className="border-border bg-card hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-6">
                  <DocumentTextIcon className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl font-semibold text-foreground text-center">
                  A No-CapEx On-Site Decarbonization Solution
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="text-lg leading-relaxed mb-4">
                    A Power Purchase Agreement (PPA) is a financial arrangement where a third-party developer installs, owns, and operates a solar energy system on your property while you purchase the generated electricity at a predetermined rate. This solution is perfect for homeowners and commercial real estate owners seeking to decarbonize and lower their energy costs with zero upfront investment or financing required.
                  </p>
                  <p className="text-lg leading-relaxed mb-4">
                    Under a PPA, you&apos;re paired with a financier who becomes the asset owner and includes full operations and maintenance coverage for the system&apos;s operating life. This includes 24/7/365 monitoring, damage claims, and emergency shutdown requirements. The result is an immediate building performance upgrade that can reduce energy expenses by 20% or more from day one.
                  </p>
                  <p className="text-lg leading-relaxed">
                    After the majority of incentives are captured, buyout options at Fair Market Value may be offered. When the system reaches the end of its operating life, decommissioning is fully covered by the asset owner under the PPA Agreement.
                  </p>
                </div>
                <div className="text-center pt-4">
                  <a 
                    href="https://betterbuildingssolutioncenter.energy.gov/financing-navigator/option/power-purchase-agreement" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-semibold"
                  >
                    Learn more about PPAs from the Better Buildings Solution Center
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Key Benefits of a PPA
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover why Power Purchase Agreements are the preferred choice for decarbonization and cost reduction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="border-border bg-card hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-3">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-6">
              <QuestionMarkCircleIcon className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Power Purchase Agreement Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get answers to the most common questions about Power Purchase Agreements.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {index + 1}. {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Explore a PPA?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team can help you determine if a Power Purchase Agreement is the right solution for your energy needs and decarbonization goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" passHref>
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold">
                  Get Started
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/resources" passHref>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold">
                  Back to Resources
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

