import { groups, WA } from "@/lib/catalog";

function wa(text: string) {
  return `${WA}?text=${encodeURIComponent(text)}`;
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-stone-200 bg-stone-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <a href="#inicio" className="font-semibold tracking-wide">
            Fotografía Digital
          </a>
          <nav className="hidden gap-4 text-sm text-stone-600 md:flex">
            {groups.map((g) => (
              <a key={g.id} href={`#${g.id}`} className="hover:text-stone-950">
                {g.title}
              </a>
            ))}
          </nav>
          <a
            className="rounded-full bg-stone-950 px-4 py-2 text-sm text-white"
            href={wa("Hola Fotografía Digital, quiero hacer una consulta")}
          >
            WhatsApp
          </a>
        </div>
      </header>

      <main>
        <section id="inicio" className="bg-stone-950 text-stone-50">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs tracking-[0.2em] text-amber-200">LA PLATA</p>
              <h1 className="mt-3 text-5xl font-semibold leading-tight">
                Tus fotos, en papel.
              </h1>
              <p className="mt-5 max-w-xl text-lg text-stone-300">
                Laboratorio fotográfico. Revelado químico, ampliaciones, gran
                formato, gráfica, digitalización y productos para eventos. Lo
                que ves en la pantalla no siempre es lo que sale en el papel:
                revisamos el archivo.
              </p>
              <a
                className="mt-8 inline-block rounded-full bg-white px-5 py-3 text-stone-950"
                href={wa("Hola, quiero cotizar un trabajo fotográfico")}
              >
                Cotizar un trabajo
              </a>
            </div>
            <img
              src="/catalog/01.jpg"
              alt="Minilab Noritsu del laboratorio"
              className="w-full rounded-2xl bg-white object-contain"
            />
          </div>
        </section>

        {groups.map((group) => (
          <section key={group.id} id={group.id} className="border-t border-stone-200">
            <div className="mx-auto max-w-6xl px-5 py-16">
              <h2 className="text-3xl font-semibold">{group.title}</h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <a
                    key={item.id}
                    href={wa(`Hola, quiero consultar por ${item.title}`)}
                    className="flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="aspect-square w-full bg-stone-100 object-cover"
                    />
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-stone-600">{item.text}</p>
                      <ul className="mt-3 space-y-1 text-sm text-stone-500">
                        {item.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                      <span className="mt-4 text-sm font-medium">Consultar</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section id="visita" className="bg-stone-950 text-stone-50">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold">El laboratorio</h2>
              <p className="mt-4 text-stone-300">Diagonal 79, La Plata</p>
              <p className="mt-2">
                <a href="mailto:fotodigital9901@gmail.com">fotodigital9901@gmail.com</a>
              </p>
              <p className="mt-6 text-sm text-stone-400">
                Lunes a viernes, 9 a 18. Confirmá por WhatsApp antes de ir.
              </p>
            </div>
            <a
              className="self-start rounded-full bg-white px-5 py-3 text-center text-stone-950"
              href={WA}
            >
              Abrir WhatsApp
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
