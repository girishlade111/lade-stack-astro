# Lade Stack Technical Translation Glossary & Style Guide — 한국어 (ko)

- **대상 로케일 (Target Locale)**: `ko` / `ko_KR` (Korean / 한국어)
- **대상 독자 (Target Audience)**: 국내 백엔드·프론트엔드 엔지니어, 클라우드/DevOps/SRE 실무자, MLOps 및 AI 시스템 아키텍트 (Velog, GeekNews, 당근·토스·우아한형제들 테크 블로그 독자 수준)
- **어조 및 문체 (Tone & Register)**: 명확하고 군더더기 없는 엔지니어 대 엔지니어의 대화체, 실무 중심의 기술적 직설성, 마케팅성 수식어 배제.

---

## 1. 문체 및 스타일 가이드라인 (Tone & Style Guide)

1. **엔지니어 피어 투 피어 (Peer-to-Peer)**:
   - 프로덕션 환경의 실질적인 트레이드오프(비용, 지연 시간, 가용성, 장애 모드)를 다룹니다.
   - 근거 없는 마케팅성 찬사(“경이로운 혁신”, “마법 같은 기능”)를 철저히 지양하고, 엔지니어링 팩트와 수치로 설명합니다(예: “p99 응답 지연을 450 ms에서 80 ms로 단축”, “커넥션 풀 고갈을 방지해 트래픽 폭증 시 DB 다운 예방”).
2. **어조의 통일 (해요체 / 하십시오체)**:
   - 본문 설명 및 튜토리얼 해설은 부드럽고 전문적인 **‘해요체 / 하십시오체’**를 일관되게 사용합니다.
   - 제목, 체크리스트, 표 항목은 명사형 종결 또는 간결한 개조식 문장(예: “~하기”, “~설계”)을 적용합니다.
3. **한글 맞춤법 및 띄어쓰기 규약**:
   - 영문 및 코드 식별자 앞뒤로 적절한 띄어쓰기를 유지합니다.
     - ◯ 바른 예: `Kubernetes 클러스터에 배포할 때 리소스 요청과 제한을 명시합니다.`
     - ✕ 틀린 예: `Kubernetes클러스터에배포할때...`
   - 외래어 표기법을 준수하되, 국내 개발자 커뮤니티에서 통용되는 표준 관례(배포, 파이프라인, 캐싱, 웹훅, 롤백)를 우선합니다.
4. **문장 부호**:
   - 본문 문장은 표준 온점(.), 반점(,), 물음표(?), 느낌표(!)를 사용합니다.
   - 큰따옴표(“ ”)와 작은따옴표(‘ ’)는 표준 글꼴 기호를 준수합니다.

---

## 2. 절대 번역하지 않는 영어 표기 (Must Stay in English)

다음 항목은 한글 음차나 직역 없이 **영문 원문 그대로 유지**합니다:

### 2.1 브랜드 및 제품명
- `Lade Stack` / `LadeStack`
- `CodeEnhance AI`
- `LS PDF Tools`
- `LS Image Studio`
- `Secure File Hub`
- `Website Builder AI`
- `API Testing Platform`

### 2.2 기술 스택, 언어 및 인프라
- **언어 및 런타임**: `TypeScript`, `JavaScript`, `Python`, `Go`, `Rust`, `SQL`, `HTML`, `CSS`, `Node.js`, `Bun`, `Deno`
- **프레임워크**: `React`, `Astro`, `Next.js`, `Vite`, `Vue`, `Svelte`, `Tailwind CSS`
- **클라우드 및 컨테이너**: `Kubernetes`, `Docker`, `Terraform`, `Pulumi`, `AWS`, `Azure`, `GCP`, `Cloudflare`, `Vercel`
- **데이터베이스 및 캐시**: `PostgreSQL`, `MySQL`, `Redis`, `MongoDB`, `Supabase`, `Firebase`, `Appwrite`, `pgvector`, `Pinecone`, `Milvus`, `Qdrant`
- **관측 가능성 도구**: `OpenTelemetry`, `Prometheus`, `Grafana`, `Jaeger`

### 2.3 표준 프로토콜 및 인증 규격
- `REST`, `GraphQL`, `WebSocket`, `gRPC`, `CRDT`
- `OAuth 2.0`, `OpenID Connect`, `PKCE`, `JWT`, `JWK`, `TLS 1.3`, `mTLS`, `HTTPS`
- `OWASP`, `OWASP Top 10`

### 2.4 코드 식별자 및 CLI 명령어
- 코드 내 모든 함수, 변수, 클래스, 타입, 파라미터명: `runWithResilience`, `circuitBreaker`, `timeoutMs`, `retries`
- 터미널 명령어 및 플래그: `kubectl apply -f`, `docker compose up`, `npm run build`, `--namespace`, `-it`
- 설정 파일 및 경로: `astro.config.mjs`, `package.json`, `tsconfig.json`, `/blog`, `/blog/[slug]`

### 2.5 HTTP 원어
- HTTP 메서드: `GET`, `POST`, `PUT`, `DELETE`, `PATCH`, `OPTIONS`, `HEAD`
- 상태 코드: `200 OK`, `301 Moved Permanently`, `400 Bad Request`, `401 Unauthorized`, `403 Forbidden`, `404 Not Found`, `429 Too Many Requests`, `500 Internal Server Error`, `502 Bad Gateway`
- 헤더 이름: `Authorization`, `Content-Type`, `Cache-Control`, `X-Forwarded-For`

---

## 3. 핵심 기술 용어 표준 매핑 표 (Technical Glossary)

27개 블로그 게시물 전체에서 아래 표의 **표준 한글 번역**을 단일하게 통일하여 사용해야 합니다:

| 원문 (English Source) | 표준 한국어 번역 (Canonical) | 금지/부적절한 번역 (Disallowed) | 맥락 및 실무 예제 (Context & Example) |
|---|---|---|---|
| **Zero-Downtime Deployment** | 무중단 배포 | 무정지 배치, 다운타임 제로 | “헬스 게이트를 결합한 **무중단 배포** 파이프라인 설계.” |
| **Blue-Green Deployment** | 블루-그린 배포 | 청록 배치 | “**블루-그린 배포**를 통해 장애 발생 시 즉각적인 롤백을 보장합니다.” |
| **Canary Deployment** | 카나리 배포 / 카나리 릴리스 | 카나리아 전개 | “실제 유저 트래픽의 5%를 **카나리 배포**에 흘려보내 안전성을 검증합니다.” |
| **Rolling Update** | 롤링 업데이트 / 롤링 배포 | 회전 갱신 | “Pod 인스턴스를 하나씩 순차 교체하는 **롤링 업데이트**를 수행합니다.” |
| **Health Gate / Readiness Probe** | 헬스 게이트 / 준비성 프로브 (Readiness Probe) | 건강 문지기 | “트래픽 라우팅 전환 전에 **준비성 프로브**의 200 OK 응답을 확인합니다.” |
| **Rate Limiting** | 레이트 리밋 / 처리율 제한 | 속도 한도 | “API 게이트웨이에서 Redis 기반 분산 **레이트 리밋**을 적용합니다.” |
| **Throttling** | 스로틀링 | 조임, 스로틀 | “쿼터를 초과한 악성 요청에 대해 점진적 지연 **스로틀링**을 발동합니다.” |
| **Token Bucket** | 토큰 버킷 | 표식 양동이 | “**토큰 버킷** 알고리즘은 순간적인 버스트 트래픽을 유연하게 허용합니다.” |
| **Leaky Bucket** | 리키 버킷 | 새는 양동이 | “**리키 버킷** 방식으로 데이터베이스로 유입되는 쿼리 흐름을 평활화합니다.” |
| **Circuit Breaker** | 서킷 브레이커 (회로 차단기) | 차단 스위치 | “다운스트림 마이크로서비스 장애 전파를 방지하기 위해 **서킷 브레이커**를 배치합니다.” |
| **Multi-Tenant / Multi-Tenancy** | 멀티테넌트 / 멀티테넌시 | 다중 입주 | “SaaS 아키텍처에서 **멀티테넌트** 데이터 격리와 인프라 비용 최적화.” |
| **Tenant Isolation** | 테넌트 격리 | 고객 분리 | “Row-Level Security(RLS)를 통한 엄격한 논리적 **테넌트 격리** 구현.” |
| **Read Replica** | 읽기 복제본 (Read Replica) | 읽기 사본 | “부하가 심한 집계 및 통계 쿼리를 **읽기 복제본**으로 분산합니다.” |
| **Database Sharding** | 데이터베이스 샤딩 / 샤딩 | 데이터베이스 파편화 | “테넌트 ID 해시 기반의 **데이터베이스 샤딩**으로 수평 확장을 달성합니다.” |
| **Connection Pooling** | 커넥션 풀링 / 연결 풀 | 커넥션 모음 | “서버리스 환경에서는 PgBouncer 등 외부 **커넥션 풀링** 프록시가 필수적입니다.” |
| **API Gateway** | API 게이트웨이 | API 관문 | “**API 게이트웨이**에서 인증, 동적 라우팅, CORS 처리를 중앙 집중화합니다.” |
| **Microservices** | 마이크로서비스 | 미세 서비스 | “모놀리스를 자율적인 **마이크로서비스**로 단계적 분해하는 전략.” |
| **Backend as a Service (BaaS)** | BaaS (Backend as a Service) | 서비스형 백엔드 | “Firebase, Supabase, Appwrite 등 3대 **BaaS** 플랫폼 솔직 비교.” |
| **Serverless** | 서버리스 | 무서버 | “BaaS와 엣지 함수를 조합하여 관리 부담 없는 **서버리스** 프로덕션을 구축합니다.” |
| **Edge Functions** | 엣지 함수 (Edge Functions) | 모서리 함수 | “사용자와 가까운 CDN **엣지 함수**에서 인증 검증과 리다이렉트를 처리합니다.” |
| **Real-Time Data Sync** | 실시간 데이터 동기화 | 즉시 동기화 | “WebSocket과 **CRDT**(무충돌 복제 데이터 타입)를 활용한 동시 편집 **실시간 데이터 동기화**.” |
| **Retrieval-Augmented Generation (RAG)** | RAG (검색 증강 생성) | 추출 증강 | “벡터 데이터베이스를 결합한 엔터프라이즈 **RAG(검색 증강 생성)** 구축.” |
| **Vector Database** | 벡터 데이터베이스 / 벡터 DB | 벡터 자료창고 | “고차원 임베딩을 저장하고 코사인 유사도를 연산하는 **벡터 데이터베이스**.” |
| **Vector Embedding** | 벡터 임베딩 / 임베딩 | 벡터 내장 | “텍스트 청크를 1536차원 밀집 **벡터 임베딩**으로 변환합니다.” |
| **Chunking** | 청킹 (문서 분할) | 쪼개기 | “문맥 손실을 최소화하는 슬라이딩 윈도우 기반 **청킹** 전략.” |
| **Grounded Answers / Grounding** | 근거 있는 답변 / 그라운딩 | 접지 답변 | “검색된 문서 문맥을 주입하여 환각을 억제하고 **근거 있는 답변**을 도출합니다.” |
| **Hallucination** | 환각 (Hallucination) | 허상 생성 | “구조화된 출력 스키마 검증으로 LLM의 **환각** 현상을 차단합니다.” |
| **Fine-Tuning** | 파인튜닝 (미세 조정) | 미세 튜닝 | “특화 도메인 작업을 위해 사전 학습 모델에 **LoRA 파인튜닝**을 적용합니다.” |
| **LoRA (Low-Rank Adaptation)** | LoRA (저랭크 적응) | 작은 랭크 적응 | “전체 가중치 대신 저차원 행렬만 학습시키는 **LoRA** 기법으로 GPU 비용 절감.” |
| **Prompt Engineering** | 프롬프트 엔지니어링 | 지시문 작성법 | “Few-Shot과 CoT(Chain-of-Thought)를 활용한 실전 **프롬프트 엔지니어링**.” |
| **Agentic Workflow** | 에이전틱 워크플로 (에이전트 워크플로) | 대리인 작업흐름 | “도구 호출(Tool Calling)과 자기 반성을 결합한 **에이전틱 워크플로** 구축.” |
| **Model Drift** | 모델 드리프트 (성능 저하) | 모델 표류 | “운영 중 입력 데이터 분포의 변화에 따른 **모델 드리프트** 모니터링.” |
| **Feature Store** | 피처 스토어 | 특징 저장소 | “학습 파이프라인과 서빙 파이프라인의 데이터 일관성을 지키는 **피처 스토어**.” |
| **MLOps** | MLOps (머신러닝 운영) | 머신러닝 옵스 | “모델 레지스트리, 카나리 서빙, 자동 롤백을 포괄하는 **MLOps** 체계.” |
| **Zero-Trust Security** | 제로트러스트 보안 | 무신뢰 안전 | “'결코 신뢰하지 말고 항상 검증하라'는 원칙의 **제로트러스트 보안**.” |
| **Identity-Aware Proxy (IAP)** | ID 인식 프록시 (Identity-Aware Proxy) | 신원 프록시 | “전통적인 사내망 VPN을 대체하는 **ID 인식 프록시** 접근 통제.” |
| **Short-Lived Credentials** | 단기 자격증명 / 임시 토큰 | 수명 짧은 인증서 | “영구적인 API 시크릿을 없애고 자동 갱신되는 **단기 자격증명**을 강제합니다.” |
| **Microsegmentation** | 마이크로 세그멘테이션 | 미세 분할 | “내부 네트워크 침투 시 측면 이동(Lateral Movement)을 막는 **마이크로 세그멘테이션**.” |
| **Least Privilege** | 최소 권한의 원칙 | 극소 권한 | “각 마이크로서비스에 꼭 필요한 권한만 할당하는 **최소 권한의 원칙**.” |
| **Infrastructure as Code (IaC)** | IaC (코드형 인프라) | 코드 인프라 | “Terraform의 선언형 HCL과 Pulumi의 범용 언어를 비교하는 **IaC** 아키텍처.” |
| **Drift Detection** | 드리프트 감지 (형상 변경 감지) | 표류 확인 | “정기 CI 스케줄러로 콘솔에서 수동 변경된 사항을 찾아내는 **드리프트 감지**.” |
| **GitOps** | GitOps | 깃옵스 | “Git 리포지터리를 클러스터 상태의 유일한 진실의 원천(SSOT)으로 삼는 **GitOps**.” |
| **Core Pinning / CPU Affinity** | CPU 피닝 / CPU 친화도 | 코어 고정 | “초저지연 워크로드를 위해 **CPU 피닝**을 적용하여 컨텍스트 스위칭 오버헤드를 제거합니다.” |
| **NUMA Topology** | NUMA 토폴로지 | 누마 구조 | “메모리 접근 지연을 줄이기 위해 노드별 **NUMA 토폴로지**를 계산해 파드를 배치합니다.” |
| **Noisy Neighbor** | 노이지 네이버 (자원 경합) | 시끄러운 이웃 | “멀티테넌트 가상화 환경에서 **노이지 네이버**로 인한 디스크 I/O 병목을 격리합니다.” |
| **Multi-Cloud Architecture** | 멀티클라우드 아키텍처 | 다중 구름 설계 | “네트워크 아웃바운드(Egress) 비용을 고려한 실용적 **멀티클라우드 아키텍처**.” |
| **Vendor Lock-In** | 벤더 록인 (종속성) | 공급업체 고착 | “오픈소스 표준 인터페이스를 채택해 특정 클라우드 **벤더 록인**을 탈출합니다.” |
| **Cost Optimization** | 클라우드 비용 최적화 | 요금 절감 | “인스턴스 라이츠사이징, 약정 할인, 콜드 스토리지 수명주기 설정을 통한 **비용 최적화**.” |

---

## 4. 27개 블로그 표준 한국어 제목 및 설명 매핑 표 (Article Reference)

| Slug | 표준 한국어 제목 | 설명 (Description) |
|---|---|---|
| `future-of-ai-in-software-development` | 2025년 이후 AI 소프트웨어 개발의 미래 | 생성형 모델, 에이전틱 워크플로, 자동 검증이 현대 소프트웨어 엔지니어링을 어떻게 바꾸는지 살펴봅니다. |
| `building-ai-powered-code-review-systems` | AI 코드 리뷰 시스템 만들기 | LLM으로 버그를 잡고 스타일을 강제하고 개발자를 멘토링하는 자동 리뷰 파이프라인 설계법. |
| `machine-learning-pipelines-for-web-developers` | 웹 개발자를 위한 머신러닝 파이프라인 | 데이터 수집부터 학습, 평가, 서빙까지 — 실무 웹 개발자를 위한 ML 파이프라인 입문. |
| `generative-ai-for-content-creation` | 생성형 AI로 콘텐츠 만들기 | 자신만의 목소리를 잃지 않으면서 초안, 편집, 확장을 LLM으로 처리하는 법. |
| `building-rag-applications-vector-databases` | 벡터 DB로 RAG 앱 만들기 | 청킹, 임베딩, 벡터 검색부터 근거 있는 답변까지, RAG end-to-end 가이드. |
| `fine-tuning-llms-domain-specific-tasks` | 도메인 특화 LLM 파인튜닝 | 프롬프트 vs 파인튜닝 판단 기준, 데이터셋 준비, 저예산 LoRA 워크플로. |
| `multi-tenant-saas-architecture-patterns` | 멀티테넌트 SaaS 아키텍처 패턴 | 사일로·풀·브리지 테넌시 모델의 격리, 비용, 확장성 트레이드오프 비교. |
| `building-subscription-billing-systems` | 구독 결제 시스템 만들기 | 트라이얼, 일할 계산, 미수금 회수, 웹훅 — 재무팀이 신뢰하는 빌링 설계. |
| `scaling-saas-applications-million-users` | 100만 사용자를 위한 SaaS 스케일링 | 캐싱, 큐, 읽기 복제본, 샤딩 — 100만 사용자를 버티는 단계별 플레이북. |
| `baas-platforms-compared-firebase-supabase-appwrite` | BaaS 비교: Firebase vs Supabase vs Appwrite | 인증, DB, 요금, 탈출 전략까지 세 플랫폼의 솔직 비교. |
| `building-serverless-backends-with-baas` | BaaS로 서버리스 백엔드 만들기 | 서버 없이 프로덕션 백엔드: 스키마 설계, 엣지 함수, 백그라운드 작업. |
| `real-time-data-sync-backend-services` | 백엔드 실시간 데이터 동기화 | 웹소켓, CRDT, 매니지드 리얼타임으로 프레즌스, 라이브 커서, 협업 편집 구현. |
| `rest-vs-graphql-choosing-right-api-paradigm` | REST vs GraphQL: API 패러다임 고르기 | 버저닝, 캐싱, 페이로드, 팀 속도로 따지는 REST/GraphQL 결정 프레임워크. |
| `api-rate-limiting-throttling-strategies` | API 레이트 리밋과 스로틀링 전략 | 좋은 클라이언트는 아프게 하지 않으면서 API를 지키는 토큰 버킷과 쿼터 설계. |
| `building-api-gateways-microservices` | 마이크로서비스 API 게이트웨이 만들기 | 인증, 라우팅, 변환, 관측 가능성을 플릿의 엣지에서. |
| `cloud-cost-optimization-strategies-startups` | 스타트업을 위한 클라우드 비용 최적화 | 라이츠사이징, 약정, 스토리지 수명주기, 태깅 규율로 클라우드 요금 30~50% 절감. |
| `multi-cloud-architecture-aws-azure-gcp` | AWS·Azure·GCP 멀티클라우드 아키텍처 | 멀티클라우드가 이득인 경우와 컨테이너·IaC로 이식성을 지키는 법. |
| `containers-vs-vms-when-to-use-each` | 컨테이너 vs VM: 언제 뭘 쓸까 | 격리, 오버헤드, 운영 트레이드오프로 확신을 갖고 고르기. |
| `optimizing-vm-performance-production-workloads` | 프로덕션 VM 성능 최적화 | CPU 피닝, NUMA, 스토리지 큐, 노이지 네이버 방어 — 예측 가능한 VM 성능. |
| `gitops-managing-infrastructure-with-git` | GitOps: Git으로 인프라 관리하기 | 선언적 인프라, PR 리뷰, 드리프트 감지, 자동 동기화. |
| `building-zero-downtime-deployment-pipelines` | 무중단 배포 파이프라인 만들기 | 블루-그린, 카나리, 롤링 전략과 헬스 게이트 — 사용자가 모르는 배포. |
| `infrastructure-as-code-terraform-pulumi` | Terraform·Pulumi로 IaC하기 | HCL vs 범용 언어, 상태 관리, 모듈 설계. |
| `zero-trust-security-web-applications` | 웹 앱 제로트러스트 보안 | 믿지 말고 항상 검증: ID 인식 프록시, 단기 자격증명, 마이크로 세그멘테이션. |
| `owasp-top-10-complete-mitigation-guide` | OWASP Top 10 완전 대응 가이드 | 10대 리스크를 취약 코드 vs 수정 코드로 비교하며 오늘 바로 적용. |
| `implementing-oauth2-openid-connect` | OAuth2·OpenID Connect 구현하기 | PKCE 인증 코드, 토큰 저장, 로테이션, 로그아웃 — 처음부터 제대로. |
| `mlops-deploying-ml-models-production` | MLOps: ML 모델 프로덕션 배포 | 레지스트리, 카나리 서빙, 피처 스토어, 롤백 플랜 — 신뢰받는 모델 운영. |
| `monitoring-ai-systems-in-production` | 프로덕션 AI 시스템 모니터링 | 평가·가드레일을 곁들인 AI 기능의 품질, 드리프트, 비용, 지연시간 추적. |
