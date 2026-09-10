import type { LocaleContent } from './content-types';

export const tr: LocaleContent = {
  metaDescription: 'Ücretsiz yapay zekâ geliştirici araçları: kod inceleme, PDF araçları, CV oluşturucu ve görsel stüdyosu. Kayıt yok.',
  testimonials: [
    {
      quote: 'CodeEnhance AI, frontend deneme-yanılma süremi yarıya indirdi. Canlı AI önerileri, kıdemli biriyle eşli programlama gibi hissettiriyor.',
      name: 'Priya Sharma',
      role: 'Frontend Geliştirici, Mumbai'
    },
    {
      quote: 'LS PDF Tools tek başına ekibin üç ücretli aboneliğini emekli etti. Tamamen istemcide, hızlı ve bedava — inanılır gibi değil.',
      name: 'Daniel Kim',
      role: 'Bağımsız Geliştirici, Seul'
    },
    {
      quote: 'RAG mimarisi ve MLOps konularında referansım Lade Stack blog. Derin, pratik, laf kalabalığı yok.',
      name: 'Ana Souza',
      role: 'ML Mühendisi, São Paulo'
    }
  ],
  products: [
    {
      title: 'CodeEnhance AI',
      tagline: 'Akıllı Kod Görüntüleyici ve İyileştirici',
      desc: 'Gerçek zamanlı AI denetimi, öneriler ve anlık önizlemeyle ham kodu üretime hazır yazılıma dönüştürün.',
      icon: 'lucide:code-xml',
      link: '/ai-code-viewer-ai',
      badge: 'Popüler'
    },
    {
      title: 'API Testing Platform',
      tagline: 'Otomatik REST ve GraphQL Testi',
      desc: 'Saniyeler içinde otomatik doğrulama paketleri üretin, API yanıtlarını taklit edin, güvenlik testleri koşturun.',
      icon: 'lucide:network',
      link: '/apps',
      badge: 'Yüksek Hız'
    },
    {
      title: 'Website Builder AI',
      tagline: 'Kodsuz Semantik Üretici',
      desc: 'Semantik işaretlemeli modern, duyarlı arayüzler üretin, standart HTML/CSS olarak dışa aktarın.',
      icon: 'lucide:layout-template',
      link: '/apps',
      badge: 'Sıfır Kod'
    },
    {
      title: 'Secure File Hub',
      tagline: 'Şifreli Geliştirici Dosya Paylaşımı',
      desc: 'Yapılandırma dosyaları, kimlik bilgileri ve dağıtım arşivleri için hızlı, güvenli geçici paylaşım.',
      icon: 'lucide:shield-check',
      link: '/apps',
      badge: 'Şifreli'
    }
  ],
  supportTopics: [
    { title: 'Başlangıç', text: 'Galeriden bir uygulama seçin, bir dakikada üretken olun — kayıt gerekmez.' },
    { title: 'Dosya araçları', text: 'PDF ve görsel araçları tamamen yerelde çalışır. Büyük dosyalar için kararlı bağlantılı masaüstü önerilir.' },
    { title: 'CodeEnhance AI', text: 'Kodu yapıştırın, işlemi seçin, önerileri inceleyip kopyalayın ya da indirin.' },
    { title: 'Hesaplar ve veri', text: 'Hesap gerekmez. Site verisini dilediğinizde silin — dışa aktarma işinizi korur.' }
  ],
  supportFaqs: [
    { q: 'Araç açılmıyor. Ne yapmalıyım?', a: 'Sayfayı sert yenileyin, ladestack.in için saldırgan reklam engelleyicileri kapatın ve son bir yılın Chromium veya Firefox sürümüyle deneyin.' },
    { q: 'Dosyalarım bir yere yükleniyor mu?', a: 'Hayır. Çekirdek araçlar tamamen istemcide çalışır; dosyalar cihazınızdan çıkmaz.' },
    { q: 'Hata bildirimi nasıl yaparım?', a: 'Araç adı, tarayıcı sürümü ve tekrar adımlarıyla admin@ladestack.in adresine yazın. Ekran görüntüsü iş görür.' },
    { q: 'Yeni araç önerebilir miyim?', a: 'Elbette — yol haritasını topluluk istekleri belirler. İletişim sayfasından yazın.' },
    { q: 'Ücretsiz araçlarda SLA var mı?', a: 'Resmi SLA yok, ama çalışma süresini sürekli izliyor, bozulmaları hızla düzeltiyoruz.' },
    { q: 'En iyi pratikleri nereden öğrenirim?', a: 'Önce Dokümanlar ve Blog — yapay zekâ geliştirmeyi uçtan uca anlatan 27+ rehber sizi bekler.' }
  ],
  contactFaqs: [
    { q: 'Gerçekten sonsuza dek ücretsiz mi?', a: 'Evet. Her araç katmansız, denemesiz, kredi kartsız sonsuza dek ücretsiz.' },
    { q: 'Destek ne kadar hızlı döner?', a: '7/24 çalışıyoruz, genelde saatler içinde admin@ladestack.in üzerinden yanıtlarız.' },
    { q: 'Özellik isteyebilir miyim?', a: 'Kesinlikle — GitHub issue açın ya da aşağıdaki formu doldurun.' },
    { q: 'Kurumsal çözüm var mı?', a: 'Var. İhtiyacınızı yazın, özel entegrasyon ve SLA teklif edelim.' }
  ],
  docsGroups: [
    { id: 'getting-started', title: 'Başlangıç', articles: [
      { title: 'Hızlı başlangıç: ilk uygulamanı aç', text: 'Uygulama Galerisi’nden bir araç seç, kayıt olmadan bir dakikada üretken ol.' },
      { title: 'Ekosistem turu', text: 'Ana sayfa, Uygulamalar, Blog, Dokümanlar, Destek — her yüzey iş akışına nasıl oturur?' }
    ]},
    { id: 'api-reference', title: 'API Referansı', articles: [
      { title: 'CodeEnhance AI kullanımı', text: 'HTML, CSS ya da JS yapıştır, iyileştir ya da açıkla de, üretime hazır kodu al.' },
      { title: 'Kota ve adil kullanım', text: 'Herkes hızlı kullansın diye dakikalık korumalı cömert ücretsiz kota.' }
    ]},
    { id: 'integrations', title: 'Entegrasyonlar', articles: [
      { title: 'GitHub ve Vercel’e aktarma', text: 'Üretilen kodu repoya kopyala, önizleme dağıtımını tek tıkla çık.' }
    ]},
    { id: 'tutorials', title: 'Eğitimler', articles: [
      { title: '5 dakikada açılış sayfası', text: 'Website Builder ve Image Studio ile komuttan yayına.' }
    ]},
    { id: 'security', title: 'Güvenlik', articles: [
      { title: 'Tasarımda gizlilik', text: 'İstemci-tarafı işleme demek: çekirdek araçlarda dosya tarayıcıdan çıkmaz.' }
    ]},
    { id: 'teams', title: 'Ekipler', articles: [
      { title: 'Paylaşım bağlantılarıyla iş birliği', text: 'Taşınabilir JSON dışa aktarmayla çıktı ve şablonları ekiple paylaş.' }
    ]},
    { id: 'data', title: 'Veri Yönetimi', articles: [
      { title: 'İşini dışa aktarma', text: 'Her araç kopyalama, indirme, markdown desteği sunar — verin senin.' }
    ]},
    { id: 'deployment', title: 'Dağıtım', articles: [
      { title: 'Kendi sunucunda çalıştırma listesi', text: 'Statik-öncelikli mimariyle araçları yansılamak çocuk oyuncağı.' }
    ]}
  ],
  docsChangelog: [
    { v: 'v2.4.0', date: '2026-08-20', text: '7 dilli ve Lighthouse 100 puanlı saf Astro yeniden yazımı.' },
    { v: 'v2.3.0', date: '2024-11-30', text: 'Documentation AI betası ve API Testing koleksiyonları.' },
    { v: 'v2.0.0', date: '2024-06-01', text: 'CodeEnhance AI genel kullanıma açıldı.' }
  ],
  timeline: [
    { year: '2020', title: 'Alet çantasının doğuşu', text: 'Girish Lade kişisel geliştirici araçları yapmaya başladı — PDF, görsel ve kod yardımcıları.' },
    { year: '2022', title: 'Lade Stack şekilleniyor', text: 'Ortak tasarım dili ve sonsuza-dek-ücretsiz sözüyle araçlar tek markada toplandı.' },
    { year: '2024', title: 'Yapay zekâ ekosistemi', text: 'CodeEnhance AI yayında; blog ve dokümanlar 27+ rehbere, topluluk 8.000 geliştiriciye ulaştı.' },
    { year: '2026', title: 'Saf Astro yeniden yazımı', text: 'Sıfır-JS çalışma zamanı, 7 dil, 100/100 Lighthouse ile tam statik yeniden inşa.' }
  ],
  aboutStats: ['Kuruluş', 'Üretim aracı', 'Geliştirici', 'Sonsuza dek ücretsiz'],
  storyExtra: 'YZ sistemleri, web geliştirme ve kullanıcı deneyimine uzanan çok disiplinli mühendis ve tasarımcı — her üreticiye startup hızında süper güçleri bedavaya veren araçlar yapıyor.',
  footerLinks: {
    aiCodeViewer: 'YZ Kod Görüntüleyici',
    support: 'Destek Merkezi',
    privacy: 'Gizlilik Politikası',
    terms: 'Kullanım Şartları'
  },
  aicodeFeatures: [
    { title: 'Gerçek zamanlı YZ desteği', text: 'Yazdıkça dayanaklı önerilerle açıkla, düzenle, iyileştir.' },
    { title: 'Canlı önizleme ve derleme', text: 'HTML, CSS, JS sonuçlarını hata vurgulamasıyla anında gör.' },
    { title: 'Tek tıkla iyileştirme', text: 'Ham parçaları temiz, erişilebilir, üretime hazır koda çevir.' },
    { title: 'Her yere aktar', text: 'Kopyala ya da indir — kilitlenme yok, filigran yok.' }
  ],
  privacy: [
    { h: 'Topladığımız bilgiler', p: 'Asgari düzeyde topluyoruz: gönderdiğiniz iletişim mesajları, abone olduğunuz bülten e-postaları ve gizliliğe saygılı analiz (sayfa görüntüleme, siteler-arası takip yok). Çekirdek araçlar dosyaları tamamen tarayıcınızda işler — belgeleriniz sunucularımıza ulaşmaz.' },
    { h: 'Bilgileri nasıl kullanıyoruz', p: 'Destek taleplerini yanıtlamak, istediğiniz bültenleri göndermek, performans ve güvenilirliği artırmak için. Kişisel veriyi asla satmıyor, reklam ağlarıyla paylaşmıyoruz.' },
    { h: 'Çerezler ve depolama', p: 'Tema ve dil tercihleri yalnızca cihazınızdaki localStorage’da durur. Analiz çerezleri varsa birinci-taraf ve anonimleştirilmiştir.' },
    { h: 'Haklarınız', p: 'admin@ladestack.in adresine yazarak verilerinize erişme, düzeltme ya da silme isteyebilirsiniz. E-postalardan tek tıkla çıkarsınız.' },
    { h: 'İletişim', p: 'Politika soruları: admin@ladestack.in, Mumbai, Hindistan.' }
  ],
  terms: [
    { h: 'Kabul edilebilir kullanım', p: 'Araçları yasalara uygun kullanın. Hız sınırlarını zorlamayın, hizmeti bozmaya kalkmayın, hakkı sizde olmayan içeriği işlemeyin.' },
    { h: 'Ücretsiz lisans', p: 'Kişisel ve ticari kullanım ücretsiz. Ürettikleriniz sizin. Platformun kendisini markamızla yeniden dağıtmak için izin gerekir.' },
    { h: 'API adil kullanım', p: 'Otomatik erişimde yayınlanan kotalara uyun. Aşırı trafik herkes için kısıtlanabilir.' },
    { h: 'Garanti yok', p: 'Hizmetler "olduğu gibi" sunulur, garanti verilmez. Güvenilirlik için çok çalışıyoruz ama kesintisizliği garanti edemeyiz.' },
    { h: 'Sorumluluk sınırı', p: 'Yasanın izin verdiği en geniş ölçüde, hizmet kullanımından doğan dolaylı zararlardan sorumlu değiliz.' },
    { h: 'İletişim', p: 'Şartlarla ilgili sorular: admin@ladestack.in, Mumbai, Hindistan.' }
  ],
  apps: {
    'ai-code-viewer-ai': {
      tagline: 'YZ destekli frontend kod editörü',
      description: 'Gerçek zamanlı YZ desteğiyle HTML, CSS ve JS düzenleyin, derleyin, iyileştirin.',
      features: ['Gerçek zamanlı YZ desteği', 'Canlı önizleme', 'Tek tıkla iyileştirme']
    },
    'ls-pdf': {
      tagline: 'Tarayıcıda ücretsiz PDF araç seti',
      description: 'Birleştir, böl, sıkıştır, dönüştür — hepsi istemcide. Yükleme yok.',
      features: ['Birleştir ve böl', 'Sıkıştır', 'PDF’ten görsele']
    },
    'ls-img': {
      tagline: 'Görselleri anında sıkıştır ve dönüştür',
      description: 'Gizlilik garantili tarayıcı işlemeyle toplu sıkıştır, yeniden boyutlandır, dönüştür.',
      features: ['Toplu sıkıştırma', 'Biçim dönüştürme', 'Yeniden boyutlandırma']
    },
    'swift-resume': {
      tagline: 'Dakikalar içinde ATS uyumlu CV',
      description: 'Canlı önizleme ve PDF dışa aktarmayla şık, ATS optimize CV’ler hazırla.',
      features: ['ATS şablonları', 'Canlı önizleme', 'PDF dışa aktarma']
    },
    'bharat-land': {
      tagline: 'Hindistan tapu kaydı içgörüleri',
      description: 'Temiz, hızlı arayüzle tapu verisini bul ve anla.',
      features: ['Hızlı sorgu', 'Temiz arayüz', 'Mobil uyumlu']
    },
    'api-testing': {
      tagline: 'REST ve GraphQL API’leri görsel test et',
      description: 'Koleksiyon ve ortamlarla API testleri tasarla, gönder, otomatikleştir.',
      features: ['Koleksiyonlar', 'Ortamlar', 'Test betikleri']
    },
    'website-builder': {
      tagline: 'YZ ile açılış sayfası yayına al',
      description: 'Siteni anlat, hızlı ve SEO hazır açılış sayfan hazır.',
      features: ['YZ bölümleri', 'SEO varsayılanları', 'Tek tıkla yayın']
    },
    'file-management': {
      tagline: 'Süreli bağlantılarla dosya paylaş',
      description: 'Dosyaları yükle, güvenli ve süreli bağlantıları tam kontrolle paylaş.',
      features: ['Süreli bağlantılar', 'Kayıt yok', 'Hızlı CDN']
    },
    'documentation-ai': {
      tagline: 'Dokümanları anında özetle',
      description: 'Doküman ya da kod yapıştır, net özet, kılavuz ve referans al.',
      features: ['Anlık özetler', 'Kod açıklayıcılar', 'Markdown dışa aktarma']
    }
  },
  appTime: {
    'Instant': 'Anında',
    '1 minute': '1 dakika',
    '2 minutes': '2 dakika',
    '5 minutes': '5 dakika'
  },
  appCategories: {
    'AI Tools': 'YZ Araçları',
    'Productivity': 'Verimlilik',
    'Utilities': 'Araçlar'
  },
  blogCategories: {
    'AI Development': 'YZ Geliştirme',
    'Generative AI': 'Üretken YZ',
    'SaaS Architecture': 'SaaS Mimarisi',
    'Backend as a Service': 'BaaS',
    'API Design & Scaling': 'API Tasarım ve Ölçek',
    'Cloud Computing': 'Bulut Bilişim',
    'Virtual Machines': 'Sanal Makineler',
    'DevOps & CI/CD': 'DevOps ve CI/CD',
    'Security in Web Apps': 'Web Güvenliği',
    'AI Production Systems': 'YZ Üretim Sistemleri'
  },
  blogPosts: {
    'future-of-ai-in-software-development': { title: '2025 ve Sonrası: Yapay Zekâlı Yazılım Geliştirmenin Geleceği', description: 'Üretken modeller, aracı iş akışları ve otomatik doğrulama modern yazılım mühendisliğini kökten değiştiriyor.' },
    'building-ai-powered-code-review-systems': { title: 'YZ Destekli Kod İnceleme Sistemleri Kurmak', description: 'Hata yakalayan, stil dayatan, geliştirici yetiştiren otomatik inceleme hatları nasıl tasarlanır?' },
    'machine-learning-pipelines-for-web-developers': { title: 'Web Geliştiricileri için Makine Öğrenmesi Hatları', description: 'Veri alımından eğitime, değerlendirmeden sunuma — sahadaki web geliştiricisine ML girişi.' },
    'generative-ai-for-content-creation': { title: 'Üretken YZ ile İçerik Üretmek', description: 'Kendi sesini kaybetmeden taslak, düzeltme ve büyütmeyi LLM’e vermek.' },
    'building-rag-applications-vector-databases': { title: 'Vektör Veritabanlarıyla RAG Uygulamaları', description: 'Parçalama, gömme, vektör arama ve dayanaklı yanıttan uçtan uca RAG rehberi.' },
    'fine-tuning-llms-domain-specific-tasks': { title: 'Alana Özgü Görevler için LLM İnce Ayarı', description: 'Komut mu ince ayar mı, veri seti nasıl hazırlanır, bütçe dostu LoRA akışları.' },
    'multi-tenant-saas-architecture-patterns': { title: 'Çok Kiracılı SaaS Mimari Kalıpları', description: 'Silo, havuz ve köprü kiracılık modellerinde izolasyon, maliyet ve ölçeklenebilirlik.' },
    'building-subscription-billing-systems': { title: 'Abonelik Faturalama Sistemleri Kurmak', description: 'Deneme, orantılı ücret, tahsilat ve webhook’larla finansın güveneceği faturalama.' },
    'scaling-saas-applications-million-users': { title: 'Bir Milyon Kullanıcıya SaaS Ölçeklemek', description: 'Önbellek, kuyruk, okuma replikaları ve parçalama — milyonu taşıyan aşamalı oyun planı.' },
    'baas-platforms-compared-firebase-supabase-appwrite': { title: 'BaaS Karşılaştırma: Firebase vs Supabase vs Appwrite', description: 'Kimlik doğrulama, veritabanı, fiyat ve çıkış stratejisinde üç platformun dürüst karşılaştırması.' },
    'building-serverless-backends-with-baas': { title: 'BaaS ile Sunucusuz Arka Uçlar', description: 'Sıfır sunucuyla üretim arka ucu: şema tasarımı, uç işlevleri, arka plan işleri.' },
    'real-time-data-sync-backend-services': { title: 'Arka Uçlarda Gerçek Zamanlı Veri Eşitleme', description: 'WebSocket, CRDT ve yönetilen gerçek zamanlı servislerle çevrimiçi durumu ve ortak düzenleme.' },
    'rest-vs-graphql-choosing-right-api-paradigm': { title: 'REST vs GraphQL: Doğru API’yi Seçmek', description: 'Sürümlendirme, önbellek, yük ve ekip hızıyla REST/GraphQL karar çerçevesi.' },
    'api-rate-limiting-throttling-strategies': { title: 'API Hız Sınırlama ve Kısma Stratejileri', description: 'İyi istemcileri üzmeden API’yi koruyan jeton kovaları ve kotalar.' },
    'building-api-gateways-microservices': { title: 'Mikroservisler için API Ağ Geçitleri', description: 'Kimlik doğrulama, yönlendirme, dönüştürme ve gözlemlenebilirlik filonun kıyısında.' },
    'cloud-cost-optimization-strategies-startups': { title: 'Startuplar için Bulut Maliyet Optimizasyonu', description: 'Doğru boyutlandırma, taahhüt, depolama yaşam döngüsü ve etiket disipliniyle faturayı %30-50 indirmek.' },
    'multi-cloud-architecture-aws-azure-gcp': { title: 'AWS, Azure ve GCP ile Çoklu Bulut', description: 'Çoklu bulut ne zaman kazandırır, kapsayıcı ve IaC ile taşınabilirlik nasıl korunur?' },
    'containers-vs-vms-when-to-use-each': { title: 'Konteyner vs VM: Hangisi Ne Zaman', description: 'İzolasyon, ek yük ve operasyon dengesiyle güvenle seçmek.' },
    'optimizing-vm-performance-production-workloads': { title: 'Üretim İş Yükleri için VM Performansı', description: 'CPU sabitleme, NUMA, depolama kuyrukları ve gürültücü komşu savunmasıyla öngörülebilir VM.' },
    'gitops-managing-infrastructure-with-git': { title: 'GitOps: Altyapıyı Git ile Yönetmek', description: 'Bildirimli altyapı, PR incelemesi, sapma tespiti ve otomatik eşitleme.' },
    'building-zero-downtime-deployment-pipelines': { title: 'Sıfır Kesintili Dağıtım Hatları', description: 'Mavi-yeşil, kanarya ve yuvarlanan stratejilerle kullanıcının fark etmediği dağıtımlar.' },
    'infrastructure-as-code-terraform-pulumi': { title: 'Terraform ve Pulumi ile Kod Olarak Altyapı', description: 'HCL mi gerçek dil mi, durum yönetimi ve modül tasarımı.' },
    'zero-trust-security-web-applications': { title: 'Web Uygulamalarında Sıfır Güven Güvenliği', description: 'Asla güvenme, hep doğrula: kimlik-bilinçli vekiller, kısa ömürlü kimlikler, mikro bölütleme.' },
    'owasp-top-10-complete-mitigation-guide': { title: 'OWASP Top 10: Eksiksiz Azaltma Rehberi', description: '10 riski de açıklıklı ve yamalı kod örnekleriyle bugünden uygulayın.' },
    'implementing-oauth2-openid-connect': { title: 'OAuth2 ve OpenID Connect Uygulamak', description: 'PKCE’li yetkilendirme kodu, jeton saklama, döndürme ve çıkış — ilk seferde doğru.' },
    'mlops-deploying-ml-models-production': { title: 'MLOps: ML Modellerini Üretime Almak', description: 'Kayıt defteri, kanarya sunumu, öznitelik deposu ve geri alma planlarıyla güven veren modeller.' },
    'monitoring-ai-systems-in-production': { title: 'Üretimde YZ Sistemlerini İzlemek', description: 'Değerlendirme ve korkuluklarla YZ özelliklerinin kalite, kayma, maliyet ve gecikmesini takip.' }
  }
};
