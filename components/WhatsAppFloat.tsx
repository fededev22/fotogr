import { waLink } from "@/lib/data";

export function WhatsAppFloat() {
  return (
    <a
      href={waLink("Hola, quiero hacer una consulta")}
      aria-label="Escribir por WhatsApp"
      className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-30 rounded-full bg-[#1f7a45] px-4 py-3 text-white shadow-lg"
    >
      WhatsApp
    </a>
  );
}
