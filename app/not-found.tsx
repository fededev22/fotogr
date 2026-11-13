import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto w-[min(1100px,calc(100%-2rem))] py-24">
      <h1 className="font-serif text-5xl">No encontramos esa página</h1>
      <p className="mt-4 text-[var(--muted)]">Volvé al inicio del laboratorio.</p>
      <Link className="mt-6 inline-flex min-h-11 items-center font-semibold text-[var(--accent)]" href="/">
        Ir al inicio
      </Link>
    </main>
  );
}
