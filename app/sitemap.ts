import type { MetadataRoute } from "next";

const routes = [
  "",
  "/ielts-writing-checker",
  "/ielts-task-2-score",
  "/ielts-band-descriptors",
  "/examples/band-6-to-7",
  "/methodology",
  "/task-2/task-response",
  "/task-2/coherence-cohesion",
  "/guides/ielts-writing-6-to-6-5",
  "/guides/how-to-rewrite-ielts-essay",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://essaypilot.cn${route}`,
    lastModified: new Date("2026-08-13"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("writing-checker") ? 0.9 : 0.7,
  }));
}

