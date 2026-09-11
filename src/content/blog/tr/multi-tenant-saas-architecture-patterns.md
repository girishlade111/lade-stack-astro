---
title: "Çok Kiracılı SaaS Mimari Kalıpları"
description: "Silo, havuz ve köprü kiracılık modellerinde izolasyon, maliyet ve ölçeklenebilirlik."
pubDate: 2024-08-30
author: "Girish Lade"
category: "SaaS Architecture"
readTime: 10
coverImage: "/blog-covers/saas-architecture.svg"
featured: false
tags: ["Çok Kiracılı", "SaaS", "Mimari"]
---

## Giriş

Silo (ayrılmış), Havuz (paylaşımlı) ve Köprü (hibrit) modellerini veri izolasyonu, altyapı maliyetleri ve elastik ölçeklenebilirlik açısından karşılaştırıyoruz. Bu rehberde temel kavramlar, mimari ödünleşimler ve doğrudan üretime uygulayabileceğiniz bir iş akışı ele alınmaktadır.

## Neden Önemli?

- **Geliştirici Hızı**: Standart bir kiracı bağlamı (Tenant Context) enjeksiyonu sayesinde her sorguda kiracı ID'si unutma korkusunu yok eder.
- **Sistem Güvenilirliği**: Tek bir müşterinin aşırı trafik üretmesiyle diğer müşterilerin etkilenmesi anlamına gelen "gürültücü komşu" (Noisy Neighbor) sorununu engeller.
- **Maliyet Kontrolü**: Kaynakları ortak havuzda toplayarak müşteri başına düşen marjinal işlemci ve bellek maliyetlerini düşürür.

## Temel Kavramlar

### 1. En Küçük Çalışan Dilimden Başlayın

Erkenden karmaşık veritabanı parçalamalarına (sharding) girmeden önce, uçtan uca çalışan dikey bir dilim oluşturun. **Çok Kiracılı SaaS Mimari Kalıpları** bağlamında bu, tek bir veritabanı içinde Tenant ID bağlamı ve ilk günden gözlemlenebilirlik sağlamak demektir.

### 2. Başarı Yolunu Geniş Tutun

Uygulama kodundaki WHERE şartlarına güvenmek yerine veritabanı düzeyinde Satır Düzeyinde Güvenlik (RLS) politikalarını varsayılan olarak etkinleştirin. Üretime hazır minimum başlangıç örneği:

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

1. Kiracı ID'si ve istek kimliğini (Request ID) içeren yapılandırılmış günlük kaydı ekleyin.
2. Belirli kiracılara özel özellikleri kademeli açabilen bayraklar (Feature Flag) tanımlayın.
3. Yayına çıkmadan önce büyük bir kiracının aşırı veri yazma senaryosunu simüle edin.
4. En yaygın üç hata senaryosu (kiracı veri sızıntısı şüphesi, kota tükenmesi, şema geçiş gecikmesi) için operasyon kılavuzları hazırlayın.

## Yaygın Hatalar

> Gerçek kullanıcılarınız olmadan önce platformu aşırı karmaşıklaştırmaktan kaçının. İyi seçilmiş sade teknolojiler, erken seçilmiş gösterişli teknolojileri her zaman geride bırakır.

- Veritabanında RLS açmadan yalnızca yazılım katmanındaki filtrelerle izolasyon sağlamaya çalışmak.
- Önbellek (Redis) anahtarlarına Tenant ID öneki eklemeyi unutup verileri karıştırmak.
- Gece yarısı nöbetçiyi uyandıracak kiracı kota tükenmesi uyarılarının bulunmaması.

## Sonuç

**Çok Kiracılı SaaS Mimari Kalıpları**, küçük ve gözlemlenebilir adımlarla ilerleyen ekipleri ödüllendirir. Yukarıdaki kontrol listesiyle başlayın, her hafta bir darboğazı otomatikleştirin ve mühendislik kazanımlarınızı katlayın.
