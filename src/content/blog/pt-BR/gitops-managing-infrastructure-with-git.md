---
title: "GitOps: infra gerida com Git"
description: "Infra declarativa, review em PR, detecção de drift e sync automático."
pubDate: 2024-11-25
author: "Girish Lade"
category: "DevOps & CI/CD"
readTime: 9
coverImage: "/blog-covers/devops.svg"
featured: false
tags: ["GitOps", "ArgoCD", "Kubernetes"]
---

## Introdução

Como gerenciar a infraestrutura moderna de maneira declarativa tendo o repositório Git como fonte única da verdade (Single Source of Truth): fluxos de aprovação via Pull Request, detecção automática de desvios de configuração (drift detection) e reconciliação contínua com ArgoCD ou Flux. Este guia explora fundamentos, trade-offs e boas práticas para produção.

## Por que isso importa

- **Velocidade de desenvolvimento**: permite que desenvolvedores solicitem e alterem configurações de infraestrutura pelo fluxo familiar de revisão de código.
- **Confiabilidade**: previne alterações manuais desordenadas e reverte desvios não autorizados de volta ao estado versionado.
- **Controle de custos**: a rastreabilidade total de recursos versionados facilita o desligamento ordenado de ambientes efêmeros de teste.

## Conceitos fundamentais

### 1. Comece pelo menor corte funcional

Em vez de converter todos os clusters da companhia para GitOps em uma única tacada, inicie com uma aplicação não crítica. Para **GitOps: infra gerida com Git**, isso significa gerenciar o manifesto de um único Deployment com ArgoCD ou Flux com métricas ativas de sincronização.

### 2. Amplie o caminho para o sucesso

Adote validação automática de manifestos no CI (kubeconform), motores de política (Kyverno / OPA) e inicializadores resilientes:

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

1. Integre eventos de sincronização e reconciliação aos logs estruturados e canais de notificação do time.
2. Utilize operadores de gestão de segredos (como Sealed Secrets ou External Secrets Operator) para nunca commitar segredos abertos no Git.
3. Teste a resiliência do operador de sincronização sob falhas temporárias de conexão com o repositório Git.
4. Mantenha procedimentos documentados para resolver loops infinitos de sincronização, conflitos de CRD e falhas de RBAC.

## Erros comuns

> Evite criar teias de sobreposição de templates em Kustomize ou Helm que ninguém no time consiga ler ou depurar com facilidade. Manifestos limpos e explícitos superam abstrações hiper-complexas.

- Fazer edições emergenciais manuais com `kubectl edit` diretamente no cluster sem refletir a alteração no repositório Git.
- Misturar manifestos de produção e desenvolvimento na mesma branch sem controle rígido de tags e acessos.
- Não configurar alertas para aplicações em estado `SyncFailed` ou `OutOfSync` crônico.

## Conclusão

**GitOps: infra gerida com Git** eleva a gestão de infraestrutura ao mesmo patamar de rigor, automação e auditoria do desenvolvimento de software. Siga o checklist apresentado, torne um processo declarativo a cada sprint e garanta previsibilidade total em seus clusters.
