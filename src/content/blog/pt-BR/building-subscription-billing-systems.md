---
title: "Construindo billing por assinatura"
description: "Trial, prorrata, cobrança e webhooks — um billing que o financeiro confia."
pubDate: 2024-09-12
author: "Girish Lade"
category: "SaaS Architecture"
readTime: 9
coverImage: "/blog-covers/saas-architecture.svg"
featured: false
tags: ["Billing", "Assinaturas", "Stripe"]
---

## Introdução

Como estruturar sistemas de cobrança recorrente, períodos de teste (trials), cálculos de prorrata em upgrades/downgrades, réguas de cobrança (dunning) e processamento idempotente de webhooks em que a equipe financeira possa confiar cegamente. Este artigo analisa os conceitos, armadilhas contábeis e um fluxo resiliente para pagamentos em produção.

## Por que isso importa

- **Velocidade de desenvolvimento**: o uso de contratos claros e eventos bem modelados impede que ajustes em planos de preços exijam refatorações completas no app.
- **Confiabilidade**: garante que falhas temporárias de rede não provoquem cobranças duplicadas em cartões de crédito de clientes.
- **Controle de custos**: a automação eficaz de réguas de dunning recupera receitas perdidas por cartões expirados ou saldo insuficiente (involuntary churn).

## Conceitos fundamentais

### 1. Comece pelo menor corte funcional

Antes de oferecer dezenas de combinações de cobrança por uso e tiers complexos, implemente o fluxo básico. Para **Construindo billing por assinatura**, isso significa integrar um único plano mensal com checkout hospedado, recebimento de webhooks com idempotência e registro de eventos.

### 2. Amplie o caminho para o sucesso

Garanta que todo manipulador de webhook processe eventos de forma estritamente idempotente, salvando o `event_id` processado antes de alterar o estado da conta:

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

1. Armazene a assinatura criptográfica dos webhooks e valide cada payload recebido antes de processar.
2. Registre transações financeiras em formato de livro-razão (ledger com partidas dobradas) para reconciliação contábil precisa.
3. Teste exaustivamente cenários de cartões recusados, chargebacks e expiração de períodos de teste em ambiente sandbox.
4. Mantenha procedimentos documentados para atrasos em repasses de gateway, falhas de webhook em lote e estornos manuais.

## Erros comuns

> Evite tentar calcular impostos complexos ou construir um motor interno de faturamento antes de ter tração comprovada. Provedores consolidados (Stripe, Lemon Squeezy) resolvem esses problemas com segurança e conformidade global.

- Tratar webhooks como síncronos e confiáveis na ordem de chegada, ignorando requisições fora de ordem ou duplicadas.
- Bloquear o acesso do cliente imediatamente no primeiro segundo de falha de pagamento, em vez de aplicar um período de carência (grace period).
- Não criar alertas para picos de falha de cobrança ou atrasos anormais no processamento da fila de eventos de pagamento.

## Conclusão

**Construindo billing por assinatura** exige precisão cirúrgica e respeito às regras contábeis para sustentar o fluxo de caixa da empresa. Aplique o checklist acima, torne um ponto do processo de cobrança à prova de falhas a cada semana e assegure a saúde financeira do seu negócio.
