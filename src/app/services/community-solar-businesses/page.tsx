import { NavBar } from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CommunitySolarBusinessesPage() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/backgrounds/solar-energy-concept-atlanta-1.png"
            alt="Community Solar Businesses Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Community Solar for Businesses (Off Site)
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Lower your business's energy costs and carbon footprint by subscribing to a local solar project—no on-site installation required.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold">
            Learn More
          </Button>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
            Benefits for Your Business
          </h2>
          <ul className="space-y-4 text-lg text-muted-foreground">
            <li>✔️ No on-site construction or maintenance</li>
            <li>✔️ Predictable, lower energy costs</li>
            <li>✔️ Supports corporate sustainability goals</li>
            <li>✔️ Flexible subscription options for all business sizes</li>
          </ul>
        </div>
      </section>
    </div>
  );
} 