"use client";

import Image from "next/image";
import { useState } from "react";
import { isFilled, services, waLink } from "@/lib/data";

export function Servicios() {
  const [current, setCurrent] = useState(0);
  const service = services[current];

  return (
    <section id="servicios" className="mx-auto w-[min(1120px,calc(100%-2rem))] scroll-mt-24 py-20">
      <h2 className="font-serif text-4xl">Servicios</h2>
      <div role="tablist" aria-label="Categorías de servicios" className="mt-6 flex flex-wrap gap-2">
        {services.map((item, index) => (
          <button
            key={item.id}
            role="tab"
            id={`tab-${item.id}`}
            aria-selected={current === index}
            aria-controls={`panel-${item.id}`}
            className={`rounded-full px-4 py-2 ${current === index ? "bg-[var(--ink)] text-[var(--paper)]" : "bg-white"}`}
            onClick={() => setCurrent(index)}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div role="tabpanel" id={`panel-${service.id}`} aria-labelledby={`tab-${service.id}`} className="mt-6 overflow-hidden rounded-3xl bg-white shadow-sm md:grid md:grid-cols-2">
        <Image src={service.image} alt={service.alt} width={900} height={700} className="h-full w-full object-cover" />
        <div className="p-8">
          <h3 className="font-serif text-3xl">{service.title}</h3>
          <p className="mt-3 text-[var(--muted)]">{service.description}</p>
          <ul className="mt-6 space-y-3">
            {service.items.map((item) => (
              <li key={item.name} className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--line)] pb-3">
                <span>
                  {item.name}
                  {isFilled(item.price) ? <span className="ml-2 text-sm text-[var(--muted)]">Desde {item.price}</span> : null}
                </span>
                <a className="text-[var(--accent)]" href={waLink(`Hola, quiero consultar por ${item.name}`)}>
                  Consultar
                </a>
              </li>
            ))}
          </ul>
          <a className="mt-6 inline-block rounded-full bg-[var(--accent)] px-5 py-3 text-white" href={waLink(`Hola, quiero cotizar ${service.title}`)}>
            Cotizar este servicio
          </a>
        </div>
      </div>
    </section>
  );
}
