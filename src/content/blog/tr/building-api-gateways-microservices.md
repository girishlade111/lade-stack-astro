---
title: "Mikroservisler için API Ağ Geçitleri"
description: "Kimlik doğrulama, yönlendirme, dönüştürme ve gözlemlenebilirlik filonun kıyısında."
pubDate: 2024-11-12
relatedApps: ["api-testing"]
author: "Girish Lade"
category: "API Design & Scaling"
readTime: 10
coverImage: "/blog-covers/api-design.svg"
featured: false
tags: ["API Ağ Geçidi", "Mikroservisler", "Yönlendirme"]
---

## Giriş

Mikroservis filosunun sınırında (edge) kimlik doğrulama (auth), dinamik yönlendirme (routing), istek dönüştürme ve merkezi gözlemlenebilirlik kurma rehberi. Bu yazıda mimari ödünleşimler, sınır katmanında performans kayıplarını önleme yolları ve üretime hazır pratik kalıplar ele alınmaktadır.

## Neden Önemli?

- **Geliştirici Hızı**: Kimlik doğrulama, hız sınırlama ve TLS sonlandırma gibi ortak gereksinimleri tek bir noktada toplayarak mikroservis ekiplerini tekrarlayan işlerden kurtarır.
- **Sistem Güvenilirliği**: Dağıtık devre kesiciler (circuit breaker) ve yük dengeleme ile aşağı akış servislerindeki arızaların tüm sisteme yayılmasını engeller.
- **Maliyet Kontrolü**: Gereksiz iç servis çağrılarını sınırda önbelleğe alarak ağ trafiğini ve altyapı maliyetlerini optimize eder.

## Temel Kavramlar

### 1. En Küçük Çalışan Dilimden Başlayın

Tüm servisleri aynı anda ağ geçidi arkasına almak yerine, dikey ve doğrulanabilir bir dilimle başlayın. **Mikroservisler için API Ağ Geçitleri** bağlamında bu, tek bir kritik mikroservis için yönlendirme, JWT doğrulama ve dağıtık izleme başlıklarını yapılandırıp canlıda test etmektir.

### 2. Başarı Yolunu Geniş Tutun

Dokümantasyon yerine kurallar, yapılandırılmış hata sözleşmeleri ve otomatik dayanıklılık mekanizmaları benimseyin:

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

1. Her gelen isteğe benzersiz `X-Correlation-ID` atayarak mikroservisler arası dağıtık izlemeyi başlatın.
2. Aşağı akış servislerinin çökmesini önlemek için ağ geçidinde arka baskı (backpressure) ve devre kesici kuralları koyun.
3. Yayına çıkmadan önce TLS anlaşması (handshake) ve JWT imza doğrulama yükü altında ağ geçidinin p99 gecikmesini ölçün.
4. Ağ geçidi bellek sızıntısı, sertifika yenileme aksamaları ve DNS çözümleme sorunları için operasyon kılavuzları hazırlayın.

## Yaygın Hatalar

> Ağ geçidine ağır iş mantığı (business logic) ekleyerek onu yeni bir monolite dönüştürmekten kaçının. Yalın ve odaklı sınır bileşenleri, karmaşık yönlendiricileri her zaman geride bırakır.

- Ağ geçidinde senkron veritabanı sorguları çalıştırarak darboğaz ve tek hata noktası (SPOF) yaratmak.
- Mikroservis arızalarında standart hata yanıtları yerine ham yığın izlerini (stack trace) istemciye sızdırmak.
- Ağ geçidi CPU ve bağlantı doygunluğu için erken uyarı alarmları ayarlamamak.

## Sonuç

**Mikroservisler için API Ağ Geçitleri**, sınır sorumluluklarını net ve hafif tutan ekipleri başarıya taşır. Yukarıdaki kontrol listesini uygulayın, her hafta bir rota darboğazını otomatikleştirin ve dağıtık sisteminizi koruyun.
