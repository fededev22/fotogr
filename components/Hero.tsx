import { BadgeCheck, MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";
import { trust, waLink } from "@/lib/data";

const icons = [BadgeCheck, MessageCircle, MapPin];

export function Hero() {
  return (
    <section id="inicio" className="scroll-mt-24">
      <div className="mx-auto grid w-[min(1100px,calc(100%-2rem))] items-center gap-10 py-12 md:grid-cols-2 md:py-20">
        <div>
          <h1 className="font-serif text-5xl leading-tight text-[var(--ink)] md:text-6xl">Laboratorio fotográfico en La Plata</h1>
          <p className="mt-5 max-w-xl text-[var(--muted)]">
            Revelado químico, copias, ampliaciones, gran formato, gráfica para eventos y digitalización de rollos y diapositivas.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="inline-flex min-h-11 items-center rounded-full bg-[var(--ink)] px-5 font-semibold text-[var(--paper)]" href={waLink("Hola, quiero cotizar un trabajo")}>
              Cotizar por WhatsApp
            </a>
            <a className="inline-flex min-h-11 items-center rounded-full border border-[var(--ink)] px-5 font-semibold text-[var(--ink)]" href="#servicios">
              Ver servicios
            </a>
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl bg-[var(--surface)]">
          <Image src="/images/hero.jpg" alt="Copias fotográficas del laboratorio" width={1200} height={1200} priority className="h-auto w-full object-cover" />
        </div>
      </div>
      <ul className="mx-auto grid w-[min(1100px,calc(100%-2rem))] gap-4 pb-8 md:grid-cols-3">
        {trust.map((item, index) => {
          const Icon = icons[index];
          return (
            <li key={item} className="flex min-h-11 items-center gap-3 rounded-2xl bg-[var(--surface)] px-5 py-4 shadow-sm">
              <Icon className="text-[var(--accent)]" aria-hidden />
              <p className="font-semibold text-[var(--ink)]">{item}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
