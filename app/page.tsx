import Link from "next/link";

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://essaypilot.cn/#organization",
      name: "EssayPilot",
      url: "https://essaypilot.cn/",
      sameAs: ["https://github.com/tornado266/EssayPilot"],
    },
    {
      "@type": "WebSite",
      "@id": "https://essaypilot.cn/#website",
      url: "https://essaypilot.cn/",
      name: "EssayPilot",
      alternateName: "EssayPilot 雅思写作训练",
      description: "从作文诊断到二稿提升的 IELTS Writing Task 2 雅思写作训练网站。",
      inLanguage: "zh-CN",
      publisher: { "@id": "https://essaypilot.cn/#organization" },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://essaypilot.cn/#application",
      name: "EssayPilot",
      alternateName: "EssayPilot 雅思写作训练",
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web",
      url: "https://xbz4ydgw2t6cm2ytkh79vq.streamlit.app/",
      mainEntityOfPage: { "@id": "https://essaypilot.cn/#website" },
      description: "面向 IELTS Writing Task 2 的作文诊断、专项练习与二稿对比工具。",
      provider: { "@id": "https://essaypilot.cn/#organization" },
    },
  ],
};

const features = [
  {
    index: "01",
    title: "四项维度反馈",
    text: "围绕任务回应、衔接连贯、词汇资源和语法准确性，定位这一稿最值得先改的问题。",
  },
  {
    index: "02",
    title: "逐句修改解释",
    text: "不只给出替换句，还用中文解释问题、修改原因和可以迁移到下一篇的表达方法。",
  },
  {
    index: "03",
    title: "二稿对比训练",
    text: "保留第一稿与第二稿，把反馈真正落实到重写中，而不是看完一份批改就结束。",
  },
];

const steps = [
  ["提交初稿", "粘贴题目和自己的 Task 2 作文，建立本次训练记录。"],
  ["读懂反馈", "先处理影响最大的逻辑、结构和语言问题。"],
  ["完成二稿", "基于反馈独立重写，再比较前后变化。"],
];

const writingGuides = [
  {
    href: "/task-2/task-response",
    label: "评分维度",
    title: "Task Response：6分和7分差在哪里？",
    text: "看清完整回应、立场发展与论证支持分别在判断什么。",
  },
  {
    href: "/task-2/coherence-cohesion",
    label: "评分维度",
    title: "Coherence & Cohesion：逻辑与衔接",
    text: "区分信息推进与语言衔接，避免用连接词掩盖结构问题。",
  },
  {
    href: "/guides/ielts-writing-6-to-6-5",
    label: "训练指南",
    title: "写作6分到6.5分，先改哪三个问题？",
    text: "按任务回应、结构和语言准确性安排一次练习的优先级。",
  },
  {
    href: "/guides/how-to-rewrite-ielts-essay",
    label: "训练指南",
    title: "批改以后，怎样真正完成第二稿？",
    text: "把反馈筛成动作，独立重写，再对照两稿留下可复用的方法。",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">IELTS Writing Task 2 · 二稿训练</p>
          <h1>EssayPilot｜雅思写作训练与二稿提升</h1>
          <p className="hero-lead">
            EssayPilot 将四项评分反馈、逐句修改和二稿对比放进同一个训练流程，
            帮你看见问题，也真正完成修改。
          </p>
          <Link
            className="tutorial-spotlight"
            href="/methodology"
            aria-label="新手必看：第一次使用 EssayPilot，先看 2 分钟上手教程"
          >
            <span className="tutorial-spotlight-badge">新手必看</span>
            <span className="tutorial-spotlight-copy">
              <strong>第一次使用？先看 2 分钟上手教程</strong>
              <small>从提交初稿到完成二稿，6 步走通完整训练流程</small>
            </span>
            <span className="tutorial-spotlight-arrow" aria-hidden="true">→</span>
          </Link>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href="https://xbz4ydgw2t6cm2ytkh79vq.streamlit.app/"
              target="_blank"
              rel="noreferrer"
            >
              免费开始训练 <span aria-hidden="true">↗</span>
            </a>
          </div>
          <ul className="trust-row" aria-label="产品特点">
            <li>无需生成范文</li>
            <li>依据公开评分标准</li>
            <li>保留前后稿变化</li>
          </ul>
        </div>

        <div className="hero-demo" aria-label="二稿训练流程示意">
          <div className="demo-window">
            <div className="window-top">
              <div className="window-dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
              <span>训练记录 · Task 2</span>
              <span className="status-dot">分析完成</span>
            </div>
            <div className="demo-body">
              <div className="score-card">
                <div>
                  <p>本稿参考分</p>
                  <strong>6.0</strong>
                </div>
                <div className="score-arrow" aria-hidden="true">→</div>
                <div>
                  <p>二稿目标</p>
                  <strong className="score-target">6.5</strong>
                </div>
              </div>
              <div className="bands" aria-label="四项评分示意">
                {["TR 6.0", "CC 6.0", "LR 6.5", "GRA 5.5"].map((band) => (
                  <span key={band}>{band}</span>
                ))}
              </div>
              <div className="feedback-card">
                <div className="feedback-heading">
                  <span className="feedback-icon">✦</span>
                  <div>
                    <b>优先修改</b>
                    <p>让主体段的理由与例子形成完整因果链。</p>
                  </div>
                </div>
                <div className="sentence before">
                  <span>初稿</span>
                  <p>Online learning is convenient, so it is better.</p>
                </div>
                <div className="sentence after">
                  <span>二稿方向</span>
                  <p>补充“便利如何改善学习结果”的中间推理。</p>
                </div>
              </div>
            </div>
          </div>
          <p className="demo-note">界面内容为训练流程示意，不代表分数承诺</p>
        </div>
      </section>

      <section className="section shell" id="features">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">从反馈走到修改</p>
            <h2>一次批改，应该留下可以复用的能力。</h2>
          </div>
          <p>
            EssayPilot 的重点不是生成一篇看起来更漂亮的文章，而是帮助你理解自己的问题，
            然后亲手完成下一稿。
          </p>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.index}>
              <span>{feature.index}</span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-section">
        <div className="shell process-grid">
          <div className="process-intro">
            <p className="eyebrow">真正完成一次训练</p>
            <h2>三步走完一篇作文的修改闭环。</h2>
            <p>
              不追求一次看到所有问题。先抓住最影响表达的部分，完成一轮可执行的修改。
            </p>
            <Link href="/examples/band-6-to-7" className="text-link">
              查看二稿案例 <span aria-hidden="true">→</span>
            </Link>
          </div>
          <ol className="process-list">
            {steps.map(([title, text], index) => (
              <li key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section shell" aria-labelledby="writing-guides-title">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">写作指南</p>
            <h2 id="writing-guides-title">先把一个问题弄清，再回到自己的作文。</h2>
          </div>
          <p>
            从评分维度到二稿步骤，这些指南提供具体解释、训练示例和提交前检查方法。
          </p>
        </div>
        <div className="guide-grid">
          {writingGuides.map((guide) => (
            <Link className="guide-card" href={guide.href} key={guide.href}>
              <span>{guide.label}</span>
              <h3>{guide.title}</h3>
              <p>{guide.text}</p>
              <b>阅读全文 <span aria-hidden="true">→</span></b>
            </Link>
          ))}
        </div>
      </section>

      <section className="section shell audience-section">
        <div className="audience-card">
          <p className="eyebrow">适合正在认真练习的你</p>
          <h2>把“我知道这句话有问题”，变成“我知道下一步怎么改”。</h2>
          <div className="audience-tags">
            <span>刚开始系统练习 Task 2</span>
            <span>评分卡在 5.5–6.5</span>
            <span>看得懂范文但不会修改自己的文章</span>
            <span>希望建立长期写作记录</span>
          </div>
          <a
            className="button button-light"
            href="https://xbz4ydgw2t6cm2ytkh79vq.streamlit.app/"
            target="_blank"
            rel="noreferrer"
          >
            带着一篇初稿开始 <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }} />
    </main>
  );
}
