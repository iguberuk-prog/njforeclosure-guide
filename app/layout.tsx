import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ChatWidget from "./components/ChatWidget";
import { LocalBusinessSchema } from "./schema";
import CallBand from "./components/CallBand";
import MarsNotice from "./components/MarsNotice";
import Analytics from "./components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // "Guide" and "help", never "stop foreclosure". The site's own pages are
  // careful to present options rather than promise outcomes (MARS/Reg O);
  // the title is not the place to make the one claim everything else avoids.
  title: "NJ Foreclosure Guide | Free Help for New Jersey Homeowners",
  description: "Facing foreclosure in New Jersey? A free, independent guide to every option you have, including the ones that keep you in your home. See where you stand in 2 minutes.",
  keywords: "foreclosure help NJ, New Jersey foreclosure options, mortgage assistance NJ, foreclosure guide NJ, keep my home NJ",
  metadataBase: new URL("https://njforeclosureguide.org"),
  alternates: {
    canonical: "https://njforeclosureguide.org",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://njforeclosureguide.org",
    title: "NJ Foreclosure Guide | Free Help for New Jersey Homeowners",
    description: "A free, independent guide to every option a New Jersey homeowner has in foreclosure, including the ones that keep you in your home.",
    siteName: "NJ Foreclosure Guide",
    // 1200x630 is the size Facebook, LinkedIn and X actually crop to. The
    // previous file was a square logo carrying visible registration
    // crosshairs, which is what appeared whenever anyone shared the site.
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "NJ Foreclosure Guide: seven ways out of a New Jersey foreclosure, five of them keep your home.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NJ Foreclosure Guide | Free Help for New Jersey Homeowners",
    description: "A free, independent guide to every foreclosure option in New Jersey. See where you stand in 2 minutes.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  // The previous favicon file was a 512px template sheet showing FOUR
  // different logos, one of them a boat anchor. That sheet, scaled to 16px,
  // was the browser-tab icon. These are rendered from the actual mark.
  icons: {
    icon: [
      { url: "/images/brand/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/brand/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/images/brand/apple-icon.png",
  },
  verification: {
    google: "8fc4eA-ZCuoqq4GwMPyiE6PDIkSeymT4iPBasg_G_I8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LocalBusinessSchema />
        {children}
        <MarsNotice />
        <CallBand />
        <ChatWidget />
        <Analytics />
      </body>
    </html>
  );
}
