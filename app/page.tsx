import Link from "next/link";
import { families, groups, WA } from "@/lib/catalog";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <img src="/catalog/02.jpg" alt="" />
        <div className="hero-copy">
          <p className="kicker">La Plata</p>
          <h1>En papel.</h1>
          <a className="btn" href={`${WA}?text=${encodeURIComponent("Hola, quiero cotizar un trabajo")}`}>
            Cotizar
          </a>
        </div>
      </section>

      {families.map((family) => {
        const cover = groups.find((group) => group.id === family.ids[0]);
        return (
          <Link key={family.id} href={`/servicios/${family.id}`} className="door">
            <img src={cover?.items[0].image} alt="" />
            <div>
              <p className="kicker">Servicio</p>
              <h2>{family.title}</h2>
              <p>{family.line}</p>
            </div>
          </Link>
        );
      })}
    </main>
  );
}
