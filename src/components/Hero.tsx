import Link from "next/link";

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
        <div className="max-w-2xl">
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
            Chaska es tu punto de encuentro en el corazón de Chacarita. Fusionamos ingredientes bien argentinos con influencias del mundo para crear una propuesta fresca y canchera. Desde nuestras milanesas de autor y los tacos de mochella hasta las papas wagyu, cada plato está pensado para sorprender. Vení a descubrir tu nuevo lugar favorito para comer, brindar y pasarla bien.
          </p>
          <div className="mt-8">
            <Link href="/menu" className="link-cta">
              Ver menú completo
            </Link>
          </div>
        </div>

        {/* Right: Illustration panel */}
        <div className="relative">
          <div className="aspect-[4/3] rounded-3xl bg-gold/15 border border-blue/15 relative overflow-hidden">
            <DecorativePanel />
          </div>
        </div>
      </div>
    </section>
  );
}

function Sunburst({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 13h18" />
      <path d="M5 13a7 7 0 0 1 14 0" fill="currentColor" stroke="none" />
      <path d="M12 3v5M6 6l3 4M18 6l-3 4" />
    </svg>
  );
}

function DecorativePanel() {
  return (
    <svg viewBox="0 0 600 450" className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="rgba(196,162,91,0.22)" />
          <stop offset="100%" stopColor="rgba(47,74,99,0.18)" />
        </linearGradient>
        <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
        </filter>
      </defs>
      <rect width="100%" height="100%" fill="url(#g1)" />

      {/* Cloud swirls (echoing reference vibe) */}
      <g fill="none" stroke="rgba(164,67,53,0.45)" strokeWidth="3" strokeLinecap="round">
        <path d="M430 170c24-30 78-18 86 14 6 24-10 48-42 54-12 2-22 0-30-5" />
        <path d="M455 180c-18-14-48-6-54 14-6 18 6 38 28 42" />
        <path d="M508 214c14 4 24 18 20 28-6 16-30 18-46 6" />
      </g>

      {/* Playful cat silhouette sipping (stylized) */}
      <g transform="translate(360 120) rotate(12)" fill="none" stroke="#2f4a63" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M48 38c-22 8-38 28-38 50 0 34 34 62 74 62 30 0 54-14 64-34 8-16 2-36-18-40" />
        <path d="M86 18c-10 8-16 18-16 30 0 16 10 26 22 34 10 6 20 14 24 22" />
        <path d="M70 62c-6 10-10 22-10 34" />
        <path d="M120 154c6 10 16 18 26 22" />
        {/* drink */}
        <path d="M124 82l22 4-6 38-24-4z" fill="#a44335" stroke="#a44335" />
        <path d="M120 86c18 0 24 6 28 14" />
        <path d="M140 86c0-8 8-14 16-14" />
      </g>

      {/* Gentle ground curves */}
      <g fill="none" stroke="currentColor" className="text-blue/35">
        <path d="M-20 320 C 100 260, 220 380, 340 320 S 580 260, 720 320" strokeWidth="3" />
        <path d="M-20 360 C 100 300, 220 420, 340 360 S 580 300, 720 360" strokeWidth="2" />
      </g>
    </svg>
  );
}
