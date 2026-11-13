"use client";

import Image from "next/image";
import { useState } from "react";
import { isFilled, services, waLink } from "@/lib/data";

export function Servicios() {
  const [current, setCurrent] = useState(0);
  const service = services[current];

  return (
    <section id="servicios" className="scroll-mt-24 bg-[var(--surface)] py-12 md:py-20">
      <div className="mx-auto w-[min(1100px,calc(100%-2rem))]">
        <h2 className="font-serif text-4xl">Servicios</h2>
        <div role="tablist" aria-label="Categorías de servicios" className="mt-6 flex flex-wrap gap-2">
          {services.map((item, index) => (
            <button
              key={item.id}
              role="tab"
              id={`tab-${item.id}`}
              aria-selected={current === index}
              aria-controls={`panel-${item.id}`}
              className={`min-h-11 rounded-full px-4 font-semibold ${current === index ? "bg-[var(--ink)] text-[var(--paper)]" : "bg-[var(--paper)] text-[var(--ink)]"}`}
              onClick={() => setCurrent(index)}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div role="tabpanel" id={`panel-${service.id}`} aria-labelledby={`tab-${service.id}`} className="mt-6 overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--paper)] shadow-sm md:grid md:grid-cols-2">
          <div className="overflow-hidden">
            <Image src={service.image} alt={service.alt} width={900} height={700} className="h-full w-full object-cover transition duration-300 hover:scale-[1.03]" />
          </div>
          <div className="p-8">
            <h3 className="font-serif text-3xl">{service.title}</h3>
            <p className="mt-3 text-[var(--muted)]">{service.description}</p>
            <ul className="mt-6 space-y-3">
              {service.items.map((item) => (
                <li key={item.name} className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--line)] pb-3">
                  <span className="text-[var(--ink)]">
                    {item.name}
                    {isFilled(item.price) ? <span className="ml-2 text-[var(--muted)]">Desde {item.price}</span> : null}
                  </span>
                  <a className="inline-flex min-h-11 items-center font-semibold text-[var(--accent)]" href={waLink(`Hola, quiero consultar por ${item.name}`)}>
                    Consultar
                  </a>
                </li>
              ))}
            </ul>
            <a className="mt-6 inline-flex min-h-11 items-center rounded-full bg-[var(--accent)] px-5 font-semibold text-[var(--on-accent)]" href={waLink(`Hola, quiero cotizar ${service.title}`)}>
              Cotizar este servicio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
