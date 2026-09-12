---
title: "SaaS multi-tenant: padrões"
description: "Silo, pool e bridge: isolamento, custo e escala comparados."
pubDate: 2024-09-01
author: "Girish Lade"
category: "SaaS Architecture"
readTime: 11
coverImage: "/blog-covers/saas-architecture.svg"
featured: true
tags: ["Multi-Tenant", "SaaS", "Arquitetura"]
---

## Introdução

Comparativo arquitetural detalhado entre os modelos de Silo (isolamento total de recursos), Pool (recursos totalmente compartilhados) e Bridge (modelo híbrido), analisando trade-offs de isolamento de dados, custo de infraestrutura e conformidade regulatória. Este guia apresenta os conceitos centrais e fluxos práticos para arquiteturas SaaS em produção.

## Por que isso importa

- **Velocidade de desenvolvimento**: modelos de dados consistentes permitem provisionar novos tenants e recursos sem intervenções manuais na infraestrutura.
- **Confiabilidade**: impede que o consumo desenfreado de um único cliente (problema do noisy neighbor) degrade a performance de todos os outros.
- **Controle de custos**: a abordagem em pool viabiliza alta densidade de tenants, reduzindo drasticamente os custos fixos de banco de dados e computação.

## Conceitos fundamentais

### 1. Comece pelo menor corte funcional

Antes de construir sistemas complexos de sharding automático, inicie com um corte vertical simples. Para **SaaS multi-tenant: padrões**, isso significa implementar isolamento a nível de linha (Row-Level Security - RLS) com `tenant_id` obrigatório em um único schema de banco de dados com observabilidade ativa.

### 2. Amplie o caminho para o sucesso

Prefira injeção automática de contexto de tenant via middlewares e guardrails nativos em vez de depender da disciplina manual de queries:

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

1. Configure Row-Level Security (RLS) e índices compostos iniciados por `tenant_id` em todas as tabelas compartilhadas.
2. Propague o identificador do tenant em todos os spans de telemetria e registros de log estruturados.
3. Simule cargas extremas em um único tenant para verificar a proteção de capacidade e limites de taxa no pool.
4. Mantenha procedimentos documentados para migração de tenants entre o modelo pool e bancos de dados dedicados (silos).

## Erros comuns

> Evite provisionar bancos de dados ou clusters dedicados para cada cliente antes de atingir dezenas de contratos enterprise reais. Começar simples com isolamento lógico vence a sobrecarga operacional prematura.

- Executar consultas manuais no banco sem a cláusula de filtro por tenant por falha no ORM.
- Compartilhar caches em memória sem prefixar chaves com o identificador do tenant, causando vazamento de dados entre clientes.
- Deixar de monitorar a distribuição de carga e o consumo de disco por tenant no banco compartilhado.

## Conclusão

**SaaS multi-tenant: padrões** oferece o equilíbrio perfeito entre agilidade de negócio e eficiência de custos quando construído sobre fundamentos claros de isolamento. Comece pelo checklist sugerido, aprimore suas fronteiras de tenant a cada sprint e escale com segurança.
