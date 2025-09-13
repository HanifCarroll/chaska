import Image from "next/image";

export default function Propuesta() {
  const items: Array<{ title: string; desc: string; src: string; alt: string }> = [
    {
      title: "Tacos de Mochella",
      desc: "Una fusión inesperada que tenés que probar.",
      src: "/tacos.png",
      alt: "Tacos de mochella con cilantro, queso y lima",
    },
    {
      title: "Papas Wagyu",
      desc: "Crocantes, untuosas y con actitud.",
      src: "/papas.png",
      alt: "Corte wagyu con papas doradas y glaseado",
    },
    {
      title: "Milanesas de autor",
      desc: "Clásicas reversionadas, bien de Chaska.",
      src: "/milanesas.png",
      alt: "Milanesas doradas con ensalada y limón",
    },
  ];

  return (
    <section aria-labelledby="propuesta-title" className="relative isolate">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 lg:py-20">
        <header className="max-w-2xl">
          <h2 id="propuesta-title" className="type-h2 text-blue">
            La Propuesta: Un Vistazo a Nuestra Cocina
          </h2>
          <p className="type-body text-olive/90 mt-4">
            Un teaser de nuestros platos más fotogénicos y queridos.
          </p>
        </header>

        <div className="mt-8 grid gap-8 sm:gap-10 md:grid-cols-3">
          {items.map((it, i) => (
            <article key={i} className="grid gap-3">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl border border-foreground/10">
                <Image
                  src={it.src}
                  alt={it.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
              <h3 className="type-h3 text-blue">{it.title}</h3>
              <p className="type-body text-olive/90">{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
