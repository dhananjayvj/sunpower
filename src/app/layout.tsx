import type { Metadata } from "next";
import "./globals.css";
import { contact, faqs, serviceAreas, services, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "SUNPOWER | SOLAR SOLUTIONS in Delhi NCR",
  description:
    "Residential, commercial, and subsidy-linked solar solutions across Delhi NCR from SUNPOWER, an authorized Loom Solar dealer.",
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
    title: "SUNPOWER | SOLAR SOLUTIONS in Delhi NCR",
    description: "Residential, commercial, subsidy-linked solar solutions",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "SUNPOWER solar solutions in Delhi NCR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SUNPOWER | SOLAR SOLUTIONS in Delhi NCR",
    description: "Residential, commercial, subsidy-linked solar solutions",
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
    shortcut: ["/icon.png"],
    apple: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
  },
};

const logoUrl = `${siteUrl}/images/logo.png`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "SUNPOWER",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
        width: 1889,
        height: 1025,
      },
      sameAs: [contact.instagramHref],
      email: contact.email,
      telephone: contact.phoneDisplay,
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#local-business`,
      name: "SUNPOWER",
      image: logoUrl,
      url: siteUrl,
      telephone: contact.phoneDisplay,
      email: contact.email,
      priceRange: "₹₹",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Office No. 3, B-47/A, Lane No. 6, Joshi Colony, I.P. Extension",
        addressLocality: "Delhi",
        postalCode: "110092",
        addressCountry: "IN",
      },
      areaServed: serviceAreas.map((area) => ({ "@type": "City", name: area })),
      knowsAbout: [
        "Rooftop solar installation",
        "Ground-mounted solar installation",
        "On-grid solar systems",
        "Hybrid solar systems",
        "Solar batteries and inverters",
        "PM Surya Ghar subsidy assistance",
        "Solar mounting structure contracting",
        "Commercial and industrial solar EPC",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "SUNPOWER solar services",
        itemListElement: services.map((service, index) => ({
          "@type": "Offer",
          position: index + 1,
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
            areaServed: "Delhi NCR",
            provider: { "@id": `${siteUrl}/#organization` },
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "SUNPOWER | SOLAR SOLUTIONS in Delhi NCR",
      url: siteUrl,
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-IN",
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {children}
      </body>
    </html>
  );
}
