import type { Metadata } from "next";
import Link from "next/link";
import { BottomCta, ContentHero, ContentSection } from "../_components/content-page";

export const metadata: Metadata = {
  title: "雅思作文评分｜Task 2四项分数怎么看",
  description:
    "解释 IELTS Writing Task 2 的 TR、CC、LR、GRA 四项评分如何理解，以及为什么总分相同的作文可能需要完全不同的修改方案。",
  alternates: { canonical: "/ielts-task-2-score" },
};

export default function Task2ScorePage() {
  return (
    <main>
      <ContentHero
        eyebrow="雅思作文评分"
        title="总分相同，不代表问题相同。"
        intro="Task 2 的整体表现来自四个评分维度。理解分数结构，比盯着一个 Overall 更能告诉你下一步应该练什么。"
        label="评估我的作文"
      />

      <ContentSection kicker="四项分数" title="先拆开看，再决定怎么改。">
        <div className="score-table" role="table" aria-label="雅思作文四项评分说明">
          <div className="score-table-row score-table-head" role="row">
            <span>维度</span><span>主要观察</span><span>修改优先级示例</span>
          </div>
          {[
            ["TR", "回应题目与发展观点", "立场偏题、主体观点未展开时优先"],
            ["CC", "结构、推进与连接", "段落任务混乱、论证跳跃时优先"],
            ["LR", "词汇范围与准确性", "重复、搭配不自然或用词不准时处理"],
            ["GRA", "句式范围与语法控制", "错误频繁影响理解时优先"],
          ].map((row) => (
            <div className="score-table-row" role="row" key={row[0]}>
              <strong>{row[0]}</strong><span>{row[1]}</span><span>{row[2]}</span>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection kicker="一个简单例子" title="同样是6分，训练计划可以完全不同。" muted>
        <div className="comparison-grid">
          <article>
            <p className="comparison-label">作文 A</p>
            <div className="mini-bands"><span>TR 5.5</span><span>CC 6.0</span><span>LR 6.5</span><span>GRA 6.0</span></div>
            <h3>先补论证，而不是继续背词。</h3>
            <p>语言基础尚可，但理由停留在结论层面。训练重点应该是解释“为什么”和“如何产生结果”。</p>
          </article>
          <article>
            <p className="comparison-label">作文 B</p>
            <div className="mini-bands"><span>TR 6.5</span><span>CC 6.0</span><span>LR 5.5</span><span>GRA 5.5</span></div>
            <h3>保留观点，集中提高表达控制。</h3>
            <p>主要观点成立，但词语搭配与句法错误干扰阅读。训练重点应该是准确性和可控句式。</p>
          </article>
        </div>
        <p className="fine-print">以上分数仅用于解释评分结构，不代表EssayPilot对具体作文的固定判断。</p>
      </ContentSection>

      <ContentSection kicker="继续了解" title="评分标准不是四句简短定义。">
        <div className="link-panel">
          <div><h3>进一步阅读公开评分标准</h3><p>按分数段理解四项维度中的典型表现与差异。</p></div>
          <Link className="text-link" href="/ielts-band-descriptors">查看评分标准解析 →</Link>
        </div>
      </ContentSection>
      <BottomCta title="知道分数，更要知道从哪里开始改。" />
    </main>
  );
}

