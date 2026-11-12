"use client";

import { useState } from "react";
import { nav, waLink } from "@/lib/data";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-[var(--line)] bg-[var(--paper)]/90 backdrop-blur">
      <div className="mx-auto flex min-h-16 w-[min(1120px,calc(100%-2rem))] items-center gap-4">
        <a href="#inicio" className="font-semibold">
          Fotografía Digital
        </a>
        <button
          className="ml-auto rounded-full border border-[var(--line)] px-3 py-1 md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          Menú
        </button>
        <nav className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-16 flex-col gap-3 border-b border-[var(--line)] bg-[var(--paper)] p-4 md:static md:ml-auto md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0`}>
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-[var(--accent)]" onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a
            className="rounded-full bg-[var(--accent)] px-4 py-2 text-white"
            href={waLink("Hola, quiero cotizar un trabajo")}
          >
            Cotizar
          </a>
        </nav>
      </div>
    </header>
  );
}
