---
title: "Fine-tuning de LLMs por domínio"
description: "Quando tunar e quando só pedir; datasets e pipelines LoRA de baixo custo."
pubDate: 2024-08-18
author: "Girish Lade"
category: "Generative AI"
readTime: 11
coverImage: "/blog-covers/generative-ai.svg"
featured: false
tags: ["Fine-tuning", "LoRA", "LLM"]
---

## Introdução

Critérios objetivos para decidir entre engenharia de prompts e fine-tuning, estratégias para curadoria e higienização de datasets especializados e pipelines econômicos de adaptação de baixo posto (LoRA) para modelos de código aberto. Este guia detalha conceitos, infraestrutura computacional e práticas recomendadas para produção.

## Por que isso importa

- **Velocidade de desenvolvimento**: incorporar estilo e terminologia especializada diretamente nos pesos do modelo reduz o tamanho dos prompts e o custo de inferência.
- **Confiabilidade**: aumenta consideravelmente a precisão do modelo na emissão de estruturas rígidas como JSON com schemas estritos.
- **Controle de custos**: a técnica de LoRA permite treinar apenas uma fração dos parâmetros, diminuindo os custos de GPU em até 90% em comparação com o treinamento integral.

## Conceitos fundamentais

### 1. Comece pelo menor corte funcional

Antes de compilar dezenas de milhares de exemplos não revisados, monte um dataset enxuto e de alta qualidade com 100 a 200 exemplos. Para **Fine-tuning de LLMs por domínio**, isso significa treinar um adaptador LoRA simples e avaliar os ganhos frente ao modelo base desde o primeiro ciclo.

### 2. Amplie o caminho para o sucesso

Defina validações automáticas de schema, benchmarks determinísticos de avaliação e guardrails resilientes:

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

1. Assegure a separação rigorosa entre dados de treino, validação e teste para evitar contaminação de avaliação.
2. Versionar pesos de adaptadores no Model Registry atrelados ao commit exato do pipeline de dados.
3. Teste às cegas a acurácia do modelo ajustado versus o modelo base em um conjunto de avaliação realista.
4. Mantenha procedimentos documentados para falhas de alocação de GPU (OOM), lentidão de carregamento de adaptadores e respostas fora do schema.

## Erros comuns

> Evite partir para o fine-tuning antes de explorar a fundo o potencial da engenharia de prompts e técnicas de RAG. Uma boa injeção de contexto costuma superar modelos ajustados com dados medíocres.

- Utilizar dados de baixa qualidade ou gerados sinteticamente sem revisão, causando esquecimento catastrófico (catastrophic forgetting).
- Desconsiderar o aumento de latência na troca dinâmica de adaptadores LoRA em servidores de inferência.
- Deixar de monitorar a taxa de alucinações e o custo de tokens em produção após o deploy do modelo especializado.

## Conclusão

**Fine-tuning de LLMs por domínio** premia equipes que priorizam a qualidade curatorial dos dados em vez do volume bruto. Aplique o checklist acima, refine um subconjunto de dados a cada ciclo e desenvolva modelos altamente especializados e eficientes.
