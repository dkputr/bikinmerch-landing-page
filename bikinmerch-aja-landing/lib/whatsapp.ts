import { WA_NUMBER } from "./config";

export const GENERAL_MESSAGE =
  "Halo BikinMerch.aja, saya ingin konsultasi merchandise custom. Saya ingin mengetahui pilihan produk, MOQ, estimasi harga, dan waktu produksi. Mohon bantuannya.";

export const waLink = (message: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

export const generalLink = () => waLink(GENERAL_MESSAGE);

export const productLink = (name: string) =>
  waLink(`Halo BikinMerch.aja, saya tertarik dengan ${name}. Mohon info pilihan produk, MOQ, estimasi harga, dan waktu produksi.`);
