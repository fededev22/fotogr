import { business, isFilled, nav } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] px-4 py-10 text-sm">
      <div className="mx-auto flex w-[min(1120px,100%)] flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p>© {business.name} · {business.city}</p>
        <nav className="flex flex-wrap gap-4">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <p className="text-[var(--muted)]">
          {isFilled(business.instagram) ? business.instagram : null}
          {isFilled(business.facebook) ? ` · ${business.facebook}` : null}
        </p>
      </div>
    </footer>
  );
}
