export const WHATSAPP = "5492213999289";

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

/** Un valor "[COMPLETAR...]" o vacío no se muestra en la página. */
export function isFilled(value: string) {
  return value.trim().length > 0 && !value.trim().startsWith("[COMPLETAR");
}

export const business = {
  name: "Fotografía Digital",
  city: "La Plata",
  address: "[COMPLETAR: dirección]",
  hours: "[COMPLETAR: horarios]",
  instagram: "[COMPLETAR: Instagram]",
  facebook: "[COMPLETAR: Facebook]",
  mapQuery: "La Plata, Buenos Aires",
};

export const nav = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#productos", label: "Productos" },
  { href: "#trabajos", label: "Trabajos" },
  { href: "#preguntas", label: "Preguntas" },
  { href: "#contacto", label: "Contacto" },
];

export const trust = [
  "Presupuesto sin cargo",
  "Atención por WhatsApp",
  "Retiro en La Plata",
];

export type ServiceItem = { name: string; price: string };

export const services: {
  id: string;
  title: string;
  image: string;
  alt: string;
  description: string;
  items: ServiceItem[];
}[] = [
  {
    id: "papel",
    title: "Papel",
    image: "/images/copias.jpg",
    alt: "Copias fotográficas reveladas",
    description: "Revelado químico sobre papel fotosensible.",
    items: [
      { name: "Copias fotográficas", price: "" },
      { name: "Ampliaciones", price: "" },
      { name: "Polaroid", price: "" },
    ],
  },
  {
    id: "formato",
    title: "Gran formato",
    image: "/images/lonas-vinilos.jpg",
    alt: "Lonas y vinilos de gran formato",
    description: "Impresión para cartelería y decoración.",
    items: [
      { name: "Lonas", price: "" },
      { name: "Vinilos", price: "" },
    ],
  },
  {
    id: "eventos",
    title: "Eventos",
    image: "/images/eventos.jpg",
    alt: "Piezas gráficas para un evento",
    description: "Piezas para presentar y guardar el evento.",
    items: [
      { name: "Gráfica", price: "" },
      { name: "Libros de fotos", price: "" },
      { name: "Marcos", price: "" },
      { name: "Álbumes", price: "" },
    ],
  },
  {
    id: "archivo",
    title: "Archivo",
    image: "/images/digitalizacion.jpg",
    alt: "Rollos y diapositivas para digitalizar",
    description: "Pasamos el material analógico a archivo digital.",
    items: [
      { name: "Digitalización de rollos", price: "" },
      { name: "Digitalización de diapositivas", price: "" },
    ],
  },
];

export const products = [
  { title: "Copias", image: "/images/copias.jpg", alt: "Copias fotográficas", line: "Revelado químico en papel." },
  { title: "Ampliaciones", image: "/images/ampliaciones.jpg", alt: "Ampliación fotográfica", line: "Formatos grandes, a medida." },
  { title: "Polaroid", image: "/images/polaroid.jpg", alt: "Fotos estilo Polaroid", line: "Mini y 9×13, con borde o imán." },
  { title: "Lonas y vinilos", image: "/images/lonas-vinilos.jpg", alt: "Lona y vinilo impresos", line: "Adhesivo, esmerilado y microperforado." },
  { title: "Libros y álbumes", image: "/images/libros-albumes.jpg", alt: "Libro de fotos", line: "Fotolibros y álbumes para guardar." },
  { title: "Marcos", image: "/images/marcos.jpg", alt: "Marcos con fotografía", line: "Portarretratos de madera y juveniles." },
];

export const gallery = [
  { src: "/images/galeria-01.jpg", alt: "Minilab del laboratorio" },
  { src: "/images/galeria-02.jpg", alt: "Equipo de ampliaciones" },
  { src: "/images/galeria-03.jpg", alt: "Ampliación de gran tamaño" },
  { src: "/images/galeria-04.jpg", alt: "Vinilo adhesivo" },
  { src: "/images/galeria-05.jpg", alt: "Carpetas escolares" },
  { src: "/images/galeria-06.jpg", alt: "Digitalización de diapositivas" },
  { src: "/images/galeria-07.jpg", alt: "Caja para pendrive" },
  { src: "/images/galeria-08.jpg", alt: "Portarretrato juvenil" },
  { src: "/images/galeria-09.jpg", alt: "Álbum de fotos" },
];

export const steps = [
  "Consultás por WhatsApp",
  "Cotizamos precio y plazo",
  "Producimos en el laboratorio",
  "Retirás en La Plata",
];

export const testimonials = [
  { quote: "[COMPLETAR: reseña de cliente]", name: "[COMPLETAR: nombre]", area: "[COMPLETAR: barrio]" },
  { quote: "[COMPLETAR: reseña de cliente]", name: "[COMPLETAR: nombre]", area: "[COMPLETAR: barrio]" },
  { quote: "[COMPLETAR: reseña de cliente]", name: "[COMPLETAR: nombre]", area: "[COMPLETAR: barrio]" },
];

export const faq = [
  { q: "¿Qué formatos de archivo aceptan?", a: "[COMPLETAR]" },
  { q: "¿Cómo envío las fotos?", a: "[COMPLETAR]" },
  { q: "¿Cuáles son los tiempos de entrega?", a: "[COMPLETAR]" },
  { q: "¿Qué formas de pago aceptan?", a: "[COMPLETAR]" },
  { q: "¿Cómo se calcula el presupuesto?", a: "[COMPLETAR]" },
];
