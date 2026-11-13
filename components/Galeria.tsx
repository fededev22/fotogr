"use client";

import Image from "next/image";
import { useState } from "react";
import { gallery } from "@/lib/data";

export function Galeria() {
  const [open, setOpen] = useState<number | null>(null);
  const photo = open === null ? null : gallery[open];

  return (
    <section id="trabajos" className="mx-auto w-[min(1120px,calc(100%-2rem))] scroll-mt-24 py-20">
      <h2 className="font-serif text-4xl">Algunos de nuestros trabajos</h2>
      <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {gallery.map((item, index) => (
          <button key={item.src} className="mb-4 block w-full overflow-hidden rounded-2xl" onClick={() => setOpen(index)}>
            <Image src={item.src} alt={item.alt} width={800} height={800} className="h-auto w-full object-cover" />
          </button>
        ))}
      </div>
      {photo ? (
        <div className="fixed inset-0 z-40 grid place-items-center bg-black/80 p-4" onClick={() => setOpen(null)}>
          <Image src={photo.src} alt={photo.alt} width={1200} height={1200} className="max-h-[86vh] w-auto rounded-xl" />
        </div>
      ) : null}
    </section>
  );
}
