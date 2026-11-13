import { Contacto } from "@/components/Contacto";
import { FAQ } from "@/components/FAQ";
import { Galeria } from "@/components/Galeria";
import { Hero } from "@/components/Hero";
import { Proceso } from "@/components/Proceso";
import { Productos } from "@/components/Productos";
import { Servicios } from "@/components/Servicios";
import { Testimonios } from "@/components/Testimonios";

export default function Home() {
  return (
    <main>
      <Hero />
      <Servicios />
      <Productos />
      <Galeria />
      <Proceso />
      <Testimonios />
      <FAQ />
      <Contacto />
    </main>
  );
}
