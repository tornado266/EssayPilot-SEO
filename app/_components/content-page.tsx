import Link from "next/link";
import type { ReactNode } from "react";

const appUrl = "https://xbz4ydgw2t6cm2ytkh79vq.streamlit.app/";

export function ContentHero({
  eyebrow,
  title,
  intro,
  label = "免费开始训练",
}: {
  eyebrow: string;
  title: string;
  intro: string;
  label?: string;
}) {
  return (
    <section className="content-hero">
      <div className="shell content-hero-inner">
        <div>
          <div className="breadcrumb">
            <Link href="/">EssayPilot</Link><span>/</span><span>{eyebrow}</span>
          </div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="content-lead">{intro}</p>
          <a className="button button-primary" href={appUrl} target="_blank" rel="noreferrer">
            {label} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function ContentSection({
  kicker,
  title,
  children,
  muted = false,
}: {
  kicker?: string;
  title: string;
  children: ReactNode;
  muted?: boolean;
}) {
  return (
    <section className={`content-section${muted ? " content-section-muted" : ""}`}>
      <div className="shell prose-shell">
        {kicker && <p className="eyebrow">{kicker}</p>}
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}

export function BottomCta({
  title = "下一篇，不必从同一个问题重新开始。",
  text = "带着一篇自己的 Task 2 初稿进入 EssayPilot，完成一次从反馈到二稿的训练。",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="shell bottom-cta-wrap">
      <div className="bottom-cta">
        <div>
          <p className="eyebrow">开始一次完整训练</p>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <a className="button button-light" href={appUrl} target="_blank" rel="noreferrer">
          免费开始训练 <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}

