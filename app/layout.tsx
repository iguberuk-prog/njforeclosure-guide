import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ChatWidget from "./components/ChatWidget";

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
    images: [
      {
        url: "/images/logo-nj-foreclosure-guide.jpg",
        width: 1200,
        height: 1200,
        alt: "NJ Foreclosure Guide Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Foreclosure Help NJ | Stop Foreclosure in New Jersey",
    description: "Free guidance on 7 solutions to stop foreclosure. Get your personalized plan in 2 minutes.",
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
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
