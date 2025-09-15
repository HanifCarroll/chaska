import { client } from "@sanity/lib/client";
import type {
  MenuItem,
  MenuPagePayload,
  MenuSection,
} from "@sanity/lib/queries";
import { menuPageQuery } from "@sanity/lib/queries";
import Image from "next/image";

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
    <section
      id={id}
      className="space-y-20"
      aria-labelledby={title ? `${id}-title` : undefined}
    >
      {title ? (
        <h2 id={`${id}-title`} className="sr-only">
          {title}
        </h2>
      ) : null}

      <div className="space-y-24">
        {sections.map((section, sectionIndex) => (
          <article
            key={section._key ?? section.title}
            className={`space-y-8 ${sectionIndex === 0 ? "" : "border-t border-olive/25 pt-14"}`}
          >
            <header className="space-y-3">
              <h3 className="font-sans text-[30px] md:text-[34px] font-bold tracking-tight text-blue">
                {section.title}
              </h3>
              {section.description ? (
                <div className="space-y-4">
                  <p className="type-body text-olive/80 leading-relaxed max-w-2xl">
                    {section.description}
                  </p>
                  <div className="h-px w-full max-w-2xl bg-blue/25" />
                </div>
              ) : null}
            </header>

            <div className="flex flex-col gap-10">
              {section.items?.map((item, itemIndex) => (
                <MenuItemDisplay
                  key={item._key ?? item.name}
                  item={item}
                  isFirst={itemIndex === 0}
                />
              ))}
            </div>

            {section.footnote ? (
              <p className="type-small text-olive/60 pt-4">
                {section.footnote}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

type MenuItemDisplayProps = {
  item: MenuItem;
  isFirst?: boolean;
};

function MenuItemDisplay({ item, isFirst = false }: MenuItemDisplayProps) {
  const photoUrl = item.photo?.asset?.url;
  const ingredients = item.ingredients?.filter((ingredient) => ingredient);

  return (
    <article
      className={`grid gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,1fr)] lg:gap-12 ${
        isFirst ? "" : "border-t border-olive/20 pt-8"
      }`}
    >
      <div className="space-y-4">
        <h4 className="font-display text-[22px] md:text-[24px] leading-tight text-blue">
          {item.name}
        </h4>

        {item.description ? (
          <p className="type-body text-olive/85 leading-relaxed">
            {item.description}
          </p>
        ) : null}

        {ingredients && ingredients.length > 0 ? (
          <p className="type-small uppercase tracking-[0.08em] text-olive/60">
            {ingredients.join(" • ")}
          </p>
        ) : null}

        {photoUrl ? (
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-sm">
            <Image
              src={photoUrl}
              alt={item.name}
              fill
              sizes="(min-width: 1280px) 420px, (min-width: 768px) 360px, 100vw"
              className="object-cover"
            />
          </div>
        ) : null}
      </div>

      <div className="flex items-start justify-end">
        {item.price ? (
          <p className="font-sans text-[18px] md:text-[20px] font-medium text-blue/90">
            {item.price}
          </p>
        ) : null}
      </div>
    </article>
  );
}
