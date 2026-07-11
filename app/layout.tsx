import type { Metadata } from "next";
import { Instrument_Serif, Cormorant_Garamond, Literata } from "next/font/google";
import "./globals.css";
import "@/styles/experience.css";
import ThemeToggle from "@/components/layout/ThemeToggle";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const literata = Literata({
  subsets: ["latin"],
  variable: "--font-literata",
});

export const metadata: Metadata = {
  title: "Nandhini",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.variable} ${cormorant.variable} ${literata.variable} font-sans`}
      >
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}
