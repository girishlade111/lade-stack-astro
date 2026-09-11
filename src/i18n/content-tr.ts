import type { LocaleContent } from './content-types';

export const tr: LocaleContent = {
  metaDescription:
    'Lade Stack — Girish Lade tarafından kurulan pratik geliştirici araçları ve yapay zeka mühendisliği ekosistemi. Kod inceleme, API testi ve dosya araçları. Kayıt gerektirmeden sonsuza kadar ücretsiz.',
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
      desc: 'Web dillerinde gerçek zamanlı yapay zeka denetimi, yapısal iyileştirme önerileri ve anlık tarayıcı önizlemesiyle kodunuzu hızla hata ayıklayın.',
      icon: 'lucide:code-xml',
      link: '/ai-code-viewer-ai',
      badge: 'Popüler'
    },
    {
      title: 'API Testing Platform',
      tagline: 'Otomatik REST ve GraphQL Testi',
      desc: 'Tarayıcınızda doğrudan istek uç noktalarını doğrulayın, yapılandırılmış yanıt yüklerini inceleyin ve API sözleşmelerini test edin.',
      icon: 'lucide:network',
      link: '/apps',
      badge: 'Yüksek Hız'
    },
    {
      title: 'Website Builder AI',
      tagline: 'Semantik Web Prototipleme',
      desc: 'Arayüz fikirlerinizi gereksiz çerçeve bağımlılıkları olmadan temiz semantik HTML/CSS işaretlemeli modern web prototiplerine dönüştürün.',
      icon: 'lucide:layout-template',
      link: '/apps',
      badge: 'Sıfır Kod'
    },
    {
      title: 'Secure File Hub',
      tagline: 'Geliştiriciler İçin Güvenli Dosya Paylaşımı',
      desc: 'Yapılandırma dosyaları, ortam değişkenleri ve dağıtım paketleri için hızlı ve kontrollü geçici dosya paylaşımı.',
      icon: 'lucide:shield-check',
      link: '/apps',
      badge: 'Şifreli'
    }
  ],
  supportTopics: [
    {
      title: 'Başlangıç',
      text: 'Uygulama galerisinden dilediğiniz aracı kayıt, ödeme duvarı veya kurulum olmadan anında başlatın. Çekirdek yardımcı programlar doğrudan tarayıcınızda istemci tarafında çalışarak iş akışınızı hızlı, gizli ve kesintisiz tutar.'
    },
    {
      title: 'Dosya araçları',
      text: 'LS PDF Tools ve LS Image Studio gibi araçlar, WebAssembly ve Canvas ile dosyaları tarayıcı belleğinde yerel olarak işler. Dosyalarınız cihazınızdan çıkmaz. Büyük dosyalar için yeterli RAM’e sahip güncel bir masaüstü tarayıcı önerilir.'
    },
    {
      title: 'CodeEnhance AI',
      text: 'Kod parçacıklarını yapıştırarak sözdizimini inceleyin, yapıyı yeniden düzenleyin ve gerçek zamanlı YZ önerileri alın. YZ çıktılarını akıllı bir eşli programlama asistanı gibi değerlendirin: üretim ortamına almadan önce önerilen kodu mutlaka inceleyin, lint ve testten geçirin.'
    },
    {
      title: 'Hesaplar ve veri',
      text: 'Hesap zorunluluğu yoktur. Oturumlar, karalama alanları ve tercihler tarayıcınızın yerel depolama alanında (LocalStorage/IndexedDB) tutulur. Dosyalarınızı, yapılandırmalarınızı ve geliştirilmiş kodlarınızı düzenli olarak yerel diskinize indirmek için yerleşik dışa aktarma işlevini kullanın.'
    }
  ],
  supportFaqs: [
    {
      q: 'Bir araç yüklenmiyor veya yanıt vermiyor. Ne yapmalıyım?',
      a: 'Önbelleğe alınmış eski betikleri temizlemek için sayfayı sert yenileyin (Ctrl+F5 veya Cmd+Shift+R). Ardından ladestack.in isteklerini engelleyen agresif bir reklam engelleyici veya güvenlik eklentisi olup olmadığını kontrol edin. Eklenti çakışmalarını ekarte etmek için aracı Gizli Pencerede açmayı deneyin. Sorun sürüyorsa Geliştirici Araçları Konsolunu (F12) açarak WebAssembly veya ağ yükleme hatalarını inceleyin. Çözülmezse tarayıcı sürümünüz ve konsol günlükleriyle iletişim sayfamızdan bize ulaşın.'
    },
    {
      q: 'Dosyalarım, belgelerim veya kodlarım harici sunuculara yükleniyor mu?',
      a: 'Hayır. LS PDF Tools ve LS Image Studio gibi istemci taraflı araçlarda dosya ayrıştırma, görsel düzenleme ve dönüştürme işlemleri tamamen tarayıcınızın yerel belleğinde WebAssembly ve HTML5 Canvas API’leri kullanılarak yürütülür. Dosyalarınız asla sunucularımıza yüklenmez veya uzakta saklanmaz. CodeEnhance AI gibi YZ araçlarında ise girilen kod yalnızca yanıt üretmek amacıyla geçici belleğe güvenle aktarılır, diske kaydedilmez ve model eğitiminde kullanılmaz.'
    },
    {
      q: 'Etkili bir hata (bug) bildirimi nasıl yapabilirim?',
      a: 'Faydalı bir hata raporu şunları içerir: araç adı ve sayfa bağlantısı, işletim sisteminiz ve tarayıcı sürümünüz, hatayı tetikleyen kesin adımlar, beklenen sonuca karşılık gerçekleşen durum ve geliştirici konsolu (F12) hata günlükleri. Ekran görüntüleri veya video kayıtları teşhisi büyük ölçüde hızlandırır. Bildirimi İletişim sayfamızdan veya admin@ladestack.in adresinden gönderebilirsiniz; tekrarlanabilir raporlar sayesinde yamaları hızla yayımlıyoruz.'
    },
    {
      q: 'Yeni bir araç önerebilir veya özellik talep edebilir miyim?',
      a: 'Evet, topluluk talepleri Lade Stack yol haritasını doğrudan şekillendirir. Geliştirici yardımcı programları, üretkenlik artırıcılar ve YZ iş akışları hakkındaki önerilerinizi memnuniyetle karşılıyoruz. Öneriler pratik geliştirici faydası, mimari uygulanabilirlik, performans etkisi ve hafif istemci öncelikli felsefemiz doğrultusunda değerlendirilir. Fikirlerinizi İletişim sayfasından veya GitHub tartışmalarından iletebilirsiniz.'
    },
    {
      q: 'Ücretsiz araçlar için resmi bir SLA (Hizmet Seviyesi Anlaşması) var mı?',
      a: 'Ücretsiz araçlar için kurumsal sözleşmeye dayalı SLA veya garantili yanıt süreleri sunmuyoruz. Bununla birlikte altyapımız, %99,9 kesintisiz çalışma hedefiyle statik ön işleme, küresel CDN dağıtımı ve sürekli çalışma süresi izlemesiyle yüksek dayanıklılıkta tasarlanmıştır. Her türlü bozulma veya tarayıcı uyumsuzluğu yüksek öncelikle ele alınır ve hızla giderilir.'
    },
    {
      q: 'En iyi pratikleri ve teknik eğitimleri nereden bulabilirim?',
      a: 'Mimari genel bakışlar, entegrasyon modelleri ve CodeEnhance AI gibi araçların adım adım kılavuzları için Dokümantasyon sayfamızdan (/docs) başlayabilirsiniz. Ayrıca Üretken YZ mühendisliği, frontend performansı, istemci tarafı veri gizliliği ve modern web geliştirmeyi derinlemesine ele alan 27’den fazla teknik kılavuz için Mühendislik Blogumuzu (/blog) inceleyebilirsiniz.'
    },
    {
      q: 'CodeEnhance AI beklenmeyen veya eksik bir çıktı verirse ne yapmalıyım?',
      a: 'Öncelikle girdi parçacığınızı kontrol edin: kodu belirli bir fonksiyon veya bileşen düzeyinde izole edin ve standart dil bildirimleriyle net bir bağlam sunun. Çok büyük ve yapılandırılmamış kod blokları modelin odağını dağıtabilir. Çıktı tatmin edici değilse talimatı netleştirin veya değişiklikleri adım adım talep edin. YZ’nin olasılıksal öneriler sunduğunu unutmayın: kodu ana dala eklemeden önce daima manuel olarak inceleyin, biçimlendirin ve birim testlerinden geçirin.'
    },
    {
      q: 'Dosya dönüştürme veya indirme işlemi başarısız olursa ne yapmalıyım?',
      a: 'Tarayıcı içi dosya işleme doğrudan cihazınızın kullanılabilir RAM miktarına bağlıdır. Dönüştürme durursa veya başarısız olursa yüksek bellek tüketen diğer sekmeleri kapatın, boş RAM alanı sağlayın ve tarayıcınızın ladestack.in adresinden otomatik dosya indirmesine izin verdiğini doğrulayın. Çok büyük PDF’ler veya yüksek çözünürlüklü fotoğraflar için dosyaları daha küçük parçalar halinde işlemek sekme çökmelerini engeller.'
    },
    {
      q: 'Lade Stack araçlarını kullanmak için hesap açmam gerekir mi?',
      a: 'Hayır. Lade Stack genelindeki tüm temel geliştirici ve medya araçları hesap oluşturmadan, e-posta doğrulamadan veya fatura bilgisi vermeden anında kullanılabilir. Yararlı yazılımların hiçbir engel olmadan herkes için erişilebilir olması gerektiğine inanıyoruz. Uygulama Galerisinden istediğiniz araca tıklayıp hemen çalışmaya başlayabilirsiniz.'
    },
    {
      q: 'Oturum verilerim nasıl saklanır ve site verilerini silersem ne olur?',
      a: 'Tüm oturum durumları, geçici taslaklar ve özel araç tercihleri standart tarayıcı LocalStorage ve IndexedDB API’leri aracılığıyla yalnızca kendi cihazınızda saklanır. Tarayıcı önbelleğini veya site verilerini temizlerseniz bu yerel tercihler sıfırlanır. Veri kaybını önlemek için işiniz bittiğinde işlenmiş dosyalarınızı, yapılandırmalarınızı ve kodlarınızı derhal yerel bilgisayarınıza indirin.'
    },
    {
      q: 'Ekipler, girişimler ve öğrenciler Lade Stack araçlarını ücretsiz kullanabilir mi?',
      a: 'Evet. Lade Stack araçları ticari, profesyonel, bireysel ve eğitim amaçlı kullanımlar için tamamen ücretsizdir. Ücretsiz temel kataloğumuzda koltuk sınırı, gizli ödeme duvarı veya kısıtlayıcı takım lisansı bulunmaz. Mühendislik ekipleri yardımcı programlarımızı günlük iş akışlarına lisans kaygısı gütmeden dahil edebilir.'
    },
    {
      q: 'Destek ekibinin yanıt süresi nedir ve kurucuya veya ekibe nasıl ulaşırım?',
      a: 'Tüm teknik destek taleplerine, hata bildirimlerine ve iş birliği tekliflerine 24 saat içinde yanıt veriyoruz. İletişim sayfamızdaki (/contact) formu kullanarak veya admin@ladestack.in adresine e-posta atarak doğrudan mesaj gönderebilirsiniz. Ayrıntılı ortam bilgisi ve tekrarlanabilir adımlar sağlamanız en kısa sürede somut bir çözüm sunmamıza yardımcı olur.'
    }
  ],
  contactFaqs: [
    {
      q: 'Lade Stack nedir?',
      a: 'Lade Stack, Hindistan’da kurulan bağımsız bir yazılım ve teknoloji platformudur. Pratik geliştirici araçları, yapay zekâ destekli yazılımlar, SaaS ürünleri ve modern web uygulamaları geliştirmeye odaklanır. Platformun amacı, özenli UI/UX tasarımı, temiz mühendislik ve hedefli otomasyon yoluyla teknik iş akışlarındaki sürtünmeyi ortadan kaldırmaktır.'
    },
    {
      q: 'Lade Stack’in arkasında kim var?',
      a: 'Lade Stack, Kurucu ve Baş Yazılım Mimarı olarak görev yapan Girish Lade tarafından kurulmuş ve tasarlanmıştır. UI/UX tasarımı, ön uç ve arka uç mühendisliği, bulut mimarisi ve Üretken Yapay Zekâ alanlarındaki disiplinler arası birikimiyle Girish, ürün yönünü belirler ve gerçek mühendislik sorunlarını çözen araçlar inşa eder.'
    },
    {
      q: 'Lade Stack’i diğer yazılım platformlarından farklı kılan nedir?',
      a: 'Lade Stack, geçici popüler trendlerin peşinden koşmak veya hantal kurumsal yazılım paketleri oluşturmak yerine kurucu liderliğinde tasarım ile güçlü mühendisliği bir araya getirir. Araçlar; gereksiz hesap açma zorunlulukları, karmaşık ayarlar veya agresif satış baskısı olmadan hızlı, erişilebilir ve anında fayda sağlayacak biçimde tasarlanmıştır.'
    },
    {
      q: 'Lade Stack ne tür ürünler geliştiriyor?',
      a: 'Lade Stack odaklanmış geliştirici yardımcı programları, akıllı kod geliştirme araçları, istemci tarafında çalışan üretkenlik uygulamaları ve modern web yazılımları üretir. Ekosistemde CodeEnhance AI (tarayıcı içi kod düzenleme ve geliştirme), LS PDF Tools ve LS Image Studio (gizlilik odaklı yerel medya araçları), Swift Resume ve API Testing Platform gibi geliştirici araçları yer alır.'
    },
    {
      q: 'Lade Stack yalnızca yazılım geliştiricilere özel mi inşa edildi?',
      a: 'CodeEnhance AI, API Testing Platform ve teknik dokümantasyon gibi temel araçlarımız geliştirici öncelikli tasarlanmış olup geliştirme döngülerini hızlandırır ve tekrarlayan işleri azaltır. Bununla birlikte LS PDF Tools, LS Image Studio ve Swift Resume gibi üretkenlik araçları; öğrenciler, içerik üreticileri ve farklı sektörlerdeki profesyoneller için de son derece sezgisel ve kullanışlıdır.'
    },
    {
      q: 'Lade Stack Üretken Yapay Zekâ’yı nasıl kullanıyor?',
      a: 'Üretken Yapay Zekâ, makine zekâsının kod yapısı analizi, bağlamsal iyileştirme önerileri ve dokümantasyon özetleme gibi somut zaman kazandırdığı yerlerde pragmatik olarak entegre edilmiştir. Yapay zekâyı sadece bir pazarlama unsuru olarak kullanmaktan kaçınır, insan denetiminde gerçek katma değer sunan işlevlere odaklanırız.'
    },
    {
      q: 'Lade Stack ürünleri tarayıcı tabanlı mı çalışır?',
      a: 'Evet. Lade Stack uygulamalarının büyük bölümü doğrudan modern web tarayıcılarında çalışır, ağır yerel kurulumlar veya çalışma zamanı bağımlılıkları olmadan anında erişim sunar. Dosya ve görsel işleme dahil birçok araç, maksimum hız ve tam gizlilik için işlemleri bütünüyle cihazınızda yerel olarak gerçekleştirir.'
    },
    {
      q: 'Lade Stack gerçekten tamamen ücretsiz mi?',
      a: 'Evet. Lade Stack bünyesindeki temel geliştirici ve üretkenlik araçları; ödeme duvarları, gizli deneme süreleri veya kredi kartı zorunluluğu olmaksızın ücretsizdir. Amacımız, yüksek fayda sağlayan yazılımları dünyanın dört bir yanındaki geliştiriciler, öğrenciler ve üreticiler için erişilebilir kılmaktır.'
    },
    {
      q: 'Lade Stack ürünlerinin tamamı açık kaynaklı mı?',
      a: 'Lade Stack açık ve topluluk odaklı bir felsefeyi benimser; seçili araçlar, kütüphaneler ve rehberler GitHub üzerinde açık olarak paylaşılır. Ancak "ücretsiz kullanım", arka plandaki her servisin açık kaynaklı olduğu anlamına gelmez. Açık kaynaklı projelerimizi doğrudan Girish Lade’in GitHub profilinden inceleyebilirsiniz.'
    },
    {
      q: 'Lade Stack kullanıcı verilerini ve gizliliği nasıl ele alır?',
      a: 'Gizlilik, mimari bir öncelik olarak kabul edilir. LS PDF Tools ve LS Image Studio gibi temel araçlar tüm işlemleri tarayıcınızda yerel olarak yürütür; dosyalarınız asla cihazınızdan dışarı çıkmaz. Çevrim içi servislerle etkileşime giren araçlarda ise veri işleme yalnızca o anki isteği yerine getirmekle sınırlıdır. Detaylar için ilgili ürün dokümantasyonunu inceleyebilirsiniz.'
    },
    {
      q: 'Bir sorunla karşılaşırsam nasıl destek alabilirim?',
      a: 'Bu sayfadaki iletişim formunu doldurarak veya admin@ladestack.in adresine e-posta göndererek doğrudan iletişime geçebilirsiniz. Tüm mesajlar bizzat Girish Lade tarafından incelenir. Resmi bir kurumsal SLA sunmasak da sorunları titizlikle araştırır ve yapıcı sorulara mümkün olan en kısa sürede yanıt veririz.'
    },
    {
      q: 'Yeni bir özellik veya araç fikri önerebilir miyim?',
      a: 'Evet, topluluk geri bildirimlerini içtenlikle teşvik ediyoruz. Fikirlerinizi iletişim formu üzerinden veya GitHub’da bir issue açarak iletebilirsiniz. Özellik talepleri; genel fayda, teknik uygulanabilirlik ve platform yol haritasıyla uyum kriterlerine göre değerlendirilir.'
    },
    {
      q: 'Bir hata (bug) buldum, nasıl bildirmeliyim?',
      a: 'Bir hata fark ederseniz lütfen iletişim formundan veya admin@ladestack.in adresinden bize iletin. Araç adını, tarayıcı ve işletim sistemi sürümünü, adımları ve varsa hata mesajlarını ya da ekran görüntülerini paylaşmanız, sorunu hızla tespit edip düzeltmemize yardımcı olur.'
    },
    {
      q: 'Dokümantasyon ve kullanım rehberlerine nereden ulaşabilirim?',
      a: 'Ayrıntılı rehberler, mimari incelemeler ve kurulum adımları Dokümanlar bölümümüzde (/docs) ve Lade Stack Blog’da yer almaktadır. İçerikler her yeni sürüm ve güncellemeyle birlikte düzenli olarak genişletilmektedir.'
    },
    {
      q: 'Lade Stack kurumsal çözümler veya ekip planları sunuyor mu?',
      a: 'Lade Stack şu anda kurucu liderliğinde yürütülen bağımsız bir platformdur; karmaşık kurumsal sözleşmeler veya sertifikalı kurumsal paketler yerine hafif ve yüksek performanslı web araçlarına odaklanmıştır. Ancak ekibinizin veya girişiminizin özel iş akışı ihtiyaçları veya entegrasyon soruları varsa konuşmak için bizimle iletişime geçebilirsiniz.'
    },
    {
      q: 'Lade Stack ne inşa edeceğine nasıl karar verir?',
      a: 'Ürün kararları; geliştiricilerin karşılaştığı gerçek darboğazlar, kullanıcı geri bildirimleri ve modern web teknolojileri ile Üretken Yapay Zekâ’nın sürtünmeyi somut şekilde azaltabileceği fırsatlar doğrultusunda alınır. Her araç şu temel soruyla başlar: Bu araç gerçekten zaman kazandırıyor ve önemli bir iş akışını kolaylaştırıyor mu?'
    },
    {
      q: 'Lade Stack ile iş birliği yapabilir veya katkıda bulunabilir miyim?',
      a: 'İş birliği fırsatları, teknik geri bildirimler ve düşünceli proje tartışmaları her zaman memnuniyetle karşılanır. Açık kaynaklı depolara katkıda bulunmak isteyen bir mühendis veya entegrasyonları konuşmak isteyen bir geliştiriciyseniz admin@ladestack.in üzerinden veya LinkedIn ve GitHub aracılığıyla bize ulaşabilirsiniz.'
    }
  ],
  docsGroups: [
    {
      id: 'getting-started',
      title: 'Başlangıç',
      articles: [
        {
          title: 'Lade Stack nedir?',
          text: 'Lade Stack, Girish Lade (Kurucu ve Baş Yazılım Mimarı) tarafından hayata geçirilen bağımsız bir geliştirici araçları ekosistemi ve teknik bilgi platformudur. Temiz kodlama, yüksek çalışma zamanı performansı ve pratik otomasyon odağında inşa edilen Lade Stack; odaklanmış web araçları, Üretken Yapay Zekâ destekli geliştirici yardımcıları ve gizlilik öncelikli belge işleme araçları sunar. Tüm araçlar modern tarayıcılarda hesap açma zorunluluğu veya gizli abonelikler olmadan doğrudan çalışır.'
        },
        {
          title: 'Ekosistemin mimarisini anlama',
          text: 'Lade Stack ekosistemi, geliştiricilerin tüm üretim döngüsünü destekleyen 5 temel alandan oluşur: Ana Sayfa platformun teknik vizyonunu belirler; Uygulama Galerisi (/apps) kullanıma hazır araçlara anında erişim sağlar; Mühendislik Blogu (/blog) derinlemesine mimari rehberler sunar; Dokümantasyon (/docs) güvenilir teknik referans merkezi olarak hizmet verir; Destek Merkezi (/support) ise doğrudan mühendislik yardımı ve kapsamlı SSS sunar.'
        },
        {
          title: 'Hızlı başlangıç: ilk uygulamanı aç',
          text: 'Lade Stack ile çalışmaya başlamak otuz saniyeden az sürer. Uygulama Galerisi\'ne gidin, CodeEnhance AI veya LS PDF Tools gibi bir araç seçin ve anında çalışmaya başlayın. Çekirdek yardımcı programlar, web standartları kullanılarak tarayıcı korumalı alanında (sandbox) istemci tarafında çalışır; kurulum, ortam yapılandırması veya kredi kartı kaydı gerektirmez.'
        },
        {
          title: 'Çalışma alanı ve uygulamalar arasında gezinme',
          text: 'Uygulama Galerisi, araçları işlevsel alanlara göre düzenler: Yapay Zekâ Araçları (CodeEnhance AI, görsel API test ediciler ve doküman zekâsı araçları), Üretkenlik Araçları (LS PDF Tools, LS Image Studio, Swift Resume) ve Genel Yardımcılar (Bharat Land Records vb.). Her uygulama kartı anlık değer üretme süresini, desteklenen entegrasyonları ve doğrudan çalıştırma bağlantılarını net bir şekilde listeler.'
        },
        {
          title: 'Ürünler ve araçların detayları',
          text: 'Lade Stack, belirli yazılım iş akışlarına özel web uygulamaları sunar: CodeEnhance AI (code.ladestack.in) AST tabanlı gerçek zamanlı HTML/CSS/JS düzenleme ve akıllı kod iyileştirme sağlar; LS PDF Tools (pdf.ladestack.in) dosyaları sunucuya yüklemeden tarayıcıda PDF birleştirme, bölme ve sıkıştırma yapar; LS Image Studio (img.ladestack.in) WebP ve AVIF gibi modern formatlara toplu dönüştürme ve kayıpsız sıkıştırma sunar; Swift Resume (resume.ladestack.in) ise ATS uyumlu mühendislik özgeçmişleri hazırlar.'
        },
        {
          title: 'Temel geliştirici iş akışı',
          text: 'Önerilen geliştirici iş akışı 4 aşamadan oluşur: 1. Giriş (Input): Taslak kodları, belgeleri veya ayar parametrelerini doğrudan tarayıcıya yapıştırın veya yükleyin. 2. İşleme (Process): Gerçek zamanlı istemci derlemesini veya yapay zekâ destekli iyileştirme motorunu çalıştırın. 3. Önizleme (Preview): İzolasyonlu DOM çerçevesinde veya canlı görünüm alanında sonucu anında doğrulayın. 4. Dışa Aktarma (Export): Temiz kodu kopyalayın veya standart dosyaları doğrudan yerel projenize indirin.'
        },
        {
          title: 'İlk projeni başarıyla tamamlama',
          text: 'Lade Stack ile ilk hızlı kazanımınızı elde etmek için: CodeEnhance AI\'ı açın, stillendirilmemiş bir HTML düğme veya menü parçacığı yapıştırın, \'İyileştir (Enhance)\' butonuna basarak erişilebilir (ARIA) ve duyarlı CSS flexbox kodunu üretin. Canlı sanal alanda etkileşimi test edin ve \'Kopyala\' butonuna tıklayarak üretime hazır kodu projenize yapıştırın.'
        },
        {
          title: 'Sonraki adımlar ve topluluk geri bildirimi',
          text: 'İlk aracınızı deneyimledikten sonra, blogumuzdaki (/blog) üretken yapay zekâ entegrasyonu, saf Astro mimarisi ve ön yüz performans optimizasyonu hakkındaki derinlemesine mühendislik makalelerimizi keşfedin. Özel özellik istekleri, hata bildirimleri veya teknik görüşmeler için admin@ladestack.in veya GitHub üzerinden doğrudan Girish Lade ile iletişime geçebilirsiniz.'
        }
      ]
    },
    {
      id: 'api-reference',
      title: 'API Referansı',
      articles: [
        {
          title: 'API genel bakış ve mimari standartlar',
          text: 'Lade Stack API\'leri ve mikro servisleri, standart HTTP/REST desenleri ve durumsuz (stateless) yürütme modelleri etrafında inşa edilmiştir. Uç noktalar öngörülebilir web kurallarını takip eder: UTF-8 JSON veri yükleri, anlamsal HTTP istek yöntemleri (GET, POST), standart hata şablonları ve katı başlık gereksinimleri (Content-Type: application/json). Servislerimiz hafif veri transferine ve minimum gecikmeye öncelik verir.'
        },
        {
          title: 'Genel erişim modeli ve kimlik doğrulama',
          text: 'Lade Stack\'in sonsuza kadar ücretsiz geliştirici sözü doğrultusunda, çekirdek etkileşimli web araçları ve kod inceleme servisleri sürtünmesiz genel erişimle çalışır. Standart tarayıcı içi iş akışları için tescilli API anahtarları, Bearer belirteçleri veya oturum kimlik bilgileri gerekmez. İstekler, kaynak kontrolü ve adil kullanım oran sınırlandırması ile ağ sınırında korunur.'
        },
        {
          title: 'İstek ve yanıt formatı standartları',
          text: 'Makineler arası okunabilir tüm arabirimler UTF-8 kodlu JSON ile haberleşir. Başarılı çağrılar 200 OK durum kodu ve yapılandırılmış veri alanları döner. Bir istisna oluştuğunda ise yanıtlar standart HTTP hata kodları (400 Bad Request, 429 Too Many Requests veya 500 Internal Error) ile birlikte hata kodu, açıklayıcı mesaj ve çözüm ipuçları içeren yapılandırılmış bir JSON nesnesi iletilir.'
        },
        {
          title: 'CodeEnhance AI istek işleme akışı',
          text: 'CodeEnhance AI\'da kod iyileştirme veya açıklama tetiklendiğinde işleyiş deterministiktir: 1. İstemci girdi kodunu ve etkin dil modunu (HTML, CSS, JS) yakalar. 2. Ön yüzde temel sözdizimi doğrulaması ve uzunluk kontrolü yapılır. 3. İstek TLS şifrelemesi üzerinden işleme motoruna iletilir. 4. Sistem AST sözdizim ağacını ayrıştırır, yeniden yapılandırma ve erişilebilirlik düzeltmelerini uygular. 5. İyileştirilmiş kod sözdizimi vurgulu canlı diff ile editöre yansıtılır.'
        },
        {
          title: 'Girdi gereksinimleri ve çıktı kalite standartları',
          text: 'CodeEnhance AI standartlara uygun HTML5 biçimlendirmesini, modern CSS3\'ü (özel özellikler, Flexbox ve Grid kuralları dahil) ve ES6+ JavaScript\'i eksiksiz destekler. Sorunsuz işlem için girdiler ikili veri içermeyen düz metin olmalıdır. Üretilen çıktı, tescilli kütüphane bağımlılıkları eklemeden okunabilirlik, erişilebilirlik ve çalışma zamanı performansına odaklanmış anlamsal standart kod sağlar.'
        },
        {
          title: 'Hata durum kodları ve arıza teşhisi',
          text: 'Servis yanıtları anlamsal HTTP durum kodlarına uyar: 400 bozuk JSON veya ayrıştırılamayan kod parçacığını; 413 tek istek için boyut sınırının aşıldığını; 429 kısa sürede ani istek eşiğinin aşıldığını; 504 ise işlem zaman aşımını gösterir. Hata oluştuğunda arayüz karmaşık hata yığınları yerine net açıklamalar ve uygulanabilir çözüm yolları görüntüler.'
        },
        {
          title: 'Hız sınırları ve adil kullanım (Fair-use) ilkeleri',
          text: 'Dünya genelindeki tüm geliştiricilere bir saniyenin altında yanıt süresini kesintisiz sunabilmek amacıyla Lade Stack, dakika bazlı kayan pencere adil kullanım hız koruması uygular. İstemci kaynağına dinamik olarak ayrılan kotalar, kötü niyetli otomatik botları ve hizmet aksatma girişimlerini engellerken gerçek geliştirme ve test işleri için geniş bir bant genişliği sağlar.'
        },
        {
          title: 'API bağlantı sorunlarını giderme',
          text: 'Bir API isteği veya kod iyileştirmesi başarısız olursa: 1. Ağ bağlantınızı kontrol edin ve güvenlik duvarınızın ladestack.in etki alanlarına giden HTTPS trafiğine izin verdiğinden emin olun. 2. Tarayıcı eklentilerinin veya reklam engelleyicilerin Fetch isteklerini engellemediğini doğrulayın. 3. Kodunuzun karakter sınırını aşmadığını kontrol edin. 4. 429 durum kodu alırsanız tekrar denemeden önce 60 saniye bekleyin.'
        }
      ]
    },
    {
      id: 'integrations',
      title: 'Entegrasyonlar',
      articles: [
        {
          title: 'GitHub ve sürüm kontrol iş akışına aktarma',
          text: 'Lade Stack araçları Git sürüm kontrolü iş akışlarıyla kusursuz entegre olur. CodeEnhance AI veya diğer araçlarımızda üretilen kodlar yerel Git deponuza doğrudan kopyalanabilir veya indirilebilir. Dosyaları özellik dalınıza doğrudan ekleyip (git add . && git commit -m "feat: add enhanced component") eksiksiz bir sürüm geçmişi oluşturun.'
        },
        {
          title: 'Bağımlılıksız temiz kaynak kod dışa aktarımı',
          text: 'Kullanıcıları özel çalışma zamanı kütüphanelerine hapseden platformların aksine Lade Stack, \'sıfır satıcı kilidi (zero-lock-in)\' politikasını titizlikle uygular. Dışa aktarılan tüm kodlar standart HTML5, modern CSS ve modüler TypeScript/JavaScript\'ten oluşur. Kodları Astro, Next.js, Vite gibi herhangi bir modern çatıya derleme ayarı değiştirmeden doğrudan entegre edebilirsiniz.'
        },
        {
          title: 'Vercel ile önizleme ve canlı dağıtım',
          text: 'Lade Stack ile hazırlanan projeleri Vercel\'e dağıtmak çok kolaydır: 1. Dışa aktarılan kodları bir GitHub deposuna gönderin. 2. Vercel panelinde depoyu bağlayın. 3. Vercel çatı türünü (Astro veya Vite gibi) otomatik algılar, derleme komutunu (npm run build) ve çıktı dizinini (dist) yapılandırır. 4. Dağıt\'a tıkladığınızda saniyeler içinde küresel uç CDN ile çalışan önizleme ve üretim URL\'niz hazır olur.'
        },
        {
          title: 'Ön yüz IDE geliştirme ortamına bağlanma',
          text: 'Dışa aktarılan kod parçacıkları ve şablonlar mevcut geliştirme ortamınıza anında uyum sağlar. Klasörü VS Code, Cursor veya WebStorm\'da açın, Prettier gibi biçimlendiricileri çalıştırın ve yerel geliştirme sunucunuzu (npm run dev) başlatın. Standartlara tam uyumlu kod yapısı sayesinde IDE\'nin otomatik kod tamamlama, tip denetimi ve linting özellikleri sıfır ayarla çalışır.'
        },
        {
          title: 'Entegrasyon sorunlarını giderme',
          text: 'Dışa aktarılan kodu projenize taşırken sorun yaşarsanız: 1. Görseller ve yazı tipleri gibi statik varlıkların göreli yollarının çatınızın public diziniyle uyumlu olduğunu doğrulayın. 2. Üretilen CSS özel değişkenlerinin projenin genel stilleriyle çakışmadığından emin olun. 3. Hedef tarayıcı desteğinizin üretilen modern CSS kurallarıyla uyumunu kontrol edin.'
        }
      ]
    },
    {
      id: 'tutorials',
      title: 'Eğitimler',
      articles: [
        {
          title: '5 dakikada duyarlı ve yüksek performanslı açılış sayfası kurma',
          text: 'Beş adımda eksiksiz ve modern bir açılış sayfası oluşturun: 1. Adım: CodeEnhance AI\'ı açın ve anlamsal sayfa iskeletini (kahraman bölümü, özellik ızgarası, eylem çağrısı) yazın. 2. Adım: \'İyileştir\'e tıklayarak estetik ve duyarlı CSS flexbox düzenini oluşturun. 3. Adım: LS Image Studio\'yu (img.ladestack.in) açarak sayfa görsellerini WebP formatına toplu sıkıştırın. 4. Adım: Optimize edilmiş görsel yollarını HTML içine ekleyin. 5. Adım: Son kaynak kodunu kopyalayıp barındırma platformunuza dağıtın.'
        },
        {
          title: 'CodeEnhance AI ile eski ön yüz kodlarını modernize etme',
          text: 'Eski ve bakımı zor kodları modern standartlara yükseltin: 1. Adım: Mevcut projenizden float tabanlı eski bir HTML/CSS kodunu kopyalayın. 2. Adım: CodeEnhance AI düzenleyicisine yapıştırıp ilgili dil sekmesini seçin. 3. Adım: İyileştirme motorunu çalıştırarak Flexbox düzenine geçiş, CSS değişkenleri ve ARIA etiketleri gibi önerileri inceleyin. 4. Adım: Canlı sanal alanda görsel bütünlüğü test edin. 5. Adım: Temizlenmiş kodu asıl projenize geri aktarın.'
        },
        {
          title: 'LS PDF Tools ile tamamen gizli yerel PDF işleme',
          text: 'Veri sızıntısı riski olmadan güvenli PDF iş akışı: 1. Adım: LS PDF Tools\'a (pdf.ladestack.in) gidin. 2. Adım: Birden çok PDF\'i birleştirme, sayfa ayıklama veya dosya sıkıştırma seçeneklerinden birini belirleyin. 3. Adım: PDF dosyalarınızı tarayıcı penceresine sürükleyip bırakın. 4. Adım: Sayfa sırasını veya sıkıştırma kalitesini ayarlayın. 5. Adım: İşle\'ye tıklayın; WebAssembly işlemi tarayıcı belleğinde anında bitirir. 6. Adım: Dosyanızı indirin. Belgeleriniz asla bilgisayarınızdan dışarı çıkmaz.'
        },
        {
          title: 'LS Image Studio ile web görsellerini toplu optimize etme',
          text: 'Web sitesi yükleme hızını zirveye taşımak için görsel hafifletme: 1. Adım: LS Image Studio\'yu (img.ladestack.in) açın. 2. Adım: PNG, JPEG veya WebP görsellerinizi toplu yükleme alanına bırakın. 3. Adım: Hedef formatı (modern web için WebP veya AVIF önerilir) ve sıkıştırma kalitesini seçin. 4. Adım: \'Hepsini Sıkıştır\'a tıklayarak tarayıcı içi Canvas ve WebAssembly motorlarıyla paralel işleme yapın. 5. Adım: Yüksek çözünürlüklü ve boyutu küçültülmüş görsel paketini indirin.'
        },
        {
          title: 'Swift Resume ile ATS uyumlu yazılımcı özgeçmişi hazırlama',
          text: 'İşe alım sistemlerinin otomatik taramalarını firesiz geçen profesyonel özgeçmiş hazırlama: 1. Adım: Swift Resume\'u (resume.ladestack.in) açın. 2. Adım: İletişim bilgileri, teknik yetenekler, mühendislik deneyimleri ve eğitim kısımlarını doldurun. 3. Adım: ATS uyumluluğu doğrulanmış tipografi ve düzen şablonunu seçin. 4. Adım: Gerçek zamanlı önizleme ile sayfa dengesini ayarlayın. 5. Adım: İşe alım yöneticilerine sunulmaya hazır yüksek kaliteli vektör PDF\'i dışa aktarın.'
        },
        {
          title: 'Web prototipinden Git deposuna ve canlı yayına tam yolculuk',
          text: 'Fikirlerinizi çalışan gerçek bir web hizmetine dönüştürme: 1. Adım: Lade Stack araçlarında bileşenlerinizi ve varlıklarınızı tamamlayın. 2. Adım: Üretilen dosyaları yerel bir klasöre indirin. 3. Adım: Yerel bir Git deposu başlatın (git init && git add . && git commit -m "Initial commit"). 4. Adım: GitHub\'da yeni bir depo açıp kodlarınızı gönderin. 5. Adım: Depoyu Vercel veya Cloudflare Pages\'e bağlayarak sürekli yayına geçişi tamamlayın.'
        }
      ]
    },
    {
      id: 'security',
      title: 'Güvenlik',
      articles: [
        {
          title: 'Tasarımda gizlilik: tarayıcı içi yerel hesaplama mimarisi',
          text: 'Lade Stack\'in en belirgin mimari farkı \'Tasarımda Gizlilik\' prensibidir. LS PDF Tools ve LS Image Studio gibi temel araçlar; modern WebAssembly, HTML5 File API ve Canvas teknolojilerini kullanarak tüm işlemleri doğrudan tarayıcınızın belleğinde tamamlar. Gizli sözleşmeleriniz, belgeleriniz ve özel fotoğraflarınız asla harici sunuculara yüklenmez veya aktarılmaz.'
        },
        {
          title: 'Veri iletimi ve sıfır-saklama (Zero-retention) politikası',
          text: 'CodeEnhance AI gibi bulut destekli çalışan araçlarda veri aktarımı tamamen TLS 1.3 şifrelemesiyle korunur. Lade Stack katı bir sıfır-saklama ilkesi uygular: analize gönderilen kodlar yalnızca sunucu belleğinde işlenir ve anında yanıt olarak geri gönderilir. Kullanıcı kodlarından oluşan veri tabanları tutulmaz ve üçüncü taraf izleyiciler çalıştırılmaz.'
        },
        {
          title: 'Yapay zekâ girdi gizliliği ve kod güvenliği',
          text: 'Geliştiricilerin fikri mülkiyetine saygı duyuyoruz. Lade Stack\'in yapay zekâ destekli araçlarına gönderilen kod parçacıkları ve istemler, hiçbir makine öğrenimi modelinin temel eğitimi, ince ayarı veya algoritma güçlendirmesi için kullanılmaz. Tüm etkileşimler geçicidir (ephemeral) ve yanıt üretildikten hemen sonra bellekten silinir.'
        },
        {
          title: 'İstemci kod yürütme güvenliği ve DOM izolasyonu',
          text: 'CodeEnhance AI içerisindeki dinamik önizleme, sıkı kısıtlamalara sahip korumalı bir iframe sanal alanında (sandbox) çalışır. Bu yapı, çalıştırılan komut dosyalarının ana pencerenin çerezlerine, yerel depolamasına, oturum belirteçlerine veya üst gezintisine erişmesini engeller. Tüm kullanıcı girdileri Siteler Arası Betik Çalıştırma (XSS) risklerine karşı sıkı DOM temizliğinden geçer.'
        },
        {
          title: 'Geliştirici güvenlik hijyeni ve operasyonel öneriler',
          text: 'Lade Stack çok katmanlı savunma önlemleri alsa da geliştiricilerin de temel güvenlik kurallarına uyması gerekir: hiçbir web aracına canlı veritabanı şifrelerini veya maskelenmemiş özel API anahtarlarını yapıştırmayın. Tarayıcı eklentilerinizi düzenli olarak gözden geçirin, işletim sisteminizi ve tarayıcınızı güncel tutun.'
        },
        {
          title: 'Güvenlik açığı bildirme ve hızlı müdahale süreci',
          text: 'Platformumuzun ve kullanıcılarımızın güvenliğini ciddiye alıyoruz. Lade Stack araçlarında olası bir güvenlik açığı, bellek sızıntısı veya veri sızıntısı tespit ederseniz lütfen doğrudan kurucumuz Girish Lade\'ye admin@ladestack.in adresinden bildirin. Ayrıntılı adımları ilettiğinizde bildirimi hızla inceleyecek ve gereken yamaları uygulayacağız.'
        }
      ]
    },
    {
      id: 'teams',
      title: 'Ekipler',
      articles: [
        {
          title: 'Durumsuz paylaşım bağlantılarıyla zahmetsiz iş birliği',
          text: 'Lade Stack, durumsuz (stateless) URL parametre kodlama yöntemiyle ekip üyeleri arasında hafif ve kesintisiz bir iş birliği sağlar. Yapılandırma ayarları ve şablon seçimleri doğrudan paylaşılabilir bağlantı içine serileştirilir. Bir iş arkadaşınız bağlantıyı açtığında, ortak bir veritabanı veya ekip hesabı gerekmeksizin aynı çalışma durumu tarayıcısında anında yüklenir.'
        },
        {
          title: 'Taşınabilir JSON proje verisi aktarımı ve şablon paylaşımı',
          text: 'Karmaşık ayarlar ve çoklu bileşen yapılandırmaları için Lade Stack araçları standart JSON içe/dışa aktarma imkânı sunar. Çalışmanızı hafif bir .json dosyası olarak kaydedip ekibinizin Git deposuna ekleyebilir veya şirket içi kanallardan paylaşabilirsiniz. Ekip arkadaşlarınız bu dosyayı yükleyerek sıfır hata ile aynı durumdan çalışmaya devam edebilir.'
        },
        {
          title: 'Git odaklı kod inceleme ve entegrasyon kültürü',
          text: 'İzole edilmiş çevrim içi ortak çalışma alanları yerine, sürüm kontrolüyle entegre eş zamansız kod incelemelerini savunuyoruz. Lade Stack ile oluşturulan kodlar ekibinizin Pull Request süreçlerine dahil edilmeli; otomatik CI/CD hatlarından, birim testlerden ve meslektaş incelemelerinden geçmelidir. Bu yaklaşım yazılım yaşam döngüsünde kod kalitesini ve sürdürülebilirliği güvenceye alır.'
        },
        {
          title: 'Ön yüz kod tutarlılığı ve ekip standartları oluşturma',
          text: 'Lade Stack araçlarının ürettiği kodlar modern ön yüz standartlarına tam uyar: semantik HTML5 etiketleri, modüler CSS adlandırma kuralları, ARIA erişilebilirlik nitelikleri ve katı TypeScript tip tanımları içerir. Ekipler bu çıktıları mimari temel olarak benimseyerek PR incelemelerindeki gereksiz kod stili tartışmalarını ortadan kaldırabilir.'
        }
      ]
    },
    {
      id: 'data',
      title: 'Veri Yönetimi',
      articles: [
        {
          title: 'İşini dışa aktarma ve %100 veri sahipliği güvencesi',
          text: 'Lade Stack\'te, araçları kullanarak ürettiğiniz her şeyin mülkiyeti tamamen ve koşulsuz olarak size aittir. Tüm araçlar anında dışa aktarma seçenekleri sunar: tek tıkla panoya kopyalama, doğrudan kaynak kod indirme ve Markdown çıktısı alma. Ürünlerimiz üzerinde hiçbir lisans kısıtlaması, filigran veya platforma bağımlılık kuralı bulunmaz.'
        },
        {
          title: 'LocalStorage ile yerel cihazda veri kalıcılığı',
          text: 'Kullanıcı gizliliğini ihlal etmeden tercihlerinizi hatırlayabilmek için Lade Stack, tarayıcınızın yerel depolama (localStorage) özelliğinden yararlanır. Açık/koyu tema tercihi, dil seçimi ve editördeki geçici taslaklar yerel cihazınızda tutulur. Bu veriler harici telemetri sunucularına asla gönderilmez.'
        },
        {
          title: 'Veri yaşam döngüsü ve anında bellek temizliği',
          text: 'Lade Stack araçları minimum bellek kullanımı için tasarlanmıştır. İstemci tarafı medya işlemleri tamamlandığında, sistem derhal URL.revokeObjectURL çağrısı yaparak nesne URL\'lerini serbest bırakır ve bellek tamponunu boşaltır. Tarayıcı sekmesini kapatmak veya site verilerini temizlemek tüm geçici taslakları ve yerel kalıntıları tamamen siler.'
        },
        {
          title: 'Geliştirme ortamları arasında kodları kolayca taşıma',
          text: 'Lade Stack\'ten aldığınız kodları üretim hattınıza taşımak çok pratiktir: ham HTML, CSS veya JS dosyalarını indirin, yerel proje klasörünüze (örneğin Next.js components/, Astro src/components/ veya standart web sunucusu dizini) yerleştirin ve standart göreli içe aktarmalarla doğrudan kullanın.'
        },
        {
          title: 'Statik varlık yönetimi ve web medya optimizasyonu',
          text: 'Modern web geliştirmede statik varlıkların düzenli yönetimi kritik önem taşır. Dışa aktarılan medyaları mantıksal klasörlere (/public/images, /src/styles) ayırmanızı, LS Image Studio ile ağır PNG/JPEG dosyalarını WebP veya AVIF\'e topluca dönüştürmenizi ve kritik küçük simgeleri SVG olarak satır içi kullanmanızı öneririz.'
        }
      ]
    },
    {
      id: 'deployment',
      title: 'Dağıtım',
      articles: [
        {
          title: 'Statik-öncelikli (Static-first) dağıtım mimarisi',
          text: 'Lade Stack, statik-öncelikli web mimarisini kararlılıkla savunur. Sayfaların önceden saf HTML, modern CSS ve minimum JavaScript olarak derlenmesi, sunucu çalışma zamanı açıklarını ortadan kaldırır, barındırma maliyetlerini sıfıra indirir ve küresel uç CDN ile anlık önbellekleme sağlar. Bu dokümantasyon portalı ve ana web sitemiz de Astro 5 tabanlı saf statik mimariyle çalışmaktadır.'
        },
        {
          title: 'Üretime çıkış öncesi teknik kontrol listesi',
          text: 'Web projenizi gerçek kullanıcılara açmadan önce bu listeyi tamamlayın: 1. HTML semantiğini doğrulayın ve tüm <img> etiketlerinde alt, width, height özelliklerinin bulunduğunu onaylayın. 2. Renk kontrastlarının WCAG AA erişilebilirlik standartlarını karşıladığını kontrol edin. 3. Gereksiz çatı kodlarının yüklenmediğini görmek için paket boyutlarını denetleyin. 4. Lighthouse testleri çalıştırarak 100/100 tam puanı doğrulayın.'
        },
        {
          title: 'Vercel, Cloudflare Pages ve Netlify ile tek tıkla dağıtım',
          text: 'Modern araçlarla derlenen statik siteler lider bulut platformlarına zahmetsizce dağıtılır. Vercel\'de Git deponuzu bağlamanız yeterlidir; Cloudflare Pages\'da derleme komutunu (npm run build) ve çıktı klasörünü (dist) belirtmeniz kafidir. Netlify da dist klasörünü sürükleyip bırakmayı destekler ve tüm bu servisler ücretsiz otomatik SSL sertifikası sağlar.'
        },
        {
          title: 'Ortam değişkenleri yapılandırması ve derleme optimizasyonu',
          text: 'Üretim uygulamaları hazırlarken yapılandırmayı .env dosyaları ile iş mantığından ayırın. Statik derleme senaryolarında, genel değişkenlerin çatı kurallarına (Astro\'daki PUBLIC_ ön eki gibi) uygun adlandırıldığından emin olun. Üretim bayraklarını yapılandırarak HTML küçültmeyi, CSS birleştirmeyi ve otomatik XML site haritası (sitemap) üretimini etkinleştirin.'
        },
        {
          title: 'Core Web Vitals performans hedeflerine ulaşma',
          text: 'En üst seviye Core Web Vitals puanlarına ulaşmak bilinçli bir mimari gerektirir: oluşturmayı engelleyen kaynakları kaldırarak İlk Zengin İçerikli Boyama (FCP) süresini 0,8 saniyenin altında tutun; görseller ve afişler için sabit alanlar ayırarak Kümülatif Düzen Kayması\'nı (CLS) 0,00\'da sabitleyin; önemli yazı tiplerini ve ana görselleri önceden yükleyerek LCP süresini en aza indirin.'
        },
        {
          title: 'Dağıtım sorunlarını giderme ve yol yapılandırması',
          text: 'Dağıtım sonrasında sık karşılaşılan hatalar ve çözümleri: 1. Görseller veya stiller 404 veriyorsa: barındırma alt yolunuz ile derleme ayarındaki base yolunun eşleştiğini ve varlıkların göreli yollarla çağrıldığını kontrol edin. 2. Sayfa yenilemede 404 hatası: tek sayfalı uygulama (SPA) yönlendirmesi kullanıyorsanız yönlendirme kurallarını doğrulayın. 3. Önbelleğin güncellenmemesi: Cache-Control yanıt başlıklarını gözden geçirin.'
        }
      ]
    }
  ],
  docsChangelog: [
    {
      v: 'v2.4.0',
      date: '2026-08-20',
      text: 'Astro 5 saf statik mimarisiyle baştan inşa edildi. 6 dilde yerel uluslararasılaşma desteği, 0 KB istemci çatısı yükü ve tüm denetimlerde Lighthouse 100/100 performansı.'
    },
    {
      v: 'v2.3.0',
      date: '2024-11-30',
      text: 'Documentation AI genel beta sürümü yayımlandı ve görsel uç nokta testi için API Testing Platform etkileşimli koleksiyonlar özelliği eklendi.'
    },
    {
      v: 'v2.0.0',
      date: '2024-06-01',
      text: 'CodeEnhance AI genel kullanıma sunuldu: gerçek zamanlı kod editörü, yenilemesiz canlı DOM önizleme sanal alanı ve AST tabanlı tek tıkla kod iyileştirme motoru.'
    },
    {
      v: 'v1.5.0',
      date: '2024-03-20',
      text: 'Swift Resume kullanıma açıldı: ATS uyumlu özgeçmiş şablonları, anlık düzenleme önizlemesi ve tarayıcıda doğrudan yüksek kaliteli vektör PDF üretimi.'
    },
    {
      v: 'v1.2.0',
      date: '2023-09-01',
      text: 'LS Image Studio yayımlandı: gizlilik korumalı yerel toplu sıkıştırma, modern format dönüştürme (PNG/JPEG/WebP/AVIF) ve görsel boyutlandırma özellikleri.'
    },
    {
      v: 'v1.0.0',
      date: '2023-06-10',
      text: 'LS PDF Tools resmi olarak yayımlandı: dosya yüklemesi gerektirmeyen saf tarayıcı içi belge işleme araçları tek marka altında birleştirildi.'
    }
  ],
  timeline: [
    {
      year: '2020',
      title: 'Alet çantasının doğuşu',
      text: 'Hindistan\'da günlük mühendislik akışlarındaki tekrarlayan sürtünmeleri ortadan kaldırmak amacıyla kişisel geliştirici araçları (odaklı PDF araçları, görsel işleyiciler ve kod yardımcıları) geliştirilmeye başlandı.'
    },
    {
      year: '2022',
      title: 'Lade Stack şekilleniyor',
      text: 'Ayrık yardımcı araçlar Lade Stack kimliği altında birleştirildi; tutarlı bir tasarım sistemi, paylaşılan mimari ve geliştiricilere sonsuza dek ücretsiz araç sunma ilkesi hayata geçirildi.'
    },
    {
      year: '2024',
      title: 'Yapay zekâ destekli ekosistem',
      text: 'CodeEnhance AI ve gerçek zamanlı kod analizi araçlarının çıkışıyla akıllı iş akışlarına genişlendi; RAG mimarileri, full-stack geliştirme ve modern bulut dağıtımlarını kapsayan derin teknik rehberler yayınlandı.'
    },
    {
      year: '2026',
      title: 'Saf Astro mimarisine geçiş',
      text: 'Astro 5, Vanilla TypeScript ve Tailwind CSS kullanılarak statik-öncelikli eksiksiz bir mimari yeniden yazım gerçekleştirildi — istemcide sıfır çalışma zamanı yükü, akıcı çok dillilik ve kusursuz 100/100 Lighthouse performansı elde edildi.'
    }
  ],
  aboutStats: ['Kuruluş', 'Üretim aracı', 'Geliştirici', 'Sonsuza dek ücretsiz'],
  storyExtra: 'YZ sistemleri, web geliştirme ve kullanıcı deneyimine uzanan çok disiplinli mühendis ve tasarımcı — her üreticiye startup hızında süper güçleri bedavaya veren araçlar yapıyor.',
  aboutPage: {
    metaTitle: 'Girish Lade Hakkında — Kurucu, Yazılım Mimarı & UI/UX Geliştirici',
    metaDescription: 'UI/UX geliştiricisi, yazılım mühendisi ve Lade Stack Kurucusu & Baş Yazılım Mimarı Girish Lade\'in kişisel profili, mühendislik felsefesi, teknik ekosistemi ve yolculuğu.',
    metaKeywords: 'Girish Lade, Lade Stack kurucusu, UI/UX geliştirici, yazılım mühendisi, Üretken Yapay Zeka, bulut tabanlı mimari, mühendislik felsefesi',
    imageAlt: 'Girish Lade - Kurucu ve Baş Yazılım Mimarı',
    heroEyebrow: 'GELİŞTİRİCİ HAKKINDA',
    heroTitle: 'Tasarım, Mühendislik ve Yapay Zekânın Kesişiminde Üretmek',
    heroSubtitle: 'Ben Girish Lade — Hindistan merkezli bir UI/UX geliştiricisi, yazılım mühendisi ve ürün geliştiricisiyim. Sürtünmeyi ortadan kaldırmak ve karmaşık iş akışlarını basitleştirmek için pratik yazılım ürünleri, geliştirici araçları ve yapay zekâ destekli sistemler tasarlayıp inşa ediyorum.',
    founderRole: 'Kurucu ve Baş Yazılım Mimarı',
    founderLocation: 'Hindistan',
    founderBio1: 'Zamanımı yazılımın tüm yaşam döngüsü üzerinde düşünerek geçiriyorum — ilk kullanıcı deneyimi ve etkileşim tasarımından bulut tabanlı sistemlere, arka uç mimarisine ve pratik Üretken Yapay Zekâ entegrasyonuna kadar.',
    founderBio2: 'Motivasyonum son derece açık: Temeldeki mekanizma ne kadar karmaşık olursa olsun, kullanımı zahmetsiz ve doğal hissettiren, özenle tasarlanmış faydalı yazılımlar üretmek.',
    storyEyebrow: 'BEN KİMİM',
    storyTitle: 'Bir Üreticinin Evrimi',
    storyParagraphs: [
      'Her zaman sistemlerin yüzeyin altında nasıl çalıştığına dair derin bir merak ve ardından bunları kendi ellerimle inşa etme arzusuyla hareket ettim. Benim için yazılım geliştirmek, görsel tasarımcı veya arka uç mühendisi olmak arasında bir seçim yapmak olmadı. Yolculuğum tüm yelpazeyi doğal olarak kapsadı: görsel tasarım ve ön uç arayüzleriyle başlayıp arka uç mimarilerine ve veritabanlarına derinlemesine indi, bulut altyapısı ve DevOps\'u keşfetti ve şimdi Üretken Yapay Zekâ ile uçtan uca ürün mühendisliğine odaklandı.',
      'Bu alanları birbirinden ayrı disiplinler olarak görmek yerine, tek bir bütünleşik mühendislik zihninin birbirine bağlı yönleri olarak değerlendiriyorum. UI/UX temelim, ekranın karşısındaki kişiyle derin bir empati kurmamı sağlıyor — bilişsel sürtünmenin nerede oluştuğunu, arayüzün ne kadar sezgisel hissettirdiğini ve bir görevin neden tek tıklama yerine üç tıklama gerektirdiğini sürekli sorguluyorum. Eşzamanlı olarak yazılım mühendisliği birikimim, bu arayüzün arkasındaki sistemin sağlam, sürdürülebilir, yüksek performanslı ve mimari olarak temiz olmasını güvence altına alıyor.',
      'Üretken Yapay Zekâ ortaya çıktığında bu yolculuktan bir sapma olmadı; bilakis doğal bir ivmelendiriciye dönüştü. Yapay zekâ bize yepyeni etkileşim paradigmaları sunuyor, ancak yalnızca bilinçli bir amaçla entegre edildiğinde ve pratik ürün mühendisliğine dayandığında gerçek değerini buluyor.'
    ],
    whatBuildEyebrow: 'NE İNŞA EDİYORUM',
    whatBuildTitle: 'Sürtünmeyi Ortadan Kaldırmak İçin Geliştirilmiş Pratik Yazılımlar',
    whatBuildSubtitle: 'Salt teorik prototipler biriktirmek yerine üretim kalitesinde pratik yazılımlar geliştirmeye odaklanıyorum. Bir projeyi veya ürün fikrini değerlendirirken sorduğum temel soru şudur: Bu ürün gerçekte hangi darboğazı ortadan kaldırıyor ve birinin iş akışını nasıl daha hızlı veya daha sezgisel hale getiriyor?',
    whatBuildItems: [
      {
        num: '01 / GELİŞTİRİCİ ARAÇLARI',
        title: 'YZ Destekli Geliştirici Araçları',
        desc: 'Tekrarlayan geliştirici angaryasını ortadan kaldırmak ve teslim hızını artırmak için tasarlanmış akıllı kod asistanları, gerçek zamanlı kod geliştirme araçları ve otomatik API test platformları.'
      },
      {
        num: '02 / SAAS VE İŞ BİRLİĞİ',
        title: 'İş Birlikli Dosya ve Bulut Sistemleri',
        desc: 'Gizlilik, sıfır istemci yükü ve hızlı veri aktarımına odaklanan güvenli geçici dosya paylaşım araçları, belge dönüştürme paketleri ve hafif bulut servisleri.'
      },
      {
        num: '03 / UYGULAMA PLATFORMLARI',
        title: 'Modern Web Uygulamaları',
        desc: 'Anlamsal HTML, erişilebilir etkileşim durumları ve istemci tarafında sıfır çalışma zamanı mimarisiyle inşa edilmiş ultra yüksek performanslı web arayüzleri.'
      },
      {
        num: '04 / İŞ AKIŞI OTOMASYONU',
        title: 'YZ Destekli İş Akışları',
        desc: 'Yapılandırılmış verileri, dokümantasyon üretimini ve geliştirme görevlerini insan denetiminde pürüzsüz hatlara bağlayan akıllı otomasyon katmanları.'
      }
    ],
    craftEyebrow: 'BÜTÜNLEŞİK YAKLAŞIM',
    craftTitle: 'UI/UX ve Mühendislik Neden Birbirinden Ayrılamaz',
    craftParagraphs: [
      'Birçok organizasyonda tasarım ve mühendislik bir uçurumun iki zıt tarafında çalışır — tasarımcılar maketleri teslim eder, mühendisler de bunlara uyacak kodu yazar. Ben her zaman farklı çalıştım. Bana göre tasarım, mühendislik bittikten sonra uygulanan yüzeysel bir süsleme değildir; mühendislik de görünmez bir uygulama detayından ibaret değildir.',
      'Kullanıcı deneyimi mimariyi doğrudan şekillendirir: gerçek zamanlı yanıt gerektiren bir arayüz, olay odaklı veya iyimser bir istemci mimarisi talep eder. Aksine mimari de kullanıcı deneyimini belirler: kötü yapılandırılmış API\'ler, yavaş veritabanı sorguları veya şişkin istemci paketleri, Figma dosyası ne kadar şık görünürse görünsün kullanıcı deneyimini yıpratır.',
      'Performans, vazgeçilmez bir UX gereksinimidir. Erişilebilirlik, mühendislik kalitesinin bir göstergesidir. Tasarım ve mühendislik tek bir bütünleşik disiplin olarak ele alındığında ortaya çıkan yazılım daha yalın, dayanıklı ve doğrudan sezgisel olur.'
    ],
    aiEyebrow: 'ÜRETKEN YAPAY ZEKÂ',
    aiTitle: 'Gerçek İş Akışlarına Dayanan Pratik Makine Zekâsı',
    aiParagraphs: [
      'Üretken Yapay Zekâ, en derinlemesine araştırdığım alanlardan birini temsil ediyor. Ancak ilgim spekülatif bir heyecandan ziyade pratik fayda üzerine odaklanmıştır. Yüzeysel API sarmalayıcıları üretmekle veya yapay zekânın her sorunu kendiliğinden çözdüğünü iddia etmekle ilgilenmiyorum.',
      'Bunun yerine, Üretken Yapay Zekânın yazılım etkileşimini kökten nasıl yeniden şekillendirebileceğine odaklanıyorum:'
    ],
    aiPillars: [
      {
        title: 'Bağlam Duyarlı Destek',
        text: 'Mantığı yerinde açıklamak, yeniden düzenlemek ve denetlemek için dil modellerini doğrudan kod görüntüleyicilere ve geliştirici araçlarına yerleştirmek.'
      },
      {
        title: 'Akıllı İş Akışı Otomasyonu',
        text: 'Çok adımlı manuel prosedürleri, insan gözetiminde verileri çıkaran, dönüştüren ve doğrulayan yapılandırılmış YZ hatlarıyla değiştirmek.'
      },
      {
        title: 'Anlamsal Kullanıcı Arayüzleri',
        text: 'Kullanıcı niyetine dinamik olarak uyum sağlayan, doğal dili somut yazılım eylemlerine dönüştüren arayüzler tasarlamak.'
      },
      {
        title: 'Geliştirici Odaklı Araçlar',
        text: 'Dokümantasyon oluşturma, otomatik test iskelesi ve şema doğrulamasını üstlenerek mühendislerin yaratıcı mimariye odaklanmasını sağlayan araçlar geliştirmek.'
      }
    ],
    philosophyEyebrow: 'FELSEFE',
    philosophyTitle: 'Nasıl İnşa Ettiğime Yön Veren İlkeler',
    philosophyItems: [
      {
        title: 'Karmaşık mekanizmalar yerine yalın arayüzler',
        text: 'Düşünceli mühendisliğin gerçek göstergesi, doğası gereği karmaşık olan bir problemi (dağıtık veri, model çıkarımı, dosya kodlama) alıp bunu öngörülebilir, açık ve sakin hissettiren bir arayüzle sunmaktır.'
      },
      {
        title: 'Bilişsel yükü azaltmak',
        text: 'Her araç kullanıcının zihinsel enerjisine saygı duymalıdır. Yazılım, gerekli yapılandırmayı en aza indirmeli, gereksiz kurulum sürtünmelerinden kaçınmalı ve iyi tasarlanmış bir sistemin otomatik olarak halledebileceği şeyleri geliştiricinin aklında tutmasını asla zorunlu kılmamalıdır.'
      },
      {
        title: 'Yapay zekâ iş hattındaki yerini hak etmelidir',
        text: 'Yapay zekâ asla bir pazarlama numarası olarak eklenmemelidir. Deterministik mantığın yetersiz kaldığı ve ürünü kullanan kişiye anında doğrulanabilir değer sunduğu yerde bulunmalıdır.'
      },
      {
        title: 'Hız ve performans tartışılamaz',
        text: 'Milisaniye düzeyinde yanıt süreleri, minimum paket boyutları ve temiz anlamsal işaretleme sonradan düşünülen şeyler değil; ürün kalitesini ve güvenini tanımlayan temel gereksinimlerdir.'
      },
      {
        title: 'Temiz mimari sürekli yinelemeyi mümkün kılar',
        text: 'Sürdürülebilir kod tabanları, katı tip güvenliği ve modüler bileşen sınırları, felç edici teknik borçlar biriktirmeden ürünleri hızla geliştirmek için gereken çevikliği sağlar.'
      }
    ],
    workEyebrow: 'NASIL ÇALIŞIYORUM',
    workTitle: 'Ürün Geliştirmeye Sistematik Bir Yaklaşım',
    workSubtitle: 'İster açık kaynaklı bir geliştirici aracı tasarlayayım ister bir bulut hizmeti inşa edeyim, disiplinli ve yinelemeli bir yürütme süreci izlerim:',
    workSteps: [
      {
        step: '01',
        title: 'Problemi Parçalara Ayır',
        desc: 'Ana darboğazı izole et. Kullanıcının gerçekten çözmeye çalıştığı sorunu anlamak için yüzeysel varsayımları ayıkla.'
      },
      {
        step: '02',
        title: 'Deneyimi ve Akışları Tasarla',
        desc: 'Kullanıcı niyeti ile istenen çıktı arasındaki en kısa yolu haritalandır. Etkileşim durumlarını, klavye navigasyonunu ve ergonomiyi tel kafes olarak kurgula.'
      },
      {
        step: '03',
        title: 'Temel Mimariyi Kur',
        desc: 'Soruna en uygun en yalın ve güvenilir teknoloji yığınını seç. Tip güvenli şemaları, API sözleşmelerini ve veritabanı modellerini yapılandır.'
      },
      {
        step: '04',
        title: 'Anlamlı Olduğu Yerde YZ\'yi Dahil Et',
        desc: 'Manuel adımları ortadan kaldırdığı yerlerde makine zekâsını devreye sok, tutarlılığı garanti etmek için emniyet korkulukları ve yedekleme mekanizmaları ekle.'
      },
      {
        step: '05',
        title: 'Kıyasla, Optimize Et ve İyileştir',
        desc: 'Paket boyutlarını denetle, Lighthouse puanlarını ölç, uç durumları test et ve gerçek kullanıma göre mikro etkileşimleri mükemmelleştir.'
      }
    ],
    ecosystemEyebrow: 'TEKNİK EKOSİSTEM',
    ecosystemTitle: 'Teknoloji Yığını Genelindeki Kapsam',
    ecosystemSubtitle: 'Teknik repertuarım birden fazla alanı kapsayarak Figma\'daki görsel prototiplerden canlıdaki bulut altyapısına kadar tüm konseptleri hayata geçirmemi sağlar.',
    ecosystemGroups: [
      {
        label: 'Ön Uç & İstemci Uygulamaları',
        desc: 'Modern tip güvenliğiyle duyarlı, erişilebilir arayüzler ve platformlar arası mobil deneyimler geliştirmek.',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Flutter']
      },
      {
        label: 'Tasarım & Yaratıcı Araçlar',
        desc: 'Tasarım sistemleri, kullanıcı yolculukları, vektör varlıklar, 3D öğeler ve etkileşimli prototipler hazırlamak.',
        tags: ['Figma', 'Framer', 'Adobe Illustrator', 'Adobe Photoshop', 'Blender']
      },
      {
        label: 'Arka Uç & Veritabanları',
        desc: 'REST ve olay odaklı API\'ler, ilişkisel veritabanı şemaları ve ölçeklenebilir belge depolama yapıları kurmak.',
        tags: ['Node.js', 'MongoDB', 'MySQL', 'Oracle']
      },
      {
        label: 'Bulut & DevOps',
        desc: 'Otomatik dağıtım hatları, kapsayıcılı ortamlar ve çok bölgeli bulut hizmetleri yönetmek.',
        tags: ['AWS', 'Google Cloud', 'Docker', 'Git']
      },
      {
        label: '3D & Etkileşimli Sistemler',
        desc: 'Mekansal tasarım, gerçek zamanlı render ve etkileşimli sanal ortamları keşfetmek.',
        tags: ['Unity', 'Unreal Engine']
      }
    ],
    learningEyebrow: 'AKTİF GELİŞİM',
    learningTitle: 'Sürekli Öğrenme ve Teknik Gelişim',
    learningSubtitle: 'Teknoloji asla yerinde saymaz, benim mühendislik alet çantam da öyle. Sağlam ve kullanışlı ürünler geliştirmek için daha iyi yollar sunduklarında gelişmekte olan teknolojileri bilinçli olarak öğrenmeye devam ediyorum:',
    learningCards: [
      {
        badge: 'KEŞFEDİLEN',
        title: 'Kotlin & Mobil',
        desc: 'Cihazla sıkı bütünleşmiş mobil deneyimler sunmak için Kotlin ile yerel Android uygulama geliştirmeyi derinleştirmek.'
      },
      {
        badge: 'KEŞFEDİLEN',
        title: 'İleri Düzey GenAI',
        desc: 'Otonom ajan kalıplarını, geri getirme ile zenginleştirilmiş üretimi (RAG) ve verimli model orkestrasyonunu araştırmak.'
      },
      {
        badge: 'KEŞFEDİLEN',
        title: 'Bulut Tabanlı Mimari',
        desc: 'Ölçeklenebilir yazılım sistemleri için dağıtık mikroservisleri, sunucusuz kalıpları ve uç bilişimi incelemek.'
      }
    ],
    stackEyebrow: 'TEMEL YAPI TAŞLARI',
    stackTitle: 'Ana Teknoloji Yığını',
    stackSubtitle: 'Lade Stack\'e güç veren temel teknolojiler, sıfır çalışma zamanı yükü, statik ön işleme, sarsılmaz tip güvenliği ve anlık kullanıcı geri bildirimi sağlamak üzere seçilmiştir.',
    journeyEyebrow: 'KİLOMETRE TAŞLARI',
    journeyTitle: 'Yolculuk',
    futureEyebrow: 'UZUN VADELİ YÖN',
    futureTitle: 'Üreticileri Gerçek Anlamda Güçlendiren Yazılımlar İnşa Etmek',
    futureBody: 'Geleceğe baktığımda odak noktam, güçlü UX ile güçlü mühendisliği harmanlayan yenilikçi SaaS yapay zekâ araçları, ortak çalışma dosya sistemleri ve geliştirici odaklı yardımcı araçlar üretmeye bağlı kalmaya devam ediyor.',
    futureQuote: '"Yazılım geliştiriyorum çünkü karmaşık teknik zorlukları geliştiricilere ve üreticilere gerçek bir kaldıraç sağlayan temiz, erişilebilir araçlara dönüştürmekten keyif alıyorum. İyi mühendislik ve iyi tasarım bir arada var olabilir ve olmalıdır."',
    futureAuthor: '— Girish Lade'
  },
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
    {
      h: 'Genel bakış ve gizlilik ilkeleri',
      p: 'Lade Stack, Hindistan\'da Girish Lade tarafından kurulan bağımsız bir geliştirici araçları ve üretken yapay zekâ mühendisliği ekosistemidir. Temel tasarım ilkemiz tasarımdan gelen gizliliktir: yazılımlar istilacı telemetri, gözetim veya gizli veri ticarileştirmesi olmadan kullanıcılara değer sunmalıdır. Topladığımız verileri teknik olarak mümkün olan en alt seviyede tutuyor, dosya işleme ve hesaplamaları mümkün olduğunca tarayıcınızın yerel ortamında yürütüyor ve kişisel bilgilerinizi veri simsarlarına ya da reklam ağlarına asla satmıyor veya kiralamıyoruz.'
    },
    {
      h: 'Doğrudan sağladığınız bilgiler',
      p: 'Kişisel bilgileri yalnızca siz doğrudan ve gönüllü olarak ilettiğinizde topluyoruz. İletişim sayfamız (/contact) üzerinden mesaj gönderdiğinizde, yanıt verebilmemiz için adınız, e-posta adresiniz ve mesaj metniniz Formspree aracılığıyla güvenli biçimde mühendislik gelen kutumuza iletilir. Sayfa alt bilgisinden ürün bültenimize abone olursanız, e-posta adresinizi yalnızca teknik eğitimler ve platform güncellemeleri göndermek amacıyla toplarız. Destek, geri bildirim veya hata bildirimleri için doğrudan admin@ladestack.in adresine de e-posta gönderebilirsiniz.'
    },
    {
      h: 'Otomatik toplanan teknik veriler ve analizler',
      p: 'Site güvenilirliğini sürdürmek, yönlendirme hatalarını teşhis etmek ve genel kullanım eğilimlerini anlamak için gizlilik odaklı ölçüm araçları kullanıyoruz. Çerez kullanmayan hafif bir analiz platformu olan Umami Cloud ile kişisel kimlik tespiti veya siteler arası izleme yapmadan anonimleştirilmiş ölçümler (sayfa ziyaretleri, yönlendiren alan adları, cihaz işletim sistemleri ve ülke düzeyinde coğrafi konum) topluyoruz. Ayrıca arayüz kusurlarını tespit etmek amacıyla Microsoft Clarity kullanarak anonim gezinme telemetrisi, tıklama ısı haritaları ve kaydırma derinliğini inceliyoruz; klavye vuruşları ve hassas metin alanları sistem tarafından otomatik olarak maskelenir.'
    },
    {
      h: 'Çerezler ve tarayıcı yerel depolaması',
      p: 'Lade Stack kalıcı reklam takip çerezleri, reklam ağı işaretçileri veya zorunlu kimlik doğrulama çerezleri kullanmaz. Ziyaretler arasında arayüz tercihlerinizi hatırlamak için standart tarayıcı istemci depolamasını (LocalStorage) kullanırız. Görsel tema tercihiniz "ladestack-theme" (koyu veya açık mod) anahtarı altında, seçtiğiniz dil tercihi ise "ladestack-lang" anahtarı altında saklanır. Bu veriler yalnızca sizin cihazınızda kalır ve harici sunuculara asla iletilmez. Tarayıcı ayarlarınızdan bu verileri dilediğiniz zaman temizleyebilirsiniz; bu işlem temel site işlevlerine erişiminizi engellemez.'
    },
    {
      h: 'Tarayıcı içi dosya ve belge işleme',
      p: 'Lade Stack üretkenlik araçlarının en belirgin mimari özelliği, %100 istemci tarafında yerel çalışmasıdır. LS PDF Tools ve LS Image Studio gibi uygulamalar, modern WebAssembly ikili modülleri ve HTML5 Canvas API kullanarak işlemleri tamamen tarayıcınızın yerel belleğinde gerçekleştirir. Belgeleriniz, PDF\'leriniz, resimleriniz ve kaynak dosyalarınız sunucularımıza hiçbir zaman yüklenmez, aktarılmaz veya kaydedilmez. İşlem tamamlandığında bellek arabellekleri ve nesne URL\'leri cihazınızda derhal iptal edilir (URL.revokeObjectURL); böylece gizli dosyalarınız tamamen güvende kalır.'
    },
    {
      h: 'CodeEnhance AI ve kod girdilerinin işlenmesi',
      p: 'Sözdizimi denetimi, kod yeniden yapılandırma (refactoring) veya yapısal açıklamalar için CodeEnhance AI\'a kod parçacıkları gönderdiğinizde, verileriniz şifreli bir bağlantı (TLS 1.3) üzerinden güvenle iletilir. İstekler yalnızca sonucu derlemek ve düzenleyicinize gerçek zamanlı farkları (diff) iletmek için gereken birkaç saniye boyunca geçici sunucu belleğinde (RAM) işlenir. Kod parçacıklarınızı diske kaydetmez, tescilli kaynak kodlarınızın geçmiş günlüklerini tutmaz ve gönderdiğiniz kodları temel makine öğrenimi modellerini eğitmek veya ince ayar (fine-tuning) yapmak için asla kullanmayız.'
    },
    {
      h: 'Bilgilerinizi nasıl kullanıyoruz',
      p: 'Topladığımız tüm bilgiler yalnızca meşru operasyonel amaçlar doğrultusunda kullanılır: 24 saatlik yanıt taahhüdümüz kapsamında teknik destek ve iletişim taleplerinizi yanıtlamak; talep edilen bültenleri iletmek; platform çalışma süresini ve uç CDN performansını izlemek; yazılım hatalarını ve tarayıcı uyumsuzluklarını gidermek; kötüye kullanımı ve DDoS saldırılarını engellemek. Davranışsal profil çıkarma, otomatik kredi ve istihdam değerlendirmeleri yapmaz, kullanıcı verilerini ticari amaçla satmayız.'
    },
    {
      h: 'Üçüncü taraf hizmet sağlayıcıları ve veri paylaşımı',
      p: 'Verileri yalnızca platformun çalışması için zorunlu olan güvenilir altyapı sağlayıcılarıyla paylaşırız: Formspree (iletişim formlarını güvenle almak ve iletmek için), Umami Cloud (gizlilik odaklı toplu analizler için), Microsoft Clarity (arayüz hatalarını tespit eden anonim ısı haritaları için) ve küresel CDN uç ağları (statik varlıkları ultra düşük gecikmeyle sunmak için). Tüm sağlayıcılar katı sözleşme şartları altında çalışır ve bilgilerinizi kendi ticari amaçları için kullanmaları yasaktır.'
    },
    {
      h: 'Veri saklama ve silme',
      p: 'Kişisel bilgileri yalnızca bu politikada belirtilen amaçları yerine getirmek için gereken süre boyunca saklarız. Destek yazışmaları ve iletişim kayıtları, sorunun çözümü ve sorun giderme geçmişinin korunması için gereken makul süre boyunca tutulur. Tarayıcı yerel depolama verileri (LocalStorage tercihleri ve araç taslakları), siz tarayıcı önbelleğinizi temizleyene kadar cihazınızda kalır. İletişim kayıtlarınızın silinmesini dilediğiniz zaman admin@ladestack.in adresine yazarak talep edebilirsiniz.'
    },
    {
      h: 'Gizlilik haklarınız ve veri taşınabilirliği',
      p: 'Bulunduğunuz ülkeden bağımsız olarak, hakkınızda tutulan iletişim kayıtlarına erişme, yanlış bilgilerin düzeltilmesini talep etme veya kayıtların silinmesini isteme hakkına sahipsiniz. Ayrıca Lade Stack araçlarıyla işlenen tüm kaynak kodları, belgeler, özgeçmişler ve görseller üzerindeki tam mülkiyet koşulsuz olarak size aittir. Uygulamalarımız doğrudan dosya indirme, panoya kopyalama ve yapılandırılmış JSON proje dışa aktarımı yoluyla filigransız ve platform bağımlılığı olmadan anında veri taşınabilirliği sunar.'
    },
    {
      h: 'Teknik güvenlik ve kullanıcı sorumluluğu',
      p: 'Mühendislik düzeyinde kapsamlı güvenlik önlemleri uyguluyoruz: aktarım sırasında uçtan uca HTTPS şifreleme, sıkı İçerik Güvenlik Politikaları (CSP), XSS açıklarını önlemek için canlı kod önizlemelerinde korumalı iframe kum havuzları (sandbox) ve otomatik bağımlılık güvenlik güncellemeleri. Ancak internet üzerinden hiçbir aktarım tamamen hatasız olamaz. Kullanıcılarımızın temel güvenlik ilkelerine uymasını tavsiye ederiz: üretim API anahtarlarını, özel kriptografik anahtarları veya veritabanı parolalarını çevrim içi araçlara girmeyiniz. Olası güvenlik açıklarını admin@ladestack.in adresine bildirebilirsiniz.'
    },
    {
      h: 'Çocukların gizliliği, politika güncellemeleri ve iletişim',
      p: 'Lade Stack genel geliştirici kitlesi, öğrenciler ve üreticilere yöneliktir; 13 yaşın altındaki çocuklardan bilerek kişisel veri toplamayız. Bu Gizlilik Politikası, yeni araçların eklenmesi, mimari iyileştirmeler veya mevzuat güncellemeleri doğrultusunda periyodik olarak güncellenebilir ve güncellemeler sayfanın üst kısmındaki "Son güncelleme" tarihiyle belirtilir. Bu politika veya verilerinizin işlenmesiyle ilgili soru ve talepleriniz için Girish Lade ile iletişime geçebilirsiniz: admin@ladestack.in (Mumbai, Hindistan).'
    }
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
