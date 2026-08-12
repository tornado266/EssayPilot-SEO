import type { Metadata } from "next";
import Link from "next/link";
import { BottomCta, ContentHero, ContentSection } from "../../_components/content-page";

const canonicalUrl = "https://essaypilot.cn/guides/how-to-rewrite-ielts-essay";

export const metadata: Metadata = {
  title: "雅思作文二稿怎么改：从反馈到重写的完整步骤",
  description:
    "雅思作文批改后怎么改？按核对题目、筛选优先问题、补全论证、独立完成二稿和两稿复盘五步，把AI反馈转成真正的Task 2训练。",
  alternates: { canonical: "/guides/how-to-rewrite-ielts-essay" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "雅思作文二稿怎么改：从反馈到重写的完整步骤",
  description:
    "一套从阅读反馈到独立重写的IELTS Writing Task 2二稿训练流程，包含完整训练示例与检查表。",
  inLanguage: "zh-CN",
  datePublished: "2026-08-13",
  dateModified: "2026-08-13",
  mainEntityOfPage: canonicalUrl,
  publisher: { "@type": "Organization", name: "EssayPilot", url: "https://essaypilot.cn" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "EssayPilot", item: "https://essaypilot.cn/" },
    { "@type": "ListItem", position: 2, name: "雅思作文二稿指南", item: canonicalUrl },
  ],
};

const faqs = [
  {
    question: "雅思作文二稿需要把整篇全部重写吗？",
    answer:
      "如果目标是检验整篇任务回应与结构，最好独立完成完整二稿；如果是在做单项练习，可以先重写一个主体段。关键不是改动字数，而是能否用新的文本证明核心问题已经解决。",
  },
  {
    question: "可以直接采用AI提供的改写句吗？",
    answer:
      "可以把它当作观察材料，但不建议直接拼进作文。先理解它解决了什么问题，再关掉示范，用自己的立场和语言重写，才能判断这项能力是否真正属于你。",
  },
  {
    question: "二稿是不是越长越好？",
    answer:
      "不是。二稿应更完整，而不是单纯更长。如果新句子没有补充原因、机制、证据、限定或清晰关系，只会增加阅读负担。Task 2仍应以准确回应题目为中心。",
  },
  {
    question: "怎样判断一条反馈是否值得优先修改？",
    answer:
      "先看它是否影响题目回应、立场清晰度或整段推理；其次看是否反复影响可读性。只出现在一句中的拼写、冠词或措辞问题通常适合放到最后校对。",
  },
  {
    question: "二稿分数提高，就说明真实考试一定会提分吗？",
    answer:
      "不能这样推断。AI估分存在误差，两稿比较也可能受文本变化影响。更可靠的证据是：原来的核心问题已经消失，并且你能在下一篇新题中再次做到。",
  },
];

export default function HowToRewriteIeltsEssayPage() {
  return (
    <main>
      <ContentHero
        eyebrow="雅思作文二稿指南"
        title="雅思作文二稿怎么改：从反馈到重写的完整步骤"
        intro="批改告诉你哪里出了问题，二稿才检验你能不能亲手解决。有效的重写不是逐句接受修改，而是重新核对任务、选定优先问题、补全推理，再独立写出一篇更清楚的作文。"
        label="开始一次二稿训练"
        updated="2026年8月"
        breadcrumbs={[
          { label: "EssayPilot", href: "/" },
          { label: "雅思作文二稿指南" },
        ]}
      />

      <ContentSection kicker="直接答案" title="把反馈压缩成一个目标，再用二稿提供证据。">
        <div className="transfer-box">
          <p>
            雅思作文二稿可以按五步完成：重新核对题目与立场，筛选一到两个最高优先级问题，补全关键段落的论证链，关掉示范后独立写二稿，最后对照两稿确认问题是否解决。不要把批改句子直接拼成一篇新作文。
          </p>
        </div>
        <p>
          AI反馈和估分只能作为训练参考，不是官方考试评分。二稿的价值不在于“系统给高了几分”，而在于你能否指出具体变化，并在下一篇新题中重复使用同一种判断方法。
        </p>
      </ContentSection>

      <ContentSection kicker="为什么要写二稿" title="看懂批改，只完成了训练的一半。" muted>
        <div className="principle-grid">
          <article><h3>理解不等于输出</h3><p>你可能认同“论证不充分”，却仍然不知道下一句话该补原因、机制还是例子。只有亲手写，缺口才会暴露。</p></article>
          <article><h3>收藏不等于迁移</h3><p>把好句和建议存下来很容易；换一道新题还能独立组织观点，才说明方法开始稳定。</p></article>
          <article><h3>改句不等于改文章</h3><p>逐句润色可能让语言更顺，却没有解决漏答、立场摇摆或段落任务混乱等全文问题。</p></article>
        </div>
      </ContentSection>

      <ContentSection kicker="第一步" title="重新核对题目与立场。">
        <div className="method-steps">
          <article><span>01</span><div><h3>把题目拆成明确任务</h3><p>圈出话题范围、题型指令和需要回答的每个部分。不要用自己熟悉的宽泛主题替代题目真正问的内容。</p></div></article>
          <article><span>02</span><div><h3>用一句话写下立场</h3><p>这句话应能直接回答题目，并与引言、每个主体段和结论保持一致。若立场有条件，也把条件写清。</p></div></article>
          <article><span>03</span><div><h3>检查每段是否为立场服务</h3><p>给每个主体段写一个简短任务标签，例如“解释主要原因”或“说明适用边界”。无法归类的内容可能需要删除或移动。</p></div></article>
        </div>
      </ContentSection>

      <ContentSection kicker="第二步" title="筛选真正影响结果的优先问题。" muted>
        <p>
          一份报告可能包含很多建议，但一次二稿不应同时追逐所有问题。先处理影响任务回应和阅读路径的问题，再处理反复影响可读性的语言错误。
        </p>
        <div className="score-table" role="table" aria-label="雅思作文二稿问题优先级">
          <div className="score-table-row score-table-head" role="row"><span>优先级</span><span>典型问题</span><span>二稿动作</span></div>
          <div className="score-table-row" role="row"><strong>高</strong><span>漏答、偏题、立场不清、核心观点未展开</span><span>重新确定段落任务，补足或替换主要论证</span></div>
          <div className="score-table-row" role="row"><strong>中</strong><span>信息顺序混乱、指代不明、同类错误反复出现</span><span>调整句序并集中修复一种高频问题</span></div>
          <div className="score-table-row" role="row"><strong>低</strong><span>孤立拼写、单个冠词、不会影响理解的措辞</span><span>完成内容修改后统一校对</span></div>
        </div>
      </ContentSection>

      <ContentSection kicker="第三步" title="补全论证链，而不是机械扩写。">
        <div className="change-list">
          <div><span>01</span><p><b>观点：</b>这一段要证明什么？中心句必须可回答题目。</p></div>
          <div><span>02</span><p><b>解释：</b>为什么这个判断成立？写出背后的原因或条件。</p></div>
          <div><span>03</span><p><b>机制或例子：</b>它通过什么过程产生结果？用具体情境把抽象判断落地。</p></div>
          <div><span>04</span><p><b>结果与边界：</b>最终影响是什么？在哪些情况下结论不一定成立？</p></div>
        </div>
        <p>
          不是每段都必须机械出现四个句子，例子也不是强制格式。这条链的作用是提醒你：不要从观点直接跳到结论，也不要用与题目无关的细节填充字数。
        </p>
        <p>
          如果当前问题主要在Task Response，可以先阅读<Link className="text-link" href="/task-2/task-response">Task Response评分标准与论证方法 →</Link>
        </p>
      </ContentSection>

      <ContentSection kicker="第四步" title="关掉示范，独立完成二稿。" muted>
        <div className="transfer-box">
          <ol>
            <li>保留原题和你的一句话立场，暂时关闭逐句改写与范文。</li>
            <li>先写每段的任务标签，再按新的信息顺序完成正文。</li>
            <li>遇到不会表达的地方先用准确的常用词写清，不为了“高级”牺牲意思。</li>
            <li>写完后留出一轮校对，只检查本次设定的高频语言问题。</li>
          </ol>
        </div>
        <p>
          独立重写会保留一些不完美，这是正常的。它比一篇由工具替你润色得很流畅的文章更能反映你目前真正可用的能力。
        </p>
      </ContentSection>

      <ContentSection kicker="第五步" title="对照两稿，只看能被原文证明的变化。">
        <div className="diagnosis-grid">
          <article><b>问题解决了吗？</b><p>上一稿的证据句在二稿中如何改变？漏答、跳跃或指代不明是否真的消失？</p></article>
          <article><b>新问题出现了吗？</b><p>新增解释是否偏离题目？为了复杂句而产生的错误，是否反而影响理解？</p></article>
          <article><b>方法能迁移吗？</b><p>把本轮收获写成一句检查规则，下次写新题时在提交前主动使用。</p></article>
        </div>
        <p>
          分数变化可以记录，但不要把它当作唯一证据。AI分数存在波动，也不替代真实考试结果；“原问题是否被解决”更适合作为一次二稿的完成标准。
        </p>
      </ContentSection>

      <ContentSection kicker="完整训练示例" title="从模糊好处，改成可跟随的推理。" muted>
        <div className="prompt-card">
          <span>简化题目 · Task 2</span>
          <p>Companies should allow employees to work from home whenever they want. To what extent do you agree or disagree?</p>
        </div>
        <p className="source-note">以下为EssayPilot自创训练示例，不是官方考生答卷，也没有官方分数。</p>
        <div className="draft-card draft-before">
          <div className="draft-top"><span>初稿节选</span><span>优先问题：核心理由未展开</span></div>
          <p>Working from home is better for employees because it gives them more freedom. They can manage their time and feel happier. Therefore, every company should provide this option.</p>
        </div>
        <div className="transfer-box">
          <p><b>诊断：</b>段落从“更自由”直接跳到“所有公司都应该允许”，没有说明时间自主如何影响工作，也没有处理岗位差异。</p>
          <p><b>本轮最小动作：</b>补充“减少通勤—重新分配时间—改善专注”的机制，并限定哪些岗位适用。</p>
          <p><b>成功检查：</b>读者能回答为什么居家办公可能有效，也能看见作者没有把结论无限扩大。</p>
        </div>
        <div className="draft-card draft-after">
          <div className="draft-top"><span>独立二稿节选</span><span>已补：机制与适用边界</span></div>
          <p>For employees whose tasks can be completed independently, working from home can turn commuting time into focused work or rest. This flexibility may reduce fatigue and make it easier to concentrate during core working hours. However, it is less suitable for roles that depend on equipment or constant face-to-face coordination, so companies should offer the option according to job requirements rather than as an unrestricted rule.</p>
        </div>
        <p>
          二稿没有替换全部词语。真正的变化是论证任务变清楚：先限定对象，再解释机制，最后回应题目中“whenever they want”的绝对说法。
        </p>
      </ContentSection>

      <ContentSection kicker="可复制检查表" title="提交二稿前，逐项回答这十个问题。">
        <div className="comparison-grid">
          <article>
            <p className="comparison-label">任务与论证</p>
            <ol className="transfer-box">
              <li>我是否回答了题目的每一个部分？</li>
              <li>全文立场能否用一句话说清？</li>
              <li>每个主体段是否只有一个明确任务？</li>
              <li>观点后是否解释了原因或机制？</li>
              <li>例子是否真正支持本段观点？</li>
            </ol>
          </article>
          <article>
            <p className="comparison-label">结构与语言</p>
            <ol className="transfer-box" start={6}>
              <li>句子顺序是否让读者自然跟上？</li>
              <li>代词和指代对象是否清楚？</li>
              <li>连接词是否表达真实关系，而非装饰？</li>
              <li>本轮目标错误是否明显减少？</li>
              <li>是否保留了我自己的立场与表达？</li>
            </ol>
          </article>
        </div>
      </ContentSection>

      <ContentSection kicker="相关阅读" title="继续理解评分，再完成一轮可执行练习。" muted>
        <div className="comparison-grid">
          <article>
            <p className="comparison-label">提升顺序</p>
            <h3>6分到6.5分，应该先改什么？</h3>
            <p>按影响范围区分论证、结构与重复语言错误，避免平均用力。</p>
            <Link className="text-link" href="/guides/ielts-writing-6-to-6-5">查看6分到6.5分指南 →</Link>
          </article>
          <article>
            <p className="comparison-label">两稿示范</p>
            <h3>查看一个完整的二稿对照案例</h3>
            <p>观察一句宽泛判断如何通过对象、机制和边界变成更完整的论证。</p>
            <Link className="text-link" href="/examples/band-6-to-7">阅读6分到7分训练案例 →</Link>
          </article>
        </div>
      </ContentSection>

      <ContentSection kicker="常见问题" title="关于批改后重写的五个问题。">
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}<span aria-hidden="true">＋</span></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </ContentSection>

      <ContentSection kicker="参考依据" title="本页以公开评分标准为训练边界。" muted>
        <div className="transfer-box">
          <p>
            <a className="text-link" href="https://ielts.org/take-a-test/preparation-resources/writing-test-resources" target="_blank" rel="noreferrer">IELTS官方：Writing test preparation resources ↗</a>
          </p>
          <p>
            <a className="text-link" href="https://ielts.org/cdn/ielts-guides/ielts-writing-key-assessment-criteria.pdf" target="_blank" rel="noreferrer">IELTS官方：Writing Key Assessment Criteria（PDF）↗</a>
          </p>
          <p className="source-note">二稿流程由EssayPilot基于公开评分维度设计，不是IELTS官方规定步骤，也不代表与IELTS、British Council、IDP或Cambridge存在合作。</p>
        </div>
      </ContentSection>

      <BottomCta
        title="批改不是终点。用自己的文字完成下一稿。"
        text="进入EssayPilot提交Task 2初稿，从核心问题、原文证据和专项练习继续到二稿对比。AI反馈仅供训练参考。"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    </main>
  );
}
