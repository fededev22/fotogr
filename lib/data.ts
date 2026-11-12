export const WHATSAPP = "5492213999289";

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#productos", label: "Productos" },
  { href: "#proceso", label: "Cómo trabajamos" },
  { href: "#contacto", label: "Contacto" },
];

export const services = [
  {
    id: "papel",
    title: "Papel",
    image: "/images/copias.jpg",
    alt: "Copias fotográficas reveladas",
    description: "Revelado químico sobre papel fotosensible.",
    items: ["Copias fotográficas", "Ampliaciones", "Polaroid"],
  },
  {
    id: "formato",
    title: "Gran formato",
    image: "/images/lonas-vinilos.jpg",
    alt: "Lonas y vinilos de gran formato",
    description: "Impresión para cartelería y decoración.",
    items: ["Lonas", "Vinilos"],
  },
  {
    id: "eventos",
    title: "Eventos",
    image: "/images/eventos.jpg",
    alt: "Piezas gráficas para un evento",
    description: "Piezas para presentar y guardar el evento.",
    items: ["Gráfica", "Libros de fotos", "Marcos", "Álbumes"],
  },
  {
    id: "archivo",
    title: "Archivo",
    image: "/images/digitalizacion.jpg",
    alt: "Material para digitalizar rollos y diapositivas",
    description: "Pasamos el material analógico a archivo digital.",
    items: ["Digitalización de rollos", "Digitalización de diapositivas"],
  },
] as const;

export const products = [
  { title: "Copias", image: "/images/copias.jpg", alt: "Copias fotográficas", line: "Revelado químico en papel." },
  { title: "Ampliaciones", image: "/images/ampliaciones.jpg", alt: "Ampliación fotográfica", line: "Formatos grandes, a medida." },
  { title: "Polaroid", image: "/images/polaroid.jpg", alt: "Fotos estilo Polaroid", line: "Mini y 9×13, con borde o imán." },
  { title: "Lonas y vinilos", image: "/images/lonas-vinilos.jpg", alt: "Lona y vinilo impresos", line: "Adhesivo, esmerilado y microperforado." },
  { title: "Libros y álbumes", image: "/images/libros-albumes.jpg", alt: "Libro de fotos", line: "Fotolibros y álbumes para guardar." },
  { title: "Marcos", image: "/images/marcos.jpg", alt: "Marcos con fotografía", line: "Portarretratos de madera y juveniles." },
];

export const steps = [
  "Consultás por WhatsApp",
  "Cotizamos precio y plazo",
  "Producimos en el laboratorio",
  "Retirás en La Plata",
];
