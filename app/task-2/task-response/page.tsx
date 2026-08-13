import type { Metadata } from "next";
import Link from "next/link";
import { BottomCta, ContentHero, ContentSection } from "../../_components/content-page";

const canonicalUrl = "https://essaypilot.cn/task-2/task-response";

export const metadata: Metadata = {
  title: "IELTS Task Response评分标准：6分和7分差在哪里？",
  description:
    "EssayPilot 雅思写作训练指南：详解 Task 2 的 Task Response，说明如何完整回应题目、保持立场并充分展开观点。",
  alternates: { canonical: "/task-2/task-response" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "IELTS Task Response评分标准：6分和7分差在哪里？",
  description:
    "理解 IELTS Writing Task 2 的 Task Response 评分重点、常见失分原因和从弱论证到完整论证的修改方法。",
  datePublished: "2026-08-13",
  dateModified: "2026-08-13",
  inLanguage: "zh-CN",
  mainEntityOfPage: canonicalUrl,
  publisher: {
    "@type": "Organization",
    name: "EssayPilot",
    url: "https://essaypilot.cn",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "EssayPilot", item: "https://essaypilot.cn/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Task 2评分",
      item: "https://essaypilot.cn/ielts-task-2-score",
    },
    { "@type": "ListItem", position: 3, name: "Task Response", item: canonicalUrl },
  ],
};

const stages = [
  [
    "5.5阶段",
    "回应存在，但有明显缺口",
    "通常介于官方 Band 5 与 Band 6 的表现之间：能看出立场和主要观点，但题目的一部分可能回应不足，解释容易停在结论层面。",
  ],
  [
    "6分阶段",
    "主要部分得到回应",
    "立场与题目直接相关，主要观点也大体相关；不过不同部分发展不均，个别结论缺少证明，支持内容可能不够充分或清楚。",
  ],
  [
    "6.5阶段",
    "多数观点已展开，稳定性仍不足",
    "这是便于训练的过渡描述：题目覆盖和立场通常较清楚，多数主体段能形成解释，但仍可能有一段论证偏短、例子与结论连接不紧。",
  ],
  [
    "7分阶段",
    "回应充分且立场清楚",
    "题目主要部分得到恰当回应，立场在全文中清晰、持续；主要观点得到扩展和支持，即使偶有概括过度，也不破坏整体论证。",
  ],
];

const faqItems = [
  {
    question: "Task Response 是不是只看有没有答题？",
    answer:
      "不是。它既看是否回应了题目全部要求，也看立场是否清楚、观点是否相关，以及主要观点有没有被充分解释和支持。只在开头表态、主体段没有展开，仍然会限制这一项表现。",
  },
  {
    question: "每个主体段都必须写真实例子吗？",
    answer:
      "不必机械地给每段配统计数据或个人故事。例子的作用是把解释落到具体情境；如果原因、机制和结果已经讲清，简短而贴切的情境说明通常比无法核实的数字更有效。",
  },
  {
    question: "观点一定要写在引言和结论里吗？",
    answer:
      "清晰立场需要在全文中保持一致。引言可以尽早建立立场，主体段要真正支持它，结论再准确收束；仅在结尾突然给出观点，通常无法弥补前文方向不清。",
  },
  {
    question: "双问题作文只重点回答其中一个可以吗？",
    answer:
      "不建议。题目明确提出两个问题时，两部分都属于任务要求。篇幅不必绝对平均，但任何一部分被忽略或只有一句带过，都可能构成回应不完整。",
  },
  {
    question: "语法错误会直接降低 Task Response 吗？",
    answer:
      "语法范围与准确性有独立评分维度。偶发语法错误不应在 Task Response 中重复扣分；但如果表达失控到让立场、原因或结论无法理解，就会间接影响考官对回应是否清楚的判断。",
  },
];

export default function TaskResponsePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <ContentHero
        eyebrow="Task Response评分"
        title="IELTS Task Response评分标准：6分和7分差在哪里？"
        intro="Task Response 看的是你是否完整回应题目、提出清晰而持续的立场，并把相关观点解释和支持到位。6分通常已经答到主要部分，但发展不均；7分的关键是回应更充分，主要论点在全文中得到清楚、连贯的展开。"
        label="检查我的 Task Response"
        updated="2026年8月"
        breadcrumbs={[
          { label: "EssayPilot", href: "/" },
          { label: "Task 2评分", href: "/ielts-task-2-score" },
          { label: "Task Response" },
        ]}
      />

      <ContentSection kicker="先说定义" title="Task Response 判断的不是观点高级不高级，而是回应是否完成。">
        <p>
          Task Response（TR）是 IELTS Writing Task 2 的四个评分维度之一。根据 IELTS
          公布的关键评估标准，它关注五件事：回应任务的完整程度、主要观点的展开与支持、观点与题目的相关性、立场和结论是否清楚，以及文章形式是否符合任务要求。
        </p>
        <div className="principle-grid">
          <article><h3>覆盖全部要求</h3><p>先识别题目中的动作词和问题数量，避免只谈大主题，却漏答一个明确问题。</p></article>
          <article><h3>立场清楚一致</h3><p>读者应能判断你支持什么；主体段的理由不能与开头立场互相抵消。</p></article>
          <article><h3>观点相关且展开</h3><p>每个主要观点都要说明为什么成立、如何产生结果，而不只是反复换词重申。</p></article>
        </div>
      </ContentSection>

      <ContentSection kicker="5.5到7分" title="6分和7分的核心差距，在于回应的充分程度与稳定性。" muted>
        <div className="band-timeline">
          {stages.map(([band, headline, text]) => (
            <article key={band}>
              <div className="band-label">{band}</div>
              <div><h3>{headline}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
        <p className="source-note">
          IELTS 公开的单项评分描述以整数 Band 为锚点。这里的 5.5 和 6.5 是便于定位练习阶段的概括，不是新增或改写的官方独立描述档位。
        </p>
      </ContentSection>

      <ContentSection kicker="常见失分" title="看似“有观点”，仍可能没有真正完成回应。">
        <div className="diagnosis-grid">
          <article><b>回答了主题，没有回答问题</b><p>题目问是否同意，你却只介绍现象；题目要求讨论双方，你只写了自己的一方。</p></article>
          <article><b>把结论当成解释</b><p>“这样更方便，所以更好”只是判断，没有写出便利如何改变行为或结果。</p></article>
          <article><b>例子与论点脱节</b><p>例子讲了一个相关场景，却没有说明它具体证明了段落中的哪一个判断。</p></article>
          <article><b>立场在中途变化</b><p>开头明确支持，主体段却不断给反方增加理由，结尾又突然回到原立场。</p></article>
          <article><b>一段塞入多个主张</b><p>教育、成本、健康同时出现，每个只写一句，结果没有任何一个得到充分发展。</p></article>
          <article><b>绝对化结论</b><p>把“对某些人有效”写成“对所有人都更好”，却没有证据支持如此宽的范围。</p></article>
        </div>
      </ContentSection>

      <ContentSection kicker="论证工具" title="用“观点—解释—例子—结果”检查中间缺了哪一步。" muted>
        <p>
          这四步不是 IELTS 强制模板，而是一种诊断方法。段落不必机械地写成四句话，但读者需要能够从中心判断走到合理结果。
        </p>
        <div className="change-list">
          <div><span>01</span><p><b>观点：</b>这一段要证明的单一判断是什么？</p></div>
          <div><span>02</span><p><b>解释：</b>为什么这个判断成立，背后的机制是什么？</p></div>
          <div><span>03</span><p><b>例子：</b>什么具体情境能让机制看得见，而不是另起一个话题？</p></div>
          <div><span>04</span><p><b>结果：</b>这个情境最终如何支持全文立场？适用范围是否需要限定？</p></div>
        </div>
      </ContentSection>

      <ContentSection kicker="训练示例" title="从弱论证到强论证：增加的是推理，不是高级词。">
        <div className="prompt-card">
          <span>简化题目 · 训练示例</span>
          <p>Governments should invest more in public transport than in new roads. To what extent do you agree or disagree?</p>
        </div>
        <div className="draft-card draft-before">
          <div className="draft-top"><span>较弱版本</span><span>问题：结论跳跃</span></div>
          <p>Governments should improve public transport because it is convenient. For example, many people use buses. Therefore, public transport is beneficial for cities.</p>
        </div>
        <div className="draft-card draft-after">
          <div className="draft-top"><span>修改版本</span><span>重点：补全原因与结果</span></div>
          <p>Governments should prioritise reliable bus networks because frequent services make public transport a realistic alternative to driving. For suburban commuters, reducing a thirty-minute wait to ten minutes can make daily bus travel practical. If more short journeys shift from private cars to buses, congestion at peak hours can fall without adding more road space.</p>
        </div>
        <p>
          修改后仍然使用常见词汇，但它明确了“可靠班次”如何改变通勤选择，再说明个人选择如何影响城市拥堵。例子不再只是装饰，而是论证链的一部分。
        </p>
      </ContentSection>

      <ContentSection kicker="提交前自查" title="用六个问题检查这一稿是否真正回应了题目。" muted>
        <div className="transfer-box">
          <ol>
            <li>我是否圈出了题目中的所有动作词，并逐项回应？</li>
            <li>读者能否用一句话复述我的立场？这份立场是否贯穿全文？</li>
            <li>每个主体段是否只承担一个清楚的主要判断？</li>
            <li>每个主要判断后面是否至少有原因、机制或具体情境，而不只是同义改写？</li>
            <li>例子是否直接证明当前观点，还是只与大主题有关？</li>
            <li>结论是否来自前文，而不是最后新增一个未经讨论的理由？</li>
          </ol>
        </div>
      </ContentSection>

      <ContentSection kicker="常见问题" title="关于 Task Response 的五个常见疑问。">
        <div className="faq-list">
          {faqItems.map((item) => (
            <details key={item.question}>
              <summary>{item.question}<span aria-hidden="true">＋</span></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </ContentSection>

      <ContentSection kicker="继续阅读" title="把回应完整度与文章组织一起检查。" muted>
        <div className="principle-grid">
          <article><h3>逻辑与衔接</h3><p>了解 Coherence 与 Cohesion 如何判断段落推进、指代和连接。</p><Link className="text-link" href="/task-2/coherence-cohesion">阅读 CC 专题 →</Link></article>
          <article><h3>四项评分结构</h3><p>把 TR 与 CC、LR、GRA 分开看，找到真正的修改优先级。</p><Link className="text-link" href="/ielts-task-2-score">查看 Task 2 评分说明 →</Link></article>
          <article><h3>评分标准总览</h3><p>理解四个维度在 5.5、6、6.5、7分训练阶段的典型差别。</p><Link className="text-link" href="/ielts-band-descriptors">阅读评分标准解析 →</Link></article>
        </div>
      </ContentSection>

      <ContentSection kicker="参考依据" title="本页依据 IELTS 一手公开材料转述。">
        <div className="link-panel">
          <div><h3>IELTS Writing Key Assessment Criteria</h3><p>Task Response 的评估范围与 Coherence and Cohesion 的官方定义。</p></div>
          <a className="text-link" href="https://ielts.org/cdn/ielts-guides/ielts-writing-key-assessment-criteria.pdf" target="_blank" rel="noreferrer">查看 IELTS 官方 PDF ↗</a>
        </div>
        <div className="link-panel">
          <div><h3>IELTS Writing Band Descriptors</h3><p>Task 2 各整数 Band 的公开描述，用于核对 Band 5、6、7 的边界。</p></div>
          <a className="text-link" href="https://ielts.org/cdn/ielts-guides/ielts-writing-band-descriptors.pdf" target="_blank" rel="noreferrer">查看 IELTS 官方 PDF ↗</a>
        </div>
        <p className="source-note">本页为中文学习解读，以转述为主；如有更新，以 IELTS 官方公开材料为准。</p>
      </ContentSection>

      <BottomCta
        title="让反馈落到你的原文，再用第二稿验证是否改对。"
        text="EssayPilot 会从原文证据中定位最需要处理的问题，并引导你补写、训练和完成第二稿。AI 分数仅供训练参考。"
      />
    </main>
  );
}
