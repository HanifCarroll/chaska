import { defineField, defineType } from "sanity";

export default defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "startDate",
      title: "Start date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "endDate",
      title: "End date",
      type: "datetime",
      description:
        "Optional — use for multi-day events or to specify an end time.",
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
    }),
  ],
  preview: {
    select: {
      title: "title",
      startDate: "startDate",
    },
    prepare(selection) {
      const { title, startDate } = selection;
      const dateLabel = startDate
        ? new Intl.DateTimeFormat("es-AR", {
            dateStyle: "medium",
            timeStyle: "short",
          }).format(new Date(startDate))
        : "Date TBD";

      return {
        title,
        subtitle: dateLabel,
      };
    },
  },
});
