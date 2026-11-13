import { waLink } from "@/lib/data";

export function WhatsAppFloat() {
  return (
    <a
      href={waLink("Hola, quiero hacer una consulta")}
      aria-label="Escribir por WhatsApp"
      className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-30 inline-flex min-h-11 items-center rounded-full bg-[var(--wa)] px-4 font-semibold text-[var(--on-wa)] shadow-lg"
    >
      WhatsApp
    </a>
  );
}
