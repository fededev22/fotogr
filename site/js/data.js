/* Editá precios y textos acá. Están en pesos, como ejemplo. */
const STORE = {
  business: "Fotografía Digital",
  city: "La Plata, Buenos Aires",
  phone: "5492213999289",
  hours: "Lunes a viernes, 9 a 18",
  address: "Diagonal 79, La Plata",
};

const SERVICES = [
  { id: "retratos", name: "Sesión de retratos", price: 45000, category: "servicios", blurb: "En estudio o al aire libre." },
  { id: "eventos", name: "Cobertura de evento", price: 90000, category: "servicios", blurb: "Cumpleaños y celebraciones." },
  { id: "bodas", name: "Fotografía de boda", price: 180000, category: "servicios", blurb: "Ceremonia y fiesta." },
  { id: "carnet", name: "Fotos carnet", price: 3500, category: "servicios", blurb: "Listas en el día." },
  { id: "producto", name: "Foto de producto", price: 25000, category: "servicios", blurb: "Para tienda o redes." },
  { id: "restauracion", name: "Restauración de fotos", price: 8000, category: "servicios", blurb: "Arreglo digital de una imagen." },
];

const PRODUCTS = [
  { id: "cam-1", name: "Cámara compacta", price: 420000, category: "camaras", blurb: "Para el día a día." },
  { id: "lens-1", name: "Lente 50 mm", price: 210000, category: "camaras", blurb: "Retratos con poca luz." },
  { id: "bag-1", name: "Bolso para equipo", price: 48000, category: "camaras", blurb: "Acolchado, dos cuerpos." },
  { id: "print-lab", name: "Minilab de mostrador", price: 0, category: "maquinas", blurb: "Consultar disponibilidad." },
  { id: "ink-1", name: "Juego de tintas", price: 36000, category: "maquinas", blurb: "Para impresora de fotos." },
  { id: "photo-15", name: "Foto 15×21 brillante", price: 1800, category: "impresiones", blurb: "Copia de laboratorio." },
  { id: "canvas", name: "Lienzo 30×40", price: 22000, category: "impresiones", blurb: "Listo para colgar." },
  { id: "album", name: "Álbum 20×20", price: 35000, category: "impresiones", blurb: "Tapa dura." },
  { id: "mug", name: "Taza personalizada", price: 9000, category: "impresiones", blurb: "Con tu foto." },
];

const PRINTS = {
  sizes: [
    { id: "10x15", name: "10×15", price: 800 },
    { id: "15x21", name: "15×21", price: 1800 },
    { id: "20x30", name: "20×30", price: 4500 },
  ],
  papers: ["Fotográfico", "Mate"],
  finishes: ["Brillante", "Mate"],
};

const GALLERY = [
  { src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=70", tag: "estudio", alt: "Cámara sobre una mesa de estudio" },
  { src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=70", tag: "eventos", alt: "Pareja en un evento al atardecer" },
  { src: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=900&q=70", tag: "retrato", alt: "Retrato con luz suave" },
  { src: "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?auto=format&fit=crop&w=900&q=70", tag: "estudio", alt: "Equipo de fotografía" },
  { src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=70", tag: "eventos", alt: "Celebración al aire libre" },
  { src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=70", tag: "paisaje", alt: "Paisaje con montañas" },
];

const money = (n) => (n ? n.toLocaleString("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 }) : "A consultar");
