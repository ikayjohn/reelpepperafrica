import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

import "./globals.css";

const display = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"]
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://reelpepper.africa"),
  title: {
    default: "ReelPepper Africa — Culture as Capital",
    template: "%s | ReelPepper Africa"
  },
  description:
    "A pan-African creative economy platform that turns cultural participation into structured economic returns. Marketplace, festivals, tokens, and impact across 54 nations.",
  openGraph: {
    title: "ReelPepper Africa — Culture as Capital",
    description:
      "Join the movement building Africa's creative economy. Marketplace, festivals, tokenized participation, and impact tracking.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "ReelPepper Africa — Culture as Capital",
    description:
      "Join the movement building Africa's creative economy. Marketplace, festivals, tokenized participation, and impact tracking."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
