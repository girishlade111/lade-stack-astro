---
title: "Sıfır Kesintili Dağıtım Hatları"
description: "Mavi-yeşil, kanarya ve yuvarlanan stratejilerle kullanıcının fark etmediği dağıtımlar."
pubDate: 2024-11-28
author: "Girish Lade"
category: "DevOps & CI/CD"
readTime: 11
coverImage: "/blog-covers/devops.svg"
featured: false
tags: ["Sıfır Kesinti", "CI/CD", "DevOps"]
---

## Giriş

Mavi-yeşil (Blue-Green), kanarya (Canary), yuvarlanan güncellemeler (Rolling Updates) ve sağlık kapıları (Readiness Probes): kullanıcılara tek bir kesinti veya hata yaşatmadan çalışan güvenilir bir sıfır kesintili dağıtım hattı kurmak. Bu yazıda temel kavramlar, mimari ödünleşimler ve bu hafta hayata geçirebileceğiniz bir iş akışı paylaşılmaktadır.

## Neden Önemli?

- **Geliştirici Hızı**: Gece yarısı bakım pencerelerini ve hafta sonu mesailerini ortadan kaldırarak mesai saatleri içinde güvenle kod yayınlamayı sağlar.
- **Sistem Güvenilirliği**: Yeni sürümde bir sorun çıktığında trafiği anında eski sürüme döndüren otomatik emniyet kemerleri sunar.
- **Maliyet Kontrolü**: Kesintilerden kaynaklanan gelir kayıplarını ve SLA ihlali cezalarını baştan önler.

## Temel Kavramlar

### 1. En Küçük Çalışan Dilimden Başlayın

Karmaşık servis ağı (Service Mesh) yönlendirmelerine girmeden önce, uçtan uca çalışan dikey bir dilim oluşturun. **Sıfır Kesintili Dağıtım Hatları** bağlamında bu, tek bir mikroservis için yuvarlanan güncellemeleri ve hazırlık kontrollerini ilk günden gözlemlenebilir kılmak demektir.

### 2. Başarı Yolunu Geniş Tutun

Manuel kontrol listelerine güvenmek yerine, dağıtım hattının bizzat içine otomatik doğrulama ve geri alma mantığını ekleyin. Üretime hazır minimum başlangıç örneği:

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

1. Dağıtım sürüm etiketi ve istek kimliğini (Request ID) içeren yapılandırılmış günlük kaydı ekleyin.
2. Sorun anında yeni sürüme giden trafiği kesen acil durum anahtarları (Feature Flag) tanımlayın.
3. Yayına çıkmadan önce eski ve yeni sürümün aynı anda veritabanıyla geriye dönük uyumlu çalıştığını doğrulayın.
4. En yaygın üç hata senaryosu (hazırlık kontrolü başarısızlığı, bağlantı sızıntısı, şema uyumsuzluğu) için operasyon kılavuzları hazırlayın.

## Yaygın Hatalar

> Gerçek kullanıcılarınız olmadan önce platformu aşırı karmaşıklaştırmaktan kaçının. İyi seçilmiş sade teknolojiler, erken seçilmiş gösterişli teknolojileri her zaman geride bırakır.

- Veritabanında yıkıcı şema değişikliklerini (kolon silme vb.) kod dağıtımıyla aynı anda yapmak.
- Kapatma sinyallerini (SIGTERM) yakalamayıp çalışan istekleri yarıda kesmek (Graceful Shutdown eksikliği).
- Gece yarısı nöbetçiyi uyandıracak 5xx hata oranı artışı uyarılarının bulunmaması.

## Sonuç

**Sıfır Kesintili Dağıtım Hatları**, küçük ve gözlemlenebilir adımlarla ilerleyen ekipleri ödüllendirir. Yukarıdaki kontrol listesiyle başlayın, her hafta bir darboğazı otomatikleştirin ve mühendislik kazanımlarınızı katlayın.
