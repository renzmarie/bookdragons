import { CollectionConfig, slugField } from "payload";

export const Books: CollectionConfig = {
  slug: "books",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    { name: "title", label: "Book title:", type: "text", required: true },
    slugField(),
    { name: "summary", label: "Summary", type: "richText", required: true },
    { name: "price", label: "Price", type: "number", required: true },
  ],
};
