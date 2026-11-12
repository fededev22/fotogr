"use client";

import Link from "next/link";
import { useState } from "react";
import { families, WA } from "@/lib/catalog";

export function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav">
      <div className="nav-bar">
        <Link href="/" className="brand" onClick={close}>
          Fotografía Digital
        </Link>
        <button className="menu-btn" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          {open ? "Cerrar" : "Menú"}
        </button>
        <nav className={open ? "menu open" : "menu"}>
          {families.map((family) => (
            <Link key={family.id} href={`/servicios/${family.id}`} onClick={close}>
              {family.title}
            </Link>
          ))}
          <Link href="/visita" onClick={close}>
            Visitanos
          </Link>
          <a className="wa" href={WA} target="_blank" rel="noopener">
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
