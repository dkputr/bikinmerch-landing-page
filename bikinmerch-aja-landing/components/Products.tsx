import Image from "next/image";
import { CATEGORIES, CATALOG_ITEMS } from "@/lib/products";
import { productLink } from "@/lib/whatsapp";

export default function Products() {
  return (
    <section id="produk">
      <div className="wrap">
        <h2>Produk yang bisa kami bantu wujudkan</h2>
        <p className="lead">Pilih kategori, lalu tanyakan langsung lewat WhatsApp. Spesifikasi, jumlah, dan harga dikonfirmasi per pesanan.</p>
        <div className="cats">
          {CATEGORIES.map((c) => (
            <article className="card" key={c.name}>
              <div className="ph">
                <Image src={c.image} alt={c.alt} fill loading="lazy" sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 380px" style={{ objectFit: "cover" }} />
              </div>
              <div className="body">
                <h3>{c.name}</h3>
                <p>{c.description}</p>
                <a className="btn ghost sm" href={productLink(c.name)} target="_blank" rel="noopener noreferrer">Tanya Produk Ini</a>
              </div>
            </article>
          ))}
        </div>
        <div className="sub-h">
          <h3 style={{ fontSize: "1.6rem" }}>Contoh produk dari katalog</h3>
          <p>Ukuran sesuai katalog. Ini contoh, bukan jaminan spesifikasi produksi.</p>
        </div>
        <div className="cat-grid">
          {CATALOG_ITEMS.map((i) => (
            <article className="item" key={i.name}>
              <div className="imgbox">
                <Image src={i.image} alt={i.alt} fill loading="lazy" sizes="(max-width: 620px) 50vw, (max-width: 980px) 33vw, 280px" />
              </div>
              <div>
                <b>{i.name}</b>
                <span>{i.size}</span><br />
                <a href={productLink(i.name)} target="_blank" rel="noopener noreferrer">Tanya Produk Ini</a>
              </div>
            </article>
          ))}
        </div>
        <p className="note">Tidak semua produk di katalog otomatis bisa dikustomisasi. Kami cek kemungkinannya setelah Anda menyebutkan kebutuhan.</p>
      </div>
    </section>
  );
}
