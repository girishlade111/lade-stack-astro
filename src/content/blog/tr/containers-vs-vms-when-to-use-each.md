---
title: "Konteyner vs VM: Hangisi Ne Zaman"
description: "İzolasyon, ek yük ve operasyon dengesiyle güvenle seçmek."
pubDate: 2024-11-20
author: "Girish Lade"
category: "Virtual Machines"
readTime: 7
coverImage: "/blog-covers/virtual-machines.svg"
featured: false
tags: ["Konteynerler", "VM", "Docker"]
---

## Giriş

İzolasyon seviyesi, kaynak ek yükü (overhead) ve operasyonel karmaşıklık dengesini gözeterek konteynerler (Docker/Kubernetes), sanal makineler (VM) veya hibrit yaklaşımlar arasında bilinçli seçim yapma kılavuzu. Bu rehberde kavramlar, ödünleşimler ve üretime hazır bir iş akışı incelenmektedir.

## Neden Önemli?

- **Geliştirici Hızı**: Konteynerlerin milisaniyeler süren hızlı başlangıcı ve taşınabilirliği, yerel geliştirme ile üretim ortamı farklarını ortadan kaldırır.
- **Sistem Güvenilirliği**: VM’lerin hipervizör düzeyindeki güçlü donanım izolasyonu, çok kiracılı veya güvenilmez iş yüklerinde çekirdek güvenliğini sağlar.
- **Maliyet Kontrolü**: Aynı sunucu üzerinde yoğun konteyner paketleme ile gereksiz işletim sistemi bellek ve CPU ayak izinden tasarruf edilir.

## Temel Kavramlar

### 1. En Küçük Çalışan Dilimden Başlayın

Tüm altyapıyı birden değiştirmek yerine dikey ve doğrulanabilir bir dilimle ilerleyin. **Konteyner vs VM: Hangisi Ne Zaman** bağlamında bu, hafif bir servisi konteynere alıp kaynak sınırlarını (cgroups) ve yeniden başlatma politikalarını test etmektir.

### 2. Başarı Yolunu Geniş Tutun

Dokümantasyona bel bağlamak yerine temel imaj (base image) standartları, hafif Alpine/Distroless tabanlar ve dayanıklılık şablonları kullanın:

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

1. Konteynerlerde CPU ve bellek sınırlarını (`resources.limits` ve `requests`) kesin olarak tanımlayın.
2. VM iş yüklerinde disk I/O ve takas (swap) kullanımını izleyen yapılandırılmış günlükleme ekleyin.
3. Yayına çıkmadan önce OOM (Out Of Memory) sonlandırma durumunda konteynerin yeniden başlama süresini ölçün.
4. Çekirdek panikleri, disk doluluk krizleri ve zombi süreçler için operasyon kılavuzları hazırlayın.

## Yaygın Hatalar

> Projenin erken safhalarında aşırı karmaşık orkestrasyon katmanları kurmaktan kaçının. Doğru yönetilen sade sanal makineler veya tekil Docker konteynerleri, erken getirilmiş karmaşık sistemleri her zaman geride bırakır.

- Konteynerlerde kök (root) kullanıcısı ile çalışarak çekirdek kaçış (kernel breakout) açıklarına davetiye çıkarmak.
- VM’leri tek tek manuel yöneterek yapılandırma sapmasına (drift) neden olmak.
- Bellek tüketimi tepe noktasına ulaştığında pod çöküşlerini haber verecek alarmların bulunmaması.

## Sonuç

**Konteyner vs VM: Hangisi Ne Zaman**, iş yükünün güvenlik gereksinimleri ve kaynak ihtiyacına göre rasyonel seçim yapan ekipleri ödüllendirir. Yukarıdaki kontrol listesiyle başlayın, her hafta bir sürtünmeyi otomatikleştirin ve altyapınızı sağlamlaştırın.
