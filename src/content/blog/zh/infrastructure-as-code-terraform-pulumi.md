---
title: "Terraform 与 Pulumi 写 IaC"
description: "HCL 还是通用语言？状态管理、模块设计一次讲透。"
pubDate: 2024-12-01
author: "Girish Lade"
category: "DevOps & CI/CD"
readTime: 10
coverImage: "/blog-covers/devops.svg"
featured: false
tags: ["IaC", "Terraform", "Pulumi"]
---

## 引言

是选择专有领域语言 HCL，还是借助 TypeScript/Python 等通用全功能编程语言？从远程状态管理锁、模块化抽象设计到持续集成环境中的自动化预览：深入对比 Terraform 与 Pulumi，给出企业级 IaC（基础设施即代码）的选型实践与工程闭环。

## 为什么这至关重要

- **研发效能（Developer Velocity）**：将云端基础设施以代码形式组织，让团队能够通过复用模块在数分钟内复刻一套完整的集成测试环境。
- **系统可靠性（Reliability）**：在每次执行真实 apply 之前强制执行计划（Plan/Preview）校验，消除人为误操作导致生产瘫痪的风险。
- **成本可控（Cost Control）**：通过静态代码扫描工具（如 Infracost）在 PR 阶段精确预测云资源账单涨幅，前置扼杀成本黑洞。

## 核心概念

### 1. 从最小可用闭环起步

在决定将全司历史基建全量逆向导入 IaC 之前，先打通一条端到端的垂直闭环。针对**Terraform 与 Pulumi 写 IaC**而言，这意味着先为一个独立的 VPC 网络或 S3 存储桶建立远程状态存储后端与 CI 自动预览流水线。

### 2. 拓宽“成功之坑”

与其让每个工程师从头手写云资源声明，不如构建经过安全加固的标准公司内部模块库。生产级极简初始配置示例：

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

### 3. 衡量真正关键的指标

| 指标 | 建议初始目标 |
| --- | --- |
| p95 延迟 | < 300 ms |
| 错误预算消耗 | < 2% / 30 天 |
| 发布频率 | 每天 (Daily) |
| 回滚耗时 | < 10 分钟 |

## 生产就绪检查清单

1. 接入带有执行者身份与状态文件哈希的远程状态锁定与审计日志。
2. 针对销毁操作（Destroy）与敏感网络改动设置强行阻断与多重审批门禁。
3. 在合并主分支前，执行 IaC 代码的安全漏洞合规静态扫描（如 tfsec/Checkov）。
4. 为 Top 3 常见 IaC 故障（如状态文件被死锁、资源命名冲突、依赖拓扑循环）制定完备的操作手册（Runbook）。

## 常见避坑指南

> 别在连真实用户都没有的时候就过度设计底层架构。选得好且经过时间检验的“无聊技术”，远胜过过早引入的炫技方案。

- 将全量基础设施写在单个庞大的单体状态文件中，导致单次 plan 耗时长达数十分钟。
- 未配置远程状态锁（如 DynamoDB Lock），造成多人并发 apply 导致状态文件损坏。
- 在状态文件中明文存储敏感密码，且未配置后端加密与访问控制。

## 结语

**Terraform 与 Pulumi 写 IaC** 更青睐那些坚持小步迭代、步步可观测的工程团队。不妨从上述检查清单开始，每周自动化解决一个痛点，持续复利现代基础设施的工程纪律。
