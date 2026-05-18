import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SDL Cargo — Global Freight Forwarding & Logistics Solutions",
  description:
    "SDL Cargo is a premier international freight forwarder coordinating seamless cross-border logistics via sea, air, road, and rail. End-to-end shipping, customs brokerage, warehouse planning, and real-time cargo tracking worldwide.",
  keywords: [
    "freight forwarding",
    "cargo logistics",
    "international shipping",
    "customs brokerage",
    "ocean freight",
    "air freight",
    "ground transport",
    "warehouse planning",
    "supply chain management",
  ],
  openGraph: {
    title: "SDL Cargo — Global Freight Forwarding & Logistics Solutions",
    description:
      "Your trusted partner in international logistics. Sea, Air, Road — we move the world.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
