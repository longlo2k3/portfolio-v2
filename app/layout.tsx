import type { Metadata } from "next";
import localFont from "next/font/local";
import { media } from "@/content/media";
import { site } from "@/content/site";
import "./globals.css";

const displayFont = localFont({
  src: [
    { path: "./fonts/be-vietnam-pro-500.ttf", weight: "500" },
    { path: "./fonts/be-vietnam-pro-600.ttf", weight: "600" },
    { path: "./fonts/be-vietnam-pro-700.ttf", weight: "700" },
  ],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = localFont({
  src: [
    { path: "./fonts/inter-400.ttf", weight: "400" },
    { path: "./fonts/inter-600.ttf", weight: "600" },
    { path: "./fonts/inter-700.ttf", weight: "700" },
  ],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
  title: site.metadata.title,
  description: site.metadata.description,
  openGraph: {
    type: "website",
    title: site.metadata.title,
    description: site.metadata.description,
    images: process.env.NEXT_PUBLIC_SITE_URL
      ? [
          {
            url: media.ftcWorldsTeam.src,
            width: media.ftcWorldsTeam.width,
            height: media.ftcWorldsTeam.height,
            alt: media.ftcWorldsTeam.alt,
          },
        ]
      : undefined,
  },
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={site.language}>
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
