import Image from "next/image";
import { trust, waLink } from "@/lib/data";

const icons = ["01", "02", "03"];

export function Hero() {
  return (
    <section id="inicio" className="scroll-mt-24">
      <div className="mx-auto grid w-[min(1120px,calc(100%-2rem))] items-center gap-10 py-16 md:grid-cols-2">
        <div>
          <h1 className="font-serif text-5xl leading-none md:text-6xl">Laboratorio fotográfico en La Plata</h1>
          <p className="mt-5 max-w-xl text-lg text-[var(--muted)]">
            Revelado químico, copias, ampliaciones, gran formato, gráfica para eventos y digitalización de rollos y diapositivas.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="rounded-full bg-[var(--ink)] px-5 py-3 text-[var(--paper)]" href={waLink("Hola, quiero cotizar un trabajo")}>
              Cotizar por WhatsApp
            </a>
            <a className="rounded-full border border-[var(--ink)] px-5 py-3" href="#servicios">
              Ver servicios
            </a>
          </div>
        </div>
        <Image src="/images/hero.jpg" alt="Copias fotográficas del laboratorio" width={900} height={900} priority className="h-auto w-full rounded-3xl object-cover" />
      </div>
      <ul className="mx-auto grid w-[min(1120px,calc(100%-2rem))] gap-4 pb-8 md:grid-cols-3">
        {trust.map((item, index) => (
          <li key={item} className="rounded-2xl bg-white px-5 py-4 shadow-sm">
            <span className="text-sm text-[var(--accent)]">{icons[index]}</span>
            <p className="mt-1 font-medium">{item}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
