---
title: "Alana Özgü Görevler için LLM İnce Ayarı"
description: "Komut mu ince ayar mı, veri seti nasıl hazırlanır, bütçe dostu LoRA akışları."
pubDate: 2024-08-18
author: "Girish Lade"
category: "Generative AI"
readTime: 11
coverImage: "/blog-covers/generative-ai.svg"
featured: false
tags: ["İnce Ayar", "LoRA", "LLM"]
---

## Giriş

Ne zaman komut mühendisliği (prompting) ne zaman ince ayar (fine-tuning) tercih edilmeli, yüksek kaliteli eğitim veri setleri nasıl filtrelenir ve LoRA (Düşük Sıralı Uyarlama) ile bütçe dostu model uyarlama hatları nasıl kurulur? Bu rehberde kavramlar, donanım gereksinimleri ve üretime hazır pratik adımlar ele alınmaktadır.

## Neden Önemli?

- **Geliştirici Hızı**: Karmaşık komut dizgileri yerine modelin ağırlıklarına doğrudan uzmanlık kazandırarak komut gecikmesini ve belirteç (token) maliyetlerini düşürür.
- **Sistem Güvenilirliği**: Modelin yapılandırılmış JSON veya özel alan formatlarına %99+ oranında kesin uyum sağlamasını garanti eder.
- **Maliyet Kontrolü**: Tüm model ağırlıklarını eğitmek yerine LoRA adaptörlerini eğiterek GPU kiralama giderlerini %90’a varan oranda azaltır.

## Temel Kavramlar

### 1. En Küçük Çalışan Dilimden Başlayın

Yüz binlerce örnek toplamadan önce, temiz ve doğrulanmış 100-200 örnekli dikey bir veri setiyle başlayın. **Alana Özgü Görevler için LLM İnce Ayarı** bağlamında bu, LoRA ile hızlı bir adaptör eğitip temel kıyaslama (benchmark) metriklerini ilk günden gözlemlemektir.

### 2. Başarı Yolunu Geniş Tutun

Dokümantasyona güvenmek yerine veri doğrulama şemaları, katı değerlendirme kriterleri ve dayanıklılık şablonları kullanın:

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

1. Eğitim ve doğrulama veri setlerinin birbiriyle çakışmadığından (data contamination) emin olan otomatik kontroller kurun.
2. Adaptör ağırlıklarını model kayıt defterinde (Model Registry) net versiyon etiketleriyle saklayın.
3. Yayına çıkmadan önce baz model ile ince ayarlı modelin doğruluk ve halüsinasyon oranlarını kör testle karşılaştırın.
4. Çıkarım (inference) motoru bellek yetersizliği, GPU OOM ve yanıt şeması bozulmaları için operasyon kılavuzları hazırlayın.

## Yaygın Hatalar

> Komut mühendisliği ve RAG ile çözülebilecek basit bilgi arama problemlerinde erkenden ince ayar sürecine girişip operasyon yükü yaratmaktan kaçının. İyi tasarlanmış bağlam enjeksiyonu, erken yapılmış amatörce ince ayarları her zaman geride bırakır.

- Kalitesiz, gürültülü veya sentetik olarak kontrol edilmemiş verilerle eğitim yaparak modelin genel akıl yürütme yeteneğini çökertmek (catastrophic forgetting).
- Çıkarım sırasında adaptör yükleme gecikmelerini ve GPU bellek ayak izini hesaplamamak.
- Üretimde model yanıt doğruluğunu ve belirteç tüketim hızını izleyen telemetriyi atlamak.

## Sonuç

**Alana Özgü Görevler için LLM İnce Ayarı**, verinin kalitesine odaklanan ve iteratif değerlendirme döngüleri işleten ekipleri ödüllendirir. Yukarıdaki kontrol listesiyle başlayın, her hafta bir veri kümesini temizleyin ve özel yapay zekâ modelinizi yetkinleştirin.
