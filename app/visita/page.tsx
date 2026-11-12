import { WA } from "@/lib/catalog";

export default function Visit() {
  return (
    <main className="wrap page-in visit">
      <p className="kicker">La Plata</p>
      <h1>Visitanos</h1>
      <p>Diagonal 79.</p>
      <p>Lunes a viernes, de 9 a 18.</p>
      <p>
        <a href="mailto:fotodigital9901@gmail.com">fotodigital9901@gmail.com</a>
      </p>
      <a className="btn" href={WA}>
        Escribir por WhatsApp
      </a>
    </main>
  );
}
