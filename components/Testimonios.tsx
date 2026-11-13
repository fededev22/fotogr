import { isFilled, testimonials } from "@/lib/data";

export function Testimonios() {
  const ready = testimonials.filter((item) => isFilled(item.quote) && isFilled(item.name));
  if (!ready.length) return null;

  return (
    <section className="mx-auto w-[min(1120px,calc(100%-2rem))] py-20">
      <h2 className="font-serif text-4xl">Testimonios</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {ready.map((item) => (
          <blockquote key={item.name} className="rounded-3xl bg-white p-6 shadow-sm">
            <p>{item.quote}</p>
            <footer className="mt-4 text-sm text-[var(--muted)]">
              {item.name}
              {isFilled(item.area) ? ` · ${item.area}` : ""}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
