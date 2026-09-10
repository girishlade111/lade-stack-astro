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
