import type { LocaleContent } from './content-types';

export const ja: LocaleContent = {
  testimonials: [
    {
      quote: 'CodeEnhance AIのおかげでフロントエンドの試行錯誤が半分になりました。リアルタイムのAI提案は、シニアとペアプロしている感覚です。',
      name: 'Priya Sharma',
      role: 'フロントエンドエンジニア、ムンバイ'
    },
    {
      quote: 'LS PDF Toolsひとつでチームの有料サブスクを3つ解約できました。完全クライアント処理で速くて無料——信じられません。',
      name: 'Daniel Kim',
      role: 'インディーハッカー、ソウル'
    },
    {
      quote: 'RAG設計やMLOpsの調べものはLade Stackブログが定番です。深くて実践的、無駄がありません。',
      name: 'Ana Souza',
      role: 'MLエンジニア、サンパウロ'
    }
  ],
  products: [
    {
      title: 'CodeEnhance AI',
      tagline: '知的なコードビューアと改善ツール',
      desc: 'リアルタイムのAIリントと提案、即時プレビューで、荒いコードを本番品質に引き上げます。',
      icon: 'lucide:code-xml',
      link: '/ai-code-viewer-ai',
      badge: '人気'
    },
    {
      title: 'API Testing Platform',
      tagline: 'REST・GraphQLの自動テスト',
      desc: '自動検証スイートの生成、APIレスポンスのモック、セキュリティベンチマークを数秒で。',
      icon: 'lucide:network',
      link: 'https://ladestack.in/api-testing-platform',
      badge: '高速'
    },
    {
      title: 'Website Builder AI',
      tagline: 'ノーコードのセマンティック生成',
      desc: 'セマンティックなマークアップのモダンなレスポンシブUIを生成し、標準HTML/CSSで書き出し。',
      icon: 'lucide:layout-template',
      link: 'https://ladestack.in/website-builder-project',
      badge: 'コード不要'
    },
    {
      title: 'Secure File Hub',
      tagline: '暗号化された開発者向け共有',
      desc: '設定ファイルや認証情報、デプロイ資材を速く安全に一時共有できます。',
      icon: 'lucide:shield-check',
      link: 'https://ladestack.in/file-sharing-platform',
      badge: '暗号化'
    }
  ],
  supportTopics: [
    { title: 'はじめに', text: 'ギャラリーからアプリを選ぶだけ。1分で使い始められます。登録は不要です。' },
    { title: 'ファイルツール', text: 'PDF・画像ツールはローカル処理です。大きなファイルは安定回線のデスクトップがおすすめ。' },
    { title: 'CodeEnhance AI', text: 'コードを貼ってアクションを選び、提案を確認してコピーかダウンロード。' },
    { title: 'アカウントとデータ', text: 'アカウントは不要です。サイトデータを消しても、エクスポートで成果物は守れます。' }
  ],
  supportFaqs: [
    { q: 'ツールが読み込まれません。どうすれば？', a: 'ページをハードリロードし、ladestack.inへの強力な広告ブロックを外して、1年以内のChromium・Firefoxでお試しください。' },
    { q: 'ファイルはどこかにアップロードされますか？', a: 'いいえ。コアツールは完全クライアント処理なので、ファイルが端末を離れません。' },
    { q: 'バグの報告方法は？', a: 'ツール名、ブラウザのバージョン、再現手順を添えてadmin@ladestack.inへ。スクショがあると助かります。' },
    { q: '新ツールを提案できますか？', a: 'もちろんです。コミュニティの要望がロードマップを動かします。お問い合わせからどうぞ。' },
    { q: '無料ツールにSLAはありますか？', a: '公式SLAはありませんが、稼働を常時監視し、障害は速やかに修正します。' },
    { q: 'ベストプラクティスはどこで学べますか？', a: 'ドキュメントとブログからどうぞ。AI開発のAtoZガイドが27本以上あります。' }
  ],
  contactFaqs: [
    { q: '本当に永久無料ですか？', a: 'はい。すべてのツールが段階も試用もクレカもなく、永久に無料です。' },
    { q: 'サポートの返信はどれくらい？', a: '24時間体制で、通常は数時間以内にadmin@ladestack.inから返信します。' },
    { q: '機能リクエストはできますか？', a: '大歓迎です。GitHubのIssueか下のメッセージでお送りください。' },
    { q: 'エンタープライズ向けはありますか？', a: 'あります。要件をお送りいただければ、カスタム連携とSLAをご提案します。' }
  ],
  docsGroups: [
    { id: 'getting-started', title: 'はじめに', articles: [
      { title: 'クイックスタート: 最初のアプリを起動', text: 'アプリギャラリーでツールを選ぶだけ。登録なしで1分以内に生産的になれます。' },
      { title: 'エコシステムの歩き方', text: 'ホーム、アプリ、ブログ、ドキュメント、サポート——各画面とワークフローの関係。' }
    ]},
    { id: 'api-reference', title: 'APIリファレンス', articles: [
      { title: 'CodeEnhance AIの使い方', text: 'HTML・CSS・JSを貼って改善か解説を選び、本番-readyなコードを書き出し。' },
      { title: 'クォータとフェアユース', text: '全員が快適に使えるよう分単位のガードを備えた generous な無料枠。' }
    ]},
    { id: 'integrations', title: '連携', articles: [
      { title: 'GitHub・Vercelへ書き出し', text: '作ったコードをそのままレポにコピーし、プレビュー公開までワンクリック。' }
    ]},
    { id: 'tutorials', title: 'チュートリアル', articles: [
      { title: '5分でランディングページを作る', text: 'ウェブサイトビルダーと画像スタジオで、プロンプトから公開まで。' }
    ]},
    { id: 'security', title: 'セキュリティ', articles: [
      { title: '設計からのプライバシー', text: 'クライアント処理なので、コアツールではファイルがブラウザを離れません。' }
    ]},
    { id: 'teams', title: 'チーム', articles: [
      { title: '共有リンクでコラボ', text: '持ち運べるJSONエクスポートで成果物やテンプレをチーム共有。' }
    ]},
    { id: 'data', title: 'データ管理', articles: [
      { title: '成果物の書き出し', text: '全ツールがコピー・ダウンロード・Markdown書き出し対応。データはあなたのもの。' }
    ]},
    { id: 'deployment', title: 'デプロイ', articles: [
      { title: 'セルフホストのチェックリスト', text: '静的ファースト設計なのでツールのミラーリングも素直です。' }
    ]}
  ],
  docsChangelog: [
    { v: 'v2.4.0', date: '2026-08-20', text: '7言語対応とLighthouse100点のPure Astroリビルド。' },
    { v: 'v2.3.0', date: '2024-11-30', text: 'Documentation AIベータとAPI Testingコレクション。' },
    { v: 'v2.0.0', date: '2024-06-01', text: 'CodeEnhance AIの一般提供開始。' }
  ],
  timeline: [
    { year: '2020', title: 'ツールキットの始まり', text: 'Girish LadeがPDF・画像・コードヘルパーなど個人用ユーティリティを作り始める。' },
    { year: '2022', title: 'Lade Stackの輪郭', text: '共通デザイン言語と永久無料の約束のもと、ツールをひとつのブランドに集約。' },
    { year: '2024', title: 'AIエコシステムへ', text: 'CodeEnhance AIを公開。ブログ・ドキュメントは27本超、コミュニティは8,000人突破。' },
    { year: '2026', title: 'Pure Astroリビルド', text: 'ゼロJSランタイム、7言語、Lighthouse100点の完全静的リビルド。' }
  ],
  aboutStats: ['創業', '本番ツール', '開発者', '永久無料'],
  storyExtra: 'AIシステム、ウェブ開発、UXにまたがるマルチ分野のエンジニア兼デザイナー。すべての作り手にスタートアップ級のスピードを無料で届けるツールを作っています。',
  footerLinks: {
    aiCodeViewer: 'AIコードビューア',
    support: 'サポートセンター',
    privacy: 'プライバシーポリシー',
    terms: '利用規約'
  },
  aicodeFeatures: [
    { title: 'リアルタイムAI支援', text: '根拠ある提案で、入力しながら解説・リファクタ・改善。' },
    { title: 'ライブプレビューとコンパイル', text: 'HTML・CSS・JSの結果をエラー表示つきで即確認。' },
    { title: 'ワンクリック改善', text: '荒いスニペットをクリーンでアクセシブルな本番コードに。' },
    { title: 'どこへでも書き出し', text: 'コピーもダウンロードも自由。ロックインも透かしもなし。' }
  ],
  privacy: [
    { h: '収集する情報', p: '必要最小限だけいただきます。お問い合わせのメッセージ、登録されたニュースレターのメール、プライバシーに配慮した分析(ページビュー、クロスサイト追跡なし)。コアツールはファイルをすべてブラウザで処理するので、文書がサーバーに届くことはありません。' },
    { h: '情報の利用', p: 'サポートへの返信、希望されたニュースレターの配信、性能と信頼性の改善にのみ使います。個人データを売ったり広告ネットワークと共有したりしません。' },
    { h: 'Cookieと保存', p: 'テーマと言語の設定はお使いの端末のlocalStorageにのみ保存します。分析Cookieがある場合も自社の匿名化されたものに限ります。' },
    { h: 'あなたの権利', p: 'admin@ladestack.inへの連絡で、開示・訂正・削除をいつでも請求できます。メールはワンクリックで配信停止できます。' },
    { h: 'お問い合わせ', p: 'ポリシーに関する質問: admin@ladestack.in、インド・ムンバイ。' }
  ],
  terms: [
    { h: '許される利用', p: 'ツールを合法的に使ってください。レート制限の悪用、サービス妨害の試み、権利のないコンテンツの処理は禁止です。' },
    { h: '無料ライセンス', p: '個人・商用いずれも無料です。作った成果物はあなたのもの。本プラットフォーム自体を当ブランドでの再配布には許可が必要です。' },
    { h: 'APIフェアユース', p: '自動アクセスは公開クォータを守ってください。過度なトラフィックは全員のために制限される場合があります。' },
    { h: '無保証', p: 'サービスは「現状有姿」で提供され、保証はありません。信頼性に全力を尽くしますが、無停止はお約束できません。' },
    { h: '責任の制限', p: '法で認められる最大範囲で、サービス利用に起因する間接・派生的損害に責任を負いません。' },
    { h: 'お問い合わせ', p: '規約に関する質問: admin@ladestack.in、インド・ムンバイ。' }
  ],
  apps: {
    'ai-code-viewer': {
      tagline: 'AIフロントエンドコードエディタ',
      description: 'リアルタイムAI支援でHTML・CSS・JSを編集、コンパイル、強化。',
      features: ['リアルタイムAI支援', 'ライブプレビュー', 'ワンクリック改善']
    },
    'ls-pdf': {
      tagline: 'ブラウザで使う無料PDFツールキット',
      description: '結合・分割・圧縮・変換をすべてクライアント処理で。アップロードなし。',
      features: ['結合と分割', '圧縮', 'PDFを画像に']
    },
    'ls-img': {
      tagline: '画像の圧縮と変換を即座に',
      description: 'プライバシー万全のブラウザ処理で一括圧縮・リサイズ・変換。',
      features: ['一括圧縮', '形式変換', 'リサイズ']
    },
    'swift-resume': {
      tagline: '数分でATS対応の履歴書',
      description: 'ライブプレビューとPDF書き出しで、ATSに強い履歴書をさっと作成。',
      features: ['ATSテンプレ', 'ライブプレビュー', 'PDF書き出し']
    },
    'bharat-land': {
      tagline: 'インドの土地台帳インサイト',
      description: 'すっきり速いUIで土地台帳データを検索・理解。',
      features: ['高速検索', 'すっきりUI', 'モバイル対応']
    },
    'api-testing': {
      tagline: 'REST・GraphQLのAPIを目で見てテスト',
      description: 'コレクションと環境でAPIテストを設計・送信・自動化。',
      features: ['コレクション', '環境', 'テストスクリプト']
    },
    'website-builder': {
      tagline: 'AIでランディングページを速作',
      description: 'サイトを説明するだけで速くSEO-readyなページが完成。',
      features: ['AIセクション', 'SEO初期値', 'ワンクリック公開']
    },
    'file-management': {
      tagline: '期限つきリンクで共有',
      description: 'ファイルを上げて安全で期限つきのリンクを完全管理のもと共有。',
      features: ['期限つきリンク', '登録不要', '高速CDN']
    },
    'documentation-ai': {
      tagline: 'ドキュメントを即要約',
      description: 'ドキュメントやコードを貼るだけで明快な要約・ガイド・リファレンスに。',
      features: ['即時要約', 'コード解説', 'Markdown書き出し']
    }
  },
  appTime: {
    'Instant': '即時',
    '1 minute': '1分',
    '2 minutes': '2分',
    '5 minutes': '5分'
  },
  appCategories: {
    'AI Tools': 'AIツール',
    'Productivity': '生産性',
    'Utilities': 'ユーティリティ'
  },
  blogCategories: {
    'AI Development': 'AI開発',
    'Generative AI': '生成AI',
    'SaaS Architecture': 'SaaSアーキテクチャ',
    'Backend as a Service': 'BaaS',
    'API Design & Scaling': 'API設計・拡張',
    'Cloud Computing': 'クラウド',
    'Virtual Machines': '仮想マシン',
    'DevOps & CI/CD': 'DevOps・CI/CD',
    'Security in Web Apps': 'Webセキュリティ',
    'AI Production Systems': 'AI本番運用'
  },
  blogPosts: {
    'future-of-ai-in-software-development': { title: '2025年以降のAIソフトウェア開発の未来', description: '生成モデル、エージェント型ワークフロー、自動検証が現代のソフトウェアエンジニアリングをどう変えるか。' },
    'building-ai-powered-code-review-systems': { title: 'AIコードレビューシステムの作り方', description: 'LLMでバグを捉え、スタイルを強制し、開発者を育てる自動レビューの設計法。' },
    'machine-learning-pipelines-for-web-developers': { title: 'ウェブ開発者のためのMLパイプライン', description: 'データ収集から学習・評価・提供まで。現場のウェブ開発者のためのML入門。' },
    'generative-ai-for-content-creation': { title: '生成AIでコンテンツ制作', description: '自分らしい声を失わずに下書き・編集・拡張をLLMに任せる方法。' },
    'building-rag-applications-vector-databases': { title: 'ベクトルDBでRAGアプリを作る', description: 'チャンキング、埋め込み、ベクトル検索から根拠ある回答まで、RAG完全ガイド。' },
    'fine-tuning-llms-domain-specific-tasks': { title: 'ドメイン特化LLMのファインチューン', description: 'プロンプトとチューニングの見極め、データセット準備、低予算LoRAワークフロー。' },
    'multi-tenant-saas-architecture-patterns': { title: 'マルチテナントSaaSアーキテクチャ', description: 'サイロ・プール・ブリッジ型の分離、コスト、拡張性のトレードオフ比較。' },
    'building-subscription-billing-systems': { title: 'サブスク課金システムの作り方', description: 'トライアル、日割り、督促、Webhook——経理チームが信頼する課金設計。' },
    'scaling-saas-applications-million-users': { title: '100万人を支えるSaaSスケーリング', description: 'キャッシュ、キュー、読み取りレプリカ、シャーディング。100万人に耐える段階的プレイブック。' },
    'baas-platforms-compared-firebase-supabase-appwrite': { title: 'BaaS比較:Firebase vs Supabase vs Appwrite', description: '認証、DB、料金、脱出戦略まで3プラットフォームの正直比較。' },
    'building-serverless-backends-with-baas': { title: 'BaaSでサーバーレスバックエンド', description: 'サーバーなしの本番バックエンド。スキーマ設計、エッジ関数、バックグラウンドジョブ。' },
    'real-time-data-sync-backend-services': { title: 'バックエンドのリアルタイム同期', description: 'WebSocket、CRDT、マネージドリアルタイムでプレゼンスも共同編集も。' },
    'rest-vs-graphql-choosing-right-api-paradigm': { title: 'REST vs GraphQL:選び方', description: 'バージョニング、キャッシュ、ペイロード、チーム速度で考える決定フレーム。' },
    'api-rate-limiting-throttling-strategies': { title: 'APIレート制限とスロットリング', description: '良いクライアントを痛めずにAPIを守るトークンバケットとクォータ設計。' },
    'building-api-gateways-microservices': { title: 'マイクロサービスのAPIゲートウェイ', description: '認証、ルーティング、変換、可観測性をフリートのエッジで。' },
    'cloud-cost-optimization-strategies-startups': { title: 'スタートアップのクラウド節約術', description: '適正化、確約、ストレージのライフサイクル、タグ規律で3〜5割カット。' },
    'multi-cloud-architecture-aws-azure-gcp': { title: 'AWS・Azure・GCPのマルチクラウド', description: 'マルチクラウドが得する条件と、コンテナ・IaCで可搬性を保つ方法。' },
    'containers-vs-vms-when-to-use-each': { title: 'コンテナ vs VM:使い分け', description: '分離、オーバーヘッド、運用のトレードオフで自信を持って選ぶ。' },
    'optimizing-vm-performance-production-workloads': { title: '本番VMの性能チューニング', description: 'CPUピニング、NUMA、ストレージキュー、ノイジーネイバー対策で予測可能に。' },
    'gitops-managing-infrastructure-with-git': { title: 'GitOps:Gitでインフラ管理', description: '宣言的インフラ、PRレビュー、ドリフト検知、自動同期。' },
    'building-zero-downtime-deployment-pipelines': { title: '無停止デプロイパイプライン', description: 'ブルーグリーン、カナリア、ローリングとヘルスゲート。ユーザーが気づかないデプロイ。' },
    'infrastructure-as-code-terraform-pulumi': { title: 'Terraform・PulumiでIaC', description: 'HCLか汎用言語か、状態管理、モジュール設計。' },
    'zero-trust-security-web-applications': { title: 'ウェブアプリのゼロトラスト', description: '信じず常に検証。ID認識プロキシ、短期資格情報、マイクロセグメンテーション。' },
    'owasp-top-10-complete-mitigation-guide': { title: 'OWASP Top 10完全対策ガイド', description: '10大リスクを脆弱コードと修正コードの対比で、今日から適用。' },
    'implementing-oauth2-openid-connect': { title: 'OAuth2・OpenID Connect実装', description: 'PKCE認可コード、トークン保管、ローテーション、ログアウトを最初から正しく。' },
    'mlops-deploying-ml-models-production': { title: 'MLOps:MLモデルの本番デプロイ', description: 'レジストリ、カナリア配信、フィーチャーストア、ロールバック計画。信頼される運用へ。' },
    'monitoring-ai-systems-in-production': { title: '本番AIシステムの監視', description: '評価とガードレールを添えたAI機能の品質・ドリフト・コスト・遅延の追跡。' }
  }
};
