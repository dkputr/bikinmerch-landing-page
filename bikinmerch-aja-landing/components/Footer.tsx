import Logo from "./Logo";
import { generalLink } from "@/lib/whatsapp";
import { OFFICIAL_SITE, WA_DISPLAY } from "@/lib/config";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <div>
            <Logo style={{ color: "var(--ink)" }} />
            <p style={{ marginTop: 12, maxWidth: "40ch" }}>Mitra merchandise custom untuk perusahaan, brand, dan event.</p>
          </div>
          <div>
            <h3>Menu</h3>
            <ul>
              <li><a href="#produk">Products</a></li>
              <li><a href="#kenapa">Why Us</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#kontak">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3>Kontak</h3>
            <ul>
              <li><a href={generalLink()} target="_blank" rel="noopener noreferrer">WhatsApp {WA_DISPLAY}</a></li>
              <li><a href={OFFICIAL_SITE} target="_blank" rel="noopener noreferrer">Website resmi</a></li>
            </ul>
          </div>
        </div>
        <p className="copy">&copy; {new Date().getFullYear()} BikinMerch.aja. Semua hak dilindungi.</p>
      </div>
    </footer>
  );
}
