import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/servicios/:path*", destination: "/#servicios", permanent: false },
      { source: "/visita", destination: "/#contacto", permanent: false },
      { source: "/copias", destination: "/#servicios", permanent: false },
      { source: "/ampliaciones", destination: "/#servicios", permanent: false },
      { source: "/gran", destination: "/#servicios", permanent: false },
      { source: "/grafica", destination: "/#servicios", permanent: false },
      { source: "/digital", destination: "/#servicios", permanent: false },
      { source: "/evento", destination: "/#servicios", permanent: false },
      { source: "/banner", destination: "/#servicios", permanent: false },
      { source: "/marcos", destination: "/#servicios", permanent: false },
      { source: "/albumes", destination: "/#servicios", permanent: false },
      { source: "/polaroid", destination: "/#servicios", permanent: false },
    ];
  },
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
