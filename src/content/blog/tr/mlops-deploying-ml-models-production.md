---
title: "MLOps: ML Modellerini Üretime Almak"
description: "Kayıt defteri, kanarya sunumu, öznitelik deposu ve geri alma planlarıyla güven veren modeller."
pubDate: 2024-12-07
author: "Girish Lade"
category: "AI Production Systems"
readTime: 12
coverImage: "/blog-covers/ai-production.svg"
featured: false
tags: ["MLOps", "Dağıtım", "Makine Öğrenimi"]
---

## Giriş

Model kayıt defterleri (Model Registry), kanarya sunumu (canary serving), öznitelik depoları (Feature Store) ve anında geri alma (rollback) planları ile kurumsal güven kazanan makine öğrenmesi modellerini üretime alma rehberi. Bu yazıda kavramlar, operasyonel ödünleşimler ve doğrudan uygulayabileceğiniz adımlar ele alınmaktadır.

## Neden Önemli?

- **Geliştirici Hızı**: Veri bilimciler ve ML mühendislerinin modelleri haftalar süren manuel paketlemeler yerine otomatik CI/CD boru hatlarıyla canlıya almasını sağlar.
- **Sistem Güvenilirliği**: Kanarya dağıtımları ve gölge (shadow) trafik testleri ile hatalı tahminlerin son kullanıcılara ulaşmasını engeller.
- **Maliyet Kontrolü**: Öznitelik depoları ile yinelenen hesaplamaları önler ve otomatik ölçeklenen çıkarım sunucularıyla GPU maliyetlerini optimize eder.

## Temel Kavramlar

### 1. En Küçük Çalışan Dilimden Başlayın

Tüm model yaşam döngüsünü aynı anda otomatikleştirmek yerine, dikey ve doğrulanabilir bir model dağıtımıyla başlayın. **MLOps: ML Modellerini Üretime Almak** bağlamında bu, model kayıt defterinden çekilen bir modeli kanarya olarak trafiğin %5’ine açıp gözlemlenebilirlikle izlemektir.

### 2. Başarı Yolunu Geniş Tutun

Dokümantasyona güvenmek yerine model metaveri takibi (MLflow / Weights & Biases), otomatik kalite kapıları ve dayanıklılık şablonları belirleyin:

```typescript
// Minimal production-ready starter
export const config = {
  retries: 3,
  timeoutMs: 5_000,
  circuitBreaker: { failures: 5, cooldownMs: 30_000 },
};

export async function runWithResilience<T>(fn: () => Promise<T>): Promise<T> {
  let lastError: unknown;
  for (let attempt = 1; attempt <= config.retries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
      await new Promise((r) => setTimeout(r, attempt * 250));
    }
  }
  throw lastError;
}
```

### 3. Gerçekten Önemli Olanı Ölçün

| Metrik | İyi Bir Başlangıç Hedefi |
| --- | --- |
| p95 gecikme süresi | < 300 ms |
| Hata bütçesi tüketimi | < %2 / 30 gün |
| Dağıtım sıklığı | Günlük (Daily) |
| Geri alma süresi | < 10 dakika |

## Üretim Kontrol Listesi

1. Her model sürümü için eğitim veri seti karması (hash) ve hiperparametreleri kaydeden denetim izi oluşturun.
2. Yeni model sürümünü doğrudan tüm trafiğe açmak yerine kanarya veya mavi-yeşil dağıtım stratejisi uygulayın.
3. Yayına çıkmadan önce GPU bellek tahsisini ve eşzamanlı çıkarım kuyruk gecikmesini yük altında test edin.
4. Model performansında ani düşüş (accuracy drop), tahmin zaman aşımları ve çıkarım sunucusu çökmeleri için operasyon kılavuzları hazırlayın.

## Yaygın Hatalar

> Ekibiniz henüz birkaç modeli yönetirken devasa ve karmaşık MLOps platform araçlarına boğulmaktan kaçının. Temiz GitOps iş akışları ve hafif bir kayıt defteri, hantal kurumsal platformları her zaman geride bırakır.

- Model artefaktlarını versiyon kontrolü olmadan geçici depolama alanlarında veya S3 kovalarında isimsiz saklamak.
- Çıkarım sırasında eğitim veri formatından farklı şemalar geldiğinde sessizce varsayılan değer dönüp yanlış tahmin üretmek.
- Tahmin doğruluğu ve model kayması (model drift) metriklerini izlemeyip modelin canlıda çürümesine göz yummak.

## Sonuç

**MLOps: ML Modellerini Üretime Almak**, modelleri kod gibi test eden, versiyonlayan ve izleyen ekipleri ödüllendirir. Yukarıdaki kontrol listesini uygulayın, her hafta bir operasyon adımını otomatikleştirin ve güvenilir yapay zekâ sistemleri sunun.
