import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
        <link rel="preload" href="/cars/Haval Tank 300.png" as="image" />
        <link rel="preload" href="/cars/Haval H6.png" as="image" />
        <link rel="preload" href="/cars/Haval H6 GT.png" as="image" />
        <link rel="preload" href="/cars/Haval Pro.png" as="image" />
        <link rel="preload" href="/cars/Haval H7.png" as="image" />
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-white`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
