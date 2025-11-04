import type { Metadata } from "next";
import BusinessesOnsiteClient from "./BusinessesOnsiteClient";

export const metadata: Metadata = {
  title: "Lease Your Commercial Rooftop | Clean Earth Renewables",
  description: "Convert unused commercial rooftop space into profit while supporting clean energy.",
  openGraph: {
    title: "Lease Your Commercial Rooftop | Clean Earth Renewables",
    description: "Convert unused commercial rooftop space into profit while supporting clean energy.",
    url: "https://clean-earth.org/services/businesses-onsite",
    siteName: "Clean Earth Renewables",
    images: [
      {
        url: "https://clean-earth.org/assets/logos/logo_opengraph.png",
        width: 1200,
        height: 630,
        alt: "Clean Earth Renewables - Lease Your Commercial Rooftop",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lease Your Commercial Rooftop | Clean Earth Renewables",
    description: "Convert unused commercial rooftop space into profit while supporting clean energy.",
    images: ["https://clean-earth.org/assets/logos/logo_opengraph.png"],
  },
  alternates: {
    canonical: "https://clean-earth.org/services/businesses-onsite",
  },
};

export default function BusinessesOnsitePage() {
  return <BusinessesOnsiteClient />;
}
