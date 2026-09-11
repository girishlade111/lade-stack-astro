# Lade Stack Technical Translation Glossary & Style Guide — 日本語 (ja)

- **対象ロケール (Target Locale)**: `ja` / `ja_JP` (Japanese / 日本語)
- **対象読者 (Target Audience)**: フロントエンド・バックエンド開発者、SRE/DevOpsエンジニア、クラウド/AIアーキテクト（Qiita、Zenn、はてなブックマーク開発者層、テックブログ読者水準）
- **文体とトーン (Tone & Register)**: 簡潔、技術的、実践的、エンジニア対エンジニアの対等で論理的な語り口（マーケティング的な誇張やバズワードを排し、本番環境のトレードオフを直言する文体）。

---

## 1. 文体・スタイルガイド (Tone & Style Guide)

1. **エンジニア視点の事実重視（No Marketing Fluff）**:
   - 誇張表現（「驚異の」「魔法のような」「劇的な革命」など）は一切禁止します。
   - 具体的な指標・数値・設計上の根拠を示します（例:「p95 レイテンシを 450 ms から 80 ms へ短縮」「コネクション枯渇を防ぎ、スパイク時の DB ダウンを回避」）。
2. **語尾と敬体（です・ます調）**:
   - 本文は読みやすく親しみやすい**「です・ます調」**で統一します。見出し、箇条書き、表内の要約は体言止めまたは簡潔な言いきり（〜すること、〜の手順）とします。
3. **スペース規約（和欧文字間スペース）**:
   - 全角の日本語文字と半角の英数字・インラインコードの間には、**半角スペースを1つ**挿入します（JIS組版・Webタイポグラフィ標準）。
     - ◯ 正: `Kubernetes クラスタにデプロイする場合、CPU とメモリのリソースリミットを必ず設定します。`
     - ✕ 誤: `Kubernetesクラスタにデプロイする場合、CPUとメモリのリソースリミットを必ず設定します。`
4. **約物・記号のルール**:
   - 句読点は「、」「。」を使用します（カンマ・ピリオド「，」「．」は学術論文調になるため避けます）。
   - かぎ括弧は「 」、二重かぎ括弧は『 』を使用します。

---

## 2. 翻訳してはならない英語表記（Must Stay in English）

以下の要素はカタカナ化や和訳を行わず、**英字表記をそのまま維持**します：

### 2.1 ブランド・製品名
- `Lade Stack` / `LadeStack`
- `CodeEnhance AI`
- `LS PDF Tools`
- `LS Image Studio`
- `Secure File Hub`
- `Website Builder AI`
- `API Testing Platform`

### 2.2 言語・フレームワーク・クラウド基盤
- **言語・ランタイム**: `TypeScript`, `JavaScript`, `Python`, `Go`, `Rust`, `SQL`, `HTML`, `CSS`, `Node.js`, `Bun`, `Deno`
- **フレームワーク**: `React`, `Astro`, `Next.js`, `Vite`, `Vue`, `Svelte`, `Tailwind CSS`
- **インフラ・クラウド**: `Kubernetes`, `Docker`, `Terraform`, `Pulumi`, `AWS`, `Azure`, `GCP`, `Cloudflare`, `Vercel`
- **データベース・キャッシュ**: `PostgreSQL`, `MySQL`, `Redis`, `MongoDB`, `Supabase`, `Firebase`, `Appwrite`, `pgvector`, `Pinecone`, `Milvus`, `Qdrant`
- **可観測性ツール**: `OpenTelemetry`, `Prometheus`, `Grafana`, `Jaeger`

### 2.3 プロトコル・セキュリティ規格
- `REST`, `GraphQL`, `WebSocket`, `gRPC`, `CRDT`
- `OAuth 2.0`, `OpenID Connect`, `PKCE`, `JWT`, `JWK`, `TLS 1.3`, `mTLS`, `HTTPS`
- `OWASP`, `OWASP Top 10`

### 2.4 コード識別子と CLI コマンド
- コード中の関数名、変数名、型定義、プロパティ名: `runWithResilience`, `circuitBreaker`, `timeoutMs`, `retries`
- コマンドライン文字列およびフラグ: `kubectl apply -f`, `docker compose up`, `npm run build`, `--namespace`, `-p`
- ファイルパスと設定項目: `astro.config.mjs`, `package.json`, `tsconfig.json`, `/blog`, `/blog/[slug]`

### 2.5 HTTP プリミティブ
- HTTP メソッド: `GET`, `POST`, `PUT`, `DELETE`, `PATCH`, `OPTIONS`, `HEAD`
- ステータスコード: `200 OK`, `301 Moved Permanently`, `400 Bad Request`, `401 Unauthorized`, `403 Forbidden`, `404 Not Found`, `429 Too Many Requests`, `500 Internal Server Error`, `502 Bad Gateway`
- ヘッダー名: `Authorization`, `Content-Type`, `Cache-Control`, `X-Forwarded-For`

---

## 3. 重要技術用語の標準対訳表 (Technical Glossary)

27記事全体を通じて、以下の**標準日本語表記**を厳密に統一して使用してください：

| 英語原語 | 標準日本語訳 (Canonical Translation) | 非推奨・誤訳表記 (Disallowed) | 文脈と用例 (Context & Example) |
|---|---|---|---|
| **Zero-Downtime Deployment** | 無停止デプロイ / ゼロダウンタイムデプロイ | 停止なし展開、死活停止ゼロ | 「ヘルスゲートを設けた**無停止デプロイ**パイプラインを構築します。」 |
| **Blue-Green Deployment** | ブルーグリーンデプロイ | 青緑展開 | 「**ブルーグリーンデプロイ**によって障害発生時の瞬時切り戻しを担保します。」 |
| **Canary Deployment** | カナリアデプロイ / カナリアリリース | 金糸雀展開、カナリヤ配信 | 「本番トラフィックの 2% を**カナリアデプロイ**に流し、メトリクスを検証します。」 |
| **Rolling Update** | ローリングアップデート / ローリング更新 | 転がり更新、順次展開 | 「Pod を 1 台ずつ順次入れ替える**ローリングアップデート**を実施します。」 |
| **Health Gate / Readiness Probe** | ヘルスゲート / レディネスプローブ | 健康門番、準備完了検査 | 「トラフィックを流す前に**レディネスプローブ**の疎通を確認します。」 |
| **Rate Limiting** | レート制限 | 速度制限、レートリミット | 「API ゲートウェイ層で Redis を用いた分散**レート制限**を適用します。」 |
| **Throttling** | スロットリング | 絞り込み、絞扼 | 「クォータ超過クライアントに対して**スロットリング**を発動します。」 |
| **Token Bucket** | トークンバケット | 代幣桶、印紙バケツ | 「**トークンバケット**アルゴリズムにより突発的なバーストトラフィックを吸収します。」 |
| **Leaky Bucket** | リーキーバケット | 穴あきバケツ | 「**リーキーバケット**方式でバックエンドへ送るトラフィックを平滑化します。」 |
| **Circuit Breaker** | サーキットブレーカー | 電源遮断器、回路切断 | 「下流サービスの障害伝播を防ぐため**サーキットブレーカー**を導入します。」 |
| **Multi-Tenant / Multi-Tenancy** | マルチテナント / マルチテナンシー | 多重入居、多客型 | 「SaaS アーキテクチャにおける**マルチテナント**のデータ分離とコスト効率。」 |
| **Tenant Isolation** | テナント分離 | 顧客隔離 | 「Row-Level Security（RLS）による厳密な**テナント分離**を実現します。」 |
| **Read Replica** | 読み取りレプリカ / リードレプリカ | 読込用コピー | 「重い分析クエリを**読み取りレプリカ**へオフロードします。」 |
| **Database Sharding** | データベースシャーディング / シャーディング | DB分割、細片化 | 「テナント ID ハッシュに基づく**データベースシャーディング**で水平スケールします。」 |
| **Connection Pooling** | コネクションプーリング / 接続プール | 結合プール | 「サーバーレス環境では PgBouncer などの**コネクションプーリング**が必須です。」 |
| **API Gateway** | API ゲートウェイ | API 入口 | 「**API ゲートウェイ**で認証、ルーティング、CORS 制御を一括処理します。」 |
| **Microservices** | マイクロサービス | 超小型サービス | 「モノリスから自律的な**マイクロサービス**群へと段階的にリファクタリングします。」 |
| **Backend as a Service (BaaS)** | BaaS（Backend as a Service） | バックエンド受託 | 「Firebase、Supabase、Appwrite の 3 大 **BaaS** を比較検証します。」 |
| **Serverless** | サーバーレス | サーバ皆無 | 「**サーバーレス**アーキテクチャにより、インフラ管理不要のバックエンドを運用します。」 |
| **Edge Functions** | エッジ関数 / Edge Functions | 端点関数 | 「レイテンシを最小化するため、認証ロジックを**エッジ関数**で実行します。」 |
| **Real-Time Data Sync** | リアルタイムデータ同期 | 即時同期 | 「WebSocket と **CRDT**（競合解消レプリケーションデータ型）による**リアルタイムデータ同期**。」 |
| **Retrieval-Augmented Generation (RAG)** | RAG（検索拡張生成） | 検索付き補完 | 「社内ドキュメントを検索して回答をグラウンディングする **RAG** アプリ。」 |
| **Vector Database** | ベクトルデータベース / ベクトル DB | 矢印型データベース | 「**ベクトルデータベース**に高次元埋め込みを格納し、コサイン類似度で検索します。」 |
| **Vector Embedding** | ベクトル埋め込み / 埋め込み表現 | ベクター埋設 | 「テキストを 1536 次元の**ベクトル埋め込み**へ変換します。」 |
| **Chunking** | チャンキング / ドキュメント分割 | 塊化、細切れ | 「文脈の連続性を損なわない適切な**チャンキング**戦略を設計します。」 |
| **Grounded Answers / Grounding** | 根拠ある回答 / グラウンディング | 接地、基礎づけ | 「検索結果の参照元を注入して**根拠ある回答**を生成させます。」 |
| **Hallucination** | ハルシネーション（幻覚） | 虚偽回答、迷妄 | 「出力スキーマのバリデーションにより LLM の**ハルシネーション**を抑制します。」 |
| **Fine-Tuning** | ファインチューニング / 事後学習 | 微調整 | 「特定ドメインの業務データセットを用意して **LoRA ファインチューニング**を行います。」 |
| **LoRA (Low-Rank Adaptation)** | LoRA（Low-Rank Adaptation） | 低ランク適応 | 「**LoRA** を用いることで、GPU メモリ消費を最小限に抑えながら追加学習が可能です。」 |
| **Prompt Engineering** | プロンプトエンジニアリング | 指示文工学 | 「Few-Shot と Chain-of-Thought を組み合わせた実践的**プロンプトエンジニアリング**。」 |
| **Agentic Workflow** | エージェント型ワークフロー | 代理人処理 | 「ツール呼び出しとフィードバックループを備えた**エージェント型ワークフロー**。」 |
| **Model Drift** | モデルドリフト / 概念ドリフト | 模型変位 | 「実運用の入力データ傾向の変化に伴う**モデルドリフト**を監視します。」 |
| **Feature Store** | フィーチャーストア | 特徴量倉庫 | 「学習時と推論時の特徴量計算の乖離を防ぐ**フィーチャーストア**を配備します。」 |
| **MLOps** | MLOps（機械学習運用） | 機械学習オペレーション | 「モデルの自動デプロイとカナリア配信を実現する **MLOps** パイプライン。」 |
| **Zero-Trust Security** | ゼロトラストセキュリティ | ゼロ信用保障 | 「『決して信頼せず、常に検証せよ』を掲げる**ゼロトラストセキュリティ**。」 |
| **Identity-Aware Proxy (IAP)** | ID 認識プロキシ（IAP） | 個人認識中継器 | 「レガシーな VPN を廃止し、**ID 認識プロキシ**経由でのみアクセスを許可します。」 |
| **Short-Lived Credentials** | 短期資格情報 / 一時トークン | 短命証明書 | 「固定の API キーを排除し、**短期資格情報**の自動ローテーションを採用します。」 |
| **Microsegmentation** | マイクロセグメンテーション | 微小細分化 | 「ネットワーク層で**マイクロセグメンテーション**を施し、水平移動（横展開）を防止します。」 |
| **Least Privilege** | 最小権限の原則 | 極小特権 | 「**最小権限の原則**に従い、サービスごとに過不足のない IAM ロールを付与します。」 |
| **Infrastructure as Code (IaC)** | IaC（Infrastructure as Code） | コード化基盤 | 「Terraform と Pulumi の比較による **IaC** 設計ベストプラクティス。」 |
| **Drift Detection** | ドリフト検知 | 構成乖離検査 | 「CI ジョブで定期的な**ドリフト検知**を回し、手動変更を即座に特定します。」 |
| **GitOps** | GitOps | ギットオプス | 「Git リポジトリを唯一の真実のソース（SSOT）とする **GitOps** 原則。」 |
| **Core Pinning / CPU Affinity** | CPU ピニング / CPU 親和性 | コア固定 | 「超低レイテンシ処理では、**CPU ピニング**によってコンテキストスイッチのオーバーヘッドをゼロにします。」 |
| **NUMA Topology** | NUMA トポロジ | NUMA 構造 | 「メモリレイテンシ悪化を抑えるため **NUMA トポロジ**を考慮した配置を行います。」 |
| **Noisy Neighbor** | ノイジーネイバー（近隣ノイズ） | 騒がしい隣人 | 「クラウド共有環境における**ノイジーネイバー**による I/O スパイクを遮断します。」 |
| **Multi-Cloud Architecture** | マルチクラウドアーキテクチャ | 複数クラウド設計 | 「データ転送量（Egress）の課金を考慮した**マルチクラウドアーキテクチャ**の設計。」 |
| **Vendor Lock-In** | ベンダーロックイン / 乗り換えコスト | 業者囲い込み | 「独自クラウド API への密結合を避け、**ベンダーロックイン**を回避します。」 |
| **Cost Optimization** | コスト最適化 / クラウド節約術 | 費用削り | 「インスタンス適正化、リザーブド確約、ライフサイクル設計による**クラウドコスト最適化**。」 |

---

## 4. 全 27 記事の標準タイトルおよび要約対照表 (Article Reference)

| Slug | 標準日本語タイトル | 標準日本語説明 (Description) |
|---|---|---|
| `future-of-ai-in-software-development` | 2025年以降のAIソフトウェア開発の未来 | 生成モデル、エージェント型ワークフロー、自動検証が現代のソフトウェアエンジニアリングをどう変えるか。 |
| `building-ai-powered-code-review-systems` | AIコードレビューシステムの作り方 | LLMでバグを捉え、スタイルを強制し、開発者を育てる自動レビューの設計法。 |
| `machine-learning-pipelines-for-web-developers` | ウェブ開発者のためのMLパイプライン | データ収集から学習・評価・提供まで。現場のウェブ開発者のためのML入門。 |
| `generative-ai-for-content-creation` | 生成AIでコンテンツ制作 | 自分らしい声を失わずに下書き・編集・拡張をLLMに任せる方法。 |
| `building-rag-applications-vector-databases` | ベクトルDBでRAGアプリを作る | チャンキング、埋め込み、ベクトル検索から根拠ある回答まで、RAG完全ガイド。 |
| `fine-tuning-llms-domain-specific-tasks` | ドメイン特化LLMのファインチューン | プロンプトとチューニングの見極め、データセット準備、低予算LoRAワークフロー。 |
| `multi-tenant-saas-architecture-patterns` | マルチテナントSaaSアーキテクチャ | サイロ・プール・ブリッジ型の分離、コスト、拡張性のトレードオフ比較。 |
| `building-subscription-billing-systems` | サブスク課金システムの作り方 | トライアル、日割り、督促、Webhook——経理チームが信頼する課金設計。 |
| `scaling-saas-applications-million-users` | 100万人を支えるSaaSスケーリング | キャッシュ、キュー、読み取りレプリカ、シャーディング。100万人に耐える段階的プレイブック。 |
| `baas-platforms-compared-firebase-supabase-appwrite` | BaaS比較:Firebase vs Supabase vs Appwrite | 認証、DB、料金、脱出戦略まで3プラットフォームの正直比較。 |
| `building-serverless-backends-with-baas` | BaaSでサーバーレスバックエンド | サーバーなしの本番バックエンド。スキーマ設計、エッジ関数、バックグラウンドジョブ。 |
| `real-time-data-sync-backend-services` | バックエンドのリアルタイム同期 | WebSocket、CRDT、マネージドリアルタイムでプレゼンスも共同編集も。 |
| `rest-vs-graphql-choosing-right-api-paradigm` | REST vs GraphQL:選び方 | バージョニング、キャッシュ、ペイロード、チーム速度で考える決定フレーム。 |
| `api-rate-limiting-throttling-strategies` | APIレート制限とスロットリング | 良いクライアントを痛めずにAPIを守るトークンバケットとクォータ設計。 |
| `building-api-gateways-microservices` | マイクロサービスのAPIゲートウェイ | 認証、ルーティング、変換、可観測性をフリートのエッジで。 |
| `cloud-cost-optimization-strategies-startups` | スタートアップのクラウド節約術 | 適正化、確約、ストレージのライフサイクル、タグ規律で3〜5割カット。 |
| `multi-cloud-architecture-aws-azure-gcp` | AWS・Azure・GCPのマルチクラウド | マルチクラウドが得する条件と、コンテナ・IaCで可搬性を保つ方法。 |
| `containers-vs-vms-when-to-use-each` | コンテナ vs VM:使い分け | 分離、オーバーヘッド、運用のトレードオフで自信を持って選ぶ。 |
| `optimizing-vm-performance-production-workloads` | 本番VMの性能チューニング | CPUピニング、NUMA、ストレージキュー、ノイジーネイバー対策で予測可能に。 |
| `gitops-managing-infrastructure-with-git` | GitOps:Gitでインフラ管理 | 宣言的インフラ、PRレビュー、ドリフト検知、自動同期。 |
| `building-zero-downtime-deployment-pipelines` | 無停止デプロイパイプライン | ブルーグリーン、カナリア、ローリングとヘルスゲート。ユーザーが気づかないデプロイ。 |
| `infrastructure-as-code-terraform-pulumi` | Terraform・PulumiでIaC | HCLか汎用言語か、状態管理、モジュール設計。 |
| `zero-trust-security-web-applications` | ウェブアプリのゼロトラスト | 信じず常に検証。ID認識プロキシ、短期資格情報、マイクロセグメンテーション。 |
| `owasp-top-10-complete-mitigation-guide` | OWASP Top 10完全対策ガイド | 10大リスクを脆弱コードと修正コードの対比で、今日から適用。 |
| `implementing-oauth2-openid-connect` | OAuth2・OpenID Connect実装 | PKCE認可コード、トークン保管、ローテーション、ログアウトを最初から正しく。 |
| `mlops-deploying-ml-models-production` | MLOps:MLモデルの本番デプロイ | レジストリ、カナリア配信、フィーチャーストア、ロールバック計画。信頼される運用へ。 |
| `monitoring-ai-systems-in-production` | 本番AIシステムの監視 | 評価とガードレールを添えたAI機能の品質・ドリフト・コスト・遅延の追跡。 |
