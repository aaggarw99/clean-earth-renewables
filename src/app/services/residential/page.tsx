import type { Metadata } from "next";
import ResidentialClient from "./ResidentialClient";

export const metadata: Metadata = {
  title: "Community Solar for Residents | Clean Earth Renewables",
  description: "Save up to 20% on electricity, no solar panels, same utility bill, tenant-friendly. Clean Earth Renewables brings environmental and economic benefits to your neighborhood.",
  openGraph: {
    title: "Community Solar for Residents | Clean Earth Renewables",
    description: "Save up to 20% on electricity, no solar panels, same utility bill, tenant-friendly. Clean Earth Renewables brings environmental and economic benefits to your neighborhood.",
    url: "https://clean-earth.org/services/residential",
    siteName: "Clean Earth Renewables",
    images: [
      {
        url: "https://clean-earth.org/assets/logos/logo_opengraph.png",
        width: 1200,
        height: 630,
        alt: "Clean Earth Renewables - Community Solar for Residents",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Community Solar for Residents | Clean Earth Renewables",
    description: "Save up to 20% on electricity, no solar panels, same utility bill, tenant-friendly. Clean Earth Renewables brings environmental and economic benefits to your neighborhood.",
    images: ["https://clean-earth.org/assets/logos/logo_opengraph.png"],
  },
  alternates: {
    canonical: "https://clean-earth.org/services/residential",
  },
};

export default function ResidentialPage() {
  return <ResidentialClient />;
}
