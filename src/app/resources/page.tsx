"use client";

import React from "react";
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
  HeartIcon,
  SunIcon,
  BuildingOffice2Icon,
  CogIcon,
  CalculatorIcon,
  InformationCircleIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

interface Company {
  name: string;
  logo: string;
  caseStudyHref: string | null;
  featured: boolean;
}

interface Industry {
  name: string;
  description: string;
  icon: React.ReactNode;
  companies: Company[];
  comingSoon: boolean;
}

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
    },
    {
      title: "Illinois Shines",
      description: "Explore community solar opportunities in Illinois and learn how the Illinois Shines program supports renewable energy adoption.",
      icon: <SunIcon className="w-8 h-8" />,
      href: "https://illinoisshines.com/exploring-community-solar/",
      external: true
    },
    {
      title: "ComEd's Community Solar Savings Calculator",
      description: "Calculate your potential savings with community solar through ComEd's interactive savings calculator tool.",
      icon: <CalculatorIcon className="w-8 h-8" />,
      href: "https://secure.comed.com/solar/MarketEnablement",
      external: true
    },
    {
      title: "Coalition for Community Solar Access",
      description: "Learn the basics of community solar and access comprehensive resources from the Coalition for Community Solar Access.",
      icon: <InformationCircleIcon className="w-8 h-8" />,
      href: "https://communitysolaraccess.org/community-solar-101",
      external: true
    },
    {
      title: "Illinois Solar Education Association Community Solar Resources",
      description: "Access educational resources and information about community solar programs available in Illinois.",
      icon: <SunIcon className="w-8 h-8" />,
      href: "https://www.illinoissolar.org/Community-Solar-Resources-IL",
      external: true
    },
    {
      title: "Solar Energy Industries Association - Community Solar",
      description: "Explore industry resources and information about community solar initiatives from SEIA, the national solar trade association.",
      icon: <SunIcon className="w-8 h-8" />,
      href: "https://seia.org/initiatives/community-solar/",
      external: true
    }
  ];

  const landownerResources = [
    {
      title: "Solar Energy Is Powering Our Nation's Future",
      description: "Learn how solar energy is transforming America's energy landscape and creating opportunities for landowners, municipalities, and real estate operators.",
      icon: <SunIcon className="w-8 h-8" />,
      href: "https://cleangridalliance.org/blog/235/solar-energy-is-powering-our-nations-future",
      external: true
    },
    {
      title: "American Clean Power Association: Solar Facts",
      description: "Access comprehensive facts and data about solar power from the American Clean Power Association to inform your renewable energy decisions.",
      icon: <InformationCircleIcon className="w-8 h-8" />,
      href: "https://cleanpower.org/facts/solar-power/",
      external: true
    }
  ];

  const industries: Industry[] = [
    {
      name: "Franchise",
      description: "Franchise operations scaling clean energy across multiple locations",
      icon: <BuildingOfficeIcon className="w-6 h-6" />,
      companies: [
        {
          name: "Dairy Queen",
          logo: "/assets/images/clients/dq.png",
          caseStudyHref: "/blog/dairy-queen-clean-energy-community-solar",
          featured: true
        },
        {
          name: "Subway",
          logo: "/assets/images/clients/subway.png",
          caseStudyHref: null,
          featured: false
        },
        {
          name: "Dunkin Donuts",
          logo: "/assets/images/clients/dunkindonuts.png",
          caseStudyHref: null,
          featured: false
        },
        {
          name: "BP",
          logo: "/assets/images/clients/bp.png",
          caseStudyHref: null,
          featured: false
        }
      ],
      comingSoon: false
    },
    {
      name: "Hospitality",
      description: "Hotels, restaurants, and hospitality businesses reducing energy costs",
      icon: <HomeIcon className="w-6 h-6" />,
      companies: [
        {
          name: "Choice Hotels",
          logo: "/assets/images/clients/choice-hotels.png",
          caseStudyHref: null,
          featured: false
        },
        {
          name: "Comfort Inn",
          logo: "/assets/images/clients/comfortinn.png",
          caseStudyHref: "/blog/comfort-inn-rockford-case-study",
          featured: false
        },
        {
          name: "EconoLodge",
          logo: "/assets/images/clients/econolodge.png",
          caseStudyHref: null,
          featured: false
        },
        {
          name: "Quality Inn",
          logo: "/assets/images/clients/qualityinn.png",
          caseStudyHref: null,
          featured: false
        },
        {
          name: "Sleep Inn",
          logo: "/assets/images/clients/sleepinn.png",
          caseStudyHref: null,
          featured: false
        },
        {
          name: "Wyndham",
          logo: "/assets/images/clients/wyndham.png",
          caseStudyHref: null,
          featured: false
        },
        {
          name: "AmericInn",
          logo: "/assets/images/clients/americinn.png",
          caseStudyHref: null,
          featured: false
        },
        {
          name: "Baymont Inn",
          logo: "/assets/images/clients/baymontinn.png",
          caseStudyHref: null,
          featured: false
        },
        {
          name: "Days Inn",
          logo: "/assets/images/clients/daysinn.png",
          caseStudyHref: null,
          featured: false
        },
        {
          name: "Super 8",
          logo: "/assets/images/clients/super8.png",
          caseStudyHref: null,
          featured: false
        },
        {
          name: "Hilton",
          logo: "/assets/images/clients/hilton.png",
          caseStudyHref: "/blog/hampton-inn-rockford-case-study",
          featured: true
        },
        {
          name: "Maple & Ash",
          logo: "/assets/images/clients/mapleandash.png",
          caseStudyHref: "/blog/maple-and-ash-restaurant-case-study",
          featured: true
        }
      ],
      comingSoon: false
    },
    {
      name: "Non-Profits",
      description: "Non-profit organizations maximizing savings for their missions",
      icon: <HeartIcon className="w-6 h-6" />,
      companies: [
        {
          name: "Humans at Help Foundation",
          logo: "/assets/images/clients/humansathelp.jpg",
          caseStudyHref: "/blog/humans-at-help-foundation-case-study",
          featured: true
        }
      ],
      comingSoon: false
    },
    {
      name: "Recycling Centers",
      description: "Recycling facilities powering operations with renewable energy",
      icon: <TruckIcon className="w-6 h-6" />,
      companies: [
        {
          name: "K&S Tire Recycling",
          logo: "/assets/images/clients/kands.png",
          caseStudyHref: "/blog/ks-tire-recycling-case-study",
          featured: true
        }
      ],
      comingSoon: false
    },
    {
      name: "Multi-Family",
      description: "Apartment complexes and multi-family housing developments",
      icon: <BuildingOffice2Icon className="w-6 h-6" />,
      companies: [
        {
          name: "FirstService Residential",
          logo: "/assets/images/clients/firstserviceresidential.png",
          caseStudyHref: "/blog/firstservice-residential-jefferson-tower-case-study",
          featured: true
        }
      ],
      comingSoon: false
    },
    {
      name: "Agriculture Producers & Operators",
      description: "Farms and agricultural operations harnessing renewable energy",
      icon: <SunIcon className="w-6 h-6" />,
      companies: [],
      comingSoon: true
    },
    {
      name: "Industrial",
      description: "Manufacturing facilities and industrial operations",
      icon: <CogIcon className="w-6 h-6" />,
      companies: [],
      comingSoon: true
    },
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
                  Consumer Resources
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
                            Learn More
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
              <div className="space-y-4">
                {industries.map((industry, index) => (
                  <Card key={index} className="border-border bg-card hover:shadow-md transition-shadow">
                    <CardContent className="px-4 py-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                          {industry.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-foreground mb-1">
                            {industry.name}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            {industry.description}
                          </p>
                          
                          {/* Companies Section */}
                          {industry.comingSoon ? (
                            <div className="bg-muted/20 rounded-md p-3 border border-border/30 text-center">
                              <p className="text-sm text-muted-foreground italic">
                                Coming Soon!
                              </p>
                            </div>
                          ) : (
                            <div className="space-y-3">
                              {/* Featured Company */}
                              {industry.companies.filter(company => company.featured).map((company, companyIndex) => (
                                <div key={companyIndex} className="bg-muted/20 rounded-md p-3 border border-border/30">
                                  <div className="flex items-center gap-3 mb-2">
                                    <div className="bg-background rounded-md p-2 flex items-center justify-center h-12 w-14 flex-shrink-0">
                                      <Image
                                        src={company.logo}
                                        alt={company.name}
                                        width={56}
                                        height={48}
                                        className="max-h-10 w-auto object-contain"
                                      />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <h4 className="font-semibold text-foreground text-sm mb-0.5">
                                        {company.name}
                                      </h4>
                                      <p className="text-xs text-muted-foreground">
                                        Featured Case Study
                                      </p>
                                    </div>
                                    {company.caseStudyHref && (
                                      <Link href={company.caseStudyHref}>
                                        <Button 
                                          size="sm"
                                          variant="outline"
                                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground whitespace-nowrap text-xs px-3 py-1 h-7"
                                        >
                                          Read More
                                        </Button>
                                      </Link>
                                    )}
                                  </div>
                                  
                                </div>
                              ))}
                              
                              {/* Other Companies Grid */}
                              {industry.companies.filter(company => !company.featured).length > 0 && (
                                <div className="bg-muted/10 rounded-md p-3 border border-border/20">
                                  <p className="text-xs text-muted-foreground mb-2">Other Partners:</p>
                                  <div className="grid grid-cols-2 gap-2">
                                    {industry.companies.filter(company => !company.featured).map((company, companyIndex) => (
                                      <div key={companyIndex} className="flex items-center gap-2">
                                        <div className="bg-background rounded p-1.5 flex items-center justify-center h-8 w-10 flex-shrink-0">
                                          <Image
                                            src={company.logo}
                                            alt={company.name}
                                            width={40}
                                            height={32}
                                            className="max-h-6 w-auto object-contain"
                                          />
                                        </div>
                                        <span className="text-xs text-foreground truncate">{company.name}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
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

      {/* Landowners, Municipalities, & Real Estate Operators Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Landowners, Municipalities, & Real Estate Operators
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Resources and information to help landowners, municipalities, and real estate operators understand the benefits and opportunities of solar energy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {landownerResources.map((resource, index) => (
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
                      Learn More
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 