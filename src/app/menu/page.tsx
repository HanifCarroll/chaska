export const metadata = { title: "Menú — Chaska" };

export default function MenuPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 py-12 space-y-12">
      <header>
        <h1 className="text-blue">Menú</h1>
        <p className="type-body text-olive/90">Comida y bebidas — se actualiza regularmente.</p>
      </header>

      <section id="food">
        <h2 className="text-blue">Comida</h2>
        <p className="type-small text-olive/80">Editable vía CMS pronto.</p>
      </section>

      <section id="drinks">
        <h2 className="text-blue">Bebidas</h2>
        <p className="type-small text-olive/80">Editable vía CMS pronto.</p>
      </section>
    </main>
  );
}
