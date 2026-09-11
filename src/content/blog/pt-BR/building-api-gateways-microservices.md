---
title: "API gateways para microsserviços"
description: "Auth, roteamento, transformação e observabilidade na borda da frota."
pubDate: 2024-11-12
relatedApps: ["api-testing"]
author: "Girish Lade"
category: "API Design & Scaling"
readTime: 10
coverImage: "/blog-covers/api-design.svg"
featured: false
tags: ["API Gateway", "Microsserviços", "Roteamento"]
---

## Introdução

Como projetar e operar gateways de API eficientes na borda de uma frota de microsserviços: consolidação de autenticação, roteamento dinâmico de tráfego, transformação leve de requisições e observabilidade unificada. Este artigo discute trade-offs arquiteturais, armadilhas comuns e práticas recomendadas para sistemas em produção.

## Por que isso importa

- **Velocidade de desenvolvimento**: desacopla preocupações transversais (CORS, SSL, rate limiting) do código de negócio de cada microsserviço.
- **Confiabilidade**: protege a malha interna através de circuit breakers e retries automáticos na entrada da rede.
- **Controle de custos**: centraliza políticas de cache na borda, diminuindo o número de chamadas que atingem os clusters internos.

## Conceitos fundamentais

### 1. Comece pelo menor corte funcional

Em vez de rotear centenas de serviços no gateway no primeiro dia, configure um corte vertical restrito. Para **API gateways para microsserviços**, isso significa configurar o roteamento, validação de token JWT e propagação de headers de telemetria para um único microsserviço essencial.

### 2. Amplie o caminho para o sucesso

Mantenha a camada de borda leve e focada em tarefas de infraestrutura, com tolerância a falhas padronizada:

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

1. Gere e propague identificadores de correlação (`X-Correlation-ID`) em todas as requisições roteadas.
2. Defina timeouts agressivos e circuit breakers específicos para cada rota downstream.
3. Teste o impacto da validação criptográfica de assinaturas JWT no throughput máximo do gateway.
4. Mantenha procedimentos documentados para saturação de memória do gateway, falhas de resolução DNS interna e erros 504.

## Erros comuns

> Evite transformar o gateway de API em um monólito distribuído incorporando regras pesadas de negócio no roteador. Um gateway enxuto e veloz sempre supera um intermediário sobrecarregado.

- Realizar consultas síncronas a bancos de dados diretamente dentro do processo do gateway.
- Expor stack traces internas e mensagens de erro não sanitizadas para clientes externos em respostas 5xx.
- Deixar de configurar métricas de latência p99 e contadores de conexão ativa no gateway.

## Conclusão

**API gateways para microsserviços** oferece uma fronteira segura e previsível para o ecossistema distribuído quando suas responsabilidades são mantidas estritamente focadas. Utilize o checklist sugerido, monitore os fluxos de tráfego a cada ciclo e mantenha sua malha de serviços protegida.
