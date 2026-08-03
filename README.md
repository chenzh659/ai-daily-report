# 🤖 全自动 AI 产业每日观察报告 (Anthropic Editorial Style)

基于 GitHub Actions 与 GitHub Pages 的无人值守云端 AI 产业日报自动生成系统。

---

## 🌟 核心特性

1. **🎨 顶尖 Anthropic 品牌美学**：暖沙色纸质质感（`#FAF7F2`）、赤陶珊瑚红（`#D97757`）与经典衬线字体（Noto Serif SC / Merriweather）。
2. **🌓 动态日夜间主题**：支持在 Anthropic Daylight（日光暖沙）与 Anthropic Dusk（夜间深炭）无缝切换。
3. **📊 交互式数据图表**：包含推理成本降幅、Agent 渗透率及解耦架构普及率的动态变化指示。
4. **⚙️ 零成本云端自动化**：通过 GitHub Actions 每天早上自动抓取最新资讯，渲染生成 `.html` 并部署至 GitHub Pages。

---

## 🚀 3 步极速部署指南

### 第一步：新建 GitHub 仓库并推送到 GitHub
1. 打开 [GitHub](https://github.com/) 并新建一个名为 `ai-daily-report` 的仓库。
2. 在您的本地终端中运行以下命令，将代码推送到 GitHub：

```bash
git init
git add .
git commit -m "feat: initialize daily AI report workflow"
git branch -M main
git remote add origin https://github.com/您的用户名/ai-daily-report.git
git push -u origin main
```

### 第二步：配置 GitHub Actions 权限
1. 打开您的 GitHub 仓库页面，点击 **Settings** -> **Actions** -> **General**。
2. 找到 **Workflow permissions**，勾选 **Read and write permissions**（允许写权限），然后保存。

### 第三步：开启 GitHub Pages 免费部署
1. 在仓库页面点击 **Settings** -> **Pages**。
2. 在 **Build and deployment** -> **Branch** 下选择 `main` 分支，路径选择 `/ (root)`，点击 **Save**。
3. 几分钟后，您就会获得属于您的专属每日报告网址：
   `https://您的用户名.github.io/ai-daily-report/`

---

## 📁 目录结构

```text
.
├── .github/
│   └── workflows/
│       └── daily_report.yml       # ⏰ GitHub Actions 每日定时触发配置
├── generate_report.py             # 🐍 自动抓取与 Anthropic HTML 渲染主脚本
├── index.html                     # 🌐 最新生成的每日报告主页
├── reports/                       # 📂 历史日报归档文件夹
│   └── 2026-08-04.html
└── README.md
```
