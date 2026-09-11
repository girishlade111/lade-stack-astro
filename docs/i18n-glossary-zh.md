# Lade Stack Technical Translation Glossary & Style Guide — 简体中文 (zh)

- **Target Locale**: `zh` / `zh-CN` (Simplified Chinese / 简体中文)
- **Target Audience**: 前端与全栈开发者、DevOps/SRE 工程师、AI/ML 架构师、SaaS 创始人
- **Tone & Register**: 极客、工程向、务实、干货、零废话（参考 V2EX、掘金技术深度专栏、字节跳动/阿里云技术博客）

---

## 1. 核心语气与写作风格规范 (Tone & Style Guide)

1. **工程师对工程师 (Engineer-to-Engineer)**：
   - 采用同行切磋、复盘复现的口吻。严禁使用任何夸张的营销套话（如“惊人”、“革命性突破”、“神奇效果”）。
   - 用指标和技术事实说话：例如“将 p99 延迟从 450 ms 压到 85 ms”、“通过连接池排队避免数据库突发打满崩溃”。
2. **盘古之白 (Pangu Spacing)**：
   - **必须**在汉字与半角英文单词、数字、变量代码之间保留一个半角空格。
     - 正确示例：`在 Kubernetes 集群中部署 Docker 容器时，必须限制 CPU 和内存资源。`
     - 错误示例：`在Kubernetes集群中部署Docker容器时，必须限制CPU和内存资源。`
3. **标点符号规范**：
   - 中文正文采用标准全角标点（`，`、`。`、`！`、`？`、`：`、`；`、`“`、`”`、`（`、`）`）。
   - 代码块、行内代码、数学公式、URL、英文字符串内部使用半角标点。
4. **动词优先，拒绝公文腔**：
   - 避免无意义的冗长修饰词和官僚化翻译腔（如“进行...的实现”、“对其做出相应的优化”）。
   - 直接使用简洁有力的动作动词：`部署`、`排查`、`微调`、`解耦`、`扩容`、`切流`。

---

## 2. 绝对不可翻译词汇 (Must Stay in English)

以下术语在任何情况下**严禁翻译为中文**：

### 2.1 产品与品牌名称
- `Lade Stack` / `LadeStack`
- `CodeEnhance AI`
- `LS PDF Tools`
- `LS Image Studio`
- `Secure File Hub`
- `Website Builder AI`
- `API Testing Platform`

### 2.2 技术栈、运行时与基础设施
- **技术语言与运行环境**: `TypeScript`, `JavaScript`, `Python`, `Go`, `Rust`, `SQL`, `HTML`, `CSS`, `Node.js`, `Bun`, `Deno`
- **框架与库**: `React`, `Astro`, `Next.js`, `Vite`, `Vue`, `Svelte`, `Tailwind CSS`
- **云与容器**: `Kubernetes`, `Docker`, `Terraform`, `Pulumi`, `AWS`, `Azure`, `GCP`, `Cloudflare`, `Vercel`
- **数据库与缓存**: `PostgreSQL`, `MySQL`, `Redis`, `MongoDB`, `Supabase`, `Firebase`, `Appwrite`, `pgvector`, `Pinecone`, `Milvus`, `Qdrant`
- **可观测性**: `OpenTelemetry`, `Prometheus`, `Grafana`, `Jaeger`

### 2.3 协议与授权标准
- `REST`, `GraphQL`, `WebSocket`, `gRPC`, `CRDT`
- `OAuth 2.0`, `OpenID Connect`, `PKCE`, `JWT`, `JWK`, `TLS 1.3`, `mTLS`, `HTTPS`
- `OWASP`, `OWASP Top 10`

### 2.4 代码标识符与 CLI 命名
- 代码中的所有函数名、变量名、类型定义、类名：`runWithResilience`, `circuitBreaker`, `timeoutMs`, `retries`
- 命令行命令与参数：`kubectl apply -f`, `docker compose up`, `npm run build`, `--namespace`, `-it`
- 路径与配置文件：`astro.config.mjs`, `package.json`, `tsconfig.json`, `/blog`, `/blog/[slug]`

### 2.5 HTTP 原语
- HTTP 请求方法：`GET`, `POST`, `PUT`, `DELETE`, `PATCH`, `OPTIONS`, `HEAD`
- HTTP 状态码：`200 OK`, `301 Moved Permanently`, `400 Bad Request`, `401 Unauthorized`, `403 Forbidden`, `404 Not Found`, `429 Too Many Requests`, `500 Internal Server Error`, `502 Bad Gateway`
- HTTP 标头：`Authorization`, `Content-Type`, `Cache-Control`, `X-Forwarded-For`

---

## 3. 核心技术术语标准映射表 (Mandatory Technical Glossary)

所有 27 篇技术博客的翻译必须严格统一使用下表中的**标准中文译法**，严禁同义词混用：

| 英文原词 (English Source) | 标准中文译法 (Canonical Translation) | 严禁使用/歧义译法 (Disallowed Variations) | 上下文与工程示例 (Context & Example) |
|---|---|---|---|
| **Zero-Downtime Deployment** | 零停机发布 / 零停机部署 | 零下线发布、无死机发布 | “设计带有健康检查门禁的**零停机发布**流水线。” |
| **Blue-Green Deployment** | 蓝绿部署 | 蓝绿上线、青蓝部署 | “**蓝绿部署**能够保证在出现致命故障时数秒内完成瞬时回滚。” |
| **Canary Deployment** | 金丝雀发布 / 金丝雀部署 | 灰度上线、小雀发布 | “通过配置 5% 流量的**金丝雀发布**验证新版本在真实流量下的稳定性。” |
| **Rolling Update** | 滚动更新 / 滚动发布 | 轮转升级、平滑滚动 | “Kubernetes 默认采用**滚动更新**逐步替换 Pod 实例。” |
| **Health Gate / Readiness Probe** | 健康门禁 / 就绪探针 | 健康检查站、就绪度检验 | “在切流前，依靠**就绪探针**确认服务能够正常响应请求。” |
| **Rate Limiting** | 限流 | 速率限制、速度压制 | “在 API 网关处使用 Redis 集中式**限流**保护下游核心服务。” |
| **Throttling** | 节流 | 节流阀、油门限制 | “针对爬虫和恶意流量执行**节流**，按 IP 递进延迟响应。” |
| **Token Bucket** | 令牌桶 | 代币桶、令牌箱 | “**令牌桶**算法允许平滑处理突发流量，同时严格锁定长期平均速率。” |
| **Leaky Bucket** | 漏桶 | 水桶法、漏水箱 | “**漏桶**算法以恒定速率出水，适合对下游流量平稳度要求极高的场景。” |
| **Circuit Breaker** | 熔断器 | 熔断机制、断路机 | “当下游服务错误率突破阈值时，**熔断器**自动打开，避免雪崩效应。” |
| **Multi-Tenant / Multi-Tenancy** | 多租户 | 多客户、多住户 | “在设计**多租户** SaaS 架构时，首要考量数据隔离模型与成本开销。” |
| **Tenant Isolation** | 租户隔离 | 客户隔离、租客隔离 | “采用行级安全策略（RLS）或独立数据库模式实现强**租户隔离**。” |
| **Read Replica** | 只读副本 | 读从库、只读备份 | “将复杂的报表统计和全文搜索查询分流至**只读副本**。” |
| **Database Sharding** | 数据库分片 / 分库分表 | 数据库碎片化、分块切片 | “通过用户 ID 哈希值进行**数据库分片**，水平横向扩展存储能力。” |
| **Connection Pooling** | 连接池 | 连接水池、链接汇聚 | “在 Serverless 函数中使用外部**连接池**代理（如 PgBouncer）避免打满连接数。” |
| **API Gateway** | API 网关 | 接口网关、API 入口 | “**API 网关**统一负责跨域资源共享（CORS）、身份认证及请求鉴权。” |
| **Microservices** | 微服务 | 小型服务、细粒度架构 | “拆分**微服务**前，务必先建立标准的服务间链路追踪与契约测试。” |
| **Backend as a Service (BaaS)** | BaaS（后端即服务） | 后端托管系统 | “对比 Firebase、Supabase 与 Appwrite 三大主流 **BaaS** 方案。” |
| **Serverless** | Serverless / 无服务器架构 | 免服务器、无服计算 | “利用 BaaS 平台搭配边缘函数搭建**生产级 Serverless 后端**。” |
| **Edge Functions** | 边缘函数 | 边际函数、边缘计算点 | “将认证检查和重定向逻辑卸载至靠近用户的**边缘函数**执行。” |
| **Real-Time Data Sync** | 实时数据同步 | 及时同步、实况数据传输 | “使用 WebSocket 与 **CRDT**（无冲突复制数据类型）实现协同编辑的**实时数据同步**。” |
| **Retrieval-Augmented Generation (RAG)** | RAG（检索增强生成） | 检索补充生成、增强提取 | “使用向量数据库搭建企业知识库的 **RAG（检索增强生成）** 应用。” |
| **Vector Database** | 向量数据库 | 矢量数据库、向量库 | “在**向量数据库**中持久化高维嵌入向量以支持极速余弦相似度检索。” |
| **Vector Embedding** | 向量嵌入 / Embedding | 矢量内嵌、特征向量 | “将文本切片通过模型转化为 1536 维的**向量嵌入**。” |
| **Chunking** | 分块 / 文本切片 | 碎片化、文本切块 | “合理的**文本分块**策略必须权衡上下文完整度与召回噪声。” |
| **Grounded Answers / Grounding** | 有据回答 / 依据事实对齐 | 接地气回答、锚定回复 | “通过检索到的上下文注入，确保模型输出**有据回答**，彻底抑制虚构。” |
| **Hallucination** | 幻觉 / 模型虚构 | 胡说八道、错觉 | “采用高精度评估基准（Evals）和防护栏监控 LLM 的**模型幻觉**率。” |
| **Fine-Tuning** | 微调 | 细调、精细训练 | “针对垂直领域术语和结构化输出任务对基础大模型进行 **LoRA 微调**。” |
| **LoRA (Low-Rank Adaptation)** | LoRA（低秩自适应） | 低秩调整、小参数训练 | “仅需训练总参数量 0.1% 的权重矩阵，使用 **LoRA** 即可大幅降低计算显存。” |
| **Prompt Engineering** | 提示词工程 | 咒语学、提词设计 | “通过少样本学习（Few-Shot）与思维链（Chain of Thought）做实**提示词工程**。” |
| **Agentic Workflow** | Agent 工作流 / 智能体工作流 | 代理工作流程、智能助手流 | “借助工具调用（Tool Calling）与自省反思构建可靠的 **Agent 工作流**。” |
| **Model Drift** | 模型漂移 | 模型走偏、数据漂走 | “随着线上用户输入特征演化，持续监控并警惕**模型漂移**导致的准召率下降。” |
| **Feature Store** | 特征平台 / 特征库 | 特征商店、特征仓库 | “在 MLOps 流程中引入**特征平台**，确保离线训练与在线推理特征计算口径一致。” |
| **MLOps** | MLOps（机器学习工程化） | 机器运维、ML 运维 | “**MLOps** 的核心在于将模型的打包、金丝雀发布及监控全面自动化。” |
| **Zero-Trust Security** | 零信任安全 | 零信任架构、零盲信 | “**零信任安全**的核心原则：永不信任，持续验证（Never Trust, Always Verify）。” |
| **Identity-Aware Proxy (IAP)** | 身份感知代理 | 身份识别网关、账号代理 | “利用**身份感知代理**在网络边缘验证身份并动态拦截非授权会话。” |
| **Short-Lived Credentials** | 短期凭证 | 短暂钥匙、临时凭据 | “全面弃用长期访问密钥，强制使用短期临时 STS 令牌或证书。” |
| **Microsegmentation** | 微隔离 | 细粒度分段、微分区 | “在内网容器间施行**微隔离**，防止侧向移动渗透（Lateral Movement）。” |
| **Least Privilege** | 最小权限原则 | 极简权限、最小授权 | “遵循**最小权限原则**为每个微服务限定精确的 IAM Role。” |
| **Infrastructure as Code (IaC)** | 基础设施即代码（IaC） | 架构代码化、基建脚本 | “对比 Terraform 的声明式 HCL 与 Pulumi 的通用语言 **IaC** 实践。” |
| **Drift Detection** | 漂移检测 | 偏差检查、配置走样 | “定时触发 CI 任务执行**漂移检测**，发现有人在云控制台上私自更改配置。” |
| **GitOps** | GitOps | Git 运维、Git 驱动发布 | “**GitOps** 将 Git 仓库视为基础设施状态的唯一定理源（Single Source of Truth）。” |
| **Core Pinning / CPU Affinity** | 绑核 / CPU 亲和性 | 核心绑定、CPU 锁定 | “对于超低延迟生产工作负载，通过 **CPU 亲和性（绑核）** 彻底消除上下文切换损耗。” |
| **NUMA Topology** | NUMA 拓扑 | 非一致内存访问形态 | “跨 **NUMA 拓扑**节点访问内存会导致长尾延迟陡增。” |
| **Noisy Neighbor** | 吵闹邻居（资源争抢） | 嘈杂邻居、争抢宿主 | “在公有云上通过独占实例规避**吵闹邻居**对 I/O 的突发侵占。” |
| **Multi-Cloud Architecture** | 多云架构 | 混合云朵、多元云平台 | “在评估**多云架构**前，先算清跨云公网出方向流量（Egress）的巨额账单。” |
| **Vendor Lock-In** | 厂商绑定 / 跑路成本 | 供应商锁死、锁定风险 | “使用开源开放协议避免因深度依赖私有云 API 而陷入**厂商绑定**。” |
| **Cost Optimization** | 成本优化 / 账单瘦身 | 省钱策略、降本增效 | “初创团队的**云成本优化**：优先考虑规格降级、预留折扣与冷存储分级。” |

---

## 4. 27 篇博客标准标题与描述映射 (Canonical Title & Description Reference)

翻译每篇博客的 Frontmatter 时，必须与下方已确认的标题和描述完全一致：

| Slug | 标准中文标题 | 标准中文描述 (Description) |
|---|---|---|
| `future-of-ai-in-software-development` | 2025 之后：AI 软件开发的未来 | 生成式模型、Agent 工作流和自动验证，如何彻底改变现代软件工程。 |
| `building-ai-powered-code-review-systems` | 打造 AI 代码评审系统 | 用 LLM 抓 Bug、卡风格、带新人：自动化评审流水线设计指南。 |
| `machine-learning-pipelines-for-web-developers` | 写给 Web 开发者的机器学习流水线 | 从数据接入到训练、评估、上线，给一线 Web 开发者的 ML 入门。 |
| `generative-ai-for-content-creation` | 用生成式 AI 做内容 | 不丢掉自己的语气，把起草、改稿、扩写交给 LLM。 |
| `building-rag-applications-vector-databases` | 用向量数据库做 RAG 应用 | 分块、向量、检索到有据回答，RAG 端到端指南。 |
| `fine-tuning-llms-domain-specific-tasks` | 垂直领域 LLM 微调 | 提示词还是微调？数据集怎么做？小预算 LoRA 全流程。 |
| `multi-tenant-saas-architecture-patterns` | 多租户 SaaS 架构模式 | 独享、共享、桥接三代模型，隔离、成本、扩展性一次比透。 |
| `building-subscription-billing-systems` | 搭建订阅计费系统 | 试用、按比例、催收、Webhook，做财务敢信的账单系统。 |
| `scaling-saas-applications-million-users` | 撑住百万用户的 SaaS 扩容 | 缓存、队列、只读副本、分片，扛住百万用户的分阶段打法。 |
| `baas-platforms-compared-firebase-supabase-appwrite` | BaaS 横评：Firebase vs Supabase vs Appwrite | 认证、数据库、价格、跑路成本，三家实话实说。 |
| `building-serverless-backends-with-baas` | 用 BaaS 做 Serverless 后端 | 零服务器的生产后端：表结构、边缘函数、后台任务。 |
| `real-time-data-sync-backend-services` | 后端实时数据同步 | WebSocket、CRDT、托管实时服务，在线状态、协同编辑全拿下。 |
| `rest-vs-graphql-choosing-right-api-paradigm` | REST vs GraphQL 怎么选 | 版本、缓存、载荷、团队速度，一套选型框架讲清。 |
| `api-rate-limiting-throttling-strategies` | API 限流与节流策略 | 不误伤好用户的前提下，用令牌桶和配额守住 API。 |
| `building-api-gateways-microservices` | 给微服务搭 API 网关 | 认证、路由、转换、可观测，全部收敛到集群边缘。 |
| `cloud-cost-optimization-strategies-startups` | 初创公司的云账单瘦身术 | 调规格、买承诺、转冷存、打标签，云账单直降三到五成。 |
| `multi-cloud-architecture-aws-azure-gcp` | AWS·Azure·GCP 多云架构 | 多云什么时候划算，怎么用容器和 IaC 保住可移植性。 |
| `containers-vs-vms-when-to-use-each` | 容器 vs 虚拟机：何时用谁 | 隔离、开销、运维三笔账，选得明明白白。 |
| `optimizing-vm-performance-production-workloads` | 生产环境虚拟机调优 | 绑核、NUMA、存储队列、防邻居吵，可预测的 VM 性能。 |
| `gitops-managing-infrastructure-with-git` | GitOps：拿 Git 管基础设施 | 声明式基建、PR 评审、漂移检测、自动同步。 |
| `building-zero-downtime-deployment-pipelines` | 零停机发布流水线 | 蓝绿、金丝雀、滚动加健康门禁，用户无感知的发布。 |
| `infrastructure-as-code-terraform-pulumi` | Terraform 与 Pulumi 写 IaC | HCL 还是通用语言？状态管理、模块设计一次讲透。 |
| `zero-trust-security-web-applications` | Web 应用零信任安全 | 永不信任、持续验证：身份感知代理、短期凭证、微隔离。 |
| `owasp-top-10-complete-mitigation-guide` | OWASP Top 10 根治指南 | 十大风险，有问题的代码和修好的代码对照着看，今天就能用。 |
| `implementing-oauth2-openid-connect` | 落地 OAuth2 和 OpenID Connect | PKCE 授权码、令牌存哪、怎么轮换、怎么登出，一次做对。 |
| `mlops-deploying-ml-models-production` | MLOps：模型上线生产环境 | 模型仓库、金丝雀 serving、特征平台、回滚预案，稳稳上线。 |
| `monitoring-ai-systems-in-production` | 生产 AI 系统监控 | 配上评估和护栏，把 AI 功能的质量、漂移、成本、延迟盯住。 |
