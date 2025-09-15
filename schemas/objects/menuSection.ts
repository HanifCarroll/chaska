import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "menuSection",
  title: "Menu Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [defineArrayMember({ type: "menuItem" })],
      validation: (rule) => rule.min(1).error("Add at least one menu item."),
    }),
    defineField({
      name: "footnote",
      title: "Footnote",
      type: "string",
      description: "Optional note that appears at the end of the section.",
    }),
  ],
  preview: {
    select: {
      title: "title",
      items: "items",
    },
    prepare({ title, items }) {
      const count = Array.isArray(items) ? items.length : 0;
      return {
        title,
        subtitle: count === 1 ? "1 item" : `${count} items`,
      };
    },
  },
});
