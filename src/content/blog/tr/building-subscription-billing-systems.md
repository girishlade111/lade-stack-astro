---
title: "Abonelik Faturalama Sistemleri Kurmak"
description: "Deneme, orantılı ücret, tahsilat ve webhook’larla finansın güveneceği faturalama."
pubDate: 2024-09-12
author: "Girish Lade"
category: "SaaS Architecture"
readTime: 9
coverImage: "/blog-covers/saas-architecture.svg"
featured: false
tags: ["Faturalama", "Abonelik", "Stripe"]
---

## Giriş

Ücretsiz deneme süreleri, orantılı ücret hesaplama (Proration), başarısız ödemelerde tahsilat akışları (Dunning) ve tekilleştirilmiş (idempotent) webhook işlemleri: finans ekibinin ve bağımsız denetçilerin tam güven duyacağı sağlam bir faturalama altyapısı inşa etmek. Bu yazıda temel kavramlar, mimari ödünleşimler ve bu hafta hayata geçirebileceğiniz bir iş akışı paylaşılmaktadır.

## Neden Önemli?

- **Geliştirici Hızı**: Net durum makineleri tanımlayarak elle hesap mutabakatı ve mükerrer çekim düzeltmelerine harcanan zamanı sıfırlar.
- **Sistem Güvenilirliği**: Ödeme sağlayıcısının (Stripe vb.) geçici kesintilerine ve webhook gecikmelerine karşı tekilleştirme garantisi sunar.
- **Maliyet Kontrolü**: Otomatik tahsilat sayesinde tahsil edilemeyen gelir kayıplarını ve geri ödeme (chargeback) cezalarını azaltır.

## Temel Kavramlar

### 1. En Küçük Çalışan Dilimden Başlayın

Erkenden çok para birimli karmaşık faturalamaya girişmek yerine, uçtan uca çalışan dikey bir dilim oluşturun. **Abonelik Faturalama Sistemleri Kurmak** bağlamında bu, tek para biriminde yinelenen ödeme ve webhook ile yetki güncellemeyi ilk günden gözlemlenebilir kılmak demektir.

### 2. Başarı Yolunu Geniş Tutun

Her uç noktada rastgele webhook ayrıştırmak yerine, Event ID tabanlı tekilleştirme ve dağıtık kilit mekanizmasını standart bir ara katmanda toplayın. Üretime hazır minimum başlangıç örneği:

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

1. Müşteri ID, Abonelik ID ve Webhook Event ID içeren yapılandırılmış günlük kaydı ekleyin.
2. Fiyat tarifesi değişikliklerini anında geri alabilecek acil durum anahtarları (Feature Flag) tanımlayın.
3. Yayına çıkmadan önce kart son kullanma tarihi geçmesi, yetersiz bakiye ve plan yükseltme durumlarını sandbox ortamında test edin.
4. En yaygın üç hata senaryosu (webhook imza uyumsuzluğu, işlenmemiş olay birikmesi, mükerrer tahsilat) için operasyon kılavuzları hazırlayın.

## Yaygın Hatalar

> Gerçek kullanıcılarınız olmadan önce platformu aşırı karmaşıklaştırmaktan kaçının. İyi seçilmiş sade teknolojiler, erken seçilmiş gösterişli teknolojileri her zaman geride bırakır.

- Webhook olaylarının her zaman sırayla geleceğini varsayıp sıra dışı teslimatları yönetememek.
- İstemciden gelen ödeme başarılı sinyaline güvenip sunucu tarafında teyit almadan hizmeti açmak.
- Gece yarısı nöbetçiyi uyandıracak ödeme başarısızlığı patlaması uyarılarının bulunmaması.

## Sonuç

**Abonelik Faturalama Sistemleri Kurmak**, küçük ve gözlemlenebilir adımlarla ilerleyen ekipleri ödüllendirir. Yukarıdaki kontrol listesiyle başlayın, her hafta bir darboğazı otomatikleştirin ve mühendislik kazanımlarınızı katlayın.
