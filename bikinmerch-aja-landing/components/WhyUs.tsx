const REASONS = [
  ["Konsultasi produk", "Bantu memilih produk dan spesifikasi yang sesuai tujuan Anda."],
  ["Kustomisasi sesuai kebutuhan", "Dari logo sampai bentuk, dibahas sebelum pesanan berjalan."],
  ["Untuk bisnis dan event", "Melayani kebutuhan perusahaan, brand, komunitas, dan acara."],
  ["Penawaran dan spesifikasi jelas", "Anda tinjau penawaran dan spesifikasi sebelum konfirmasi."],
  ["Jadwal disepakati di awal", "Jadwal produksi dikonfirmasi bersama sebelum pesanan berjalan."],
  ["Dukungan material", "Didukung Ruveetex sebagai pemasok kain dan material."],
];

export default function WhyUs() {
  return (
    <section id="kenapa">
      <div className="wrap">
        <h2>Kenapa BikinMerch.aja</h2>
        <div className="why">
          {REASONS.map(([t, d]) => (
            <div key={t}><h3>{t}</h3><p>{d}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}
