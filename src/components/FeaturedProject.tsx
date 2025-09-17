import { Button } from "@/components/ui/button";
import { SunIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface Metric {
  value: string;
  label: string;
}

interface FeaturedProjectProps {
  backgroundImage: string;
  title: string;
  description: string;
  readStoryLink: string;
  metrics: Metric[];
  sectionTitle?: string;
  sectionSubtitle?: string;
}

export function FeaturedProject({ 
  backgroundImage, 
  title, 
  description, 
  readStoryLink, 
  metrics,
  sectionTitle = "Featured Project",
  sectionSubtitle = "See how we're transforming energy production across the country"
}: FeaturedProjectProps) {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {sectionTitle}
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            {sectionSubtitle}
          </p>
        </div>

        <div className="relative">
          {/* Project Image Background */}
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${backgroundImage}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            
            {/* Project Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                  {/* Project Details */}
                  <div className="space-y-4 p-6 rounded-xl bg-white/20 backdrop-blur-sm">
                    <h3 className="text-2xl md:text-3xl font-bold text-black drop-shadow-lg">
                      {title}
                    </h3>
                    <p className="text-black/80 text-lg font-medium drop-shadow-md">
                      {description}
                    </p>
                    <Link href={readStoryLink}>
                      <Button 
                        size="lg"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
                      >
                        Read Story
                      </Button>
                    </Link>
                  </div>

                  {/* Project Metrics */}
                  <div className={`grid gap-4 p-6 rounded-xl bg-white/20 backdrop-blur-sm ${
                    metrics.length === 3 ? 'grid-cols-3' : 
                    metrics.length === 2 ? 'grid-cols-2' : 
                    'grid-cols-1'
                  }`}>
                    {metrics.map((metric, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-black mb-1 drop-shadow-lg">
                          {metric.value}
                        </div>
                        <div className="text-sm text-black/70 font-medium drop-shadow-md">
                          {metric.label}
                        </div>
                      </div>
                    ))}
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