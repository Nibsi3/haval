import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { FloatingWhatsApp } from "@/components/TrackedContact";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "The Maritime Group | Premium Automotive Dealer",
  description: "The Maritime Group represents South Africa's finest automotive brands. Explore our range of GWM, Haval, Mercedes-Benz, Kia, Honda and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical hero images for instant loading */}
        <link rel="preload" href="/cars/haval-tank-300.png" as="image" />
        <link rel="preload" href="/cars/haval-h6.png" as="image" />
        <link rel="preload" href="/cars/haval-h6-gt.png" as="image" />
        <link rel="preload" href="/cars/haval-pro.png" as="image" />
        <link rel="preload" href="/cars/haval-h7.png" as="image" />
        {/* Preload wallpapers used across top-level pages */}
        <link rel="preload" href="/wallpapers/tank300.jpg" as="image" />
        <link rel="preload" href="/wallpapers/h6gt.jpg" as="image" />
        <link rel="preload" href="/wallpapers/p500.webp" as="image" />
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-white`}
      >
        <GoogleAnalytics />
        {children}
        <FloatingWhatsApp whatsappNumber="27662995533" message="Hi, I'm interested in learning more about your vehicles at Maritime Motors." />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
