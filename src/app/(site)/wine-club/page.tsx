import Image from "next/image";
import JoinForm from "@/components/JoinForm";

export const metadata = { title: "Club de Vinos — Chaska" };

export default function WineClubPage() {
  return (
    <main className="flex flex-col">
      {/* Section 1: Hero */}
      <section aria-labelledby="club-hero-title" className="relative isolate">
        {/* Hero image (PNG provided by user) */}
        <Image
          src="/wine-club-hero.png"
          alt="Primer plano cinematográfico de vino sirviéndose en copa"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* overlay */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-24 md:py-36 text-center min-h-[60vh] flex flex-col items-center justify-center">
          <h1 id="club-hero-title" className="type-hero text-white">
            Club de Vinos
          </h1>
          <p className="mt-5 max-w-3xl mx-auto type-body text-white/90">
            Una selección mensual de vinos únicos, curada para vos. Sumate para
            recibir botellas rotativas, beneficios y acceso a eventos
            exclusivos.
          </p>
          <div className="mt-10">
            <a href="#join" className="btn btn-on-dark">
              Quiero unirme
            </a>
          </div>
        </div>
      </section>

      {/* Section 2: Cómo Funciona */}
      <section
        aria-labelledby="como-funciona"
        className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-16"
      >
        <h2 id="como-funciona" className="type-h2 text-blue text-center">
          Simple en Tres Pasos
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Paso 1 */}
          <div className="rounded-xl bg-white/70 backdrop-blur p-6 ring-1 ring-black/5">
            <div className="mb-4 flex items-center justify-center">
              {/* calendar/check icon */}
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="text-gold"
                aria-hidden="true"
                focusable="false"
              >
                <title>Calendario del club</title>
                <rect
                  x="3"
                  y="4"
                  width="18"
                  height="18"
                  rx="2"
                  ry="2"
                  strokeWidth="1.5"
                />
                <line x1="16" y1="2" x2="16" y2="6" strokeWidth="1.5" />
                <line x1="8" y1="2" x2="8" y2="6" strokeWidth="1.5" />
                <line x1="3" y1="10" x2="21" y2="10" strokeWidth="1.5" />
                <path d="M8 14l2 2 4-4" strokeWidth="1.5" />
              </svg>
            </div>
            <h3 className="type-h3 text-blue text-center">
              1. Suscripción Flexible
            </h3>
            <p className="mt-2 type-body text-olive/90 text-center">
              Elegí tu plan y suscribite online en menos de un minuto. Podés
              pausar o cancelar cuando quieras.
            </p>
          </div>
          {/* Paso 2 */}
          <div className="rounded-xl bg-white/70 backdrop-blur p-6 ring-1 ring-black/5">
            <div className="mb-4 flex items-center justify-center">
              {/* bottle/star icon */}
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="text-gold"
                aria-hidden="true"
                focusable="false"
              >
                <title>Botella destacada</title>
                <path
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  strokeWidth="1.2"
                />
              </svg>
            </div>
            <h3 className="type-h3 text-blue text-center">
              2. Curaduría Experta
            </h3>
            <p className="mt-2 type-body text-olive/90 text-center">
              Cada mes, nuestro sommelier selecciona etiquetas especiales de
              bodegas boutique y proyectos únicos que no vas a encontrar en otro
              lado.
            </p>
          </div>
          {/* Paso 3 */}
          <div className="rounded-xl bg-white/70 backdrop-blur p-6 ring-1 ring-black/5">
            <div className="mb-4 flex items-center justify-center">
              {/* bag/gift icon */}
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="text-gold"
                aria-hidden="true"
                focusable="false"
              >
                <title>Bolsa de regalo</title>
                <rect
                  x="3"
                  y="8"
                  width="18"
                  height="13"
                  rx="2"
                  strokeWidth="1.5"
                />
                <path
                  d="M3 12h18M12 8V5a3 3 0 10-6 0v3m6 0h6V5a3 3 0 10-6 0"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <h3 className="type-h3 text-blue text-center">
              3. Retiro y Disfrute
            </h3>
            <p className="mt-2 type-body text-olive/90 text-center">
              Te avisamos cuando tu selección está lista para que la pases a
              buscar por Chaska y la disfrutes en casa o con amigos.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Este Mes en el Club */}
      <section
        aria-labelledby="este-mes"
        className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-16"
      >
        <h2 id="este-mes" className="type-h2 text-blue text-center">
          La Selección de Septiembre
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <Image
              src="/wine-club-selection.png"
              alt="Selección actual de botellas del mes con copa y maridajes"
              width={800}
              height={600}
              className="w-full h-auto rounded-xl shadow-sm ring-1 ring-black/5"
            />
          </div>
          <div>
            <h3 className="type-h3 text-blue">
              Tesoros Ocultos de la Patagonia
            </h3>
            <p className="mt-3 type-body text-olive/90">
              Este mes exploramos etiquetas que expresan el carácter frío y el
              terroir australen cada copa. Seleccionamos proyectos pequeños con
              personalidad única, pensados para descubrir y compartir.
            </p>
            <ul className="mt-5 space-y-2 type-body text-olive/95">
              <li>• Bodega X — Malbec de Río Negro</li>
              <li>• Proyecto Y — Pinot Noir de Chubut</li>
            </ul>
            <div className="mt-6">
              <a href="#join" className="btn btn-primary">
                Recibir esta selección
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Beneficios */}
      <section
        aria-labelledby="beneficios"
        className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-16"
      >
        <h2 id="beneficios" className="type-h2 text-blue text-center">
          Más Que Solo Vino
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            {/* Beneficio 1 */}
            <div className="rounded-lg bg-white/70 p-5 ring-1 ring-black/5">
              <div className="flex items-start gap-4">
                <div className="shrink-0 text-gold">
                  {/* ticket/event icon */}
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <title>Entrada a eventos exclusivos</title>
                    <path
                      d="M3 7h18v4a2 2 0 010 4v4H3v-4a2 2 0 010-4V7z"
                      strokeWidth="1.5"
                    />
                    <path d="M7 7v10M17 7v10" strokeWidth="1.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="type-h3 text-blue">
                    Acceso a Eventos Privados
                  </h3>
                  <p className="type-body text-olive/90">
                    Invitaciones anticipadas y exclusivas a catas con
                    sommeliers, noches de maridaje y eventos especiales en
                    Chaska solo para miembros.
                  </p>
                </div>
              </div>
            </div>

            {/* Beneficio 2 */}
            <div className="rounded-lg bg-white/70 p-5 ring-1 ring-black/5">
              <div className="flex items-start gap-4">
                <div className="shrink-0 text-gold">
                  {/* discount tag icon */}
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <title>Etiqueta con descuento</title>
                    <path
                      d="M20.59 13.41L13.41 20.59a2 2 0 01-2.83 0L3 13v-2.59L10.59 3H13l7.59 7.59a2 2 0 010 2.82z"
                      strokeWidth="1.5"
                    />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="type-h3 text-blue">
                    Descuentos en el Restaurante
                  </h3>
                  <p className="type-body text-olive/90">
                    Disfrutá de un 15% de descuento en nuestra carta de vinos
                    para consumir en el local y precios especiales en etiquetas
                    para llevar.
                  </p>
                </div>
              </div>
            </div>

            {/* Beneficio 3 */}
            <div className="rounded-lg bg-white/70 p-5 ring-1 ring-black/5">
              <div className="flex items-start gap-4">
                <div className="shrink-0 text-gold">
                  {/* gift/surprise icon */}
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <title>Regalos para socios</title>
                    <rect
                      x="3"
                      y="8"
                      width="18"
                      height="13"
                      rx="2"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M3 12h18M12 8V5a3 3 0 10-6 0v3m6 0h6V5a3 3 0 10-6 0"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="type-h3 text-blue">Contenido y Sorpresas</h3>
                  <p className="type-body text-olive/90">
                    Recibí notas de cata detalladas con cada selección,
                    sugerencias de maridaje y alguna que otra sorpresa ocasional
                    que te va a encantar.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative lg:mr-[-4vw] xl:mr-[-8vw]">
            <div className="relative w-full aspect-[4/3] lg:h-[420px] xl:h-[540px] rounded-3xl overflow-hidden shadow-sm ring-1 ring-black/5">
              <Image
                src="/wine-club-benefits.png"
                alt="Cata de vinos y momentos compartidos, imagen ilustrativa"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Final CTA / Form as Card */}
      <section id="join" aria-labelledby="final-cta" className="w-full">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-16 md:py-24">
          <div className="mx-auto max-w-4xl rounded-2xl bg-blue text-white px-6 sm:px-10 py-12 md:py-16 shadow-lg ring-1 ring-black/10">
            <div className="text-center">
              <h2 id="final-cta" className="type-h1">
                ¿Listo para la próxima copa?
              </h2>
              <p className="mt-3 type-h3">$30,000 por mes</p>
              <p className="mt-3 max-w-2xl mx-auto type-body text-white/90">
                Formá parte de una comunidad que celebra los buenos vinos y los
                buenos momentos.
              </p>
            </div>

            <JoinForm />
          </div>
          {/* Thin gold divider for clear boundary before footer */}
          <div className="mt-10 h-0.5 w-full mx-auto bg-gold/70 rounded-full" />
        </div>
      </section>
    </main>
  );
}
