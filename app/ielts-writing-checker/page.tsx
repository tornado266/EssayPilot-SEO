import type { Metadata } from "next";
import { BottomCta, ContentHero, ContentSection } from "../_components/content-page";

export const metadata: Metadata = {
  title: "免费雅思作文批改｜IELTS Writing Task 2",
  description:
    "免费体验 EssayPilot 雅思作文批改：查看 TR、CC、LR、GRA 四项反馈、逐句修改建议和中文解释，并继续完成第二稿。",
  alternates: { canonical: "/ielts-writing-checker" },
};

const dimensions = [
  ["TR", "Task Response", "题目是否被完整回应，立场是否清晰，主要观点有没有得到充分展开。"],
  ["CC", "Coherence & Cohesion", "文章组织是否清楚，段落与句子之间是否形成自然、准确的逻辑连接。"],
  ["LR", "Lexical Resource", "词汇是否准确、自然并有一定范围，而不是单纯追求生僻表达。"],
  ["GRA", "Grammar Range & Accuracy", "句式范围、语法控制和错误密度是否影响表达清晰度。"],
];

const faqs = [
  ["AI批改分数等于真实雅思成绩吗？", "不等于。EssayPilot 的评分是依据公开标准生成的学习参考，不能替代官方考试成绩或考官判断。"],
  ["必须先登录才能批改吗？", "目前可直接进入训练工具。部分记录保存功能可能需要通过邮箱确认身份。"],
  ["EssayPilot会直接替我重写整篇作文吗？", "产品重点是解释问题和支持二稿训练，而不是让用户直接提交一篇由AI代写的文章。"],
  ["适合Task 1吗？", "当前公开训练流程主要面向 IELTS Academic Writing Task 2，Task 1 不属于本页面承诺的能力范围。"],
];

export default function WritingCheckerPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <main>
      <ContentHero
        eyebrow="免费雅思作文批改"
        title="先看懂这一稿，再动手写下一稿。"
        intro="提交 IELTS Writing Task 2 题目与作文，获得四项维度反馈、逐句修改建议和中文解释。评分只是起点，真正的训练发生在第二稿。"
      />

      <ContentSection kicker="批改包含什么" title="一份反馈，回答四个真正有用的问题。">
        <div className="dimension-grid">
          {dimensions.map(([code, name, description]) => (
            <article className="dimension-card" key={code}>
              <div className="dimension-code">{code}</div>
              <div>
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </ContentSection>

      <ContentSection kicker="不是一张分数单" title="把问题按照修改顺序重新组织。" muted>
        <div className="numbered-grid">
          <article><span>01</span><h3>先处理任务回应</h3><p>如果立场、论点或论证不完整，先补足内容，而不是急着替换高级词汇。</p></article>
          <article><span>02</span><h3>再梳理逻辑结构</h3><p>确认每一段只有一个中心任务，理由、解释与例子能互相支持。</p></article>
          <article><span>03</span><h3>最后精修语言</h3><p>集中修正反复出现的搭配、句式和语法问题，减少下一篇再次出现。</p></article>
        </div>
      </ContentSection>

      <ContentSection kicker="常见问题" title="关于免费雅思作文批改。">
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}<span>＋</span></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </ContentSection>
      <BottomCta />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </main>
  );
}

