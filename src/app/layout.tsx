import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sun Power | Rooftop Solar Solutions in Delhi NCR",
  description:
    "Lead-focused solar website for Sun Power, an authorized Loom Solar dealer serving Delhi NCR with rooftop solar, batteries, inverters, subsidy guidance, and EPC/MMS contracting.",
  keywords: [
    "solar company Delhi NCR",
    "rooftop solar Delhi",
    "Loom Solar dealer Delhi",
    "PM Surya Ghar subsidy",
    "commercial solar Delhi NCR",
  ],
  metadataBase: new URL("https://sunpowerind.com"),
  openGraph: {
    title: "Sun Power | Rooftop Solar Solutions in Delhi NCR",
    description:
      "Residential, commercial, industrial, and MMS solar contracting with subsidy assistance and rapid site surveys.",
    type: "website",
    url: "https://sunpowerind.com",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Sun Power",
  image: "https://sunpowerind.com/opengraph-image",
  telephone: "+91 95604 73434",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Office No. 3, B-47/A, Lane No. 6, Joshi Colony, I.P. Extension",
    addressLocality: "Delhi",
    postalCode: "110092",
    addressCountry: "IN",
  },
  areaServed: "Delhi NCR",
  url: "https://sunpowerind.com",
  description:
    "Solar energy dealership and EPC/MMS contracting firm offering rooftop and ground-mounted systems, batteries, inverters, and PM Surya Ghar subsidy assistance.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${ibmPlexMono.variable} h-full scroll-smooth antialiased`}
    >
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
