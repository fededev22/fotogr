import type { Metadata } from "next";
import { Bodoni_Moda, Sora } from "next/font/google";
import { Nav } from "@/components/Nav";
import "./globals.css";

const sans = Sora({
  variable: "--font-sans",
  subsets: ["latin"],
});

const display = Bodoni_Moda({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fotografía Digital — Laboratorio en La Plata",
  description:
    "Revelado químico, copias, ampliaciones, gran formato, gráfica, digitalización y productos para eventos.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${sans.variable} ${display.variable} h-full`}>
      <body className="min-h-full font-[family-name:var(--font-sans)] antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}
