export const WA_NUMBER = "6285695687160";
export const WA_DISPLAY = "0856-9568-7160";
export const OFFICIAL_SITE = "https://ruveetex.myscalev.com/bikinmerch-aja";

/** Kosongkan sampai URL produksi final diketahui. Mengaktifkan canonical, sitemap, dan Open Graph URL. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "").replace(/\/$/, "");

/**
 * MOQ: biarkan null sampai angka terbaru dikonfirmasi bisnis.
 * Contoh setelah dikonfirmasi: "MOQ mulai 100 pcs, tergantung jenis produk dan spesifikasi."
 */
export const MOQ_TEXT: string | null = null;
