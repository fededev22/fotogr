import type { Metadata } from "next";
import { Figtree, Newsreader } from "next/font/google";
import "./globals.css";

const sans = Figtree({
  variable: "--font-sans",
  subsets: ["latin"],
});

const display = Newsreader({
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
      <body className="min-h-full bg-stone-50 font-[family-name:var(--font-sans)] text-stone-950 antialiased">
        {children}
      </body>
    </html>
  );
}
