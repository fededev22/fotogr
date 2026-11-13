"use client";

import { FormEvent, useState } from "react";
import { business, isFilled, waLink } from "@/lib/data";

export function Contacto() {
  const [note, setNote] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = [
      "Hola, quiero hacer una consulta.",
      `Nombre: ${data.get("nombre") || "—"}`,
      `Qué necesitás: ${data.get("necesidad") || "—"}`,
      `Mensaje: ${data.get("mensaje") || "—"}`,
    ].join("\n");
    window.open(waLink(text), "_blank", "noopener");
    setNote("Se abrió WhatsApp con tu consulta.");
  }

  const rows = [
    ["Dirección", business.address],
    ["Horarios", business.hours],
    ["Instagram", business.instagram],
    ["Facebook", business.facebook],
  ].filter(([, value]) => isFilled(value));

  return (
    <section id="contacto" className="mx-auto grid w-[min(1120px,calc(100%-2rem))] scroll-mt-24 gap-8 py-20 md:grid-cols-2">
      <div>
        <h2 className="font-serif text-4xl">Contacto</h2>
        <p className="mt-4 text-[var(--muted)]">Laboratorio en La Plata. Escribinos para coordinar tu trabajo o pedir presupuesto.</p>
        <a className="mt-6 inline-block rounded-full bg-[var(--accent)] px-6 py-3 text-white" href={waLink("Hola, quiero coordinar un trabajo")}>
          WhatsApp
        </a>
        <ul className="mt-6 space-y-2">
          {rows.map(([label, value]) => (
            <li key={label}>
              <span className="text-[var(--muted)]">{label}: </span>
              {value}
            </li>
          ))}
        </ul>
        <form className="mt-8 grid gap-3" onSubmit={submit}>
          <input className="rounded-xl border border-[var(--line)] bg-white px-4 py-3" name="nombre" placeholder="Nombre" required />
          <input className="rounded-xl border border-[var(--line)] bg-white px-4 py-3" name="necesidad" placeholder="Qué necesitás" required />
          <textarea className="rounded-xl border border-[var(--line)] bg-white px-4 py-3" name="mensaje" placeholder="Mensaje" rows={4} />
          <button className="rounded-full bg-[var(--ink)] px-5 py-3 text-[var(--paper)]">Enviar por WhatsApp</button>
          {note ? <p>{note}</p> : null}
        </form>
      </div>
      <iframe
        title="Mapa de La Plata"
        className="min-h-80 w-full rounded-3xl border-0"
        loading="lazy"
        src={`https://maps.google.com/maps?q=${encodeURIComponent(business.mapQuery)}&output=embed`}
      />
    </section>
  );
}
