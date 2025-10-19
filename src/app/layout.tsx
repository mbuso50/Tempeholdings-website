import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tempe Holdings (Pty) Ltd - Township Marketing Solutions",
  description: "Tempe Holdings (Pty) Ltd offers strategic marketing solutions for the R900 billion township market. Founded in 2012, we provide authentic township market expertise, local insights, and growth-focused strategies for South African businesses.",
  keywords: [
    "Tempe Holdings",
    "township marketing",
    "South Africa marketing",
    "Soweto marketing agency",
    "township market solutions",
    "R900 billion market",
    "local marketing expertise",
    "SMME growth",
    "Thapelo Mpete",
    "marketing strategies"
  ].join(", "),
  authors: [{ name: "Tempe Holdings (Pty) Ltd" }],
  creator: "Tempe Holdings (Pty) Ltd",
  publisher: "Tempe Holdings (Pty) Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tempeholdings.co.za'), // Replace with your actual domain
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://tempeholdings.co.za",
    title: "Tempe Holdings (Pty) Ltd - Township Marketing Solutions",
    description: "Your gateway to the R900 billion township market. Authentic marketing solutions since 2012.",
    siteName: "Tempe Holdings (Pty) Ltd",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tempe Holdings - Township Marketing Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tempe Holdings (Pty) Ltd - Township Marketing Solutions",
    description: "Your gateway to the R900 billion township market. Authentic marketing solutions since 2012.",
    images: ["/og-image.jpg"], // Same as OpenGraph image
    creator: "@TempeHoldings", // Replace with your actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // You can add Google Search Console verification here
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA">
      <head>
        {/* Favicon and additional meta tags */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://tempeholdings.co.za" />

        {/* Additional SEO meta tags */}
        <meta name="geo.region" content="ZA-GT" />
        <meta name="geo.placename" content="Johannesburg" />
        <meta name="geo.position" content="-26.2041;28.0473" />
        <meta name="ICBM" content="-26.2041, 28.0473" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}