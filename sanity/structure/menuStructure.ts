import type { StructureResolver } from "sanity/structure";

const menuStructure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Menu Page")
        .id("menuPageSingleton")
        .child(
          S.editor()
            .id("menuPageEditor")
            .schemaType("menuPage")
            .documentId("menuPage"),
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => listItem.getId() !== "menuPage",
      ),
    ]);

export default menuStructure;
