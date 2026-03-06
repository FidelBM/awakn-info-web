import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap"
});

export const metadata: Metadata = {
  title: "AWAKN Pre-Workout Gummies | Clean Vegan Performance Energy",
  description:
    "AWAKN pre-workout gummies deliver clean, vegan energy in a solid format designed for athletes and active lifestyles.",
  openGraph: {
    title: "AWAKN Pre-Workout Gummies | Clean Vegan Performance Energy",
    description:
      "AWAKN pre-workout gummies deliver clean, vegan energy in a solid format designed for athletes and active lifestyles.",
    type: "website",
    siteName: "AWAKN"
  },
  twitter: {
    card: "summary_large_image",
    title: "AWAKN Pre-Workout Gummies | Clean Vegan Performance Energy",
    description:
      "AWAKN pre-workout gummies deliver clean, vegan energy in a solid format designed for athletes and active lifestyles."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
