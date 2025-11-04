import type { Metadata } from "next";
import PPAClient from "./PPAClient";

export const metadata: Metadata = {
  title: "Power Purchase Agreements (PPA) | Clean Earth Renewables",
  description: "A No-CapEx On-Site Solar Solution for commercial, industrial, multi-family and public facility operators.",
  openGraph: {
    title: "Power Purchase Agreements (PPA) | Clean Earth Renewables",
    description: "A No-CapEx On-Site Solar Solution for commercial, industrial, multi-family and public facility operators.",
    url: "https://clean-earth.org/resources/ppa",
    siteName: "Clean Earth Renewables",
    images: [
      {
        url: "https://clean-earth.org/assets/logos/logo_opengraph.png",
        width: 1200,
        height: 630,
        alt: "Clean Earth Renewables - Power Purchase Agreements",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Power Purchase Agreements (PPA) | Clean Earth Renewables",
    description: "A No-CapEx On-Site Solar Solution for commercial, industrial, multi-family and public facility operators.",
    images: ["https://clean-earth.org/assets/logos/logo_opengraph.png"],
  },
  alternates: {
    canonical: "https://clean-earth.org/resources/ppa",
  },
};

export default function PPAPage() {
  return <PPAClient />;
}
