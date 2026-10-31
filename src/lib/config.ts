// Satu-satunya tempat untuk mengubah nomor WhatsApp dan domain.
export const WA_NUMBER = "6285695687160";
export const WA_DISPLAY = "0856 9568 7160";
export const INSTAGRAM = "bikinmerch.aja";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "";

const BASE =
  "Halo BikinMerch.aja! Saya tertarik membuat boneka plush custom.\n\nBerikut detail proyek saya:\n\n- Konsep boneka:\n- Perkiraan jumlah:\n- Ukuran yang diinginkan:\n- Gambar referensi/desain:\n- Target tanggal produksi:\n\nSaya ingin tahu lebih lanjut soal proses produksi dan penawaran harga.\n\nTerima kasih!";

export function waUrl(product?: string): string {
  const msg = product
    ? BASE.replace("membuat boneka plush custom.", `membuat boneka plush custom, mirip contoh "${product}" di katalog kalian.`)
    : BASE;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}
