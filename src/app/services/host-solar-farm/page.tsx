import { NavBar } from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HostSolarFarmPage() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/backgrounds/solar-energy-concept-atlanta-1.png"
            alt="Host a Solar Farm Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Host a Solar Farm
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Put your land to work for you and your community. Earn long-term income by hosting a solar farm on your property.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold">
            See If You Qualify
          </Button>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
            Benefits for Landowners
          </h2>
          <ul className="space-y-4 text-lg text-muted-foreground">
            <li>✔️ Steady, long-term lease income</li>
            <li>✔️ Minimal impact on farming or ranching operations</li>
            <li>✔️ No development or maintenance costs</li>
            <li>✔️ Support your community's clean energy future</li>
          </ul>
        </div>
      </section>
    </div>
  );
} 