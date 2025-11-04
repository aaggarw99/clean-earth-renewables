import type { Metadata } from "next";
import BusinessesOffsiteClient from "./BusinessesOffsiteClient";

export const metadata: Metadata = {
  title: "Community Solar for Businesses (Off-Site) | Clean Earth Renewables",
  description: "Lower your business's energy costs and carbon footprint by subscribing to community solar—same utility, no cost or on-site changes required, tenant friendly.",
  openGraph: {
    title: "Community Solar for Businesses (Off-Site) | Clean Earth Renewables",
    description: "Lower your business's energy costs and carbon footprint by subscribing to community solar—same utility, no cost or on-site changes required, tenant friendly.",
    url: "https://clean-earth.org/services/businesses-offsite",
    siteName: "Clean Earth Renewables",
    images: [
      {
        url: "https://clean-earth.org/assets/logos/logo_opengraph.png",
        width: 1200,
        height: 630,
        alt: "Clean Earth Renewables - Community Solar for Businesses",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Community Solar for Businesses (Off-Site) | Clean Earth Renewables",
    description: "Lower your business's energy costs and carbon footprint by subscribing to community solar—same utility, no cost or on-site changes required, tenant friendly.",
    images: ["https://clean-earth.org/assets/logos/logo_opengraph.png"],
  },
  alternates: {
    canonical: "https://clean-earth.org/services/businesses-offsite",
  },
};

export default function BusinessesOffsitePage() {
  return <BusinessesOffsiteClient />;
}
