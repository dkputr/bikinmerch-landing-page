"use client";
import { useState } from "react";
import Logo from "./Logo";
import { generalLink } from "@/lib/whatsapp";

const LINKS = [
  { href: "#produk", label: "Products" },
  { href: "#kenapa", label: "Why Us" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontak", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div className="wrap nav">
        <Logo />
        <nav id="menu" className={open ? "open" : undefined} aria-label="Menu utama">
          <ul>
            {LINKS.map((l) => (
              <li key={l.href}><a href={l.href} onClick={() => setOpen(false)}>{l.label}</a></li>
            ))}
          </ul>
        </nav>
        <div className="nav-cta">
          <a className="btn primary sm" href={generalLink()} target="_blank" rel="noopener noreferrer">Konsultasi via WhatsApp</a>
          <button className="burger" aria-expanded={open} aria-controls="menu" aria-label={open ? "Tutup menu" : "Buka menu"} onClick={() => setOpen((o) => !o)}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M3 6h14M3 10h14M3 14h14" /></svg>
          </button>
        </div>
      </div>
    </header>
  );
}
