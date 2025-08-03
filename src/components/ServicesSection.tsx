import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BoltIcon, 
  SunIcon, 
  BuildingOfficeIcon,
  CheckIcon,
  HomeIcon,
  MapPinIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";

const services = [
  {
    icon: <HomeIcon className="w-8 h-8" />,
    title: "Residential",
    description: "Subscribe to solar energy without installing panels on your home",
    features: ["Home solar subscriptions", "No upfront costs", "Monthly energy savings"],
    cta: "Subscribe to a Solar Farm",
    href: "/services/community-solar-residential"
  },
  {
    icon: <BuildingOfficeIcon className="w-8 h-8" />,
    title: "Businesses (On-Site)",
    description: "Install solar panels on your business rooftop for immediate savings",
    features: ["Commercial rooftop solar", "Energy cost reduction", "Tax incentives"],
    cta: "Lease My Roof",
    href: "/services/lease-rooftop-businesses"
  },
  {
    icon: <SunIcon className="w-8 h-8" />,
    title: "Businesses (Off-Site)",
    description: "Subscribe to off-site solar energy for predictable business costs",
    features: ["Off-site solar subscriptions", "Predictable energy costs", "Corporate sustainability"],
    cta: "Subscribe to a Solar Farm",
    href: "/services/community-solar-businesses"
  },
  {
    icon: <BoltIcon className="w-8 h-8" />,
    title: "Landowners",
    description: "Earn income by hosting solar farms on your land",
    features: ["Land lease payments", "Agricultural compatibility", "Long-term income"],
    cta: "Host a Solar Farm",
    href: "/services/host-solar-farm"
  }
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive renewable energy solutions for every need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <CheckIcon className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={service.href} passHref>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    {service.cta}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 