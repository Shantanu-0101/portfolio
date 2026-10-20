// Loads every markdown file in src/content/blog at build time, plus the
// external posts from content.ts. Files starting with "_" are ignored.

import { externalPosts } from "./content";

export type Post = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  summary: string;
  tags: string[];
  content: string;
  url?: string; // set for posts hosted elsewhere
};

const files = import.meta.glob<string>("./content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

function parse(path: string, raw: string): Post {
  const slug = path.split("/").pop()!.replace(/\.md$/, "");
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  const meta: Record<string, string> = {};

  for (const line of (match?.[1] ?? "").split(/\r?\n/)) {
    const i = line.indexOf(":");
    if (i === -1) continue;
    meta[line.slice(0, i).trim()] = line
      .slice(i + 1)
      .trim()
      .replace(/^["']|["']$/g, "");
  }

  return {
    slug,
    title: meta.title ?? slug,
    date: meta.date ?? "",
    summary: meta.summary ?? "",
    tags: (meta.tags ?? "")
      .replace(/^\[|\]$/g, "")
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean),
    content: match?.[2] ?? raw,
  };
}

const localPosts = Object.entries(files)
  .filter(([path]) => !path.split("/").pop()!.startsWith("_"))
  .map(([path, raw]) => parse(path, raw));

const remotePosts: Post[] = externalPosts.map((p) => ({
  ...p,
  slug: p.url,
  content: "",
}));

export const posts: Post[] = [...localPosts, ...remotePosts].sort((a, b) =>
  b.date.localeCompare(a.date),
);

export function hostOf(url: string): string {
  const host = new URL(url).hostname;
  if (host.endsWith("hashnode.dev")) return "hashnode";
  if (host.includes("medium.com")) return "medium";
  return host.replace(/^www\./, "");
}

export function formatDate(date: string): string {
  const [y, m, d] = date.split("-").map(Number);
  if (!y || !m || !d) return date;
  return new Date(y, m - 1, d).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
