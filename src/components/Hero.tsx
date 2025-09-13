import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const lines = [
    "Milas de autor,",
    "cocina de mundo,",
    "buenos tragos,",
    "onda canchera.",
  ];

  return (
    <section className="relative isolate">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 lg:py-24 grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
        {/* Left: Copy */}
        <div className="max-w-2xl order-2 lg:order-1">
          <div className="type-small uppercase text-gold tracking-[0.14em] mb-4 flex items-center gap-2">
            <Sunburst className="text-brick w-5 h-5" />
            Chacarita · CABA
          </div>
          <h1 className="type-hero text-blue">
            {lines.map((t, i) => (
              <span key={i} className="block">
                {t}
              </span>
            ))}
          </h1>
          <p className="type-body mt-6 text-olive/90 max-w-xl">
            Chaska es tu punto de encuentro en el corazón de Chacarita.
            Fusionamos ingredientes bien argentinos con influencias del mundo
            para crear una propuesta fresca y canchera. Desde nuestras milanesas
            de autor y los tacos de mochella hasta las papas wagyu, cada plato
            está pensado para sorprender. Vení a descubrir tu nuevo lugar
            favorito para comer, brindar y pasarla bien.
          </p>
          <div className="mt-8">
            <Link href="/menu" className="link-cta">
              Ver menú completo
            </Link>
          </div>
        </div>

        {/* Right: Image panel */}
        <div className="relative order-1 lg:order-2">
          <div className="rounded-3xl overflow-hidden">
            <Image
              src="/hero.png"
              alt="Milanesas y vino en mesa de restaurante"
              className="rounded-3xl w-full h-auto"
              width={1600}
              height={1067}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Sunburst({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M3 13h18" />
      <path d="M5 13a7 7 0 0 1 14 0" fill="currentColor" stroke="none" />
      <path d="M12 3v5M6 6l3 4M18 6l-3 4" />
    </svg>
  );
}

// DecorativePanel removed and replaced with a responsive image in the panel above.
