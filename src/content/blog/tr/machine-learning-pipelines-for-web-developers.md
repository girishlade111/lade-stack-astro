---
title: "Web Geliştiricileri için Makine Öğrenmesi Hatları"
description: "Veri alımından eğitime, değerlendirmeden sunuma — sahadaki web geliştiricisine ML girişi."
pubDate: 2024-07-10
author: "Girish Lade"
category: "AI Development"
readTime: 9
coverImage: "/blog-covers/ai-development.svg"
featured: false
tags: ["Makine Öğrenimi", "Boru Hatları", "Web Geliştirme"]
---

## Giriş

Veri toplama ve alımından (ingestion) model eğitimine, doğrulama metriklerinden REST/gRPC çıkarım sunumuna (serving) kadar web geliştiricileri için pratik ve anlaşılır makine öğrenmesi (ML) boru hatları rehberi. Bu yazıda kavramlar, operasyonel ödünleşimler ve üretime hazır bir iş akışı incelenmektedir.

## Neden Önemli?

- **Geliştirici Hızı**: Web geliştiricilerinin tanıdık API ve mikroservis mimarileri üzerinden ML modellerini kolayca uygulamaya entegre etmesini sağlar.
- **Sistem Güvenilirliği**: Model sürümleme ve otomatik veri doğrulama ile üretim ortamında bozuk girdi ve sessiz tahmin çökmelerini önler.
- **Maliyet Kontrolü**: Modelleri doğrudan uygulama sunucusunda çalıştırmak yerine optimize edilmiş çıkarım altyapılarıyla sunarak kaynak tüketimini dengeler.

## Temel Kavramlar

### 1. En Küçük Çalışan Dilimden Başlayın

Tüm ML platformunu birden kurmak yerine, dikey ve odaklı bir tahmin akışıyla başlayın. **Web Geliştiricileri için Makine Öğrenmesi Hatları** bağlamında bu, basit bir sınıflandırma modelini ONNX veya hafif bir REST servisi olarak paketleyip gözlemlenebilirlikle sunmaktır.

### 2. Başarı Yolunu Geniş Tutun

Dokümantasyona güvenmek yerine şema doğrulama (Pydantic / Zod), girdi sanitizasyonu ve dayanıklılık şablonları benimseyin:

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

1. Girdi ve tahmin çiftlerini model versiyonuyla ilişkilendiren yapılandırılmış günlük kaydı ekleyin.
2. Web API katmanında model tahmin gecikmesini sınırlayan agresif zaman aşımları (timeouts) belirleyin.
3. Yayına çıkmadan önce yüksek eşzamanlı istekler altında model sunucusunun CPU ve bellek doygunluğunu test edin.
4. Model çökmeleri, veri kayması (data drift) ve bellek sızıntıları için operasyon kılavuzları hazırlayın.

## Yaygın Hatalar

> Henüz basit bir regresyon modeline ihtiyaç duyarken yüz milyon parametreli derin öğrenme kümeleri kurmaktan kaçının. Temiz veri ve sade bir model, erkenden getirilmiş karmaşık mimarileri her zaman geride bırakır.

- Web istek işleyicisi (request handler) içinde senkron ve ağır model çıkarımı çalıştırarak Node.js olay döngüsünü (event loop) kilitlemek.
- Eğitim ortamındaki veri ön işleme (preprocessing) adımları ile web sunucusundaki adımların uyuşmaması (training-serving skew).
- Tahmin gecikmesi ve 504 Gateway Timeout artışlarını haber veren alarmlar tanımlamamak.

## Sonuç

**Web Geliştiricileri için Makine Öğrenmesi Hatları**, ML’i karmaşık bir kara kutu olarak görmek yerine standart yazılım mühendisliği disipliniyle ele alan ekipleri güçlendirir. Yukarıdaki kontrol listesini uygulayın, her hafta bir tahmin hattını optimize edin ve web ürününüze yapay zekâ yetenekleri kazandırın.
