import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { absoluteUrl } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl()),
  title: {
    default: "MK WebTech | Shopify Apps and WordPress Plugins",
    template: "%s | MK WebTech"
  },
  description: "Premium Shopify apps and WordPress plugins for growing commerce teams.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "MK WebTech",
    description: "Premium Shopify apps and WordPress plugins for growing commerce teams.",
    url: "/",
    siteName: "MK WebTech",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "MK WebTech",
    description: "Premium Shopify apps and WordPress plugins for growing commerce teams."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
