const OPTIONS = [
  ["Logo brand", "Bawa logo atau identitas visual Anda."],
  ["Karakter atau maskot", "Ubah karakter jadi boneka atau bantal."],
  ["Bentuk dan ukuran", "Diskusi bentuk produk dan dimensi."],
  ["Warna dan bahan", "Pilihan warna dan bahan sesuai kebutuhan."],
  ["Konsep event atau kampanye", "Merchandise untuk acara, peluncuran, atau program."],
  ["Kebutuhan corporate gift", "Jumlah, kemasan, dan jadwal pengiriman."],
];

export default function Customization() {
  return (
    <section className="dark" id="custom">
      <div className="wrap">
        <h2>Dari ide ke produk, kita bahas bareng.</h2>
        <p className="lead">Hal yang bisa didiskusikan, tergantung kemampuan produksi dan jenis produknya:</p>
        <div className="opts">
          {OPTIONS.map(([t, d]) => (
            <div key={t}><h3>{t}</h3><p>{d}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}
