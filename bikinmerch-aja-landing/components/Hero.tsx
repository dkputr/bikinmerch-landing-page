import Image from "next/image";
import { generalLink } from "@/lib/whatsapp";
import { MOQ_TEXT } from "@/lib/config";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <h1>Wujudkan merchandise custom yang bikin brand lebih berkesan.</h1>
          <p className="sub">BikinMerch.aja membantu perusahaan, brand, dan penyelenggara event mewujudkan merchandise custom sesuai konsep, kebutuhan, dan identitas mereka.</p>
          <div className="actions">
            <a className="btn primary" href={generalLink()} target="_blank" rel="noopener noreferrer">Konsultasi via WhatsApp</a>
            <a className="btn ghost" href="#produk">Lihat Produk</a>
          </div>
          <p className="who">Untuk tim procurement, marketing, HR, brand owner, UMKM, event organizer, dan komunitas. Ceritakan kebutuhan Anda, tim kami bantu diskusikan produk, jumlah, dan jadwal.{MOQ_TEXT ? ` ${MOQ_TEXT}` : ""}</p>
        </div>
        <div className="collage">
          <figure className="a">
            <Image src="/images/boneka-hamster-merak.jpg" alt="Boneka hamster dan boneka merak dari katalog" fill priority sizes="(max-width: 860px) 90vw, 560px" />
            <figcaption>Contoh katalog</figcaption>
          </figure>
          <figure className="b">
            <Image src="/images/cushion-pillow.jpg" alt="Cushion pillow bermotif dari katalog" fill sizes="(max-width: 860px) 45vw, 280px" />
          </figure>
          <figure className="c">
            <Image src="/images/boneka-chef-beruang-gurita.jpg" alt="Boneka chef beruang dan boneka gurita dari katalog" fill sizes="(max-width: 860px) 45vw, 280px" />
          </figure>
        </div>
      </div>
    </section>
  );
}
