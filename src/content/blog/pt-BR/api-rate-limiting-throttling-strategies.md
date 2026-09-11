---
title: "Rate limiting e throttling em APIs"
description: "Token buckets e quotas que protegem a API sem punir bons clientes."
pubDate: 2024-11-05
relatedApps: ["api-testing"]
author: "Girish Lade"
category: "API Design & Scaling"
readTime: 8
coverImage: "/blog-covers/api-design.svg"
featured: false
tags: ["Rate Limiting", "API", "Confiabilidade"]
---

## Introdução

Como implementar algoritmos de Token Bucket, Leaky Bucket, Sliding Window e cotas por tenant para defender seus serviços contra sobrecargas sem prejudicar requisições de clientes legítimos. Este guia aborda princípios de design, trade-offs técnicos e uma implementação robusta pronta para o ambiente de produção.

## Por que isso importa

- **Velocidade de desenvolvimento**: centraliza políticas de proteção de tráfego, evitando que cada time reinvente mecanismos de limitação de taxa em seus serviços.
- **Confiabilidade**: blinda bancos de dados e serviços downstream contra tempestades de tráfego malicioso ou clientes presos em loops infinitos.
- **Controle de custos**: estabelece limites firmes de consumo em endpoints caros, evitando explosões na fatura de computação serverless.

## Conceitos fundamentais

### 1. Comece pelo menor corte funcional

Em vez de criar uma malha de governança de cotas para toda a empresa, comece com um corte vertical simples. Para **Rate limiting e throttling em APIs**, isso significa aplicar uma regra de limite de taxa baseada em Redis para o endpoint mais vulnerável, acompanhada de métricas claras.

### 2. Amplie o caminho para o sucesso

Forneça cabeçalhos padronizados (`RateLimit-Limit`, `RateLimit-Remaining`, `Retry-After`) para orientar clientes sobre quando e como repetir requisições com segurança:

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

### 3. Meça o que realmente importa

| Métrica | Meta inicial recomendada |
| --- | --- |
| Latência p95 | < 300 ms |
| Queima de error budget | < 2% / 30 dias |
| Frequência de deploy | Diária |
| Tempo de rollback | < 10 min |

## Checklist de produção

1. Inclua identificadores de cliente (API key ou IP) e status de cota nos logs estruturados.
2. Configure feature flags para flexibilizar limites de clientes críticos durante incidentes sem exigir novo deploy.
3. Teste a resiliência do cache Redis e comportamento fail-open sob rajadas extremas de tráfego sintético.
4. Mantenha procedimentos documentados para lidar com incidentes de ataque DDoS, saturação do Redis e bloqueios acidentais.

## Erros comuns

> Não adicione motores de precificação ou cotas ultra-dinâmicas antes de validar a volumetria real da API. Contadores simples com expiração bem configurada superam algoritmos excessivamente engenhosos.

- Utilizar contadores locais na memória de instâncias distribuídas atrás de um load balancer, perdendo a visão global do limite.
- Responder com status HTTP 500 em vez de 429 Too Many Requests quando a cota do cliente for atingida.
- Deixar de monitorar a taxa de respostas 429 para alertar sobre anomalias no comportamento de clientes integrados.

## Conclusão

**Rate limiting e throttling em APIs** protege a estabilidade das plataformas digitais sem sacrificar a experiência de uso de desenvolvedores e clientes. Comece aplicando o checklist sugerido, otimize uma política de tráfego por vez e garanta a perenidade dos seus serviços.
