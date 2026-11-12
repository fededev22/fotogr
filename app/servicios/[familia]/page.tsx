import Link from "next/link";
import { notFound } from "next/navigation";
import { families, groups } from "@/lib/catalog";

export function generateStaticParams() {
  return families.map((family) => ({ familia: family.id }));
}

export default async function FamilyPage({
  params,
}: {
  params: Promise<{ familia: string }>;
}) {
  const { familia } = await params;
  const family = families.find((item) => item.id === familia);
  if (!family) notFound();
  const list = family.ids
    .map((id) => groups.find((group) => group.id === id))
    .filter((group) => group !== undefined);

  return (
    <main className="wrap page-in">
      <p className="kicker">
        <Link href="/">Inicio</Link>
      </p>
      <h1>{family.title}</h1>
      <p className="lead">{family.line}</p>
      <div className="doors">
        {list.map((group) => (
          <Link key={group.id} href={`/${group.id}`} className="door door-card">
            <img src={group.items[0].image} alt="" />
            <div>
              <h2>{group.title}</h2>
              <span>{group.items.length} piezas</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
