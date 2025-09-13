import Image from "next/image";

export default function Ambiente() {
  return (
    <section aria-labelledby="ambiente-title" className="relative isolate">
      <div className="mx-auto max-w-none">
        <div className="relative">
          {/* Full-width image */}
          <div className="relative w-full aspect-[16/9] overflow-hidden">
            <Image
              src="/restaurant.png"
              alt="Interior de Chaska con luz cálida y gente disfrutando"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          {/* Overlay copy */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 h-full flex items-end pb-10">
              <div className="max-w-2xl">
                <h2 id="ambiente-title" className="type-h2 text-white">
                  Más que un restaurante, un lugar para estar.
                </h2>
                <p className="type-body text-white/85 mt-3">
                  Onda canchera, cálida y moderna. Tu punto de encuentro en
                  Chacarita para comer rico, brindar y quedarte charlando.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
