import type { Metadata } from "next";
import Link from "next/link";
import { BottomCta, ContentHero, ContentSection } from "../_components/content-page";

const canonicalUrl = "https://essaypilot.cn/methodology";

export const metadata: Metadata = {
  title: "EssayPilot新手教程｜六步完成作文批改与二稿训练",
  description:
    "EssayPilot新手使用流程：准备题目和初稿、提交批改、阅读报告、完成专项训练、写第二稿并复盘。",
  alternates: { canonical: "/methodology" },
};

const tutorialSteps = [
  ["01", "准备题目和初稿", "准备完整的 IELTS Task 2 题目和一篇独立完成的作文。保留原来的段落、拼写和语法，不要提前润色。"],
  ["02", "进入写作批改", "点击“开始训练”，在写作批改页分别粘贴题目和作文。确认内容无误后提交，并等待报告生成。"],
  ["03", "按顺序阅读报告", "先看 Overall 和 TR、CC、LR、GRA 四项分数，再看评分理由、原文证据和最高优先级问题；最后查看逐句与段落反馈。"],
  ["04", "完成专项训练", "从报告进入训练页，优先完成与最高优先级问题对应的单句或逻辑训练。先自己作答，再核对提示。"],
  ["05", "独立完成第二稿", "回到原题，按照本轮核心问题重新修改完整作文。不要直接复制示范改写，第二稿应由你独立完成。"],
  ["06", "对照两稿并复盘", "提交第二稿后查看两稿对比：确认核心问题是否解决、哪些错误仍在重复，并记下下一篇要继续练的重点。"],
] as const;

export default function MethodologyPage() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "EssayPilot新手教程：六步完成作文批改与二稿训练",
    description: "从提交 IELTS Task 2 初稿到完成第二稿复盘的完整使用流程。",
    url: canonicalUrl,
    dateModified: "2026-08-13",
    step: tutorialSteps.map(([, name, text], index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name,
      text,
    })),
  };

  return (
    <main>
      <ContentHero
        eyebrow="第一次使用 EssayPilot"
        title="六步完成一次作文批改与二稿训练。"
        intro="按这条流程使用即可：准备初稿 → 提交批改 → 阅读报告 → 完成训练 → 写第二稿 → 复盘。"
        label="打开训练工具"
        updated="2026年8月"
      />

      <ContentSection kicker="完整流程" title="从第一步开始，依次完成。">
        <ol className="method-steps tutorial-steps tutorial-flow">
          {tutorialSteps.map(([index, title, text]) => (
            <li key={index}>
              <span>{index}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </li>
          ))}
        </ol>
      </ContentSection>

      <ContentSection kicker="报告阅读顺序" title="报告生成后，只按这个顺序看。" muted>
        <ol className="reading-order">
          <li><b>1</b><span>Overall 与四项分数</span></li>
          <li><b>2</b><span>评分理由与原文证据</span></li>
          <li><b>3</b><span>最高优先级问题</span></li>
          <li><b>4</b><span>逐句与段落反馈</span></li>
        </ol>
        <p className="tutorial-note">先处理最高优先级问题，不需要一次改完报告里的所有内容。AI评分仅供训练参考，不替代官方考试评分。</p>
      </ContentSection>

      <ContentSection kicker="两个入口" title="需要时再查看详细说明。">
        <div className="related-grid related-grid-two">
          <Link className="related-card" href="/ielts-task-2-score">
            <span>看不懂分数时</span><h3>四项评分分别代表什么？</h3><p>了解 TR、CC、LR、GRA 的基本含义。</p>
          </Link>
          <Link className="related-card" href="/guides/how-to-rewrite-ielts-essay">
            <span>开始写第二稿时</span><h3>如何把反馈落实到二稿？</h3><p>查看更详细的二稿修改步骤。</p>
          </Link>
        </div>
      </ContentSection>

      <BottomCta
        title="准备好题目和初稿，就可以开始。"
        text="提交初稿后，跟随报告完成一次训练，再独立写出第二稿。"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
    </main>
  );
}
