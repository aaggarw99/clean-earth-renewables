import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CurrencyDollarIcon, 
  GlobeAltIcon, 
  CheckCircleIcon, 
  BuildingOffice2Icon,
  BanknotesIcon,
  UsersIcon
} from "@heroicons/react/24/outline";

const benefits = [
  {
    icon: <BuildingOffice2Icon className="w-8 h-8" />,
    title: "End-to-End Project Development",
    description: "We manage every phase of your renewable project—from land analysis to construction—so you don't have to.",
    bullets: [
      "Expert site analysis and acquisition",
      "Seamless contract negotiation and execution",
      "Network of experienced developers and EPCs",
      "Guaranteed zero upfront capital investment"
    ]
  },
  {
    icon: <BanknotesIcon className="w-8 h-8" />,
    title: "Flexible, Trusted Financing",
    description: "Our strong financial partnerships remove the risk and cost barriers to clean energy.",
    bullets: [
      "Backed by $2B+ in funding from top-tier institutions",
      "Custom financing with no upfront risk",
      "Full support for PPAs, leases, and buy-out options",
      "We own and operate the asset—so you don't have to"
    ]
  },
  {
    icon: <UsersIcon className="w-8 h-8" />,
    title: "Community Solar for All",
    description: "Join a local solar project without installing rooftop panels—and save on energy bills while supporting your community.",
    bullets: [
      "Annual electricity savings for renters & homeowners",
      "No installations or maintenance required",
      "Easy enrollment in local solar farms",
      "Shareable clean energy credits for you and your neighbors"
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
          We simplify the transition to clean energy by handling everything from development to
          financing—so you can focus on saving money, supporting your community, and reducing your carbon footprint.
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
                      <li key={bulletIndex} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircleIcon className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        {bullet}
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