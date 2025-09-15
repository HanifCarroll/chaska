import Image from "next/image";
import Link from "next/link";

export default function WineClubHighlight() {
  return (
    <section aria-labelledby="wineclub-title" className="relative isolate">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 lg:py-20 grid gap-10 md:grid-cols-[1.1fr_1fr] items-center">
        <div className="max-w-xl">
          <h2 id="wineclub-title" className="type-h2 text-blue">
            Club de Vinos: Una Selección Única
          </h2>
          <p className="type-small text-olive/70 mt-1">
            (Wine Club: A Unique Selection)
          </p>
          <p className="type-body text-olive/90 mt-4">
            Para los amantes del buen vino, creamos un club con etiquetas
            especialmente seleccionadas.
          </p>
          <div className="mt-6">
            <Link href="/wine-club" className="btn btn-secondary">
              Conocer más
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl border border-foreground/10">
          <Image
            src="/wine.png"
            alt="Botella de vino siendo servida en copa"
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
