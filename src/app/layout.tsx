import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Winter Wonder Lights GA | Christmas Light Installation | Atlanta Metro",
    template: "%s | Winter Wonder Lights GA",
  },
  description:
    "Atlanta's top choice for professional Christmas and holiday light installation. Serving metro Atlanta since 2016. Free estimates, commercial-grade lights.",
  keywords: [
    "Christmas lights",
    "holiday lighting",
    "Atlanta Christmas light installation",
    "holiday light installation",
    "residential Christmas lights",
    "commercial Christmas lighting",
    "Winter Wonder Lights",
  ],
  openGraph: {
    title: "Winter Wonder Lights GA | Holiday Light Installation",
    description:
      "Atlanta's top choice for professional Christmas and holiday light installation. Free estimates available.",
    siteName: "Winter Wonder Lights GA",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
