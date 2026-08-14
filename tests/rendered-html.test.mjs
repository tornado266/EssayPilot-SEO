import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";

test("homepage exposes stable brand metadata and structured data", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();
  assert.match(html, /<title>EssayPilot｜雅思写作训练与二稿提升<\/title>/);
  assert.match(html, /<link rel="canonical" href="https:\/\/essaypilot\.cn\/"/);
  assert.match(html, /property="og:image" content="https:\/\/essaypilot\.cn\/og\.png"/);
  assert.match(html, /"@type":"WebSite"/);
  assert.match(html, /"@type":"SoftwareApplication"/);
  assert.match(html, /雅思写作训练/);
  assert.doesNotMatch(html, /codex-preview/);
});

test("robots, sitemap, and 404 have valid search contracts", async () => {
  const robots = await renderRoute("/robots.txt");
  assert.equal(robots.status, 200);
  assert.match(await robots.text(), /Sitemap: https:\/\/essaypilot\.cn\/sitemap\.xml/);

  const sitemap = await renderRoute("/sitemap.xml");
  assert.equal(sitemap.status, 200);
  const xml = await sitemap.text();
  assert.match(xml, /https:\/\/essaypilot\.cn\//);
  assert.doesNotMatch(xml, /streamlit\.app/);

  const missing = await renderRoute("/not-a-real-page-search-bridge");
  assert.equal(missing.status, 404);
  const missingHtml = await missing.text();
  assert.match(missingHtml, /页面未找到/);
  assert.match(missingHtml, /noindex/);
});

test("Baidu verification endpoints return direct, stable responses", async () => {
  const verification = await renderRoute("/baidu_verify_codeva-TmHgSGcRPz.html");
  assert.equal(verification.status, 200);
  assert.equal(verification.headers.get("location"), null);
  assert.equal(await verification.text(), "de518053f34909a17cec8d71e72ccbd6");

  const homepage = await renderRoute("/");
  assert.match(
    await homepage.text(),
    /<meta name="baidu-site-verification" content="codeva-TmHgSGcRPz"/,
  );
});

async function renderRoute(route) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("route-test", `${route}-${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`http://localhost${route}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

const contentPages = [
  {
    file: "app/task-2/task-response/page.tsx",
    route: "/task-2/task-response",
    title: "IELTS Task Response评分标准：6分和7分差在哪里？",
  },
  {
    file: "app/task-2/coherence-cohesion/page.tsx",
    route: "/task-2/coherence-cohesion",
    title: "IELTS Coherence and Cohesion：雅思作文逻辑与衔接怎么提高？",
  },
  {
    file: "app/guides/ielts-writing-6-to-6-5/page.tsx",
    route: "/guides/ielts-writing-6-to-6-5",
    title: "雅思写作6分到6.5分：应该优先修改哪三个问题？",
  },
  {
    file: "app/guides/how-to-rewrite-ielts-essay/page.tsx",
    route: "/guides/how-to-rewrite-ielts-essay",
    title: "雅思作文二稿怎么改：从反馈到重写的完整步骤",
  },
];

const publicRoutes = [
  "/",
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

test("every public page is indexable, canonical, branded, and internally reachable", async () => {
  const titles = new Set();
  const internalLinks = new Set();

  for (const route of publicRoutes) {
    const response = await renderRoute(route);
    assert.equal(response.status, 200, route);
    const html = await response.text();
    const title = html.match(/<title>(.*?)<\/title>/i)?.[1] ?? "";
    const description = html.match(/<meta name="description" content="([^"]+)"/i)?.[1] ?? "";
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1] ?? "";
    const ogUrl = html.match(/<meta property="og:url" content="([^"]+)"/i)?.[1] ?? "";
    assert.ok(title.includes("EssayPilot"), `${route} title must include EssayPilot`);
    assert.ok(title.includes("雅思写作训练") || description.includes("雅思写作训练"), `${route} must include the fixed brand description`);
    assert.equal(canonical, `https://essaypilot.cn${route}`, `${route} canonical mismatch`);
    assert.equal(ogUrl, `https://essaypilot.cn${route}`, `${route} Open Graph URL mismatch`);
    assert.equal((html.match(/<h1\b/gi) ?? []).length, 1, `${route} must have one H1`);
    assert.doesNotMatch(html, /noindex/i, `${route} must be indexable`);
    assert.ok(!titles.has(title), `${route} title must be unique`);
    titles.add(title);
    for (const match of html.matchAll(/href="(\/[^"]*)"/g)) {
      const href = match[1].split("#")[0].split("?")[0];
      if (href && !href.startsWith("/_") && !href.includes(".")) internalLinks.add(href);
    }
  }

  for (const href of internalLinks) {
    const response = await renderRoute(href);
    assert.equal(response.status, 200, `internal link ${href} must resolve`);
  }
});

test("new content pages expose complete SEO contracts", async () => {
  for (const page of contentPages) {
    const source = await readFile(page.file, "utf8");
    assert.ok(source.includes(`"${page.title}"`));
    assert.ok(source.includes(`"${page.route}"`));
    assert.ok(source.includes("pageMetadata("));
    assert.ok(source.includes('"@type": "Article"'));
    assert.ok(source.includes('"@type": "BreadcrumbList"'));
    assert.ok(source.includes('updated="2026年8月"'));
    assert.ok(source.includes('className="faq-list"'));
  }
});

test("sitemap and home include every new route", async () => {
  const sitemap = await readFile("app/sitemap.ts", "utf8");
  const home = await readFile("app/page.tsx", "utf8");
  for (const page of contentPages) {
    assert.ok(sitemap.includes(`"${page.route}"`), `${page.route} missing from sitemap`);
    assert.ok(home.includes(`href: "${page.route}"`), `${page.route} missing from home`);
  }
});

test("new routes render visible content and one H1", async () => {
  for (const page of contentPages) {
    const response = await renderRoute(page.route);
    assert.equal(response.status, 200, page.route);
    const html = await response.text();
    assert.equal((html.match(/<h1\b/gi) ?? []).length, 1, `${page.route} must have one H1`);
    assert.match(html, /最后更新：(?:<!-- -->)?2026年8月/);
    assert.match(html, /application\/ld\+json/);
  }
});

test("methodology keeps the six-step core and exposes optional expression practice", async () => {
  const source = await readFile("app/methodology/page.tsx", "utf8");
  for (const step of ["01", "02", "03", "04", "05", "06"]) {
    assert.ok(source.includes(`["${step}"`), `tutorial step ${step} is missing`);
  }
  assert.ok(!source.includes('["07"'), "expression practice must not become a seventh step");
  assert.ok(source.includes("完成主流程后，还可以继续做两件事"));
  assert.ok(source.includes("复习自己的错题"));
  assert.ok(source.includes("练习可迁移表达"));
  assert.ok(source.includes("?page=growth"));
  assert.ok(!source.includes("语料库"));

  const response = await renderRoute("/methodology");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /完成主流程后，还可以继续做两件事/);
  assert.match(html, /打开表达库/);
  assert.match(html, /\?page=growth/);
  for (const label of ["学习首页", "写作批改", "批改报告", "专项训练", "学习档案"]) {
    assert.match(html, new RegExp(label));
  }
  assert.ok(source.indexOf("报告阅读顺序") < source.indexOf("两个入口"));
  assert.ok(source.indexOf("两个入口") < source.indexOf("完成主流程后，还可以继续做两件事"));
  assert.doesNotMatch(html, /\?page=(home|write|report|training)/);
});
