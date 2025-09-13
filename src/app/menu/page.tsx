export const metadata = { title: "Menu — Chaska" };

export default function MenuPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 py-12 space-y-12">
      <header>
        <h1 className="text-blue">Menu</h1>
        <p className="type-body text-olive/90">Food and drinks — updated regularly.</p>
      </header>

      <section id="food">
        <h2 className="text-blue">Food</h2>
        <p className="type-small text-olive/80">Editable via CMS soon.</p>
      </section>

      <section id="drinks">
        <h2 className="text-blue">Drinks</h2>
        <p className="type-small text-olive/80">Editable via CMS soon.</p>
      </section>
    </main>
  );
}

