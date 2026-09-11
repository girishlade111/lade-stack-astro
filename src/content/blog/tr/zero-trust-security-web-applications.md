---
title: "Web Uygulamalarında Sıfır Güven Güvenliği"
description: "Asla güvenme, hep doğrula: kimlik-bilinçli vekiller, kısa ömürlü kimlikler, mikro bölütleme."
pubDate: 2024-12-02
author: "Girish Lade"
category: "Security in Web Apps"
readTime: 13
coverImage: "/blog-covers/security.svg"
featured: false
tags: ["Sıfır Güven", "Güvenlik", "Web Güvenliği"]
---

## Giriş

"Asla güvenme, her zaman doğrula": şirket içi yerel ağlara duyulan varsayılan güveni kaldırarak, kimlik-bilinçli vekiller (Identity-Aware Proxy), kısa ömürlü kimlik bilgileri ve mikro bölütleme (microsegmentation) ile web uygulamalarında sıfır güven güvenliğini tesis edin. Bu rehberde temel kavramlar, mimari ödünleşimler ve doğrudan üretime uygulayabileceğiniz bir iş akışı ele alınmaktadır.

## Neden Önemli?

- **Geliştirici Hızı**: Karmaşık ve sık sık kopan şirket VPN'lerini ortadan kaldırıp geliştiricilere her yerden güvenli ve hızlı tek bir web erişim noktası sağlar.
- **Sistem Güvenilirliği**: İç ağdaki tek bir sunucu ele geçirilse bile saldırganın diğer servislere yatay geçiş yapmasını (lateral movement) engeller.
- **Maliyet Kontrolü**: Güvenlik ihlallerinden doğacak devasa tazminatları ve eski donanım tabanlı ağ güvenlik cihazlarının bakım masraflarını düşürür.

## Temel Kavramlar

### 1. En Küçük Çalışan Dilimden Başlayın

Tüm şirket altyapısını bir gecede sıfır güven modeline geçirmeye çalışmadan önce, uçtan uca çalışan dikey bir dilim oluşturun. **Web Uygulamalarında Sıfır Güven Güvenliği** bağlamında bu, dahili bir yönetim panelini kimlik-bilinçli vekilin arkasına alıp ilk günden erişim loglarını toplamak demektir.

### 2. Başarı Yolunu Geniş Tutun

Geliştiricilerin elle sertifika yönetmesine güvenmek yerine, mTLS servis ağını ve kurumsal SSO'yu standart iletişim kanalı haline getirin. Üretime hazır minimum başlangıç örneği:

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

1. İstek sahibi kimliği, cihaz durumu ve istek bağlamını içeren yapılandırılmış güvenlik günlükleri toplayın.
2. Anormal konumlardan gelen istekleri anında izole edebilen ilke bayrakları (Feature Flag) tanımlayın.
3. Yayına çıkmadan önce sıkı mTLS sertifika tokalaşmalarının iç servis gecikmesine etkisini ölçün.
4. En yaygın üç güvenlik senaryosu (sızdırılan kimlik belirteci, IdP kesintisi, yetki yükseltme denemesi) için operasyon kılavuzları hazırlayın.

## Yaygın Hatalar

> Gerçek kullanıcılarınız olmadan önce platformu aşırı karmaşıklaştırmaktan kaçının. İyi seçilmiş sade teknolojiler, erken seçilmiş gösterişli teknolojileri her zaman geride bırakır.

- İç servisler arası iletişimde süresi dolmayan statik API anahtarları kullanmak.
- Şirket intranetinin güvenli olduğunu varsayarak küme içinde şifrelenmemiş HTTP trafiği taşımak.
- Gece yarısı nöbetçiyi uyandıracak kimlik doğrulama hataları patlaması uyarılarının bulunmaması.

## Sonuç

**Web Uygulamalarında Sıfır Güven Güvenliği**, küçük ve gözlemlenebilir adımlarla ilerleyen ekipleri ödüllendirir. Yukarıdaki kontrol listesiyle başlayın, her hafta bir darboğazı otomatikleştirin ve mühendislik kazanımlarınızı katlayın.
