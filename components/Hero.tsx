import Image from "next/image";
import { waLink } from "@/lib/data";

export function Hero() {
  return (
    <section id="inicio" className="mx-auto grid w-[min(1120px,calc(100%-2rem))] scroll-mt-24 items-center gap-8 py-16 md:grid-cols-2">
      <div>
        <h1 className="font-serif text-5xl leading-none md:text-7xl">Tus fotos, en papel.</h1>
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
      <Image
        src="/images/hero.jpg"
        alt="Copias fotográficas del laboratorio"
        width={900}
        height={900}
        priority
        className="h-auto w-full rounded-3xl object-cover"
      />
    </section>
  );
}
