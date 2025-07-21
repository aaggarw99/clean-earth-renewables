import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SunIcon } from "@heroicons/react/24/outline";

export function FeaturedProject() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Project
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how we're transforming energy production across the country
          </p>
        </div>

        <div className="relative">
          {/* Project Image Placeholder */}
          <div className="relative h-96 md:h-[500px] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            
            {/* Project Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                  {/* Project Details */}
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      350kW Solar Farm in Texas
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      A large-scale solar installation providing clean energy to over 200 homes
                    </p>
                    <Button 
                      size="lg"
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      View Project Case Study
                    </Button>
                  </div>

                  {/* Project Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                        350
                      </div>
                      <div className="text-sm text-muted-foreground">
                        kW Installed
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                        10k
                      </div>
                      <div className="text-sm text-muted-foreground">
                        tCO₂ Saved/Year
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                        Texas
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Location
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-8 right-8">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                <SunIcon className="w-8 h-8 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 