import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SITE } from "./site-config";

const GA_MEASUREMENT_ID = "G-CLQYC4HRE3";
const ADSENSE_ID = "ca-pub-6678501910155801";

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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
