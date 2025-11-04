import type { Metadata } from "next";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Clean Energy Insights | Clean Earth Renewables",
  description: "Clean Energy Insights",
  openGraph: {
    title: "Clean Energy Insights | Clean Earth Renewables",
    description: "Clean Energy Insights",
    url: "https://clean-earth.org/blog",
    siteName: "Clean Earth Renewables",
    images: [
      {
        url: "https://clean-earth.org/assets/logos/logo_opengraph.png",
        width: 1200,
        height: 630,
        alt: "Clean Earth Renewables - Clean Energy Insights",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clean Energy Insights | Clean Earth Renewables",
    description: "Clean Energy Insights",
    images: ["https://clean-earth.org/assets/logos/logo_opengraph.png"],
  },
  alternates: {
    canonical: "https://clean-earth.org/blog",
  },
};

export default function BlogPage() {
  return <BlogClient />;
}
