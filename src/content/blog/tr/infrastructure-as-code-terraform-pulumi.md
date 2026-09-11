---
title: "Terraform ve Pulumi ile Kod Olarak Altyapı"
description: "HCL mi gerçek dil mi, durum yönetimi ve modül tasarımı."
pubDate: 2024-12-01
author: "Girish Lade"
category: "DevOps & CI/CD"
readTime: 10
coverImage: "/blog-covers/devops.svg"
featured: false
tags: ["IaC", "Terraform", "Pulumi"]
---

## Giriş

Terraform’un bildirimsel HCL (HashiCorp Configuration Language) yaklaşımı ile Pulumi’nin genel amaçlı programlama dilleri (TypeScript, Python, Go) kullanan yapısı, durum dosyası (state file) yönetimi ve yeniden kullanılabilir modül tasarımı üzerine derinlemesine bir analiz. Bu rehberde kavramlar, ekipler arası ödünleşimler ve üretime hazır pratik kalıplar sunulmaktadır.

## Neden Önemli?

- **Geliştirici Hızı**: Şablonlanmış altyapı modülleri ile yeni bir ortam veya servisi dakikalar içinde tutarlı şekilde provizyon etme.
- **Sistem Güvenilirliği**: İnsan hatasına açık manuel bulut konsolu tıklamalarını engelleyerek ortamlar arası tam eşliği sağlama.
- **Maliyet Kontrolü**: Altyapıyı kod gibi versiyonlayarak ihtiyaç duyulmayan test kaynaklarını tek bir komutla (`destroy`) imha edebilme.

## Temel Kavramlar

### 1. En Küçük Çalışan Dilimden Başlayın

Tüm şirket altyapısını devasa bir monolitik state içinde toplamak yerine, modüler ve dikey bir kaynak grubuyla başlayın. **Terraform ve Pulumi ile Kod Olarak Altyapı** bağlamında bu, VPC ağı, depolama kovası veya bağımsız bir Kubernetes kümesini gözlemlenebilirlikle izleyerek kodlamaktır.

### 2. Başarı Yolunu Geniş Tutun

Dokümantasyona güvenmek yerine otomatik plan incelemeleri, statik güvenlik analizleri (Checkov, tfsec) ve dayanıklılık şablonları belirleyin:

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

1. Durum (State) dosyasını mutlaka uzak depolamada (S3/GCS) şifreli ve durum kilitleme (DynamoDB lock) aktif şekilde tutun.
2. Hassas değişkenleri (şifreler, özel anahtarlar) asla açık metin olarak kod reposuna koymayın.
3. Yayına çıkmadan önce `plan` veya `preview` çıktılarını PR yorumu olarak otomatik yayınlayan CI adımları ekleyin.
4. Durum kilitlenme arızaları, kaynak içe aktarma (import) çakışmaları ve sağlayıcı (provider) yükseltme hataları için operasyon kılavuzları hazırlayın.

## Yaygın Hatalar

> Henüz basit bir altyapınız varken aşırı dinamik ve karmaşık meta-programlama kalıplarıyla modülleri okunaksız hale getirmekten kaçının. Sade ve anlaşılır kod, aşırı akıllı soyutlamaları her zaman geride bırakır.

- Tek bir `terraform.tfstate` dosyasına yüzlerce kaynak bağlayarak dağıtım sürelerini saatlere çıkarmak ve risk oluşturmak.
- Konsoldan manuel eklenen kaynakları koda aktarmayarak konfigürasyon sapmasına (drift) neden olmak.
- Altyapı planlarında yıkıcı silme işlemlerini (`destroy/recreate`) fark etmeyecek inceleme disiplinsizliği.

## Sonuç

**Terraform ve Pulumi ile Kod Olarak Altyapı**, altyapıyı yazılım mühendisliği ilkeleriyle yöneten ekiplere operasyonel güven ve hız kazandırır. Yukarıdaki kontrol listesini uygulayın, her hafta bir modülü standartlaştırın ve sağlam bir temel inşa edin.
