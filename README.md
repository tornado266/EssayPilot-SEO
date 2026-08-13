# EssayPilot｜雅思写作训练官网

[访问官网](https://essaypilot.cn/) · [进入训练工具](https://xbz4ydgw2t6cm2ytkh79vq.streamlit.app/) · [主产品仓库](https://github.com/tornado266/EssayPilot)

EssayPilot 是面向 IELTS Writing Task 2 的雅思写作训练工具，完整价值路径是：**从作文诊断到二稿提升**。

本仓库承载 `essaypilot.cn` 的公开官网、评分维度说明、写作指南与新手教程。官网负责品牌介绍和可索引内容；训练工具负责作文诊断、专项练习、第二稿与学习档案。

## 公开页面

- `/`：EssayPilot 品牌首页
- `/ielts-writing-checker`：雅思作文批改说明
- `/ielts-task-2-score`：Task 2 四项评分解析
- `/ielts-band-descriptors`：评分标准说明
- `/examples/band-6-to-7`：二稿训练案例
- `/methodology`：新手使用教程
- `/task-2/task-response`：Task Response 专题
- `/task-2/coherence-cohesion`：Coherence & Cohesion 专题
- `/guides/ielts-writing-6-to-6-5`：6分到6.5分指南
- `/guides/how-to-rewrite-ielts-essay`：二稿修改指南

## 本地验证

```bash
npm ci
npm run lint
npm test
```

项目使用现有 `.openai/hosting.json` 对应的 Sites 项目部署。不要另建同名站点。
