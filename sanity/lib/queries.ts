import { groq } from "next-sanity";

export const menuPageQuery = groq`
  *[_type == "menuPage"][0]{
    title,
    introHeading,
    introBody,
    foodSections[]{
      _key,
      title,
      description,
      footnote,
      items[coalesce(available, true) == true]{
        _key,
        name,
        description,
        price,
        dietaryTags,
        variants[]{
          _key,
          label,
          price
        }
      }
    },
    drinkSections[]{
      _key,
      title,
      description,
      footnote,
      items[coalesce(available, true) == true]{
        _key,
        name,
        description,
        price,
        dietaryTags,
        variants[]{
          _key,
          label,
          price
        }
      }
    }
  }
`;

export type MenuVariant = {
  _key?: string;
  label: string;
  price: string;
};

export type MenuItem = {
  _key?: string;
  name: string;
  description?: string;
  price?: string;
  dietaryTags?: string[];
  variants?: MenuVariant[];
};

export type MenuSection = {
  _key?: string;
  title: string;
  description?: string;
  footnote?: string;
  items: MenuItem[];
};

export type MenuPagePayload = {
  title?: string;
  introHeading?: string;
  introBody?: string;
  foodSections?: MenuSection[];
  drinkSections?: MenuSection[];
};
