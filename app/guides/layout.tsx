import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Foreclosure Guides | Free Educational Resources for NJ Homeowners",
  description: "Free educational guides on foreclosure, your options, loan modification, refinancing, cash sales, bankruptcy protection, and more for New Jersey homeowners.",
  keywords: "foreclosure guides, foreclosure education, mortgage help guides, New Jersey homeowner resources",
};

export default function GuidesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
