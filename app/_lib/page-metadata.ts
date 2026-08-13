import type { Metadata } from "next";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const brandedTitle = `${title}｜EssayPilot雅思写作训练`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      locale: "zh_CN",
      siteName: "EssayPilot",
      url: path,
      title: brandedTitle,
      description,
      images: [{ url: "/og.png", width: 1731, height: 909, alt: "EssayPilot 雅思写作训练｜从作文诊断到二稿提升" }],
    },
    twitter: {
      card: "summary_large_image",
      title: brandedTitle,
      description,
      images: ["/og.png"],
    },
  };
}
