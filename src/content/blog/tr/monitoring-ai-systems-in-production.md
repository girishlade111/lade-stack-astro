---
title: "Üretimde YZ Sistemlerini İzlemek"
description: "Değerlendirme ve korkuluklarla YZ özelliklerinin kalite, kayma, maliyet ve gecikmesini takip."
pubDate: 2024-12-08
author: "Girish Lade"
category: "AI Production Systems"
readTime: 10
coverImage: "/blog-covers/ai-production.svg"
featured: false
tags: ["İzleme (Monitoring)", "LLM", "Gözlemlenebilirlik"]
---

## Giriş

Üretim ortamındaki yapay zekâ (YZ) ve büyük dil modeli (LLM) özelliklerinde yanıt kalitesi, model kayması (drift), belirteç (token) maliyeti ve p99 gecikmesini sürekli değerlendirme döngüleri (evals) ve güvenlik bariyerleri (guardrails) ile izleme rehberi. Bu yazıda kavramlar, metrikler ve hemen devreye alabileceğiniz adımlar ele alınmaktadır.

## Neden Önemli?

- **Geliştirici Hızı**: Kullanıcı şikayetlerini beklemeden model çıktılarındaki bozulmaları anında tespit ederek hızla müdahale etme.
- **Sistem Güvenilirliği**: İstem dışı komut enjeksiyonlarını (prompt injection) ve toksik/yanlış yanıtları sınırda engelleyen koruma sağlama.
- **Maliyet Kontrolü**: Kullanıcı veya servis bazında belirteç tüketimini gerçek zamanlı izleyerek bütçe aşımı sürprizlerini önleme.

## Temel Kavramlar

### 1. En Küçük Çalışan Dilimden Başlayın

Tüm telemetriyi tek seferde kurmak yerine, dikey ve en kritik YZ özelliğine odaklanın. **Üretimde YZ Sistemlerini İzlemek** bağlamında bu, kullanıcıya sunulan tek bir LLM yanıtı için gecikme, belirteç sayısı ve kullanıcı geri bildirimini (beğenme/beğenmeme) kaydedip izlemektir.

### 2. Başarı Yolunu Geniş Tutun

Dokümantasyona güvenmek yerine OpenTelemetry izleme (tracing), otomatik güvenlik korkulukları (guardrails) ve dayanıklılık mekanizmaları benimseyin:

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

1. Tüm LLM çağrılarına istek ID’si, kullanılan model sürümü ve belirteç tüketim sayaçlarını ekleyin.
2. Çıktı doğruluğunu kontrol eden hafif bir kurallar katmanı (hallucination / PII dedektörü) kurun.
3. Yayına çıkmadan önce yüksek yük altında sağlayıcı hız sınırı (rate limit) durumundaki geri çekilme politikasını test edin.
4. Model sağlayıcı kesintileri, fahiş fatura uyarıları ve komut enjeksiyonu dalgaları için operasyon kılavuzları hazırlayın.

## Yaygın Hatalar

> Gözlemlenebilirlik kurarken sisteminize model yanıtından daha uzun süren hantal ara katmanlar eklemekten kaçının. Hafif asenkron telemetri, her zaman ağır senkron denetleyicilerden daha iyidir.

- Kullanıcı komutlarını ve model yanıtlarını düz metin olarak kaydedip gizli müşteri verilerini (PII) ifşa etmek.
- Model yanıtlarındaki sessiz kalite düşüşünü (quality drift) izlemeyip kullanıcıların platformu terk etmesine neden olmak.
- Belirteç harcama oranında saatlik sıçramaları haber veren bütçe alarmları kurmamak.

## Sonuç

**Üretimde YZ Sistemlerini İzlemek**, modellerin dinamik ve olasılıksal doğasını sürekli ölçümle evcilleştiren ekiplere kararlılık kazandırır. Yukarıdaki kontrol listesini uygulayın, her hafta bir izleme metriğini devreye alın ve yapay zekânızı güvenle ölçekleyin.
