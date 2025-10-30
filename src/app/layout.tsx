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
  title: "Jasa pembuatan web & digitalisasi ~ Andalan Tech",
  description:
    "Kami andalan tech menyediakan jasa pembuatan website dengan ke unggulan di kecepatan dan SEO web, jadi web yang kami buat akan mudah ter index di mesin pencari, selain itu server dan layanan lainnya akan kami urus termasuk pemantauan terhadap masalah pada web, jadi anda bisa duduk santai percayakan urusan teknis kepada kami",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
