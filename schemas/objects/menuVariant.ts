import { defineField, defineType } from "sanity";

export default defineType({
  name: "menuVariant",
  title: "Variant",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      description: "e.g. Glass, Bottle, 8oz",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "string",
      description: "Displayed exactly as entered (e.g. S/ 28).",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { label: "label", price: "price" },
    prepare({ label, price }) {
      return {
        title: label,
        subtitle: price,
      };
    },
  },
});
