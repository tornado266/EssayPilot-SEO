import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "页面未找到",
  description: "该页面不存在。返回 EssayPilot 雅思写作训练官网，继续查看写作指南或进入训练工具。",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main>
      <section className="content-hero">
        <div className="shell content-hero-inner">
          <div>
            <p className="eyebrow">404 · 页面未找到</p>
            <h1>这条路径不存在。</h1>
            <p className="content-lead">你可以返回 EssayPilot 首页，或先阅读新手教程，再开始雅思写作训练。</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/">返回官网首页</Link>
              <Link className="button button-secondary" href="/methodology">查看新手教程</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
