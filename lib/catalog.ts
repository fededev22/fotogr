export const WA = "https://wa.me/5492213999289";

export type Item = {
  id: string;
  title: string;
  image: string;
  text: string;
  points: string[];
};

export type Group = { id: string; title: string; items: Item[] };

const p = (n: number) => `/catalog/${String(n).padStart(2, "0")}.jpg`;

export const groups: Group[] = [
  {
    id: "copias",
    title: "Copias fotográficas",
    items: [
      {
        id: "noritsu",
        title: "Minilab Noritsu QSS-3702HD",
        image: p(1),
        text: "Revelado químico por exposición láser. 640 × 640 dpi, de 6×9 a 30×90 cm, papel fotosensible brillo o lustre. Seco a seco en unos 6 minutos.",
        points: ["Papel fotosensible", "Proceso químico", "Brillo o lustre"],
      },
      {
        id: "6x9",
        title: "Copias 6×9",
        image: p(2),
        text: "El formato chico para billetera, heladera o regalo. Revelado real, no una impresión de tinta.",
        points: ["Lustre 250 g/m²", "Brillante 260 g/m²", "Con borde o con imán"],
      },
      {
        id: "mini",
        title: "Mini Polaroid 6×9",
        image: p(3),
        text: "Formato cuadrado 8×8 cm a 945×945 px en RGB. Con borde o imán.",
        points: ["Mate o brillante", "Hasta 3 generaciones"],
      },
    ],
  },
  {
    id: "ampliaciones",
    title: "Ampliaciones",
    items: [
      {
        id: "p7000",
        title: "Epson SureColor SC-P7000",
        image: p(4),
        text: "Diez tintas pigmentadas UltraChrome HDX, 98% Pantone, modo blanco y negro avanzado.",
        points: ["Papel fotográfico", "Duración estimada hasta 60 años en Premium Glossy"],
      },
      {
        id: "40x50",
        title: "Ampliación 40×50",
        image: p(5),
        text: "Bobina de 60 cm de ancho. Cualquier medida dentro de ese ancho, hasta 90 cm de largo.",
        points: ["Lustre 250 g/m²", "Mínimo según trabajo: 50 cm lineales"],
      },
      {
        id: "40x60",
        title: "Ampliación 40×60",
        image: p(6),
        text: "Mismo papel y la misma bobina, en formato más panorámico.",
        points: ["A medida dentro de 60 cm"],
      },
    ],
  },
  {
    id: "gran",
    title: "Gran formato",
    items: [
      {
        id: "s40600",
        title: "Epson SureColor S40600",
        image: p(7),
        text: "Cartelería y gigantografía. Hasta 1440 × 1440 dpi, tintas solventes UltraChrome GS3.",
        points: ["Vinilo, banner y otros materiales"],
      },
      {
        id: "superficies",
        title: "Lonas y vinilos",
        image: p(8),
        text: "Lona front hasta 160 cm. Adhesivo hasta 105 cm. Esmerilado hasta 125 cm. Microperforado hasta 120 cm.",
        points: ["Publicidad", "Decoración", "Vidrieras"],
      },
      {
        id: "adhesivo",
        title: "Vinilo adhesivo",
        image: p(9),
        text: "Vidrios, paredes, muebles y vehículos. Se retira sin dejar residuo.",
        points: ["Resistente al agua"],
      },
    ],
  },
  {
    id: "grafica",
    title: "Gráfica",
    items: [
      {
        id: "konica",
        title: "Konica Minolta bizhub PRESS C71hc",
        image: p(10),
        text: "Láser tándem, 1200 × 1200 dpi, High Chroma, hasta 70 páginas por minuto.",
        points: ["Color fiel para fotos y marketing"],
      },
      {
        id: "carpetas",
        title: "Carpetas escolares",
        image: p(11),
        text: "Ilustración de 300 g, con o sin diseño.",
        points: ["23,7 × 32 cm para 15×21", "32 × 47,5 cm para 20×30"],
      },
      {
        id: "numerales",
        title: "Numerales carpita",
        image: p(12),
        text: "Pack de 12. Ilustración 300 g glossy, diseño propio.",
        points: ["Cumpleaños", "Bodas", "Mesas"],
      },
    ],
  },
  {
    id: "digital",
    title: "Digitalización",
    items: [
      {
        id: "c41",
        title: "Revelado y digitalización C-41",
        image: p(13),
        text: "Color y blanco y negro. Unos 7 días hábiles. El archivo llega por enlace y queda 3 días. El negativo se guarda 60 días.",
        points: ["No se procesa película de cine ECN-2"],
      },
      {
        id: "slides",
        title: "Diapositivas",
        image: p(14),
        text: "Escaneo para verlas en el teléfono o la computadora y frenar el deterioro.",
        points: ["Entrega digital"],
      },
    ],
  },
  {
    id: "evento",
    title: "Para tu evento",
    items: [
      {
        id: "libro",
        title: "Fotolibros",
        image: p(15),
        text: "15×20, 20×20, 20×30, 30×30 y más. Papel fotográfico y tapa dura.",
        points: ["5 días hábiles sin diseño", "Unos 21 días con diseño"],
      },
      {
        id: "pen",
        title: "Pen Box",
        image: p(16),
        text: "Caja de 10×15 cm con base de goma eva para el pendrive. Imagen, texto y tipografía a elección.",
        points: ["Archivo digital del evento"],
      },
      {
        id: "num2",
        title: "Numerales para la mesa",
        image: p(17),
        text: "Misma línea de numerales carpita, listos para el salón.",
        points: ["Pack de 12"],
      },
    ],
  },
  {
    id: "banner",
    title: "Porta banner",
    items: [
      {
        id: "rollup",
        title: "Roll-up 85×210 cm",
        image: p(18),
        text: "Lona lisa y base enrollable. Se arma para ferias, conferencias y puntos de venta.",
        points: ["Fácil de trasladar"],
      },
    ],
  },
  {
    id: "marcos",
    title: "Portarretratos",
    items: [
      {
        id: "pf2027",
        title: "PF 2027 box con paspartú",
        image: p(19),
        text: "Madera en tres tonos. La medida chica entra con paspartú y la grande sin paspartú.",
        points: ["10×15 a 25×33", "Pie y gancho hasta 20×30"],
      },
      {
        id: "pf105",
        title: "PF 105 juvenil",
        image: p(20),
        text: "Plástico en rojo, fucsia, verde manzana, celeste, azul, blanco y negro.",
        points: ["10×15, 13×18 y 15×21", "De pie o colgado"],
      },
      {
        id: "sf5171",
        title: "SF 5171 madera y paspartú negro",
        image: p(21),
        text: "Con paspartú en 10×15, 13×18 y 15×20. Sin paspartú en la medida siguiente.",
        points: ["Vertical u horizontal"],
      },
    ],
  },
  {
    id: "albumes",
    title: "Álbumes",
    items: [
      {
        id: "estrellas",
        title: "Álbum VGO Estrellas",
        image: p(22),
        text: "Hasta 100 fotos de 10×15, 13×18 o 15×21. Hojas negras.",
        points: ["Fucsia, verde, azul y negro"],
      },
      {
        id: "liso",
        title: "Álbum VGO liso",
        image: p(23),
        text: "Misma capacidad, hojas blancas.",
        points: ["Bordo, verde, negro y azul"],
      },
      {
        id: "tela",
        title: "Álbum de tela VGO",
        image: p(24),
        text: "Tapa de tela con lugar para una foto.",
        points: ["Bordo, celeste, gris, negro, azul y beige"],
      },
    ],
  },
  {
    id: "polaroid",
    title: "Polaroid",
    items: [
      {
        id: "mini2",
        title: "Mini Polaroid 6×9",
        image: p(25),
        text: "La misma copia química, en la sección Polaroid del catálogo.",
        points: ["Borde o imán"],
      },
      {
        id: "p913",
        title: "Polaroid 9×13",
        image: p(26),
        text: "Más grande, mismo revelado. Para cumpleaños, bautismos y regalos.",
        points: ["Mate 250 g o brillante 260 g"],
      },
      {
        id: "music",
        title: "Polaroid 9×13 con música",
        image: p(27),
        text: "Traés el código y queda incrustado en la foto.",
        points: ["Spotify en la copia"],
      },
    ],
  },
];
