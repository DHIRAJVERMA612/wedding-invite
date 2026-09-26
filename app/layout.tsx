import type { Metadata } from "next";
import { Playfair_Display, Great_Vibes, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Dhiraj ❤️ Saroj — 25th November 2026",
  description:
    "Join Dhiraj & Saroj as they begin their forever. Wedding festivities from 23rd–27th November 2026.",
  openGraph: {
    title: "Dhiraj ❤️ Saroj — 25th November 2026",
    description: "You're invited to celebrate our wedding!",
    images: ["/images/cover.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${greatVibes.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
