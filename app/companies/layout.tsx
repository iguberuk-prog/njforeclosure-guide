import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Foreclosure Solutions Companies | Cash Buyers in New Jersey",
  description: "Connect with verified cash buyer companies in New Jersey offering fast home sales, foreclosure solutions, and cash offers in 24 hours.",
  keywords: "cash buyers New Jersey, foreclosure solutions, sell house fast NJ, home buying companies, NJOffer",
  openGraph: {
    title: "Foreclosure Solutions Companies | New Jersey Cash Buyers",
    description: "Cash offers for NJ homes in foreclosure. Compare companies, timelines and trade-offs before you decide.",
    type: "website",
  },
};

export default function CompaniesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
