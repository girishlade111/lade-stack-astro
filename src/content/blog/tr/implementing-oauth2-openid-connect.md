---
title: "OAuth2 ve OpenID Connect Uygulamak"
description: "PKCE’li yetkilendirme kodu, jeton saklama, döndürme ve çıkış — ilk seferde doğru."
pubDate: 2024-12-06
author: "Girish Lade"
category: "Security in Web Apps"
readTime: 11
coverImage: "/blog-covers/security.svg"
featured: false
tags: ["OAuth2", "OIDC", "Kimlik Doğrulama"]
---

## Giriş

PKCE (Proof Key for Code Exchange) korumalı yetkilendirme kodu akışı (Authorization Code Flow), güvenli jeton (token) saklama stratejileri, yenileme jetonu döndürme (refresh token rotation) ve uçtan uca oturum kapatma süreçlerini ilk seferde hatasız kurgulama rehberi. Bu yazıda OAuth 2.0 ve OIDC kavramları, güvenlik açıkları ve üretime hazır pratik kalıplar ele alınmaktadır.

## Neden Önemli?

- **Geliştirici Hızı**: Standart OIDC kütüphaneleri ve kimlik sağlayıcıları (IdP) kullanarak her projede özel kimlik mekanizması yazma yükünü ortadan kaldırır.
- **Sistem Güvenilirliği**: Yenileme jetonlarının tek kullanımlık olmasını sağlayarak çalınan kimlik bilgilerinin kötüye kullanımını engeller.
- **Maliyet Kontrolü**: Güvenlik açıkları kaynaklı hesap ele geçirme (Account Takeover - ATO) vakalarını ve müşteri destek maliyetlerini önler.

## Temel Kavramlar

### 1. En Küçük Çalışan Dilimden Başlayın

Tüm SSO ve kurumsal federasyon akışlarını aynı anda kurmak yerine, dikey ve doğrulanabilir bir akışla başlayın. **OAuth2 ve OpenID Connect Uygulamak** bağlamında bu, tek bir istemci için PKCE ile Authorization Code akışını çalıştırıp gözlemlenebilirlikle izlemektir.

### 2. Başarı Yolunu Geniş Tutun

Dokümantasyona güvenmek yerine güvenli çerez bayrakları (`HttpOnly`, `Secure`, `SameSite=Strict`), şifreleme yardımcıları ve dayanıklılık şablonları benimseyin:

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

1. Yetkilendirme kodu değişimlerinde ve jeton yenilemelerinde şüpheli IP değişikliklerini kaydeden yapılandırılmış günlükleme kurun.
2. Jetonları asla tarayıcının `localStorage` veya `sessionStorage` alanında tutmayın; `HttpOnly` çerezler veya bellek içi durum kullanın.
3. Yayına çıkmadan önce yenileme jetonunun mükerrer kullanımında tüm jeton ailesini geçersiz kılan mekanizmayı test edin.
4. Kimlik sağlayıcı (IdP) kesintisi, JWKS anahtar döndürme gecikmesi ve imza doğrulama arızaları için operasyon kılavuzları hazırlayın.

## Yaygın Hatalar

> Kendi şifreleme ve yetkilendirme motorunuzu yazmaya kalkışmaktan kaçının. Kanıtlanmış açık protokoller ve test edilmiş kütüphaneler, ev yapımı kimlik çözümlerini her zaman geride bırakır.

- Tek sayfa uygulamalarında (SPA) PKCE kullanmadan yetkilendirme kodu akışı çalıştırmak veya güvensiz örtülü (implicit) akışı sürdürmek.
- JWT imzasını doğrulamadan sadece gövde (payload) verisini çözümleyip kullanıcının kimliğini kabul etmek (`alg: none` açığı).
- Kimlik sağlayıcı yanıt sürelerindeki artış ve başarısız jeton yenileme sıklığı için uyarı kurmamak.

## Sonuç

**OAuth2 ve OpenID Connect Uygulamak**, protokolün güvenlik gereksinimlerini eksiksiz uygulayan ekiplere sarsılmaz bir kimlik altyapısı sağlar. Yukarıdaki kontrol listesini uygulayın, her hafta bir kimlik akışını sağlamlaştırın ve kullanıcılarınızı koruyun.
