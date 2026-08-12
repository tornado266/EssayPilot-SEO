import type { Metadata } from "next";
import { BottomCta, ContentHero, ContentSection } from "../../_components/content-page";

export const metadata: Metadata = {
  title: "雅思作文6分到7分｜真实二稿训练案例",
  description:
    "通过 IELTS Writing Task 2 第一稿与第二稿对比，理解如何补足论证、改善衔接并提高语言准确性。案例用于训练示范，不承诺提分结果。",
  alternates: { canonical: "/examples/band-6-to-7" },
};

export default function BandExamplePage() {
  return (
    <main>
      <ContentHero
        eyebrow="二稿训练案例"
        title="从6分走向7分，不是把每句话写得更复杂。"
        intro="真正有效的二稿，往往先补足论证，再整理表达。下面用一个简化案例展示：一句看似正确的话，如何变成完整、可读的推理。"
        label="开始我的二稿"
      />

      <ContentSection kicker="示范题目" title="Online education: convenience or quality?">
        <div className="prompt-card">
          <span>Task 2 · Discussion</span>
          <p>
            Some people believe online education is more effective than classroom learning,
            while others disagree. Discuss both views and give your own opinion.
          </p>
        </div>
        <p className="source-note">以下段落为教学示例，并非考生原始答卷或官方评分样本。</p>
      </ContentSection>

      <ContentSection kicker="第一稿的问题" title="观点存在，但中间的推理没有写出来。" muted>
        <div className="draft-card draft-before">
          <div className="draft-top"><span>第一稿节选</span><span>主要问题：论证不足</span></div>
          <p>
            Online learning is more convenient for students. They can study at home and save
            time. Therefore, online education is better than traditional classes.
          </p>
        </div>
        <div className="diagnosis-grid">
          <article><b>结论跳跃</b><p>“节省时间”为什么必然等于“教育效果更好”没有解释。</p></article>
          <article><b>比较不完整</b><p>没有说明线上便利相对于线下课堂解决了什么具体障碍。</p></article>
          <article><b>表达重复</b><p>convenient、save time、better 只是连续给出判断，没有推动论证。</p></article>
        </div>
      </ContentSection>

      <ContentSection kicker="第二稿方向" title="增加因果链，而不是堆砌高级词。">
        <div className="draft-card draft-after">
          <div className="draft-top"><span>第二稿节选</span><span>修改重点：解释便利如何影响学习</span></div>
          <p>
            Online courses can be particularly effective for students who live far from major
            cities or have fixed work schedules. By removing travel time and allowing recorded
            lessons to be reviewed, they make regular participation more realistic. This greater
            access can improve learning outcomes, although it does not remove the need for timely
            feedback from teachers.
          </p>
        </div>
        <div className="change-list">
          <div><span>01</span><p><b>明确对象：</b>不是泛指所有学生，而是说明哪些人真正受益。</p></div>
          <div><span>02</span><p><b>补充机制：</b>减少通勤、回看课程如何提升持续参与。</p></div>
          <div><span>03</span><p><b>保留边界：</b>承认线上学习仍需要教师反馈，避免绝对化结论。</p></div>
        </div>
      </ContentSection>

      <ContentSection kicker="可以迁移的方法" title="下一篇仍然能用的，不是这段答案。" muted>
        <div className="transfer-box">
          <p>尝试用下面四问检查每一个主体段：</p>
          <ol>
            <li>这一段的中心判断是什么？</li>
            <li>它为什么成立？</li>
            <li>通过什么机制产生结果？</li>
            <li>有没有需要限定的适用范围？</li>
          </ol>
        </div>
      </ContentSection>
      <BottomCta title="真正的进步，发生在你亲手写出的第二稿。" />
    </main>
  );
}

