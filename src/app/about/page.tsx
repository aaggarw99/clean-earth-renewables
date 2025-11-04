import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Clean Earth Renewables",
  description: "About Us",
  openGraph: {
    title: "About Us | Clean Earth Renewables",
    description: "About Us",
    url: "https://clean-earth.org/about",
    siteName: "Clean Earth Renewables",
    images: [
      {
        url: "https://clean-earth.org/assets/logos/logo_opengraph.png",
        width: 1200,
        height: 630,
        alt: "Clean Earth Renewables - About Us",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Clean Earth Renewables",
    description: "About Us",
    images: ["https://clean-earth.org/assets/logos/logo_opengraph.png"],
  },
  alternates: {
    canonical: "https://clean-earth.org/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
