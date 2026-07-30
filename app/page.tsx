"use client";

const experience = [
  {
    period: "2023 — 至今",
    company: "木墨科技 · 上海",
    role: "高级产品设计师",
    description:
      "负责 AI 协作产品从 0 到 1 的体验策略与核心流程，连接用户研究、产品定义和设计交付。",
    impact: [
      "重构首次使用旅程，使关键功能激活率提升 34%",
      "搭建设计度量看板，推动 3 条产品线共用体验标准",
      "与产品、算法和工程团队共同完成 6 次关键版本发布",
    ],
  },
  {
    period: "2020 — 2023",
    company: "界面场科技 · 杭州",
    role: "产品设计师",
    description:
      "主导企业项目管理产品的 Web 与移动端体验，服务从小型创意团队到大型企业客户的多层级用户。",
    impact: [
      "优化项目创建流程，平均完成时间缩短 42%",
      "建立包含 60+ 组件的设计系统，交付效率提升约 30%",
      "通过连续访谈与可用性测试，推动 12 项需求进入产品路线图",
    ],
  },
  {
    period: "2018 — 2020",
    company: "格物创新 · 深圳",
    role: "交互设计师",
    description:
      "参与智能硬件配套应用和数据可视化平台设计，打磨跨设备的一致体验。",
    impact: [
      "独立交付 4 个完整项目，覆盖研究、原型与上线验收",
      "沉淀团队交互规范与评审清单，减少重复返工",
    ],
  },
] as const;

const projects = [
  {
    number: "01",
    title: "FlowPilot",
    type: "AI 项目助理 · 0→1",
    summary:
      "把散落在对话、文档和任务中的上下文汇聚成一条可追踪的工作流，让团队更快从讨论走向行动。",
    metrics: ["62 个试点团队", "任务完成率 ×1.8", "满意度 4.7 / 5"],
    tags: ["产品策略", "服务蓝图", "AI 交互"],
  },
  {
    number: "02",
    title: "Northstar",
    type: "企业设计系统 · 规模化",
    summary:
      "统一三条产品线的视觉语言、交互规则和设计资产，并建立设计—开发双向维护机制。",
    metrics: ["60+ 核心组件", "研发工时 −26%", "3 条产品线复用"],
    tags: ["设计系统", "Design Token", "治理机制"],
  },
] as const;

const skills = [
  "产品策略与信息架构",
  "用户研究与可用性测试",
  "复杂系统与 B 端体验",
  "AI 产品与对话式交互",
  "原型设计与动效表达",
  "设计系统与团队协作",
] as const;

export default function Home() {
  return (
    <div className="site-frame">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="回到简历顶部">
          <span className="brand-mark">LR</span>
          <span>LIN RAN / RESUME</span>
        </a>
        <nav aria-label="主导航">
          <a href="#experience">经历</a>
          <a href="#work">项目</a>
          <a href="#about">关于</a>
          <button
            className="print-link"
            type="button"
            onClick={() => window.print()}
            aria-label="打印或保存这份简历为 PDF"
          >
            保存 PDF ↗
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              PRODUCT DESIGNER <span>/</span> SHANGHAI
            </p>
            <h1 id="hero-title">
              林然
              <span>把复杂问题，</span>
              <span className="accent-line">变成清晰体验。</span>
            </h1>
            <p className="hero-intro">
              8 年数字产品设计经验，专注 AI 产品、复杂系统与设计系统。
              我在模糊中找到结构，把用户洞察转化为可落地、可度量的产品结果。
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#work">
                查看代表项目 <span aria-hidden="true">↓</span>
              </a>
              <a className="text-action" href="mailto:hello@linran.design">
                hello@linran.design <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="identity-card" aria-label="个人信息摘要">
            <div className="card-topline">
              <span>PROFILE / 2026</span>
              <span className="availability">
                <i aria-hidden="true" /> OPEN TO TALK
              </span>
            </div>
            <div className="monogram" aria-hidden="true">
              <span>L</span>
              <span>R</span>
            </div>
            <dl className="quick-facts">
              <div>
                <dt>经验</dt>
                <dd>8 年</dd>
              </div>
              <div>
                <dt>所在地</dt>
                <dd>上海</dd>
              </div>
              <div>
                <dt>方向</dt>
                <dd>AI / B2B</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="impact-strip" aria-label="职业成果摘要">
          <p>我关心的不是页面数量，而是改变发生了多少。</p>
          <div className="impact-metric">
            <strong>34%</strong>
            <span>关键功能激活率提升</span>
          </div>
          <div className="impact-metric">
            <strong>12+</strong>
            <span>产品项目完整上线</span>
          </div>
          <div className="impact-metric">
            <strong>60+</strong>
            <span>设计系统核心组件</span>
          </div>
        </section>

        <div className="resume-grid">
          <aside className="sidebar" id="about">
            <section>
              <p className="section-label">01 / 联系方式</p>
              <ul className="contact-list">
                <li>
                  <span>邮箱</span>
                  <a href="mailto:hello@linran.design">
                    hello@linran.design
                  </a>
                </li>
                <li>
                  <span>微信</span>
                  <strong>linran_design</strong>
                </li>
                <li>
                  <span>作品集</span>
                  <a href="#work">linran.design/work</a>
                </li>
                <li>
                  <span>位置</span>
                  <strong>中国 · 上海</strong>
                </li>
              </ul>
            </section>

            <section>
              <p className="section-label">02 / 能力栈</p>
              <ul className="skill-list">
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </section>

            <section>
              <p className="section-label">03 / 教育背景</p>
              <div className="education">
                <span>2014 — 2018</span>
                <strong>上海大学</strong>
                <p>视觉传达设计 · 学士</p>
              </div>
            </section>

            <section className="languages">
              <p className="section-label">04 / 语言</p>
              <div>
                <span>中文</span>
                <strong>母语</strong>
              </div>
              <div>
                <span>English</span>
                <strong>Professional</strong>
              </div>
            </section>
          </aside>

          <div className="main-column">
            <section className="content-section" id="experience">
              <header className="section-heading">
                <div>
                  <p className="section-label">05 / 工作经历</p>
                  <h2>从洞察到上线，<br />持续把事情做成。</h2>
                </div>
                <span className="section-index">8Y</span>
              </header>

              <div className="timeline">
                {experience.map((item, index) => (
                  <article className="experience-item" key={item.company}>
                    <div className="timeline-meta">
                      <span>{item.period}</span>
                      <i aria-hidden="true">{String(index + 1).padStart(2, "0")}</i>
                    </div>
                    <div className="timeline-content">
                      <h3>{item.role}</h3>
                      <p className="company">{item.company}</p>
                      <p className="description">{item.description}</p>
                      <ul>
                        {item.impact.map((impact) => (
                          <li key={impact}>{impact}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="content-section work-section" id="work">
              <header className="section-heading">
                <div>
                  <p className="section-label">06 / 代表项目</p>
                  <h2>问题值得被重新定义。</h2>
                </div>
                <span className="section-index">02</span>
              </header>

              <div className="project-list">
                {projects.map((project) => (
                  <article className="project-card" key={project.title}>
                    <div className="project-number">{project.number}</div>
                    <div className="project-copy">
                      <p className="project-type">{project.type}</p>
                      <h3>{project.title}</h3>
                      <p className="project-summary">{project.summary}</p>
                      <ul className="project-metrics">
                        {project.metrics.map((metric) => (
                          <li key={metric}>{metric}</li>
                        ))}
                      </ul>
                      <div className="tag-row">
                        {project.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                    <span className="project-arrow" aria-hidden="true">↗</span>
                  </article>
                ))}
              </div>
            </section>

            <section className="principle">
              <p className="section-label">07 / 设计原则</p>
              <blockquote>
                “好的体验不是替用户做决定，
                <span>而是让正确的决定更容易发生。”</span>
              </blockquote>
              <p>以好奇心开始，以证据推进，以结果校准。</p>
            </section>
          </div>
        </div>
      </main>

      <footer>
        <div>
          <p>期待一起解决有价值的问题。</p>
          <a href="mailto:hello@linran.design">开始聊聊 ↗</a>
        </div>
        <div className="footer-meta">
          <span>LIN RAN / PRODUCT DESIGNER</span>
          <span>更新于 2026.07</span>
        </div>
      </footer>
    </div>
  );
}
