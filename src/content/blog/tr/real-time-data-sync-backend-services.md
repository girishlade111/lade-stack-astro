---
title: "Arka Uçlarda Gerçek Zamanlı Veri Eşitleme"
description: "WebSocket, CRDT ve yönetilen gerçek zamanlı servislerle çevrimiçi durumu ve ortak düzenleme."
pubDate: 2024-10-18
author: "Girish Lade"
category: "Backend as a Service"
readTime: 9
coverImage: "/blog-covers/baas.svg"
featured: false
tags: ["Gerçek Zamanlı", "WebSocket", "Eşitleme"]
---

## Giriş

Çevrimiçi durumu (presence), canlı imleçler (live cursors) ve işbirlikçi ortak düzenleme deneyimini WebSocket, CRDT (Çatışmasız Çoğaltılan Veri Tipleri) ve yönetilen gerçek zamanlı arka uç servisleriyle inşa edin. Bu rehberde temel kavramlar, veri tutarlılığı ödünleşimleri ve doğrudan uygulayabileceğiniz üretime hazır bir iş akışı incelenmektedir.

## Neden Önemli?

- **Geliştirici Hızı**: Karmaşık çift yönlü durum eşitleme mantığını standart kalıplarla çözerek ekibin temel ürün özelliklerine odaklanmasını sağlar.
- **Sistem Güvenilirliği**: Ağ kopmaları, bağlantı dalgalanmaları ve eşzamanlı istemci güncellemeleri altında veri kaybını ve yarış durumlarını (race conditions) önler.
- **Maliyet Kontrolü**: Verimli ikili protokoller ve akıllı delta güncellemeleri sayesinde bant genişliği ve sunucu CPU tüketimini minimize eder.

## Temel Kavramlar

### 1. En Küçük Çalışan Dilimden Başlayın

Tüm veri modelini aynı anda gerçek zamanlı hale getirmek yerine, dikey ve odaklı bir dilimle başlayın. **Arka Uçlarda Gerçek Zamanlı Veri Eşitleme** bağlamında bu, ilk günden bağlantı durumu telemetrisi içeren tek bir ortak alan veya durum göstergesi yayınlamaktır.

### 2. Başarı Yolunu Geniş Tutun

Dokümantasyona güvenmek yerine, istemci tarafında otomatik yeniden bağlanma, üstel geri çekilme (exponential backoff) ve yerel durum yönetimi şablonları kullanın:

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

1. WebSocket bağlantı oturumlarına bağlantı ID’si ve kullanıcı kimliği ekleyerek yapılandırılmış günlükleme sağlayın.
2. Bağlantı dalgalanmalarında sunucuya aşırı yük binmesini önlemek için istemcilere rastgele zamanlı (jitter) yeniden bağlanma ekleyin.
3. Yayına çıkmadan önce eşzamanlı bağlantı (concurrent connections) ve mesaj hacmi altında bellek sızıntısı testleri yapın.
4. Ağ kopmaları, çatışma çözümü arızaları ve mesaj kuyruğu tıkanıklıkları için operasyon kılavuzları hazırlayın.

## Yaygın Hatalar

> Kullanıcı kitleniz büyümeden önce dağıtık konsensüs altyapılarını aşırı karmaşıklaştırmaktan kaçının. Doğru kurgulanmış yalın teknolojiler, erken seçilmiş hantal mimarileri her zaman geride bırakır.

- Çatışma çözümü (conflict resolution) mantığını düşünmeden doğrudan son yazanın kazandığı (last-write-wins) ilkel modellerle veri kaybına yol açmak.
- Bağlantı kopmalarında çevrimdışı kuyruğu bellek içinde sınırsız büyüterek tarayıcı veya mobil istemciyi çökertmek.
- Açık WebSocket bağlantı sayısı ve gecikme metrikleri için anlık uyarı altyapısı kurmamak.

## Sonuç

**Arka Uçlarda Gerçek Zamanlı Veri Eşitleme**, küçük ve gözlemlenebilir adımlarla ilerleyen ekipleri ödüllendirir. Yukarıdaki kontrol listesiyle başlayın, her hafta bir veri akışını optimize edin ve mühendislik kazanımlarınızı büyütün.
