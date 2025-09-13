export const metadata = { title: "Events — Chaska" };

export default function EventsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 py-12 space-y-8">
      <header>
        <h1 className="text-blue">Events</h1>
        <p className="type-body text-olive/90">Private dinners, wine nights, and more.</p>
      </header>

      <section>
        <h2 className="text-blue">Schedule</h2>
        <p className="type-small text-olive/80">Calendar integration and booking coming soon.</p>
      </section>

      <section>
        <h2 className="text-blue">Private Set Meals</h2>
        <p className="type-small text-olive/80">We’ll add a booking flow here.</p>
      </section>
    </main>
  );
}

