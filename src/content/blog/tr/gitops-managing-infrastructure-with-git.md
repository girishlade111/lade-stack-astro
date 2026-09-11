---
title: "GitOps: Altyapıyı Git ile Yönetmek"
description: "Bildirimli altyapı, PR incelemesi, sapma tespiti ve otomatik eşitleme."
pubDate: 2024-11-25
author: "Girish Lade"
category: "DevOps & CI/CD"
readTime: 9
coverImage: "/blog-covers/devops.svg"
featured: false
tags: ["GitOps", "ArgoCD", "Kubernetes"]
---

## Giriş

Bildirimsel (declarative) altyapı tanımları, Pull Request (PR) onay süreçleri, otomatik yapılandırma sapması tespiti (drift detection) ve Git tabanlı mutabakat (reconciliation) ile modern GitOps operasyonları kurma rehberi. Bu yazıda kavramlar, operasyonel ödünleşimler ve üretime hazır pratik adımlar ele alınmaktadır.

## Neden Önemli?

- **Geliştirici Hızı**: Mühendislerin küme erişim izinlerine ihtiyaç duymadan tanıdık Git PR iş akışıyla güvenle dağıtım yapmasını sağlar.
- **Sistem Güvenilirliği**: Git deposunu tek gerçeklik kaynağı (SSOT) kabul ederek kümede yapılan manuel hataları otomatik olarak düzeltir.
- **Maliyet Kontrolü**: Tüm ortamların Git üzerinde tanımlı olması sayesinde geçici test ortamlarının kolayca oluşturulup iş bitiminde silinmesini sağlar.

## Temel Kavramlar

### 1. En Küçük Çalışan Dilimden Başlayın

Tüm şirket altyapısını bir gecede GitOps’a taşımak yerine, dikey ve risksiz bir mikroservisle başlayın. **GitOps: Altyapıyı Git ile Yönetmek** bağlamında bu, tek bir Kubernetes Deployment nesnesini ArgoCD veya Flux ile eşitleyip gözlemlenebilirlikle izlemektir.

### 2. Başarı Yolunu Geniş Tutun

Dokümantasyona güvenmek yerine otomatik linting (kubeconform), politika motorları (Kyverno / OPA) ve dayanıklılık şablonları belirleyin:

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

1. Eşitleme (sync) olaylarını ve PR ilişkilendirmelerini içeren yapılandırılmış günlükleme sağlayın.
2. Gizli anahtarları (secrets) Git’e açık metin olarak koymak yerine Sealed Secrets veya External Secrets Operator ile yönetin.
3. Yayına çıkmadan önce Git eşitleme operatörünün ağ kesintisi altındaki davranışını test edin.
4. Eşitleme kilitlenmeleri (sync loops), CRD sürüm uyumsuzlukları ve yetki hataları için operasyon kılavuzları hazırlayın.

## Yaygın Hatalar

> Altyapı manifestolarını yönetirken aşırı karmaşık Helm/Kustomize iç içe geçmiş şablonlar oluşturmaktan kaçının. Okunabilir ve sade manifestolar, karmaşık şablon kalıplarını her zaman geride bırakır.

- Acil durumlarda `kubectl edit` veya doğrudan küme üzerinde manuel değişiklik yapıp Git deposunu güncellemeyi unutmak.
- Üretim ve geliştirme manifestolarını aynı dallarda (branch) yöneterek yanlışlıkla üretime eşitleme yapmak.
- Eşitleme başarısızlıklarını (Sync Failed) Slack veya PagerDuty üzerinden bildiren alarmlar kurmamak.

## Sonuç

**GitOps: Altyapıyı Git ile Yönetmek**, altyapı değişikliklerini yazılım geliştirme disipliniyle ele alan ekiplere eşsiz bir denetlenebilirlik ve hız kazandırır. Yukarıdaki kontrol listesiyle başlayın, her hafta bir altyapı akışını otomatikleştirin ve güvenliği artırın.
