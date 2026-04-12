import type { Metadata } from "next";
import { Syne, Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "ima — What can I do today?",
  description:
    "ima combines habit tracking and task management into one elegant, privacy-first app. Answer the only question that matters: What can I do today?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${outfit.variable} ${cormorant.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
