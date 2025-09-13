export const metadata = { title: "Club de Vinos — Chaska" };

export default function WineClubPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 py-12 space-y-8">
      <header>
        <h1 className="text-blue">Club de Vinos</h1>
        <p className="type-body text-olive/90">Sumate para botellas rotativas, beneficios y eventos.</p>
      </header>

      <section>
        <h2 className="text-blue">Ofertas actuales</h2>
        <p className="type-small text-olive/80">Lo conectaremos al CMS para que sea fácil de actualizar.</p>
      </section>

      <section>
        <h2 className="text-blue">Por qué unirte</h2>
        <ul className="list-disc pl-6 type-body text-olive/90">
          <li>Acceso anticipado a noches de vino</li>
          <li>Botellas y maridajes solo para miembros</li>
          <li>Beneficios y sorpresas ocasionales</li>
        </ul>
      </section>
    </main>
  );
}
