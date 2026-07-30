import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const emptyString = z.preprocess((value) => value == null ? "" : value, z.string());

const frontmatterSchema = z.object({
  title: z.string(),
  description: emptyString,
  year: emptyString,
  organization: emptyString,
  level: emptyString,
  subject: emptyString,
  etc: emptyString,
});

function directoryId({ entry }: { entry: string }) {
  return entry.replace(/\\/g, "/").replace(/\/index\.(md|mdx)$/i, "");
}

const answers = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./content/answers",
    generateId: directoryId,
  }),
  schema: frontmatterSchema,
});

const posts = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./content/posts",
    generateId: directoryId,
  }),
  schema: frontmatterSchema,
});

export const collections = { answers, posts };
