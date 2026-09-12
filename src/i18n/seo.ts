import type { SupportedLocale } from './config';

export interface PageSEO {
  title: string;
  description: string;
  keywords: string;
  ogTitle?: string;
  ogDescription?: string;
  breadcrumbName: string;
}

export type SEOPageKey =
  | 'home'
  | 'about'
  | 'apps'
  | 'products'
  | 'aiCodeViewer'
  | 'docs'
  | 'support'
  | 'contact'
  | 'privacy'
  | 'terms'
  | 'blogListing';

export const seoData: Record<SupportedLocale, Record<SEOPageKey, PageSEO>> = {
  "en": {
    "home": {
      "title": "Free AI Developer Tools & Coding Utilities | Lade Stack",
      "description": "Free, privacy-first developer tools for modern engineering workflows. Review code with AI, test APIs, and run client-side utilities without signup.",
      "keywords": "free AI developer tools browser, developer tools, code review AI, API testing, coding utilities",
      "ogTitle": "Free AI Developer Tools & Coding Utilities | Lade Stack",
      "ogDescription": "Free, privacy-first developer tools for modern engineering workflows. Review code with AI, test APIs, and run client-side utilities without signup.",
      "breadcrumbName": "Home"
    },
    "about": {
      "title": "About Girish Lade — Software Architect | Lade Stack",
      "description": "Learn about Girish Lade, UI/UX developer and lead software architect behind Lade Stack. Discover engineering principles and our developer tooling vision.",
      "keywords": "Girish Lade software architect founder, Girish Lade, Lade Stack founder, software architect, UI UX developer",
      "ogTitle": "About Girish Lade — Software Architect | Lade Stack",
      "ogDescription": "Learn about Girish Lade, UI/UX developer and lead software architect behind Lade Stack. Discover engineering principles and our developer tooling vision.",
      "breadcrumbName": "About"
    },
    "apps": {
      "title": "Developer Tools Gallery — Free Web Utilities | Lade Stack",
      "description": "Browse free browser-based developer utilities: CodeEnhance AI, client-side PDF tools, image optimizer, and resume builder. Launch instantly in seconds.",
      "keywords": "free developer web utilities gallery, apps gallery, free developer tools, PDF utilities, image studio",
      "ogTitle": "Developer Tools Gallery — Free Web Utilities | Lade Stack",
      "ogDescription": "Browse free browser-based developer utilities: CodeEnhance AI, client-side PDF tools, image optimizer, and resume builder. Launch instantly in seconds.",
      "breadcrumbName": "Apps Gallery"
    },
    "products": {
      "title": "Flagship AI Developer Products & Platforms | Lade Stack",
      "description": "Explore production-ready AI developer products: CodeEnhance AI, visual API testing, website building, and file security. Accelerate delivery today.",
      "keywords": "flagship AI developer products platform, developer products, CodeEnhance AI, API testing platform, AI web builder",
      "ogTitle": "Flagship AI Developer Products & Platforms | Lade Stack",
      "ogDescription": "Explore production-ready AI developer products: CodeEnhance AI, visual API testing, website building, and file security. Accelerate delivery today.",
      "breadcrumbName": "Products"
    },
    "aiCodeViewer": {
      "title": "AI Code Review Tool — CodeEnhance AI Sandbox | Lade Stack",
      "description": "Inspect, debug, and optimize HTML, CSS, and JavaScript with instant AI code review and live browser preview. Free forever with zero registration required.",
      "keywords": "free AI code review tool browser, CodeEnhance AI, code review tool, AI linter, code optimizer",
      "ogTitle": "AI Code Review Tool — CodeEnhance AI Sandbox | Lade Stack",
      "ogDescription": "Inspect, debug, and optimize HTML, CSS, and JavaScript with instant AI code review and live browser preview. Free forever with zero registration required.",
      "breadcrumbName": "CodeEnhance AI"
    },
    "docs": {
      "title": "Developer Documentation & API Guides | Lade Stack",
      "description": "Explore developer guides, API specifications, Git export workflows, and deployment checklists for Lade Stack utilities. Start building with our docs.",
      "keywords": "developer documentation and API reference, Lade Stack documentation, developer guides, API reference, CodeEnhance AI guide",
      "ogTitle": "Developer Documentation & API Guides | Lade Stack",
      "ogDescription": "Explore developer guides, API specifications, Git export workflows, and deployment checklists for Lade Stack utilities. Start building with our docs.",
      "breadcrumbName": "Documentation"
    },
    "support": {
      "title": "Support Center & Developer Tool FAQs | Lade Stack",
      "description": "Find verified solutions, troubleshooting guides, and answers to common developer tool questions. Reach our engineering team for fast technical assistance.",
      "keywords": "developer support center and tool FAQs, Lade Stack support, troubleshooting guides, developer FAQs, client side help",
      "ogTitle": "Support Center & Developer Tool FAQs | Lade Stack",
      "ogDescription": "Find verified solutions, troubleshooting guides, and answers to common developer tool questions. Reach our engineering team for fast technical assistance.",
      "breadcrumbName": "Support"
    },
    "contact": {
      "title": "Contact Engineering & Technical Support | Lade Stack",
      "description": "Contact Girish Lade and the core engineering team. Submit feature suggestions, report bugs, or discuss technical collaborations. We reply within 24 hours.",
      "keywords": "contact developer engineering team direct, contact Lade Stack, developer feedback, feature requests, technical support",
      "ogTitle": "Contact Engineering & Technical Support | Lade Stack",
      "ogDescription": "Contact Girish Lade and the core engineering team. Submit feature suggestions, report bugs, or discuss technical collaborations. We reply within 24 hours.",
      "breadcrumbName": "Contact"
    },
    "privacy": {
      "title": "Privacy Policy — In-Browser Data Safety | Lade Stack",
      "description": "Read our client-side data protection standards and zero-retention policy. All files remain in your local browser sandbox. Review our privacy terms today.",
      "keywords": "client side data privacy policy web, privacy policy, zero retention, in browser data security, developer privacy",
      "ogTitle": "Privacy Policy — In-Browser Data Safety | Lade Stack",
      "ogDescription": "Read our client-side data protection standards and zero-retention policy. All files remain in your local browser sandbox. Review our privacy terms today.",
      "breadcrumbName": "Privacy Policy"
    },
    "terms": {
      "title": "Terms of Service — Free-Use License | Lade Stack",
      "description": "Review Lade Stack terms of service and our perpetual free-use license for personal and commercial developer workflows. Understand our fair use guidelines.",
      "keywords": "free commercial developer license terms, terms of service, free use license, acceptable use policy, developer license",
      "ogTitle": "Terms of Service — Free-Use License | Lade Stack",
      "ogDescription": "Review Lade Stack terms of service and our perpetual free-use license for personal and commercial developer workflows. Understand our fair use guidelines.",
      "breadcrumbName": "Terms of Service"
    },
    "blogListing": {
      "title": "Engineering & AI Development Tutorials | Lade Stack",
      "description": "Explore 27 in-depth engineering tutorials on AI development, RAG architecture, MLOps deployment, and SaaS scalability. Read practical guides by builders.",
      "keywords": "AI development tutorials and engineering blog, engineering blog, AI development, RAG tutorials, MLOps guides, SaaS architecture",
      "ogTitle": "Engineering & AI Development Tutorials | Lade Stack",
      "ogDescription": "Explore 27 in-depth engineering tutorials on AI development, RAG architecture, MLOps deployment, and SaaS scalability. Read practical guides by builders.",
      "breadcrumbName": "Blog"
    }
  },
  "ru": {
    "home": {
      "title": "Инструменты разработки и ИИ-сервисы | Lade Stack",
      "description": "Бесплатная экосистема для веб-разработчиков: инспекция кода с ИИ, тестирование REST и GraphQL API, обработка файлов в браузере без регистрации и смс.",
      "keywords": "бесплатные инструменты разработки в браузере, аудит кода онлайн, тестирование API, веб-утилиты для разработчиков, ИИ для программистов",
      "ogTitle": "Инструменты разработки и ИИ-сервисы | Lade Stack",
      "ogDescription": "Бесплатная экосистема для веб-разработчиков: инспекция кода с ИИ, тестирование REST и GraphQL API, обработка файлов в браузере без регистрации и смс.",
      "breadcrumbName": "Главная"
    },
    "about": {
      "title": "О Гирише Ладе — Архитектор ПО и основатель | Lade Stack",
      "description": "История основателя Girish Lade, UI/UX инженера и ведущего архитектора платформы Lade Stack. Инженерные ценности, архитектура и дорожная карта систем.",
      "keywords": "Girish Lade ведущий архитектор ПО основатель, основатель Lade Stack, UI UX инженер, системная архитектура, генеративный ИИ",
      "ogTitle": "О Гирише Ладе — Архитектор ПО и основатель | Lade Stack",
      "ogDescription": "История основателя Girish Lade, UI/UX инженера и ведущего архитектора платформы Lade Stack. Инженерные ценности, архитектура и дорожная карта систем.",
      "breadcrumbName": "О нас"
    },
    "apps": {
      "title": "Каталог приложений — Утилиты для разработчиков | Lade Stack",
      "description": "Обзор бесплатных браузерных утилит: CodeEnhance AI, сжатие картинок, PDF-инструменты и конструктор резюме для инженеров. Запускайте сервисы за секунды.",
      "keywords": "каталог браузерных инструментов разработчика, утилиты для программистов, CodeEnhance AI, конвертер PDF онлайн, сжатие изображений",
      "ogTitle": "Каталог приложений — Утилиты для разработчиков | Lade Stack",
      "ogDescription": "Обзор бесплатных браузерных утилит: CodeEnhance AI, сжатие картинок, PDF-инструменты и конструктор резюме для инженеров. Запускайте сервисы за секунды.",
      "breadcrumbName": "Каталог приложений"
    },
    "products": {
      "title": "Флагманские продукты для разработки с ИИ | Lade Stack",
      "description": "Профессиональные решения автоматизации разработки: CodeEnhance AI, тестирование REST/GraphQL API, генератор сайтов и защита файлов. Ускорьте релизы.",
      "keywords": "флагманские продукты разработки с ИИ платформа, проверка кода онлайн, среда тестирования API, веб-конструктор ИИ, защита файлов",
      "ogTitle": "Флагманские продукты для разработки с ИИ | Lade Stack",
      "ogDescription": "Профессиональные решения автоматизации разработки: CodeEnhance AI, тестирование REST/GraphQL API, генератор сайтов и защита файлов. Ускорьте релизы.",
      "breadcrumbName": "Продукты"
    },
    "aiCodeViewer": {
      "title": "CodeEnhance AI — Онлайн аудит и линтер кода | Lade Stack",
      "description": "Анализируйте, исправляйте и оптимизируйте HTML, CSS и JavaScript с помощью ИИ и живого интерактивного предпросмотра в браузере. Бесплатно без аккаунта.",
      "keywords": "бесплатный ИИ аудит кода в браузере, CodeEnhance AI, линтер фронтенда, рефакторинг кода онлайн, песочница с предпросмотром",
      "ogTitle": "CodeEnhance AI — Онлайн аудит и линтер кода | Lade Stack",
      "ogDescription": "Анализируйте, исправляйте и оптимизируйте HTML, CSS и JavaScript с помощью ИИ и живого интерактивного предпросмотра в браузере. Бесплатно без аккаунта.",
      "breadcrumbName": "CodeEnhance AI"
    },
    "docs": {
      "title": "Техническая документация и справочник API | Lade Stack",
      "description": "Полные руководства разработчика, спецификации API-интерфейсов, интеграция с GitHub и чеклисты деплоя на Vercel для сервисов Lade Stack. Читайте гайды.",
      "keywords": "техническая документация и спецификации API разработчика, руководства Lade Stack, справочник API, инструкция CodeEnhance AI, деплой Vercel",
      "ogTitle": "Техническая документация и справочник API | Lade Stack",
      "ogDescription": "Полные руководства разработчика, спецификации API-интерфейсов, интеграция с GitHub и чеклисты деплоя на Vercel для сервисов Lade Stack. Читайте гайды.",
      "breadcrumbName": "Документация"
    },
    "support": {
      "title": "Центр поддержки — Помощь разработчикам и FAQ | Lade Stack",
      "description": "Ответы на популярные вопросы, инструкции по устранению неполадок и прямая техническая поддержка от команды инженеров Lade Stack. Решаем проблемы быстро.",
      "keywords": "центр поддержки разработчиков и частые вопросы, устранение неполадок, поддержка CodeEnhance AI, клиентская обработка, помощь инженеров",
      "ogTitle": "Центр поддержки — Помощь разработчикам и FAQ | Lade Stack",
      "ogDescription": "Ответы на популярные вопросы, инструкции по устранению неполадок и прямая техническая поддержка от команды инженеров Lade Stack. Решаем проблемы быстро.",
      "breadcrumbName": "Поддержка"
    },
    "contact": {
      "title": "Контакты инженерной команды и партнерство | Lade Stack",
      "description": "Напишите основателю Girish Lade и инженерной команде. Предлагайте идеи, сообщайте об ошибках или обсуждайте интеграции. Отвечаем в течение 24 часов.",
      "keywords": "связаться с инженерной командой разработчиков напрямую, контакты Lade Stack, написать Girish Lade, обратная связь, техническое партнерство",
      "ogTitle": "Контакты инженерной команды и партнерство | Lade Stack",
      "ogDescription": "Напишите основателю Girish Lade и инженерной команде. Предлагайте идеи, сообщайте об ошибках или обсуждайте интеграции. Отвечаем в течение 24 часов.",
      "breadcrumbName": "Контакты"
    },
    "privacy": {
      "title": "Политика конфиденциальности — Защита данных | Lade Stack",
      "description": "Стандарты безопасности Lade Stack: локальная обработка файлов в песочнице браузера и нулевое сохранение кода на серверах. Узнайте о защите ваших данных.",
      "keywords": "политика конфиденциальности локальной обработки данных, безопасность данных разработчиков, клиентская песочница, защита кода, приватность",
      "ogTitle": "Политика конфиденциальности — Защита данных | Lade Stack",
      "ogDescription": "Стандарты безопасности Lade Stack: локальная обработка файлов в песочнице браузера и нулевое сохранение кода на серверах. Узнайте о защите ваших данных.",
      "breadcrumbName": "Конфиденциальность"
    },
    "terms": {
      "title": "Условия обслуживания — Бесплатная лицензия | Lade Stack",
      "description": "Условия использования сервисов Lade Stack: бессрочная бесплатная лицензия для коммерческих и личных проектов разработки. Изучите правила использования.",
      "keywords": "условия бесплатной коммерческой лицензии разработчика, условия использования, правила платформы, бесплатная лицензия ПО, правила API",
      "ogTitle": "Условия обслуживания — Бесплатная лицензия | Lade Stack",
      "ogDescription": "Условия использования сервисов Lade Stack: бессрочная бесплатная лицензия для коммерческих и личных проектов разработки. Изучите правила использования.",
      "breadcrumbName": "Условия использования"
    },
    "blogListing": {
      "title": "Блог о разработке с ИИ и SaaS-архитектуре | Lade Stack",
      "description": "27 подробных практических уроков по ИИ-разработке, поисковой архитектуре RAG, развертыванию MLOps и масштабированию SaaS. Читайте статьи инженеров.",
      "keywords": "уроки разработки с ИИ и инженерный блог, блог программистов, архитектура RAG, развертывание MLOps, масштабирование SaaS",
      "ogTitle": "Блог о разработке с ИИ и SaaS-архитектуре | Lade Stack",
      "ogDescription": "27 подробных практических уроков по ИИ-разработке, поисковой архитектуре RAG, развертыванию MLOps и масштабированию SaaS. Читайте статьи инженеров.",
      "breadcrumbName": "Блог"
    }
  },
  "zh": {
    "home": {
      "title": "免费 AI 开发者工具与在线编程套件 | Lade Stack",
      "description": "由软件架构师 Girish Lade 倾力打造的纯浏览器端现代开发者平台。集成了高吞吐量实时 AI 前端代码审查、REST 与 GraphQL API 接口自动化测试、本地离线 PDF 格式转换与免损图像压缩套件。全站坚持端到端本地沙箱计算与零数据回传，免注册永久免费，即刻探索高效云原生编程工具。",
      "keywords": "纯浏览器免费AI开发者工具箱, 开发者生产力工具, AI前端代码审查, API接口调试, 本地PDF处理",
      "ogTitle": "免费 AI 开发者工具与在线编程套件 | Lade Stack",
      "ogDescription": "由软件架构师 Girish Lade 倾力打造的纯浏览器端现代开发者平台。集成了高吞吐量实时 AI 前端代码审查、REST 与 GraphQL API 接口自动化测试、本地离线 PDF 格式转换与免损图像压缩套件。全站坚持端到端本地沙箱计算与零数据回传，免注册永久免费，即刻探索高效云原生编程工具。",
      "breadcrumbName": "首页"
    },
    "about": {
      "title": "关于 Girish Lade — 创始人与首席架构师 | Lade Stack",
      "description": "深入了解 Lade Stack 创始人兼首席软件架构师 Girish Lade 的完整工程实践经历与技术哲学。探索我们如何将顶尖 UI/UX 交互直觉、稳健云原生高可用架构设计与实用生成式 AI 系统无缝结合，彻底消除日常编码中的繁琐摩擦与维护阻碍。欢迎查阅创始人完整背景与生态演进蓝图。",
      "keywords": "Girish Lade首席软件架构师创始人, Lade Stack创始人, UI UX开发者, 云原生系统架构, 生成式AI工程师",
      "ogTitle": "关于 Girish Lade — 创始人与首席架构师 | Lade Stack",
      "ogDescription": "深入了解 Lade Stack 创始人兼首席软件架构师 Girish Lade 的完整工程实践经历与技术哲学。探索我们如何将顶尖 UI/UX 交互直觉、稳健云原生高可用架构设计与实用生成式 AI 系统无缝结合，彻底消除日常编码中的繁琐摩擦与维护阻碍。欢迎查阅创始人完整背景与生态演进蓝图。",
      "breadcrumbName": "关于我们"
    },
    "apps": {
      "title": "应用工具库 — 免费开发者轻量实用工具箱 | Lade Stack",
      "description": "探索 Lade Stack 浏览器端轻量级实用开发工具库：包含 CodeEnhance AI 前端语法检查、纯本地离线 PDF 合并分割转图、图片极速智能压缩以及工程师专业求职简历生成器。所有工具均在本地浏览器沙箱中即时启动，免配置、免安装、零服务器依赖，即刻在浏览器中体验极速生产力飞跃。",
      "keywords": "免费浏览器端开发者实用工具箱, 开发者应用库, CodeEnhance AI, 在线PDF工具, 图像无损压缩",
      "ogTitle": "应用工具库 — 免费开发者轻量实用工具箱 | Lade Stack",
      "ogDescription": "探索 Lade Stack 浏览器端轻量级实用开发工具库：包含 CodeEnhance AI 前端语法检查、纯本地离线 PDF 合并分割转图、图片极速智能压缩以及工程师专业求职简历生成器。所有工具均在本地浏览器沙箱中即时启动，免配置、免安装、零服务器依赖，即刻在浏览器中体验极速生产力飞跃。",
      "breadcrumbName": "应用库"
    },
    "products": {
      "title": "核心旗舰级 AI 开发者工具与平台矩阵 | Lade Stack",
      "description": "探索面向工业级生产交付的 Lade Stack 核心旗舰开发者产品矩阵：CodeEnhance AI 前端代码优化器、可视化 API 接口自动化测试工作台、AI 响应式网页快速构建器与高安全配置加密分享枢纽。有效自动化大量机械重复编码任务并提升团队交付效率，今天即可在浏览器立即开始构建。",
      "keywords": "核心旗舰级AI开发者工具矩阵, 生产级开发产品, CodeEnhance AI, API自动化测试平台, AI网站构建器",
      "ogTitle": "核心旗舰级 AI 开发者工具与平台矩阵 | Lade Stack",
      "ogDescription": "探索面向工业级生产交付的 Lade Stack 核心旗舰开发者产品矩阵：CodeEnhance AI 前端代码优化器、可视化 API 接口自动化测试工作台、AI 响应式网页快速构建器与高安全配置加密分享枢纽。有效自动化大量机械重复编码任务并提升团队交付效率，今天即可在浏览器立即开始构建。",
      "breadcrumbName": "产品"
    },
    "aiCodeViewer": {
      "title": "AI 代码审查工具 — CodeEnhance 优化沙箱 | Lade Stack",
      "description": "借助毫秒级 AI 实时推理建议与即时双向沙箱预览，极速审查、分析、优化并重构 HTML、CSS 以及 JavaScript 前端工程代码。精准识别语法漏洞与样式冗余，提供符合现代标准的 AST 语法树重构建议。全功能永久免费开放，零门槛无需注册账号，马上开始在线审查优化与代码重构实践。",
      "keywords": "免费纯前端AI代码审查沙箱, CodeEnhance AI, 在线代码审查, 前端代码优化器, 实时预览沙箱",
      "ogTitle": "AI 代码审查工具 — CodeEnhance 优化沙箱 | Lade Stack",
      "ogDescription": "借助毫秒级 AI 实时推理建议与即时双向沙箱预览，极速审查、分析、优化并重构 HTML、CSS 以及 JavaScript 前端工程代码。精准识别语法漏洞与样式冗余，提供符合现代标准的 AST 语法树重构建议。全功能永久免费开放，零门槛无需注册账号，马上开始在线审查优化与代码重构实践。",
      "breadcrumbName": "CodeEnhance AI"
    },
    "docs": {
      "title": "开发者文档 — 架构指南与 API 接口参考 | Lade Stack",
      "description": "查阅 Lade Stack 官方详尽技术文档体系：涵盖全套开发工具快速上手教程、标准化 REST 与 GraphQL API 数据契约规范、GitHub 自动化导出指南以及生产级 Vercel 部署验证清单。依托清晰完备的架构设计指南与工程操作手册，助您分步快速搭建高质量标准化现代研发工作流。",
      "keywords": "开发者架构文档与API接口参考指南, Lade Stack技术文档, 开发者指南, API参考规范, CodeEnhance使用手册",
      "ogTitle": "开发者文档 — 架构指南与 API 接口参考 | Lade Stack",
      "ogDescription": "查阅 Lade Stack 官方详尽技术文档体系：涵盖全套开发工具快速上手教程、标准化 REST 与 GraphQL API 数据契约规范、GitHub 自动化导出指南以及生产级 Vercel 部署验证清单。依托清晰完备的架构设计指南与工程操作手册，助您分步快速搭建高质量标准化现代研发工作流。",
      "breadcrumbName": "文档"
    },
    "support": {
      "title": "技术支持中心 — 常见问题与排错方案解答 | Lade Stack",
      "description": "快速检索经过严苛工程测试的问题解决方案、纯前端离线计算排错指南以及常见技术疑问解答。遇到系统使用障碍或 API 集成疑难时，可随时向驻场核心研发团队直接提交技术咨询，所有开发者工单均保证在 24 小时内由一线工程师亲自专业回复。点击获取权威官方技术排错支持与详尽完备的参考排障方案。",
      "keywords": "开发者技术支持中心与FAQ问答库, 故障排查手册, CodeEnhance帮助, 浏览器端离线处理, 工程师客服",
      "ogTitle": "技术支持中心 — 常见问题与排错方案解答 | Lade Stack",
      "ogDescription": "快速检索经过严苛工程测试的问题解决方案、纯前端离线计算排错指南以及常见技术疑问解答。遇到系统使用障碍或 API 集成疑难时，可随时向驻场核心研发团队直接提交技术咨询，所有开发者工单均保证在 24 小时内由一线工程师亲自专业回复。点击获取权威官方技术排错支持与详尽完备的参考排障方案。",
      "breadcrumbName": "支持中心"
    },
    "contact": {
      "title": "联系工程团队 — 需求反馈与技术生态合作 | Lade Stack",
      "description": "直接与创始人 Girish Lade 及核心工程研发团队建立直接对话通道。热忱欢迎提交创新功能建议、反馈系统缺陷漏洞、探讨企业私有化定制方案或商谈开源生态技术整合。我们高度重视全球开发者的真实反馈，所有咨询均承诺在 24 小时内迅速由核心技术成员回复。立即发送合作交流与反馈信息。",
      "keywords": "直接联系核心研发工程团队, 联系Lade Stack, 提交新功能建议, 漏洞缺陷报告, 技术合作咨询",
      "ogTitle": "联系工程团队 — 需求反馈与技术生态合作 | Lade Stack",
      "ogDescription": "直接与创始人 Girish Lade 及核心工程研发团队建立直接对话通道。热忱欢迎提交创新功能建议、反馈系统缺陷漏洞、探讨企业私有化定制方案或商谈开源生态技术整合。我们高度重视全球开发者的真实反馈，所有咨询均承诺在 24 小时内迅速由核心技术成员回复。立即发送合作交流与反馈信息。",
      "breadcrumbName": "联系我们"
    },
    "privacy": {
      "title": "隐私政策 — 纯浏览器本地离线数据安全 | Lade Stack",
      "description": "全面阅读 Lade Stack 平台用户隐私安全条款与数据保护承诺：所有代码文件、API 配置与媒体资产均严格在您本地浏览器内存沙箱中安全运行，平台始终恪守零云端存储、零数据保留与零内容转录原则，从底层彻底杜绝源代码外泄风险。安心编写每一行代码，欢迎查阅完整隐私保护准则与安全规范。",
      "keywords": "纯浏览器端本地离线数据隐私政策, 开发者数据安全, 零数据保留策略, 代码沙箱处理, 商业隐私防护",
      "ogTitle": "隐私政策 — 纯浏览器本地离线数据安全 | Lade Stack",
      "ogDescription": "全面阅读 Lade Stack 平台用户隐私安全条款与数据保护承诺：所有代码文件、API 配置与媒体资产均严格在您本地浏览器内存沙箱中安全运行，平台始终恪守零云端存储、零数据保留与零内容转录原则，从底层彻底杜绝源代码外泄风险。安心编写每一行代码，欢迎查阅完整隐私保护准则与安全规范。",
      "breadcrumbName": "隐私政策"
    },
    "terms": {
      "title": "服务条款 — 永久免费个人与商业使用许可 | Lade Stack",
      "description": "仔细阅读 Lade Stack 平台通用服务条款协议与开源友好型许可细则：我们为全球个人开发者及商业化企业团队提供永久免费、无限制的使用授权，同时明确规范了高频 API 的合理使用准则、版权说明与免责声明。在清晰可靠的合规保障下自由构建您的生产级项目，欢迎查阅平台详细合规政策条款。",
      "keywords": "永久免费商业开发使用许可条款, 平台服务协议, 免费使用授权, 合理调用规范, 开发者软件许可",
      "ogTitle": "服务条款 — 永久免费个人与商业使用许可 | Lade Stack",
      "ogDescription": "仔细阅读 Lade Stack 平台通用服务条款协议与开源友好型许可细则：我们为全球个人开发者及商业化企业团队提供永久免费、无限制的使用授权，同时明确规范了高频 API 的合理使用准则、版权说明与免责声明。在清晰可靠的合规保障下自由构建您的生产级项目，欢迎查阅平台详细合规政策条款。",
      "breadcrumbName": "服务条款"
    },
    "blogListing": {
      "title": "工程技术博客 — AI 开发与系统架构实战 | Lade Stack",
      "description": "深入研读由资深全栈工程师与系统架构师撰写的 27 篇高质量技术实战教程：内容全面覆盖工业级生成式 AI 研发落地、高召回率 RAG 向量混合检索架构、MLOps 持续集成与部署流水线，以及超大规模高并发 SaaS 微服务架构扩展实战。立即阅读掌握前沿云原生工程实战前沿洞见与心得。",
      "keywords": "AI系统开发教程与工程架构博客, 开发者博客, RAG架构实战, MLOps模型部署, SaaS系统扩展",
      "ogTitle": "工程技术博客 — AI 开发与系统架构实战 | Lade Stack",
      "ogDescription": "深入研读由资深全栈工程师与系统架构师撰写的 27 篇高质量技术实战教程：内容全面覆盖工业级生成式 AI 研发落地、高召回率 RAG 向量混合检索架构、MLOps 持续集成与部署流水线，以及超大规模高并发 SaaS 微服务架构扩展实战。立即阅读掌握前沿云原生工程实战前沿洞见与心得。",
      "breadcrumbName": "博客"
    }
  },
  "ko": {
    "home": {
      "title": "무료 AI 개발자 도구 및 코딩 생산성 플랫폼 | Lade Stack",
      "description": "Girish Lade가 설계한 프라이버시 중심 무료 개발자 웹 플랫폼입니다. 실시간 AI 코드 검토, REST 및 GraphQL API 테스트, 브라우저 PDF 도구를 회원가입 없이 실행하세요. 데이터 유출 없이 로컬 샌드박스에서 구동되는 도구를 경험하세요. 지금 바로 시작해 보세요.",
      "keywords": "브라우저 무료 AI 개발자 도구 플랫폼, 개발자 생산성 도구, AI 코드 리뷰, API 테스트 환경, 코딩 유틸리티",
      "ogTitle": "무료 AI 개발자 도구 및 코딩 생산성 플랫폼 | Lade Stack",
      "ogDescription": "Girish Lade가 설계한 프라이버시 중심 무료 개발자 웹 플랫폼입니다. 실시간 AI 코드 검토, REST 및 GraphQL API 테스트, 브라우저 PDF 도구를 회원가입 없이 실행하세요. 데이터 유출 없이 로컬 샌드박스에서 구동되는 도구를 경험하세요. 지금 바로 시작해 보세요.",
      "breadcrumbName": "홈"
    },
    "about": {
      "title": "Girish Lade 소개 — 소프트웨어 아키텍트 | Lade Stack",
      "description": "Lade Stack 설립자이자 소프트웨어 아키텍트 Girish Lade의 개발 철학과 여정입니다. 직관적 UI/UX 경험, 견고한 클라우드 아키텍처, 생성형 AI 시스템의 융합 비전을 확인해 보세요. 소프트웨어 개발 마찰을 줄이는 여정에 함께하세요. 개발 철학을 지금 만나보세요.",
      "keywords": "Girish Lade 수석 소프트웨어 아키텍트 설립자, Lade Stack 창립자, UI UX 엔지니어, 클라우드 아키텍처, 생성형 AI 개발자",
      "ogTitle": "Girish Lade 소개 — 소프트웨어 아키텍트 | Lade Stack",
      "ogDescription": "Lade Stack 설립자이자 소프트웨어 아키텍트 Girish Lade의 개발 철학과 여정입니다. 직관적 UI/UX 경험, 견고한 클라우드 아키텍처, 생성형 AI 시스템의 융합 비전을 확인해 보세요. 소프트웨어 개발 마찰을 줄이는 여정에 함께하세요. 개발 철학을 지금 만나보세요.",
      "breadcrumbName": "소개"
    },
    "apps": {
      "title": "개발자 앱 갤러리 — 무료 웹 유틸리티 모음 | Lade Stack",
      "description": "설치나 가입 없이 브라우저에서 사용하는 실용적인 무료 개발 도구 모음입니다. CodeEnhance AI, 클라이언트 PDF 도구, 무손실 이미지 압축기, 개발자 이력서 빌더를 지금 경험해 보세요. 브라우저 내에서 안전하게 구동되는 툴킷입니다. 지금 무료로 시작하세요.",
      "keywords": "무료 브라우저 개발자 웹 유틸리티 갤러리, 앱 갤러리, 무료 코딩 도구 모음, PDF 유틸리티, 이미지 최적화 툴",
      "ogTitle": "개발자 앱 갤러리 — 무료 웹 유틸리티 모음 | Lade Stack",
      "ogDescription": "설치나 가입 없이 브라우저에서 사용하는 실용적인 무료 개발 도구 모음입니다. CodeEnhance AI, 클라이언트 PDF 도구, 무손실 이미지 압축기, 개발자 이력서 빌더를 지금 경험해 보세요. 브라우저 내에서 안전하게 구동되는 툴킷입니다. 지금 무료로 시작하세요.",
      "breadcrumbName": "앱 갤러리"
    },
    "products": {
      "title": "핵심 AI 개발자 제품 라인업 및 플랫폼 | Lade Stack",
      "description": "소프트웨어 배포 주기를 단축하는 프로덕션급 AI 개발 도구입니다. CodeEnhance AI, API 테스팅 플랫폼, AI 웹사이트 빌더, 보안 파일 공유 허브로 반복 작업을 자동화하고 생산성을 높이세요. 프로덕션 환경에 최적화된 도구를 적용해 보세요. 지금 확인하세요.",
      "keywords": "핵심 AI 개발자 제품 플랫폼 라인업, 엔터프라이즈 개발 도구, CodeEnhance AI, API 테스팅 플랫폼, AI 웹사이트 빌더",
      "ogTitle": "핵심 AI 개발자 제품 라인업 및 플랫폼 | Lade Stack",
      "ogDescription": "소프트웨어 배포 주기를 단축하는 프로덕션급 AI 개발 도구입니다. CodeEnhance AI, API 테스팅 플랫폼, AI 웹사이트 빌더, 보안 파일 공유 허브로 반복 작업을 자동화하고 생산성을 높이세요. 프로덕션 환경에 최적화된 도구를 적용해 보세요. 지금 확인하세요.",
      "breadcrumbName": "제품"
    },
    "aiCodeViewer": {
      "title": "AI 코드 리뷰 도구 — CodeEnhance 샌드박스 | Lade Stack",
      "description": "HTML, CSS, JavaScript 코드를 실시간 AI 분석과 라이브 미리보기로 검사하고 리팩토링하세요. 구문 오류 수정 및 코드 최적화를 회원가입 없이 평생 무료로 제공되는 지능형 웹 샌드박스에서 체험해 보세요. 클릭 한 번으로 견고한 코드를 완성하세요. 지금 실행하세요.",
      "keywords": "무료 AI 프론트엔드 코드 리뷰 샌드박스, CodeEnhance AI, 무료 코드 린터, 웹 코드 최적화기, 실시간 브라우저 미리보기",
      "ogTitle": "AI 코드 리뷰 도구 — CodeEnhance 샌드박스 | Lade Stack",
      "ogDescription": "HTML, CSS, JavaScript 코드를 실시간 AI 분석과 라이브 미리보기로 검사하고 리팩토링하세요. 구문 오류 수정 및 코드 최적화를 회원가입 없이 평생 무료로 제공되는 지능형 웹 샌드박스에서 체험해 보세요. 클릭 한 번으로 견고한 코드를 완성하세요. 지금 실행하세요.",
      "breadcrumbName": "CodeEnhance AI"
    },
    "docs": {
      "title": "개발자 기술 문서 및 API 가이드 레퍼런스 | Lade Stack",
      "description": "Lade Stack 도구를 위한 기술 문서를 확인하세요. 빠른 시작 튜토리얼, API 사양서 명세, GitHub 연동 가이드, Vercel 배포 체크리스트를 통해 체계적인 워크플로를 구축해 보세요. 공식 기술 가이드와 함께 프로젝트를 배포해 보세요. 지금 공식 문서를 확인하세요.",
      "keywords": "개발자 기술 문서 및 공식 API 가이드 레퍼런스, Lade Stack 문서, 개발자 튜토리얼, API 사양서 명세, CodeEnhance 안내서",
      "ogTitle": "개발자 기술 문서 및 API 가이드 레퍼런스 | Lade Stack",
      "ogDescription": "Lade Stack 도구를 위한 기술 문서를 확인하세요. 빠른 시작 튜토리얼, API 사양서 명세, GitHub 연동 가이드, Vercel 배포 체크리스트를 통해 체계적인 워크플로를 구축해 보세요. 공식 기술 가이드와 함께 프로젝트를 배포해 보세요. 지금 공식 문서를 확인하세요.",
      "breadcrumbName": "문서"
    },
    "support": {
      "title": "지원 센터 및 개발자 도구 FAQ 가이드 | Lade Stack",
      "description": "검증된 문제 해결 방법과 단계별 가이드, 도구 사용 중 자주 묻는 질문(FAQ)에 대한 상세한 답변을 찾아보세요. 기술적 문제나 개선 제안이 있으실 경우 엔지니어링 팀에 문의하시면 24시간 이내에 신속하고 정확한 지원을 제공해 드립니다. 브라우저 기반 도구의 완벽한 활용법을 확인하세요.",
      "keywords": "개발자 기술 지원 센터 및 도구 FAQ, 문제 해결 가이드, CodeEnhance 지원, 브라우저 처리 문의, 엔지니어링 헬프데스크",
      "ogTitle": "지원 센터 및 개발자 도구 FAQ 가이드 | Lade Stack",
      "ogDescription": "검증된 문제 해결 방법과 단계별 가이드, 도구 사용 중 자주 묻는 질문(FAQ)에 대한 상세한 답변을 찾아보세요. 기술적 문제나 개선 제안이 있으실 경우 엔지니어링 팀에 문의하시면 24시간 이내에 신속하고 정확한 지원을 제공해 드립니다. 브라우저 기반 도구의 완벽한 활용법을 확인하세요.",
      "breadcrumbName": "지원 센터"
    },
    "contact": {
      "title": "문의하기 — 엔지니어링 피드백 및 기술 협력 | Lade Stack",
      "description": "창립자 Girish Lade 및 엔지니어링 팀에 직접 문의하세요. 새로운 기능 아이디어 제안, 소프트웨어 버그 제보, 엔터프라이즈 기술 협업 의견을 환영합니다. 접수된 개발자 문의는 24시간 이내에 성실하게 답변해 드립니다. 엔지니어링 팀과 지금 바로 직접 소통해 보세요.",
      "keywords": "개발자 엔지니어링 팀 직접 문의 및 기술 제휴, Lade Stack 문의, 기능 제안, 버그 신고 피드백, 기술 지원",
      "ogTitle": "문의하기 — 엔지니어링 피드백 및 기술 협력 | Lade Stack",
      "ogDescription": "창립자 Girish Lade 및 엔지니어링 팀에 직접 문의하세요. 새로운 기능 아이디어 제안, 소프트웨어 버그 제보, 엔터프라이즈 기술 협업 의견을 환영합니다. 접수된 개발자 문의는 24시간 이내에 성실하게 답변해 드립니다. 엔지니어링 팀과 지금 바로 직접 소통해 보세요.",
      "breadcrumbName": "문의하기"
    },
    "privacy": {
      "title": "개인정보 처리방침 — 브라우저 내 데이터 보안 | Lade Stack",
      "description": "Lade Stack의 개인정보 보호 기준을 확인하세요. 업로드된 모든 코드와 파일은 사용자 로컬 브라우저 샌드박스 내에서만 처리되며 서버에 보관되지 않는 제로-리텐션 정책을 준수합니다. 안심하고 개발하세요. 신뢰할 수 있는 데이터 보호 원칙을 지금 안내해 드립니다.",
      "keywords": "로컬 브라우저 데이터 처리 개인정보 보호방침, 개발자 데이터 보안, 제로 리텐션 미보관 정책, 브라우저 샌드박스 안전성, 프라이버시",
      "ogTitle": "개인정보 처리방침 — 브라우저 내 데이터 보안 | Lade Stack",
      "ogDescription": "Lade Stack의 개인정보 보호 기준을 확인하세요. 업로드된 모든 코드와 파일은 사용자 로컬 브라우저 샌드박스 내에서만 처리되며 서버에 보관되지 않는 제로-리텐션 정책을 준수합니다. 안심하고 개발하세요. 신뢰할 수 있는 데이터 보호 원칙을 지금 안내해 드립니다.",
      "breadcrumbName": "개인정보 처리방침"
    },
    "terms": {
      "title": "이용약관 — 무료 이용 및 상업적 사용 라이선스 | Lade Stack",
      "description": "Lade Stack 서비스 이용약관을 안내합니다. 개인 연구 및 상업적 프로젝트에 적용되는 영구적 무료 이용 라이선스 정책과 공정한 API 리소스 사용 가이드라인을 확인하시고 안전하게 플랫폼을 활용해 보세요. 공정하고 투명한 소프트웨어 이용 규정을 지금 준수합니다.",
      "keywords": "영구 무료 상업적 개발 이용 라이선스 약관, Lade Stack 이용약관, 무료 소프트웨어 라이선스, 공정 이용 가이드, 개발 정책",
      "ogTitle": "이용약관 — 무료 이용 및 상업적 사용 라이선스 | Lade Stack",
      "ogDescription": "Lade Stack 서비스 이용약관을 안내합니다. 개인 연구 및 상업적 프로젝트에 적용되는 영구적 무료 이용 라이선스 정책과 공정한 API 리소스 사용 가이드라인을 확인하시고 안전하게 플랫폼을 활용해 보세요. 공정하고 투명한 소프트웨어 이용 규정을 지금 준수합니다.",
      "breadcrumbName": "이용약관"
    },
    "blogListing": {
      "title": "기술 엔지니어링 및 AI 개발 블로그 튜토리얼 | Lade Stack",
      "description": "현업 엔지니어가 작성한 27편의 심층 개발 튜토리얼입니다. 실전 생성형 AI 시스템 설계, RAG 벡터 검색 구축, 프로덕션 MLOps 배포 및 대규모 SaaS 아키텍처 스케일링 노하우를 지금 탐색해 보세요. 실무에 유용한 개발 팁과 엔지니어링 인사이트를 지금 확인하세요.",
      "keywords": "AI 개발 심층 튜토리얼 및 엔지니어링 기술 블로그, 개발자 블로그, RAG 시스템 구축, MLOps 모델 배포, SaaS 아키텍처 확장",
      "ogTitle": "기술 엔지니어링 및 AI 개발 블로그 튜토리얼 | Lade Stack",
      "ogDescription": "현업 엔지니어가 작성한 27편의 심층 개발 튜토리얼입니다. 실전 생성형 AI 시스템 설계, RAG 벡터 검색 구축, 프로덕션 MLOps 배포 및 대규모 SaaS 아키텍처 스케일링 노하우를 지금 탐색해 보세요. 실무에 유용한 개발 팁과 엔지니어링 인사이트를 지금 확인하세요.",
      "breadcrumbName": "블로그"
    }
  },
  "ja": {
    "home": {
      "title": "無料AI開発者ツール・Webコーディング支援環境 | Lade Stack",
      "description": "Girish Ladeが構築したプライバシー最優先の無料開発者向けWebプラットフォームです。リアルタイムAIコードレビュー、REST・GraphQL APIテスト環境、ブラウザ完結のPDF・画像編集ツールを登録不要で今すぐご利用いただけます。すべてのファイルはローカル環境で安全かつ確実に処理されます。",
      "keywords": "ブラウザ完結無料AI開発者ツール環境, エンジニア生産性向上ツール, AIコードレビュー, APIテスト環境, コーディング支援",
      "ogTitle": "無料AI開発者ツール・Webコーディング支援環境 | Lade Stack",
      "ogDescription": "Girish Ladeが構築したプライバシー最優先の無料開発者向けWebプラットフォームです。リアルタイムAIコードレビュー、REST・GraphQL APIテスト環境、ブラウザ完結のPDF・画像編集ツールを登録不要で今すぐご利用いただけます。すべてのファイルはローカル環境で安全かつ確実に処理されます。",
      "breadcrumbName": "ホーム"
    },
    "about": {
      "title": "Girish Lade について — 創業者・ソフトウェア設計 | Lade Stack",
      "description": "Lade Stack創業者でありリードソフトウェアアーキテクト兼UI/UXエンジニアであるGirish Ladeの歩みと開発思想をご紹介します。優れたデザイン感覚と堅牢なクラウド基盤、実用的AI技術を融合させた開発ビジョンをご覧ください。ソフトウェア開発の摩擦を減らす挑戦を続けています。",
      "keywords": "Girish Ladeリードソフトウェアアーキテクト創業者, Lade Stack創業者, UI UXエンジニア, クラウドシステム設計, 生成AIシステム",
      "ogTitle": "Girish Lade について — 創業者・ソフトウェア設計 | Lade Stack",
      "ogDescription": "Lade Stack創業者でありリードソフトウェアアーキテクト兼UI/UXエンジニアであるGirish Ladeの歩みと開発思想をご紹介します。優れたデザイン感覚と堅牢なクラウド基盤、実用的AI技術を融合させた開発ビジョンをご覧ください。ソフトウェア開発の摩擦を減らす挑戦を続けています。",
      "breadcrumbName": "概要"
    },
    "apps": {
      "title": "アプリギャラリー — 開発者向け無料便利ツール集 | Lade Stack",
      "description": "アカウント登録や環境構築なしでブラウザから即座に起動できる実用的な開発者向けWeb便利ツール群です。CodeEnhance AI、安全なPDFツール、高速画像圧縮、エンジニア専用レジュメビルダーなどを自由にお試しいただけます。完全ローカル処理で機密データを確実に保護し作業効率を高めます。",
      "keywords": "無料ブラウザ開発者向け便利ツールギャラリー, アプリギャラリー, 無料Webユーティリティ集, PDFツール, 画像最適化スタジオ",
      "ogTitle": "アプリギャラリー — 開発者向け無料便利ツール集 | Lade Stack",
      "ogDescription": "アカウント登録や環境構築なしでブラウザから即座に起動できる実用的な開発者向けWeb便利ツール群です。CodeEnhance AI、安全なPDFツール、高速画像圧縮、エンジニア専用レジュメビルダーなどを自由にお試しいただけます。完全ローカル処理で機密データを確実に保護し作業効率を高めます。",
      "breadcrumbName": "アプリギャラリー"
    },
    "products": {
      "title": "主要AI開発者プロダクト・開発プラットフォーム | Lade Stack",
      "description": "定型的な開発作業を自動化しリリース速度と品質を飛跃的に向上させるプロダクション品質のAI製品群です。CodeEnhance AI、直感的APIテスト環境、AI Webビルダー、高セキュアファイル共有ハブで開発フローを一新しましょう。最新のエンジニアリングツールを今すぐ導入可能です。",
      "keywords": "主要AI開発者プロダクト開発プラットフォーム, 本番向け開発製品, CodeEnhance AI, APIテストツール, WebサイトビルダーAI",
      "ogTitle": "主要AI開発者プロダクト・開発プラットフォーム | Lade Stack",
      "ogDescription": "定型的な開発作業を自動化しリリース速度と品質を飛跃的に向上させるプロダクション品質のAI製品群です。CodeEnhance AI、直感的APIテスト環境、AI Webビルダー、高セキュアファイル共有ハブで開発フローを一新しましょう。最新のエンジニアリングツールを今すぐ導入可能です。",
      "breadcrumbName": "プロダクト"
    },
    "aiCodeViewer": {
      "title": "AIコードレビューツール — CodeEnhance AI | Lade Stack",
      "description": "HTML、CSS、JavaScriptコードをリアルタイムAI解析とライブプレビューによりブラウザ上で瞬時に検証・リファクタリングします。構文エラーの即時修正とフロントエンド最適化をアカウント登録なしの完全無料環境でぜひご体験ください。安全なサンドボックス環境でコードを改善しましょう。",
      "keywords": "無料ブラウザAIコードレビューサンドボックス, CodeEnhance AI, フロントエンド静的解析, コード最適化ツール, ライブプレビュー",
      "ogTitle": "AIコードレビューツール — CodeEnhance AI | Lade Stack",
      "ogDescription": "HTML、CSS、JavaScriptコードをリアルタイムAI解析とライブプレビューによりブラウザ上で瞬時に検証・リファクタリングします。構文エラーの即時修正とフロントエンド最適化をアカウント登録なしの完全無料環境でぜひご体験ください。安全なサンドボックス環境でコードを改善しましょう。",
      "breadcrumbName": "CodeEnhance AI"
    },
    "docs": {
      "title": "開発者ドキュメント・APIリファレンス活用ガイド | Lade Stack",
      "description": "Lade Stack製品を最大限に活用するための包括的な技術ガイドです。クイックスタート手順、API仕様詳細、GitHub連携ワークフロー、本番Vercelデプロイチェックリストを参照し、洗練されたモダンな開発体制をスムーズに整えましょう。詳細な公式技術仕様書で開発効率を最大化できます。",
      "keywords": "開発者向け技術ドキュメントおよびAPIリファレンス, Lade Stackドキュメント, 開発者ガイド, API仕様書, CodeEnhance使い方",
      "ogTitle": "開発者ドキュメント・APIリファレンス活用ガイド | Lade Stack",
      "ogDescription": "Lade Stack製品を最大限に活用するための包括的な技術ガイドです。クイックスタート手順、API仕様詳細、GitHub連携ワークフロー、本番Vercelデプロイチェックリストを参照し、洗練されたモダンな開発体制をスムーズに整えましょう。詳細な公式技術仕様書で開発効率を最大化できます。",
      "breadcrumbName": "ドキュメント"
    },
    "support": {
      "title": "サポートセンター — トラブル解決とよくある質問 | Lade Stack",
      "description": "ツールの利用手順やエラー解消法、検証済みのよくある質問（FAQ）一覧をご確認いただけます。ご不明点や機能の不具合がございましたら開発チームまでお気軽にご連絡ください。エンジニアが24時間以内に丁寧かつ迅速にサポートいたします。疑問を素早く解決して快適かつスムーズに開発を進めましょう。",
      "keywords": "開発者サポートセンターおよびよくある質問FAQ, トラブルシューティング, CodeEnhanceヘルプ, ブラウザ内データ処理, 開発窓口",
      "ogTitle": "サポートセンター — トラブル解決とよくある質問 | Lade Stack",
      "ogDescription": "ツールの利用手順やエラー解消法、検証済みのよくある質問（FAQ）一覧をご確認いただけます。ご不明点や機能の不具合がございましたら開発チームまでお気軽にご連絡ください。エンジニアが24時間以内に丁寧かつ迅速にサポートいたします。疑問を素早く解決して快適かつスムーズに開発を進めましょう。",
      "breadcrumbName": "サポート"
    },
    "contact": {
      "title": "お問い合わせ — 開発チームへのご相談と提携 | Lade Stack",
      "description": "創業者Girish Ladeおよびコアエンジニアリングチームへ直接お問い合わせいただけます。新機能のご要望、バグ報告、技術連携や協業のご相談など、開発者からのメッセージを心よりお待ちしております。24時間以内に必ず返信いたします。お気軽にフィードバックや改善提案をお寄せください。",
      "keywords": "開発エンジニアリングチームへの直接相談窓口, Lade Stack問い合わせ, 機能改善リクエスト, 不具合報告, 技術連携相談",
      "ogTitle": "お問い合わせ — 開発チームへのご相談と提携 | Lade Stack",
      "ogDescription": "創業者Girish Ladeおよびコアエンジニアリングチームへ直接お問い合わせいただけます。新機能のご要望、バグ報告、技術連携や協業のご相談など、開発者からのメッセージを心よりお待ちしております。24時間以内に必ず返信いたします。お気軽にフィードバックや改善提案をお寄せください。",
      "breadcrumbName": "お問い合わせ"
    },
    "privacy": {
      "title": "プライバシーポリシー — ローカルデータ完全保護 | Lade Stack",
      "description": "Lade Stackのデータプライバシー規約をご案内します。アップロードされたソースコードやファイルはすべてブラウザ内のローカルメモリで完結して処理され、外部サーバーに一切保存されないゼロ保持方針を厳格に順守しています。安心してご利用ください。徹底した安全管理体制をお約束します。",
      "keywords": "ブラウザ完結ローカル処理プライバシーポリシー, 開発者データ保護, ゼロ保持ポリシー, ブラウザサンドボックス, コードセキュリティ",
      "ogTitle": "プライバシーポリシー — ローカルデータ完全保護 | Lade Stack",
      "ogDescription": "Lade Stackのデータプライバシー規約をご案内します。アップロードされたソースコードやファイルはすべてブラウザ内のローカルメモリで完結して処理され、外部サーバーに一切保存されないゼロ保持方針を厳格に順守しています。安心してご利用ください。徹底した安全管理体制をお約束します。",
      "breadcrumbName": "プライバシーポリシー"
    },
    "terms": {
      "title": "利用規約 — 無料商用・個人利用ライセンス案内 | Lade Stack",
      "description": "Lade Stackサービスの利用条件を明記しています。個人開発はもちろん商用プロダクション開発においても完全無料でご利用いただける永続ライセンス条項や、APIの適正利用ガイドラインを分かりやすく定めています。ぜひ内容をご確認ください。安心して商用利用できる規約を整備しています。",
      "keywords": "商用開発対応無料利用ライセンス規約, Lade Stack利用規約, 開発者無料ライセンス, 適正利用ガイドライン, ソフトウェア規約",
      "ogTitle": "利用規約 — 無料商用・個人利用ライセンス案内 | Lade Stack",
      "ogDescription": "Lade Stackサービスの利用条件を明記しています。個人開発はもちろん商用プロダクション開発においても完全無料でご利用いただける永続ライセンス条項や、APIの適正利用ガイドラインを分かりやすく定めています。ぜひ内容をご確認ください。安心して商用利用できる規約を整備しています。",
      "breadcrumbName": "利用規約"
    },
    "blogListing": {
      "title": "技術ブログ — AI開発とSaaSシステムアーキテクチャ | Lade Stack",
      "description": "第一線で活躍するエンジニアが執筆した27本の実践的チュートリアルを公開中。AIモデルの実装、RAG検索アーキテクチャの構築、MLOpsの本番運用、高負荷に耐えうる大規模SaaS設計のノウハウを今すぐ手に入れて開発に生かしましょう。現場で役立つ実践的な開発知见を定期的にお届けします。",
      "keywords": "AI開発実践チュートリアルおよび技術ブログ, 開発者ブログ, RAGアーキテクチャ, MLOps本番運用, SaaSシステム設計",
      "ogTitle": "技術ブログ — AI開発とSaaSシステムアーキテクチャ | Lade Stack",
      "ogDescription": "第一線で活躍するエンジニアが執筆した27本の実践的チュートリアルを公開中。AIモデルの実装、RAG検索アーキテクチャの構築、MLOpsの本番運用、高負荷に耐えうる大規模SaaS設計のノウハウを今すぐ手に入れて開発に生かしましょう。現場で役立つ実践的な開発知见を定期的にお届けします。",
      "breadcrumbName": "ブログ"
    }
  },
  "tr": {
    "home": {
      "title": "Ücretsiz Yapay Zeka Geliştirici Araçları | Lade Stack",
      "description": "Modern yazılım süreçleri için gizlilik odaklı ücretsiz geliştirici platformu: tarayıcıda yapay zeka ile kod inceleme, API testleri ve dosya araçları.",
      "keywords": "tarayıcıda ücretsiz yapay zeka geliştirici araçları, kodlama araçları, kod inceleme yapay zeka, API test aracı, web araçları",
      "ogTitle": "Ücretsiz Yapay Zeka Geliştirici Araçları | Lade Stack",
      "ogDescription": "Modern yazılım süreçleri için gizlilik odaklı ücretsiz geliştirici platformu: tarayıcıda yapay zeka ile kod inceleme, API testleri ve dosya araçları.",
      "breadcrumbName": "Ana Sayfa"
    },
    "about": {
      "title": "Girish Lade Hakkında — Kurucu ve Yazılım Mimarı | Lade Stack",
      "description": "Lade Stack kurucusu ve baş yazılım mimarı Girish Lade hakkında bilgi edinin. Mühendislik prensipleri, kullanıcı deneyimi ve yapay zeka vizyonumuz burada.",
      "keywords": "Girish Lade kurucu baş yazılım mimarı, Lade Stack kurucusu, UI UX geliştirici, bulut mimarisi, yapay zeka mühendisi",
      "ogTitle": "Girish Lade Hakkında — Kurucu ve Yazılım Mimarı | Lade Stack",
      "ogDescription": "Lade Stack kurucusu ve baş yazılım mimarı Girish Lade hakkında bilgi edinin. Mühendislik prensipleri, kullanıcı deneyimi ve yapay zeka vizyonumuz burada.",
      "breadcrumbName": "Hakkında"
    },
    "apps": {
      "title": "Uygulama Galerisi — Ücretsiz Web Araçları | Lade Stack",
      "description": "Tarayıcınızda çalışan ücretsiz geliştirici araçları: CodeEnhance AI, istemci taraflı PDF araçları, görsel sıkıştırma ve özgeçmiş oluşturucu. Hemen deneyin.",
      "keywords": "ücretsiz web geliştirici araç galerisi, uygulama galerisi, ücretsiz kodlama araçları, PDF araçları, resim sıkıştırma",
      "ogTitle": "Uygulama Galerisi — Ücretsiz Web Araçları | Lade Stack",
      "ogDescription": "Tarayıcınızda çalışan ücretsiz geliştirici araçları: CodeEnhance AI, istemci taraflı PDF araçları, görsel sıkıştırma ve özgeçmiş oluşturucu. Hemen deneyin.",
      "breadcrumbName": "Uygulama Galerisi"
    },
    "products": {
      "title": "Öncü Yapay Zeka Geliştirici Ürünleri | Lade Stack",
      "description": "Yazılım süreçlerinizi hızlandıran ürünleri keşfedin: CodeEnhance AI, görsel API test ortamı, yapay zeka web kurucu ve güvenli dosya paylaşım merkezi.",
      "keywords": "öncü yapay zeka geliştirici ürünleri platformu, geliştirici ürünleri, CodeEnhance AI, API test platformu, web sitesi kurucu",
      "ogTitle": "Öncü Yapay Zeka Geliştirici Ürünleri | Lade Stack",
      "ogDescription": "Yazılım süreçlerinizi hızlandıran ürünleri keşfedin: CodeEnhance AI, görsel API test ortamı, yapay zeka web kurucu ve güvenli dosya paylaşım merkezi.",
      "breadcrumbName": "Ürünler"
    },
    "aiCodeViewer": {
      "title": "CodeEnhance AI — Kod İnceleme ve İyileştirme | Lade Stack",
      "description": "HTML, CSS ve JavaScript kodlarınızı yapay zeka desteği ve canlı tarayıcı önizlemesiyle anında optimize edin. Kayıt gerekmeden ömür boyu tamamen ücretsiz.",
      "keywords": "ücretsiz yapay zeka kod inceleme tarayıcı, CodeEnhance AI, kod optimizasyonu, frontend linter, anlık kod önizleme",
      "ogTitle": "CodeEnhance AI — Kod İnceleme ve İyileştirme | Lade Stack",
      "ogDescription": "HTML, CSS ve JavaScript kodlarınızı yapay zeka desteği ve canlı tarayıcı önizlemesiyle anında optimize edin. Kayıt gerekmeden ömür boyu tamamen ücretsiz.",
      "breadcrumbName": "CodeEnhance AI"
    },
    "docs": {
      "title": "Geliştirici Dokümantasyonu ve API Rehberi | Lade Stack",
      "description": "Lade Stack araçları için teknik kılavuzlar, API özellikleri, GitHub aktarımı ve Vercel yayınlama kontrol listesi. Belgelerimizle hemen üretime başlayın.",
      "keywords": "geliştirici dokümantasyonu ve API referans kılavuzu, Lade Stack belgeleri, geliştirici rehberi, API referansı, CodeEnhance kullanımı",
      "ogTitle": "Geliştirici Dokümantasyonu ve API Rehberi | Lade Stack",
      "ogDescription": "Lade Stack araçları için teknik kılavuzlar, API özellikleri, GitHub aktarımı ve Vercel yayınlama kontrol listesi. Belgelerimizle hemen üretime başlayın.",
      "breadcrumbName": "Dokümantasyon"
    },
    "support": {
      "title": "Destek Merkezi ve Sıkça Sorulan Sorular | Lade Stack",
      "description": "Karşılaştığınız sorunlara hızlı çözümler, sorun giderme rehberleri ve sıkça sorulan sorular. Mühendislik ekibimiz 24 saat içinde yanıt vermeye hazırdır.",
      "keywords": "geliştirici destek merkezi ve sıkça sorulan sorular, sorun giderme rehberi, CodeEnhance yardım, tarayıcı araçları desteği, mühendislik ekibi",
      "ogTitle": "Destek Merkezi ve Sıkça Sorulan Sorular | Lade Stack",
      "ogDescription": "Karşılaştığınız sorunlara hızlı çözümler, sorun giderme rehberleri ve sıkça sorulan sorular. Mühendislik ekibimiz 24 saat içinde yanıt vermeye hazırdır.",
      "breadcrumbName": "Destek"
    },
    "contact": {
      "title": "Mühendislik Ekibiyle İletişim ve Destek | Lade Stack",
      "description": "Kurucu Girish Lade ve çekirdek geliştiricilerle doğrudan görüşün. Yeni özellik önerin, hata bildirin veya ortaklıkları görüşün. 24 saatte yanıt veriyoruz.",
      "keywords": "mühendislik ekibi ile doğrudan iletişim desteği, Lade Stack iletişim, Girish Lade iletişim, özellik önerisi, hata bildirimi",
      "ogTitle": "Mühendislik Ekibiyle İletişim ve Destek | Lade Stack",
      "ogDescription": "Kurucu Girish Lade ve çekirdek geliştiricilerle doğrudan görüşün. Yeni özellik önerin, hata bildirin veya ortaklıkları görüşün. 24 saatte yanıt veriyoruz.",
      "breadcrumbName": "İletişim"
    },
    "privacy": {
      "title": "Gizlilik Politikası — Tarayıcı İçi Güvenlik | Lade Stack",
      "description": "Veri koruma ilkelerimiz ve sıfır saklama politikamız: tüm kodlar ve dosyalar yalnızca yerel tarayıcınızda işlenir, sunucuya aktarılmaz. Güvenle inceleyin.",
      "keywords": "tarayıcı içi veri gizlilik politikası ilkeleri, geliştirici veri güvenliği, sıfır saklama politikası, yerel tarayıcı işleme, veri gizliliği",
      "ogTitle": "Gizlilik Politikası — Tarayıcı İçi Güvenlik | Lade Stack",
      "ogDescription": "Veri koruma ilkelerimiz ve sıfır saklama politikamız: tüm kodlar ve dosyalar yalnızca yerel tarayıcınızda işlenir, sunucuya aktarılmaz. Güvenle inceleyin.",
      "breadcrumbName": "Gizlilik Politikası"
    },
    "terms": {
      "title": "Kullanım Koşulları — Ücretsiz Lisans Şartları | Lade Stack",
      "description": "Kişisel ve ticari yazılım projeleri için süresiz ücretsiz kullanım lisansı şartlarını ve adil kullanım politikamızı inceleyin. Detaylı bilgi edinin.",
      "keywords": "ücretsiz ticari geliştirici lisans kullanım şartları, Lade Stack kullanım koşulları, ücretsiz yazılım lisansı, adil kullanım ilkeleri, hizmet şartları",
      "ogTitle": "Kullanım Koşulları — Ücretsiz Lisans Şartları | Lade Stack",
      "ogDescription": "Kişisel ve ticari yazılım projeleri için süresiz ücretsiz kullanım lisansı şartlarını ve adil kullanım politikamızı inceleyin. Detaylı bilgi edinin.",
      "breadcrumbName": "Kullanım Koşulları"
    },
    "blogListing": {
      "title": "Mühendislik ve Yapay Zeka Geliştirme Blogu | Lade Stack",
      "description": "Yapay zeka sistemleri, RAG mimarisi, MLOps yayınlama ve SaaS ölçekleme üzerine 27 kapsamlı teknik eğitim yazısı. Mühendislerin deneyimlerini okuyun.",
      "keywords": "yapay zeka geliştirici eğitimleri mühendislik blogu, yazılım blogu, RAG mimarisi, MLOps süreçleri, SaaS sistemleri",
      "ogTitle": "Mühendislik ve Yapay Zeka Geliştirme Blogu | Lade Stack",
      "ogDescription": "Yapay zeka sistemleri, RAG mimarisi, MLOps yayınlama ve SaaS ölçekleme üzerine 27 kapsamlı teknik eğitim yazısı. Mühendislerin deneyimlerini okuyun.",
      "breadcrumbName": "Blog"
    }
  },
  "pt-BR": {
    "home": {
      "title": "Ferramentas de IA Gratuitas para Devs | Lade Stack",
      "description": "Plataforma gratuita e focada em privacidade para desenvolvedores. Revise código com IA, teste APIs e execute utilitários no navegador sem criar conta.",
      "keywords": "ferramentas gratuitas de IA no navegador, ferramentas para desenvolvedores, revisão de código IA, teste de API, utilitários web",
      "ogTitle": "Ferramentas de IA Gratuitas para Devs | Lade Stack",
      "ogDescription": "Plataforma gratuita e focada em privacidade para desenvolvedores. Revise código com IA, teste APIs e execute utilitários no navegador sem criar conta.",
      "breadcrumbName": "Início"
    },
    "about": {
      "title": "Sobre Girish Lade — Arquiteto de Software | Lade Stack",
      "description": "Conheça Girish Lade, desenvolvedor UI/UX e arquiteto de software líder na Lade Stack. Conheça nossa filosofia técnica, princípios e visão de produtos.",
      "keywords": "Girish Lade arquiteto de software fundador, fundador da Lade Stack, desenvolvedor UI UX, arquitetura em nuvem, sistemas de IA",
      "ogTitle": "Sobre Girish Lade — Arquiteto de Software | Lade Stack",
      "ogDescription": "Conheça Girish Lade, desenvolvedor UI/UX e arquiteto de software líder na Lade Stack. Conheça nossa filosofia técnica, princípios e visão de produtos.",
      "breadcrumbName": "Sobre"
    },
    "apps": {
      "title": "Galeria de Apps — Utilitários Web Gratuitos | Lade Stack",
      "description": "Explore utilitários web no navegador: CodeEnhance AI, ferramentas de PDF no cliente, otimizador de imagens e criador de currículo. Inicie em segundos.",
      "keywords": "galeria de utilitários web para programadores, galeria de apps, ferramentas dev gratuitas, ferramentas PDF online, estúdio de imagens",
      "ogTitle": "Galeria de Apps — Utilitários Web Gratuitos | Lade Stack",
      "ogDescription": "Explore utilitários web no navegador: CodeEnhance AI, ferramentas de PDF no cliente, otimizador de imagens e criador de currículo. Inicie em segundos.",
      "breadcrumbName": "Galeria de Apps"
    },
    "products": {
      "title": "Produtos Principais de IA para Desenvolvimento | Lade Stack",
      "description": "Descubra soluções de produção: CodeEnhance AI, testes visuais de API, criador de sites com IA e compartilhamento seguro de arquivos. Acelere seus deploys.",
      "keywords": "produtos principais de IA plataforma desenvolvedores, ferramentas dev, CodeEnhance AI, plataforma teste API, construtor de sites",
      "ogTitle": "Produtos Principais de IA para Desenvolvimento | Lade Stack",
      "ogDescription": "Descubra soluções de produção: CodeEnhance AI, testes visuais de API, criador de sites com IA e compartilhamento seguro de arquivos. Acelere seus deploys.",
      "breadcrumbName": "Produtos"
    },
    "aiCodeViewer": {
      "title": "Revisão de Código com IA — CodeEnhance Sandbox | Lade Stack",
      "description": "Inspecione, depure e otimize HTML, CSS e JavaScript com IA em tempo real e visualização ao vivo no navegador. Gratuito para sempre e sem necessidade de login.",
      "keywords": "revisão de código com IA no navegador, CodeEnhance AI, linter gratuito, otimizador HTML CSS JS, preview de código ao vivo",
      "ogTitle": "Revisão de Código com IA — CodeEnhance Sandbox | Lade Stack",
      "ogDescription": "Inspecione, depure e otimize HTML, CSS e JavaScript com IA em tempo real e visualização ao vivo no navegador. Gratuito para sempre e sem necessidade de login.",
      "breadcrumbName": "CodeEnhance AI"
    },
    "docs": {
      "title": "Documentação Técnica e Guias de API | Lade Stack",
      "description": "Acesse tutoriais detalhados, especificações de API, rotinas de exportação para GitHub e checklist para deploy na Vercel das ferramentas Lade Stack. Leia agora.",
      "keywords": "documentação técnica e guias de API desenvolvedor, documentação Lade Stack, guias para desenvolvedores, referência de API, tutorial CodeEnhance",
      "ogTitle": "Documentação Técnica e Guias de API | Lade Stack",
      "ogDescription": "Acesse tutoriais detalhados, especificações de API, rotinas de exportação para GitHub e checklist para deploy na Vercel das ferramentas Lade Stack. Leia agora.",
      "breadcrumbName": "Documentação"
    },
    "support": {
      "title": "Central de Suporte e Perguntas Frequentes | Lade Stack",
      "description": "Consulte soluções verificadas, guias de resolução de problemas e respostas para dúvidas comuns sobre ferramentas web. Obtenha suporte técnico de engenharia.",
      "keywords": "central de suporte desenvolvedores e perguntas frequentes, resolução de problemas, suporte CodeEnhance, processamento no navegador, ajuda técnica",
      "ogTitle": "Central de Suporte e Perguntas Frequentes | Lade Stack",
      "ogDescription": "Consulte soluções verificadas, guias de resolução de problemas e respostas para dúvidas comuns sobre ferramentas web. Obtenha suporte técnico de engenharia.",
      "breadcrumbName": "Suporte"
    },
    "contact": {
      "title": "Contato com Engenharia e Suporte Técnico | Lade Stack",
      "description": "Fale com Girish Lade e o time de engenharia. Envie sugestões de recursos, relate falhas ou converse sobre parcerias técnicas. Respondemos em até 24 horas.",
      "keywords": "contato direto equipe de engenharia suporte, contato Lade Stack, falar com Girish Lade, sugestão de ferramenta, relatar bug",
      "ogTitle": "Contato com Engenharia e Suporte Técnico | Lade Stack",
      "ogDescription": "Fale com Girish Lade e o time de engenharia. Envie sugestões de recursos, relate falhas ou converse sobre parcerias técnicas. Respondemos em até 24 horas.",
      "breadcrumbName": "Contato"
    },
    "privacy": {
      "title": "Política de Privacidade — Dados no Navegador | Lade Stack",
      "description": "Entenda nossos padrões de proteção: todo o processamento de código ocorre localmente no seu navegador, sob política estrita de zero retenção. Confira os termos.",
      "keywords": "política de privacidade processamento local navegador, privacidade de dados dev, política zero retenção, segurança de código, dados locais",
      "ogTitle": "Política de Privacidade — Dados no Navegador | Lade Stack",
      "ogDescription": "Entenda nossos padrões de proteção: todo o processamento de código ocorre localmente no seu navegador, sob política estrita de zero retenção. Confira os termos.",
      "breadcrumbName": "Privacidade"
    },
    "terms": {
      "title": "Termos de Serviço — Licença Gratuita de Uso | Lade Stack",
      "description": "Consulte os termos de serviço e nossa licença de uso gratuito para projetos pessoais e comerciais de desenvolvimento. Conheça as regras de uso aceitável.",
      "keywords": "termos de licença gratuita desenvolvimento comercial, termos de serviço, licença de uso livre, política de uso justo, licença de software",
      "ogTitle": "Termos de Serviço — Licença Gratuita de Uso | Lade Stack",
      "ogDescription": "Consulte os termos de serviço e nossa licença de uso gratuito para projetos pessoais e comerciais de desenvolvimento. Conheça as regras de uso aceitável.",
      "breadcrumbName": "Termos de Serviço"
    },
    "blogListing": {
      "title": "Blog de Engenharia e Desenvolvimento com IA | Lade Stack",
      "description": "Confira 27 tutoriais práticos sobre desenvolvimento com IA, arquitetura RAG, esteiras MLOps em produção e escalabilidade de SaaS. Leia os artigos da equipe.",
      "keywords": "tutoriais de desenvolvimento IA blog de engenharia, blog de desenvolvedores, arquitetura RAG, deploy MLOps, escalabilidade SaaS",
      "ogTitle": "Blog de Engenharia e Desenvolvimento com IA | Lade Stack",
      "ogDescription": "Confira 27 tutoriais práticos sobre desenvolvimento com IA, arquitetura RAG, esteiras MLOps em produção e escalabilidade de SaaS. Leia os artigos da equipe.",
      "breadcrumbName": "Blog"
    }
  }
};

/**
 * Retrieve SEO metadata for a page and locale, falling back to English.
 */
export function getPageSEO(page: SEOPageKey, lang: SupportedLocale): PageSEO {
  return seoData[lang]?.[page] ?? seoData['en'][page];
}

/**
 * Helper to generate valid Schema.org BreadcrumbList structured data.
 */
export function createBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
