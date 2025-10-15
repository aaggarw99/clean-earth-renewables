"use client";

import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  DocumentTextIcon, 
  GlobeAltIcon,
  BuildingOfficeIcon,
  HomeIcon,
  TruckIcon,
  HeartIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

export default function ResourcesPage() {
  const contractsAndAgreements = [
    {
      title: "Power Purchase Agreement (PPA)",
      description: "Learn about Power Purchase Agreements and how they can benefit your business or organization.",
      icon: <DocumentTextIcon className="w-8 h-8" />,
      href: "/resources/ppa",
      external: false
    }
  ];

  const tools = [
    {
      title: "EPA GHG Equivalencies Calculator",
      description: "Convert emissions or energy data into concrete terms you can understand using the EPA's official calculator.",
      icon: <GlobeAltIcon className="w-8 h-8" />,
      href: "https://www.epa.gov/energy/greenhouse-gas-equivalencies-calculator",
      external: true
    }
  ];

  const industries = [
    {
      name: "Recycling Centers",
      description: "Recycling facilities powering operations with renewable energy",
      icon: <TruckIcon className="w-6 h-6" />,
      companyName: "K&S Tire Recycling",
      companyLogo: "/assets/images/clients/kands.png",
      caseStudyHref: "/blog/ks-tire-recycling-case-study"
    },
    {
      name: "Non-Profits",
      description: "Non-profit organizations maximizing savings for their missions",
      icon: <HeartIcon className="w-6 h-6" />,
      companyName: "Humans at Help Foundation",
      companyLogo: "/assets/images/clients/humansathelp.jpg",
      caseStudyHref: "/blog/humans-at-help-foundation-case-study"
    },
    {
      name: "Franchise",
      description: "Franchise operations scaling clean energy across multiple locations",
      icon: <BuildingOfficeIcon className="w-6 h-6" />,
      companyName: "Dairy Queen",
      companyLogo: "/assets/images/clients/dq.png",
      caseStudyHref: "/blog/dairy-queen-clean-energy-community-solar"
    },
    {
      name: "Hospitality",
      description: "Hotels, restaurants, and hospitality businesses reducing energy costs",
      icon: <HomeIcon className="w-6 h-6" />,
      companyName: "Maple & Ash",
      companyLogo: "/assets/images/clients/mapleandash.png",
      caseStudyHref: "/blog/maple-and-ash-restaurant-case-study"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
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

      {/* Two Column Layout */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column: Contracts & Agreements + Tools */}
            <div className="space-y-12">
              {/* Contracts & Agreements Section */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                  Contracts & Agreements
                </h2>
                <div className="space-y-6">
                  {contractsAndAgreements.map((resource, index) => (
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
                        <Link href={resource.href}>
                          <Button 
                            variant="outline" 
                            className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                          >
                            Learn More
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Tools Section */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                  Tools
                </h2>
                <div className="space-y-6">
                  {tools.map((resource, index) => (
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
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Industries We Serve */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                Industries We Serve
              </h2>
              <div className="space-y-6">
                {industries.map((industry, index) => (
                  <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow">
                    <CardContent className="px-6 py-0">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                          {industry.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-foreground mb-2">
                            {industry.name}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            {industry.description}
                          </p>
                          
                          {/* Company Logo and Case Study Section */}
                          {industry.companyLogo && industry.caseStudyHref ? (
                            <div className="bg-muted/30 rounded-lg p-4 border border-border/50">
                              <div className="flex items-center gap-4">
                                <div className="bg-background rounded-lg p-3 flex items-center justify-center h-16 w-20 flex-shrink-0">
                                  <Image
                                    src={industry.companyLogo}
                                    alt={industry.companyName}
                                    width={80}
                                    height={60}
                                    className="max-h-12 w-auto object-contain"
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-semibold text-foreground mb-1">
                                    {industry.companyName}
                                  </h4>
                                  <p className="text-xs text-muted-foreground">
                                    Featured Case Study
                                  </p>
                                </div>
                                <Link href={industry.caseStudyHref}>
                                  <Button 
                                    size="sm"
                                    variant="outline"
                                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground whitespace-nowrap"
                                  >
                                    Read More
                                  </Button>
                                </Link>
                              </div>
                            </div>
                          ) : (
                            <div className="bg-muted/30 rounded-lg p-4 border border-border/50 text-center">
                              <p className="text-sm text-muted-foreground italic">
                                Case study coming soon
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 