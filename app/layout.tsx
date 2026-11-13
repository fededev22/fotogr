import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { business, WHATSAPP } from "@/lib/data";
import "./globals.css";

const sans = Inter({ variable: "--font-inter", subsets: ["latin"] });
const serif = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fotografía Digital | Laboratorio fotográfico en La Plata",
  description:
    "Revelado químico, copias, ampliaciones, gran formato y digitalización de rollos y diapositivas en La Plata.",
  openGraph: {
    title: "Fotografía Digital | Laboratorio fotográfico en La Plata",
    description: "Revelado, ampliaciones, gran formato y digitalización en La Plata.",
    locale: "es_AR",
    type: "website",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 1200, alt: "Copias del laboratorio" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${sans.variable} ${serif.variable} scroll-smooth`}>
      <body className="bg-[var(--paper)] font-sans text-[var(--ink)] antialiased">
        <a className="skip" href="#inicio">Saltar al contenido</a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: business.name,
              address: business.address,
              openingHours: business.hours,
              telephone: `+${WHATSAPP}`,
              areaServed: business.city,
            }),
          }}
        />
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
