---
title: "GitOps: Git으로 인프라 관리하기"
description: "선언적 인프라, PR 리뷰, 드리프트 감지, 자동 동기화."
pubDate: 2024-11-25
author: "Girish Lade"
category: "DevOps & CI/CD"
readTime: 9
coverImage: "/blog-covers/devops.svg"
featured: false
tags: ["GitOps", "Kubernetes", "DevOps"]
---

## 소개

Git 저장소를 단일 진실 공급원(Single Source of Truth)으로 삼기: 선언적 인프라 정의, 풀 리퀘스트(PR) 기반의 엄격한 코드 리뷰, 자동 드리프트 감지(Drift Detection), 그리고 클러스터로의 자동 동기화까지. 본 글에서는 핵심 개념, 아키텍처적 트레이드오프, 그리고 이번 주에 바로 팀에 적용할 수 있는 프로덕션 수준의 워크플로를 다룹니다.

## 왜 중요한가

- **개발자 생산성 향상**: 익숙한 Git 워크플로를 통해 인프라 변경을 요청하고 승인받을 수 있어 운영 병목을 해소합니다.
- **시스템 신뢰성 확보**: 모든 인프라 변경 이력이 커밋 로그로 기록되어 장애 발생 시 수 초 만에 이전 상태로 안전하게 롤백할 수 있습니다.
- **비용 통제**: 클라우드 웹 콘솔에서 수동으로 생성하고 방치해 둔 유령 리소스를 원천 차단하고 모든 자원을 코드로 추적합니다.

## 핵심 개념

### 1. 가장 작은 동작 단위에서 시작하기

모든 클러스터에 한 번에 GitOps 컨트롤러를 배포하기보다, 엔드투엔드로 동작하는 수직 슬라이스 하나를 먼저 완성하십시오. **GitOps: Git으로 인프라 관리하기**의 관점에서는 단일 개발 네임스페이스를 대상으로 ArgoCD나 Flux를 연동하고 첫날부터 동기화 상태 가시성을 확보하는 것을 의미합니다.

### 2. 성공의 함정을 넓게 파두기

엔지니어들에게 클러스터 어드민 kubeconfig를 배포하지 말고, 컨트롤러가 변경 사항을 가져가는 풀(Pull) 기반 배포 모델을 표준화하십시오. 프로덕션 환경을 위한 스타터 예시:

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

### 3. 본질적인 지표 측정하기

| 지표 | 권장 시작 목표치 |
| --- | --- |
| p95 응답 지연 시간 | < 300 ms |
| 에러 버짓 소진율 | < 2% / 30 일 |
| 배포 빈도 | 매일 (Daily) |
| 롤백 소요 시간 | < 10 분 |

## 프로덕션 체크리스트

1. Git 커밋 SHA와 동기화 상태가 포함된 구조화된 감사 로그를 수집합니다.
2. 긴급 작업 시 자동 동기화를 일시 중단할 수 있는 서스펜드(Suspend) 플래그를 마련합니다.
3. 정식 런칭 전에 클러스터 리소스를 수동 변경했을 때 GitOps 엔진이 원래대로 자동 복구(Self-Healing)하는지 검증합니다.
4. 발생 빈도가 높은 상위 3가지 장애 시나리오(동기화 루프 오류, CRD 버전 충돌, Helm 저장소 접근 실패)에 대한 런북(Runbook)을 작성합니다.

## 흔한 실수와 주의점

> 실제 사용자를 확보하기 전에 플랫폼을 과도하게 설계하지 마십시오. 초기에 선택한 화려한 기술보다 적재적소에 잘 고른 지루하고 검증된 기술이 언제나 승리합니다.

- 긴급 상황이라는 이유로 프로덕션 클러스터에서 kubectl edit을 직접 실행하여 다음 Git 동기화 때 덮어씌워지는 사고.
- 비밀번호나 API 키를 평문 그대로 Git 저장소에 커밋하는 행위(Sealed Secrets나 외부 Vault를 반드시 사용해야 함).
- 새벽 3시에 온콜 엔지니어를 깨워야 하는 지속적 드리프트 상태 방치 알림 누락.

## 결론

**GitOps: Git으로 인프라 관리하기**는 작고 명확하게 관측 가능한 단위로 기민하게 반복하는 엔지니어링 팀에 큰 보상을 안겨줍니다. 위의 체크리스트를 시작점으로 삼아 매주 하나의 병목을 자동화하고 시스템의 완성도를 높여가십시오.
