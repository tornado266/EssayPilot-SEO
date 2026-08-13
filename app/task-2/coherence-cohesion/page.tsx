import Link from "next/link";
import { BottomCta, ContentHero, ContentSection } from "../../_components/content-page";
import { pageMetadata } from "../../_lib/page-metadata";

const canonicalUrl = "https://essaypilot.cn/task-2/coherence-cohesion";

export const metadata = pageMetadata(
  "IELTS Coherence and Cohesion：雅思作文逻辑与衔接怎么提高？",
  "EssayPilot 雅思写作训练指南：详解 Task 2 的 Coherence and Cohesion，以及段落结构、逻辑顺序、指代和连接如何配合。",
  "/task-2/coherence-cohesion",
);

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "IELTS Coherence and Cohesion：雅思作文逻辑与衔接怎么提高？",
  description:
    "理解 IELTS Writing Task 2 的 Coherence and Cohesion，并用段落诊断、修改示例和自查清单改善文章逻辑。",
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
    { "@type": "ListItem", position: 3, name: "Coherence and Cohesion", item: canonicalUrl },
  ],
};

const faqItems = [
  {
    question: "Coherence 和 Cohesion 有什么区别？",
    answer:
      "Coherence 关注信息是否按读者能理解的顺序推进，包括全文结构、段落中心和句间逻辑；Cohesion 关注你如何用连接、指代、替代和重复控制，把这些关系清楚地表达出来。前者是思路组织，后者是语言连接，两者共同评分。",
  },
  {
    question: "连接词用得越多，CC 分数越高吗？",
    answer:
      "不会。连接词需要准确表达真实关系。段落本身没有因果关系，却加上 therefore；两句只是并列，却反复使用 moreover，都会显得机械。官方描述也会关注连接手段的误用、过度使用或缺失。",
  },
  {
    question: "每段必须有固定句数或统一模板吗？",
    answer:
      "没有这样的官方要求。段落应围绕一个清楚的中心任务组织，句子数量取决于完成解释所需的内容。比固定四句或五句更重要的是：读者能否看出这一段从哪里开始、如何推进、在哪里收束。",
  },
  {
    question: "段落越多，文章结构越清楚吗？",
    answer:
      "不一定。过度切段会把同一条论证拆碎，缺少段落则会把多个主题混在一起。分段的依据应是中心任务变化，而不是凑数量或让版面看起来整齐。",
  },
  {
    question: "重复关键词一定会降低 Cohesion 吗？",
    answer:
      "适度重复核心术语有助于保持主题清楚。问题在于连续机械复述，或为了避免重复而换成含义不准确的同义词。指代和替代要服务于清晰度，不能让读者猜 this、they 或 it 指什么。",
  },
];

export default function CoherenceCohesionPage() {
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
        eyebrow="Coherence and Cohesion"
        title="IELTS Coherence and Cohesion：雅思作文逻辑与衔接怎么提高？"
        intro="Coherence 看观点是否按清楚顺序推进，Cohesion 看句子之间的关系是否通过连接、指代和替代被准确表达。提高 CC 的关键不是增加连接词，而是让每个段落只有一个明确任务，并让原因、例子和结论自然接续。"
        label="检查我的文章逻辑"
        updated="2026年8月"
        breadcrumbs={[
          { label: "EssayPilot", href: "/" },
          { label: "Task 2评分", href: "/ielts-task-2-score" },
          { label: "Coherence and Cohesion" },
        ]}
      />

      <ContentSection kicker="两个概念" title="Coherence 决定思路能否跟上，Cohesion 决定关系能否看清。">
        <div className="comparison-grid">
          <article>
            <p className="comparison-label">Coherence · 连贯</p>
            <h3>信息本身按逻辑组织。</h3>
            <p>全文有清楚推进，段落各自承担明确任务；每段内部从中心句到解释、支持和结果的顺序可跟随。</p>
          </article>
          <article>
            <p className="comparison-label">Cohesion · 衔接</p>
            <h3>语言把关系准确标出来。</h3>
            <p>连接词、代词、冠词、替代和必要重复共同说明转折、因果、并列与承接，不让读者猜句子之间是什么关系。</p>
          </article>
        </div>
        <p>
          IELTS 官方材料把二者合并为同一维度，因为清楚的结构需要合适的语言连接，而连接手段只有附着在真实逻辑上才有意义。
        </p>
      </ContentSection>

      <ContentSection kicker="四层组织" title="从段落任务到一个代词，都会影响读者是否容易跟随。" muted>
        <div className="numbered-grid">
          <article><span>01 · 段落结构</span><h3>一段一个中心任务</h3><p>段落可以解释原因、讨论影响或回应反方，但不要在没有过渡的情况下同时完成三个新任务。</p></article>
          <article><span>02 · 信息顺序</span><h3>先提出，再展开</h3><p>原因应出现在结果之前，例子应紧跟它所支持的观点，限定条件应放在读者可能产生误解的位置。</p></article>
          <article><span>03 · 指代替代</span><h3>减少重复，但保持明确</h3><p>this、they、such measures 等表达必须有清楚对象；替代词如果范围模糊，反而会破坏衔接。</p></article>
        </div>
        <div className="link-panel">
          <div><h3>04 · 连接手段</h3><p>because、however、as a result 等词只负责标记已有关系，不能替文章创造不存在的逻辑。</p></div>
          <Link className="text-link" href="/task-2/task-response">同时检查观点有没有充分展开 →</Link>
        </div>
      </ContentSection>

      <ContentSection kicker="连接词误区" title="“每句一个连接词”常常让文章更机械，而不是更连贯。">
        <div className="myth-grid">
          <article><b>关系不准确</b><p>两句没有因果，却用 therefore；新句并非转折，却用 however。标记与内容冲突时，读者更难理解。</p></article>
          <article><b>功能过度重复</b><p>firstly、moreover、furthermore 连续出现，只标出句子次序，没有解释观点之间如何推进。</p></article>
          <article><b>掩盖结构问题</b><p>如果一段同时谈成本、健康和教育，再多连接词也无法替这些信息建立共同中心。</p></article>
        </div>
        <p>
          官方 Band 描述会区分连接手段是否使用得自然、灵活和准确，也会注意误用、过度使用或缺失。更有效的检查方式是先删掉连接词，看两句话的内容是否本来就存在清楚关系，再选择最准确的表达。
        </p>
      </ContentSection>

      <ContentSection kicker="常见失分模式" title="逻辑问题通常不是一个词，而是一段信息的排列方式。" muted>
        <div className="diagnosis-grid">
          <article><b>段落中心漂移</b><p>中心句讨论企业成本，后面突然转向员工心理，却没有说明两者为何属于同一条论证。</p></article>
          <article><b>解释顺序倒置</b><p>先给结果，再补前提和原因；读者需要回头才能理解前一句为什么成立。</p></article>
          <article><b>例子另起话题</b><p>例子虽与大主题相关，却没有体现当前段落所说的原因或机制。</p></article>
          <article><b>指代对象模糊</b><p>连续出现 this、it、they，但可能对应前句中的多个名词，读者无法确认所指。</p></article>
          <article><b>机械列点</b><p>一段只有 firstly、secondly、finally 加三个判断，观点之间没有解释或层次。</p></article>
          <article><b>段落切分失衡</b><p>同一论证被拆成多个短段，或多个不同中心被塞入一个长段，整体推进因此中断。</p></article>
        </div>
      </ContentSection>

      <ContentSection kicker="简化示例" title="诊断一个结构混乱的段落，再按单一任务重排。">
        <div className="draft-card draft-before">
          <div className="draft-top"><span>训练示例 · 修改前</span><span>问题：关系标记与信息顺序冲突</span></div>
          <p>Many employees work from home. However, companies save office costs. Moreover, some workers feel isolated. Therefore, video calls are common. This is why remote work is always more productive.</p>
        </div>
        <div className="diagnosis-grid">
          <article><b>中心不确定</b><p>段落先谈公司成本，又转到孤独感和生产力，没有明确要证明哪一个判断。</p></article>
          <article><b>连接不成立</b><p>however、moreover 和 therefore 并没有准确反映句间关系，反而制造了错误提示。</p></article>
          <article><b>结论过宽</b><p>前文没有证明远程工作“总是”提高生产力，成本优势也不能自动推出这一结论。</p></article>
        </div>
        <div className="draft-card draft-after">
          <div className="draft-top"><span>训练示例 · 修改后</span><span>段落任务：说明成本优势及其边界</span></div>
          <p>Remote work can reduce operating costs because fewer employees need permanent desks. Companies can redirect these savings to equipment or staff training. This financial advantage, however, does not guarantee higher productivity: employees who feel isolated may still need regular contact with their teams.</p>
        </div>
        <p>
          修改后的段落先建立“减少固定工位—节省成本”的因果，再说明资金用途，最后用转折限定结论。连接词变少了，但每个词都对应一条真实关系。
        </p>
      </ContentSection>

      <ContentSection kicker="段落自查" title="先检查结构，再检查连接词。" muted>
        <div className="transfer-box">
          <ol>
            <li>能否用一句中文说清这一段唯一的中心任务？</li>
            <li>每一句是否都在解释、支持、限定或总结这个中心，而不是开启无关话题？</li>
            <li>原因、机制、例子和结果是否按读者无需回看的顺序排列？</li>
            <li>删掉 moreover、therefore、however 后，内容本身是否仍有清楚关系？</li>
            <li>每个 this、it、they、these measures 是否只有一个明确所指？</li>
            <li>段落之间是否在推进全文立场，而不是用不同措辞重复同一个观点？</li>
          </ol>
        </div>
      </ContentSection>

      <ContentSection kicker="常见问题" title="关于逻辑、段落和衔接的五个常见疑问。">
        <div className="faq-list">
          {faqItems.map((item) => (
            <details key={item.question}>
              <summary>{item.question}<span aria-hidden="true">＋</span></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </ContentSection>

      <ContentSection kicker="继续阅读" title="把逻辑问题放回完整评分与论证中。" muted>
        <div className="principle-grid">
          <article><h3>Task Response 专题</h3><p>检查段落中的理由和例子是否真正回应题目，而不只是排列得整齐。</p><Link className="text-link" href="/task-2/task-response">阅读 TR 评分解析 →</Link></article>
          <article><h3>Task 2 四项评分</h3><p>理解 CC 与 TR、LR、GRA 的边界，避免同一个问题在多个维度重复判断。</p><Link className="text-link" href="/ielts-task-2-score">查看四项评分说明 →</Link></article>
          <article><h3>6分到7分案例</h3><p>通过第一稿和第二稿对比，看论证补全后如何重新组织段落。</p><Link className="text-link" href="/examples/band-6-to-7">查看二稿训练案例 →</Link></article>
        </div>
      </ContentSection>

      <ContentSection kicker="参考依据" title="本页依据 IELTS 一手公开材料转述。">
        <div className="link-panel">
          <div><h3>IELTS Writing Key Assessment Criteria</h3><p>对逻辑推进、段落组织、指代替代和连接手段的官方说明。</p></div>
          <a className="text-link" href="https://ielts.org/cdn/ielts-guides/ielts-writing-key-assessment-criteria.pdf" target="_blank" rel="noreferrer">查看 IELTS 官方 PDF ↗</a>
        </div>
        <div className="link-panel">
          <div><h3>IELTS Writing preparation resources</h3><p>IELTS 官方关于 Coherence、Cohesion 和四项写作评估标准的学习资源。</p></div>
          <a className="text-link" href="https://ielts.org/take-a-test/preparation-resources/writing-test-resources" target="_blank" rel="noreferrer">查看 IELTS 官方页面 ↗</a>
        </div>
        <p className="source-note">本页为中文学习解读，以转述为主；如有更新，以 IELTS 官方公开材料为准。</p>
      </ContentSection>

      <BottomCta
        title="找到逻辑断点后，用第二稿把整段重新连起来。"
        text="EssayPilot 会把优先问题指回原文证据，并通过专项训练和第二稿对比检查修改是否真正改善。AI 分数仅供训练参考。"
      />
    </main>
  );
}
