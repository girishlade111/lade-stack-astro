---
title: "BaaS Karşılaştırma: Firebase vs Supabase vs Appwrite"
description: "Kimlik doğrulama, veritabanı, fiyat ve çıkış stratejisinde üç platformun dürüst karşılaştırması."
pubDate: 2024-10-02
author: "Girish Lade"
category: "Backend as a Service"
readTime: 10
coverImage: "/blog-covers/baas.svg"
featured: false
tags: ["BaaS", "Firebase", "Supabase"]
---

## Giriş

Kimlik doğrulama (auth), veritabanı yetenekleri, fiyatlandırma modelleri ve platformdan çıkış (exit strategy) stratejileri açısından Firebase, Supabase ve Appwrite platformlarının tarafsız ve mühendislik odaklı karşılaştırması. Bu rehberde temel mimari ödünleşimler, operasyonel riskler ve üretime hazır pratik bir iş akışı ele alınmaktadır.

## Neden Önemli?

- **Geliştirici Hızı**: Hazır arka uç servisleri ve standart varsayılanlar, ekibin haftalarca sürecek altyapı işlerini ortadan kaldırır.
- **Sistem Güvenilirliği**: Nöbetçi mühendislerin gece yarısı kesintileriyle uğraşmasını önleyen, kanıtlanmış altyapı kalıpları sunar.
- **Maliyet Kontrolü**: Doğru BaaS seçimi ve bilinçli sorgu mimarisi, ay sonunda sürpriz bulut faturalarıyla karşılaşmanızı engeller.

## Temel Kavramlar

### 1. En Küçük Çalışan Dilimden Başlayın

Tüm platformu tek seferde BaaS üzerine taşımak yerine, baştan sona çalışan dikey bir dilim kurgulayın. **BaaS Karşılaştırma: Firebase vs Supabase vs Appwrite** özelinde bu, ilk günden gözlemlenebilirlik ve hata takibi içeren tek bir kritik kullanıcı akışını (örneğin kimlik doğrulama ve profil kaydı) canlıya almak demektir.

### 2. Başarı Yolunu Geniş Tutun

Dokümantasyona güvenmek yerine kurallar, şablonlar ve güvenlik sınırları belirleyin. Dayanıklı ve üretime hazır minimum başlangıç örneği:

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

1. İstek kimlikleri (Request ID) içeren yapılandırılmış günlük kaydı (structured logging) ekleyin.
2. Riskli işlev değişikliklerini anında kapatma anahtarı (kill switch) olan özellik bayraklarının arkasına alın.
3. Canlıya çıkmadan önce veritabanı bağlantı sınırlarını ve kritik yolları yük testine tabi tutun.
4. En sık karşılaşılan üç arıza senaryosu (ağ kesintisi, kota aşımı, yetkilendirme hatası) için operasyon kılavuzları (runbooks) hazırlayın.

## Yaygın Hatalar

> Henüz gerçek kullanıcılarınız yokken platformunuzu aşırı karmaşıklaştırmaktan kaçının. Amaca uygun seçilmiş sade teknolojiler, erkenden benimsenmiş cafcaflı teknolojileri her zaman geride bırakır.

- Test (staging) ortamı ile üretim ortamı yapılandırmasının uyuşmaması.
- Gizli anahtarları ve servis rolü jetonlarını istemci tarafı kodlarda veya sohbet günlüklerinde saklamak.
- Gece saatlerinde nöbetçiyi uyaracak gecikme ve hata eşiği alarmlarını kurmamak.

## Sonuç

**BaaS Karşılaştırma: Firebase vs Supabase vs Appwrite**, küçük ve gözlemlenebilir adımlarla ilerleyen ekipleri başarıya ulaştırır. Yukarıdaki kontrol listesini uygulayın, her hafta bir operasyonel sürtünmeyi otomatikleştirin ve mühendislik verimliliğinizi katlayın.
