---
title: "Üretim İş Yükleri için VM Performansı"
description: "CPU sabitleme, NUMA, depolama kuyrukları ve gürültücü komşu savunmasıyla öngörülebilir VM."
pubDate: 2024-11-22
author: "Girish Lade"
category: "Virtual Machines"
readTime: 9
coverImage: "/blog-covers/virtual-machines.svg"
featured: false
tags: ["VM", "Performans", "Ayar (Tuning)"]
---

## Giriş

Çekirdek sabitleme (CPU pinning), NUMA topolojisi optimizasyonu, disk I/O kuyruk derinliği ayarları ve gürültücü komşu (noisy neighbor) etkilerine karşı savunma mekanizmalarıyla sanal makinelerde (VM) öngörülebilir ve kararlı performans elde etme rehberi. Bu yazıda kavramlar, operasyonel ödünleşimler ve doğrudan uygulayabileceğiniz adımlar ele alınmaktadır.

## Neden Önemli?

- **Geliştirici Hızı**: Beklenmeyen I/O gecikmeleri veya CPU kısma (throttling) sorunlarını ortadan kaldırarak servislerin istikrarlı çalışmasını sağlar.
- **Sistem Güvenilirliği**: p99 gecikmelerini tırmandıran bağlam değiştirme (context switch) yükünü ve bellek erişim tıkanıklıklarını önler.
- **Maliyet Kontrolü**: Daha büyük VM örnekleri satın almak yerine mevcut donanımı tam kapasiteyle verimli kullanarak altyapı giderlerini düşürür.

## Temel Kavramlar

### 1. En Küçük Çalışan Dilimden Başlayın

Tüm sanal makine filosunu aynı anda optimize etmek yerine, yüksek gecikmeye duyarlı dikey bir iş yüküyle başlayın. **Üretim İş Yükleri için VM Performansı** bağlamında bu, veritabanı veya önbellek sunucusunda vCPU sabitleme ve NUMA düğüm eşleştirmesini yapıp gözlemlenebilirlikle ölçmektir.

### 2. Başarı Yolunu Geniş Tutun

Dokümantasyona güvenmek yerine otomatik çekirdek parametreleri (sysctl), profil ayarları (tuned) ve dayanıklılık şablonları belirleyin:

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

1. vCPU çalınma süresini (CPU steal time) ve disk kuyruk beklemesini izleyen telemetri kurun.
2. Yüksek I/O gerektiren disk bölümlerinde uygun blok kuyruk zamanlayıcısını (örn. `mq-deadline` veya `none/none`) seçin.
3. Yayına çıkmadan önce sentetik yük testleriyle (fio, sysbench) gürültücü komşu baskısı altında verimi doğrulayın.
4. Çekirdek kilitlenmeleri, aşırı bellek parçalanması ve I/O zaman aşımları için operasyon kılavuzları hazırlayın.

## Yaygın Hatalar

> Temel mimari darboğazları çözmeden sanal makine boyutunu körlemesine artırmaktan kaçının. Doğru yapılandırılmış çekirdek ayarları, kontrolsüz büyütülen sunucuları her zaman geride bırakır.

- NUMA sınırlarını aşan bellek tahsisleri yaparak CPU’nun çapraz veri yolu gecikmelerine takılmasına göz yummak.
- Bulutta paylaşımlı (burstable) örnek türlerini tepe üretim iş yüklerinde kullanıp ani CPU kesintisine uğramak.
- CPU steal oranındaki ani sıçramaları takip eden uyarı alarmları kurmamak.

## Sonuç

**Üretim İş Yükleri için VM Performansı**, donanım topolojisine saygı duyan ve ölçümlere dayalı ince ayarlar yapan ekipleri ödüllendirir. Yukarıdaki kontrol listesiyle başlayın, her hafta bir sistem darboğazını optimize edin ve verimi en üst düzeye çıkarın.
