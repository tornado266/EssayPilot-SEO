import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

test("renders development preview metadata", async () => {
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
  assert.match(await response.text(), developmentPreviewMeta);
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

test("new content pages expose complete SEO contracts", async () => {
  for (const page of contentPages) {
    const source = await readFile(page.file, "utf8");
    assert.ok(source.includes(`title: "${page.title}"`));
    assert.match(source, /description:\s*[\"']/);
    assert.ok(source.includes(`canonical: "${page.route}"`));
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
});
