"use client";

import { useEffect, useRef } from "react";

export function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) node.dataset.show = "true";
      },
      { threshold: 0.15 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="translate-y-2 opacity-0 transition duration-500 data-[show=true]:translate-y-0 data-[show=true]:opacity-100 motion-reduce:translate-y-0 motion-reduce:opacity-100">
      {children}
    </div>
  );
}
