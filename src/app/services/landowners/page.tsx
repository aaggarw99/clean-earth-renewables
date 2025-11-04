import type { Metadata } from "next";
import LandownersClient from "./LandownersClient";

export const metadata: Metadata = {
  title: "Host a Community Solar Farm | Clean Earth Renewables",
  description: "Convert Unused Land into Profit with Community Solar!",
  openGraph: {
    title: "Host a Community Solar Farm | Clean Earth Renewables",
    description: "Convert Unused Land into Profit with Community Solar!",
    url: "https://clean-earth.org/services/landowners",
    siteName: "Clean Earth Renewables",
    images: [
      {
        url: "https://clean-earth.org/assets/logos/logo_opengraph.png",
        width: 1200,
        height: 630,
        alt: "Clean Earth Renewables - Host a Community Solar Farm",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Host a Community Solar Farm | Clean Earth Renewables",
    description: "Convert Unused Land into Profit with Community Solar!",
    images: ["https://clean-earth.org/assets/logos/logo_opengraph.png"],
  },
  alternates: {
    canonical: "https://clean-earth.org/services/landowners",
  },
};

export default function LandownersPage() {
  return <LandownersClient />;
}
