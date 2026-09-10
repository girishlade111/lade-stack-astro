import type { LocaleContent } from './content-types';

export const zh: LocaleContent = {
  metaDescription: '免费AI开发者工具：代码审查、PDF工具、简历生成与图片处理。免注册，永久免费。',
  testimonials: [
    {
      quote: 'CodeEnhance AI 把我的前端迭代时间砍掉了一半。实时的 AI 建议，就像跟一位资深工程师结对编程。',
      name: 'Priya Sharma',
      role: '前端工程师，孟买'
    },
    {
      quote: 'LS PDF Tools 一个就替掉了团队三个付费订阅。纯客户端、又快又免费，简直不敢相信。',
      name: 'Daniel Kim',
      role: '独立开发者，首尔'
    },
    {
      quote: '查 RAG 架构和 MLOps，我只看 Lade Stack 博客。够深、够实用，没有废话。',
      name: 'Ana Souza',
      role: 'ML 工程师，圣保罗'
    }
  ],
  products: [
    {
      title: 'CodeEnhance AI',
      tagline: '智能代码查看与增强工具',
      desc: '用实时 AI 检查、建议和即时预览，把粗糙代码打磨成生产级作品。',
      icon: 'lucide:code-xml',
      link: '/ai-code-viewer-ai',
      badge: '热门'
    },
    {
      title: 'API Testing Platform',
      tagline: 'REST 与 GraphQL 自动化测试',
      desc: '几秒钟生成自动化验证套件、Mock 接口响应，并跑完安全基准测试。',
      icon: 'lucide:network',
      link: '/apps',
      badge: '极速'
    },
    {
      title: 'Website Builder AI',
      tagline: '零代码语义化生成器',
      desc: '生成现代化响应式界面，语义化标记，一键导出标准 HTML/CSS。',
      icon: 'lucide:layout-template',
      link: '/apps',
      badge: '零代码'
    },
    {
      title: 'Secure File Hub',
      tagline: '加密的开发者文件共享',
      desc: '配置文件、密钥、部署包，快速安全地临时分享。',
      icon: 'lucide:shield-check',
      link: '/apps',
      badge: '加密'
    }
  ],
  supportTopics: [
    { title: '快速上手', text: '去应用画廊挑个工具，一分钟内就能用起来，不用注册。' },
    { title: '文件工具', text: 'PDF 和图片工具全在本地跑。大文件建议用网络稳定的桌面端。' },
    { title: 'CodeEnhance AI', text: '粘贴代码、选个操作、看完建议，一键复制或下载。' },
    { title: '账号与数据', text: '不需要账号。随时清理站点数据，导出功能保住你的成果。' }
  ],
  supportFaqs: [
    { q: '工具打不开了怎么办？', a: '硬刷新页面，把针对 ladestack.in 的激进广告拦截关掉，再换近一年内的 Chromium 或 Firefox 试试。' },
    { q: '我的文件会被上传吗？', a: '不会。核心工具纯客户端运行，文件不出你的设备。' },
    { q: '怎么报 Bug？', a: '把工具名、浏览器版本和复现步骤发到 admin@ladestack.in，有截图更好。' },
    { q: '可以提新工具需求吗？', a: '当然，社区的需求直接决定路线图，去联系页留言就行。' },
    { q: '免费工具有 SLA 吗？', a: '没有正式 SLA，但我们全天监控可用性，有回归第一时间修。' },
    { q: '去哪学最佳实践？', a: '先看文档和博客，27 篇以上的 AI 开发指南从入门到上线全覆盖。' }
  ],
  contactFaqs: [
    {
      q: '什么是 Lade Stack？',
      a: 'Lade Stack 是一个创立于印度的独立软件与技术平台，致力于构建实用的开发者工具、AI 赋能软件、SaaS 产品及现代 Web 应用。平台专注于通过用心的 UI/UX 设计、严谨的工程实践与针对性自动化，消除技术工作流中的阻碍。'
    },
    {
      q: 'Lade Stack 的幕后构建者是谁？',
      a: 'Lade Stack 由 Girish Lade 创立并担任架构设计，其角色为创始人兼首席软件架构师（Founder & Lead Software Architect）。Girish 融合 UI/UX 设计、前后端工程、云原生架构与生成式 AI 的跨领域背景，把控产品方向并亲自打造解决实际工程痛点的实用工具。'
    },
    {
      q: 'Lade Stack 与其他软件平台有何不同？',
      a: 'Lade Stack 不盲目追逐概念炒作，也不构建笨重冗余的软件套件，而是坚持创始人主导，融合设计美学与扎实工程。所有工具皆以高响应速度、易用性和即开即用为目标，无需繁琐账号门槛、复杂配置或强行推销。'
    },
    {
      q: 'Lade Stack 构建哪些类型的产品？',
      a: 'Lade Stack 打造专注的开发者实用工具、智能代码增强工具、客户端离线生产力工具和现代 Web 应用。生态产品涵盖 CodeEnhance AI（浏览器内代码编辑与增强）、LS PDF Tools 和 LS Image Studio（保护隐私的纯客户端媒体工具）、Swift Resume 以及 API Testing Platform 等。'
    },
    {
      q: 'Lade Stack 是专门为软件开发者打造的吗？',
      a: '我们的核心工具（如 CodeEnhance AI、API Testing Platform 及技术文档）以开发者优先为原则，旨在加快交付周期并减少重复繁琐工作。然而，像 LS PDF Tools、LS Image Studio 和 Swift Resume 这样的生产力工具，同样为学生、创作者及非技术专业人士提供了简单直观的使用体验。'
    },
    {
      q: 'Lade Stack 如何应用生成式 AI？',
      a: '生成式 AI 严格以实际效用为导向引入，仅在机器智能能够切实加速工作流的场景应用——例如分析代码结构、提供上下文感知建议和简化文档生成。我们拒绝把 AI 当作噱头，始终专注于在人工把控下提供能节省实实在在时间的智能辅助。'
    },
    {
      q: 'Lade Stack 的产品基于浏览器运行吗？',
      a: '是的。绝大部分 Lade Stack 应用直接在现代 Web 浏览器中运行，无需繁琐的本地安装或运行时依赖即可即时使用。包括文件与图像处理在内的许多工具均在客户端本地完成运算，兼顾极致性能与隐私安全。'
    },
    {
      q: 'Lade Stack 真的完全免费吗？',
      a: '是的。Lade Stack 旗下的核心开发者工具与生产力套件均可完全免费使用，没有付费墙、隐藏试用期或信用卡绑定要求。我们的愿景是让全球开发者、学习者与创造者都能无障碍地获取高价值软件。'
    },
    {
      q: 'Lade Stack 的所有产品都是开源的吗？',
      a: 'Lade Stack 秉持开放与社区优先的理念，精选的工具、组件库和开发指南都在 GitHub 上公开发布。不过，“免费使用”并不等同于所有底层服务都完全开源。你可以在 Girish Lade 的 GitHub 个人主页上查看已开放的项目与代码仓库。'
    },
    {
      q: 'Lade Stack 如何保障用户数据与隐私安全？',
      a: '隐私安全被视为最高架构准则之一。核心工具（如 LS PDF Tools 和 LS Image Studio）完全在浏览器本地运行，文件绝不上传至任何服务器。对于涉及在线交互的工具，数据处理仅限于满足当前的即时请求。具体可查阅各产品的使用说明。'
    },
    {
      q: '遇到问题时我该如何获取支持？',
      a: '你可以直接使用本页的联系表单，或发送邮件至 admin@ladestack.in。每封来信均由 Girish Lade 亲自审阅。虽然我们不设正式的企业级 SLA，但我们会积极排查问题，并尽可能迅速地回复有建设性的咨询与反馈。'
    },
    {
      q: '我可以提出新功能或新工具建议吗？',
      a: '非常欢迎！你可以通过联系表单或在 GitHub 上提交 Issue 来分享你的想法与功能建议。我们会根据实用性、技术可行性以及与平台整体路线图的契合度来综合评估并规划开发。'
    },
    {
      q: '我发现了一个 Bug，应该如何反馈？',
      a: '如果你发现了问题，请通过联系表单或邮件（admin@ladestack.in）发送反馈。提供工具名称、使用的浏览器与操作系统、复现步骤以及相关的错误信息或截图，将极大帮助我们快速定位并修复。'
    },
    {
      q: '在哪里可以查阅文档和使用指南？',
      a: '详尽的指南、架构解析与上手教程已整理在文档专区（/docs）和 Lade Stack 官方博客中。随着新功能与工具版本的持续发布，文档内容也在不断丰富和更新。'
    },
    {
      q: 'Lade Stack 提供企业解决方案或团队方案吗？',
      a: 'Lade Stack 目前是一个由创始人主导的独立平台，重心放在打造易用、高性能的 Web 工具上，暂不提供复杂的企业级合同或专项合规认证套件。如果你的团队或初创项目有特定工作流需求或定制集成意向，欢迎联系我们探讨合作可能。'
    },
    {
      q: 'Lade Stack 如何决定下一步打造什么产品？',
      a: '产品决策源于真实的开发者瓶颈、用户的切实反馈，以及现代 Web 技术与生成式 AI 能够有效化解痛点的机会。每个工具的构思都始于一个简单而明确的问题：它能否真正节省时间并让核心工作流变得更加轻松？'
    },
    {
      q: '我可以与 Lade Stack 开展合作或参与贡献吗？',
      a: '非常欢迎技术交流、开源协作与业务探讨。无论你是想为开源仓库贡献代码的工程师，还是希望探讨产品集成的创作者，都欢迎随时通过 admin@ladestack.in 联系，或在 LinkedIn 和 GitHub 上与创始人建立连接。'
    }
  ],
  docsGroups: [
    { id: 'getting-started', title: '快速上手', articles: [
      { title: '一分钟：启动你的第一个应用', text: '打开应用画廊挑个工具，无需注册，一分钟内进入状态。' },
      { title: '生态导览', text: '首页、应用、博客、文档、支持——每个板块怎么配合你的工作流。' }
    ]},
    { id: 'api-reference', title: 'API 参考', articles: [
      { title: 'CodeEnhance AI 用法', text: '粘贴 HTML、CSS 或 JS，选增强或讲解，一键导出生产级代码。' },
      { title: '配额与合理使用', text: '慷慨的免费额度加分钟级保护，保证人人流畅。' }
    ]},
    { id: 'integrations', title: '集成', articles: [
      { title: '导出到 GitHub 和 Vercel', text: '生成的代码直接拷进仓库，预览部署一键搞定。' }
    ]},
    { id: 'tutorials', title: '教程', articles: [
      { title: '5 分钟上线一个落地页', text: '网站构建器加图片工作室，从一句话到发布上线。' }
    ]},
    { id: 'security', title: '安全', articles: [
      { title: '隐私始于设计', text: '客户端处理，核心工具里文件不出浏览器。' }
    ]},
    { id: 'teams', title: '团队', articles: [
      { title: '用分享链接协作', text: '轻便的 JSON 导出，把成果和模板分享给团队。' }
    ]},
    { id: 'data', title: '数据管理', articles: [
      { title: '导出你的作品', text: '每个工具都支持复制、下载、Markdown 导出，数据永远是你的。' }
    ]},
    { id: 'deployment', title: '部署', articles: [
      { title: '自托管清单', text: '静态优先架构，镜像这些工具很省心。' }
    ]}
  ],
  docsChangelog: [
    { v: 'v2.4.0', date: '2026-08-20', text: '纯 Astro 重构，支持 7 门语言，Lighthouse 满分。' },
    { v: 'v2.3.0', date: '2024-11-30', text: 'Documentation AI 公测，API Testing 合集上线。' },
    { v: 'v2.0.0', date: '2024-06-01', text: 'CodeEnhance AI 正式发布。' }
  ],
  timeline: [
    { year: '2020', title: '工具箱的起点', text: 'Girish Lade 开始写个人开发者小工具——PDF、图片、代码助手。' },
    { year: '2022', title: 'Lade Stack 成形', text: '统一的设计语言和永久免费承诺，把工具收拢到一个品牌下。' },
    { year: '2024', title: '长成 AI 生态', text: 'CodeEnhance AI 发布，博客文档突破 27 篇，社区超过 8000 名开发者。' },
    { year: '2026', title: '纯 Astro 重构', text: '零 JS 运行时、7 门语言、Lighthouse 满分的全静态重构。' }
  ],
  aboutStats: ['创立', '生产级工具', '开发者', '永远免费'],
  storyExtra: '横跨 AI 系统、Web 开发和体验设计的多面手工程师兼设计师，做的工具只有一个目标：让每位创作者都拥有初创公司般的速度，而且分文不花。',
  footerLinks: {
    aiCodeViewer: 'AI 代码查看器',
    support: '支持中心',
    privacy: '隐私政策',
    terms: '服务条款'
  },
  aicodeFeatures: [
    { title: '实时 AI 辅助', text: '有依据的建议，边写边讲解、重构、优化。' },
    { title: '实时预览与编译', text: 'HTML、CSS、JS 的效果和报错即刻可见。' },
    { title: '一键增强', text: '粗糙片段变成干净、无障碍的生产级代码。' },
    { title: '随处导出', text: '复制下载都自由，没有锁定，没有水印。' }
  ],
  privacy: [
    { h: '我们收集什么', p: '只收最少的：你发来的联系消息、订阅的 newsletter 邮箱，以及尊重隐私的分析（页面浏览，不跨站追踪）。核心工具全在浏览器里跑，你的文档到不了我们的服务器。' },
    { h: '怎么用这些信息', p: '只用来回支持消息、发你订阅的邮件、打磨性能和稳定性。个人数据不卖，也不给广告网络。' },
    { h: 'Cookie 与存储', p: '主题和语言偏好只存在你设备的 localStorage 里。分析 Cookie 即便有，也是匿名的第一方。' },
    { h: '你的权利', p: '随时写信 admin@ladestack.in，要求查看、更正、删除你的数据。邮件一键退订。' },
    { h: '联系我们', p: '政策问题：admin@ladestack.in，印度孟买。' }
  ],
  terms: [
    { h: '合理使用', p: '合法使用工具。别刷限流、别搞破坏、别处理你无权处理的内容。' },
    { h: '免费许可', p: '个人商用都免费，你产出的东西归你。拿我们的品牌去分发平台本身，需要先授权。' },
    { h: 'API 公平使用', p: '自动化调用请遵守公开配额。过度流量为了大家会被限流。' },
    { h: '无担保', p: '服务按“现状”提供，不做担保。我们拼命保稳定，但保证不了永远不断线。' },
    { h: '责任限制', p: '在法律允许的最大范围内，我们不对使用服务的间接损失负责。' },
    { h: '联系我们', p: '条款问题：admin@ladestack.in，印度孟买。' }
  ],
  apps: {
    'ai-code-viewer-ai': {
      tagline: 'AI 前端代码编辑器',
      description: '实时 AI 辅助，编辑、编译、增强 HTML、CSS 和 JS。',
      features: ['实时 AI 辅助', '实时预览', '一键增强']
    },
    'ls-pdf': {
      tagline: '浏览器里的免费 PDF 工具箱',
      description: '合并、拆分、压缩、转换，全在客户端完成，不上传。',
      features: ['合并拆分', '压缩', 'PDF 转图片']
    },
    'ls-img': {
      tagline: '图片压缩转换，秒级搞定',
      description: '隐私有保障的浏览器处理，批量压缩、缩放、转格式。',
      features: ['批量压缩', '格式转换', '缩放']
    },
    'swift-resume': {
      tagline: '几分钟做出 ATS 简历',
      description: '实时预览加 PDF 导出，ATS 友好的简历分分钟出炉。',
      features: ['ATS 模板', '实时预览', 'PDF 导出']
    },
    'bharat-land': {
      tagline: '印度土地档案洞察',
      description: '干净飞快的界面，查土地档案、看懂数据。',
      features: ['快速查询', '清爽界面', '移动端适配']
    },
    'api-testing': {
      tagline: '可视化测 REST 和 GraphQL',
      description: '用合集和环境，设计、发送、自动化 API 测试。',
      features: ['合集', '环境', '测试脚本']
    },
    'website-builder': {
      tagline: 'AI 生成落地页',
      description: '描述一下网站，又快又 SEO 友好的落地页就出来了。',
      features: ['AI 版块', 'SEO 默认项', '一键发布']
    },
    'file-management': {
      tagline: '阅后即焚式分享链接',
      description: '上传文件，分享安全、可过期的链接，全程可控。',
      features: ['过期链接', '免注册', '高速 CDN']
    },
    'documentation-ai': {
      tagline: '文档秒变摘要',
      description: '粘贴文档或代码，清晰的摘要、指南、参考立刻就来。',
      features: ['即时摘要', '代码讲解', 'Markdown 导出']
    }
  },
  appTime: {
    'Instant': '即时',
    '1 minute': '1 分钟',
    '2 minutes': '2 分钟',
    '5 minutes': '5 分钟'
  },
  appCategories: {
    'AI Tools': 'AI 工具',
    'Productivity': '效率',
    'Utilities': '实用工具'
  },
  blogCategories: {
    'AI Development': 'AI 开发',
    'Generative AI': '生成式 AI',
    'SaaS Architecture': 'SaaS 架构',
    'Backend as a Service': 'BaaS',
    'API Design & Scaling': 'API 设计与扩展',
    'Cloud Computing': '云计算',
    'Virtual Machines': '虚拟机',
    'DevOps & CI/CD': 'DevOps 与 CI/CD',
    'Security in Web Apps': 'Web 安全',
    'AI Production Systems': 'AI 生产系统'
  },
  blogPosts: {
    'future-of-ai-in-software-development': { title: '2025 之后：AI 软件开发的未来', description: '生成式模型、Agent 工作流和自动验证，如何彻底改变现代软件工程。' },
    'building-ai-powered-code-review-systems': { title: '打造 AI 代码评审系统', description: '用 LLM 抓 Bug、卡风格、带新人：自动化评审流水线设计指南。' },
    'machine-learning-pipelines-for-web-developers': { title: '写给 Web 开发者的机器学习流水线', description: '从数据接入到训练、评估、上线，给一线 Web 开发者的 ML 入门。' },
    'generative-ai-for-content-creation': { title: '用生成式 AI 做内容', description: '不丢掉自己的语气，把起草、改稿、扩写交给 LLM。' },
    'building-rag-applications-vector-databases': { title: '用向量数据库做 RAG 应用', description: '分块、向量、检索到有据回答，RAG 端到端指南。' },
    'fine-tuning-llms-domain-specific-tasks': { title: '垂直领域 LLM 微调', description: '提示词还是微调？数据集怎么做？小预算 LoRA 全流程。' },
    'multi-tenant-saas-architecture-patterns': { title: '多租户 SaaS 架构模式', description: '独享、共享、桥接三代模型，隔离、成本、扩展性一次比透。' },
    'building-subscription-billing-systems': { title: '搭建订阅计费系统', description: '试用、按比例、催收、Webhook，做财务敢信的账单系统。' },
    'scaling-saas-applications-million-users': { title: '撑住百万用户的 SaaS 扩容', description: '缓存、队列、只读副本、分片，扛住百万用户的分阶段打法。' },
    'baas-platforms-compared-firebase-supabase-appwrite': { title: 'BaaS 横评：Firebase vs Supabase vs Appwrite', description: '认证、数据库、价格、跑路成本，三家实话实说。' },
    'building-serverless-backends-with-baas': { title: '用 BaaS 做 Serverless 后端', description: '零服务器的生产后端：表结构、边缘函数、后台任务。' },
    'real-time-data-sync-backend-services': { title: '后端实时数据同步', description: 'WebSocket、CRDT、托管实时服务，在线状态、协同编辑全拿下。' },
    'rest-vs-graphql-choosing-right-api-paradigm': { title: 'REST vs GraphQL 怎么选', description: '版本、缓存、载荷、团队速度，一套选型框架讲清。' },
    'api-rate-limiting-throttling-strategies': { title: 'API 限流与节流策略', description: '不误伤好用户的前提下，用令牌桶和配额守住 API。' },
    'building-api-gateways-microservices': { title: '给微服务搭 API 网关', description: '认证、路由、转换、可观测，全部收敛到集群边缘。' },
    'cloud-cost-optimization-strategies-startups': { title: '初创公司的云账单瘦身术', description: '调规格、买承诺、转冷存、打标签，云账单直降三到五成。' },
    'multi-cloud-architecture-aws-azure-gcp': { title: 'AWS·Azure·GCP 多云架构', description: '多云什么时候划算，怎么用容器和 IaC 保住可移植性。' },
    'containers-vs-vms-when-to-use-each': { title: '容器 vs 虚拟机：何时用谁', description: '隔离、开销、运维三笔账，选得明明白白。' },
    'optimizing-vm-performance-production-workloads': { title: '生产环境虚拟机调优', description: '绑核、NUMA、存储队列、防邻居吵，可预测的 VM 性能。' },
    'gitops-managing-infrastructure-with-git': { title: 'GitOps：拿 Git 管基础设施', description: '声明式基建、PR 评审、漂移检测、自动同步。' },
    'building-zero-downtime-deployment-pipelines': { title: '零停机发布流水线', description: '蓝绿、金丝雀、滚动加健康门禁，用户无感知的发布。' },
    'infrastructure-as-code-terraform-pulumi': { title: 'Terraform 与 Pulumi 写 IaC', description: 'HCL 还是通用语言？状态管理、模块设计一次讲透。' },
    'zero-trust-security-web-applications': { title: 'Web 应用零信任安全', description: '永不信任、持续验证：身份感知代理、短期凭证、微隔离。' },
    'owasp-top-10-complete-mitigation-guide': { title: 'OWASP Top 10 根治指南', description: '十大风险，有问题的代码和修好的代码对照着看，今天就能用。' },
    'implementing-oauth2-openid-connect': { title: '落地 OAuth2 和 OpenID Connect', description: 'PKCE 授权码、令牌存哪、怎么轮换、怎么登出，一次做对。' },
    'mlops-deploying-ml-models-production': { title: 'MLOps：模型上线生产环境', description: '模型仓库、金丝雀 serving、特征平台、回滚预案，稳稳上线。' },
    'monitoring-ai-systems-in-production': { title: '生产 AI 系统监控', description: '配上评估和护栏，把 AI 功能的质量、漂移、成本、延迟盯住。' }
  }
};
