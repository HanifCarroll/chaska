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
      items[]{
        _key,
        name,
        description,
        ingredients,
        price,
        photo{
          asset->{
            url
          }
        }
      }
    },
    drinkSections[]{
      _key,
      title,
      description,
      footnote,
      items[]{
        _key,
        name,
        description,
        ingredients,
        price,
        photo{
          asset->{
            url
          }
        }
      }
    }
  }
`;

export const eventsQuery = groq`
  *[_type == "event"] | order(startDate asc) {
    _id,
    title,
    slug,
    startDate,
    endDate,
    summary
  }
`;

export type MenuItem = {
  _key?: string;
  name: string;
  description?: string;
  ingredients?: string[];
  price: string;
  photo?: {
    asset?: {
      url?: string;
    };
  };
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

export type EventRecord = {
  _id: string;
  title: string;
  slug?: {
    current?: string;
  };
  startDate?: string;
  endDate?: string;
  summary?: string;
};

export type EventsPayload = EventRecord[];
