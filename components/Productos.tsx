import Image from "next/image";
import { products } from "@/lib/data";

export function Productos() {
  return (
    <section id="productos" className="mx-auto w-[min(1100px,calc(100%-2rem))] scroll-mt-24 py-12 md:py-20">
      <h2 className="font-serif text-4xl">Productos</h2>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <article key={product.title} className="overflow-hidden rounded-3xl bg-[var(--surface)] shadow-sm transition hover:-translate-y-1">
            <div className="overflow-hidden">
              <Image src={product.image} alt={product.alt} width={800} height={800} className="aspect-square w-full object-cover transition duration-300 hover:scale-[1.03]" />
            </div>
            <div className="p-5">
              <h3 className="font-serif text-2xl">{product.title}</h3>
              <p className="mt-1 text-[var(--muted)]">{product.line}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
