import { defineArrayMember, defineField, defineType } from "sanity";

const dietaryTagOptions = [
  { title: "Vegetarian", value: "vegetarian" },
  { title: "Vegan", value: "vegan" },
  { title: "Gluten Free", value: "gluten-free" },
  { title: "Spicy", value: "spicy" },
  { title: "Seasonal", value: "seasonal" },
];

export default defineType({
  name: "menuItem",
  title: "Menu Item",
  type: "object",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      description: "Short supporting copy shown under the name.",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "string",
      description: "Leave empty if this item uses variants below.",
    }),
    defineField({
      name: "variants",
      title: "Variants",
      type: "array",
      of: [defineArrayMember({ type: "menuVariant" })],
      description:
        "Optional. Use for multiple sizes or pours (e.g. cocktails, wine).",
    }),
    defineField({
      name: "dietaryTags",
      title: "Dietary Tags",
      type: "array",
      of: [
        defineArrayMember({
          type: "string",
          options: {
            list: dietaryTagOptions,
          },
        }),
      ],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "available",
      title: "Currently Available",
      type: "boolean",
      initialValue: true,
      description: "Uncheck to temporarily hide the item from the menu.",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "price",
      available: "available",
    },
    prepare({ title, subtitle, available }) {
      return {
        title,
        subtitle:
          available === false && subtitle ? `${subtitle} (hidden)` : subtitle,
      };
    },
  },
  validation: (rule) =>
    rule.custom((value) => {
      if (!value) return true;
      const hasPrice = Boolean(value.price);
      const hasVariants =
        Array.isArray(value.variants) && value.variants.length > 0;
      if (!hasPrice && !hasVariants) {
        return "Add a price or at least one variant.";
      }
      return true;
    }),
});
