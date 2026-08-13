"use client";

import { useState } from "react";

const sections = [
  {
    key: "home",
    label: "学习首页",
    summary: "查看上一次批改和未完成训练",
    title: "先看今天该继续做什么。",
    text: "这里会显示最近一次批改、尚未完成的训练和第二稿进度。第一次使用时，可以直接去“写作批改”。",
    steps: ["继续上一次学习", "查看当前重点", "开始一篇新作文"],
  },
  {
    key: "write",
    label: "写作批改",
    summary: "粘贴题目与作文，生成完整报告",
    title: "从这里提交一篇新作文。",
    text: "分别粘贴完整题目和作文原文，确认无误后提交。系统会生成评分、原文证据和修改建议。",
    steps: ["粘贴完整题目", "保留原文段落", "提交并等待报告"],
  },
  {
    key: "report",
    label: "批改报告",
    summary: "阅读评分、证据和最高优先级问题",
    title: "先找到最应该修改的问题。",
    text: "先看四项分数和原文证据，再看最高优先级问题。不要急着一次修改报告里的所有内容。",
    steps: ["看四项分数", "核对原文证据", "确认最高优先级问题"],
  },
  {
    key: "training",
    label: "专项训练",
    summary: "完成练习，再独立写第二稿",
    title: "把报告中的问题真正改一遍。",
    text: "围绕最高优先级问题完成单句或逻辑训练，然后回到原题，独立写出完整第二稿。",
    steps: ["完成针对性练习", "回到原题修改", "独立提交第二稿"],
  },
  {
    key: "growth",
    label: "学习档案",
    summary: "复习错题、表达和二稿记录",
    title: "以后回来复习和回看进步。",
    text: "这里集中保存错题、表达练习和二稿记录，适合在下一篇作文前快速复习。",
    steps: ["复习典型错题", "练习一个表达", "查看二稿记录"],
  },
] as const;

export function WorkspaceGuide() {
  const [activeKey, setActiveKey] = useState<(typeof sections)[number]["key"]>("write");
  const active = sections.find((section) => section.key === activeKey) ?? sections[1];

  return (
    <div className="workspace-guide">
      <div className="workspace-guide__rail" aria-label="EssayPilot 学习工作台导航示意">
        <div className="workspace-guide__brand">
          <strong>EssayPilot</strong>
          <span>Task 2 学习工作台</span>
        </div>
        <div className="workspace-guide__nav" role="tablist" aria-label="训练工具页面说明">
          {sections.map((section) => (
            <button
              className={section.key === active.key ? "is-active" : ""}
              type="button"
              role="tab"
              aria-selected={section.key === active.key}
              aria-controls="workspace-guide-panel"
              onClick={() => setActiveKey(section.key)}
              key={section.key}
            >
              <span>{section.label}</span>
              <small>{section.summary}</small>
            </button>
          ))}
        </div>
      </div>

      <div className="workspace-guide__notes" id="workspace-guide-panel" role="tabpanel">
        <span className="band-label">{active.label}</span>
        <h3>{active.title}</h3>
        <p>{active.text}</p>
        <ol>
          {active.steps.map((step, index) => (
            <li key={step}><b>{index + 1}</b><span>{step}</span></li>
          ))}
        </ol>
      </div>
    </div>
  );
}
