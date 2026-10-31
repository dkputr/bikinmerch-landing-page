import { generalLink } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  return (
    <a className="fab" href={generalLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat WhatsApp BikinMerch.aja">
      Chat WhatsApp
    </a>
  );
}
