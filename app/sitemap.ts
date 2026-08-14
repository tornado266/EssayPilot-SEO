import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const routes = [
  ["", "2026-08-14"],
  ["/ielts-writing-checker", "2026-08-14"],
  ["/ielts-task-2-score", "2026-08-14"],
  ["/ielts-band-descriptors", "2026-08-14"],
  ["/examples/band-6-to-7", "2026-08-14"],
  ["/methodology", "2026-08-14"],
  ["/task-2/task-response", "2026-08-14"],
  ["/task-2/coherence-cohesion", "2026-08-14"],
  ["/guides/ielts-writing-6-to-6-5", "2026-08-14"],
  ["/guides/how-to-rewrite-ielts-essay", "2026-08-14"],
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(([route, lastModified]) => ({
    url: `https://essaypilot.cn${route}`,
    lastModified: new Date(lastModified),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("writing-checker") ? 0.9 : 0.7,
  }));
}

