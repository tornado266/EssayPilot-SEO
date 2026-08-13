import type { Metadata } from "next";
import Link from "next/link";
import { BottomCta, ContentHero, ContentSection } from "../_components/content-page";

const canonicalUrl = "https://essaypilot.cn/methodology";

export const metadata: Metadata = {
  title: "EssayPilot新手教程｜从提交作文到完成二稿",
  description:
    "第一次使用 EssayPilot？按完整新手教程提交 IELTS Task 2 作文，读懂四项分数与反馈，完成专项训练、第二稿和成长复盘。",
  alternates: { canonical: "/methodology" },
};

const tutorialSteps = [
  ["01", "准备题目和完整初稿", "复制完整的 Task 2 题目，并粘贴你独立完成的作文。保留原有段落和换行，不要先让其他工具润色，否则反馈无法准确对应你的真实问题。"],
  ["02", "提交批改并等待报告", "进入写作批改页，确认题目与作文没有贴反，再开始评分。生成过程中不要反复点击；同一篇作文重复提交不会带来更可靠的结果。"],
  ["03", "先读总体判断，再看四项", "先确认 Overall 与 TR、CC、LR、GRA 四项分数，再阅读每项的理由和原文证据。分数用于训练定位，不是官方考试成绩。"],
  ["04", "只抓最优先的问题", "从报告的重点问题开始，不要同时修改所有标注。优先处理偏题、立场不清、论证不足和段落逻辑，再处理反复影响可读性的语言错误。"],
  ["05", "完成专项训练", "按照报告进入单句或逻辑训练。先自己作答，再查看提示；训练的目的不是记住范文，而是把反馈变成你能重复使用的修改动作。"],
  ["06", "独立写完第二稿", "回到原题，尽量不照抄示范句，独立重写完整作文。提交第二稿后对照两稿，检查核心问题是否解决、哪些错误仍在重复。"],
] as const;

const faqs = [
  ["第一次使用，需要先注册吗？", "你可以先浏览官网并进入训练工具。游客体验、报告保存和后续训练权限以工具页面的实时提示为准；如果希望长期保存学习档案，建议登录账号。"],
  ["应该提交写完的作文，还是只写一个段落？", "完整评分应提交完整 Task 2 作文和原题。只写一个段落更适合专项练习，不能代表整篇作文的四项表现。"],
  ["报告内容很多，必须全部改完吗？", "不必。先完成最高优先级问题及其训练，再写第二稿。逐句修改可用于查漏，但不要让局部措辞掩盖更重要的任务回应和逻辑问题。"],
  ["为什么第二稿要自己重写，而不是直接复制示范？", "只有自己重新组织观点、解释和语言，才能验证是否真正掌握。复制示范可能让文本变漂亮，却无法证明下一篇还能独立做到。"],
  ["EssayPilot给出的分数能当作真实雅思成绩吗？", "不能。AI评分仅供训练定位，会存在误差和波动，不能替代 IELTS 官方考试、考官评分或教师判断。"],
] as const;

export default function MethodologyPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "EssayPilot新手教程：从提交作文到完成二稿",
    description: "使用 EssayPilot 完成一次 IELTS Writing Task 2 反馈与二稿训练的六个步骤。",
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
        title="从提交作文，到完成第二稿：一份完整新手教程。"
        intro="最有效的用法不是拿到一个分数就离开，而是按顺序完成：提交初稿、读懂证据、确定一个核心问题、做专项训练、独立写第二稿，再对照两稿复盘。"
        label="打开训练工具，跟着教程开始"
        updated="2026年8月"
      />

      <ContentSection kicker="开始前" title="先准备好这三样东西。">
        <div className="evidence-grid">
          <article><h3>完整题目</h3><p>包括题目背景和具体写作指令。题目缺失时，系统无法可靠判断是否完整回应任务。</p></article>
          <article><h3>独立完成的初稿</h3><p>保留真实段落、拼写和语法。不要在提交前用其他工具全面润色，这样才能找到你真正需要练习的问题。</p></article>
          <article><h3>一次修改时间</h3><p>建议预留时间读报告、完成一个训练并开始二稿。只看分数，不会自动转化成写作能力。</p></article>
        </div>
      </ContentSection>

      <ContentSection kicker="完整流程" title="第一次使用，按这六步走。" muted>
        <div className="method-steps tutorial-steps">
          {tutorialSteps.map(([index, title, text]) => (
            <article key={index}><span>{index}</span><div><h3>{title}</h3><p>{text}</p></div></article>
          ))}
        </div>
      </ContentSection>

      <ContentSection kicker="报告怎么读" title="不要从逐句修改开始，先看这四层。">
        <div className="report-reading-grid">
          <article><span>1</span><div><h3>Overall 与四项分数</h3><p>用来定位当前表现。TR 看任务回应，CC 看逻辑组织，LR 看词汇使用，GRA 看语法范围与准确性。</p></div></article>
          <article><span>2</span><div><h3>评分理由与原文证据</h3><p>不要只看结论。检查系统引用的句子是否确实来自你的作文，以及理由是否符合上下文。</p></div></article>
          <article><span>3</span><div><h3>最高优先级问题</h3><p>这是本轮最该处理的训练目标。先解决一个真正影响分数和可读性的问题，再考虑局部润色。</p></div></article>
          <article><span>4</span><div><h3>逐句与段落反馈</h3><p>用于理解具体怎么改，但不要机械接受每条建议。修改后仍应保持自己的立场、含义和表达习惯。</p></div></article>
        </div>
      </ContentSection>

      <ContentSection kicker="训练与二稿" title="把反馈变成一次能检查结果的修改。" muted>
        <div className="method-steps">
          <article><span>A</span><div><h3>先做与核心问题对应的训练</h3><p>如果问题是论证不足，就练“观点—解释—例子—结果”；如果是段落推进混乱，就先重排信息。局部语法错误则放到单句训练和逐句修改中。</p></div></article>
          <article><span>B</span><div><h3>写二稿时回到原题</h3><p>先重新确认立场和段落任务，再独立重写。不要一边看示范一边逐句替换，否则很难判断你是否真正掌握。</p></div></article>
          <article><span>C</span><div><h3>对照两稿只问三个问题</h3><p>核心问题解决了吗？相同错误还在重复吗？下一篇最值得继续练什么？把答案带到下一次写作。</p></div></article>
        </div>
        <div className="tutorial-action-row">
          <Link className="button button-secondary" href="/guides/how-to-rewrite-ielts-essay">查看详细二稿指南</Link>
          <Link className="text-link" href="/examples/band-6-to-7">查看一组初稿与二稿案例 →</Link>
        </div>
      </ContentSection>

      <ContentSection kicker="常见误区" title="这些用法会削弱训练效果。">
        <div className="limitation-list">
          <article><span>01</span><div><h3>反复提交同一篇，只为了等更高分</h3><p>模型判断可能波动。更有价值的做法是保留第一次结果，完成修改后再提交真正不同的第二稿。</p></div></article>
          <article><span>02</span><div><h3>从头到尾照单全收</h3><p>AI也可能误解句意。任何建议都要回到题目、上下文和你的真实立场中核对。</p></div></article>
          <article><span>03</span><div><h3>只收藏表达，不在作文里使用</h3><p>表达库是复习材料，不是数量目标。优先掌握少量与你常写题材相关、能在新语境中正确使用的表达。</p></div></article>
          <article><span>04</span><div><h3>把AI分数当成官方预测</h3><p>分数只用于训练定位，不替代考试成绩或人工判断；写作进步也不能由一次评分证明。</p></div></article>
        </div>
      </ContentSection>

      <ContentSection kicker="常见问题" title="新用户最常问的五个问题。" muted>
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}<span aria-hidden="true">＋</span></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </ContentSection>

      <ContentSection kicker="继续了解" title="需要时，再深入看评分与二稿方法。">
        <div className="related-grid related-grid-two">
          <Link className="related-card" href="/ielts-task-2-score">
            <span>读懂评分</span><h3>TR、CC、LR、GRA 四项分数分别看什么？</h3><p>理解报告中的四项判断，不把所有问题都归结为语法。</p>
          </Link>
          <Link className="related-card" href="/guides/how-to-rewrite-ielts-essay">
            <span>完成二稿</span><h3>批改以后，怎样独立完成一篇真正的第二稿？</h3><p>按五步流程筛选反馈、补全论证并对照两稿。</p>
          </Link>
        </div>
      </ContentSection>

      <BottomCta
        title="准备好题目和初稿，就从第一步开始。"
        text="完成一次批改后，先处理一个核心问题，再进入专项训练和第二稿。AI反馈仅供训练参考。"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
    </main>
  );
}
