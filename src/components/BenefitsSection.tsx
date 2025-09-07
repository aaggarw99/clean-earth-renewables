import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CheckCircleIcon, 
  BuildingOffice2Icon,
  BanknotesIcon,
  UsersIcon
} from "@heroicons/react/24/outline";

const benefits = [
  {
    icon: <BuildingOffice2Icon className="w-8 h-8" />,
    title: "Project Development",
    description: "We manage every phase of your renewable project—from land analysis to construction—so you don't have to.",
    bullets: [
      "Site analysis & acquisition",
      "Utility interconnection",
      "Initial layout, system design & permitting",
      "Construction & commissioning"
    ]
  },
  {
    icon: <BanknotesIcon className="w-8 h-8" />,
    title: "Project Financing",
    description: "Our strong financial partnerships remove the risk and investment requirement to deploying distributed energy resources at-scale for businesses and communities.",
    bullets: [
      "Leverage $2B+ in financing from industry-leading IPP's and Financiers",
      "Access a community or enterprise-scale behind-the-meter or front-of-the-meter on-site solar system with zero out-of-pocket investment",
      "Secure full operations & maintenance for the entire operating life of the project",
      "PPA financing & roof lease ROI analysis included"
    ]
  },
  {
    icon: <UsersIcon className="w-8 h-8" />,
    title: "Community Solar",
    description: "Join a local solar project without installing rooftop panels—and save on energy bills while supporting your community's clean energy goals.",
    bullets: [
      "Earn a share of clean energy savings that's proven to lower your electric bill",
      "Fast & easy enrollment process",
      "Higher discounts for income-driven households",
      "No installation, no utility change, and no equipment required"
    ]
  }
];

export function BenefitsSection() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Clean Earth?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Clean Earth Renewables is a community solar provider serving all major community solar markets across the U.S.,
          unlocking access to clean energy savings for electricity customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center border-border bg-background hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  {benefit.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {benefit.description}
                </p>
                {benefit.bullets && (
                  <ul className="space-y-2">
                    {benefit.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start text-sm text-muted-foreground">
                        <CheckCircleIcon className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-left">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 