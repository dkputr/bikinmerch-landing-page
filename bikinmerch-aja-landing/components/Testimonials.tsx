export type Testimonial = { quote: string; name: string; role?: string; company?: string };

/**
 * Komponen siap pakai. Tidak dirender di halaman sampai ada testimoni yang disetujui untuk dipublikasikan.
 * Isi `items` dengan kutipan ASLI tanpa diubah, lalu tambahkan <Testimonials items={...} /> di app/page.tsx.
 */
export default function Testimonials({ items }: { items: Testimonial[] }) {
  if (items.length === 0) return null;
  return (
    <section id="testimoni">
      <div className="wrap">
        <h2>Kata pelanggan</h2>
        <div className="why">
          {items.map((t) => (
            <figure key={t.name} style={{ margin: 0 }} className="card">
              <div className="body">
                <blockquote style={{ margin: 0 }}>{t.quote}</blockquote>
                <figcaption><b>{t.name}</b>{t.role || t.company ? `, ${[t.role, t.company].filter(Boolean).join(" di ")}` : ""}</figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
