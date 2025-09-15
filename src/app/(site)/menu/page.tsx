import { client } from "@sanity/lib/client";
import type { MenuPagePayload, MenuSection } from "@sanity/lib/queries";
import { menuPageQuery } from "@sanity/lib/queries";

export const metadata = { title: "Menú — Chaska" };
export const revalidate = 60;

export default async function MenuPage() {
  const data = await client.fetch<MenuPagePayload>(menuPageQuery);

  const foodSections = data?.foodSections ?? [];
  const drinkSections = data?.drinkSections ?? [];
  const introHeading = data?.introHeading ?? "Menú";
  const introBody =
    data?.introBody ?? "Comida y bebidas — se actualiza regularmente.";

  const sectionsAreEmpty =
    foodSections.length === 0 && drinkSections.length === 0;

  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 py-12 space-y-12">
      <header className="space-y-3">
        <h1 className="text-blue">{introHeading}</h1>
        {introBody ? (
          <p className="type-body text-olive/90">{introBody}</p>
        ) : null}
      </header>

      {sectionsAreEmpty ? (
        <p className="type-body text-olive/80">
          El menú se está preparando. Actualizá el contenido en el CMS para
          mostrarlo aquí.
        </p>
      ) : null}

      {foodSections.length ? (
        <MenuSectionList id="food" title="Comida" sections={foodSections} />
      ) : null}

      {drinkSections.length ? (
        <MenuSectionList id="drinks" title="Bebidas" sections={drinkSections} />
      ) : null}
    </main>
  );
}

type MenuSectionListProps = {
  id: string;
  title: string;
  sections: MenuSection[];
};

function MenuSectionList({ id, title, sections }: MenuSectionListProps) {
  return (
    <section id={id} className="space-y-8">
      <header>
        <h2 className="text-blue">{title}</h2>
      </header>

      <div className="space-y-10">
        {sections.map((section) => (
          <article key={section._key ?? section.title} className="space-y-4">
            <header className="space-y-2">
              <h3 className="type-h3 text-blue">{section.title}</h3>
              {section.description ? (
                <p className="type-body text-olive/85">{section.description}</p>
              ) : null}
            </header>

            <ul className="space-y-6">
              {section.items?.map((item) => (
                <li key={item._key ?? item.name} className="space-y-2">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h4 className="type-h4 text-blue">{item.name}</h4>
                    <PriceDisplay price={item.price} variants={item.variants} />
                  </div>
                  {item.description ? (
                    <p className="type-body text-olive/85">
                      {item.description}
                    </p>
                  ) : null}
                  {item.dietaryTags?.length ? (
                    <p className="type-small uppercase tracking-wide text-olive/70">
                      {item.dietaryTags.join(" • ")}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>

            {section.footnote ? (
              <p className="type-small text-olive/70">{section.footnote}</p>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

type PriceDisplayProps = {
  price?: string;
  variants?: MenuSection["items"][number]["variants"];
};

function PriceDisplay({ price, variants }: PriceDisplayProps) {
  if (variants && variants.length > 0) {
    return (
      <dl className="grid gap-2">
        {variants.map((variant) => (
          <div
            key={variant._key ?? variant.label}
            className="flex flex-col gap-0.5 text-right sm:flex-row sm:items-baseline sm:justify-end sm:gap-3"
          >
            <dt className="type-small text-olive/70">{variant.label}</dt>
            <dd className="type-body text-blue">{variant.price}</dd>
          </div>
        ))}
      </dl>
    );
  }

  if (price) {
    return <p className="type-body text-blue">{price}</p>;
  }

  return null;
}
