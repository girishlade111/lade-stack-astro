---
title: "AWS, Azure ve GCP ile Çoklu Bulut"
description: "Çoklu bulut ne zaman kazandırır, kapsayıcı ve IaC ile taşınabilirlik nasıl korunur?"
pubDate: 2024-11-18
author: "Girish Lade"
category: "Cloud Computing"
readTime: 11
coverImage: "/blog-covers/cloud-computing.svg"
featured: false
tags: ["Çoklu Bulut", "AWS", "Azure", "GCP"]
---

## Giriş

Çoklu bulut (multi-cloud) stratejilerinin gerçekten ne zaman mantıklı olduğu, konteynerler ve Kod Olarak Altyapı (IaC) ile taşınabilirliğin nasıl korunacağı ve aşırı soyutlamaların nerede zarar verdiği üzerine kapsamlı bir rehber. Bu yazıda kavramlar, operasyonel zorluklar ve üretime hazır pratik adımlar ele alınmaktadır.

## Neden Önemli?

- **Geliştirici Hızı**: Açık standartlar (Kubernetes, OCI konteynerleri) kullanarak ekiplerin tek bir bulut sağlayıcısının özel API’lerine bağımlı kalmadan aynı bilgi birikimiyle çalışmasını sağlar.
- **Sistem Güvenilirliği**: Bölgesel veya sağlayıcı düzeyindeki genel kesintilere karşı esneklik ve düzenleyici regülasyonlara (veri egemenliği vb.) uyumluluk kazandırır.
- **Maliyet Kontrolü**: Tek bir sağlayıcıya kilitlenmeyerek (vendor lock-in) fiyat müzakerelerinde pazarlık gücünü korur.

## Temel Kavramlar

### 1. En Küçük Çalışan Dilimden Başlayın

Aynı anda tüm servisleri üç farklı bulutta çalıştırmaya çalışmak yerine, dikey ve taşınabilir bir bileşenle başlayın. **AWS, Azure ve GCP ile Çoklu Bulut** bağlamında bu, Terraform veya Pulumi ile tanımlanmış, konteynerize edilmiş tek bir servisi bağımsız bir sağlayıcıda ayağa kaldırmaktır.

### 2. Başarı Yolunu Geniş Tutun

Dokümantasyona güvenmek yerine sağlayıcıdan bağımsız CI/CD boru hatları, standart sağlık kontrolleri ve dayanıklılık mekanizmaları kurun:

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

1. Bulutlar arası ağ iletişiminde giden veri transferini (egress bandwidth) izleyen merkezi bir telemetri kurun.
2. Kimlik yönetimi için bulutlar arası OpenID Connect (OIDC) ve federatif roller kullanarak statik anahtarları kaldırın.
3. Yayına çıkmadan önce bir sağlayıcıdan diğerine yük aktarımını (failover) gerçek felaket senaryolarıyla test edin.
4. Çapraz bulut ağ gecikmesi, yönlendirme döngüleri ve IAM yetki uyuşmazlıkları için operasyon kılavuzları hazırlayın.

## Yaygın Hatalar

> Ekiplerinizin boyutu yetersizken sadece “güvenli hissettirdiği” için çoklu buluta geçip operasyonel karmaşıklığı üçe katlamaktan kaçının. Tek bir sağlayıcıda mükemmel yönetilen bir altyapı, aceleyle bölünmüş çoklu buluttan her zaman daha güvenilirdir.

- Bulutlar arası veri aktarım maliyetlerini (cross-cloud egress) küçümseyip ay sonunda astronomik faturalarla karşılaşmak.
- En küçük ortak paydaya inerek sağlayıcıların sunduğu managed servislerin güçlü taraflarından hiç faydalanamamak.
- Çapraz bulut gecikmelerini ve DNS senkronizasyon sürelerini hesaba katmamak.

## Sonuç

**AWS, Azure ve GCP ile Çoklu Bulut**, soyutlamayı makul seviyede tutan ve somut regülasyon veya maliyet avantajları doğrultusunda hareket eden ekipleri ödüllendirir. Yukarıdaki kontrol listesiyle başlayın, her hafta bir bağımlılığı standartlaştırın ve esnekliğinizi artırın.
