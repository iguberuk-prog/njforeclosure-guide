import type { Metadata } from "next";
import { fitTitle, fitDescription } from '../../lib/seo';

export const metadata: Metadata = {
  alternates: { canonical: 'https://njforeclosureguide.org/guides/' },
  title: fitTitle("Foreclosure Guides | Free Educational Resources for NJ Homeowners"),
  description: fitDescription("Free educational guides on foreclosure, your options, loan modification, refinancing, cash sales, bankruptcy protection, and more for New Jersey homeowners."),
  keywords: "foreclosure guides, foreclosure education, mortgage help guides, New Jersey homeowner resources",
};

export default function GuidesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
