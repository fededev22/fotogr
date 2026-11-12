import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const sans = Inter({ variable: "--font-inter", subsets: ["latin"] });
const serif = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fotografía Digital — Laboratorio en La Plata",
  description:
    "Revelado químico, copias, ampliaciones, gran formato, gráfica para eventos y digitalización de rollos y diapositivas en La Plata.",
  openGraph: {
    title: "Fotografía Digital — Laboratorio en La Plata",
    description: "Tus fotos, en papel. Laboratorio fotográfico en La Plata.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${sans.variable} ${serif.variable} scroll-smooth`}>
      <body className="bg-[var(--paper)] font-sans text-[var(--ink)] antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
