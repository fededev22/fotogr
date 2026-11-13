import { steps } from "@/lib/data";

export function Proceso() {
  return (
    <section id="proceso" className="mx-auto w-[min(1120px,calc(100%-2rem))] scroll-mt-24 py-16">
      <h2 className="font-serif text-4xl">Cómo trabajamos</h2>
      <ol className="mt-8 grid gap-4 md:grid-cols-4">
        {steps.map((step, index) => (
          <li key={step} className="rounded-3xl bg-[var(--surface)] p-6 shadow-sm">
            <span className="font-serif text-4xl text-[var(--accent)]">{index + 1}</span>
            <p className="mt-3 text-lg">{step}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
