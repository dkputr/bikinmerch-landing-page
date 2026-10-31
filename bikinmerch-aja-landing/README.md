# BikinMerch.aja Landing Page

Landing page satu halaman untuk BikinMerch.aja (merchandise custom untuk perusahaan, brand, dan event). Konversi utama lewat WhatsApp: `https://wa.me/6285695687160`. Tidak ada form palsu, database, atau API berbayar.

## Stack
Next.js 15 (App Router) + TypeScript, CSS global di `app/globals.css`, React 19, ESLint. Tanpa Tailwind dan tanpa library UI tambahan.

## Menjalankan lokal
```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # tsc --noEmit
npm run lint
npm run build && npm start
```

## Struktur
- `app/` layout, metadata, `robots.ts`, `sitemap.ts`, `icon.svg`, `globals.css`
- `components/` satu komponen per bagian halaman (`Testimonials.tsx` siap dipakai, belum dirender)
- `lib/config.ts` nomor WhatsApp, `SITE_URL`, dan `MOQ_TEXT`
- `lib/whatsapp.ts` pembuat link dan pesan WhatsApp (URL-encoded)
- `lib/products.ts` kategori, contoh katalog, dan FAQ
- `public/images/` gambar hasil ekstraksi katalog; lihat `docs/asset-manifest.md`

## Konfigurasi yang perlu diisi
1. **URL produksi**: setelah deploy, set `NEXT_PUBLIC_SITE_URL` (mis. `https://nama-proyek.vercel.app`) di Vercel > Settings > Environment Variables, lalu redeploy. Ini mengaktifkan canonical, URL Open Graph, dan sitemap. Selama kosong, sitemap kosong dan tidak ada canonical.
2. **MOQ**: isi `MOQ_TEXT` di `lib/config.ts` setelah angka dikonfirmasi (mis. "MOQ mulai 100 pcs, tergantung jenis produk dan spesifikasi."). Selama `null`, tidak ada angka yang dipublikasikan.
3. **Logo resmi**: ganti `components/Logo.tsx` dengan file logo di `public/images/`.
4. **Testimoni**: isi hanya dengan kutipan yang disetujui, lalu render `<Testimonials items={...} />` di `app/page.tsx`.
5. **Foto produksi asli / galeri**: belum ada. Tambahkan setelah tersedia.

## Deploy ke Vercel
1. Push repo ke GitHub (branch `main`).
2. Di Vercel: Add New > Project > import repo. Framework terdeteksi sebagai Next.js; biarkan build command dan output default.
3. Tidak ada environment variable wajib. Isi `NEXT_PUBLIC_SITE_URL` setelah URL final diketahui.

## Catatan konten
Semua gambar dan ukuran berasal dari katalog dan hanya contoh, bukan jaminan spesifikasi produksi. Beberapa foto katalog memuat merek pihak ketiga; pastikan izin publikasinya sebelum dipakai di produksi.
