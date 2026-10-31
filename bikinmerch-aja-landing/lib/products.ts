export type Category = { name: string; description: string; image: string; alt: string };
export type CatalogItem = { name: string; size: string; image: string; alt: string };

export const CATEGORIES: Category[] = [
  { name: "Boneka Custom", description: "Boneka karakter, maskot, atau hewan untuk brand dan event.", image: "/images/boneka-hamster-merak.jpg", alt: "Contoh boneka hamster dan merak dari katalog" },
  { name: "Bantal Custom", description: "Bantal dekor, leher, dan bentuk khusus dengan identitas brand.", image: "/images/cushion-pillow.jpg", alt: "Contoh cushion pillow bermotif dari katalog" },
  { name: "Corporate Gift", description: "Tumbler, payung, gantungan kunci, dan item hadiah perusahaan.", image: "/images/tumbler.jpg", alt: "Contoh tumbler dari katalog" },
  { name: "Merchandise Event", description: "Gantungan kunci dan item untuk acara, komunitas, dan kampanye.", image: "/images/gantungan-kunci.jpg", alt: "Contoh gantungan kunci boneka beruang dari katalog" },
  { name: "Produk Custom Lainnya", description: "Koper, pouch, selimut, dan produk lain. Tanyakan kemungkinannya.", image: "/images/koper.jpg", alt: "Contoh koper dari katalog" },
];

export const CATALOG_ITEMS: CatalogItem[] = [
  { name: "Boneka Hamster", size: "26 × 26 cm", image: "/images/boneka-hamster-merak.jpg", alt: "Boneka hamster dari katalog" },
  { name: "Boneka Chef Beruang", size: "39 × 25 cm", image: "/images/boneka-chef-beruang-gurita.jpg", alt: "Boneka chef beruang dari katalog" },
  { name: "Bantal Pancake", size: "15 × 13 cm", image: "/images/bantal-pancake-boneka-badak.jpg", alt: "Bantal pancake dari katalog" },
  { name: "Neck Pillow", size: "31 × 28 cm", image: "/images/neck-pillow.jpg", alt: "Neck pillow dari katalog" },
  { name: "Bantal Awan Besar", size: "62 × 34 cm", image: "/images/bantal-awan.jpg", alt: "Bantal awan pink dari katalog" },
  { name: "Tumbler", size: "Ukuran: tanya tim", image: "/images/tumbler.jpg", alt: "Tumbler dari katalog" },
  { name: "Payung", size: "Ukuran: tanya tim", image: "/images/payung.jpg", alt: "Payung dari katalog" },
  { name: "Gantungan Kunci", size: "Ukuran: tanya tim", image: "/images/gantungan-kunci.jpg", alt: "Gantungan kunci dari katalog" },
];

export const FAQS: { q: string; a: string }[] = [
  { q: "Produk apa saja yang bisa dipesan?", a: "Boneka, bantal, corporate gift, merchandise event, dan produk lain. Lihat contoh di katalog, lalu tanyakan kemungkinan kustomisasinya." },
  { q: "Bisa request desain custom?", a: "Bisa didiskusikan. Kirim logo, karakter, atau referensi lewat WhatsApp, lalu tim kami cek kelayakannya." },
  { q: "Berapa minimum order?", a: "MOQ fleksibel dan bergantung pada jenis produk serta spesifikasi. Tanyakan angka terbaru ke tim lewat WhatsApp." },
  { q: "Bagaimana cara minta penawaran?", a: "Klik tombol WhatsApp, sebutkan produk, jumlah, dan target waktu. Kami balas dengan penawaran setelah spesifikasi jelas." },
  { q: "Berapa lama produksi?", a: "Tergantung spesifikasi, jumlah, dan tingkat kerumitan. Estimasi diberikan saat penawaran." },
  { q: "Bisa untuk event perusahaan?", a: "Bisa. Sebutkan tanggal acara dan jumlah yang dibutuhkan agar jadwal bisa dicek lebih awal." },
  { q: "Apakah tim bisa bantu menentukan spesifikasi?", a: "Ya, konsultasi produk dan spesifikasi adalah bagian dari layanan kami." },
  { q: "Apakah ada pengiriman ke luar kota?", a: "Tanyakan ke tim untuk opsi pengiriman ke lokasi Anda." },
];
