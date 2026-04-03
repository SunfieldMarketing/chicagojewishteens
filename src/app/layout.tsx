import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileStickyActions from "@/components/MobileStickyActions";

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: "Chicago Jewish Teens | Summer Camp Northbrook IL",
  description: "Join the ultimate Jewish camping experience for teens in Northbrook! Adventure trips, sports, and authentic Jewish spirit. Enroll for Summer 2026 now.",
  keywords: "Chicago Jewish Teens, Summer Camp Northbrook, Jewish Teen Camp, Camp Gan Israel, Teen Extreme, Jewish Youth Program IL",
  openGraph: {
    title: "Chicago Jewish Teens - Summer Camp Experience",
    description: "The ultimate camping experience for Jewish teens combining adventure, trips, and authentic values.",
    url: "https://chicagojewishteens.vercel.app",
    siteName: "Chicago Jewish Teens",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chicago Jewish Teens Summer Camp",
    description: "Wholesome friendships and inspiration that last a lifetime.",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} font-outfit antialiased bg-white dark:bg-black selection:bg-primary/20 selection:text-primary`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <MobileStickyActions />
      </body>
    </html>
  );
}
