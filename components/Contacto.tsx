import { waLink } from "@/lib/data";

export function Contacto() {
  return (
    <section id="contacto" className="scroll-mt-24 px-4 py-20 text-center">
      <h2 className="font-serif text-4xl">Visitanos</h2>
      <p className="mx-auto mt-4 max-w-md text-lg text-[var(--muted)]">
        Laboratorio en La Plata. Escribinos para coordinar tu trabajo o pedir presupuesto.
      </p>
      <a className="mt-8 inline-block rounded-full bg-[var(--accent)] px-6 py-3 text-white" href={waLink("Hola, quiero coordinar un trabajo")}>
        WhatsApp
      </a>
    </section>
  );
}
