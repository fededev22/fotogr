import Link from "next/link";
import { notFound } from "next/navigation";
import { groups, WA } from "@/lib/catalog";

export function generateStaticParams() {
  return groups.map((group) => ({ categoria: group.id }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categoria: string }>;
}) {
  const { categoria } = await params;
  const group = groups.find((item) => item.id === categoria);
  if (!group) notFound();

  return (
    <main className="wrap page-in">
      <p className="kicker">
        <Link href="/">Inicio</Link> / {group.title}
      </p>
      <h1>{group.title}</h1>
      <div className="grid">
        {group.items.map((item, i) => (
          <article key={item.id} className="card" style={{ animationDelay: `${i * 60}ms` }}>
            <img src={item.image} alt={item.title} />
            <div className="card-body">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <ul>
                {item.points.slice(0, 3).map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <a href={`${WA}?text=${encodeURIComponent(`Hola, quiero consultar por ${item.title}`)}`}>
                Consultar
              </a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
