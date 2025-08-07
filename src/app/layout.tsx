import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { ClientThemeProvider } from "@/components/ClientThemeProvider";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clean Earth Renewables - Powering Your Future with Clean Energy",
  description: "Clean Earth Renewables helps businesses, landowners, and individuals unlock clean energy savings through solar development, financing, and subscriptions.",
  icons: {
    icon: "/assets/logos/Favicon - Primary.png",
    shortcut: "/assets/logos/Favicon - Primary.png",
    apple: "/assets/logos/Favicon - Primary.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen bg-background font-sans antialiased ${bricolage.variable}`}>
        <ClientThemeProvider>
          {children}
        </ClientThemeProvider>
      </body>
    </html>
  );
}
