const STEPS = [
  ["Ceritakan kebutuhan", "Ide, produk, atau kebutuhan bisnis Anda."],
  ["Diskusi spesifikasi", "Jumlah, ukuran, bahan, dan target waktu."],
  ["Terima penawaran", "Tinjau penawaran dan spesifikasi yang diusulkan."],
  ["Konfirmasi pesanan", "Sepakati detail produksi sebelum lanjut."],
  ["Produksi dan pengiriman", "Sesuai kesepakatan yang sudah dikonfirmasi."],
];

export default function HowItWorks() {
  return (
    <section style={{ paddingTop: 0 }}>
      <div className="wrap">
        <h2>Cara pesan</h2>
        <ol className="steps">
          {STEPS.map(([t, d]) => (
            <li key={t}><b>{t}</b><span>{d}</span></li>
          ))}
        </ol>
        <p className="note">Menghubungi lewat WhatsApp belum berarti memesan. Penawaran, jadwal, dan spesifikasi akhir dikonfirmasi per pesanan.</p>
      </div>
    </section>
  );
}
