---
title: "Monitorando sistemas de IA em prod"
description: "Qualidade, drift, custo e latência das features de IA — com evals e guardrails."
pubDate: 2024-12-08
author: "Girish Lade"
category: "AI Production Systems"
readTime: 10
coverImage: "/blog-covers/ai-production.svg"
featured: false
tags: ["Monitoramento", "LLM", "Observabilidade"]
---

## Introdução

Como monitorar sistemas de Inteligência Artificial e aplicações baseadas em LLM em produção: acompanhamento contínuo de qualidade de resposta, detecção de desvios (drift) semânticos, controle de custos por token e mitigação de latência p99 com guardrails e avaliações contínuas (evals). Este artigo aborda métricas vitais e estratégias práticas para o ambiente real.

## Por que isso importa

- **Velocidade de desenvolvimento**: alerta os times sobre degradações de resposta antes que os usuários comecem a registrar reclamações.
- **Confiabilidade**: bloqueia na borda tentativas de injeção de prompt e emissão de respostas tóxicas ou fora dos limites éticos definidos.
- **Controle de custos**: a visibilidade do consumo de tokens por usuário e por feature previne faturas surpresa no final do mês.

## Conceitos fundamentais

### 1. Comece pelo menor corte funcional

Em vez de monitorar dezenas de métricas teóricas ao mesmo tempo, foque na feature de IA mais utilizada. Para **Monitorando sistemas de IA em prod**, isso significa registrar latência, contagem de tokens de entrada/saída e feedback binário dos usuários (thumbs up/down) para um único endpoint de geração.

### 2. Amplie o caminho para o sucesso

Implemente tracing distribuído com OpenTelemetry, guardrails de validação estruturada e inicializadores resilientes:

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

1. Propague request IDs e registre o modelo exato e contadores de tokens em cada chamada à API de IA.
2. Adicione guardrails leves para detecção de dados pessoais sensíveis (PII) e prevenção de injeção de prompt.
3. Teste o comportamento do sistema diante de limites de requisição por minuto (rate limits) e timeouts do provedor de LLM.
4. Mantenha procedimentos documentados para surtos de erros de API do provedor, picos orçamentários e desvios graves de qualidade.

## Erros comuns

> Evite adicionar avaliadores assíncronos excessivamente pesados que atrasem o fluxo de resposta para o cliente final. A telemetria deve ser invisível e não comprometer a experiência do usuário.

- Gravar prompts de usuários e respostas do modelo em texto plano sem higienização prévia de dados confidenciais.
- Deixar de acompanhar o drift semântico silencioso quando as distribuições de perguntas dos usuários mudam.
- Não configurar alertas automáticos para anomalias horárias no consumo financeiro da API de LLM.

## Conclusão

**Monitorando sistemas de IA em prod** estabelece uma operação saudável e previsível sobre modelos probabilísticos em ambientes corporativos. Siga o checklist apresentado, ative métricas essenciais a cada sprint e ofereça recursos de IA seguros e eficientes.
