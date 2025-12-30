import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SITE } from "./site-config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${SITE.year} ${SITE.name} | Free Calculator`,
  description: SITE.description,
  keywords: [
    "life insurance calculator",
    "how much life insurance do I need",
    "life insurance coverage calculator",
    "term life insurance calculator",
    "life insurance premium calculator",
    "life insurance quote",
  ],
  verification: {
    google: "qlPMVO_Hb-be3_hFHNT9SBbsHO-b_wCOfWfLmTb4EQc",
  },
  openGraph: {
    title: `${SITE.year} Life Insurance Calculator | Free`,
    description: "Calculate how much life insurance you need. Compare term vs whole life, estimate premiums, and protect your family.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-slate-50`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
