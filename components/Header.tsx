"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { nav, waLink } from "@/lib/data";

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--line)] bg-[var(--paper)]">
      <div className="mx-auto flex min-h-16 w-[min(1100px,calc(100%-2rem))] items-center gap-4">
        <a href="#inicio" className="text-base font-semibold text-[var(--ink)]" onClick={close}>
          Fotografía Digital
        </a>
        <button
          className="ml-auto inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[var(--line)] text-[var(--ink)] md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
        <nav className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-16 flex-col gap-1 border-b border-[var(--line)] bg-[var(--paper)] p-3 md:static md:ml-auto md:flex md:flex-row md:items-center md:border-0 md:p-0`}>
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="inline-flex min-h-11 items-center px-2 text-[var(--ink)]" onClick={close}>
              {item.label}
            </a>
          ))}
          <a className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--accent)] px-4 font-semibold text-[var(--on-accent)]" href={waLink("Hola, quiero cotizar un trabajo")}>
            Cotizar
          </a>
        </nav>
      </div>
    </header>
  );
}
