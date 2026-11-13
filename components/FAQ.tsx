"use client";

import { useState } from "react";
import { faq } from "@/lib/data";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="preguntas" className="mx-auto w-[min(760px,calc(100%-2rem))] scroll-mt-24 py-20">
      <h2 className="font-serif text-4xl">Preguntas frecuentes</h2>
      <div className="mt-6 divide-y divide-[var(--line)] rounded-3xl bg-[var(--surface)] px-6 shadow-sm">
        {faq.map((item, index) => {
          const expanded = open === index;
          return (
            <div key={item.q} className="py-4">
              <button className="flex min-h-11 w-full items-center justify-between gap-4 text-left font-semibold text-[var(--ink)]" aria-expanded={expanded} onClick={() => setOpen(expanded ? null : index)}>
                <span className="font-medium">{item.q}</span>
                <span aria-hidden="true">{expanded ? "–" : "+"}</span>
              </button>
              {expanded ? <p className="pt-3 text-[var(--muted)]">{item.a}</p> : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
