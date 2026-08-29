import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { absoluteUrl } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next"
import { JsonLd } from "@/components/json-ld";
import { organizationAndWebsiteSchemas } from "@/lib/seo";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl()),
  title: {
    default: "MK WebTech | Shopify Apps and WordPress Plugins",
    template: "%s | MK WebTech"
  },
  description: "MK WebTech builds practical WordPress plugins, Shopify apps, and custom ecommerce software.",
  icons: {
    icon: [
      { url: "/logo.jpg", type: "image/jpeg" }
    ],
    shortcut: "/logo.jpg",
    apple: "/logo.jpg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito.variable} font-sans`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <JsonLd nodes={organizationAndWebsiteSchemas()} />
        <Analytics />
      </body>
    </html>
  );
}
