import type { Metadata } from "next";
import Link from "next/link";
import { BrandMark } from "./_components/brand-mark";
import "./globals.css";

const appUrl = "https://xbz4ydgw2t6cm2ytkh79vq.streamlit.app/";

export const metadata: Metadata = {
  metadataBase: new URL("https://essaypilot.cn"),
  title: {
    default: "EssayPilot｜雅思写作训练与二稿提升",
    template: "%s｜EssayPilot雅思写作训练",
  },
  description:
    "EssayPilot 是面向 IELTS Writing Task 2 的雅思写作训练工具，提供作文诊断、原文证据、专项练习与二稿对比，帮助学习者从作文诊断走到二稿提升。",
  keywords: [
    "EssayPilot",
    "雅思写作训练",
    "雅思作文批改",
    "IELTS Writing Task 2",
    "雅思作文评分",
    "雅思写作二稿训练",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://essaypilot.cn/",
    siteName: "EssayPilot",
    title: "EssayPilot｜雅思写作训练与二稿提升",
    description: "从作文诊断到二稿提升，把每一次反馈变成真正的雅思写作训练。",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "EssayPilot 雅思写作训练｜从作文诊断到二稿提升" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EssayPilot｜雅思写作训练与二稿提升",
    description: "从作文诊断到二稿提升，把每一次反馈变成真正的雅思写作训练。",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  other: {
    "baidu-site-verification": "codeva-TmHgSGcRPz",
  },
};

const navItems = [
  ["免费批改", "/ielts-writing-checker"],
  ["评分解析", "/ielts-task-2-score"],
  ["二稿案例", "/examples/band-6-to-7"],
  ["新手教程", "/methodology"],
];

function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="EssayPilot 首页">
          <BrandMark />
          <span>EssayPilot</span>
        </Link>
        <nav aria-label="主导航">
          {navItems.map(([label, href]) => (
            <Link
              className={href === "/methodology" ? "nav-tutorial-link" : undefined}
              href={href}
              key={href}
            >
              {href === "/methodology" && <span className="nav-tutorial-badge">新手必看</span>}
              {label}
            </Link>
          ))}
        </nav>
        <a className="header-cta" href={appUrl} target="_blank" rel="noreferrer">
          开始训练 <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Link className="brand footer-brand" href="/">
            <BrandMark />
            <span>EssayPilot</span>
          </Link>
          <p>为认真修改每一稿的 IELTS 学习者而做。</p>
        </div>
        <div className="footer-links">
          <Link href="/ielts-band-descriptors">评分标准</Link>
          <Link href="/examples/band-6-to-7">二稿案例</Link>
          <Link href="/methodology">新手使用教程</Link>
          <a href={appUrl} target="_blank" rel="noreferrer">进入训练工具 ↗</a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 EssayPilot</span>
        <span>AI反馈仅供学习参考，不替代官方考试评分。</span>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
