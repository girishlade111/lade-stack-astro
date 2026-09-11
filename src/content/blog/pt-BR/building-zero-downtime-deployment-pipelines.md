---
title: "Deploys sem downtime"
description: "Blue-green, canary e rolling com health gates — deploys que ninguém percebe."
pubDate: 2024-11-28
author: "Girish Lade"
category: "DevOps & CI/CD"
readTime: 10
coverImage: "/blog-covers/devops.svg"
featured: true
tags: ["Deploys", "CI/CD", "Confiabilidade"]
---

## Introdução

Estratégias de implantação contínua Blue-Green, Canary Releases e Rolling Updates protegidas por sondas de verificação (readiness e liveness probes) e health gates para deploys totalmente imperceptíveis aos usuários. Este artigo discute os conceitos centrais, trade-offs arquiteturais e um pipeline prático e seguro para aplicar em produção.

## Por que isso importa

- **Velocidade de desenvolvimento**: libera os times da restrição de fazer deploys apenas nas madrugadas ou finais de semana.
- **Confiabilidade**: garante que versões instáveis sejam automaticamente isoladas antes de afetarem o tráfego global.
- **Controle de custos**: a mitigação rápida de falhas via rollback automático poupa centenas de horas de engenharia e chamados de suporte.

## Conceitos fundamentais

### 1. Comece pelo menor corte funcional

Em vez de reconstruir todos os pipelines da organização de uma só vez, configure o fluxo seguro em um serviço isolado. Para **Deploys sem downtime**, isso significa configurar um pipeline com verificação de prontidão (readiness probe) e rollback automático para um único microsserviço com métricas ativas.

### 2. Amplie o caminho para o sucesso

Prefira automações, gates de tráfego declarativos e mecanismos de tolerância a falhas em vez de intervenções manuais:

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

1. Integre o rastreamento da versão do commit aos logs estruturados e cabeçalhos de resposta HTTP.
2. Adote o padrão expand-contract para migrações de banco de dados, garantindo compatibilidade entre versões N e N+1.
3. Teste o encerramento gracioso (graceful shutdown) dos pods garantindo a conclusão de requisições em andamento antes da finalização do processo.
4. Redija procedimentos claros para rollbacks manuais forçados, dessincronizações de DNS e falhas em migrações de dados.

## Erros comuns

> Evite adotar malhas de serviço complexas ou orquestrações mirabolantes antes de dominar os fundamentos de encerramento gracioso e health checks. Uma estratégia rolling bem configurada é superior a uma arquitetura canary disfuncional.

- Cortar o tráfego abruptamente de instâncias antigas sem esperar o esvaziamento das conexões ativas (connection draining).
- Executar migrações destrutivas de schema de banco no mesmo passo do deploy de código novo.
- Não definir alertas imediatos para aumentos na taxa de erros HTTP 502/503 ou lentidão anormal pós-deploy.

## Conclusão

**Deploys sem downtime** fortalece a maturidade operacional das equipes de tecnologia, transformando lançamentos em eventos rotineiros e tranquilos. Comece pelo checklist sugerido, elimine as incertezas do processo a cada ciclo e mantenha seus serviços sempre disponíveis.
