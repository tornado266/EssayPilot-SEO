import type { Metadata } from "next";
import Link from "next/link";
import { BottomCta, ContentHero, ContentSection } from "../_components/content-page";

export const metadata: Metadata = {
  title: "评分方法、样本与局限",
  description:
    "了解 EssayPilot 如何参考 IELTS Writing Task 2 公开评分标准组织反馈，以及AI评分的适用范围、不确定性和使用边界。",
  alternates: { canonical: "/methodology" },
};

export default function MethodologyPage() {
  return (
    <main>
      <ContentHero
        eyebrow="评分方法与局限"
        title="比“看起来很准”更重要的，是说明依据与边界。"
        intro="EssayPilot 将公开评分标准转化为结构化训练反馈，但任何AI评分都存在不确定性。本页说明系统如何组织判断，以及哪些事情它不能替你确认。"
        label="带着边界开始使用"
      />

      <ContentSection kicker="反馈依据" title="从公开标准到可执行修改。">
        <div className="method-steps">
          {[
            ["01", "读取任务与全文", "同时考虑题目要求、立场、段落组织和语言表现，避免只根据局部句子判断。"],
            ["02", "按四项维度分析", "分别检查 TR、CC、LR、GRA，并保留优势与问题同时存在的可能。"],
            ["03", "确定优先级", "先反馈最影响任务完成和清晰表达的问题，再处理局部润色。"],
            ["04", "转为训练动作", "提供修改原因、检查问题和二稿方向，让用户自己完成重写。"],
          ].map(([index, title, text]) => (
            <article key={index}><span>{index}</span><div><h3>{title}</h3><p>{text}</p></div></article>
          ))}
        </div>
      </ContentSection>

      <ContentSection kicker="证据原则" title="更重视可追溯的样本，而不是样本数量。" muted>
        <div className="evidence-grid">
          <article><h3>优先级更高</h3><p>IELTS官方公开样本、完整题目、清晰分数与考官说明，以及能够确认来源的考试写作材料。</p></article>
          <article><h3>谨慎使用</h3><p>机构批改、众包数据和经过转写的扫描材料。来源或文本质量不清晰时，不直接作为校准结论。</p></article>
          <article><h3>持续验证</h3><p>通过多篇样本观察系统性偏差，而不是用单篇“猜中分数”证明评分准确。</p></article>
        </div>
      </ContentSection>

      <ContentSection kicker="必须说明的局限" title="AI反馈可以辅助训练，不能代替考官。">
        <div className="limitation-list">
          <article><span>01</span><div><h3>分数不是官方成绩</h3><p>模型输出会受到题目理解、文本质量和判断波动影响，应将分数视为参考区间而非确定结果。</p></div></article>
          <article><span>02</span><div><h3>语言正确不等于论证有效</h3><p>表达流畅的段落仍可能偏题、缺少发展或逻辑薄弱，因此反馈不会只做语法检查。</p></div></article>
          <article><span>03</span><div><h3>修改建议需要学习者判断</h3><p>用户应保留自己的立场与声音，核对每条建议是否符合原意，而不是机械接受所有改写。</p></div></article>
          <article><span>04</span><div><h3>不能承诺提分</h3><p>写作进步还取决于练习频率、反馈质量、语言基础和考试现场表现。</p></div></article>
        </div>
      </ContentSection>

      <ContentSection kicker="我们的产品选择" title="训练优先于代写，解释优先于结论。" muted>
        <blockquote className="method-quote">
          EssayPilot 希望留下的不是一篇由AI写好的文章，而是用户在下一篇仍能主动调用的判断方法。
        </blockquote>
      </ContentSection>
      <ContentSection kicker="理解评分维度" title="查看系统判断背后的两项核心标准。">
        <div className="related-grid related-grid-two">
          <Link className="related-card" href="/task-2/task-response">
            <span>Task Response</span><h3>如何判断题目回应与观点发展？</h3><p>了解完整回应、相关观点和有效支持的区别。</p>
          </Link>
          <Link className="related-card" href="/task-2/coherence-cohesion">
            <span>Coherence &amp; Cohesion</span><h3>如何判断文章是否容易跟随？</h3><p>了解逻辑顺序、分段、指代与衔接的关系。</p>
          </Link>
        </div>
      </ContentSection>
      <BottomCta title="了解评分边界，也更有效地使用反馈。" />
    </main>
  );
}

