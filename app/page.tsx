import { Contacto } from "@/components/Contacto";
import { Hero } from "@/components/Hero";
import { Proceso } from "@/components/Proceso";
import { Productos } from "@/components/Productos";
import { Servicios } from "@/components/Servicios";

export default function Home() {
  return (
    <main>
      <Hero />
      <Servicios />
      <Productos />
      <Proceso />
      <Contacto />
    </main>
  );
}
