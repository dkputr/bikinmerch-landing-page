import { FAQS } from "@/lib/products";
import { MOQ_TEXT } from "@/lib/config";

export default function Faq() {
  const items = FAQS.map((f) =>
    MOQ_TEXT && f.q === "Berapa minimum order?" ? { ...f, a: `${MOQ_TEXT} Angka final dikonfirmasi tim saat penawaran.` } : f,
  );
  return (
    <section id="faq" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <h2>Pertanyaan umum</h2>
        <div className="faq">
          {items.map((f) => (
            <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
          ))}
        </div>
      </div>
    </section>
  );
}
