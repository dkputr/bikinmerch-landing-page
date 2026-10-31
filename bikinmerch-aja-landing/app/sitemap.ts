import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";

// Kosong sampai NEXT_PUBLIC_SITE_URL diisi, agar tidak ada hostname salah di sitemap.
export default function sitemap(): MetadataRoute.Sitemap {
  return SITE_URL ? [{ url: SITE_URL, changeFrequency: "monthly", priority: 1 }] : [];
}
