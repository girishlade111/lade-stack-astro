---
title: "API Hız Sınırlama ve Kısma Stratejileri"
description: "İyi istemcileri üzmeden API’yi koruyan jeton kovaları ve kotalar."
pubDate: 2024-11-05
relatedApps: ["api-testing"]
author: "Girish Lade"
category: "API Design & Scaling"
readTime: 8
coverImage: "/blog-covers/api-design.svg"
featured: false
tags: ["Hız Sınırlama", "API", "Güvenilirlik"]
---

## Giriş

Kurallara uyan meşru istemcileri cezalandırmadan, jeton kovası (Token Bucket), kayan pencere (Sliding Window) ve kiracı bazlı kota tasarımlarıyla API’lerinizi güvenle koruyun. Bu rehberde temel kavramlar, mimari ödünleşimler ve doğrudan üretime uygulayabileceğiniz bir iş akışı ele alınmaktadır.

## Neden Önemli?

- **Geliştirici Hızı**: Şirket genelinde doğru varsayılanlar belirleyerek her servis geliştiricisinin münferit koruma kodları yazmasını önler.
- **Sistem Güvenilirliği**: Kötü niyetli saldırganlardan veya sonsuz döngüye giren istemcilerden gelen ani trafik dalgalarına karşı arka uç veritabanlarını korur.
- **Maliyet Kontrolü**: Beklenmedik sunucusuz (serverless) fonksiyon yürütmelerini ve harici API faturalarını erkenden sınırlar.

## Temel Kavramlar

### 1. En Küçük Çalışan Dilimden Başlayın

Tüm şirket için devasa bir kota altyapısı kurmadan önce, uçtan uca çalışan dikey bir dilim oluşturun. **API Hız Sınırlama ve Kısma Stratejileri** bağlamında bu, API ağ geçidi veya ara katmanda tek bir kritik uç nokta için hız sınırı kuralı tanımlayıp ilk günden gözlemlenebilirlik sağlamak demektir.

### 2. Başarı Yolunu Geniş Tutun

İstemcilere belirsiz hatalar dönmek yerine standart HTTP başlıkları (`Retry-After`, `RateLimit-Remaining`) sağlayarak istemcilerin kendi kendilerine yeniden deneme yapmalarını sağlayın. Üretime hazır minimum başlangıç örneği:

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

1. İstemci tanımlayıcısı (IP veya Kiracı ID) ve istek kimliği (Request ID) içeren yapılandırılmış günlük kaydı ekleyin.
2. Acil durumlarda belirli bir müşterinin sınırlarını gevşetebilecek bir özellik bayrağı (Feature Flag) tanımlayın.
3. Yayına çıkmadan önce ani trafik patlamaları altında Redis bellek ve CPU yükünü test edin.
4. En yaygın üç hata senaryosu (Redis kesintisinde açık kalma politikası, yanlış pozitif engellemeler, DDoS saldırıları) için operasyon kılavuzları hazırlayın.

## Yaygın Hatalar

> Gerçek kullanıcılarınız olmadan önce platformu aşırı karmaşıklaştırmaktan kaçının. İyi seçilmiş sade teknolojiler, erken seçilmiş gösterişli teknolojileri her zaman geride bırakır.

- Yük dengeleyici arkasındaki çoklu örneklerde yerel bellek içi sayaçlar kullanarak gerçek hız sınırını sağlayamamak.
- Kota aşıldığında 429 Too Many Requests yerine 500 hatası dönerek istemcilerin ısrarla yeniden denemesine yol açmak.
- Gece yarısı nöbetçiyi uyandıracak 429 hata oranı artışı uyarılarının bulunmaması.

## Sonuç

**API Hız Sınırlama ve Kısma Stratejileri**, küçük ve gözlemlenebilir adımlarla ilerleyen ekipleri ödüllendirir. Yukarıdaki kontrol listesiyle başlayın, her hafta bir darboğazı otomatikleştirin ve mühendislik kazanımlarınızı katlayın.
