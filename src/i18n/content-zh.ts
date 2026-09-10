import type { LocaleContent } from './content-types';

export const zh: LocaleContent = {
  metaDescription:
    'Lade Stack —— 由 Girish Lade 创办的实用开发者工具与 AI 工程生态。涵盖代码审查、API 测试及文件实用工具。永久免费，无需注册。',
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
      desc: '借助实时 AI 代码审查、结构优化建议以及即时浏览器预览，快速调试并重构多种 Web 语言代码。',
      icon: 'lucide:code-xml',
      link: '/ai-code-viewer-ai',
      badge: '热门'
    },
    {
      title: 'API Testing Platform',
      tagline: 'REST 与 GraphQL 自动化测试',
      desc: '直接在浏览器中验证请求端点、检查结构化响应载荷、调试请求标头并校验 API 契约规范。',
      icon: 'lucide:network',
      link: '/apps',
      badge: '极速'
    },
    {
      title: 'Website Builder AI',
      tagline: '语义化网页原型生成器',
      desc: '将交互构想迅速转化为兼具现代审美与响应式特性的网页原型，输出纯净的语义化 HTML/CSS 代码。',
      icon: 'lucide:layout-template',
      link: '/apps',
      badge: '零代码'
    },
    {
      title: 'Secure File Hub',
      tagline: '开发者配置文件安全共享',
      desc: '专为工程师打造的受控临时共享工具，安全分发配置文件、环境变量、凭据与部署构建产物。',
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
    {
      id: 'getting-started',
      title: '快速上手',
      articles: [
        {
          title: '什么是 Lade Stack？',
          text: 'Lade Stack 是由 Girish Lade（创始人兼首席软件架构师）创立的独立开发者工具生态与技术知识平台。平台聚焦扎实的工程实现、卓越的运行时性能与针对性自动化，提供专注于实际痛点的 Web 工具、生成式 AI 辅助开发工具以及隐私优先的文档助手。所有工具均可直接在现代浏览器中运行，无需强制注册账号或捆绑付费订阅。'
        },
        {
          title: '深入理解生态架构',
          text: 'Lade Stack 生态包含支撑开发者完整周期的五大核心板块：首页展示平台方向与设计理念；应用画廊（/apps）提供核心生产力工具的即开即用访问；工程博客（/blog）输出前沿架构演进与全栈开发深度指南；技术文档（/docs）作为权威规范与参考中心；支持中心（/support）提供技术解答与详尽常见问题解答。'
        },
        {
          title: '一分钟：启动你的第一个应用',
          text: '上手 Lade Stack 仅需半分钟。进入应用画廊，挑选如 CodeEnhance AI 或 LS PDF Tools 等工具即可立即投入工作。核心工具基于现代 Web 标准在浏览器沙箱内本地执行，无需安装运行时、无本地环境配置依赖，更无需绑定任何支付信息。'
        },
        {
          title: '应用画廊与工作空间导航',
          text: '应用画廊根据功能领域合理划分工具空间：AI 工具（CodeEnhance AI、可视化 API 测试平台及文档智能工具）、生产力套件（LS PDF Tools、LS Image Studio、Swift Resume）以及通用实用工具（Bharat Land Records 等）。每个卡片均清晰标注即时交付价值耗时、技术集成支持及直达运行链接。'
        },
        {
          title: '生态产品与工具详解',
          text: 'Lade Stack 打造了一系列针对特定研发场景的 Web 应用：CodeEnhance AI (code.ladestack.in) 提供基于 AST 语义分析的实时 HTML/CSS/JS 编辑与智能重构；LS PDF Tools (pdf.ladestack.in) 在客户端纯本地完成 PDF 合并、拆分与压缩，绝不上传文件；LS Image Studio (img.ladestack.in) 针对 WebP、AVIF 等现代图片格式提供批量转换与无损压缩；Swift Resume (resume.ladestack.in) 则可快速生成符合 ATS 机器解析规范的工程师简历。'
        },
        {
          title: '核心开发者工作流',
          text: '推荐遵循四个递进式工作阶段：1. 输入：将草稿代码、原始文档或配置参数直接粘贴或载入浏览器；2. 处理：借助客户端本地编译或 AI 辅助引擎进行语法增强与结构优化；3. 预览：在隔离的 DOM 沙箱或实时视口中即时验证交互与渲染表现；4. 导出：一键复制代码或直接下载规范文件至本地工程项目中。'
        },
        {
          title: '完成你的第一个项目',
          text: '在 Lade Stack 快速达成第一次开发闭环：打开 CodeEnhance AI，粘贴未经修饰的 HTML 按钮或导航栏片段，点击“增强”生成兼顾无障碍（ARIA）属性与现代 CSS 布局的高质量代码，在右侧实时沙箱中验证点击动效，最后点击“复制”即可直接嵌入现有项目代码库。'
        },
        {
          title: '后续进阶与社区反馈',
          text: '体验基础工具后，欢迎阅读官方博客（/blog）中关于生成式 AI 落地、纯静态 Astro 架构设计与前端性能优化的深度文章。若有定制需求、Bug 报告或开源协作意向，可通过 admin@ladestack.in 或 GitHub 直接与创始人 Girish Lade 沟通探讨。'
        }
      ]
    },
    {
      id: 'api-reference',
      title: 'API 参考',
      articles: [
        {
          title: 'API 架构概览与设计规范',
          text: 'Lade Stack 的 API 与微服务围绕标准的 HTTP/REST 规范与无状态执行模型构建。所有接口遵循清晰预测的 Web 约定：UTF-8 编码的 JSON 数据载荷、语义化 HTTP 请求谓词（GET、POST）、标准状态码结构与严格的标头约束（Content-Type: application/json），兼顾极低网络延迟与轻量级交互。'
        },
        {
          title: '公开访问模型与鉴权机制',
          text: '秉承永久免费的开发者承诺，Lade Stack 的核心交互式 Web 工具与代码审查服务采用极简的公开访问设计。常规浏览器内交互无需申请专属 API Key、Bearer Token 或维护复杂用户会话凭证。服务在边缘网络层通过来源验证与公平速率控制来确保系统整体稳定性。'
        },
        {
          title: '请求与响应格式规范',
          text: '所有机器可读的接口均采用 UTF-8 编码的 JSON 格式交互。调用成功时统一返回 200 OK 状态码及清晰的字段载荷；遇到异常时则返回规范的 HTTP 错误码（如 400 Bad Request、429 Too Many Requests 或 500 Internal Error），并在响应体中附带包含错误代码、问题描述与建议处理方案的结构化 JSON 数据。'
        },
        {
          title: 'CodeEnhance AI 处理工作流',
          text: '在 CodeEnhance AI 中触发代码增强或解释时，系统按确定性流程运转：1. 客户端捕获输入代码与语言模式（HTML、CSS 或 JS）；2. 在前端进行基础语法完整性与长度校验；3. 通过 TLS 传输至后端处理引擎；4. 引擎解析 AST 抽象语法树，执行代码重构、可访问性修正与排版格式化；5. 返回格式化后的结构化代码并在编辑器中显示实时差异。'
        },
        {
          title: '输入要求与输出质量规范',
          text: 'CodeEnhance AI 完美支持符合标准的 HTML5 标记、现代 CSS3（包括自定义属性、Flexbox 与 Grid 规则）以及 ES6+ JavaScript。输入代码需为纯文本字符，避免混杂不可解析的二进制内容。输出代码严格遵循标准化语义规范，兼顾代码可读性、执行性能与无障碍标准，绝不掺杂私有框架外壳或冗余依赖。'
        },
        {
          title: '错误状态码与异常诊断',
          text: '接口遵循语义化 HTTP 状态码：400 表示输入 JSON 格式错误或包含无法解析的代码；413 表示单次请求字符量超出上限；429 表示短时间内请求频次触发突发防护阈值；504 表示计算处理超时。前端界面会将异常转化为清晰的文字指引与排错建议，避免晦涩难懂的技术堆栈信息。'
        },
        {
          title: '速率限制与公平使用准则',
          text: '为了保障全球开发者均能享受亚秒级的响应速度，Lade Stack 部署了分钟级滑窗公平使用流控策略。限流配额根据客户端来源动态分配，既有效阻挡恶意自动化脚本攻击与拒绝服务试探，又为正常的人工开发调试与合理频率的测试留足充裕带宽。'
        },
        {
          title: 'API 连接排错指引',
          text: '当请求遇到失败或超时时，可按如下步骤排查：1. 检查本地网络连通性，确保防火墙未拦截对 ladestack.in 域名的 HTTPS 外发流量；2. 检查浏览器扩展或广告拦截器是否拦截了 Fetch 通信；3. 确认提交的代码片段未超出字符限制；4. 若遇到 429 状态码，请静候 60 秒后再发起请求。'
        }
      ]
    },
    {
      id: 'integrations',
      title: '集成',
      articles: [
        {
          title: '导出至 GitHub 与版本控制流程',
          text: 'Lade Stack 深度融入现代 Git 工作流。在 CodeEnhance AI 或其他工具中生成的组件代码，可直接复制或下载至本地 Git 仓库所在目录。直接在特性分支提交源码（git add . && git commit -m "feat: add enhanced component"），完整保留项目的提交历史与审查链路。'
        },
        {
          title: '无技术锁定的纯净代码导出',
          text: '与将开发者绑定在专有运行环境的平台不同，Lade Stack 坚决执行“零技术锁定”原则。所有导出的代码皆为纯净的 HTML5、现代 CSS 与模块化 JavaScript/TypeScript。这些文件可无缝植入 Astro、Next.js、Vite 或原生静态站点等任意前端工程，无需改造构建脚本。'
        },
        {
          title: '预览与部署至 Vercel',
          text: '将 Lade Stack 生成的项目发布至 Vercel 极为便捷：1. 将导出的源码推送到 GitHub 代码仓库；2. 在 Vercel 控制台导入该仓库；3. Vercel 会自动识别工程类型（如 Astro 或 Vite）并自动配置构建命令（npm run build）与输出目录（dist）；4. 点击部署，即可在数秒内获得全球边缘 CDN 托管的生产链接与预览地址。'
        },
        {
          title: '连接现代前端 IDE 工作流',
          text: '导出的代码可以直接无缝接入 VS Code、Cursor 或 WebStorm。解压或粘贴至工程目录后，借助 Prettier 与 ESLint 进行个性化代码格式化，启动本地开发服务（npm run dev）即可直接调试。因为输出的代码均符合标准规范，IDE 自带的代码补全、类型推导与静态检查均能即时生效。'
        },
        {
          title: '常见集成故障与解决对策',
          text: '在将导出代码融入工程时，若遇到样式错位或依赖问题：1. 检查图片、字体等静态资源相对路径是否匹配项目的 public 目录规范；2. 确认导出的 CSS 变量与项目全局全局样式体系是否存在命名冲突；3. 确认目标工程的浏览器兼容目标支持现代 CSS 特性。'
        }
      ]
    },
    {
      id: 'tutorials',
      title: '教程',
      articles: [
        {
          title: '5 分钟极速上线高质感落地页',
          text: '遵循五个步骤完成高质量响应式落地页开发：步骤 1：打开 CodeEnhance AI，输入页面语义结构（首屏 Hero、特性矩阵、行动号召模块）；步骤 2：点击“增强”生成兼顾美感与响应式的 CSS 弹性布局；步骤 3：访问 LS Image Studio (img.ladestack.in)，将页面配图批量压缩为 WebP 格式；步骤 4：在 HTML 中替换优化后的本地图片路径；步骤 5：复制最终源码并发布至托管平台上线。'
        },
        {
          title: '使用 CodeEnhance AI 重构旧版前端代码',
          text: '将陈旧不易维护的前端代码现代化升级：步骤 1：从现有项目中复制一段采用老旧浮动布局的 HTML/CSS 片段；步骤 2：粘贴进 CodeEnhance AI 编辑器并选定语言标签；步骤 3：点击分析增强，系统会自动替换为 Flexbox 现代布局、引入 CSS 变量并补全 ARIA 标签；步骤 4：在右侧沙箱视口中对比验证视觉渲染；步骤 5：将重构后的干净代码直接导回原工程。'
        },
        {
          title: '使用 LS PDF Tools 纯本地私密处理文档',
          text: '无需承担隐私泄露风险的安全 PDF 处理流程：步骤 1：访问 LS PDF Tools (pdf.ladestack.in)；步骤 2：挑选功能模块：合并多份 PDF、提取指定页面或压缩文件体积；步骤 3：将敏感 PDF 文件直接拖拽入浏览器；步骤 4：按需调整页面顺序或压缩画质等级；步骤 5：点击处理，WebAssembly 在浏览器内存中瞬间完成计算；步骤 6：直接下载目标文档，全过程数据不离本地电脑。'
        },
        {
          title: '使用 LS Image Studio 批量无损优化网页素材',
          text: '为打造满分性能网站进行素材体积瘦身：步骤 1：打开 LS Image Studio (img.ladestack.in)；步骤 2：将一批 PNG、JPEG 或 WebP 图片拖入批量处理区域；步骤 3：选定转换目标格式（推荐现代 Web 优先的 WebP 或 AVIF）并设定画质阈值；步骤 4：点击一键压缩，借助本地 Canvas 与 WebAssembly 引擎并发完成运算；步骤 5：下载体积精简的高清图片包。'
        },
        {
          title: '使用 Swift Resume 打造 ATS 友好型工程师简历',
          text: '打造高机器解析通过率的专业简历：步骤 1：打开 Swift Resume (resume.ladestack.in)；步骤 2：依次填写联系方式、核心技术栈、工程实战项目与教育背景；步骤 3：选择专为 ATS 招聘系统设计的排版结构预设，消除图文排版歧义；步骤 4：利用实时预览调整版面篇幅，严格控制单页或双页结构；步骤 5：一键导出高解析度矢量 PDF，便于求职投递。'
        },
        {
          title: '从 Web 原型到 Git 仓库与线上部署全流程',
          text: '将浏览器中的实验作品转化为线上运行的正式项目：步骤 1：在 Lade Stack 各工具中完成界面设计与素材优化；步骤 2：将生成的全部静态文件统一下载至本地独立文件夹；步骤 3：初始化本地 Git 仓库（git init && git add . && git commit -m "Initial commit"）；步骤 4：在 GitHub 创建新仓库并推送代码；步骤 5：在 Vercel 或 Cloudflare Pages 导入仓库绑定自定义域名，实现自动化持续集成。'
        }
      ]
    },
    {
      id: 'security',
      title: '安全',
      articles: [
        {
          title: '隐私始于设计：纯客户端本地计算架构',
          text: 'Lade Stack 最鲜明的技术特色即是“隐私始于设计”。LS PDF Tools、LS Image Studio 等核心工具深度利用浏览器 WebAssembly 技术栈、HTML5 File API 与 Canvas 本地渲染机制，所有数据加工均在用户本地浏览器的沙箱内存中闭环完成，敏感合同、图纸和个人相片绝不上传至任何外在服务器。'
        },
        {
          title: '数据流转与零存储留存原则',
          text: '对于 CodeEnhance AI 等需要云端协同处理的工具，所有通信传输均通过 TLS 1.3 强加密传输。平台严格贯彻“零数据留存”准则：提交的代码在服务器内存中完成即时解析与重构后立即释放返回，不落盘存储，不建立代码片段数据库，更不对用户跨站行为做画像追踪。'
        },
        {
          title: 'AI 提示词安全与代码资产保护',
          text: '我们坚决捍卫开发者的代码知识产权。用户提交给 Lade Stack 智能辅助工具的代码片段、架构逻辑与提示词，绝不用于任何底层基础大语言模型的预训练、微调或算法强化。所有交互均为即用即弃的瞬态过程，输出生成完毕后立即清除会话上下文。'
        },
        {
          title: '客户端代码执行隔离与 DOM 沙箱机制',
          text: 'CodeEnhance AI 内部的动态代码实时预览运行在受到严格权限限制的 iframe 沙箱环境中。沙箱严格禁止被执行脚本读取宿主站点的 Cookie、localStorage、会话令牌或顶层导航环境。所有用户输入均经过严密的 DOM 净化过滤，彻底阻隔跨站脚本攻击（XSS）隐患。'
        },
        {
          title: '开发者安全准则与操作防范建议',
          text: '虽然平台在架构层面落实了严密的安全防护，开发者仍应保持良好的工程安全规范：切勿在任何网页工具中直接粘贴线上生产数据库连接串、未脱敏私钥或敏感 API Token；定期审查本地浏览器安装的第三方插件；保持操作系统与浏览器的最新安全补丁更新。'
        },
        {
          title: '安全漏洞报告与响应机制',
          text: '我们对平台与用户的信息安全抱有严谨负责的态度。如果你在 Lade Stack 的任何工具或页面中发现了潜在的安全漏洞、内存泄露或数据暴露隐患，请直接发送邮件至创始人邮箱 admin@ladestack.in。请附带详细的复现步骤，我们将第一时间进行核实、评估并快速发布修复。'
        }
      ]
    },
    {
      id: 'teams',
      title: '团队',
      articles: [
        {
          title: '基于无状态分享链接的高效协作',
          text: 'Lade Stack 采用轻量化、无状态的 URL 参数编码方式支持团队成员间快速协作。配置状态、选定的组件模板以及非敏感参数可以直接编码进可分享的网址中。团队成员打开链接时，工具在本地浏览器中瞬间还原出完全一致的工作界面，无需配置公共数据库或团队账号。'
        },
        {
          title: '便携式 JSON 工程数据导出与模板流转',
          text: '针对复杂参数或多模块配置，Lade Stack 提供了标准化的 JSON 导入与导出规范。你可以将当前的调试进度或组件结构导出为轻量的 .json 文件，提交进团队 Git 仓库或在团队内部即时通讯软件中分发。同事导入该文件即可无缝继续工作，完全杜绝口头同步带来的配置偏差。'
        },
        {
          title: '基于 Git 的团队代码评审与整合最佳实践',
          text: '我们坚决推崇基于版本控制的代码协同模式，而非闭门造车的云端协作孤岛。使用 Lade Stack 生成的代码应以 Pull Request 的形式并入工程项目主线，使团队能够充分借助 CI/CD 自动化流水线、单元测试套件与同行代码审查保障系统稳定性与架构合规性。'
        },
        {
          title: '前端代码规范与团队工程标准统一',
          text: 'Lade Stack 导出的代码天然契合现代前端工程的最佳实践：遵循规范的 HTML5 语义标签、严谨的 CSS 命名空间与变量分层、完整的可访问性属性（ARIA）以及严格的 TypeScript 类型约束。团队可直接将这些输出成果作为架构基线，有效减少 PR 评审中的无谓格式争论。'
        }
      ]
    },
    {
      id: 'data',
      title: '数据管理',
      articles: [
        {
          title: '导出成果与 100% 数据所有权保证',
          text: '在 Lade Stack，你对通过工具创作生成的一切成果拥有百分之百、无条件的完全所有权。所有工具均提供无障碍导出选项：一键复制至系统剪贴板、源码打包下载以及 Markdown 格式输出。我们绝不施加任何版权限制、商业水印或平台绑定条款。'
        },
        {
          title: 'LocalStorage 客户端本地持久化规范',
          text: '为了在绝不追踪用户隐私的前提下保留偏好，Lade Stack 利用本地浏览器的 localStorage 保存设置。你的颜色主题模式（明/暗色）、语言界面选择以及代码编辑器的临时草稿均保存在你自己的设备上。该部分数据永不向外部遥测服务器同步回传。'
        },
        {
          title: '数据生命周期与即时内存释放',
          text: 'Lade Stack 各工具从设计源头即严格注重内存回收。客户端媒体加工完成后，系统会立即通过 URL.revokeObjectURL 销毁临时对象并释放内存占用。关闭标签页或清理浏览器网站缓存，即可完全清除所有的临时草稿与本地驻留数据。'
        },
        {
          title: '跨开发环境的代码与资产无缝迁移',
          text: '将 Lade Stack 中的产物迁移至生产体系轻而易举：直接导出原始 HTML、CSS 或 JS 文件，移入你本地项目目录（例如 Next.js 的 components/ 文件夹、Astro 的 src/components/ 或静态 Nginx 资源根目录），使用常规相对路径即可直接引用引入。'
        },
        {
          title: '静态资源整理与 Web 素材长期维护',
          text: '在现代 Web 工程中，规范管理静态资源至关重要。建议将导出的媒体素材按类别妥善归纳（如 /public/images、/src/styles），使用 LS Image Studio 将老旧臃肿的 PNG/JPEG 批量转换为高压缩率的 WebP 或 AVIF，并将关键小图标直接内联为 SVG 以减少网络并发开销。'
        }
      ]
    },
    {
      id: 'deployment',
      title: '部署',
      articles: [
        {
          title: '纯静态优先的部署架构哲学',
          text: 'Lade Stack 坚定倡导“静态优先”的现代 Web 架构。将页面预编译为纯净的 HTML、现代 CSS 与无冗余的原生 JS，能够彻底杜绝服务器端运行时注入风险，将云托管开支压缩为零，并享受全球边缘 CDN 带来的毫秒级缓存响应。本技术文档及平台核心站点均基于 Astro 5 静态架构构建，正是该理念的最佳实践。'
        },
        {
          title: '生产发布前的技术校验清单',
          text: '在将 Web 工程推向生产环境前，建议对照此清单核验：1. 检验 HTML 语义合规性，确保所有 <img> 标签均显式配置了 alt、width 与 height 属性；2. 验证配色对比度满足 WCAG AA 可访问性标准；3. 审计 JS 打包体积，避免引入无意义的框架水合开销；4. 运行 Lighthouse 自动化测试，确保各项指标达到极致满分。'
        },
        {
          title: '一键部署至 Vercel、Cloudflare 与 Netlify',
          text: '借助现代工具构建的纯静态站点可以零门槛分发到顶级云平台。在 Vercel 绑定 Git 仓库即可实现零配置即时部署；在 Cloudflare Pages 中只需指定构建命令（npm run build）与产物路径（dist）；在 Netlify 拖拽 dist 目录或关联 Webhook 即可上线。各大平台均提供全球边缘 CDN 分发与免费自动 SSL 证书。'
        },
        {
          title: '环境变量规范与生产构建优化',
          text: '在构建正式交付应用时，使用 .env 环境变量将配置与业务逻辑彻底解耦。对于纯静态编译场景，请确保公开变量遵循框架的前缀约定（如 Astro 中的 PUBLIC_ 前缀）。配置生产构建参数以实现 HTML 极致压缩、CSS 合并内联以及 XML 站点地图（sitemap）的自动生成。'
        },
        {
          title: 'Core Web Vitals 核心网页指标满分策略',
          text: '冲刺顶级 Core Web Vitals 依赖有预谋的架构设计：消除关键渲染阻塞资源，将首次内容绘制（FCP）压制在 0.8 秒以内；为所有异步加载的图片和横幅容器预留占位尺寸，将累积布局偏移（CLS）锁定为 0.00；预加载关键英文字体与首屏大图，最小化最大内容绘制（LCP）耗时。'
        },
        {
          title: '生产环境常见问题与排错方案',
          text: '排查线上部署常见故障：1. 样式或图片 404：检查构建配置中的 base 路径是否与服务子目录匹配，静态资源是否采用了稳健的相对路径；2. 单页路由刷新报错 404：确认托管平台是否配置了重写规则以支持客户端路由；3. 内容更新滞后：检查静态资源的 Cache-Control 缓存响应头是否配置合理。'
        }
      ]
    }
  ],
  docsChangelog: [
    {
      v: 'v2.4.0',
      date: '2026-08-20',
      text: '采用 Astro 5 纯静态架构全面重构，原生支持 6 种主流语言，彻底剥离客户端框架水合负担，实现全量 Lighthouse 满分表现。'
    },
    {
      v: 'v2.3.0',
      date: '2024-11-30',
      text: '推出 Documentation AI 公测预览版，并上线 API Testing Platform 交互式接口合集功能以供可视化接口调试。'
    },
    {
      v: 'v2.0.0',
      date: '2024-06-01',
      text: 'CodeEnhance AI 正式发布，提供实时代码编辑、免刷新 DOM 预览沙箱以及基于 AST 语法树的一键智能重构能力。'
    },
    {
      v: 'v1.5.0',
      date: '2024-03-20',
      text: 'Swift Resume 简历构建器上线，提供针对 ATS 系统优化的排版模板、实时排版预览与纯客户端矢量 PDF 瞬间生成。'
    },
    {
      v: 'v1.2.0',
      date: '2023-09-01',
      text: 'LS Image Studio 正式发布，提供保护隐私的本地批量压缩、现代格式转换（PNG/JPEG/WebP/AVIF）与图片尺寸智能缩放。'
    },
    {
      v: 'v1.0.0',
      date: '2023-06-10',
      text: 'LS PDF Tools 正式发布，标志着一系列以纯浏览器客户端离线处理、零数据上传为核心理念的生产力工具集统一成型。'
    }
  ],
  timeline: [
    {
      year: '2020',
      title: '个人工具箱的起点',
      text: '在印度开始构建专为个人开发工作流打造的实用工具——聚焦 PDF 离线处理、图像压缩和代码辅助工具，旨在消除日常工程工作流中繁琐的重复劳动。'
    },
    {
      year: '2022',
      title: 'Lade Stack 品牌确立',
      text: '将分散的实用工具整合至 Lade Stack 统一品牌之下，建立起凝聚一体的设计系统、共享技术架构，并确立了为全球开发者永久免费提供高效工具的核心承诺。'
    },
    {
      year: '2024',
      title: '迈向 AI 驱动生态',
      text: '随着 CodeEnhance AI 与实时代码分析工具的推出，平台全面拓展至智能化工作流，并发布涵盖 RAG 架构、全栈开发与现代云原生部署的深度技术指南。'
    },
    {
      year: '2026',
      title: '纯粹的 Astro 静态架构重构',
      text: '采用 Astro 5、原生 TypeScript 与 Tailwind CSS 进行了纯静态架构重写——达成客户端零运行时开销、原生多语言无缝切换与 Lighthouse 满分 100/100 的极致性能。'
    }
  ],
  aboutStats: ['创立', '生产级工具', '开发者', '永远免费'],
  storyExtra: '横跨 AI 系统、Web 开发和体验设计的多面手工程师兼设计师，做的工具只有一个目标：让每位创作者都拥有初创公司般的速度，而且分文不花。',
  aboutPage: {
    metaTitle: '关于 Girish Lade — 创始人、软件架构师与 UI/UX 开发者',
    metaDescription: 'Girish Lade 的个人履历、工程哲学、技术生态与成长历程 —— UI/UX 开发者、软件工程师，Lade Stack 创始人兼首席软件架构师。',
    metaKeywords: 'Girish Lade, Lade Stack 创始人, UI/UX 开发者, 软件工程师, 生成式 AI, 云原生架构, 工程哲学',
    imageAlt: 'Girish Lade - 创始人兼首席软件架构师',
    heroEyebrow: '关于构建者',
    heroTitle: '融合设计、工程与 AI 的交汇之作',
    heroSubtitle: '我是 Girish Lade —— 一名身在印度的 UI/UX 开发者、软件工程师与产品构建者。我设计并构建实用的软件产品、开发者效率工具与 AI 驱动系统，致力于消除开发摩擦，简化复杂的工作流。',
    founderRole: '创始人兼首席软件架构师',
    founderLocation: '印度',
    founderBio1: '我的思考贯穿软件工程的整个生命周期 —— 从最前沿的交互设计与用户体验，到云原生系统、后端架构以及生成式 AI 的务实工程化落地。',
    founderBio2: '我的出发点非常纯粹：无论底层的系统与逻辑多么复杂，交付给用户的软件都应当优雅、实用且毫无使用负担。',
    storyEyebrow: '关于自我',
    storyTitle: '一位构建者的进化之路',
    storyParagraphs: [
      '我始终对事物表象之下的底层运作机制怀有强烈的好奇心，并随之产生亲手将它们创造出来的冲动。对我而言，软件开发从不是在视觉设计师与后端工程师之间做单选题。我的技术历程自然地穿透了整个技术光谱：从视觉设计与前端交互界面启程，深入到后端架构与数据库内核，探索云基础设施与 DevOps 自动化，如今聚焦于生成式 AI 与端到端全链路产品工程。',
      '我并不将这些领域视作孤立的技能，而是视作同一种工程心智的不同面向。UI/UX 的经验让我能够深度共情屏幕前的每一位使用者 —— 敏锐察觉认知摩擦产生于何处、界面交互是否直觉自然，以及为什么一个操作需要三次点击而不是一次搞定。与此同时，扎实的软件工程底蕴确保了界面背后的系统足够健壮、易于维护、响应敏捷且架构清晰。',
      '当生成式 AI 浪潮到来时，这并非我技术道路的旁支，而是自然的放大器。AI 带来了前所未有的全新人机交互范式，但前提是它必须以明确的业务目的为导向，并深深扎根于实用的产品工程实践之中。'
    ],
    whatBuildEyebrow: '核心产出',
    whatBuildTitle: '消除工作流阻力的实用软件',
    whatBuildSubtitle: '我专注于打造具备生产级品质的实用软件，而非堆砌纯理论性的原型玩具。每当我评估一个项目或产品创意时，首先问的问题始终是：它究竟解决了什么真实存在的瓶颈？它如何让用户的日常工作变得更快、更直观？',
    whatBuildItems: [
      {
        num: '01 / 开发者效率工具',
        title: 'AI 驱动的开发工具',
        desc: '智能代码助手、实时代码增强引擎与自动化 API 测试平台，旨在替工程师扛下繁重重复的机械劳动，大幅提升功能交付速度。'
      },
      {
        num: '02 / SAAS 与协同生态',
        title: '协作式云与安全文件系统',
        desc: '安全匿名的临时文件分发工具、文档格式转换套件与轻量级云服务，坚守隐私第一、客户端零臃肿与极速传输的准则。'
      },
      {
        num: '03 / 应用平台',
        title: '现代高性能 Web 应用',
        desc: '采用语义化 HTML、无障碍交互状态与客户端零运行时架构打造的极速 Web 界面与响应式平台。'
      },
      {
        num: '04 / 工作流自动化',
        title: 'AI 协同工作流管线',
        desc: '将非结构化数据、文档智能生成与日常开发任务有机串联的智能自动化层，在人工监督下平稳顺畅流转。'
      }
    ],
    craftEyebrow: '贯通之道',
    craftTitle: '为什么 UI/UX 与工程技术不可分割',
    craftParagraphs: [
      '在传统团队中，设计与工程往往隔着一条鸿沟 —— 设计师交付静态画板，工程师依样画葫芦编写代码。我的工作模式截然不同。在我眼中，设计绝不是工程完成后刷上的一层皮相油漆，工程也绝非不可见的琐碎实现细节。',
      '用户体验会直接塑造底层架构：一个要求毫秒级实时响应的界面，必须依赖事件驱动或乐观更新机制；反过来，底层架构深刻决定了最终的用户体验：混乱的 API 设计、缓慢的数据库慢查询或庞大臃肿的客户端打包体积，足以毁掉任何一张精美的 Figma 蓝图。',
      '性能是用户体验的核心前提，可访问性是工程品质的试金石。当设计与工程被视作同一门统一的学科来对待时，最终诞生的软件自然更精炼、更稳定，且极具亲和力。'
    ],
    aiEyebrow: '生成式 AI',
    aiTitle: '扎根于真实工作流的务实机器智能',
    aiParagraphs: [
      '生成式 AI 是我目前探索最为深入的核心技术阵地之一。然而，我的目光始终聚焦在实际效用而非盲目追逐概念。我不热衷于搭建浮于表面的 API 套壳产品，更不会宣称 AI 能在一夜之间解决一切问题。',
      '相反，我更关注生成式 AI 如何从根本上重构人机交互的未来：'
    ],
    aiPillars: [
      {
        title: '上下文感知辅助',
        text: '将大语言模型深度嵌入代码查看器与开发工具中，实现就地解释、即时重构与逻辑静态审查。'
      },
      {
        title: '智能工作流自动化',
        text: '用结构化的 AI 流水线替代多步骤的人工繁琐流程，在工程师把关的前提下自动提取、转换并校验复杂数据。'
      },
      {
        title: '语义化人机界面',
        text: '设计能够动态适应用户真实意图的交互界面，将人类自然语言直接转换为严谨确定的软件系统指令。'
      },
      {
        title: '以工程师为中心的工具链',
        text: '构建自动生成项目文档、测试脚手架与模式校验的实用工具，让工程师能把充沛的精力投入到富有创造力的系统架构上。'
      }
    ],
    philosophyEyebrow: '工程哲学',
    philosophyTitle: '指引我构建一切的核心准则',
    philosophyItems: [
      {
        title: '化繁为简：以克制的界面驭复杂的机器',
        text: '高水准工程的核心体现，在于直面本质上极其复杂的问题（分布式数据同步、神经网络推理、流式文件编码），并将其提炼为直观、可预测且优雅从容的操作界面。'
      },
      {
        title: '极力降低用户的认知负担',
        text: '任何工具都必须珍视使用者的脑力精力。优秀的软件应当将配置摩擦降至最低，凡是系统能自动完成的工作，绝不强迫工程师在脑海中死记硬背。'
      },
      {
        title: 'AI 必须凭借真才实学立足管线',
        text: '人工智能绝不该作为噱头强行加入。它只应出现在确定性逻辑力有不逮的地方，并为使用者带来确凿、可验证的生产力倍增。'
      },
      {
        title: '速度与性能是绝不妥协的底线',
        text: '亚秒级响应速度、超轻量的体积包与干净的语义化标记不是锦上添花，而是定义产品质量与赢得信任的基石。'
      },
      {
        title: '清晰干净的架构赋予持续迭代的生命力',
        text: '易于维护的代码库、严谨的类型系统与边界清晰的组件模块，能够让产品在高速进化中保持敏捷，从容避开致命的技术负债陷阱。'
      }
    ],
    workEyebrow: '工作方法',
    workTitle: '系统化的产品打磨历程',
    workSubtitle: '无论是打磨一款开源的开发者工具，还是构思一套云端服务，我都遵循严谨且不断迭代的实施流程：',
    workSteps: [
      {
        step: '01',
        title: '拆解问题本质',
        desc: '定位核心瓶颈。剔除表面化的主观假设，探求用户在当前场景下真正亟待解决的底层痛点。'
      },
      {
        step: '02',
        title: '设计交互旅程与流转体验',
        desc: '梳理出从用户意图到预期产出之间的最短路径。精心绘制交互状态、全键盘操作模式与人体工学响应布局。'
      },
      {
        step: '03',
        title: '筑牢底层系统架构',
        desc: '为特定场景匹配最轻巧、最可靠的技术栈。构建类型安全的 Schema 定义、API 契约与数据库实体模型。'
      },
      {
        step: '04',
        title: '在关键链路务实融入 AI',
        desc: '在能够显著免除人工操作的关键环节接入机器智能，并辅以严密的边界限制与兜底机制确保运行稳定。'
      },
      {
        step: '05',
        title: '基准压测、性能优化与微雕细节',
        desc: '审查代码打包体积，监测 Lighthouse 各项核心指标，全方位覆盖边界用例，并基于真实反馈持续打磨微交互体验。'
      }
    ],
    ecosystemEyebrow: '技术生态',
    ecosystemTitle: '贯穿全栈的技术广度',
    ecosystemSubtitle: '我的技术储备横跨多个工程领域，能够将一个初始构想从 Figma 中的视觉草图完整落地为生产环境中的云端基础设施。',
    ecosystemGroups: [
      {
        label: '前端与客户端应用',
        desc: '基于现代类型安全体系，工程化构建响应迅速、兼具高度无障碍特性的 Web 界面与跨平台移动体验。',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Flutter']
      },
      {
        label: '设计系统与创意工具',
        desc: '全方位构建设计系统、用户旅程图景、矢量资产、3D 视觉元素与高保真交互原型。',
        tags: ['Figma', 'Framer', 'Adobe Illustrator', 'Adobe Photoshop', 'Blender']
      },
      {
        label: '后端系统与数据库',
        desc: '构建 RESTful 与事件驱动型 API 接口、严谨的关系型数据库架构与具备高伸缩性的文档型存储。',
        tags: ['Node.js', 'MongoDB', 'MySQL', 'Oracle']
      },
      {
        label: '云基础设施与 DevOps',
        desc: '运维自动化 CI/CD 构建部署流水线、容器化运行时环境以及跨区域的高可用云架构。',
        tags: ['AWS', 'Google Cloud', 'Docker', 'Git']
      },
      {
        label: '3D 与交互式图形系统',
        desc: '探索空间计算设计、实时图形渲染管线与沉浸式虚拟交互环境。',
        tags: ['Unity', 'Unreal Engine']
      }
    ],
    learningEyebrow: '技术探索',
    learningTitle: '持续学习与技能边界拓宽',
    learningSubtitle: '技术浪潮奔涌向前，我的工程师武器库亦步亦趋。我始终保持着刻意学习的习惯，每当涌现出能够构建出更强健、更卓越产品的新技术时，我都会深度探究：',
    learningCards: [
      {
        badge: '深度研习',
        title: 'Kotlin 与移动原生开发',
        desc: '深入 Android 原生端生态与 Kotlin 现代范式，带来软硬件高度融合的丝滑移动端体验。'
      },
      {
        badge: '深度研习',
        title: '前沿生成式 AI',
        desc: '深入研究自主智能体范式（Agentic Patterns）、检索增强生成（RAG）与高效模型编排体系。'
      },
      {
        badge: '深度研习',
        title: '云原生与微服务架构',
        desc: '探索高并发分布式微服务、Serverless 无服务器范式与边缘计算网络，打造弹性伸缩软件基础设施。'
      }
    ],
    stackEyebrow: '核心底座',
    stackTitle: '核心技术栈',
    stackSubtitle: '驱动 Lade Stack 运转的核心技术栈经过深思熟虑的甄选，旨在实现零运行时水合负担、静态预渲染、坚不可摧的类型安全与极致迅捷的交互反馈。',
    journeyEyebrow: '里程碑',
    journeyTitle: '成长历程',
    futureEyebrow: '远景方向',
    futureTitle: '构筑真正赋予创作者强大杠杆的软件',
    futureBody: '展望未来，我的工作重心始终扎根于打造充满创造力的 SaaS AI 工具、协同文件系统以及直击痛点的开发者基础设施，将非凡的体验与严谨的工程熔铸于一炉。',
    futureQuote: '“我之所以热爱构建软件，是因为享受将盘根错节的技术难关驯服为清爽易用工具的过程，赋予全球开发者与创作者真正的杠杆。卓越的工程与卓越的设计，本就应当相得益彰。”',
    futureAuthor: '— Girish Lade'
  },
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
