---
title: "Startuplar için Bulut Maliyet Optimizasyonu"
description: "Doğru boyutlandırma, taahhüt, depolama yaşam döngüsü ve etiket disipliniyle faturayı %30-50 indirmek."
pubDate: 2024-11-15
author: "Girish Lade"
category: "Cloud Computing"
readTime: 8
coverImage: "/blog-covers/cloud-computing.svg"
featured: false
tags: ["Bulut", "Maliyetler", "FinOps"]
---

## Giriş

Doğru boyutlandırma (rightsizing), taahhütlü kullanım indirimleri (Savings Plans / Reserved Instances), nesne depolama yaşam döngüsü kuralları ve kaynak etiketleme disipliniyle bulut faturalarını %30 ila %50 oranında düşürme rehberi. Bu yazıda operasyonel ödünleşimler, gereksiz kaynak israfını önleme yolları ve hemen devreye alabileceğiniz adımlar ele alınmaktadır.

## Neden Önemli?

- **Geliştirici Hızı**: Bütçe sınırları ve otomatik maliyet raporları sayesinde ekipler onay süreçlerine takılmadan güvenle kaynak tüketebilir.
- **Sistem Güvenilirliği**: Atıl ve unutulmuş kaynakların düzenli temizlenmesi, güvenlik açıklarını ve karmaşık bağımlılık krizlerini azaltır.
- **Maliyet Kontrolü**: Tahsis edilen ancak kullanılmayan CPU/RAM israfını erkenden durdurarak startup sermayesini (runway) doğrudan korur.

## Temel Kavramlar

### 1. En Küçük Çalışan Dilimden Başlayın

Tüm bulut altyapısını aynı anda yeniden yapılandırmak yerine, en yüksek harcamayı yapan tek bir kaynak grubuna odaklanın. **Startuplar için Bulut Maliyet Optimizasyonu** bağlamında bu, faturanın %40’ını oluşturan veritabanı veya Kubernetes kümesini doğru boyutlandırıp gözlemlenebilirlikle izlemektir.

### 2. Başarı Yolunu Geniş Tutun

Geliştiricilerin tasarruf kararlarını manuel almasını beklemek yerine, IaC politikaları ve otomatik yaşam döngüsü kuralları tanımlayın:

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

1. Tüm kaynaklara `Owner`, `Environment` ve `Service` etiketlerini (Tags) zorunlu kılan ilkeler ekleyin.
2. S3/GCS depolama kovalarında 30 günden eski logları ve geçici dosyaları soğuk depolamaya aktaran veya silen yaşam döngüsü kuralları açın.
3. Test (staging) ve geliştirme ortamlarını mesai saatleri dışında otomatik kapatan zamanlayıcılar kurun.
4. Beklenmedik maliyet patlamaları (%20 günlük harcama artışı) için gerçek zamanlı bütçe uyarıları yapılandırın.

## Yaygın Hatalar

> Henüz gelir yaratmayan aşamada aşırı pahalı çok bölgeli (multi-region) kurumsal mimariler kurmaktan kaçının. Yalın ve doğru yönetilen altyapı, erken alınmış abartılı küme mimarilerini her zaman geride bırakır.

- Geliştirme ortamlarında açık unutulan devasa GPU veya bellek örneklerinin farkına ay sonunda varmak.
- Veritabanı ve Redis kümelerini gerçek CPU kullanımının 10 katı büyüklükte provizyon edip küçültmemek.
- Faturada en büyük kalemi oluşturan giden veri (egress) transfer maliyetlerini hesaba katmamak.

## Sonuç

**Startuplar için Bulut Maliyet Optimizasyonu**, küçük, ölçülebilir ve sürekli temizlik alışkanlığı edinen mühendislik ekiplerine uzun soluklu bir avantaj kazandırır. Yukarıdaki kontrol listesiyle başlayın, her hafta bir israf noktasını otomatikleştirin ve bütçenizi verimli yönetin.
