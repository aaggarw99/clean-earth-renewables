import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const differentiators = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Expert Team",
    description: "Industry veterans with decades of renewable energy experience"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Local Support",
    description: "Dedicated regional teams providing personalized service"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    ),
    title: "Financing Options",
    description: "Flexible payment plans and financing solutions available"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
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