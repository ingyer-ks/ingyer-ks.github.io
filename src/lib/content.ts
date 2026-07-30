import { getCollection, type CollectionEntry } from "astro:content";

export type IngyerEntry =
  | CollectionEntry<"answers">
  | CollectionEntry<"posts">;

export type Taxonomy = "year" | "organization" | "level" | "subject" | "etc";

export const taxonomyRoutes = {
  year: "year",
  organization: "org",
  level: "level",
  subject: "subject",
  etc: "etc",
} as const satisfies Record<Taxonomy, string>;

export const taxonomyLabels = {
  year: "연도별",
  organization: "기관별",
  level: "급수별",
  subject: "과목별",
  etc: "기타 글",
} as const satisfies Record<Taxonomy, string>;

export async function getAllEntries(): Promise<IngyerEntry[]> {
  const [answers, posts] = await Promise.all([
    getCollection("answers"),
    getCollection("posts"),
  ]);

  return [...answers, ...posts].sort((a, b) =>
    b.data.title.localeCompare(a.data.title, "ko"),
  );
}

export function getTaxonomyValue(entry: IngyerEntry, taxonomy: Taxonomy) {
  return entry.data[taxonomy]?.trim() ?? "";
}

export function getTaxonomyValues(entries: IngyerEntry[], taxonomy: Taxonomy) {
  return [...new Set(entries.map((entry) => getTaxonomyValue(entry, taxonomy)).filter(Boolean))]
    .sort((a, b) => b.localeCompare(a, "ko", { numeric: true }));
}

export function entryPath(entry: IngyerEntry) {
  return `/${entry.id}/`;
}

export function problemPdfUrl(title: string) {
  const base = (import.meta.env.PUBLIC_PROBLEMS_BASE_URL || "https://ingyerlog.kr/problems")
    .replace(/\/$/, "");
  return `${base}/${encodeURIComponent(title)}.pdf`;
}
