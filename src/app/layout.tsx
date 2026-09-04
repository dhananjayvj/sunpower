import type { Metadata } from "next";
import "./globals.css";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sun Power | Renewable Energy Solutions in Delhi NCR",
  description:
    "Sun Power is an authorized Loom Solar dealer in Delhi NCR for rooftop and ground-mounted solar, batteries, inverters, PM Surya Ghar subsidy support, and EPC/MMS contracting.",
  keywords: [
    "solar company Delhi NCR",
    "rooftop solar Delhi",
    "Loom Solar dealer Delhi",
    "PM Surya Ghar subsidy",
    "commercial solar Delhi NCR",
    "solar panels batteries inverters Delhi NCR",
    "MMS contracting Delhi NCR",
  ],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Sun Power | Renewable Energy Solutions in Delhi NCR",
    description:
      "Residential, commercial, industrial, rooftop, ground-mounted, subsidy-linked, and MMS solar solutions for Delhi NCR buyers.",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Sun Power solar solutions in Delhi NCR",
      },
    ],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Sun Power",
  image: `${siteUrl}/images/image-trimmed.png`,
  telephone: "+91 95604 73434",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Office No. 3, B-47/A, Lane No. 6, Joshi Colony, I.P. Extension",
    addressLocality: "Delhi",
    postalCode: "110092",
    addressCountry: "IN",
  },
  areaServed: "Delhi NCR",
  url: siteUrl,
  description:
    "Solar energy dealership and EPC/MMS contracting firm offering rooftop and ground-mounted systems, batteries, inverters, and PM Surya Ghar subsidy assistance.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}
