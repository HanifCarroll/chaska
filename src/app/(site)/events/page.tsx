import { client } from "@sanity/lib/client";
import type { EventRecord, EventsPayload } from "@sanity/lib/queries";
import { eventsQuery } from "@sanity/lib/queries";

export const metadata = { title: "Eventos — Chaska" };
export const revalidate = 60;

const dateFormatter = new Intl.DateTimeFormat("es-AR", { dateStyle: "long" });
const dateTimeFormatter = new Intl.DateTimeFormat("es-AR", {
  dateStyle: "long",
  timeStyle: "short",
});
const timeFormatter = new Intl.DateTimeFormat("es-AR", { timeStyle: "short" });
const whatsappNumber = process.env.NEXT_PUBLIC_PHONE;
const whatsappDigits = whatsappNumber?.replace(/\D/g, "");
const whatsappMessage =
  "Hola Chaska! Me gustaría coordinar un menú cerrado privado para un evento.";
const whatsappUrl = whatsappDigits
  ? `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(whatsappMessage)}`
  : undefined;

export default async function EventsPage() {
  const events = await client.fetch<EventsPayload>(eventsQuery);
  const { upcomingEvents, pastEvents } = splitEventsByTime(events);

  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 py-12 space-y-12">
      <header className="space-y-3">
        <h1 className="text-blue">Eventos</h1>
        <p className="type-body text-olive/90">
          Cenas privadas, noches de vino y más.
        </p>
      </header>

      <section className="space-y-6">
        <header>
          <h2 className="text-blue">Agenda</h2>
        </header>

        {upcomingEvents.length === 0 ? (
          <p className="type-body text-olive/80">
            Todavía no hay eventos publicados. Agregá eventos en el CMS para
            mostrarlos acá.
          </p>
        ) : (
          <EventList events={upcomingEvents} emptyLabel="Sin eventos" />
        )}
      </section>

      {pastEvents.length > 0 ? (
        <section className="space-y-6">
          <header>
            <h2 className="text-blue">Eventos pasados</h2>
            <p className="type-small text-olive/80">
              Guardamos un historial breve para referencia.
            </p>
          </header>

          <EventList
            events={pastEvents}
            emptyLabel="Sin eventos anteriores"
            variant="secondary"
          />
        </section>
      ) : null}

      <section className="space-y-3">
        <h2 className="text-blue">Menús cerrados privados</h2>
        <p className="type-small text-olive/80">
          ¿Buscás un evento a medida? Escribinos para organizar una noche
          exclusiva.
        </p>
        {whatsappUrl ? (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-blue/40 px-3 py-2 text-blue transition hover:border-blue/70 hover:bg-blue/5"
          >
            Hablemos por WhatsApp
            <span aria-hidden="true" className="text-xs">
              ↗
            </span>
          </a>
        ) : null}
      </section>
    </main>
  );
}

type EventListProps = {
  events: EventRecord[];
  emptyLabel: string;
  variant?: "primary" | "secondary";
};

function EventList({
  events,
  emptyLabel,
  variant = "primary",
}: EventListProps) {
  if (events.length === 0) {
    return <p className="type-body text-olive/80">{emptyLabel}</p>;
  }

  return (
    <div className="space-y-6">
      {events.map((event) => (
        <EventCard key={event._id} event={event} variant={variant} />
      ))}
    </div>
  );
}

type EventCardProps = {
  event: EventRecord;
  variant?: "primary" | "secondary";
};

function EventCard({ event, variant = "primary" }: EventCardProps) {
  const { title, summary } = event;
  const dateLabel = formatEventDate(event);

  return (
    <article
      className={`space-y-4 rounded-sm border px-4 py-5 sm:px-6 ${
        variant === "primary"
          ? "border-blue/25 bg-sand/40"
          : "border-olive/20 bg-transparent"
      }`}
    >
      <header className="space-y-2">
        <h3 className="type-h3 text-blue">{title}</h3>
        <p className="type-small uppercase tracking-wide text-olive/70">
          {dateLabel}
        </p>
      </header>

      {summary ? <p className="type-body text-olive/90">{summary}</p> : null}
    </article>
  );
}

function splitEventsByTime(events: EventsPayload) {
  const now = new Date();
  const upcomingEvents: EventRecord[] = [];
  const pastEvents: EventRecord[] = [];

  events.forEach((event) => {
    const endDate = parseDate(event.endDate) ?? parseDate(event.startDate);
    const bucket = endDate && endDate < now ? pastEvents : upcomingEvents;
    bucket.push(event);
  });

  pastEvents.reverse();

  return { upcomingEvents, pastEvents };
}

function formatEventDate(event: EventRecord) {
  const start = parseDate(event.startDate);
  const end = parseDate(event.endDate);

  if (!start) {
    return "Fecha a confirmar";
  }

  if (!end || end.getTime() === start.getTime()) {
    return dateTimeFormatter.format(start);
  }

  const sameDay =
    start.getFullYear() === end.getFullYear() &&
    start.getMonth() === end.getMonth() &&
    start.getDate() === end.getDate();

  if (sameDay) {
    return `${dateFormatter.format(start)} · ${timeFormatter.format(start)} — ${timeFormatter.format(end)}`;
  }

  return `${dateTimeFormatter.format(start)} → ${dateTimeFormatter.format(end)}`;
}

function parseDate(value?: string) {
  if (!value) return undefined;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed;
}
