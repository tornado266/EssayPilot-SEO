import type { Metadata } from "next";
import Link from "next/link";
import { BottomCta, ContentHero, ContentSection } from "../_components/content-page";

export const metadata: Metadata = {
  title: "IELTS Writing Task 2评分标准解析",
  description:
    "EssayPilot 雅思写作训练指南：用中文理解 Task 2 的 TR、CC、LR、GRA 公开评分标准，以及5.5至7分阶段的能力差异。",
  alternates: { canonical: "/ielts-band-descriptors" },
};

const bands = [
  ["5.5阶段", "能表达立场，但发展不均", "观点可能相关却缺少充分解释；结构基本可见，但语言错误和不自然表达仍会打断阅读。"],
  ["6分阶段", "整体完成任务，但控制不稳定", "主要部分得到回应，段落组织基本清楚；复杂表达有所尝试，但准确性和论证深度仍不稳定。"],
  ["6.5阶段", "多数时候清楚，局部仍显生硬", "论点发展更完整，衔接较自然；词汇和句式范围扩大，但部分搭配、指代或复杂句控制仍需加强。"],
  ["7分阶段", "回应充分，表达清晰而灵活", "立场完整展开，信息组织有逻辑；能较灵活、准确地运用词汇与复杂结构，少量错误不妨碍交流。"],
];

export default function BandDescriptorsPage() {
  return (
    <main>
      <ContentHero
        eyebrow="评分标准解析"
        title="评分标准的作用，是帮你看见差距。"
        intro="公开评分标准描述的是一篇完整作文在四项维度上的表现。它不是简单的错误计数表，也不是背几个高级词就能跨越的等级清单。"
        label="按标准评估作文"
      />

      <ContentSection kicker="如何阅读" title="先理解四个维度，再理解分数段。">
        <div className="principle-grid">
          {[
            ["整体判断", "考察整篇文章的完成度和稳定性，不根据某一句话单独定分。"],
            ["分别评分", "TR、CC、LR、GRA 各自观察不同能力，短板和优势可以同时存在。"],
            ["以表现为证据", "有效论证、自然衔接和准确表达，比机械套用模板更重要。"],
          ].map(([title, text]) => (
            <article key={title}><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </ContentSection>

      <ContentSection kicker="5.5到7分" title="阶段之间，变化的不只是错误数量。" muted>
        <div className="band-timeline">
          {bands.map(([band, headline, text]) => (
            <article key={band}>
              <div className="band-label">{band}</div>
              <div><h3>{headline}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
        <p className="source-note">
          本页为便于学习的概括解释，不是官方评分标准的逐字翻译。训练和评分应以 IELTS 官方公开材料为最终依据。
        </p>
      </ContentSection>

      <ContentSection kicker="常见误区" title="这三件事不会自动带来更高分。">
        <div className="myth-grid">
          <article><b>高级词越多越好</b><p>不准确的“大词”会破坏自然度和清晰度。准确、恰当、可控制更重要。</p></article>
          <article><b>连接词越多越连贯</b><p>真正的连贯来自信息关系和段落推进，而不是每句话都加显性的连接词。</p></article>
          <article><b>长句越多语法分越高</b><p>复杂句需要服务于意思。范围与准确性必须同时存在，失控的长句不会形成优势。</p></article>
        </div>
      </ContentSection>
      <ContentSection kicker="分项阅读" title="把抽象标准拆成可检查的问题。" muted>
        <div className="related-grid related-grid-two">
          <Link className="related-card" href="/task-2/task-response">
            <span>Task Response</span><h3>题目回应、立场与论证怎么判断？</h3><p>查看6分与7分的具体差别和提交前清单。</p>
          </Link>
          <Link className="related-card" href="/task-2/coherence-cohesion">
            <span>Coherence &amp; Cohesion</span><h3>逻辑、段落和衔接怎么配合？</h3><p>诊断信息顺序，而不是机械增加连接词。</p>
          </Link>
        </div>
      </ContentSection>
      <BottomCta title="把抽象标准，变成这一稿的具体修改。" />
    </main>
  );
}

