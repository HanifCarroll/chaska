import Image from "next/image";

const IG_HANDLE = process.env.NEXT_PUBLIC_IG || "chaska.ba";
const IG_URL = `https://instagram.com/${IG_HANDLE}`;

export default function InstagramGrid() {
  const images = ["/ig-1.png", "/ig-2.png", "/ig-3.png", "/ig-4.png"];
  return (
    <section aria-labelledby="instagram-title" className="relative isolate">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 lg:py-20">
        <header className="max-w-2xl">
          <h2 id="instagram-title" className="type-h2 text-blue">
            La Onda en Instagram
          </h2>
          <p className="type-body text-olive/90 mt-2">
            Seguinos en{" "}
            <a
              className="underline decoration-blue/30 underline-offset-4 hover:decoration-blue"
              target="_blank"
              rel="noopener noreferrer"
              href={IG_URL}
            >
              @{IG_HANDLE}
            </a>
          </p>
        </header>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {images.map((src, i) => (
            <a
              key={src}
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              aria-label={`Abrir Instagram @${IG_HANDLE}`}
            >
              <div className="relative aspect-square overflow-hidden rounded-xl border border-foreground/10">
                <Image
                  src={src}
                  alt={`Publicación de Instagram ${i + 1} de @${IG_HANDLE}`}
                  fill
                  sizes="(min-width: 640px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
