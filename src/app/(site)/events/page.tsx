export const metadata = { title: "Eventos — Chaska" };

export default function EventsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 py-12 space-y-8">
      <header>
        <h1 className="text-blue">Eventos</h1>
        <p className="type-body text-olive/90">
          Cenas privadas, noches de vino y más.
        </p>
      </header>

      <section>
        <h2 className="text-blue">Agenda</h2>
        <p className="type-small text-olive/80">
          Integración de calendario y reservas próximamente.
        </p>
      </section>

      <section>
        <h2 className="text-blue">Menús cerrados privados</h2>
        <p className="type-small text-olive/80">
          Pronto agregaremos un flujo de reservas.
        </p>
      </section>
    </main>
  );
}
