---
title: "OWASP Top 10: Eksiksiz Azaltma Rehberi"
description: "10 riski de açıklıklı ve yamalı kod örnekleriyle bugünden uygulayın."
pubDate: 2024-12-05
author: "Girish Lade"
category: "Security in Web Apps"
readTime: 14
coverImage: "/blog-covers/security.svg"
featured: true
tags: ["OWASP", "Güvenlik", "Web"]
---

## Giriş

Bozuk erişim kontrolünden (Broken Access Control) enjeksiyon açıklarına ve güvenlik yanlış yapılandırmalarına kadar OWASP Top 10 listesindeki kritik risklerin savunma stratejileri. Bu rehberde kavramlar, savunmasız kod ve düzeltilmiş güvenli kod örnekleri ve üretime hemen uygulayabileceğiniz adımlar ele alınmaktadır.

## Neden Önemli?

- **Geliştirici Hızı**: Güvenlik kontrollerini (SAST/DAST) geliştirme sürecinin en başına (shift-left) çekerek yayın öncesi güvenlik tıkanıklıklarını önler.
- **Sistem Güvenilirliği**: Yetkisiz veri sızıntılarını, ayrıcalık yükseltme (privilege escalation) saldırılarını ve veri bozulmalarını engeller.
- **Maliyet Kontrolü**: Güvenlik ihlallerinin doğuracağı devasa hukuki cezaları, itibar kaybını ve acil yama operasyon maliyetlerini ortadan kaldırır.

## Temel Kavramlar

### 1. En Küçük Çalışan Dilimden Başlayın

Tüm uygulamayı bir gecede baştan yazmak yerine, en kritik saldırı yüzeyi olan dikey bir bileşene odaklanın. **OWASP Top 10: Eksiksiz Azaltma Rehberi** bağlamında bu, kimlik ve oturum yönetimini sıkılaştırıp otomatik testler ve gözlemlenebilirlikle korumaktır.

### 2. Başarı Yolunu Geniş Tutun

Dokümantasyona güvenmek yerine parametreli sorgular (ORM), güvenli HTTP başlıkları (CSP, HSTS) ve dayanıklılık mekanizmaları benimseyin:

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

1. Tüm hassas işlemler için IP ve kullanıcı bağlamı içeren kurcalamaya karşı korumalı denetim günlükleri (audit logging) tutun.
2. Bağımlılık açıklarını otomatik denetleyen araçları (Dependabot, Snyk) CI hattına zorunlu kontrol olarak ekleyin.
3. Yayına çıkmadan önce otomatik DAST taramaları ve yetkilendirme sınır testleri çalıştırın.
4. Yetkisiz erişim teşebbüsleri, şüpheli token kullanımı ve SQL injection alarmları için operasyon kılavuzları hazırlayın.

## Yaygın Hatalar

> Kendi şifreleme veya kimlik doğrulama protokollerinizi sıfırdan yazmaya kalkışmaktan kaçının. Sektör standardı açık kütüphaneler ve güvenliği test edilmiş araçlar, ev yapımı güvenlik çözümlerini her zaman geride bırakır.

- İstemci tarafından gönderilen kullanıcı kimliklerine körü körüne güvenip nesne düzeyinde yetki kontrolü (IDOR/BOLA) yapmamak.
- Veritabanı sorgularında dize birleştirme (string concatenation) kullanarak SQL injection kapısı bırakmak.
- Güvenlik duvarı (WAF) kural ihlallerini ve 401/403 hata artışlarını izleyen alarmlar tanımlamamak.

## Sonuç

**OWASP Top 10: Eksiksiz Azaltma Rehberi**, güvenliği bir son kontrol noktası değil, sürekli bir mühendislik alışkanlığı olarak uygulayan ekipleri korur. Yukarıdaki kontrol listesini uygulayın, her hafta bir zafiyet sınıfını kapatın ve ürününüzü güvenceye alın.
