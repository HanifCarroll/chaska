export const metadata = { title: "Wine Club — Chaska" };

export default function WineClubPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 py-12 space-y-8">
      <header>
        <h1 className="text-blue">Wine Club</h1>
        <p className="type-body text-olive/90">Join for rotating bottles, perks, and events.</p>
      </header>

      <section>
        <h2 className="text-blue">Current Offerings</h2>
        <p className="type-small text-olive/80">We’ll connect this to the CMS so it’s easy to update.</p>
      </section>

      <section>
        <h2 className="text-blue">Why Join</h2>
        <ul className="list-disc pl-6 type-body text-olive/90">
          <li>Early access to wine nights</li>
          <li>Member-only bottles and pairings</li>
          <li>Occasional perks and surprises</li>
        </ul>
      </section>
    </main>
  );
}

