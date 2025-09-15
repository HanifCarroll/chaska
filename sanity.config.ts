import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import menuStructure from "./sanity/structure/menuStructure";
import { schemaTypes } from "./schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

if (!projectId) {
  throw new Error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID environment variable");
}

export default defineConfig({
  projectId,
  dataset,
  basePath: "/studio",
  title: "Content Studio",
  plugins: [structureTool({ structure: menuStructure }), visionTool()],
  schema: { types: schemaTypes },
});
