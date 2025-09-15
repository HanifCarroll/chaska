import "dotenv/config";
import { randomUUID } from "node:crypto";
import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_WRITE_TOKEN;

if (!projectId) {
  console.error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID environment variable");
  process.exit(1);
}

if (!dataset) {
  console.error("Missing NEXT_PUBLIC_SANITY_DATASET environment variable");
  process.exit(1);
}

if (!token) {
  console.error("Missing SANITY_WRITE_TOKEN environment variable");
  console.error(
    "Create an API token with write access and export it before running this script.",
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2025-09-12",
  useCdn: false,
});

const introHeading = "Menu";
const introBody =
  "Sabores rioplatenses y calle peruana reinterpretados con ingredientes de temporada.";

const foodSectionsData = [
  {
    title: "Picadas y Entradas",
    description: "Bocados para compartir al estilo porteno con notas limenas.",
    items: [
      {
        name: "Empanadas de Asado",
        description:
          "Carne lentamente braseada, chimichurri rojo y aji amarillo.",
        ingredients: ["ojo de bife", "chimichurri", "aji amarillo"],
        price: "$8",
      },
      {
        name: "Ceviche Patagonico",
        description:
          "Pesca blanca, leche de tigre de maracuya y crocante de maiz",
        ingredients: ["pesca del dia", "maracuya", "maiz tostado"],
        price: "$16",
      },
      {
        name: "Provoleta Andina",
        description: "Queso de cabra de Catamarca con miel de cana y nueces.",
        ingredients: ["queso de cabra", "miel de cana", "nueces tostadas"],
        price: "$14",
      },
      {
        name: "Anticuchos de Corazon",
        description: "Clasico peruano con salsa criolla y papas andinas.",
        ingredients: ["corazon de res", "salsa criolla", "papas nativas"],
        price: "$13",
      },
    ],
  },
  {
    title: "Platos Fuertes",
    description:
      "Platos principales que cruzan parrilla argentina y sazon peruana.",
    items: [
      {
        name: "Bife Chalao",
        description:
          "Ojo de bife a la brasa con salsa huancaina y papas moradas.",
        ingredients: ["ojo de bife", "salsa huancaina", "papas moradas"],
        price: "$32",
      },
      {
        name: "Locro Nikkei",
        description:
          "Guiso norteno con fondo de dashi, zapallo anco y panceta crocante.",
        ingredients: ["zapallo", "maiz blanco", "panceta"],
        price: "$24",
      },
      {
        name: "Arroz Chaufa Criollo",
        description:
          "Arroz salteado con lomo argentino, huevos mapuches y salsa de ostras.",
        ingredients: ["lomo", "arroz jazmin", "salsa de ostras"],
        price: "$26",
      },
      {
        name: "Trucha de la Quebrada",
        description:
          "Trucha patagonica al horno, escabeche de choclo y crema de huacatay.",
        ingredients: ["trucha", "huacatay", "choclo"],
        price: "$28",
      },
    ],
    footnote: "Incluye pan de masa madre y manteca ahumada de cortesia.",
  },
  {
    title: "De la Huerta",
    description: "Vegetales de productores bonaerenses con tecnicas limenas.",
    items: [
      {
        name: "Humita Cremosa",
        description:
          "Humita suave con queso paipa, tomates confitados y chala frita.",
        ingredients: ["maiz", "queso paipa", "tomate"],
        price: "$18",
      },
      {
        name: "Ensalada Pucara",
        description: "Quinoa roja, palta, citricos y aderezo de algarrobo.",
        ingredients: ["quinoa", "palta", "citricos"],
        price: "$16",
      },
      {
        name: "Coliflor al Fuego",
        description:
          "Coliflor quemada con salsa anticuchera de miso y pistachos.",
        ingredients: ["coliflor", "miso", "pistachos"],
        price: "$17",
      },
    ],
  },
];

const drinkSectionsData = [
  {
    title: "Cocteles de la Casa",
    description: "Clasicos argentinos con guinos limenos y frutas andinas.",
    items: [
      {
        name: "Pisco y Fernet",
        description:
          "Pisco mosto verde, cola amarga casera y espuma de pomelo rosado.",
        ingredients: ["pisco", "fernet", "pomelo"],
        price: "$14",
      },
      {
        name: "Mate Sour",
        description: "Infusion de yerba mate, pisco quebranta y syrup de cana.",
        ingredients: ["yerba mate", "pisco", "cana de azucar"],
        price: "$13",
      },
      {
        name: "Buenos Aires Spritz",
        description: "Aperitivo de naranja, torrontes espumoso y maracuya.",
        ingredients: ["aperitivo de naranja", "torrontes", "maracuya"],
        price: "$12",
      },
      {
        name: "Chicha Negroni",
        description:
          "Gin patagonico, vermu rosso y reduccion de chicha morada.",
        ingredients: ["gin", "vermu rosso", "chicha morada"],
        price: "$15",
      },
    ],
  },
  {
    title: "Vinos Argentinos",
    description: "Seleccion rotativa de pequenos productores del norte al sur.",
    items: [
      {
        name: "Malbec, Valles Calchaquies",
        description: "Ciruela madura, pimienta rosa y final sedoso.",
        ingredients: ["tinto", "calchaqui"],
        price: "$11 copa / $48 botella",
      },
      {
        name: "Cabernet Franc, Valle de Uco",
        description: "Hierbas frescas, frutos rojos y taninos pulidos.",
        ingredients: ["tinto", "valle de uco"],
        price: "$13 copa / $56 botella",
      },
      {
        name: "Torrontes, Cafayate",
        description: "Flores blancas, lima y textura vibrante.",
        ingredients: ["blanco", "cafayate"],
        price: "$10 copa / $44 botella",
      },
      {
        name: "Pet Nat, Patagonia Norte",
        description: "Espuma salvaje de manzana roja y hierbas nativas.",
        ingredients: ["espumoso", "patagonia"],
        price: "$58 botella",
      },
    ],
  },
  {
    title: "Sin Alcohol",
    description: "Refrescos caseros y fermentos ligeros.",
    items: [
      {
        name: "Chicha Morada",
        description: "Maiz morado, especias tostadas y citricos.",
        ingredients: ["maiz morado", "pina", "canela"],
        price: "$7",
      },
      {
        name: "Limonada del Mercado",
        description: "Lima, hierba buena y jengibre.",
        ingredients: ["lima", "hierba buena", "jengibre"],
        price: "$6",
      },
      {
        name: "Kombucha de Yerba",
        description: "Fermento de yerba mate con maracuya y espuma ligera.",
        ingredients: ["yerba mate", "maracuya"],
        price: "$8",
      },
    ],
    footnote: "Preguntanos por nuestra rotacion semanal de jugos prensados.",
  },
];

function buildSections(sections) {
  return sections.map((section) => ({
    _type: "menuSection",
    _key: randomUUID(),
    title: section.title,
    description: section.description,
    footnote: section.footnote,
    items: section.items.map((item) => ({
      _type: "menuItem",
      _key: randomUUID(),
      name: item.name,
      description: item.description,
      ingredients: item.ingredients?.length ? item.ingredients : undefined,
      price: item.price,
    })),
  }));
}

async function main() {
  console.info("Seeding menu content to Sanity...");

  const existing = await client.fetch(`*[_type == "menuPage"][0]{_id}`);
  const documentId = existing?._id ?? "menuPage";

  const menuDocument = {
    _id: documentId,
    _type: "menuPage",
    title: "Menu - Chaska",
    introHeading,
    introBody,
    foodSections: buildSections(foodSectionsData),
    drinkSections: buildSections(drinkSectionsData),
  };

  await client.createOrReplace(menuDocument);

  console.info(
    `Menu page populated (${menuDocument.foodSections.length} food sections / ${menuDocument.drinkSections.length} drink sections).`,
  );
}

main().catch((error) => {
  console.error("Failed to seed menu content");
  console.error(error);
  process.exit(1);
});
