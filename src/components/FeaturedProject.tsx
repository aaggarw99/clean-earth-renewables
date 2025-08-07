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
          <p className="text-lg text-black max-w-2xl mx-auto">
            See how we're transforming energy production across the country
          </p>
        </div>

        <div className="relative">
          {/* Project Image Background */}
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/assets/images/backgrounds/panels-grass-overview.png')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            
            {/* Project Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                  {/* Project Details */}
                  <div className="space-y-4 p-6 rounded-xl bg-white/20 backdrop-blur-sm">
                    <h3 className="text-2xl md:text-3xl font-bold text-black drop-shadow-lg">
                      Solar for All Subscriber in Skokie
                    </h3>
                    <p className="text-black/80 text-lg font-medium drop-shadow-md">
                      Projected to save $480 per year when their community solar project goes live
                    </p>
                    <Button 
                      size="lg"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
                    >
                      Read Story
                    </Button>
                  </div>

                  {/* Project Metrics */}
                  <div className="grid grid-cols-3 gap-4 p-6 rounded-xl bg-white/20 backdrop-blur-sm">
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-black mb-1 drop-shadow-lg">
                        $200
                      </div>
                      <div className="text-sm text-black/70 font-medium drop-shadow-md">
                        Monthly Electric Bill
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-black mb-1 drop-shadow-lg">
                        $40
                      </div>
                      <div className="text-sm text-black/70 font-medium drop-shadow-md">
                        Monthly Credits (20%)
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-black mb-1 drop-shadow-lg">
                        $480
                      </div>
                      <div className="text-sm text-black/70 font-medium drop-shadow-md">
                        Annual Savings
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