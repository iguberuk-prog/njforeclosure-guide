import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ChatWidget from "./components/ChatWidget";
import { LocalBusinessSchema } from "./schema";
import CallBand from "./components/CallBand";
import MarsNotice from "./components/MarsNotice";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Foreclosure Help NJ | 7 Real Solutions to Stop Foreclosure in New Jersey",
  description: "Stop foreclosure in New Jersey. Free guidance on 7 solutions: loan modification, refinancing, forbearance, short sale, cash sale, bankruptcy protection. Get a personalized plan in 2 minutes.",
  keywords: "foreclosure help NJ, stop foreclosure New Jersey, mortgage assistance NJ, distressed homeowner NJ, cash buyer New Jersey",
  metadataBase: new URL("https://njforeclosureguide.org"),
  alternates: {
    canonical: "https://njforeclosureguide.org",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://njforeclosureguide.org",
    title: "Foreclosure Help NJ | 7 Real Solutions to Stop Foreclosure",
    description: "Stop foreclosure in New Jersey. Free personalized guidance on 7 solutions. Get your options in 2 minutes.",
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
    title: "Foreclosure Help NJ | Stop Foreclosure in New Jersey",
    description: "Free guidance on 7 solutions to stop foreclosure. Get your personalized plan in 2 minutes.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  icons: {
    icon: "/images/logo-favicon.png",
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
      </body>
    </html>
  );
}
