export default function Hero() {
  return (
    <section className="relative isolate">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          <div className="type-small uppercase text-gold tracking-[0.12em] mb-3 flex items-center gap-2">
            <Sunburst className="text-brick w-5 h-5" />
            Since 2017
          </div>
          <h1 className="text-blue">
            Low & slow is the only way to go.
          </h1>
          <p className="type-body mt-6 text-olive/90">
            A neighborhood smokehouse serving wood-fired plates, seasonal veggies, and good drinks. Come by, kick back, and stay a while.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#menu" className="type-ui rounded-full px-5 py-2.5 bg-blue text-white hover:opacity-90">
              View Full Menu
            </a>
            <a href="#visit" className="type-ui rounded-full px-5 py-2.5 border border-olive/40 text-olive hover:bg-olive hover:text-white transition-colors">
              Visit Us
            </a>
          </div>
        </div>

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
          <stop offset="0%" stopColor="rgba(196,162,91,0.25)" />
          <stop offset="100%" stopColor="rgba(47,74,99,0.25)" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g1)" />
      <g fill="none" stroke="currentColor" className="text-blue/40">
        <path d="M-20 300 C 100 220, 220 380, 340 300 S 580 220, 720 300" strokeWidth="3" />
        <path d="M-20 340 C 100 260, 220 420, 340 340 S 580 260, 720 340" strokeWidth="2" />
        <path d="M-20 260 C 100 180, 220 340, 340 260 S 580 180, 720 260" strokeWidth="2" />
      </g>
      <circle cx="480" cy="150" r="60" fill="rgba(164,67,53,0.35)" />
      <circle cx="520" cy="170" r="18" fill="rgba(255,255,255,0.70)" />
    </svg>
  );
}
