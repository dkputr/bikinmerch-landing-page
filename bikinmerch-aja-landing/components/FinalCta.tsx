import { generalLink } from "@/lib/whatsapp";

export default function FinalCta() {
  return (
    <section className="final" id="kontak">
      <div className="wrap">
        <h2>Punya ide merchandise? Mari wujudkan bersama.</h2>
        <p>Ceritakan kebutuhan brand, perusahaan, atau event Anda. Tim BikinMerch.aja siap membantu mendiskusikan pilihan produk dan kebutuhan pemesanan.</p>
        <div className="actions">
          <a className="btn light" href={generalLink()} target="_blank" rel="noopener noreferrer">Konsultasi via WhatsApp</a>
          <a className="btn out" href="#produk">Lihat Katalog Produk</a>
        </div>
      </div>
    </section>
  );
}
