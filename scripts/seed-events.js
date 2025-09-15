#!/usr/bin/env node

require("dotenv").config();
const { createClient } = require("@sanity/client");

const projectId =
  process.env.SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset =
  process.env.SANITY_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_WRITE_TOKEN || process.env.SANITY_API_TOKEN;

if (!projectId) {
  console.error(
    "Missing SANITY_PROJECT_ID or NEXT_PUBLIC_SANITY_PROJECT_ID environment variable.",
  );
  process.exit(1);
}

if (!dataset) {
  console.error(
    "Missing SANITY_DATASET or NEXT_PUBLIC_SANITY_DATASET environment variable.",
  );
  process.exit(1);
}

if (!token) {
  console.error(
    "Missing SANITY_WRITE_TOKEN or SANITY_API_TOKEN environment variable.",
  );
  console.error("Create a token with write access in Sanity.io and try again.");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2025-09-12",
  useCdn: false,
});

const events = [
  {
    _id: "event-primavera-amazonia-2025-10",
    _type: "event",
    title: "Festival de primavera amazónica",
    slug: { current: "festival-primavera-amazonica" },
    startDate: new Date("2025-10-04T19:30:00-03:00").toISOString(),
    endDate: new Date("2025-10-04T23:00:00-03:00").toISOString(),
    summary:
      "Menú degustación con productos selváticos y vinos frescos para celebrar la nueva temporada.",
  },
  {
    _id: "event-cacao-ancestral-2025-11",
    _type: "event",
    title: "Noche de cacao ancestral",
    slug: { current: "noche-cacao-ancestral" },
    startDate: new Date("2025-11-15T20:00:00-03:00").toISOString(),
    endDate: new Date("2025-11-15T22:30:00-03:00").toISOString(),
    summary:
      "Cata guiada de chocolates amazónicos con maridaje de destilados latinoamericanos.",
  },
  {
    _id: "event-solsticio-andino-2025-12",
    _type: "event",
    title: "Cena del solsticio andino",
    slug: { current: "cena-solsticio-andino" },
    startDate: new Date("2025-12-20T20:00:00-03:00").toISOString(),
    endDate: new Date("2025-12-20T23:30:00-03:00").toISOString(),
    summary:
      "Cuatro pasos inspirados en rituales de verano con ingredientes de productores cordilleranos.",
  },
  {
    _id: "event-brindis-andes-2026-01",
    _type: "event",
    title: "Brindis de los Andes",
    slug: { current: "brindis-andes" },
    startDate: new Date("2026-01-17T19:00:00-03:00").toISOString(),
    endDate: new Date("2026-01-17T22:00:00-03:00").toISOString(),
    summary:
      "Selección de vinos de altura con tapeos criollos y música en vivo para abrir el año.",
  },
];

async function seed() {
  console.log(`Replacing events in ${projectId}/${dataset}...`);

  try {
    await client.delete({ query: '*[_type == "event"]' });
    console.log("Existing events removed.");

    const mutations = events.map((event) => client.createOrReplace(event));
    await Promise.all(mutations);
    console.log("Done! Events are ready in Sanity.");
  } catch (error) {
    console.error("Failed to seed events:");
    console.error(error);
    process.exit(1);
  }
}

seed();
