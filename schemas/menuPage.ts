import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "menuPage",
  title: "Menu Page",
  type: "document",
  groups: [
    { name: "food", title: "Food" },
    { name: "drinks", title: "Drinks" },
    { name: "settings", title: "Page Settings" },
  ],
  fieldsets: [
    {
      name: "foodSections",
      title: "Food Sections",
      options: { collapsible: true },
      group: "food",
    },
    {
      name: "drinkSections",
      title: "Drinks Sections",
      options: { collapsible: true },
      group: "drinks",
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      group: "settings",
      initialValue: "Menú — Chaska",
    }),
    defineField({
      name: "introHeading",
      title: "Intro Heading",
      type: "string",
      group: "settings",
      initialValue: "Menú",
    }),
    defineField({
      name: "introBody",
      title: "Intro Body",
      type: "text",
      rows: 3,
      group: "settings",
      description: "Appears under the heading at the top of the menu page.",
    }),
    defineField({
      name: "foodSections",
      type: "array",
      title: "Food Sections",
      fieldset: "foodSections",
      of: [defineArrayMember({ type: "menuSection" })],
      group: "food",
      validation: (rule) => rule.min(1).error("Add at least one food section."),
    }),
    defineField({
      name: "drinkSections",
      type: "array",
      title: "Drinks Sections",
      fieldset: "drinkSections",
      of: [defineArrayMember({ type: "menuSection" })],
      group: "drinks",
      validation: (rule) =>
        rule.min(1).error("Add at least one drinks section."),
    }),
  ],
  initialValue: () => ({
    introBody: "Comida y bebidas — se actualiza regularmente.",
    foodSections: [],
    drinkSections: [],
  }),
  preview: {
    select: { title: "title", food: "foodSections", drinks: "drinkSections" },
    prepare({ title, food, drinks }) {
      const foodCount = Array.isArray(food) ? food.length : 0;
      const drinkCount = Array.isArray(drinks) ? drinks.length : 0;
      return {
        title: title || "Menu Page",
        subtitle: `${foodCount} food / ${drinkCount} drinks sections`,
      };
    },
  },
});
