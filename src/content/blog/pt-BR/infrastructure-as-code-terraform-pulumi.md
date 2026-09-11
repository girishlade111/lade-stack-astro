---
title: "IaC com Terraform e Pulumi"
description: "HCL ou linguagem de verdade, state e desenho de módulos."
pubDate: 2024-12-01
author: "Girish Lade"
category: "DevOps & CI/CD"
readTime: 10
coverImage: "/blog-covers/devops.svg"
featured: false
tags: ["IaC", "Terraform", "Pulumi"]
---

## Introdução

Comparativo aprofundado entre a abordagem declarativa em HCL do Terraform e o uso de linguagens de programação reais (TypeScript, Python, Go) com o Pulumi, cobrindo gerenciamento de arquivos de estado (state management), modularização e governança de infraestrutura. Este guia analisa os prós, contras e modelos consolidados para uso em produção.

## Por que isso importa

- **Velocidade de desenvolvimento**: módulos reutilizáveis e tipados viabilizam o provisionamento de novos ambientes completos em poucos minutos.
- **Confiabilidade**: substitui configurações manuais propensas a falhas na console web por código testável e versionado.
- **Controle de custos**: a capacidade de criar e destruir ambientes sob demanda (`terraform destroy`) evita o esquecimento de recursos ociosos.

## Conceitos fundamentais

### 1. Comece pelo menor corte funcional

Em vez de tentar colocar todos os ativos corporativos em um único arquivo de estado monolítico, fatie por domínios de infraestrutura. Para **IaC com Terraform e Pulumi**, isso significa isolar a camada de rede (VPC), o cluster ou os buckets de armazenamento em módulos com estado independente e visibilidade clara.

### 2. Amplie o caminho para o sucesso

Incorpore validações estáticas automáticas (tflint, checkov), pré-visualizações em PRs e guardrails de tolerância a falhas:

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

1. Armazene o arquivo de estado em storage remoto seguro (S3/GCS) com criptografia em repouso e bloqueio concorrente (DynamoDB lock).
2. Nunca armazene senhas ou chaves privadas em texto plano no código de IaC.
3. Exija que a saída do `plan` ou `preview` seja postada automaticamente como comentário no PR de revisão.
4. Mantenha procedimentos documentados para liberar locks presos de estado, recuperar arquivos de estado corrompidos e importar recursos existentes.

## Erros comuns

> Evite criar módulos excessivamente dinâmicos e repletos de laços condicionais que dificultam a leitura e compreensão do plano de execução. Módulos simples e transparentes superam metaprogramação engenhosa.

- Acoplar centenas de recursos heterogêneos no mesmo arquivo de estado, tornando as execuções de plano excessivamente lentas e arriscadas.
- Realizar alterações emergenciais diretamente na console do provedor sem atualizar o código de IaC, causando desvios (drifts).
- Aprovar Pull Requests sem conferir minuciosamente alterações que impliquem destruição e recriação de recursos de banco.

## Conclusão

**IaC com Terraform e Pulumi** confere repetibilidade e confiança inestimáveis à gestão de infraestrutura de nuvem. Utilize o checklist acima, padronize seus módulos fundamentais a cada ciclo e mantenha sua infraestrutura sob controle absoluto.
