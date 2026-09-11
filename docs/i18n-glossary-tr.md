# Lade Stack Technical Translation Glossary & Style Guide — Türkçe (tr)

- **Hedef Dil / Yerel Ayar (Target Locale)**: `tr` / `tr_TR` (Turkish / Türkçe)
- **Hedef Kitle (Target Audience)**: Yazılım mühendisleri, arka uç / ön uç geliştiricileri, Bulut / DevOps / SRE uzmanları, Yapay Zekâ ve Makine Öğrenimi uygulayıcıları (Medium Türkiye, Dev.to Türkçe, Kodluyoruz, modern mühendislik blogları seviyesi).
- **Yazım Dili ve Ton (Tone & Register)**: Mühendisten mühendise (peer-to-peer), doğrudan, teknik, pratik, abartısız ve operasyonel gerçeklere odaklanan yalın bir Türkçe.

---

## 1. Yazım İlkeleri ve Üslup Kılavuzu (Tone & Style Guide)

1. **Mühendis Dili ve Netlik**:
   - Pazarlama jargonu ve abartılı sıfatlardan (“mucizevi”, “çığır açıcı”, “büyüleyici”) kesinlikle kaçının.
   - Doğrudan teknik metrikler ve mimari gerekçelerle konuşun (Örn: *“p99 gecikmesini 450 ms’den 80 ms’ye düşürür”*, *“bağlantı havuzunun tükenmesini önleyerek ani trafik artışlarında veritabanı kilitlenmelerini engeller”*).
2. **Yapay Çeviri Kokusunu Önleme**:
   - Zorlama Türkçe kelimeler (aşırı özleştirmeci veya arkaik ifadeler) yerine, Türkiye yazılım ekosisteminde kabul görmüş doğal teknik terimleri tercih edin.
3. **Yazım ve Noktalama Kuralları**:
   - Kesme işareti: İngilizce terimlere, kısaltmalara ve kod isimlerine gelen ekleri kesme işaretiyle ayırın (Örn: *“Kubernetes’te”*, *“Redis’e”*, *“API’ler”*, *“Pod’lar”*).
   - Tırnak işaretleri: Standart çift tırnak (“...”) veya tek tırnak (‘...’) kullanın.
   - Sayı ve birimler: Sayı ile birim arasına boşluk bırakın (*“50 ms”*, *“10 GB”*, *“%30”*).

---

## 2. Asla Çevrilmeyecek İngilizce Terimler (Must Stay in English)

Aşağıdaki bileşenler hiçbir koşulda Türkçeleştirilmez ve **özgün İngilizce yazımıyla korunur**:

### 2.1 Ürün ve Marka İsimleri
- `Lade Stack` / `LadeStack`
- `CodeEnhance AI`
- `LS PDF Tools`
- `LS Image Studio`
- `Secure File Hub`
- `Website Builder AI`
- `API Testing Platform`

### 2.2 Diller, Çatılar, Çalışma Zamanları ve Altyapı
- **Diller ve Çalışma Ortamları**: `TypeScript`, `JavaScript`, `Python`, `Go`, `Rust`, `SQL`, `HTML`, `CSS`, `Node.js`, `Bun`, `Deno`
- **Çatılar (Frameworks)**: `React`, `Astro`, `Next.js`, `Vite`, `Vue`, `Svelte`, `Tailwind CSS`
- **Konteyner ve Bulut**: `Kubernetes`, `Docker`, `Terraform`, `Pulumi`, `AWS`, `Azure`, `GCP`, `Cloudflare`, `Vercel`
- **Veritabanı ve Önbellek**: `PostgreSQL`, `MySQL`, `Redis`, `MongoDB`, `Supabase`, `Firebase`, `Appwrite`, `pgvector`, `Pinecone`, `Milvus`, `Qdrant`
- **Gözlemlenebilirlik**: `OpenTelemetry`, `Prometheus`, `Grafana`, `Jaeger`

### 2.3 Protokoller, Standartlar ve Güvenlik
- `REST`, `GraphQL`, `WebSocket`, `gRPC`, `CRDT`
- `OAuth 2.0`, `OpenID Connect`, `PKCE`, `JWT`, `JWK`, `TLS 1.3`, `mTLS`, `HTTPS`
- `OWASP`, `OWASP Top 10`

### 2.4 Kod Belirleyicileri ve CLI Komutları
- Kod içindeki fonksiyon, değişken, sınıf, tip ve özellik adları: `runWithResilience`, `circuitBreaker`, `timeoutMs`, `retries`
- Terminal komutları ve bayrakları: `kubectl apply -f`, `docker compose up`, `npm run build`, `--namespace`, `-it`
- Dosya yolları ve konfigürasyon anahtarları: `astro.config.mjs`, `package.json`, `tsconfig.json`, `/blog`, `/blog/[slug]`

### 2.5 HTTP İlkelleri
- HTTP Metotları: `GET`, `POST`, `PUT`, `DELETE`, `PATCH`, `OPTIONS`, `HEAD`
- Durum Kodları: `200 OK`, `301 Moved Permanently`, `400 Bad Request`, `401 Unauthorized`, `403 Forbidden`, `404 Not Found`, `429 Too Many Requests`, `500 Internal Server Error`, `502 Bad Gateway`
- Başlıklar (Headers): `Authorization`, `Content-Type`, `Cache-Control`, `X-Forwarded-For`

---

## 3. Temel Teknik Terimler Eşleme Tablosu (Technical Glossary)

27 blog makalesinin tamamında aşağıdaki **standart Türkçe karşılıklar** kullanılmalıdır:

| İngilizce Kaynak Terim | Standart Türkçe Çeviri (Canonical) | Kullanılmaması Gereken Varyantlar | Bağlam ve Örnek Cümle (Context & Example) |
|---|---|---|---|
| **Zero-Downtime Deployment** | Sıfır Kesintili Dağıtım / Kesintisiz Dağıtım | Sıfır duruşlu dağıtım, kesilmesiz yayım | “Sağlık kapıları (health gates) içeren **sıfır kesintili dağıtım** hatları kurmak.” |
| **Blue-Green Deployment** | Mavi-Yeşil Dağıtım (Blue-Green) | Mavi-yeşil yayım | “**Mavi-yeşil dağıtım**, hata durumunda anında eski sürüme geri dönmeyi güvenceye alır.” |
| **Canary Deployment** | Kanarya Dağıtım (Canary Release) | Kanarya yayını | “Kullanıcı trafiğinin %5’ini **kanarya dağıtım** üzerine yönlendirerek metrikleri izleyin.” |
| **Rolling Update** | Kademeli Güncelleme / Yuvarlanan Güncelleme | Döner güncelleme | “Pod’ların sırayla teker teker yenilendiği **kademeli güncelleme** stratejisi.” |
| **Health Gate / Readiness Probe** | Sağlık Kapısı / Hazırlık Probu (Readiness Probe) | Sağlık kapıcısı | “Trafiği yönlendirmeden önce **hazırlık probunun (readiness probe)** 200 yanıtı verdiğini doğrulayın.” |
| **Rate Limiting** | Hız Sınırlama (Rate Limiting) | Oran kısıtlama | “API ağ geçidinde Redis tabanlı dağıtık **hız sınırlama** uygulayın.” |
| **Throttling** | Kısma / İstek Yavaşlatma (Throttling) | Boğma, kısıntı | “Kotayı aşan kötü niyetli istemcilere karşı kademeli **kısma (throttling)** devreye girer.” |
| **Token Bucket** | Jeton Kovası (Token Bucket) | Belirteç kovası | “**Jeton kovası** algoritması ani trafik patlamalarını başarıyla tolere eder.” |
| **Leaky Bucket** | Sızıntılı Kova (Leaky Bucket) | Delik kova | “**Sızıntılı kova** yaklaşımı veritabanına giden istek akışını sabit bir hızda tutar.” |
| **Circuit Breaker** | Devre Kesici (Circuit Breaker) | Akım kesici | “Aşağı akış mikroservislerindeki arızaların yayılmasını engellemek için **devre kesici** kullanın.” |
| **Multi-Tenant / Multi-Tenancy** | Çok Kiracılı / Çok Kiracılık (Multi-Tenant) | Çok kullanıcılı | “SaaS mimarilerinde **çok kiracılı** veri izolasyonu ve altyapı maliyet dengesi.” |
| **Tenant Isolation** | Kiracı İzolasyonu | Müşteri ayrımı | “Row-Level Security (RLS) ile veritabanı düzeyinde güçlü **kiracı izolasyonu** sağlama.” |
| **Read Replica** | Okuma Çoğaltması (Read Replica) | Okuma kopyası | “Ağır raporlama sorgularını ana veritabanından **okuma çoğaltmasına (read replica)** yönlendirin.” |
| **Database Sharding** | Veritabanı Parçalama (Sharding) | Veritabanı kırpma | “Organizasyon ID karmasına göre **veritabanı parçalama** ile yatay ölçekleme.” |
| **Connection Pooling** | Bağlantı Havuzlama (Connection Pooling) | Bağlantı göleti | “Sunucusuz (serverless) ortamlarda PgBouncer gibi harici bir **bağlantı havuzlayıcı** şarttır.” |
| **API Gateway** | API Ağ Geçidi (API Gateway) | API geçidi | “Kimlik doğrulama, dinamik yönlendirme ve CORS kurallarını **API ağ geçidinde** toplayın.” |
| **Microservices** | Mikroservisler | Küçük servisler | “Monoliti net sözleşmelere sahip bağımsız **mikroservislere** bölme stratejisi.” |
| **Backend as a Service (BaaS)** | BaaS (Backend as a Service) | Hizmet olarak arka uç | “Firebase, Supabase ve Appwrite: Üç büyük **BaaS** platformunun dürüst kıyaslaması.” |
| **Serverless** | Sunucusuz Mimari (Serverless) | Servissiz | “BaaS ve uç işlevleri (edge functions) ile sunucu yönetimi gerektirmeyen **sunucusuz** arka uç.” |
| **Edge Functions** | Uç İşlevleri (Edge Functions) | Kenar fonksiyonlar | “Kullanıcıya en yakın CDN noktasında çalışan **uç işlevleri** ile yetkilendirme doğrulama.” |
| **Real-Time Data Sync** | Gerçek Zamanlı Veri Eşitleme | Eşzamanlı aktarım | “WebSocket ve **CRDT** (Çatışmasız Çoğaltılan Veri Tipleri) ile **gerçek zamanlı veri eşitleme**.” |
| **Retrieval-Augmented Generation (RAG)** | RAG (Geri Getirme ile Güçlendirilmiş Üretim) | Arama destekli üretim | “Vektör veritabanlarıyla kurumsal **RAG** uygulamaları geliştirme rehberi.” |
| **Vector Database** | Vektör Veritabanı | Vektör ambarı | “Yüksek boyutlu gömmeleri saklamak ve kosinüs benzerliği aramak için **vektör veritabanı**.” |
| **Vector Embedding** | Vektör Gömme (Embedding) | Vektörel yerleştirme | “Metin parçalarını 1536 boyutlu yoğun bir **vektör gömmeye** dönüştürme.” |
| **Chunking** | Parçalama / Metin Bölütleme (Chunking) | Doğrama | “Bağlam bütünlüğünü koruyan kayan pencereli **metin parçalama (chunking)** stratejisi.” |
| **Grounded Answers / Grounding** | Dayanaklı Yanıtlar / Temellendirme (Grounding) | Tabanlı yanıtlar | “Getirilen bağlamı modele enjekte ederek uydurmayı önleyen **dayanaklı yanıtlar** üretme.” |
| **Hallucination** | Halüsinasyon / Model Uydurması | Sanrı, yanılsama | “Yapılandırılmış şema doğrulaması ile LLM **halüsinasyonlarını** en aza indirme.” |
| **Fine-Tuning** | İnce Ayar (Fine-Tuning) | Hassas ayar | “Belirli bir alan terminolojisi için açık kaynak modellerde **LoRA ince ayarı** yapma.” |
| **LoRA (Low-Rank Adaptation)** | LoRA (Düşük Sıralı Uyarlama) | Küçük rütbeli uyarlama | “Tüm ağırlıklar yerine küçük matrisleri eğiterek GPU maliyetini düşüren **LoRA** tekniği.” |
| **Prompt Engineering** | Komut Mühendisliği (Prompt Engineering) | İstem mühendisliği | “Few-Shot ve CoT (Düşünce Zinciri) yöntemleriyle pratik **komut mühendisliği**.” |
| **Agentic Workflow** | Aracı İş Akışları (Agentic Workflows) | Ajan iş akışları | “Araç çağırma (Tool Calling) ve öz-değerlendirme döngülerine dayalı **aracı iş akışları**.” |
| **Model Drift** | Model Kayması (Model Drift) | Model sapması | “Zamanla değişen kullanıcı girdilerine karşı üretimde **model kaymasını** izleme.” |
| **Feature Store** | Öznitelik Deposu (Feature Store) | Nitelik mağazası | “Eğitim ve çıkarım hatları arasında veri tutarlılığını garanti eden **öznitelik deposu**.” |
| **MLOps** | MLOps (Makine Öğrenimi Operasyonları) | ML işletimi | “Model kaydından kanarya sunumuna kadar tam otomatik **MLOps** boru hatları.” |
| **Zero-Trust Security** | Sıfır Güven Güvenliği (Zero Trust) | Güvensiz güvenlik | “'Asla güvenme, daima doğrula' ilkesini benimseyen **sıfır güven güvenliği**.” |
| **Identity-Aware Proxy (IAP)** | Kimlik Bilinçli Vekil (Identity-Aware Proxy) | Kimlikli vekil | “Eski nesil VPN’ler yerine bağlam odaklı **kimlik bilinçli vekil** kullanımı.” |
| **Short-Lived Credentials** | Kısa Ömürlü Kimlik Bilgileri | Geçici anahtarlar | “Statik API anahtarları yerine otomatik döndürülen **kısa ömürlü kimlik bilgileri**.” |
| **Microsegmentation** | Mikro Bölütleme (Microsegmentation) | Mikro dilimleme | “Saldırganın yatay hareketini (Lateral Movement) kısıtlayan ağ içi **mikro bölütleme**.” |
| **Least Privilege** | En Düşük Yetki İlkesi | Minimum hak | “Her mikroservise yalnızca ihtiyaç duyduğu izinleri veren **en düşük yetki ilkesi**.” |
| **Infrastructure as Code (IaC)** | Kod Olarak Altyapı (IaC) | Kodlu altyapı | “Terraform’un bildirimsel HCL yaklaşımı ile Pulumi’nin programlama dilli **IaC** mimarisi.” |
| **Drift Detection** | Sapma Tespiti (Drift Detection) | Kayma yakalama | “Konsoldan yapılan yetkisiz manuel değişiklikleri ortaya çıkaran periyodik **sapma tespiti**.” |
| **GitOps** | GitOps | Git işletimi | “Git deposunu altyapının tek gerçeklik kaynağı (SSOT) kabul eden **GitOps** yaklaşımı.” |
| **Core Pinning / CPU Affinity** | Çekirdek Sabitleme (CPU Pinning) | Çekirdek bağlama | “Düşük gecikmeli iş yüklerinde bağlam değiştirme (context switch) yükünü önleyen **çekirdek sabitleme**.” |
| **NUMA Topology** | NUMA Topolojisi | NUMA yapısı | “Bellek erişim gecikmelerini engellemek için **NUMA topolojisine** göre pod yerleştirme.” |
| **Noisy Neighbor** | Gürültücü Komşu (Noisy Neighbor) | Sesli komşu | “Bulut ortamında I/O kaynaklarını tüketen **gürültücü komşulardan** korunma yolları.” |
| **Multi-Cloud Architecture** | Çoklu Bulut Mimarisi (Multi-Cloud) | Çoğul bulut | “Giden veri (egress) maliyetlerini göz önünde bulundurarak tasarlanan **çoklu bulut mimarisi**.” |
| **Vendor Lock-In** | Sağlayıcı Bağımlılığı (Vendor Lock-In) | Satıcı kilidi | “Açık standartlar ve kapsayıcılar kullanarak bulut **sağlayıcı bağımlılığından** kaçınma.” |
| **Cost Optimization** | Bulut Maliyet Optimizasyonu | Fatura kısma | “Doğru boyutlandırma (rightsizing), taahhütlü indirimler ve depolama yaşam döngüsüyle **maliyet optimizasyonu**.” |

---

## 4. 27 Blog Makalesinin Standart Başlık ve Açıklamaları (Article Reference)

| Slug | Standart Türkçe Başlık | Açıklama (Description) |
|---|---|---|
| `future-of-ai-in-software-development` | 2025 ve Sonrası: Yapay Zekâlı Yazılım Geliştirmenin Geleceği | Üretken modeller, aracı iş akışları ve otomatik doğrulama modern yazılım mühendisliğini kökten değiştiriyor. |
| `building-ai-powered-code-review-systems` | YZ Destekli Kod İnceleme Sistemleri Kurmak | Hata yakalayan, stil dayatan, geliştirici yetiştiren otomatik inceleme hatları nasıl tasarlanır? |
| `machine-learning-pipelines-for-web-developers` | Web Geliştiricileri için Makine Öğrenmesi Hatları | Veri alımından eğitime, değerlendirmeden sunuma — sahadaki web geliştiricisine ML girişi. |
| `generative-ai-for-content-creation` | Üretken YZ ile İçerik Üretmek | Kendi sesini kaybetmeden taslak, düzeltme ve büyütmeyi LLM’e vermek. |
| `building-rag-applications-vector-databases` | Vektör Veritabanlarıyla RAG Uygulamaları | Parçalama, gömme, vektör arama ve dayanaklı yanıttan uçtan uca RAG rehberi. |
| `fine-tuning-llms-domain-specific-tasks` | Alana Özgü Görevler için LLM İnce Ayarı | Komut mu ince ayar mı, veri seti nasıl hazırlanır, bütçe dostu LoRA akışları. |
| `multi-tenant-saas-architecture-patterns` | Çok Kiracılı SaaS Mimari Kalıpları | Silo, havuz ve köprü kiracılık modellerinde izolasyon, maliyet ve ölçeklenebilirlik. |
| `building-subscription-billing-systems` | Abonelik Faturalama Sistemleri Kurmak | Deneme, orantılı ücret, tahsilat ve webhook’larla finansın güveneceği faturalama. |
| `scaling-saas-applications-million-users` | Bir Milyon Kullanıcıya SaaS Ölçeklemek | Önbellek, kuyruk, okuma replikaları ve parçalama — milyonu taşıyan aşamalı oyun planı. |
| `baas-platforms-compared-firebase-supabase-appwrite` | BaaS Karşılaştırma: Firebase vs Supabase vs Appwrite | Kimlik doğrulama, veritabanı, fiyat ve çıkış stratejisinde üç platformun dürüst karşılaştırması. |
| `building-serverless-backends-with-baas` | BaaS ile Sunucusuz Arka Uçlar | Sıfır sunucuyla üretim arka ucu: şema tasarımı, uç işlevleri, arka plan işleri. |
| `real-time-data-sync-backend-services` | Arka Uçlarda Gerçek Zamanlı Veri Eşitleme | WebSocket, CRDT ve yönetilen gerçek zamanlı servislerle çevrimiçi durumu ve ortak düzenleme. |
| `rest-vs-graphql-choosing-right-api-paradigm` | REST vs GraphQL: Doğru API’yi Seçmek | Sürümlendirme, önbellek, yük ve ekip hızıyla REST/GraphQL karar çerçevesi. |
| `api-rate-limiting-throttling-strategies` | API Hız Sınırlama ve Kısma Stratejileri | İyi istemcileri üzmeden API’yi koruyan jeton kovaları ve kotalar. |
| `building-api-gateways-microservices` | Mikroservisler için API Ağ Geçitleri | Kimlik doğrulama, yönlendirme, dönüştürme ve gözlemlenebilirlik filonun kıyısında. |
| `cloud-cost-optimization-strategies-startups` | Startuplar için Bulut Maliyet Optimizasyonu | Doğru boyutlandırma, taahhüt, depolama yaşam döngüsü ve etiket disipliniyle faturayı %30-50 indirmek. |
| `multi-cloud-architecture-aws-azure-gcp` | AWS, Azure ve GCP ile Çoklu Bulut | Çoklu bulut ne zaman kazandırır, kapsayıcı ve IaC ile taşınabilirlik nasıl korunur? |
| `containers-vs-vms-when-to-use-each` | Konteyner vs VM: Hangisi Ne Zaman | İzolasyon, ek yük ve operasyon dengesiyle güvenle seçmek. |
| `optimizing-vm-performance-production-workloads` | Üretim İş Yükleri için VM Performansı | CPU sabitleme, NUMA, depolama kuyrukları ve gürültücü komşu savunmasıyla öngörülebilir VM. |
| `gitops-managing-infrastructure-with-git` | GitOps: Altyapıyı Git ile Yönetmek | Bildirimli altyapı, PR incelemesi, sapma tespiti ve otomatik eşitleme. |
| `building-zero-downtime-deployment-pipelines` | Sıfır Kesintili Dağıtım Hatları | Mavi-yeşil, kanarya ve yuvarlanan stratejilerle kullanıcının fark etmediği dağıtımlar. |
| `infrastructure-as-code-terraform-pulumi` | Terraform ve Pulumi ile Kod Olarak Altyapı | HCL mi gerçek dil mi, durum yönetimi ve modül tasarımı. |
| `zero-trust-security-web-applications` | Web Uygulamalarında Sıfır Güven Güvenliği | Asla güvenme, hep doğrula: kimlik-bilinçli vekiller, kısa ömürlü kimlikler, mikro bölütleme. |
| `owasp-top-10-complete-mitigation-guide` | OWASP Top 10: Eksiksiz Azaltma Rehberi | 10 riski de açıklıklı ve yamalı kod örnekleriyle bugünden uygulayın. |
| `implementing-oauth2-openid-connect` | OAuth2 ve OpenID Connect Uygulamak | PKCE’li yetkilendirme kodu, jeton saklama, döndürme ve çıkış — ilk seferde doğru. |
| `mlops-deploying-ml-models-production` | MLOps: ML Modellerini Üretime Almak | Kayıt defteri, kanarya sunumu, öznitelik deposu ve geri alma planlarıyla güven veren modeller. |
| `monitoring-ai-systems-in-production` | Üretimde YZ Sistemlerini İzlemek | Değerlendirme ve korkuluklarla YZ özelliklerinin kalite, kayma, maliyet ve gecikmesini takip. |
