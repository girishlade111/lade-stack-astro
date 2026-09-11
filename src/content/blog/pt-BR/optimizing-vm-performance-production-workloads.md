---
title: "Tuning de VMs em produção"
description: "CPU pinning, NUMA, filas de storage e defesa contra vizinho barulhento."
pubDate: 2024-11-22
author: "Girish Lade"
category: "Virtual Machines"
readTime: 9
coverImage: "/blog-covers/virtual-machines.svg"
featured: false
tags: ["VMs", "Performance", "Tuning"]
---

## Introdução

Estratégias de otimização de baixo nível para obter performance previsível e baixa latência em máquinas virtuais: fixação de vCPU em núcleos físicos (CPU pinning), alinhamento com a topologia NUMA, ajuste de profundidade de filas de I/O em storage e isolamento contra interferência de vizinhos barulhentos (noisy neighbors). Este artigo examina técnicas avançadas e parâmetros recomendados para produção.

## Por que isso importa

- **Velocidade de desenvolvimento**: sistemas estáveis evitam que os engenheiros passem horas depurando degradações misteriosas de tempo de resposta.
- **Confiabilidade**: elimina picos de latência no p99 causados por trocas frequentes de contexto e contenção de barramento de memória.
- **Controle de custos**: extrai a capacidade máxima dos hosts contratados, evitando a necessidade de migrar para planos de instâncias mais caros.

## Conceitos fundamentais

### 1. Comece pelo menor corte funcional

Antes de aplicar dezenas de parâmetros de kernel em todas as instâncias, teste em uma VM dedicada a um serviço crítico. Para **Tuning de VMs em produção**, isso significa configurar CPU pinning e alinhamento NUMA no nó principal de banco de dados ou Redis com observabilidade ativa.

### 2. Amplie o caminho para o sucesso

Defina configurações de sistema automatizadas (via perfis `tuned` ou scripts sysctl) e adote inicializadores resilientes:

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

1. Monitore continuamente as métricas de CPU steal time e tempo de espera em filas de I/O de disco.
2. Selecione o escalonador de I/O mais adequado para discos SSD/NVMe (como `none` ou `mq-deadline`).
3. Execute testes sintéticos de benchmarking (utilizando `fio` e `sysbench`) sob condições de estresse antes de liberar o nó para tráfego real.
4. Mantenha procedimentos documentados para travamentos de I/O, fragmentação severa de memória e saturação de largura de banda de rede.

## Erros comuns

> Evite alterar parâmetros de kernel de forma cega sem estabelecer linhas de base (baselines) rigorosas antes e depois da modificação. Medições empíricas sempre superam palpites teóricos.

- Alocar instâncias virtuais com topologia de memória que cruza nós NUMA sem o devido alinhamento do processo.
- Utilizar instâncias do tipo burstable (com créditos de CPU) para bancos de dados de produção em carga sustentada.
- Não configurar alertas para aumentos súbitos de CPU steal time que indicam contenção no hipervisor da nuvem.

## Conclusão

**Tuning de VMs em produção** transforma instâncias virtuais ordinárias em motores de computação de altíssima confiabilidade e consistência. Utilize o checklist sugerido, meça os ganhos de latência a cada ajuste e entregue a melhor performance para suas aplicações.
