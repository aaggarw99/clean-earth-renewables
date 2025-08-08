import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { FeaturedProject } from "@/components/FeaturedProject";
import { StatsSection } from "@/components/StatsSection";
import { AboutSection } from "@/components/AboutSection";
import { FinalCTA } from "@/components/FinalCTA";
import { TestimonialsExample } from "@/components/TestimonialsExample";
import { Footer } from "@/components/Footer";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <NavBar />
      <Hero />
      <BenefitsSection />
      <ServicesSection />
      <FeaturedProject />
      <StatsSection />
      <AboutSection />
      <FinalCTA />
      <TestimonialsExample />
      <Footer />
      <ThemeSwitcher />
      </main>
  );
}
