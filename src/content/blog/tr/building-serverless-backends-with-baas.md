---
title: "BaaS ile Sunucusuz Arka Uçlar"
description: "Sıfır sunucuyla üretim arka ucu: şema tasarımı, uç işlevleri, arka plan işleri."
pubDate: 2024-10-10
author: "Girish Lade"
category: "Backend as a Service"
readTime: 8
coverImage: "/blog-covers/baas.svg"
featured: false
tags: ["Sunucusuz", "BaaS", "Arka Uç"]
---

## Giriş

Sunucu yönetme yükü olmadan eksiksiz bir üretim arka ucu ayağa kaldırın: ilişkisel şema tasarımı, CDN uç noktalarında çalışan uç işlevleri (Edge Functions) ve kuyruk tabanlı arka plan işleri. Bu rehberde kavramlar, operasyonel ödünleşimler ve doğrudan uygulayabileceğiniz modern bir sunucusuz iş akışı ele alınmaktadır.

## Neden Önemli?

- **Geliştirici Hızı**: Altyapı provizyonu yerine doğrudan ürün mantığına odaklanarak ilk sürümü günler içinde teslim etme imkânı.
- **Sistem Güvenilirliği**: Sıfır sunucu yönetimi sayesinde işletim sistemi yamalama ve sunucu çökmeleri gibi bakım yüklerinden kurtulma.
- **Maliyet Kontrolü**: Trafik olmadığında sıfıra inen (scale-to-zero) sunucusuz fiyatlandırma ile altyapı bütçesini kontrol altında tutma.

## Temel Kavramlar

### 1. En Küçük Çalışan Dilimden Başlayın

Tüm mimariyi baştan tasarlamak yerine, dikey ve çalışan bir dilim yayınlayın. **BaaS ile Sunucusuz Arka Uçlar** bağlamında bu, uç işlevi (Edge Function) ve şema doğrulamasıyla korunan tek bir veri yazma akışını gözlemlenebilirlik ile devreye almaktır.

### 2. Başarı Yolunu Geniş Tutun

Dokümantasyona güvenmek yerine kurallar, yeniden deneme mekanizmaları ve güvenlik şablonları oluşturun:

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

1. Uç işlevlerinde (Edge Functions) istek kimlikleri (Request ID) içeren yapılandırılmış günlükleme uygulayın.
2. Ağır ve uzun süren işlemleri doğrudan HTTP isteğinde değil, asenkron arka plan kuyruklarında yürütün.
3. Yayına çıkmadan önce uç işlevlerinin soğuk başlangıç (cold start) sürelerini ve veritabanı bağlantı sınırlarını test edin.
4. Harici bağımlılık kesintileri için geri dönüş (fallback) senaryoları ve operasyon kılavuzları hazırlayın.

## Yaygın Hatalar

> Henüz kullanıcı trafiği oluşmadan platformu aşırı mühendislikle karmaşıklaştırmaktan kaçının. Doğru yapılandırılmış sade teknolojiler, erkenden seçilmiş karmaşık mimarileri her zaman geride bırakır.

- Uç işlevlerinden veritabanına doğrudan bağlantı açıp bağlantı havuzlayıcı (PgBouncer vb.) kullanmamak.
- Hassas API anahtarlarını istemciye açık çevre değişkenlerinde depolamak.
- Fonksiyon zaman aşımı ve hata artışları için izleme ve uyarı mekanizmaları kurmamak.

## Sonuç

**BaaS ile Sunucusuz Arka Uçlar**, küçük, ölçülebilir ve modüler adımlarla ilerleyen ekiplere muazzam bir çeviklik kazandırır. Yukarıdaki kontrol listesiyle başlayın, her hafta bir darboğazı otomatikleştirin ve kazanımlarınızı büyütün.
