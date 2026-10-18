import type { Metadata, Viewport } from "next";
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

const siteUrl = process.env.APP_DOMAIN || "https://andalan.tech";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jasa Pembuatan Website Cepat & SEO — Andalan Tech",
    template: "%s | Andalan Tech",
  },
  description:
    "Andalan Tech menyediakan jasa pembuatan website modern yang cepat dan SEO-friendly. Server, hosting, SSL, dan monitoring kami urus — Anda fokus ke bisnis.",
  keywords: [
    "jasa pembuatan website",
    "web development Indonesia",
    "jasa SEO",
    "Next.js",
    "company profile",
    "e-commerce",
    "landing page",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Andalan Tech",
    title: "Jasa Pembuatan Website Cepat & SEO — Andalan Tech",
    description:
      "Website modern, cepat, dan SEO-friendly. Server & maintenance kami urus penuh.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Pembuatan Website Cepat & SEO — Andalan Tech",
    description:
      "Website modern, cepat, dan SEO-friendly. Server & maintenance kami urus penuh.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b1f4b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
