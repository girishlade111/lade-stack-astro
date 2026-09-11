# Lade Stack Technical Translation Glossary & Style Guide — Português do Brasil (pt-BR)

- **Localidade Alvo (Target Locale)**: `pt-BR` / `pt_BR` (Portuguese - Brazil / Português do Brasil)
- **Público-Alvo (Target Audience)**: Desenvolvedores de software brasileiros, engenheiros de backend e frontend, profissionais de DevOps/SRE, arquitetos de nuvem e engenheiros de IA/ML (estilo TabNews, Nubank/iFood tech blogs, Alura, Rocketseat).
- **Tom e Registro (Tone & Register)**: Direto, técnico, pragmático, de engenheiro para engenheiro (peer-to-peer). Focado em produção, com vocabulário natural do ecossistema de software brasileiro e sem jargões de marketing.

---

## 1. Princípios de Estilo e Guia de Escrita (Tone & Style Guide)

1. **Linguagem Técnica Natural do Brasil**:
   - Desenvolvedores brasileiros utilizam naturalmente termos consagrados da indústria como *deploy, pipeline, commit, pull request, rollback, payload, timeout, thread, cluster, build*.
   - Evite traduções literais arcaicas ou variantes de Portugal que soem artificiais (ex.: não use *ecrã, ficheiro, comutador, descarregar* — use *tela, arquivo, switch, baixar/download*).
2. **Sem Firulas de Marketing (No Fluff)**:
   - Elimine adjetivos grandilocuentes (“revolucionário”, “mágico”, “incrível”).
   - Foque em métricas, trade-offs de engenharia e cenários de falha reais (ex.: *“reduz a latência p99 de 450 ms para 80 ms”*, *“evita o esgotamento do pool de conexões do banco sob picos de tráfego”*).
3. **Tratamento e Voz**:
   - Use o pronome **você** de forma direta, mantendo uma conversa profissional e fluida entre colegas de profissão.
   - Prefira verbos de ação no infinitivo ou imperativo suave nas instruções: *“configure o circuit breaker”, “isole o banco”, “monitore o drift”*.
4. **Pontuação e Formatação**:
   - Use aspas duplas padrão (“...”) para citações e termos em destaque no corpo do texto.
   - Siga a formatação numérica brasileira em texto corrente (ex.: *“30% a 50%”*), mas mantenha unidades técnicas e métricas sem tradução (*“300 ms”*, *“10 GB”*, *“5 req/s”*).

---

## 2. Termos que NUNCA Devem Ser Traduzidos (Must Stay in English)

Os itens a seguir devem permanecer **estritamente em inglês**:

### 2.1 Marcas e Nomes de Produtos
- `Lade Stack` / `LadeStack`
- `CodeEnhance AI`
- `LS PDF Tools`
- `LS Image Studio`
- `Secure File Hub`
- `Website Builder AI`
- `API Testing Platform`

### 2.2 Tecnologias, Linguagens, Frameworks e Nuvem
- **Linguagens e Runtimes**: `TypeScript`, `JavaScript`, `Python`, `Go`, `Rust`, `SQL`, `HTML`, `CSS`, `Node.js`, `Bun`, `Deno`
- **Frameworks e Libs**: `React`, `Astro`, `Next.js`, `Vite`, `Vue`, `Svelte`, `Tailwind CSS`
- **Infraestrutura e Containers**: `Kubernetes`, `Docker`, `Terraform`, `Pulumi`, `AWS`, `Azure`, `GCP`, `Cloudflare`, `Vercel`
- **Bancos de Dados e Caches**: `PostgreSQL`, `MySQL`, `Redis`, `MongoDB`, `Supabase`, `Firebase`, `Appwrite`, `pgvector`, `Pinecone`, `Milvus`, `Qdrant`
- **Observabilidade**: `OpenTelemetry`, `Prometheus`, `Grafana`, `Jaeger`

### 2.3 Protocolos, Padrões e Segurança
- `REST`, `GraphQL`, `WebSocket`, `gRPC`, `CRDT`
- `OAuth 2.0`, `OpenID Connect`, `PKCE`, `JWT`, `JWK`, `TLS 1.3`, `mTLS`, `HTTPS`
- `OWASP`, `OWASP Top 10`

### 2.4 Identificadores de Código e Comandos CLI
- Nomes de funções, variáveis, classes, tipos e propriedades: `runWithResilience`, `circuitBreaker`, `timeoutMs`, `retries`
- Comandos de terminal e flags: `kubectl apply -f`, `docker compose up`, `npm run build`, `--namespace`, `-it`
- Caminhos de arquivo e chaves: `astro.config.mjs`, `package.json`, `tsconfig.json`, `/blog`, `/blog/[slug]`

### 2.5 Primitivos HTTP
- Métodos HTTP: `GET`, `POST`, `PUT`, `DELETE`, `PATCH`, `OPTIONS`, `HEAD`
- Códigos de status: `200 OK`, `301 Moved Permanently`, `400 Bad Request`, `401 Unauthorized`, `403 Forbidden`, `404 Not Found`, `429 Too Many Requests`, `500 Internal Server Error`, `502 Bad Gateway`
- Headers: `Authorization`, `Content-Type`, `Cache-Control`, `X-Forwarded-For`

---

## 3. Tabela de Glossário Técnico Padronizado (Technical Glossary)

Em todos os 27 artigos do blog, use estritamente as traduções consagradas abaixo:

| Termo em Inglês (Source) | Tradução Padrão para pt-BR (Canonical) | Variantes Proibidas / Não Recomendadas | Exemplo de Aplicação Técnica (Context) |
|---|---|---|---|
| **Zero-Downtime Deployment** | Deploy sem downtime / Deploy sem interrupção | Desdobramento zero, lançamento sem parada | “Construindo pipelines de **deploy sem downtime** com health gates.” |
| **Blue-Green Deployment** | Deploy blue-green | Implantação azul-verde | “O **deploy blue-green** garante rollback instantâneo ao alternar o roteador de tráfego.” |
| **Canary Deployment** | Deploy canário / Release canário | Lançamento passarinho | “Envie 5% do tráfego real para o **deploy canário** antes de promover a release completa.” |
| **Rolling Update** | Atualização contínua (Rolling update) / Rolling deployment | Atualização rolante | “O Kubernetes realiza **rolling updates** substituindo réplicas de pods gradualmente.” |
| **Health Gate / Readiness Probe** | Health gate / Readiness probe (Sonda de prontidão) | Portão de saúde | “O roteamento só é comutado após o **readiness probe** retornar status 200 OK.” |
| **Rate Limiting** | Rate limiting / Limitação de taxa | Limitação de velocidade | “Configure **rate limiting** distribuído com Redis no API gateway para proteger o backend.” |
| **Throttling** | Throttling / Estrangulamento de requisições | Sufocamento, esganadura | “Quando o cliente excede a cota, o serviço aplica **throttling** adicionando atraso progressivo.” |
| **Token Bucket** | Token bucket (Balde de tokens) | Balde de fichas | “O algoritmo **token bucket** acomoda rajadas repentinas de tráfego sem quebrar a vazão média.” |
| **Leaky Bucket** | Leaky bucket (Balde furado) | Balde vazador | “O **leaky bucket** suaviza o fluxo de saída para que as requisições cheguem ao banco em taxa constante.” |
| **Circuit Breaker** | Circuit breaker (Disjuntor de circuito) | Interruptor | “Implemente o padrão **circuit breaker** para evitar falhas em cascata entre microsserviços.” |
| **Multi-Tenant / Multi-Tenancy** | Multi-tenant / Multilocação | Multi-inquilino | “Padrões de arquitetura SaaS **multi-tenant**: comparando isolamento, custo e escala.” |
| **Tenant Isolation** | Isolamento de tenants | Segregação de inquilinos | “Aplicação de Row-Level Security (RLS) para garantir rigoroso **isolamento de tenants**.” |
| **Read Replica** | Réplica de leitura (Read replica) | Cópia de leitura | “Descarregue consultas analíticas pesadas e dashboards para uma **réplica de leitura**.” |
| **Database Sharding** | Sharding de banco de dados / Particionamento horizontal | Fragmentação de base | “**Sharding** por hash de tenant ID para escalar a capacidade de escrita horizontalmente.” |
| **Connection Pooling** | Pool de conexões (Connection pooling) | Bacia de conexões | “Em ambientes serverless, o uso de um proxy de **pool de conexões** (ex: PgBouncer) é obrigatório.” |
| **API Gateway** | API gateway | Portal de API | “Centralize autenticação, roteamento dinâmico e CORS no **API gateway**.” |
| **Microservices** | Microsserviços | Micro-serviços | “Estratégias de decomposição de monólitos em **microsserviços** desacoplados com contratos claros.” |
| **Backend as a Service (BaaS)** | BaaS (Backend as a Service) | Retaguarda como serviço | “Comparativo de plataformas **BaaS**: Firebase vs Supabase vs Appwrite.” |
| **Serverless** | Serverless / Sem servidor | Sem servidores | “Construa arquiteturas **serverless** resilientes utilizando BaaS e edge functions.” |
| **Edge Functions** | Edge functions / Funções de borda | Funções de ponta | “Execute a validação de autenticação em **edge functions** próximas aos usuários.” |
| **Real-Time Data Sync** | Sincronização de dados em tempo real | Sincronização em tempo real | “Uso de WebSockets e **CRDT** para **sincronização de dados em tempo real** e edição colaborativa.” |
| **Retrieval-Augmented Generation (RAG)** | RAG (Geração aumentada por recuperação) | Recuperação aumentada | “Guia ponta a ponta para construir aplicações **RAG** com bancos vetoriais.” |
| **Vector Database** | Banco vetorial / Banco de dados vetorial | Banco de vetores | “Armazene embeddings de alta dimensão em um **banco vetorial** para busca por similaridade de cosseno.” |
| **Vector Embedding** | Embedding vetorial / Embedding | Vetor embutido | “Conversão de trechos de texto em **embeddings vetoriais** densos de 1536 dimensões.” |
| **Chunking** | Chunking / Divisão de texto | Fragmentação em pedaços | “Estratégias de **chunking** com janelas sobrepostas para preservar o contexto semântico.” |
| **Grounded Answers / Grounding** | Respostas fundamentadas / Grounding | Respostas aterradas | “Injeção de contexto verificado para produzir **respostas fundamentadas** e mitigar alucinações.” |
| **Hallucination** | Alucinação do modelo | Miragem, delírio | “Uso de esquemas estruturados e guardrails para suprimir **alucinações** em LLMs.” |
| **Fine-Tuning** | Fine-tuning / Ajuste fino | Sintonia fina | “Quando optar por **fine-tuning** versus engenharia de prompt em tarefas especializadas.” |
| **LoRA (Low-Rank Adaptation)** | LoRA (Adaptação de baixo rank) | Adaptação de baixo nível | “Treine apenas 0,1% dos parâmetros do modelo com **LoRA**, reduzindo drasticamente o consumo de GPU.” |
| **Prompt Engineering** | Engenharia de prompt | Engenharia de instruções | “Boas práticas de **engenharia de prompt**: Few-Shot prompting e Chain-of-Thought (CoT).” |
| **Agentic Workflow** | Fluxo agêntico / Workflows de agentes | Fluxo de representantes | “Construindo **fluxos agênticos** com tool calling e ciclos de feedback automatizados.” |
| **Model Drift** | Drift do modelo / Desvio de modelo | Deriva de modelo | “Monitore o **drift do modelo** e a distribuição dos dados de entrada em produção.” |
| **Feature Store** | Feature store (Armazém de atributos) | Loja de features | “Garanta paridade de features entre treino e inferência com uma **feature store** centralizada.” |
| **MLOps** | MLOps (Operações de Machine Learning) | Operações de ML | “Automatizando pipelines de **MLOps**: de model registries a canary serving e rollbacks.” |
| **Zero-Trust Security** | Segurança Zero Trust | Segurança de confiança zero | “Princípio da arquitetura **Zero Trust**: nunca confie, sempre verifique (Never Trust, Always Verify).” |
| **Identity-Aware Proxy (IAP)** | Proxy com reconhecimento de identidade (IAP) | Proxy consciente de identidade | “Substitua VPNs legadas por um **Identity-Aware Proxy** para controle de acesso granular.” |
| **Short-Lived Credentials** | Credenciais de curta duração / Tokens temporários | Senhas curtas | “Abandone chaves de API estáticas em favor de **credenciais de curta duração** com rotação contínua.” |
| **Microsegmentation** | Microssegmentação | Micro-segmentação | “Implemente **microssegmentação** de rede para barrar a movimentação lateral de invasores.” |
| **Least Privilege** | Princípio do menor privilégio | Privilégio mínimo | “Aplique o **princípio do menor privilégio** concedendo apenas as permissões de IAM estritamente necessárias.” |
| **Infrastructure as Code (IaC)** | Infraestrutura como Código (IaC) | Infraestrutura em código | “Comparando a abordagem declarativa do Terraform com linguagens imperativas no **IaC**.” |
| **Drift Detection** | Detecção de drift (Detecção de desvio) | Detecção de desvios manuais | “Pipelines de CI executam **detecção de drift** para flagrar alterações manuais feitas no console de nuvem.” |
| **GitOps** | GitOps | Operações com Git | “No **GitOps**, o repositório Git atua como a única fonte da verdade (SSOT) para o estado do cluster.” |
| **Core Pinning / CPU Affinity** | CPU pinning / Afinidade de CPU | Fixação de núcleo | “Para workloads com latência crítica, o **CPU pinning** elimina o overhead de trocas de contexto do kernel.” |
| **NUMA Topology** | Topologia NUMA | Topologia de memória NUMA | “Otimize a alocação de nós respeitando a **topologia NUMA** para evitar contenção de barramento de memória.” |
| **Noisy Neighbor** | Noisy neighbor (Vizinho barulhento) | Vizinho ruidoso | “Como isolar instâncias de nuvem para evitar degradação de IOPS provocada por **noisy neighbors**.” |
| **Multi-Cloud Architecture** | Arquitetura multicloud | Multinuvem | “Projetando uma **arquitetura multicloud** com atenção especial aos custos de tráfego de saída (egress).” |
| **Vendor Lock-In** | Vendor lock-in (Dependência de fornecedor) | Prisão de fornecedor | “Utilize containers e protocolos abertos para minimizar o risco de **vendor lock-in** em clouds proprietárias.” |
| **Cost Optimization** | Otimização de custos de cloud | Corte de gastos | “Estratégias de **otimização de custos de nuvem** para startups: rightsizing, instâncias reservadas e storage lifecycle.” |

---

## 4. Referência dos Títulos e Descrições dos 27 Artigos (Article Reference)

| Slug | Título Padrão em Português | Descrição (Description) |
|---|---|---|
| `future-of-ai-in-software-development` | O futuro do desenvolvimento com IA: 2025 e além | Como modelos generativos, fluxos agênticos e verificação automática estão mudando a engenharia de software. |
| `building-ai-powered-code-review-systems` | Construindo code review com IA | Como desenhar revisões automáticas que pegam bugs, impõem estilo e mentoram devs. |
| `machine-learning-pipelines-for-web-developers` | Pipelines de ML para devs web | Da ingestão ao treino, avaliação e serving — uma entrada prática em ML. |
| `generative-ai-for-content-creation` | IA generativa para criar conteúdo | Como delegar rascunho, edição e escala ao LLM sem perder sua voz. |
| `building-rag-applications-vector-databases` | Apps RAG com bancos vetoriais | Chunking, embeddings, busca vetorial e respostas fundamentadas — RAG de ponta a ponta. |
| `fine-tuning-llms-domain-specific-tasks` | Fine-tuning de LLMs por domínio | Quando tunar e quando só pedir; datasets e pipelines LoRA de baixo custo. |
| `multi-tenant-saas-architecture-patterns` | SaaS multi-tenant: padrões | Silo, pool e bridge: isolamento, custo e escala comparados. |
| `building-subscription-billing-systems` | Construindo billing por assinatura | Trial, prorrata, cobrança e webhooks — um billing que o financeiro confia. |
| `scaling-saas-applications-million-users` | SaaS para um milhão de usuários | Cache, filas, réplicas de leitura e sharding — plano em fases até o milhão. |
| `baas-platforms-compared-firebase-supabase-appwrite` | BaaS comparado: Firebase vs Supabase vs Appwrite | Comparação honesta: auth, banco, preço e estratégia de saída. |
| `building-serverless-backends-with-baas` | Backends serverless com BaaS | Backend de produção sem servidor: schema, edge functions, jobs. |
| `real-time-data-sync-backend-services` | Sync de dados em tempo real | WebSocket, CRDT e realtime gerenciado para presença e edição colaborativa. |
| `rest-vs-graphql-choosing-right-api-paradigm` | REST vs GraphQL: o que escolher | Um framework de decisão via versionamento, cache, payloads e velocidade do time. |
| `api-rate-limiting-throttling-strategies` | Rate limiting e throttling em APIs | Token buckets e quotas que protegem a API sem punir bons clientes. |
| `building-api-gateways-microservices` | API gateways para microsserviços | Auth, roteamento, transformação e observabilidade na borda da frota. |
| `cloud-cost-optimization-strategies-startups` | Otimizando custo de cloud em startups | Rightsizing, commits, lifecycle de storage e tags cortando 30–50% da conta. |
| `multi-cloud-architecture-aws-azure-gcp` | Multicloud: AWS, Azure e GCP | Quando multicloud compensa e como manter portabilidade com containers e IaC. |
| `containers-vs-vms-when-to-use-each` | Containers vs VMs: quando usar cada | Isolamento, overhead e operação — escolha com confiança. |
| `optimizing-vm-performance-production-workloads` | Tuning de VMs em produção | CPU pinning, NUMA, filas de storage e defesa contra vizinho barulhento. |
| `gitops-managing-infrastructure-with-git` | GitOps: infra gerida com Git | Infra declarativa, review em PR, detecção de drift e sync automático. |
| `building-zero-downtime-deployment-pipelines` | Deploys sem downtime | Blue-green, canary e rolling com health gates — deploys que ninguém percebe. |
| `infrastructure-as-code-terraform-pulumi` | IaC com Terraform e Pulumi | HCL ou linguagem de verdade, state e desenho de módulos. |
| `zero-trust-security-web-applications` | Zero Trust para web apps | Nunca confie, sempre verifique: proxies com identidade, credenciais curtas, microssegmentação. |
| `owasp-top-10-complete-mitigation-guide` | OWASP Top 10: guia completo | Os 10 riscos: código vulnerável lado a lado com o corrigido — aplique hoje. |
| `implementing-oauth2-openid-connect` | Implementando OAuth2 e OpenID Connect | Authorization code + PKCE, guarda de tokens, rotação e logout — certo de primeira. |
| `mlops-deploying-ml-models-production` | MLOps: modelos em produção | Registries, serving canário, feature store e rollback — modelos confiáveis. |
| `monitoring-ai-systems-in-production` | Monitorando sistemas de IA em prod | Qualidade, drift, custo e latência das features de IA — com evals e guardrails. |
