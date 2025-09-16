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

      <section className="space-y-10">
        <header className="space-y-4">
          <h2 className="font-sans text-[30px] md:text-[34px] font-bold tracking-tight text-blue">
            Agenda
          </h2>
          <div className="h-px w-full max-w-2xl bg-blue/25" />
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
        <section className="space-y-10">
          <header className="space-y-4">
            <div className="space-y-3">
              <h2 className="font-sans text-[30px] md:text-[34px] font-bold tracking-tight text-blue">
                Eventos pasados
              </h2>
              <p className="type-small text-olive/80">
                Guardamos un historial breve para referencia.
              </p>
            </div>
            <div className="h-px w-full max-w-2xl bg-olive/25" />
          </header>

          <EventList
            events={pastEvents}
            emptyLabel="Sin eventos anteriores"
            variant="secondary"
          />
        </section>
      ) : null}

      <section className="rounded-2xl bg-blue/5 px-6 py-10 text-center">
        <div className="mx-auto space-y-4 max-w-2xl">
          <h2 className="font-sans text-[30px] md:text-[34px] font-bold tracking-tight text-blue">
            Menús cerrados privados
          </h2>
          <p className="type-body text-olive/80">
            ¿Buscás un evento a medida? Escribinos para organizar una noche
            exclusiva.
          </p>
          {whatsappUrl ? (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-blue/40 px-4 py-2 text-blue transition hover:border-blue/70 hover:bg-blue/10"
            >
              Hablemos por WhatsApp
              <span aria-hidden="true" className="text-xs">
                ↗
              </span>
            </a>
          ) : null}
        </div>
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
    <div className="space-y-20">
      {events.map((event, index) => (
        <EventCard
          key={event._id}
          event={event}
          variant={variant}
          isFirst={index === 0}
        />
      ))}
    </div>
  );
}

type EventCardProps = {
  event: EventRecord;
  variant?: "primary" | "secondary";
  isFirst?: boolean;
};

function EventCard({
  event,
  variant = "primary",
  isFirst = false,
}: EventCardProps) {
  const { title, summary } = event;
  const dateLabel = formatEventDate(event);
  const timeLabel = formatEventTime(event);
  const borderClass =
    variant === "primary" ? "border-blue/25" : "border-olive/25";
  const dateTone = variant === "primary" ? "text-blue/80" : "text-olive/80";

  return (
    <article
      className={`grid gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,1fr)] lg:gap-12 ${
        isFirst ? "" : `${borderClass} border-t pt-10`
      }`}
    >
      <div className="space-y-4">
        <h3 className="font-sans text-[30px] md:text-[34px] font-bold tracking-tight text-blue">
          {title}
        </h3>
        {summary ? (
          <p className="type-body text-olive/85 leading-relaxed max-w-2xl">
            {summary}
          </p>
        ) : null}
      </div>

      <div className="flex items-start justify-start lg:justify-end">
        <div className="space-y-2 text-left lg:text-right">
          <p
            className={`font-sans text-sm md:text-base font-semibold uppercase tracking-[0.08em] ${dateTone} whitespace-nowrap`}
          >
            {dateLabel}
          </p>
          {timeLabel ? (
            <p
              className={`font-sans text-xs md:text-sm font-medium uppercase tracking-[0.14em] ${dateTone} whitespace-nowrap`}
            >
              {timeLabel}
            </p>
          ) : null}
        </div>
      </div>
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

  if (!end) {
    return dateFormatter.format(start);
  }

  const sameDay =
    start.getFullYear() === end.getFullYear() &&
    start.getMonth() === end.getMonth() &&
    start.getDate() === end.getDate();

  if (sameDay) {
    return dateFormatter.format(start);
  }

  return `${dateFormatter.format(start)} → ${dateFormatter.format(end)}`;
}

function parseDate(value?: string) {
  if (!value) return undefined;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed;
}

function formatEventTime(event: EventRecord) {
  const start = parseDate(event.startDate);
  const end = parseDate(event.endDate);

  if (!start) {
    return undefined;
  }

  if (!end) {
    return timeFormatter.format(start);
  }

  if (end.getTime() === start.getTime()) {
    return timeFormatter.format(start);
  }

  const sameDay =
    start.getFullYear() === end.getFullYear() &&
    start.getMonth() === end.getMonth() &&
    start.getDate() === end.getDate();

  if (sameDay) {
    return `${timeFormatter.format(start)} — ${timeFormatter.format(end)}`;
  }

  return `${dateTimeFormatter.format(start)} → ${dateTimeFormatter.format(end)}`;
}
