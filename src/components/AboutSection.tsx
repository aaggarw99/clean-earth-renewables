import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  UserGroupIcon, 
  MapPinIcon, 
  CurrencyDollarIcon, 
  CheckCircleIcon 
} from "@heroicons/react/24/outline";

const differentiators = [
  {
    icon: <UserGroupIcon className="w-6 h-6" />,
    title: "Expert Team",
    description: "Industry veterans with decades of renewable energy experience"
  },
  {
    icon: <MapPinIcon className="w-6 h-6" />,
    title: "Local Support",
    description: "Dedicated regional teams providing personalized service"
  },
  {
    icon: <CurrencyDollarIcon className="w-6 h-6" />,
    title: "Financing Options",
    description: "Flexible payment plans and financing solutions available"
  },
  {
    icon: <CheckCircleIcon className="w-6 h-6" />,
    title: "Proven Results",
    description: "Track record of successful projects and satisfied clients"
  }
];

export function AboutSection() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mission Statement */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              About Clean Earth
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Clean Earth Renewables is dedicated to making clean energy accessible, 
              low-risk, and financially beneficial for businesses, landowners, and individuals. 
              We believe that renewable energy should be a practical choice for everyone, 
              not just a luxury for the few.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mission is to accelerate the transition to clean energy by providing 
              comprehensive solutions that reduce costs, minimize risk, and maximize 
              environmental impact. We work with clients across the country to develop, 
              finance, and maintain renewable energy projects that deliver real results.
            </p>
          </div>

          {/* Differentiators */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Why Choose Us
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {differentiators.map((item, index) => (
                <Card key={index} className="border-border bg-background">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        {item.icon}
                      </div>
                      <CardTitle className="text-lg font-semibold text-foreground">
                        {item.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 