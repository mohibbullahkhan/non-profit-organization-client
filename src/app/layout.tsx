import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteMetadata } from "@/content";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteMetadata.name}`,
    default: `${siteMetadata.name} — Youth Climate Action & Sustainability in Bangladesh`,
  },
  description: siteMetadata.mission,
  keywords: [
    "climate action Bangladesh",
    "youth climate leadership",
    "sustainability",
    "mangrove restoration",
    "river cleanups",
    "eco fellowship",
    "SME circular economy",
  ],
  authors: [{ name: siteMetadata.name }],
  metadataBase: new URL("https://globalyouthchangemakers.org"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground selection:bg-primary/20 selection:text-primary">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
