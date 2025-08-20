"use client";

import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  DocumentTextIcon, 
  GlobeAltIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function ResourcesPage() {
  const resources = [
    {
      title: "Power Purchase Agreement (PPA)",
      description: "Learn about Power Purchase Agreements and how they can benefit your business or organization.",
      icon: <DocumentTextIcon className="w-8 h-8" />,
      href: "/resources/ppa",
      category: "Contracts & Agreements"
    },
    {
      title: "EPA GHG Equivalencies Calculator",
      description: "Convert emissions or energy data into concrete terms you can understand using the EPA's official calculator.",
      icon: <GlobeAltIcon className="w-8 h-8" />,
      href: "https://www.epa.gov/energy/greenhouse-gas-equivalencies-calculator",
      category: "Tools",
      external: true
    }
  ];

  // Group resources by category
  const groupedResources = resources.reduce((acc, resource) => {
    if (!acc[resource.category]) {
      acc[resource.category] = [];
    }
    acc[resource.category].push(resource);
    return acc;
  }, {} as Record<string, typeof resources>);

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Resources & Tools
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Access our comprehensive collection of resources, tools, and guides to help you navigate the world of renewable energy and make informed decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(groupedResources).map(([category, categoryResources]) => (
            <div key={category} className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryResources.map((resource, index) => (
                  <Card key={index} className="border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="pb-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                        {resource.icon}
                      </div>
                      <CardTitle className="text-xl font-semibold text-foreground">
                        {resource.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {resource.description}
                      </p>
                      {resource.external ? (
                        <a 
                          href={resource.href} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <Button 
                            variant="outline" 
                            className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                          >
                            Visit External Tool
                          </Button>
                        </a>
                      ) : (
                        <Link href={resource.href} passHref>
                          <Button 
                            variant="outline" 
                            className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                          >
                            Learn More
                          </Button>
                        </Link>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Need More Information?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Can&apos;t find what you&apos;re looking for? Our team is here to help you find the right renewable energy solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" passHref>
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold">
                  Contact Us
                </Button>
              </Link>
              <Link href="/services" passHref>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold">
                  View Services
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