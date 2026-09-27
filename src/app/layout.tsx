import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import FloatingCtaBar from "@/components/FloatingCtaBar";
import WhatsAppButton from "@/components/WhatsAppButton";
import ApplyModal from "@/components/ApplyModal";
import { SITE_CONFIG } from "@/data/siteData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.loan-samadhan.in"),
  title: {
    default: "Loan Samadhan Udaipur | Home, Business, Personal & Car Loan Consultant",
    template: "%s | Loan Samadhan Udaipur",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/logo.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  description:
    "लोन नहीं तो कोई फीस नहीं - Loan Samadhan is Udaipur's premier finance consultancy offering Home Loans, Business Loans, Personal Loans, Car Loans, and LAP with 25+ leading banks at lowest interest rates.",
  keywords: [
    "Loan Samadhan Udaipur",
    "Home Loan Udaipur",
    "Business Loan Rajasthan",
    "Personal Loan Udaipur",
    "Car Loan Udaipur",
    "Loan Against Property Udaipur",
    "Loan Consultant Rajasthan",
    "लोन नहीं तो कोई फीस नहीं",
    "Mortgage loan Udaipur",
    "Best DSA loan partner Udaipur"
  ],
  authors: [{ name: "Loan Samadhan Financial Services" }],
  creator: "Loan Samadhan",
  publisher: "Loan Samadhan",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.loan-samadhan.in",
    siteName: "Loan Samadhan",
    title: "Loan Samadhan | हर जरूरत के लिए सही लोन समाधान",
    description: "लोन नहीं तो कोई फीस नहीं - Lowest interest loan assistance through 25+ partner banks in Udaipur, Rajasthan.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Loan Samadhan - Expert Loan Consultancy Udaipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loan Samadhan Udaipur | Best Loan Consultant",
    description: "लोन नहीं तो कोई फीस नहीं. Compare 25+ Banks for Home, Business & Personal Loans in Udaipur.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.loan-samadhan.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: "https://www.loan-samadhan.in",
    logo: "https://www.loan-samadhan.in/images/logo.png",
    image: "https://www.loan-samadhan.in/images/logo.png",
    telephone: SITE_CONFIG.phone,
    priceRange: "Zero Upfront Fees (लोन नहीं तो कोई फीस नहीं)",
    slogan: SITE_CONFIG.taglineHindi,
    description:
      "Loan Samadhan is Udaipur's top finance consultancy providing Home Loans, Business Loans, Personal Loans, Car Loans and Loan Against Property with zero consultancy fee.",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${SITE_CONFIG.address.office}, ${SITE_CONFIG.address.street}`,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "24.5933618",
      longitude: "73.6934898",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:30",
        closes: "19:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "230",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Udaipur",
      },
      {
        "@type": "State",
        name: "Rajasthan",
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-white text-surface-text">
        <ScrollProgressBar />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingCtaBar />
        <WhatsAppButton />
        <ApplyModal />
      </body>
    </html>
  );
}
