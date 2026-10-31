import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_URL } from "@/lib/config";

const title = "BikinMerch.aja | Custom Merchandise untuk Brand, Event & Corporate";
const description =
  "Temukan solusi merchandise custom untuk perusahaan, brand, dan event. Konsultasikan kebutuhan boneka, bantal, corporate gift, dan produk lainnya melalui WhatsApp.";

export const metadata: Metadata = {
  // Canonical hanya aktif jika SITE_URL diisi. metadataBase memakai URL produksi Vercel sebagai cadangan agar gambar OG tidak mengarah ke localhost.
  ...(SITE_URL
    ? { metadataBase: new URL(SITE_URL), alternates: { canonical: "/" } }
    : process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? { metadataBase: new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) }
      : {}),
  title,
  description,
  keywords: ["merchandise custom", "vendor merchandise corporate", "boneka custom", "bantal custom", "corporate gift custom", "merchandise event", "souvenir perusahaan", "merchandise promosi"],
  openGraph: {
    title, description, type: "website", locale: "id_ID", siteName: "BikinMerch.aja",
    ...(SITE_URL ? { url: SITE_URL } : {}),
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: "Contoh boneka custom dari katalog BikinMerch.aja" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/og.jpg"] },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        {/* Font global untuk seluruh situs (App Router); aturan ini ditujukan untuk Pages Router. */}
        {/* eslint-disable @next/next/no-page-custom-font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700&family=Instrument+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
