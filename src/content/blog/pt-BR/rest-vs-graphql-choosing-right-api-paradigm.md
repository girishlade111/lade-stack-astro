---
title: "REST vs GraphQL: o que escolher"
description: "Um framework de decisão via versionamento, cache, payloads e velocidade do time."
pubDate: 2024-10-28
relatedApps: ["api-testing"]
author: "Girish Lade"
category: "API Design & Scaling"
readTime: 9
coverImage: "/blog-covers/api-design.svg"
featured: false
tags: ["REST", "GraphQL", "Design de APIs"]
---

## Introdução

Framework estruturado de decisão entre REST e GraphQL avaliando estratégias de versionamento, eficiência de cache em CDNs, impacto no tamanho dos payloads e velocidade de entrega dos times. Este guia examina os pontos fortes, limitações operacionais e boas práticas aplicáveis em produção.

## Por que isso importa

- **Velocidade de desenvolvimento**: estabelece contratos estáveis entre frontend e backend, reduzindo reuniões e alinhamentos constantes de endpoints.
- **Confiabilidade**: previne sobrecarga desnecessária no banco de dados ao limitar a profundidade de consultas aninhadas.
- **Controle de custos**: maximiza taxas de acerto de cache HTTP em borda e otimiza o consumo de dados móveis por clientes finais.

## Conceitos fundamentais

### 1. Comece pelo menor corte funcional

Antes de reescrever todas as interfaces da empresa em uma nova tecnologia, experimente em um corte vertical específico. Para **REST vs GraphQL: o que escolher**, isso significa expor uma entidade com relacionamentos complexos em GraphQL ou REST com observabilidade e métricas de latência ativas.

### 2. Amplie o caminho para o sucesso

Defina tipagem rígida, schemas compartilhados e inicializadores resilientes em qualquer paradigma escolhido:

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

1. Propague `X-Request-ID` em todas as requisições de API para rastreabilidade de ponta a ponta.
2. Adicione limites de profundidade (query depth limiting) e custo em servidores GraphQL para impedir queries destrutivas.
3. Teste o comportamento do cache HTTP (`Cache-Control`, `ETag`) para endpoints REST públicos antes do lançamento.
4. Mantenha procedimentos documentados para resolver conflitos de schema, quedas no gateway de API e queries N+1.

## Erros comuns

> Evite adotar GraphQL exclusivamente para contornar problemas de comunicação entre times de frontend e backend. A disciplina de design de endpoints é essencial em qualquer paradigma.

- Esquecer o uso de DataLoaders no GraphQL, disparando dezenas de queries desnecessárias ao banco para cada nó retornado.
- Ignorar cabeçalhos de cache padrão do HTTP no REST, forçando processamento no servidor para dados altamente estáticos.
- Não monitorar métricas de tempo de execução de resolvers e latência no banco de dados.

## Conclusão

**REST vs GraphQL: o que escolher** demonstra que a melhor decisão decorre das necessidades do consumidor da API e da infraestrutura de cache disponível. Siga o checklist apresentado, aprimore o design de contratos a cada ciclo e mantenha suas APIs rápidas e manuteníveis.
